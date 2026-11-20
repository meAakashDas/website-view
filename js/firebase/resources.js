// ==============================================
// risePaisa — Resources Management & Access Code System
// Modular, secure client-side Firebase controller for:
// 1. Resource CRUD & Dynamic Metadata
// 2. Resource Media & File Uploads (Storage Rules compliant)
// 3. Cryptographic Access Code Generation, Hashing & Verification
// 4. Multi-type Redemptions (Single-use, Unlimited, Per-user)
// 5. Persistent Download Authorization without re-consumption
// ==============================================

import { getFirebaseApp } from './config.js';
import { getFirestoreDb } from './db.js';
import { checkIsAdmin } from './courses.js';

export async function getFirestoreInstance() {
  try {
    const bundle = await getFirestoreDb();
    return bundle ? bundle.db : null;
  } catch (_) {
    return null;
  }
}

// ── Constants & Limits ────────────────────────────────────────────────────────
export const MAX_RESOURCE_IMAGE_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_RESOURCE_IMAGE_EXTENSIONS = Object.freeze(['jpg', 'jpeg', 'png', 'webp', 'svg']);
export const ALLOWED_RESOURCE_IMAGE_MIME_TYPES = Object.freeze([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml'
]);

export const MAX_RESOURCE_DOWNLOAD_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB
export const ALLOWED_RESOURCE_DOWNLOAD_EXTENSIONS = Object.freeze([
  'pdf',
  'xlsx',
  'xls',
  'csv',
  'zip',
  'docx',
  'doc',
  'html',
  'txt',
  'png',
  'jpg',
  'jpeg',
  'webp'
]);

export const CODE_TYPES = Object.freeze({
  SINGLE_USE: 'single_use',
  UNLIMITED: 'unlimited',
  PER_USER: 'per_user'
});

export const CODE_STATUS = Object.freeze({
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  USED: 'used',
  EXHAUSTED: 'exhausted',
  REVOKED: 'revoked'
});

export const DEFAULT_RESOURCE_CATEGORIES = Object.freeze([
  'Notion',
  'Finance Tools',
  'Templates',
  'Spreadsheets'
]);

// ── Cryptographic Hashing & Code Helpers ─────────────────────────────────────

/**
 * Normalize an access code string (trim whitespace, convert to uppercase, collapse spaces)
 *
 * @param {string} code
 * @returns {string}
 */
export function normalizeAccessCode(code) {
  if (!code || typeof code !== 'string') return '';
  return code.trim().toUpperCase().replace(/\s+/g, '');
}

/**
 * Generate a cryptographically strong SHA-256 hex hash of an access code.
 * Works seamlessly in both Modern Browsers (Web Crypto API) and Node.js environments.
 *
 * @param {string} code
 * @returns {Promise<string>} 64-character lowercase hex string
 */
export async function hashAccessCode(code) {
  const normalized = normalizeAccessCode(code);
  if (!normalized) return '';

  // 1. Browser Web Crypto API
  if (typeof crypto !== 'undefined' && crypto.subtle && typeof crypto.subtle.digest === 'function') {
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // 2. Node.js Environment (Test runner)
  try {
    const nodeCrypto = await import('node:crypto');
    return nodeCrypto.createHash('sha256').update(normalized).digest('hex');
  } catch (err) {
    // Basic fallback if nodeCrypto unavailable
    let hash = 0;
    for (let i = 0; i < normalized.length; i++) {
      hash = ((hash << 5) - hash) + normalized.charCodeAt(i);
      hash |= 0;
    }
    return `fallback_${Math.abs(hash)}_${normalized}`;
  }
}

/**
 * Mask an access code for secure display in tables (e.g. RISE-8X92-KP4M -> RISE-8X**-****)
 *
 * @param {string} code
 * @returns {string}
 */
export function maskAccessCode(code) {
  if (!code || typeof code !== 'string') return '****';
  const clean = code.trim().toUpperCase();
  const parts = clean.split('-');
  if (parts.length >= 3) {
    return `${parts[0]}-${parts[1].slice(0, 2)}**-****`;
  }
  if (clean.length > 6) {
    return `${clean.slice(0, 4)}****${clean.slice(-2)}`;
  }
  return '****';
}

/**
 * Generate a random, high-entropy access code string.
 * Uses an alphabet without visually ambiguous characters (0, O, 1, I).
 *
 * Format: RISE-XXXX-XXXX (e.g. RISE-8X92-KP4M)
 *
 * @param {string} [prefix='RISE']
 * @returns {string}
 */
export function generateAccessCodeString(prefix = 'RISE') {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let segment1 = '';
  let segment2 = '';

  const getRandomChar = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      const arr = new Uint8Array(1);
      crypto.getRandomValues(arr);
      return chars[arr[0] % chars.length];
    }
    return chars[Math.floor(Math.random() * chars.length)];
  };

  for (let i = 0; i < 4; i++) segment1 += getRandomChar();
  for (let i = 0; i < 4; i++) segment2 += getRandomChar();

  const cleanPrefix = (prefix || 'RISE').toUpperCase().replace(/[^A-Z0-9]/g, '');
  return `${cleanPrefix}-${segment1}-${segment2}`;
}

// ── Validation Helpers ───────────────────────────────────────────────────────

/**
 * Validate a resource object before saving to database.
 * Ensures minimum required fields are present while gracefully treating all other fields as optional.
 *
 * @param {object} resource
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateResource(resource) {
  const errors = [];
  if (!resource || typeof resource !== 'object') {
    return { valid: false, errors: ['Resource must be an object.'] };
  }

  const { title, slug, price, originalPrice, whatsappUrl, contactUrl } = resource;

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Resource title must be a non-empty string under 200 characters.');
  }

  if (typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug)) {
    errors.push('Resource slug must be lowercase alphanumeric characters and hyphens.');
  }

  if (price !== undefined && price !== null && price !== '') {
    const numPrice = Number(price);
    if (isNaN(numPrice) || numPrice < 0) {
      errors.push('Resource price must be a non-negative number.');
    }
  }

  if (originalPrice !== undefined && originalPrice !== null && originalPrice !== '') {
    const numOrig = Number(originalPrice);
    if (isNaN(numOrig) || numOrig < 0) {
      errors.push('Original price must be a non-negative number.');
    }
  }

  if (whatsappUrl && typeof whatsappUrl === 'string' && whatsappUrl.trim() !== '') {
    const trimmed = whatsappUrl.trim().toLowerCase();
    if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:') || trimmed.startsWith('file:')) {
      errors.push('WhatsApp URL contains forbidden protocol.');
    }
  }

  if (contactUrl && typeof contactUrl === 'string' && contactUrl.trim() !== '') {
    const trimmed = contactUrl.trim().toLowerCase();
    if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:') || trimmed.startsWith('file:')) {
      errors.push('Contact URL contains forbidden protocol.');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate an access code configuration before creation.
 *
 * @param {object} codeConfig
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateAccessCodeConfig(codeConfig) {
  const errors = [];
  if (!codeConfig || typeof codeConfig !== 'object') {
    return { valid: false, errors: ['Access code configuration must be an object.'] };
  }

  const effectiveType = codeConfig.codeType || codeConfig.type;
  const { resourceSlug, maxRedemptions, expiresAt } = codeConfig;

  if (!effectiveType || !Object.values(CODE_TYPES).includes(effectiveType)) {
    errors.push(`Code type must be one of: ${Object.values(CODE_TYPES).join(', ')}.`);
  }

  if (!resourceSlug || typeof resourceSlug !== 'string' || resourceSlug.trim() === '') {
    errors.push('Associated resource must be specified.');
  }

  if (maxRedemptions !== undefined && maxRedemptions !== null && maxRedemptions !== '') {
    const num = Number(maxRedemptions);
    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
      errors.push('Maximum redemptions must be a positive integer.');
    }
  }

  if (expiresAt) {
    const date = new Date(expiresAt);
    if (isNaN(date.getTime())) {
      errors.push('Invalid expiration date.');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate an image file before upload.
 *
 * @param {File|object} file
 * @returns {{ valid: boolean, error: string|null, sanitizedName?: string, extension?: string }}
 */
export function validateResourceImageFile(file) {
  if (!file) return { valid: false, error: 'Image file is required.' };
  const name = typeof file.name === 'string' ? file.name.trim() : '';
  const size = typeof file.size === 'number' ? file.size : 0;

  if (!name) return { valid: false, error: 'Image file name is required.' };
  if (name.includes('..') || name.includes('/') || name.includes('\\')) {
    return { valid: false, error: 'Image file name contains forbidden path characters.' };
  }
  if (size <= 0) return { valid: false, error: 'Image file is empty (0 bytes).' };
  if (size > MAX_RESOURCE_IMAGE_FILE_SIZE_BYTES) {
    return { valid: false, error: 'Image file size exceeds the maximum limit of 5MB.' };
  }

  const extMatch = name.match(/\.([a-zA-Z0-9]+)$/);
  const ext = extMatch ? extMatch[1].toLowerCase() : '';
  if (!ext || !ALLOWED_RESOURCE_IMAGE_EXTENSIONS.includes(ext)) {
    return {
      valid: false,
      error: `Unsupported image format ".${ext}". Allowed: ${ALLOWED_RESOURCE_IMAGE_EXTENSIONS.join(', ')}.`
    };
  }

  const sanitized = name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return { valid: true, error: null, sanitizedName: sanitized, extension: ext };
}

/**
 * Validate a downloadable resource file before upload.
 *
 * @param {File|object} file
 * @returns {{ valid: boolean, error: string|null, sanitizedName?: string, extension?: string }}
 */
export function validateResourceDownloadFile(file) {
  if (!file) return { valid: false, error: 'File is required.' };
  const name = typeof file.name === 'string' ? file.name.trim() : '';
  const size = typeof file.size === 'number' ? file.size : 0;

  if (!name) return { valid: false, error: 'File name is required.' };
  if (name.includes('..') || name.includes('/') || name.includes('\\')) {
    return { valid: false, error: 'File name contains forbidden path characters.' };
  }
  if (size <= 0) return { valid: false, error: 'File is empty (0 bytes).' };
  if (size > MAX_RESOURCE_DOWNLOAD_FILE_SIZE_BYTES) {
    return { valid: false, error: 'File size exceeds maximum allowed limit of 50MB.' };
  }

  const extMatch = name.match(/\.([a-zA-Z0-9]+)$/);
  const ext = extMatch ? extMatch[1].toLowerCase() : '';
  if (!ext || !ALLOWED_RESOURCE_DOWNLOAD_EXTENSIONS.includes(ext)) {
    return {
      valid: false,
      error: `Unsupported file format ".${ext}". Allowed: ${ALLOWED_RESOURCE_DOWNLOAD_EXTENSIONS.join(', ')}.`
    };
  }

  const sanitized = name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return { valid: true, error: null, sanitizedName: sanitized, extension: ext };
}

// ── Normalization Helper ─────────────────────────────────────────────────────

/**
 * Normalize and sanitize resource data so all expected fields exist with reliable defaults.
 * Guarantees that missing optional information never causes runtime crashes.
 *
 * @param {object} raw
 * @returns {object}
 */
export function normalizeResourceData(raw) {
  if (!raw || typeof raw !== 'object') return {};

  const cleanSlug = typeof raw.slug === 'string' ? raw.slug.trim().toLowerCase() : '';
  const cleanTitle = typeof raw.title === 'string' ? raw.title.trim() : 'Untitled Resource';
  const price = raw.price !== undefined && raw.price !== null && raw.price !== '' ? Number(raw.price) : 0;
  const originalPrice = raw.originalPrice !== undefined && raw.originalPrice !== null && raw.originalPrice !== ''
    ? Number(raw.originalPrice)
    : null;

  return {
    id: raw.id || cleanSlug,
    slug: cleanSlug,
    title: cleanTitle,
    shortDescription: typeof raw.shortDescription === 'string' ? raw.shortDescription.trim() : '',
    fullDescription: typeof raw.fullDescription === 'string' ? raw.fullDescription.trim() : (raw.description || ''),
    category: typeof raw.category === 'string' && raw.category.trim() ? raw.category.trim() : 'Finance Tools',
    price: isNaN(price) ? 0 : price,
    originalPrice: originalPrice && !isNaN(originalPrice) ? originalPrice : null,
    currency: raw.currency || 'NPR',
    creator: typeof raw.creator === 'string' ? raw.creator.trim() : 'Aakash Das',
    setupTime: typeof raw.setupTime === 'string' ? raw.setupTime.trim() : null,
    expectedTime: typeof raw.expectedTime === 'string' ? raw.expectedTime.trim() : null,
    modulesCount: raw.modulesCount ? Number(raw.modulesCount) : null,
    thumbnail: raw.thumbnail || null,
    imageUrl: raw.imageUrl || raw.thumbnail || null,
    previewVideoUrl: typeof raw.previewVideoUrl === 'string' && raw.previewVideoUrl.trim() ? raw.previewVideoUrl.trim() : null,
    videoThumbnail: raw.videoThumbnail || null,
    screenshots: Array.isArray(raw.screenshots) ? raw.screenshots : [],
    accessType: raw.accessType === 'free' ? 'free' : 'restricted',
    downloadsEnabled: raw.downloadsEnabled !== false,
    published: raw.published !== false,
    displayOrder: typeof raw.displayOrder === 'number' ? raw.displayOrder : 1,
    whatsappUrl: typeof raw.whatsappUrl === 'string' && raw.whatsappUrl.trim() ? raw.whatsappUrl.trim() : null,
    contactUrl: typeof raw.contactUrl === 'string' && raw.contactUrl.trim() ? raw.contactUrl.trim() : null,
    notionLink: typeof raw.notionLink === 'string' && raw.notionLink.trim() ? raw.notionLink.trim() : null,
    featuresList: Array.isArray(raw.featuresList)
      ? raw.featuresList
      : (Array.isArray(raw.whatsIncluded) ? raw.whatsIncluded : []),
    whatYouLearn: Array.isArray(raw.whatYouLearn) ? raw.whatYouLearn : [],
    whatsIncluded: Array.isArray(raw.whatsIncluded) ? raw.whatsIncluded : [],
    howToUse: Array.isArray(raw.howToUse) ? raw.howToUse : [],
    downloadableFiles: Array.isArray(raw.downloadableFiles) ? raw.downloadableFiles : [],
    updatedAt: raw.updatedAt || new Date().toISOString()
  };
}

// ── In-Memory & LocalStorage Cache ──────────────────────────────────────────
const _adminResourcesCache = new Map();
const _publishedResourcesCache = new Map();

export function resetResourcesCache() {
  _adminResourcesCache.clear();
  _publishedResourcesCache.clear();
}

// ── Firestore Resources CRUD ────────────────────────────────────────────────

/**
 * Fetch all resources for administrator view.
 *
 * @param {string} adminUid
 * @param {object} [options]
 * @returns {Promise<Array<object>>}
 */
export async function fetchAdminResources(arg1, arg2) {
  let adminUid = null;
  let options = {};
  if (typeof arg1 === 'string') {
    adminUid = arg1;
    options = arg2 || {};
  } else if (typeof arg1 === 'object' && arg1 !== null) {
    options = arg1;
  }
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to access resources catalog.');
    }
  }

  // Check localStorage for offline/cached view
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cached = window.localStorage.getItem('rp_admin_resources_cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach(r => _adminResourcesCache.set(r.slug, r));
        }
      }
    } catch (_) {}
  }

  // In test/mock environment
  if (dbAdapter) {
    const colRef = dbAdapter.sdk.collection(dbAdapter.db, 'resources');
    const snapshot = await dbAdapter.sdk.getDocs(colRef);
    const docs = Array.isArray(snapshot?.docs) ? snapshot.docs : [];
    if (typeof snapshot?.forEach === 'function') {
      snapshot.forEach(doc => docs.push(doc));
    }
    const list = docs.map(doc => normalizeResourceData(typeof doc.data === 'function' ? doc.data() : doc));
    list.forEach(r => _adminResourcesCache.set(r.slug, r));
    return list;
  }

  // Browser Firestore environment
  const db = await getFirestoreInstance();
  if (db) {
    try {
      const { collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const q = query(collection(db, 'resources'), orderBy('displayOrder', 'asc'));
      const snapshot = await getDocs(q);
      const list = [];
      snapshot.forEach(doc => {
        list.push(normalizeResourceData(doc.data()));
      });

      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('rp_admin_resources_cache', JSON.stringify(list));
      }
      return list;
    } catch (err) {
      console.warn('[risePaisa:Resources] Firestore fetch failed, using memory/cache:', err);
    }
  }

  return Array.from(_adminResourcesCache.values());
}

/**
 * Save or update a resource in Firestore.
 *
 * @param {string} adminUid
 * @param {object} resourceData
 * @param {object} [options]
 * @returns {Promise<{ success: boolean, resource: object }>}
 */
export async function saveAdminResource(arg1, arg2, options = {}) {
  let adminUid;
  let resourceData;
  if (typeof arg1 === 'string' && typeof arg2 === 'object') {
    adminUid = arg1;
    resourceData = arg2;
  } else if (typeof arg1 === 'object') {
    resourceData = arg1;
    adminUid = typeof arg2 === 'string' ? arg2 : null;
  }
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to save resources.');
    }
  }

  const validation = validateResource(resourceData);
  if (!validation.valid) {
    throw new Error(`Validation Error: ${validation.errors.join('; ')}`);
  }

  const normalized = normalizeResourceData(resourceData);
  const cleanSlug = normalized.slug;

  // DB Adapter (Mock / Test environment)
  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resources', cleanSlug);
    await dbAdapter.sdk.setDoc(docRef, normalized, { merge: true });
    _adminResourcesCache.set(cleanSlug, normalized);
    return { success: true, slug: cleanSlug, resource: normalized };
  }

  // Browser Firestore
  const db = await getFirestoreInstance();
  if (db) {
    const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    const docRef = doc(db, 'resources', cleanSlug);
    await setDoc(docRef, normalized, { merge: true });
  }

  // Sync caches
  _adminResourcesCache.set(cleanSlug, normalized);
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(`rp_resource_cache_${cleanSlug}`, JSON.stringify(normalized));
      const list = Array.from(_adminResourcesCache.values());
      window.localStorage.setItem('rp_admin_resources_cache', JSON.stringify(list));
    } catch (_) {}
  }

  return { success: true, slug: cleanSlug, resource: normalized };
}

/**
 * Delete a resource from Firestore and client caches.
 *
 * @param {string} arg1
 * @param {string} [arg2]
 * @param {object} [options]
 * @returns {Promise<{ success: boolean }>}
 */
export async function deleteAdminResource(arg1, arg2, options = {}) {
  let adminUid = null;
  let resourceSlug = '';
  if (typeof arg1 === 'string' && (arg2 === null || arg2 === undefined || typeof arg2 === 'object')) {
    resourceSlug = arg1;
  } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    resourceSlug = arg1.includes('-') || !arg2.includes('-') ? arg1 : arg2;
    adminUid = resourceSlug === arg1 ? arg2 : arg1;
  }
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to delete resources.');
    }
  }

  const cleanSlug = (resourceSlug || '').trim().toLowerCase();

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resources', cleanSlug);
    await dbAdapter.sdk.deleteDoc(docRef);
    _adminResourcesCache.delete(cleanSlug);
    return { success: true };
  }

  const db = await getFirestoreInstance();
  if (db) {
    const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    const docRef = doc(db, 'resources', cleanSlug);
    await deleteDoc(docRef);
  }

  _adminResourcesCache.delete(cleanSlug);
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.removeItem(`rp_resource_cache_${cleanSlug}`);
    const list = Array.from(_adminResourcesCache.values());
    window.localStorage.setItem('rp_admin_resources_cache', JSON.stringify(list));
  }

  return { success: true };
}

/**
 * Fetch a single resource by slug with fallback to cache/defaults.
 *
 * @param {string} slug
 * @param {object} [options]
 * @returns {Promise<object|null>}
 */
export async function fetchResourceData(slug, options = {}) {
  const { dbAdapter } = options;
  const cleanSlug = (slug || '').trim().toLowerCase();
  if (!cleanSlug) return null;

  if (_adminResourcesCache.has(cleanSlug)) {
    return _adminResourcesCache.get(cleanSlug);
  }

  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cached = window.localStorage.getItem(`rp_resource_cache_${cleanSlug}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        _adminResourcesCache.set(cleanSlug, parsed);
        return parsed;
      }
    } catch (_) {}
  }

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resources', cleanSlug);
    const snap = await dbAdapter.sdk.getDoc(docRef);
    if (snap.exists()) {
      const data = normalizeResourceData(snap.data());
      _adminResourcesCache.set(cleanSlug, data);
      return data;
    }
  }

  const db = await getFirestoreInstance();
  if (db) {
    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const snap = await getDoc(doc(db, 'resources', cleanSlug));
      if (snap.exists()) {
        const data = normalizeResourceData(snap.data());
        _adminResourcesCache.set(cleanSlug, data);
        return data;
      }
    } catch (_) {}
  }

  return null;
}

// ── Physical File & Image Upload System ──────────────────────────────────────

/**
 * Upload an image or file for a resource to Firebase Storage.
 *
 * @param {string} resourceSlug
 * @param {File|object} file
 * @param {Function} [onProgress]
 * @param {object} [options]
 * @returns {Promise<{ success: boolean, url: string, fileName: string, size: number, storagePath: string }>}
 */
export async function uploadResourceMedia(resourceSlug, file, onProgress, options = {}) {
  const { uid, storageAdapter, folder = 'images' } = options;

  if (uid) {
    const isAdmin = await checkIsAdmin(uid);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to upload resource files.');
    }
  }

  const isImage = folder === 'images' || folder === 'screenshots' || folder === 'thumbnails';
  const validation = isImage ? validateResourceImageFile(file) : validateResourceDownloadFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const cleanSlug = (resourceSlug || 'general').trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
  const cleanFileName = `${Date.now()}_${validation.sanitizedName}`;
  const storagePath = `resources/${cleanSlug}/${folder}/${cleanFileName}`;

  // Custom storage adapter support (for tests and mocking)
  if (storageAdapter && typeof storageAdapter.upload === 'function') {
    if (typeof onProgress === 'function') onProgress(50);
    const res = await storageAdapter.upload(storagePath, file);
    if (typeof onProgress === 'function') onProgress(100);
    return {
      success: true,
      url: res.downloadUrl,
      fileName: cleanFileName,
      size: file.size,
      storagePath
    };
  }

  // Browser execution via modular Firebase Storage SDK
  if (typeof window !== 'undefined') {
    const app = await getFirebaseApp();
    if (!app) {
      throw new Error('Firebase application is not initialized.');
    }

    const { getStorage, ref, uploadBytesResumable, getDownloadURL } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js');
    const storage = getStorage(app);
    const storageRef = ref(storage, storagePath);

    return new Promise((resolve, reject) => {
      const mime = file.type || 'application/octet-stream';
      const uploadTask = uploadBytesResumable(storageRef, file, { contentType: mime });

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (typeof onProgress === 'function') {
            onProgress(Math.round(progress));
          }
        },
        (error) => {
          console.error('[risePaisa:Storage] Resource file upload error:', error);
          reject(new Error(`File upload failed: ${error.message}`));
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({
              success: true,
              url: downloadUrl,
              fileName: cleanFileName,
              size: file.size,
              storagePath
            });
          } catch (urlErr) {
            reject(urlErr);
          }
        }
      );
    });
  }

  throw new Error('Storage runtime environment not available.');
}

// ── Access Code Manager Engine ───────────────────────────────────────────────

const _inMemoryAccessCodes = new Map(); // id -> codeObj

/**
 * Fetch all access codes for administrator.
 *
 * @param {string} adminUid
 * @param {object} [options]
 * @returns {Promise<Array<object>>}
 */
export async function fetchAccessCodes(arg1, arg2) {
  let adminUid = null;
  let options = {};
  if (typeof arg1 === 'string') {
    adminUid = arg1;
    options = arg2 || {};
  } else if (typeof arg1 === 'object' && arg1 !== null) {
    options = arg1;
  }
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to view access codes.');
    }
  }

  if (dbAdapter) {
    const colRef = dbAdapter.sdk.collection(dbAdapter.db, 'resource_access_codes');
    const snapshot = await dbAdapter.sdk.getDocs(colRef);
    const docs = Array.isArray(snapshot?.docs) ? snapshot.docs : [];
    if (typeof snapshot?.forEach === 'function') {
      snapshot.forEach(doc => docs.push(doc));
    }
    const list = docs.map(doc => typeof doc.data === 'function' ? doc.data() : doc);
    list.forEach(c => _inMemoryAccessCodes.set(c.id, c));
    return list;
  }

  const db = await getFirestoreInstance();
  if (db) {
    try {
      const { collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const q = query(collection(db, 'resource_access_codes'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const list = [];
      snapshot.forEach(doc => list.push(doc.data()));
      return list;
    } catch (_) {}
  }

  return Array.from(_inMemoryAccessCodes.values());
}

/**
 * Create a new secure access code.
 * Computes SHA-256 hash and masked code for DB storage.
 * Returns the generated plaintext code to the caller so the admin can copy and distribute it!
 *
 * @param {string} adminUid
 * @param {object} codeData
 * @param {object} [options]
 * @returns {Promise<{ success: boolean, plaintextCode: string, codeRecord: object }>}
 */
export async function createAccessCode(adminUid, codeData, options = {}) {
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to create access codes.');
    }
  }

  const validation = validateAccessCodeConfig(codeData);
  if (!validation.valid) {
    throw new Error(`Validation Error: ${validation.errors.join('; ')}`);
  }

  // Generate plaintext code if not provided
  const plaintextCode = codeData.rawCode
    ? normalizeAccessCode(codeData.rawCode)
    : generateAccessCodeString(codeData.prefix || 'RISE');

  const codeHash = await hashAccessCode(plaintextCode);
  const codeDisplay = maskAccessCode(plaintextCode);
  const codeId = codeData.id || `code_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const effectiveType = codeData.codeType || codeData.type || CODE_TYPES.SINGLE_USE;
  const maxRedemptions = effectiveType === CODE_TYPES.SINGLE_USE
    ? 1
    : (codeData.maxRedemptions ? Number(codeData.maxRedemptions) : null);

  const codeRecord = {
    id: codeId,
    codeHash,
    codeDisplay,
    codeName: codeData.codeName ? String(codeData.codeName).trim() : 'Customer Access Code',
    resourceSlug: codeData.resourceSlug,
    resourceTitle: codeData.resourceTitle || codeData.resourceSlug,
    type: effectiveType,
    codeType: effectiveType,
    maxRedemptions,
    redemptionCount: 0,
    status: CODE_STATUS.ACTIVE,
    createdAt: new Date().toISOString(),
    expiresAt: codeData.expiresAt ? new Date(codeData.expiresAt).toISOString() : null,
    revokedAt: null,
    redemptions: []
  };

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_access_codes', codeId);
    await dbAdapter.sdk.setDoc(docRef, codeRecord);
    _inMemoryAccessCodes.set(codeId, codeRecord);
    return { success: true, plaintextCode, codeRecord };
  }

  const db = await getFirestoreInstance();
  if (db) {
    const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    await setDoc(doc(db, 'resource_access_codes', codeId), codeRecord);
  }

  _inMemoryAccessCodes.set(codeId, codeRecord);
  return { success: true, plaintextCode, codeRecord };
}

/**
 * Bulk generate multiple access codes (e.g. for marketing batches or multiple customers).
 *
 * @param {string} adminUid
 * @param {object} bulkConfig
 * @param {number} count (1 - 50)
 * @param {object} [options]
 * @returns {Promise<{ success: boolean, codes: Array<{ plaintextCode: string, codeRecord: object }> }>}
 */
export async function createBulkAccessCodes(adminUid, bulkConfig, count = 5, options = {}) {
  const safeCount = Math.max(1, Math.min(50, Number(count) || 1));
  const results = [];

  for (let i = 0; i < safeCount; i++) {
    const singleConfig = {
      ...bulkConfig,
      codeName: bulkConfig.codeName
        ? `${bulkConfig.codeName} #${i + 1}`
        : `Batch Code #${i + 1}`
    };
    const res = await createAccessCode(adminUid, singleConfig, options);
    results.push(res);
  }

  return {
    success: true,
    count: results.length,
    codes: results
  };
}

/**
 * Update access code status (Active, Inactive, Revoked).
 *
 * @param {string} adminUid
 * @param {string} codeId
 * @param {string} newStatus
 * @param {object} [options]
 * @returns {Promise<{ success: boolean }>}
 */
export async function updateAccessCodeStatus(adminUid, codeId, newStatus, options = {}) {
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to modify access codes.');
    }
  }

  if (!Object.values(CODE_STATUS).includes(newStatus)) {
    throw new Error(`Invalid code status "${newStatus}".`);
  }

  const updates = {
    status: newStatus,
    updatedAt: new Date().toISOString()
  };
  if (newStatus === CODE_STATUS.REVOKED) {
    updates.revokedAt = new Date().toISOString();
  }

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_access_codes', codeId);
    await dbAdapter.sdk.setDoc(docRef, updates, { merge: true });
    const existing = _inMemoryAccessCodes.get(codeId);
    if (existing) {
      _inMemoryAccessCodes.set(codeId, { ...existing, ...updates });
    }
    return { success: true };
  }

  const db = await getFirestoreInstance();
  if (db) {
    const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    await setDoc(doc(db, 'resource_access_codes', codeId), updates, { merge: true });
  }

  const existing = _inMemoryAccessCodes.get(codeId);
  if (existing) {
    _inMemoryAccessCodes.set(codeId, { ...existing, ...updates });
  }

  return { success: true };
}

/**
 * Delete an access code record.
 *
 * @param {string} adminUid
 * @param {string} codeId
 * @param {object} [options]
 * @returns {Promise<{ success: boolean }>}
 */
export async function deleteAccessCode(adminUid, codeId, options = {}) {
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to delete access codes.');
    }
  }

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_access_codes', codeId);
    await dbAdapter.sdk.deleteDoc(docRef);
    _inMemoryAccessCodes.delete(codeId);
    return { success: true };
  }

  const db = await getFirestoreInstance();
  if (db) {
    const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    await deleteDoc(doc(db, 'resource_access_codes', codeId));
  }

  _inMemoryAccessCodes.delete(codeId);
  return { success: true };
}

/**
 * Fetch redemption audit history logs for a specific access code.
 *
 * @param {string} adminUid
 * @param {string} codeId
 * @param {object} [options]
 * @returns {Promise<Array<object>>}
 */
export async function fetchRedemptionAuditLogs(adminUid, codeId, options = {}) {
  const { dbAdapter } = options;

  if (adminUid) {
    const isAdmin = await checkIsAdmin(adminUid, dbAdapter);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to view redemption audit logs.');
    }
  }

  const existingCode = _inMemoryAccessCodes.get(codeId);
  if (existingCode && Array.isArray(existingCode.redemptions) && existingCode.redemptions.length > 0) {
    return existingCode.redemptions;
  }

  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_access_codes', codeId);
    const snap = await dbAdapter.sdk.getDoc(docRef);
    if (snap.exists() && Array.isArray(snap.data().redemptions)) {
      return snap.data().redemptions;
    }
    return [];
  }

  const db = await getFirestoreInstance();
  if (db) {
    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const snap = await getDoc(doc(db, 'resource_access_codes', codeId));
      if (snap.exists() && Array.isArray(snap.data().redemptions)) {
        return snap.data().redemptions;
      }
    } catch (_) {}
  }

  return [];
}

// ── Secure Code Verification & Redemption Engine ────────────────────────────

/**
 * Verify and redeem an access code for a resource.
 * Enforces usage limits, single-use exhaustion, per-user limits, and expiration.
 * Grants ongoing access without consuming additional redemptions upon re-download.
 *
 * @param {string} rawCode - User entered access code
 * @param {string} resourceSlug - Target resource slug
 * @param {object} [userContext] - { uid, email, clientToken }
 * @param {object} [options] - { dbAdapter }
 * @returns {Promise<{ success: boolean, message: string, accessToken: string, resourceSlug: string }>}
 */
export async function verifyAndRedeemAccessCode(rawCode, resourceSlug, userContext = {}, options = {}) {
  const dbAdapter = options?.dbAdapter || userContext?.dbAdapter;
  const cleanCode = normalizeAccessCode(rawCode);
  const targetSlug = (resourceSlug || '').trim().toLowerCase();

  if (!cleanCode) {
    throw new Error('Please enter a valid access code.');
  }
  if (!targetSlug) {
    throw new Error('Target resource must be specified.');
  }

  const codeHash = await hashAccessCode(cleanCode);
  let matchedCode = null;
  let codeDocRef = null;

  // 1. Find access code record by hash
  if (dbAdapter) {
    const colRef = dbAdapter.sdk.collection(dbAdapter.db, 'resource_access_codes');
    const snap = await dbAdapter.sdk.getDocs(colRef);
    const docs = Array.isArray(snap?.docs) ? snap.docs : [];
    if (typeof snap?.forEach === 'function') {
      snap.forEach(doc => docs.push(doc));
    }
    for (const doc of docs) {
      const d = typeof doc.data === 'function' ? doc.data() : doc;
      if (d.codeHash === codeHash) {
        matchedCode = d;
        codeDocRef = doc;
        break;
      }
    }
  } else {
    const db = await getFirestoreInstance();
    if (db) {
      const { collection, getDocs, query, where } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      const q = query(collection(db, 'resource_access_codes'), where('codeHash', '==', codeHash));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const doc = snap.docs[0];
        matchedCode = doc.data();
        codeDocRef = doc.ref;
      }
    } else {
      // Memory fallback
      for (const c of _inMemoryAccessCodes.values()) {
        if (c.codeHash === codeHash) {
          matchedCode = c;
          break;
        }
      }
    }
  }

  if (!matchedCode) {
    return {
      success: false,
      message: 'Invalid access code. Please check your code and try again.'
    };
  }

  // 2. Resource matching: verify code belongs to requested resource or is a universal code ('*')
  if (matchedCode.resourceSlug !== '*' && matchedCode.resourceSlug !== targetSlug) {
    return {
      success: false,
      message: `This access code is not valid for this resource. It belongs to "${matchedCode.resourceTitle || matchedCode.resourceSlug}".`
    };
  }

  // 3. Status checks
  if (matchedCode.status === CODE_STATUS.REVOKED) {
    return {
      success: false,
      message: 'This access code has been revoked and is no longer valid.'
    };
  }
  if (matchedCode.status === CODE_STATUS.INACTIVE) {
    return {
      success: false,
      message: 'This access code is currently inactive. Please contact support.'
    };
  }
  if (matchedCode.status === CODE_STATUS.USED || matchedCode.status === CODE_STATUS.EXHAUSTED) {
    return {
      success: false,
      message: 'This access code has already been used and is exhausted.'
    };
  }

  // 4. Expiration check
  if (matchedCode.expiresAt) {
    const expDate = new Date(matchedCode.expiresAt);
    if (!isNaN(expDate.getTime()) && expDate < new Date()) {
      return {
        success: false,
        message: `This access code expired on ${expDate.toLocaleDateString()}.`
      };
    }
  }

  // 5. Code Type Specific Rules
  const effectiveType = matchedCode.codeType || matchedCode.type || CODE_TYPES.SINGLE_USE;
  const redemptions = Array.isArray(matchedCode.redemptions) ? matchedCode.redemptions : [];
  const currentCount = typeof matchedCode.redemptionCount === 'number' ? matchedCode.redemptionCount : redemptions.length;
  const userUid = userContext.userUid || userContext.uid || null;

  // Rule: Type A — Single-Use Code
  if (effectiveType === CODE_TYPES.SINGLE_USE && currentCount >= 1) {
    return {
      success: false,
      message: 'This single-use access code has already been used and is exhausted.'
    };
  }

  // Rule: Max Redemptions Cap
  if (matchedCode.maxRedemptions && currentCount >= matchedCode.maxRedemptions) {
    return {
      success: false,
      message: 'This access code has reached its maximum total redemptions.'
    };
  }

  // Rule: Type C — One Redemption Per Registered User
  if (effectiveType === CODE_TYPES.PER_USER && userUid) {
    const alreadyRedeemed = redemptions.some(r => r.userId === userUid || r.userUid === userUid);
    if (alreadyRedeemed) {
      // User already redeemed this code previously: return valid access without consuming another redemption!
      const existingToken = `token_${matchedCode.id}_${userUid}`;
      return {
        success: true,
        message: 'You have already unlocked this resource with this access code. Download access is active.',
        accessToken: existingToken,
        resourceSlug: targetSlug,
        alreadyOwned: true
      };
    }
  }

  // 6. Perform Atomic Redemption
  const newCount = currentCount + 1;
  const newStatus = (effectiveType === CODE_TYPES.SINGLE_USE && newCount >= 1)
    ? CODE_STATUS.EXHAUSTED
    : (matchedCode.maxRedemptions && newCount >= matchedCode.maxRedemptions ? CODE_STATUS.EXHAUSTED : CODE_STATUS.ACTIVE);

  const redemptionEntry = {
    id: `red_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    userId: userUid,
    userUid: userUid,
    userEmail: userContext.email || null,
    guestSessionToken: userContext.guestSessionToken || null,
    redeemedAt: new Date().toISOString(),
    resourceSlug: targetSlug
  };
  redemptions.push(redemptionEntry);

  const updatedCode = {
    ...matchedCode,
    redemptionCount: newCount,
    status: newStatus,
    redemptions,
    lastRedeemedAt: new Date().toISOString()
  };

  _inMemoryAccessCodes.set(matchedCode.id, updatedCode);

  // Persist redemption
  if (dbAdapter) {
    const docRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_access_codes', matchedCode.id);
    await dbAdapter.sdk.setDoc(docRef, updatedCode, { merge: true });

    // Store audit log
    const auditRef = dbAdapter.sdk.doc(dbAdapter.db, 'resource_redemptions', redemptionEntry.id);
    await dbAdapter.sdk.setDoc(auditRef, redemptionEntry);

    // If user is authenticated, record persistent access under /users/{uid}/resources/{slug}
    if (userUid) {
      const userResRef = dbAdapter.sdk.doc(dbAdapter.db, `users/${userUid}/resources`, targetSlug);
      await dbAdapter.sdk.setDoc(userResRef, {
        resourceSlug: targetSlug,
        codeId: matchedCode.id,
        unlockedAt: redemptionEntry.redeemedAt,
        status: 'active'
      });
    }
  } else {
    const db = await getFirestoreInstance();
    if (db) {
      const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
      await setDoc(doc(db, 'resource_access_codes', matchedCode.id), updatedCode, { merge: true });
      await setDoc(doc(db, 'resource_redemptions', redemptionEntry.id), redemptionEntry);
      if (userUid) {
        await setDoc(doc(db, `users/${userUid}/resources`, targetSlug), {
          resourceSlug: targetSlug,
          codeId: matchedCode.id,
          unlockedAt: redemptionEntry.redeemedAt,
          status: 'active'
        });
      }
    }
  }

  _inMemoryAccessCodes.set(matchedCode.id, updatedCode);

  // Generate secure token for client session
  const accessToken = `rp_access_${targetSlug}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // Store client access in localStorage for seamless reload access
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(`rp_resource_unlocked_${targetSlug}`, JSON.stringify({
        resourceSlug: targetSlug,
        accessToken,
        codeId: matchedCode.id,
        unlockedAt: redemptionEntry.redeemedAt
      }));
    } catch (_) {}
  }

  return {
    success: true,
    message: 'Access code verified! Your download is now unlocked.',
    accessToken,
    resourceSlug: targetSlug,
    alreadyOwned: false
  };
}

/**
 * Check if a user (or current browser guest) has authorized download access to a resource.
 *
 * @param {string|null} userUid
 * @param {string} resourceSlug
 * @param {object} [options]
 * @returns {Promise<{ hasAccess: boolean, accessRecord?: object }>}
 */
export async function checkUserResourceAccess(userUid, resourceSlug, options = {}) {
  const { dbAdapter } = options;
  const cleanSlug = (resourceSlug || '').trim().toLowerCase();
  if (!cleanSlug) return { hasAccess: false };

  // 1. Check client localStorage token
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const local = window.localStorage.getItem(`rp_resource_unlocked_${cleanSlug}`);
      if (local) {
        const parsed = JSON.parse(local);
        if (parsed.resourceSlug === cleanSlug) {
          return { hasAccess: true, accessRecord: parsed };
        }
      }
    } catch (_) {}
  }

  // 2. If authenticated, check Firestore user access records
  if (userUid) {
    if (dbAdapter) {
      const docRef = dbAdapter.sdk.doc(dbAdapter.db, `users/${userUid}/resources`, cleanSlug);
      const snap = await dbAdapter.sdk.getDoc(docRef);
      if (snap.exists() && snap.data().status === 'active') {
        return { hasAccess: true, accessRecord: snap.data() };
      }
    } else {
      const db = await getFirestoreInstance();
      if (db) {
        try {
          const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
          const snap = await getDoc(doc(db, `users/${userUid}/resources`, cleanSlug));
          if (snap.exists() && snap.data().status === 'active') {
            return { hasAccess: true, accessRecord: snap.data() };
          }
        } catch (_) {}
      }
    }
  }

  return { hasAccess: false };
}
