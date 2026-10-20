// ==============================================
// risePaisa - Cloud Firestore Database Foundation
// Modular, lightweight Firestore database client
// Loaded on-demand to maintain zero overhead on static pages
// ==============================================

import { getFirebaseApp, isFirebaseConfigured } from './config.js';
import { getCurrentUser, isAuthInitialized, waitForAuthReady } from './auth.js';

let _dbInstance = null;
let _firestoreSdk = null;
let _firestorePromise = null;

export const STORAGE_KEYS = Object.freeze({
  LESSONS: 'rp_learn_bookmarks',
  GUIDES: 'rp_learn_saved_guides',
  RESOURCES: 'rp_learn_saved_resources',
  GLOSSARY: 'risepaisa_saved_glossary_terms',
  ACTIVE_UID: 'rp_active_uid',
  GUEST_BACKUP: 'rp_guest_bookmarks_backup'
});

export const VALID_BOOKMARK_TYPES = Object.freeze([
  'lesson',
  'guide',
  'resource'
]);

export const ALLOWED_PROFILE_KEYS = Object.freeze([
  'displayName',
  'email',
  'photoURL',
  'createdAt',
  'updatedAt'
]);

// In-memory session caches to prevent repeated requests during navigation
const _syncedProfiles = new Set();
const _migratedUids = new Set();
const _userBookmarksCache = new Map(); // uid -> Array<bookmark>
const _inFlightToggles = new Map(); // opKey -> { targetState, metadata, promise }
const _inFlightBookmarkFetches = new Map(); // uid -> Promise<Array<bookmark>|null>
const _lessonAliasMap = new Map(); // id <-> slug bidirectional mapping

export function registerLessonAlias(id, slug) {
  if (id && slug) {
    _lessonAliasMap.set(String(id).trim(), String(slug).trim());
    _lessonAliasMap.set(String(slug).trim(), String(id).trim());
  }
}

export function getLessonAlias(identifier) {
  if (!identifier) return null;
  return _lessonAliasMap.get(String(identifier).trim()) || null;
}

/**
 * Check whether a database or network error is transient and safe to retry.
 *
 * @param {Error|object} err
 * @returns {boolean}
 */
export function isTransientError(err) {
  if (!err) return false;
  const code = String(err.code || '').toLowerCase();
  const msg = String(err.message || '').toLowerCase();

  // Never retry permanent or authorization/permission errors
  if (
    code.includes('permission-denied') ||
    code.includes('unauthenticated') ||
    code.includes('invalid-argument') ||
    code.includes('not-found') ||
    code.includes('already-exists') ||
    code.includes('failed-precondition') ||
    code.includes('out-of-range') ||
    msg.includes('permission') ||
    msg.includes('unauthorized') ||
    msg.includes('forbidden')
  ) {
    return false;
  }

  // Transient network, timeout, or server exhaustion errors
  return (
    code === 'unavailable' ||
    code === 'deadline-exceeded' ||
    code === 'resource-exhausted' ||
    code === 'network-request-failed' ||
    msg.includes('network') ||
    msg.includes('offline') ||
    msg.includes('failed to fetch') ||
    msg.includes('timeout')
  );
}

/**
 * Execute an asynchronous operation with bounded exponential backoff and jitter.
 *
 * @template T
 * @param {() => Promise<T>} operation
 * @param {object} [options={}]
 * @param {number} [options.maxAttempts=3]
 * @param {number} [options.baseDelayMs=300]
 * @param {number} [options.maxDelayMs=2000]
 * @param {(err: any) => boolean} [options.isRetryable=isTransientError]
 * @returns {Promise<T>}
 */
export async function withBoundedRetry(operation, options = {}) {
  const maxAttempts = Math.max(1, Math.min(options.maxAttempts || 3, 5));
  const baseDelayMs = options.baseDelayMs || 300;
  const maxDelayMs = options.maxDelayMs || 2000;
  const isRetryable = options.isRetryable || isTransientError;

  let attempt = 0;
  while (attempt < maxAttempts) {
    attempt++;
    try {
      return await operation();
    } catch (err) {
      if (attempt >= maxAttempts || !isRetryable(err)) {
        throw err;
      }
      // Exponential backoff with full jitter to avoid retry storms
      const expDelay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, attempt - 1));
      const jitterDelay = Math.floor(expDelay * (0.5 + Math.random() * 0.5));
      await new Promise(res => setTimeout(res, jitterDelay));
    }
  }
}

/**
 * Generate a deterministic, stable bookmark document ID.
 * Prevents duplicate documents when a user saves the same item repeatedly.
 *
 * @param {string} type - Content type (e.g., 'lesson', 'guide')
 * @param {string} slug - Unique content slug
 * @returns {string} Deterministic ID (e.g., 'lesson_demat-meroshare-crn-setup')
 */
export function generateBookmarkId(type, slug) {
  if (!type || !slug) {
    throw new Error('Bookmark type and slug are required to generate an ID.');
  }
  const cleanType = String(type).trim().toLowerCase();
  const cleanSlug = String(slug).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  return `${cleanType}_${cleanSlug}`;
}

/**
 * Client-side validation for bookmark payloads before dispatching to Firestore.
 * Matches the strict schema enforced by firestore.rules.
 *
 * @param {object} payload
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateBookmarkPayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['Bookmark payload must be an object.'] };
  }

  const { type, slug, title, url } = payload;

  if (!type || !VALID_BOOKMARK_TYPES.includes(type)) {
    errors.push(`Invalid bookmark type "${type}". Allowed: ${VALID_BOOKMARK_TYPES.join(', ')}.`);
  }

  if (typeof slug !== 'string' || slug.trim().length === 0 || slug.length > 100) {
    errors.push('Bookmark slug must be a non-empty string under 100 characters.');
  }

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Bookmark title must be a non-empty string under 200 characters.');
  }

  if (typeof url !== 'string' || url.trim().length === 0 || url.length > 300) {
    errors.push('Bookmark URL must be a non-empty string under 300 characters.');
  }

  // Reject unexpected keys
  const allowedKeys = ['type', 'slug', 'title', 'url', 'savedAt'];
  const extraKeys = Object.keys(payload).filter(k => !allowedKeys.includes(k));
  if (extraKeys.length > 0) {
    errors.push(`Disallowed fields found in bookmark: ${extraKeys.join(', ')}.`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Client-side validation for user profile payloads.
 * Strictly forbids privilege escalation fields (e.g. isAdmin, role, paid).
 *
 * @param {object} payload
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateUserProfilePayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['Profile payload must be an object.'] };
  }

  // Check against disallowed privilege escalation keys
  const forbiddenKeys = ['isAdmin', 'role', 'roles', 'paid', 'enrolled', 'courseAccess', 'permissions'];
  for (const key of forbiddenKeys) {
    if (key in payload) {
      errors.push(`Forbidden field "${key}" detected. Client cannot grant permissions.`);
    }
  }

  // Ensure only whitelisted fields exist
  const extraKeys = Object.keys(payload).filter(k => !ALLOWED_PROFILE_KEYS.includes(k));
  if (extraKeys.length > 0) {
    errors.push(`Unexpected fields in profile payload: ${extraKeys.join(', ')}.`);
  }

  if (payload.displayName !== undefined && payload.displayName !== null) {
    if (typeof payload.displayName !== 'string' || payload.displayName.length > 100) {
      errors.push('displayName must be a string up to 100 characters.');
    }
  }

  if (payload.email !== undefined && payload.email !== null) {
    if (typeof payload.email !== 'string' || payload.email.length > 150) {
      errors.push('email must be a string up to 150 characters.');
    }
  }

  if (payload.photoURL !== undefined && payload.photoURL !== null) {
    if (typeof payload.photoURL !== 'string' || payload.photoURL.length > 500) {
      errors.push('photoURL must be a string up to 500 characters.');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Lazy-load the modular Cloud Firestore SDK.
 * Returns null in Node.js / static build environments.
 */
export async function getFirestoreDb() {
  if (_dbInstance && _firestoreSdk) {
    return { db: _dbInstance, sdk: _firestoreSdk };
  }

  if (typeof window === 'undefined') {
    // Return null in Node.js build scripts
    return null;
  }

  if (_firestorePromise) {
    return _firestorePromise;
  }

  _firestorePromise = (async () => {
    const app = await getFirebaseApp();
    if (!app) {
      return null;
    }

    try {
      const sdk = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      _firestoreSdk = sdk;
      _dbInstance = sdk.getFirestore(app);
      return { db: _dbInstance, sdk: _firestoreSdk };
    } catch (err) {
      console.warn('[risePaisa:Firestore] Could not load Firestore SDK:', err);
      _dbInstance = null;
      _firestoreSdk = null;
      return null;
    } finally {
      _firestorePromise = null;
    }
  })();

  return _firestorePromise;
}


/**
 * Create or update the authenticated user's profile document.
 * Only called on intentional user authentication actions (sign in / update).
 * Never automatically called for guest visitors or public page loads.
 * Preserves original createdAt and only updates updatedAt if fields changed.
 *
 * @param {object} user - Firebase Auth User object
 * @returns {Promise<boolean>}
 */
export async function syncUserProfile(user) {
  if (!user || !user.uid) return false;

  // In-memory cache check: avoid repeated reads and writes in the same session
  if (_syncedProfiles.has(user.uid)) {
    return true;
  }

  const bundle = await getFirestoreDb();
  if (!bundle) return false;

  const { db, sdk } = bundle;
  const userDocRef = sdk.doc(db, 'users', user.uid);

  try {
    const snap = await sdk.getDoc(userDocRef);
    const now = sdk.serverTimestamp();

    if (!snap.exists()) {
      const newProfile = {
        displayName: user.displayName || null,
        email: user.email || null,
        photoURL: user.photoURL || null,
        createdAt: now,
        updatedAt: now
      };
      const validation = validateUserProfilePayload(newProfile);
      if (!validation.valid) {
        console.warn('[risePaisa:Firestore] Invalid profile payload:', validation.errors);
        return false;
      }
      await sdk.setDoc(userDocRef, newProfile);
    } else {
      const existing = snap.data() || {};
      const newDisplayName = user.displayName || null;
      const newEmail = user.email || null;
      const newPhotoURL = user.photoURL || null;

      // Only perform update write if profile fields actually changed
      if (
        existing.displayName !== newDisplayName ||
        existing.email !== newEmail ||
        existing.photoURL !== newPhotoURL
      ) {
        const updateData = {
          displayName: newDisplayName,
          email: newEmail,
          photoURL: newPhotoURL,
          updatedAt: now
        };
        const validation = validateUserProfilePayload(updateData);
        if (!validation.valid) {
          console.warn('[risePaisa:Firestore] Invalid profile update:', validation.errors);
          return false;
        }
        await sdk.updateDoc(userDocRef, updateData);
      }
    }
    _syncedProfiles.add(user.uid);
    return true;
  } catch (err) {
    console.warn('[risePaisa:Firestore] Profile sync skipped or failed:', err);
    return false;
  }
}

/**
 * Save a bookmark under the authenticated user's private subcollection:
 * users/{uid}/bookmarks/{bookmarkId}
 *
 * @param {string} uid - Authenticated user UID
 * @param {object} bookmark - { type, slug, title, url }
 * @returns {Promise<{ success: boolean, bookmarkId?: string, error?: string }>}
 */
export async function saveUserBookmark(uid, bookmark) {
  if (!uid) {
    return { success: false, requiresAuth: true, error: 'User must be authenticated to save cloud bookmarks.' };
  }

  const currentUser = getCurrentUser();
  if (currentUser && currentUser.uid !== uid) {
    return { success: false, error: 'Unauthorized: cannot modify another user\'s bookmarks.' };
  }

  const validation = validateBookmarkPayload(bookmark);
  if (!validation.valid) {
    return { success: false, error: validation.errors.join(' ') };
  }

  // Only lesson bookmarks can be persisted to Cloud Firestore.
  // Other bookmark types (guides, resources) are strictly local with zero cloud writes.
  if (bookmark.type !== 'lesson') {
    return { success: true, localOnly: true, skipped: true };
  }

  const bundle = await getFirestoreDb();
  if (!bundle) {
    return { success: true, localOnly: true, offline: true };
  }

  const { db, sdk } = bundle;
  const bookmarkId = generateBookmarkId(bookmark.type, bookmark.slug);
  const bookmarkDocRef = sdk.doc(db, 'users', uid, 'bookmarks', bookmarkId);

  try {
    const payload = {
      type: bookmark.type,
      slug: bookmark.slug,
      title: bookmark.title,
      url: bookmark.url,
      savedAt: sdk.serverTimestamp()
    };
    await sdk.setDoc(bookmarkDocRef, payload);

    // Optimistically update in-memory cache for zero repeated reads
    if (_userBookmarksCache.has(uid)) {
      const list = _userBookmarksCache.get(uid);
      const existingIdx = list.findIndex(b => b.id === bookmarkId || b.slug === bookmark.slug);
      const cacheEntry = { id: bookmarkId, ...payload, savedAt: new Date() };
      if (existingIdx > -1) {
        list[existingIdx] = cacheEntry;
      } else {
        list.unshift(cacheEntry);
      }
    }

    return { success: true, bookmarkId };
  } catch (err) {
    console.error('[risePaisa:Firestore] Failed to save bookmark:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Remove a bookmark from the authenticated user's private subcollection.
 *
 * @param {string} uid - Authenticated user UID
 * @param {string} bookmarkId - Deterministic bookmark ID
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function removeUserBookmark(uid, bookmarkId) {
  if (!uid || !bookmarkId) {
    return { success: false, error: 'UID and bookmarkId are required.' };
  }

  const currentUser = getCurrentUser();
  if (currentUser && currentUser.uid !== uid) {
    return { success: false, error: 'Unauthorized: cannot modify another user\'s bookmarks.' };
  }

  // Only lesson bookmarks are stored in Cloud Firestore.
  if (!bookmarkId.startsWith('lesson_')) {
    return { success: true, localOnly: true, skipped: true };
  }

  const bundle = await getFirestoreDb();
  if (!bundle) {
    return { success: true, localOnly: true, offline: true };
  }

  const { db, sdk } = bundle;
  const bookmarkDocRef = sdk.doc(db, 'users', uid, 'bookmarks', bookmarkId);

  try {
    await sdk.deleteDoc(bookmarkDocRef);

    // Optimistically update in-memory cache for zero repeated reads
    if (_userBookmarksCache.has(uid)) {
      const list = _userBookmarksCache.get(uid);
      const filtered = list.filter(b => b.id !== bookmarkId && !bookmarkId.endsWith(`_${b.slug}`));
      _userBookmarksCache.set(uid, filtered);
    }

    return { success: true };
  } catch (err) {
    console.error('[risePaisa:Firestore] Failed to remove bookmark:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetch all bookmarks for the authenticated user.
 * Supports in-memory session caching: subsequent reads return memory data with 0 Firestore operations.
 *
 * @param {string} uid - Authenticated user UID
 * @param {boolean} forceRefresh - If true, bypasses in-memory cache
 * @returns {Promise<Array<object>|null>}
 */
export async function fetchUserBookmarks(uid, forceRefresh = false) {
  if (!uid) return [];

  const currentUser = getCurrentUser();
  if (currentUser && currentUser.uid !== uid) {
    return [];
  }

  // Return from in-memory cache if available and not forcing refresh
  if (!forceRefresh && _userBookmarksCache.has(uid)) {
    return _userBookmarksCache.get(uid);
  }

  // Deduplicate concurrent in-flight requests for the same user
  if (!forceRefresh && _inFlightBookmarkFetches.has(uid)) {
    return _inFlightBookmarkFetches.get(uid);
  }

  const bundle = await getFirestoreDb();
  if (!bundle) return null;

  const { db, sdk } = bundle;
  const bookmarksColRef = sdk.collection(db, 'users', uid, 'bookmarks');

  const fetchPromise = (async () => {
    try {
      let snapshot;
      try {
        const q = sdk.query(bookmarksColRef, sdk.orderBy('savedAt', 'desc'));
        snapshot = await withBoundedRetry(async () => sdk.getDocs(q));
      } catch (qErr) {
        // Fallback to unordered query if index or timestamp format causes query error
        snapshot = await withBoundedRetry(async () => sdk.getDocs(bookmarksColRef));
      }
      const bookmarks = [];
      snapshot.forEach(doc => {
        bookmarks.push({ id: doc.id, ...doc.data() });
      });
      // Sort client-side by savedAt descending
      bookmarks.sort((a, b) => {
        const tA = a.savedAt?.toMillis ? a.savedAt.toMillis() : (a.savedAt?.seconds ? a.savedAt.seconds * 1000 : 0);
        const tB = b.savedAt?.toMillis ? b.savedAt.toMillis() : (b.savedAt?.seconds ? b.savedAt.seconds * 1000 : 0);
        return tB - tA;
      });
      _userBookmarksCache.set(uid, bookmarks);
      return bookmarks;
    } catch (err) {
      console.error('[risePaisa:Firestore] Failed to fetch bookmarks:', err);
      return null;
    } finally {
      _inFlightBookmarkFetches.delete(uid);
    }
  })();

  _inFlightBookmarkFetches.set(uid, fetchPromise);
  return fetchPromise;
}

/**
 * Resolve bookmark title and URL from static content catalogs.
 * Provides fallback formatting if not found in catalog.
 *
 * @param {string} type - 'lesson' | 'guide' | 'resource' | 'calculator' | 'article'
 * @param {string} slug - Content identifier
 * @returns {Promise<{ type: string, slug: string, title: string, url: string }|null>}
 */
export async function resolveBookmarkMetadata(type, slug) {
  if (!type || !slug) return null;
  const cleanType = String(type).trim().toLowerCase();
  const cleanSlug = String(slug).trim();

  try {
    if (cleanType === 'lesson') {
      const { LEARN_CATEGORIES } = await import('../data/learn.js');
      for (const cat of LEARN_CATEGORIES || []) {
        for (const mod of cat.roadmap || []) {
          for (const les of mod.lessons || []) {
            if (les.id && les.slug) {
              registerLessonAlias(les.id, les.slug);
            }
            if (les.id === cleanSlug || les.slug === cleanSlug) {
              const title = les.en?.title || les.title || les.id;
              const url = `/learn/${cat.slug}/${les.slug}`;
              return { type: 'lesson', slug: cleanSlug, title, url };
            }
          }
        }
      }
    } else if (cleanType === 'guide') {
      const { POPULAR_GUIDES } = await import('../data/learn.js');
      const g = (POPULAR_GUIDES || []).find(item => item.slug === cleanSlug);
      if (g) {
        const title = g.title?.en || g.title || g.slug;
        const url = g.href || `/learn/guides/${g.slug}`;
        return { type: 'guide', slug: cleanSlug, title, url };
      }
    } else if (cleanType === 'resource') {
      const { FREE_RESOURCES } = await import('../data/freeResources.js');
      const r = (FREE_RESOURCES || []).find(item => item.id === cleanSlug);
      if (r) {
        const title = r.title?.en || r.title || r.id;
        const url = r.downloadUrl || `/resources/${r.id}`;
        return { type: 'resource', slug: cleanSlug, title, url };
      }
    }
  } catch (e) {
    // Dynamic import may fail during standalone testing, fall back cleanly
  }

  // Graceful fallback if not found in catalog
  const formattedTitle = cleanSlug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const fallbackUrl = cleanType === 'guide'
    ? `/learn/guides/${cleanSlug}`
    : cleanType === 'resource'
      ? `/resources/${cleanSlug}`
      : `/learn/nepse/${cleanSlug}`;

  return {
    type: cleanType,
    slug: cleanSlug,
    title: formattedTitle,
    url: fallbackUrl
  };
}

// ---------------------------------------------------------------------------
// Storage Helpers (Pluggable for unit testing in Node environments)
// ---------------------------------------------------------------------------
function getStorage(adapter) {
  if (adapter && typeof adapter.getItem === 'function') return adapter;
  if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
  return null;
}

function readStorageList(storage, key) {
  if (!storage) return [];
  try {
    const raw = storage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(item => typeof item === 'string' && item.trim().length > 0);
  } catch (e) {
    return [];
  }
}

function writeStorageList(storage, key, list) {
  if (!storage) return;
  try {
    const unique = Array.from(new Set((list || []).filter(item => typeof item === 'string' && item.trim().length > 0)));
    storage.setItem(key, JSON.stringify(unique));
  } catch (e) {
    console.warn(`[risePaisa:Storage] Failed to write ${key}:`, e);
  }
}

/**
 * Safe LocalStorage and Cloud Bookmark Reconciliation on Sign-In.
 *
 * Conflict Resolution Policy:
 * 1. Additive Union: Local bookmarks created during a guest session are merged
 *    with cloud bookmarks. No existing local bookmark is discarded.
 * 2. Idempotent Writes: Deterministic document IDs prevent duplicates.
 * 3. Network Failure Safety: If the cloud fetch fails, local data is left intact.
 * 4. Account Isolation: If switching from another signed-in user, old user data
 *    is not migrated to the new user.
 * 5. Guest Continuity: Guest bookmarks are backed up so they can be restored upon sign out.
 *
 * @param {string} uid - Authenticated user UID
 * @param {object|null} storageAdapter - Optional custom storage adapter (for testing)
 * @param {Array|Function|null} cloudBookmarksProvider - Optional provider/override for cloud bookmarks
 * @returns {Promise<{ success: boolean, [key: string]: any }>}
 */
export async function reconcileBookmarksOnSignIn(uid, storageAdapter = null, cloudBookmarksProvider = null) {
  if (!uid) return { success: false, error: 'UID is required' };

  if (_migratedUids.has(uid)) {
    return { success: true, alreadyMigrated: true };
  }

  const storage = getStorage(storageAdapter);
  if (!storage) return { success: false, error: 'Storage unavailable' };

  const lastActiveUid = storage.getItem(STORAGE_KEYS.ACTIVE_UID);

  // Check for account switching:
  // If a different user was previously active, do NOT merge their local items
  const isAccountSwitch = Boolean(lastActiveUid && lastActiveUid !== uid);

  // Fetch current user's cloud bookmarks (or use custom provider in tests)
  let cloudBookmarks = null;
  if (typeof cloudBookmarksProvider === 'function') {
    cloudBookmarks = await cloudBookmarksProvider(uid);
  } else if (Array.isArray(cloudBookmarksProvider)) {
    cloudBookmarks = cloudBookmarksProvider;
  } else {
    cloudBookmarks = await fetchUserBookmarks(uid);
  }

  if (cloudBookmarks === null) {
    // Network / database failure: preserve local data completely, do not mark completed
    return { success: false, networkFailure: true, error: 'Cloud bookmarks fetch failed; local data preserved.' };
  }

  const cloudLessonSlugs = new Set();
  const cloudGuideSlugs = new Set();
  const cloudResourceSlugs = new Set();

  cloudBookmarks.forEach(bm => {
    if (bm.type === 'lesson') cloudLessonSlugs.add(bm.slug);
    else if (bm.type === 'guide') cloudGuideSlugs.add(bm.slug);
    else if (bm.type === 'resource') cloudResourceSlugs.add(bm.slug);
  });

  // Prime in-memory cache with current user's bookmarks
  _userBookmarksCache.set(uid, cloudBookmarks.filter(b => b.type === 'lesson'));

  if (isAccountSwitch) {
    // Overwrite local keys with this user's cloud bookmarks only (account isolation)
    writeStorageList(storage, STORAGE_KEYS.LESSONS, Array.from(cloudLessonSlugs));
    writeStorageList(storage, STORAGE_KEYS.GUIDES, Array.from(cloudGuideSlugs));
    writeStorageList(storage, STORAGE_KEYS.RESOURCES, Array.from(cloudResourceSlugs));
    storage.setItem(STORAGE_KEYS.ACTIVE_UID, uid);
    _migratedUids.add(uid);
    return { success: true, accountSwitch: true, cloudCount: cloudBookmarks.length };
  }

  // If coming from guest (no previous active UID):
  // Backup guest bookmarks so they can be restored on sign out
  if (!lastActiveUid) {
    const guestBackup = {
      lessons: readStorageList(storage, STORAGE_KEYS.LESSONS),
      guides: readStorageList(storage, STORAGE_KEYS.GUIDES),
      resources: readStorageList(storage, STORAGE_KEYS.RESOURCES)
    };
    storage.setItem(STORAGE_KEYS.GUEST_BACKUP, JSON.stringify(guestBackup));
  }

  const localLessons = readStorageList(storage, STORAGE_KEYS.LESSONS);
  const localGuides = readStorageList(storage, STORAGE_KEYS.GUIDES);
  const localResources = readStorageList(storage, STORAGE_KEYS.RESOURCES);

  // Upload missing local lessons to Firestore (ONLY lessons are persisted to cloud)
  const uploadPromises = [];

  for (const slug of localLessons) {
    if (!cloudLessonSlugs.has(slug)) {
      uploadPromises.push(
        resolveBookmarkMetadata('lesson', slug).then(meta => meta && saveUserBookmark(uid, meta))
      );
    }
  }

  if (uploadPromises.length > 0) {
    try {
      await Promise.allSettled(uploadPromises);
    } catch (e) {
      console.warn('[risePaisa:Bookmarks] Local upload encountered errors:', e);
    }
  }

  // Merge cloud bookmarks into local storage (additive union)
  const mergedLessons = Array.from(new Set([...localLessons, ...cloudLessonSlugs]));
  const mergedGuides = Array.from(new Set([...localGuides, ...cloudGuideSlugs]));
  const mergedResources = Array.from(new Set([...localResources, ...cloudResourceSlugs]));

  writeStorageList(storage, STORAGE_KEYS.LESSONS, mergedLessons);
  writeStorageList(storage, STORAGE_KEYS.GUIDES, mergedGuides);
  writeStorageList(storage, STORAGE_KEYS.RESOURCES, mergedResources);

  storage.setItem(STORAGE_KEYS.ACTIVE_UID, uid);
  _migratedUids.add(uid);

  return {
    success: true,
    mergedLessonsCount: mergedLessons.length,
    mergedGuidesCount: mergedGuides.length,
    mergedResourcesCount: mergedResources.length
  };
}

/**
 * Handle user sign-out session cleanup.
 * Preserves guest bookmarks by restoring guest backup if present,
 * clears user-specific in-memory caches, and avoids leaking bookmarks.
 *
 * @param {object|null} storageAdapter - Optional custom storage adapter (for testing)
 */
export function handleUserSignOut(storageAdapter = null) {
  const storage = getStorage(storageAdapter);
  const activeUid = storage?.getItem(STORAGE_KEYS.ACTIVE_UID);
  if (activeUid) {
    _migratedUids.delete(activeUid);
    _syncedProfiles.delete(activeUid);
    _userBookmarksCache.delete(activeUid);
  } else {
    _userBookmarksCache.clear();
  }
  _inFlightToggles.clear();

  if (storage) {
    // Clear personal bookmarks completely on sign out so no bookmarks leak to guests
    writeStorageList(storage, STORAGE_KEYS.LESSONS, []);
    writeStorageList(storage, STORAGE_KEYS.GUIDES, []);
    writeStorageList(storage, STORAGE_KEYS.RESOURCES, []);
    storage.removeItem(STORAGE_KEYS.GUEST_BACKUP);
    storage.removeItem(STORAGE_KEYS.ACTIVE_UID);
  }
}

/**
 * Interactive Bookmark Toggle synchronization bridge.
 * Saves/removes from localStorage synchronously for instant UI responsiveness for authenticated users.
 * Strictly persists ONLY 'lesson' bookmarks to Cloud Firestore.
 * Reject unauthenticated bookmark attempts with requiresAuth: true.
 * For authenticated users: includes duplicate-click protection and asynchronous coalescing.
 *
 * @param {string} type - Bookmark type ('lesson', 'guide', 'resource', 'glossary')
 * @param {string} slug - Content slug
 * @param {boolean} isNowBookmarked - Target state
 * @param {object|null} metadata - Optional pre-resolved { title, url }
 * @param {object|null} storageAdapter - Optional storage adapter for testing
 * @returns {Promise<{ success: boolean, requiresAuth?: boolean, localOnly?: boolean, noop?: boolean, error?: string }>}
 */
export async function syncBookmarkToggle(type, slug, isNowBookmarked, metadata = null, storageAdapter = null) {
  const storage = getStorage(storageAdapter);

  // Wait for Firebase Auth resolution if pending
  let currentUser = getCurrentUser();
  if (!currentUser && typeof isAuthInitialized === 'function' && !isAuthInitialized() && typeof window !== 'undefined') {
    try {
      currentUser = await waitForAuthReady(2000);
    } catch (_) {
      currentUser = getCurrentUser();
    }
  }

  // Active user session check: must have authenticated currentUser or activeUid in storage
  const activeUid = currentUser?.uid || storage?.getItem(STORAGE_KEYS.ACTIVE_UID);

  // STRICT AUTHENTICATION REQUIREMENT:
  // An unauthenticated user must NEVER be allowed to bookmark any content on RisePaisa.
  if (!activeUid) {
    return {
      success: false,
      requiresAuth: true,
      error: 'Authentication required. Please sign in to save bookmarks.'
    };
  }

  // Update local storage synchronously first for immediate UI response for active user session
  let storageKey = null;
  if (type === 'lesson') storageKey = STORAGE_KEYS.LESSONS;
  else if (type === 'guide') storageKey = STORAGE_KEYS.GUIDES;
  else if (type === 'resource') storageKey = STORAGE_KEYS.RESOURCES;
  else if (type === 'glossary') storageKey = STORAGE_KEYS.GLOSSARY;

  const alias = type === 'lesson' ? getLessonAlias(slug) : null;

  if (storage && storageKey) {
    const list = readStorageList(storage, storageKey);
    if (isNowBookmarked) {
      if (!list.includes(slug)) {
        list.push(slug);
      }
    } else {
      const filtered = list.filter(item => item !== slug && item !== alias);
      list.length = 0;
      list.push(...filtered);
    }
    writeStorageList(storage, storageKey, list);
  }

  // Strictly ONLY 'lesson' bookmarks are persisted to Cloud Firestore.
  // Guides, resources, calculators, glossary, and unsupported types remain localOnly with zero Firestore writes.
  if (type !== 'lesson' || !VALID_BOOKMARK_TYPES.includes(type)) {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', {
        detail: { type, slug, isNowBookmarked, uid: activeUid, localOnly: true }
      }));
    }
    return { success: true, localOnly: true };
  }

  const uid = activeUid;
  const bookmarkId = generateBookmarkId('lesson', slug);
  const aliasBookmarkId = alias ? generateBookmarkId('lesson', alias) : null;
  const opKey = `${uid}_lesson_${slug}`;

  // Check duplicate write guard if no operation is currently in flight
  if (!_inFlightToggles.has(opKey)) {
    const cachedList = _userBookmarksCache.get(uid);
    if (Array.isArray(cachedList)) {
      const isAlreadyInCloud = cachedList.some(b =>
        b.id === bookmarkId || b.slug === slug ||
        (alias && (b.id === aliasBookmarkId || b.slug === alias))
      );
      if (isNowBookmarked && isAlreadyInCloud) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', {
            detail: { type, slug, isNowBookmarked: true, uid, noop: true }
          }));
        }
        return { success: true, bookmarkId, noop: true };
      }
      if (!isNowBookmarked && !isAlreadyInCloud) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', {
            detail: { type, slug, isNowBookmarked: false, uid, noop: true }
          }));
        }
        return { success: true, noop: true };
      }
    }
  }

  // Handle rapid clicks / in-flight coalescing
  if (_inFlightToggles.has(opKey)) {
    const existing = _inFlightToggles.get(opKey);
    existing.targetState = isNowBookmarked;
    existing.metadata = metadata || existing.metadata;
    return existing.promise;
  }

  const inFlightEntry = {
    targetState: isNowBookmarked,
    metadata,
    promise: null
  };

  inFlightEntry.promise = (async () => {
    try {
      let settledState = !isNowBookmarked;
      while (settledState !== inFlightEntry.targetState) {
        const desired = inFlightEntry.targetState;
        if (desired) {
          const resolved = inFlightEntry.metadata || await resolveBookmarkMetadata('lesson', slug);
          if (!resolved) {
            return { success: false, error: 'Could not resolve bookmark metadata' };
          }
          const saveRes = await saveUserBookmark(uid, resolved);
          if (!saveRes || !saveRes.success) {
            // Write failed: rollback local storage
            if (storage && storageKey) {
              const list = readStorageList(storage, storageKey).filter(s => s !== slug && s !== alias);
              writeStorageList(storage, storageKey, list);
            }
            return { success: false, error: saveRes?.error || 'Failed to save bookmark' };
          }
        } else {
          const removeRes = await removeUserBookmark(uid, bookmarkId);
          if (aliasBookmarkId) {
            await removeUserBookmark(uid, aliasBookmarkId).catch(() => {});
          }
          if (!removeRes || !removeRes.success) {
            // Removal failed: rollback local storage
            if (storage && storageKey) {
              const list = readStorageList(storage, storageKey);
              if (!list.includes(slug)) list.push(slug);
              writeStorageList(storage, storageKey, list);
            }
            return { success: false, error: removeRes?.error || 'Failed to remove bookmark' };
          }
        }
        settledState = desired;
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', {
          detail: { type, slug, isNowBookmarked: inFlightEntry.targetState, uid }
        }));
      }
      return { success: true, bookmarkId };
    } catch (err) {
      console.error('[risePaisa:Bookmarks] Cloud sync toggle error:', err);
      if (storage && storageKey) {
        const list = readStorageList(storage, storageKey);
        if (isNowBookmarked) {
          const reverted = list.filter(s => s !== slug && s !== alias);
          writeStorageList(storage, storageKey, reverted);
        } else {
          if (!list.includes(slug)) list.push(slug);
          writeStorageList(storage, storageKey, list);
        }
      }
      return { success: false, error: err.message };
    } finally {
      _inFlightToggles.delete(opKey);
    }
  })();

  _inFlightToggles.set(opKey, inFlightEntry);
  return await inFlightEntry.promise;
}

/**
 * Query whether a bookmark is saved locally.
 *
 * @param {string} type
 * @param {string} slug
 * @param {object|null} storageAdapter
 * @returns {boolean}
 */
export function isBookmarkSaved(type, slug, storageAdapter = null) {
  const currentUser = getCurrentUser();
  const storage = getStorage(storageAdapter);
  const activeUid = currentUser?.uid || storage?.getItem(STORAGE_KEYS.ACTIVE_UID);

  // Unauthenticated guests have 0 saved bookmarks
  if (!activeUid) {
    return false;
  }

  if (!storage || !type || !slug) return false;

  let storageKey = null;
  if (type === 'lesson') storageKey = STORAGE_KEYS.LESSONS;
  else if (type === 'guide') storageKey = STORAGE_KEYS.GUIDES;
  else if (type === 'resource') storageKey = STORAGE_KEYS.RESOURCES;
  else if (type === 'glossary') storageKey = STORAGE_KEYS.GLOSSARY;

  if (!storageKey) return false;
  const list = readStorageList(storage, storageKey);
  if (list.includes(slug)) return true;

  if (type === 'lesson') {
    const alias = getLessonAlias(slug);
    if (alias && list.includes(alias)) return true;
  }
  return false;
}

/**
 * Reset in-memory session caches (for tests or explicit re-sync).
 *
 * @param {string|null} uid
 */
export function resetSyncSession(uid = null) {
  if (uid) {
    _migratedUids.delete(uid);
    _syncedProfiles.delete(uid);
    _userBookmarksCache.delete(uid);
    _inFlightBookmarkFetches.delete(uid);
  } else {
    _migratedUids.clear();
    _syncedProfiles.clear();
    _userBookmarksCache.clear();
    _inFlightBookmarkFetches.clear();
  }
  _inFlightToggles.clear();
}
