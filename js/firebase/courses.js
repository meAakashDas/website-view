// ==============================================
// risePaisa - Course Foundation, Enrollment & Data Model
// Minimal, secure, zero-overhead course platform foundation
// ==============================================

import { getFirestoreDb, withBoundedRetry } from './db.js';
import { getFirebaseApp } from './config.js';
import { getAllCourses, getCourseBySlug, updateCourseInCache, removeCourseFromCache } from '../data/courses.js';
import {
  generateStudentId,
  generateTemporaryPassword,
  formatStudentInternalEmail,
  validateNepaliPhoneNumber,
  normalizeNepaliPhoneNumber
} from './auth.js';

/**
 * Standard Account Status Enum
 */
export const ACCOUNT_STATUS = Object.freeze({
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  DISABLED: 'disabled'
});

/**
 * Standard Enrollment Status Enum
 */
export const ENROLLMENT_STATUS = Object.freeze({
  ACTIVE: 'active',
  REVOKED: 'revoked',
  EXPIRED: 'expired'
});

/**
 * Allowed Downloadable Resource File Types
 */
export const RESOURCE_FILE_TYPES = Object.freeze([
  'pdf',
  'excel',
  'csv',
  'sheet',
  'checklist',
  'document',
  'link'
]);

/**
 * Maximum permitted size for course downloadable file uploads (25 Megabytes)
 */
export const MAX_RESOURCE_FILE_SIZE_BYTES = 25 * 1024 * 1024;

/**
 * Permitted file extensions for physical course file uploads
 */
export const ALLOWED_RESOURCE_EXTENSIONS = Object.freeze([
  'pdf',
  'xlsx',
  'xls',
  'docx',
  'doc',
  'csv',
  'zip',
  'html',
  'txt'
]);

/**
 * Verified Pre-bundled Platform Learning Assets (stored in /assets/downloads/)
 */
export const PLATFORM_DOWNLOADABLE_ASSETS = Object.freeze([
  {
    title: 'NEPSE First-Time Investor Checklist',
    url: '/assets/downloads/nepse-first-time-investor-checklist.html',
    fileType: 'checklist',
    fileName: 'nepse-first-time-investor-checklist.html'
  },
  {
    title: 'Commercial Bank Loan Comparison Worksheet',
    url: '/assets/downloads/commercial-bank-loan-comparison-worksheet.csv',
    fileType: 'excel',
    fileName: 'commercial-bank-loan-comparison-worksheet.csv'
  },
  {
    title: 'Nepal Personal Budget Planner',
    url: '/assets/downloads/nepal-personal-budget-planner.csv',
    fileType: 'excel',
    fileName: 'nepal-personal-budget-planner.csv'
  },
  {
    title: 'Nepal Cash Flow Tracker',
    url: '/assets/downloads/nepal-cash-flow-tracker.csv',
    fileType: 'excel',
    fileName: 'nepal-cash-flow-tracker.csv'
  },
  {
    title: 'Nepal Salary & Tax Deductions Checklist',
    url: '/assets/downloads/nepal-salary-tax-deductions-checklist.html',
    fileType: 'checklist',
    fileName: 'nepal-salary-tax-deductions-checklist.html'
  },
  {
    title: 'Nepal Insurance Claim Checklist',
    url: '/assets/downloads/nepal-insurance-claim-checklist.html',
    fileType: 'checklist',
    fileName: 'nepal-insurance-claim-checklist.html'
  },
  {
    title: 'Nepal IPO Application Checklist',
    url: '/assets/downloads/nepal-ipo-application-checklist.html',
    fileType: 'checklist',
    fileName: 'nepal-ipo-application-checklist.html'
  },
  {
    title: 'Nepal SIP & Mutual Fund Checklist',
    url: '/assets/downloads/nepal-sip-mutual-fund-checklist.html',
    fileType: 'checklist',
    fileName: 'nepal-sip-mutual-fund-checklist.html'
  },
  {
    title: 'CDSC & Demat Transfer Checklist',
    url: '/assets/downloads/cdsc-demat-transfer-checklist.html',
    fileType: 'checklist',
    fileName: 'cdsc-demat-transfer-checklist.html'
  },
  {
    title: 'Company Registration & Compliance Checklist',
    url: '/assets/downloads/nepal-company-registration-compliance-checklist.html',
    fileType: 'checklist',
    fileName: 'nepal-company-registration-compliance-checklist.html'
  },
  {
    title: 'Nepal Digital Payment Safety Guide',
    url: '/assets/downloads/nepal-digital-payment-safety-guide.html',
    fileType: 'document',
    fileName: 'nepal-digital-payment-safety-guide.html'
  },
  {
    title: 'Financial Jargon Pocket Guide',
    url: '/assets/downloads/financial-jargon-pocket-guide.html',
    fileType: 'document',
    fileName: 'financial-jargon-pocket-guide.html'
  },
  {
    title: 'Essential Finance Reading List',
    url: '/assets/downloads/essential-finance-reading-list.html',
    fileType: 'document',
    fileName: 'essential-finance-reading-list.html'
  },
  {
    title: 'Nepal Bank Rates & Debenture Guide',
    url: '/assets/downloads/nepal-bank-rates-debenture-guide.html',
    fileType: 'document',
    fileName: 'nepal-bank-rates-debenture-guide.html'
  }
]);

/**
 * Validate a resource file before initiating storage upload.
 *
 * @param {File|object} file
 * @returns {{ valid: boolean, error?: string, extension?: string, sanitizedName?: string }}
 */
export function validateResourceFile(file) {
  if (!file) {
    return { valid: false, error: 'File object is required.' };
  }
  const name = typeof file.name === 'string' ? file.name.trim() : '';
  const size = typeof file.size === 'number' ? file.size : 0;

  if (!name || name.length === 0) {
    return { valid: false, error: 'File name is required.' };
  }
  if (name.length > 255) {
    return { valid: false, error: 'File name exceeds 255 characters.' };
  }
  if (name.includes('..') || name.includes('/') || name.includes('\\')) {
    return { valid: false, error: 'File name contains forbidden path characters.' };
  }

  if (size <= 0) {
    return { valid: false, error: 'File is empty (0 bytes).' };
  }
  if (size > MAX_RESOURCE_FILE_SIZE_BYTES) {
    const mb = Math.round(MAX_RESOURCE_FILE_SIZE_BYTES / (1024 * 1024));
    return { valid: false, error: `File size exceeds the maximum limit of ${mb}MB.` };
  }

  const extMatch = name.match(/\.([a-zA-Z0-9]+)$/);
  const ext = extMatch ? extMatch[1].toLowerCase() : '';
  if (!ext || !ALLOWED_RESOURCE_EXTENSIONS.includes(ext)) {
    return {
      valid: false,
      error: `Unsupported file extension ".${ext}". Allowed: ${ALLOWED_RESOURCE_EXTENSIONS.join(', ')}.`
    };
  }

  const sanitizedName = name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return { valid: true, extension: ext, sanitizedName };
}

/**
 * Upload a course downloadable resource file to Firebase Storage.
 *
 * @param {string} courseSlug - Target course slug
 * @param {File|object} file - Physical file object
 * @param {Function} [onProgress] - Callback for upload percentage (0-100)
 * @param {object} [options] - Additional options ({ uid, storageAdapter })
 * @returns {Promise<{ success: boolean, url: string, fileName: string, fileType: string, size: number, storagePath: string }>}
 */
export async function uploadCourseResource(courseSlug, file, onProgress, options = {}) {
  const { uid, storageAdapter } = options;

  if (uid) {
    const isAdmin = await checkIsAdmin(uid);
    if (!isAdmin) {
      throw new Error('Access Denied: Administrative permissions required to upload course resources.');
    }
  }

  const validation = validateResourceFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const cleanSlug = (courseSlug || 'general').trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
  const cleanFileName = validation.sanitizedName;
  const storagePath = `courses/${cleanSlug}/resources/${cleanFileName}`;

  // Custom storage adapter support (for tests and mocking)
  if (storageAdapter && typeof storageAdapter.upload === 'function') {
    if (typeof onProgress === 'function') onProgress(50);
    const res = await storageAdapter.upload(storagePath, file);
    if (typeof onProgress === 'function') onProgress(100);
    const detectedType = validation.extension === 'pdf' ? 'pdf' : (['csv', 'xlsx', 'xls'].includes(validation.extension) ? 'excel' : 'document');
    return {
      success: true,
      url: res.downloadUrl,
      fileName: cleanFileName,
      fileType: detectedType,
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
      const uploadTask = uploadBytesResumable(storageRef, file, {
        contentType: file.type || undefined
      });

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (typeof onProgress === 'function') {
            onProgress(Math.round(progress));
          }
        },
        (error) => {
          console.error('[risePaisa:Storage] Upload error:', error);
          reject(new Error(`Storage upload error: ${error.message}`));
        },
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            const detectedType = validation.extension === 'pdf' ? 'pdf' : (['csv', 'xlsx', 'xls'].includes(validation.extension) ? 'excel' : 'document');
            resolve({
              success: true,
              url: downloadUrl,
              fileName: cleanFileName,
              fileType: detectedType,
              size: file.size,
              storagePath
            });
          } catch (urlErr) {
            reject(new Error(`Failed to retrieve download URL: ${urlErr.message}`));
          }
        }
      );
    });
  }

  throw new Error('File uploads are only supported in browser environments or with a storage adapter.');
}

/**
 * In-memory enrollment session cache to prevent redundant Firestore queries
 * Key: `${uid}_${courseId}` -> { enrolled: boolean, status: string, timestamp: number }
 */
const _enrollmentCache = new Map();
const _inFlightEnrollmentChecks = new Map();

/**
 * In-memory course progress session cache
 * Key: `${uid}_${courseId}` -> Map<lessonId, progressObject>
 */
const _progressCache = new Map();

// =============================================================================
// 1. YouTube Safety & URL Helpers
// =============================================================================

/**
 * Approved YouTube hostnames (exact matches)
 */
const APPROVED_YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtu.be',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com'
]);

/**
 * Extract and strictly validate an 11-character YouTube video ID.
 * Protects against XSS, non-YouTube domain injection, and malformed identifiers.
 *
 * @param {string} url - YouTube URL
 * @returns {string|null} 11-character Video ID or null
 */
export function extractYouTubeVideoId(url) {
  if (!url || typeof url !== 'string') return null;
  let trimmed = url.trim();
  if (!trimmed) return null;

  // Reject dangerous pseudo-protocols
  const lower = trimmed.toLowerCase();
  if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:')) {
    return null;
  }

  // Prepend https:// if protocol is omitted
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname.toLowerCase();

    if (!APPROVED_YOUTUBE_HOSTS.has(host)) {
      return null;
    }

    let candidateId = null;

    if (host === 'youtu.be') {
      // Format: https://youtu.be/VIDEO_ID
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      candidateId = pathParts[0] || null;
    } else if (parsed.pathname.startsWith('/embed/')) {
      // Format: https://www.youtube.com/embed/VIDEO_ID
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      candidateId = pathParts[1] || null;
    } else if (parsed.pathname.startsWith('/v/')) {
      // Format: https://www.youtube.com/v/VIDEO_ID
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      candidateId = pathParts[1] || null;
    } else if (parsed.pathname.startsWith('/shorts/')) {
      // Format: https://www.youtube.com/shorts/VIDEO_ID
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      candidateId = pathParts[1] || null;
    } else if (parsed.pathname.startsWith('/live/')) {
      // Format: https://www.youtube.com/live/VIDEO_ID
      const pathParts = parsed.pathname.split('/').filter(Boolean);
      candidateId = pathParts[1] || null;
    } else {
      // Format: https://www.youtube.com/watch?v=VIDEO_ID
      candidateId = parsed.searchParams.get('v');
    }

    // Strict validation: YouTube IDs are precisely 11 base64-like characters
    if (candidateId && /^[a-zA-Z0-9_-]{11}$/.test(candidateId)) {
      return candidateId;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Validate whether a string is a valid YouTube video URL.
 *
 * @param {string} url
 * @returns {boolean}
 */
export function validateYouTubeUrl(url) {
  return extractYouTubeVideoId(url) !== null;
}

/**
 * Convert any valid YouTube URL to its authoritative, canonical watch URL form:
 * https://www.youtube.com/watch?v=VIDEO_ID
 *
 * @param {string} url
 * @returns {string|null} Canonical URL or null if invalid
 */
export function toCanonicalYouTubeUrl(url) {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Generate a privacy-enhanced, sanitized YouTube embed URL.
 * Employs youtube-nocookie.com and suppresses related third-party videos.
 *
 * @param {string} url - Raw YouTube URL
 * @returns {string|null} Sanitized embed URL or null if invalid
 */
export function toSafeYouTubeEmbedUrl(url) {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
}

/**
 * Validate downloadable learning resource URLs.
 * Ensures URLs target safe local assets or secure HTTPS endpoints,
 * rejecting dangerous schemes and arbitrary script execution.
 *
 * @param {string} url
 * @returns {{ valid: boolean, error?: string }}
 */
export function validateResourceUrl(url) {
  if (!url || typeof url !== 'string') {
    return { valid: false, error: 'Resource URL is required and must be a string.' };
  }

  const trimmed = url.trim();
  const lower = trimmed.toLowerCase();

  // Reject script injection schemes
  if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:') || lower.startsWith('file:')) {
    return { valid: false, error: 'Forbidden URL scheme detected.' };
  }

  // Safe relative paths (e.g. /assets/downloads/checklist.html or assets/downloads/worksheet.csv)
  if (trimmed.startsWith('/assets/') || trimmed.startsWith('assets/')) {
    return { valid: true };
  }

  // Safe HTTPS links
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:' && parsed.hostname !== 'localhost') {
      return { valid: false, error: 'Only secure HTTPS resource URLs are permitted.' };
    }
    return { valid: true };
  } catch {
    return { valid: false, error: 'Malformed resource URL.' };
  }
}

/**
 * Safely escape plain text content to prevent XSS injection.
 *
 * @param {string} text
 * @returns {string}
 */
export function sanitizeText(text) {
  if (text == null) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// =============================================================================
// 2. Schema Validation (Course, Topic, Lesson, Resource)
// =============================================================================

/**
 * Validate Course Metadata
 *
 * @param {object} course
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateCourse(course) {
  const errors = [];
  if (!course || typeof course !== 'object') {
    return { valid: false, errors: ['Course must be an object.'] };
  }

  const { id, slug, title, shortDescription, published, displayOrder } = course;

  if (id === undefined || id === null || String(id).trim() === '') {
    errors.push('Course must have a non-empty id.');
  }

  if (typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug)) {
    errors.push('Course slug must be a non-empty string consisting of lowercase letters, numbers, and hyphens.');
  }

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Course title must be a non-empty string under 200 characters.');
  }

  if (typeof shortDescription !== 'string' || shortDescription.trim().length === 0 || shortDescription.length > 500) {
    errors.push('Course shortDescription must be a non-empty string under 500 characters.');
  }

  if (typeof published !== 'boolean') {
    errors.push('Course published flag must be a boolean.');
  }

  if (typeof displayOrder !== 'number' || isNaN(displayOrder)) {
    errors.push('Course displayOrder must be a valid number.');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate Topic / Module Metadata
 *
 * @param {object} topic
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateTopic(topic) {
  const errors = [];
  if (!topic || typeof topic !== 'object') {
    return { valid: false, errors: ['Topic must be an object.'] };
  }

  const { id, title, displayOrder, published } = topic;

  if (!id || typeof id !== 'string' || id.trim() === '') {
    errors.push('Topic id must be a non-empty string.');
  }

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Topic title must be a non-empty string under 200 characters.');
  }

  if (typeof displayOrder !== 'number' || isNaN(displayOrder)) {
    errors.push('Topic displayOrder must be a valid number.');
  }

  if (typeof published !== 'boolean') {
    errors.push('Topic published flag must be a boolean.');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate Lesson Metadata
 *
 * @param {object} lesson
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateLesson(lesson) {
  const errors = [];
  if (!lesson || typeof lesson !== 'object') {
    return { valid: false, errors: ['Lesson must be an object.'] };
  }

  const { id, title, displayOrder, published, youtubeUrl, resources } = lesson;

  if (!id || typeof id !== 'string' || id.trim() === '') {
    errors.push('Lesson id must be a non-empty string.');
  }

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Lesson title must be a non-empty string under 200 characters.');
  }

  if (typeof displayOrder !== 'number' || isNaN(displayOrder)) {
    errors.push('Lesson displayOrder must be a valid number.');
  }

  if (typeof published !== 'boolean') {
    errors.push('Lesson published flag must be a boolean.');
  }

  if (youtubeUrl !== undefined && youtubeUrl !== null && youtubeUrl !== '') {
    if (!validateYouTubeUrl(youtubeUrl)) {
      errors.push(`Invalid YouTube URL "${youtubeUrl}" in lesson "${lesson.title}".`);
    }
  }

  if (resources !== undefined && resources !== null) {
    if (!Array.isArray(resources)) {
      errors.push('Lesson resources must be an array.');
    } else {
      resources.forEach((res, idx) => {
        const resValidation = validateResource(res);
        if (!resValidation.valid) {
          errors.push(`Resource at index ${idx} is invalid: ${resValidation.errors.join('; ')}`);
        }
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate Resource Metadata
 *
 * @param {object} resource
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateResource(resource) {
  const errors = [];
  if (!resource || typeof resource !== 'object') {
    return { valid: false, errors: ['Resource must be an object.'] };
  }

  const { title, url, fileType } = resource;

  if (typeof title !== 'string' || title.trim().length === 0 || title.length > 200) {
    errors.push('Resource title must be a non-empty string under 200 characters.');
  }

  const urlCheck = validateResourceUrl(url);
  if (!urlCheck.valid) {
    errors.push(urlCheck.error || 'Invalid resource URL.');
  }

  if (fileType !== undefined && fileType !== null && fileType !== '') {
    if (typeof fileType !== 'string' || !RESOURCE_FILE_TYPES.includes(fileType.toLowerCase())) {
      errors.push(`Invalid fileType "${fileType}". Allowed: ${RESOURCE_FILE_TYPES.join(', ')}.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// =============================================================================
// 3. Normalizer & Hierarchy Builder (COURSE -> TOPIC -> LESSON -> RESOURCE)
// =============================================================================

/**
 * Normalizes existing catalog course data (from js/data/courses.js) into
 * the formal, structured RisePaisa Course Data Model.
 *
 * @param {object} rawCourse - Course object from js/data/courses.js
 * @returns {object} Normalized Course Model with nested Topics and Lessons
 */
export function normalizeCourseData(rawCourse) {
  if (!rawCourse) return null;

  const courseId = String(rawCourse.id || rawCourse.slug || 'course');
  const slug = rawCourse.slug || `course-${courseId}`;

  const normalized = {
    id: courseId,
    slug: slug,
    title: rawCourse.title || '',
    shortDescription: rawCourse.shortDescription || '',
    description: rawCourse.description || rawCourse.fullDescription || rawCourse.shortDescription || '',
    fullDescription: rawCourse.fullDescription || rawCourse.description || rawCourse.shortDescription || '',
    thumbnail: rawCourse.thumbnail || null,
    price: rawCourse.price || 0,
    currency: rawCourse.currency || 'NPR',
    duration: rawCourse.duration || '',
    category: rawCourse.category || 'General',
    instructor: rawCourse.instructor || 'Aakash Das',
    instructorRole: rawCourse.instructorRole || 'Founder of RisePaisa',
    instructorNote: rawCourse.instructorNote || '',
    level: rawCourse.level || 'Beginner to Advanced',
    format: rawCourse.format || 'Beginner Friendly',
    compatibility: rawCourse.compatibility || 'Mobile + Desktop',
    featuresList: Array.isArray(rawCourse.featuresList) ? rawCourse.featuresList : [],
    whatYouWillGet: Array.isArray(rawCourse.whatYouWillGet) ? rawCourse.whatYouWillGet : [],
    benefitsTitle: rawCourse.benefitsTitle || 'What You Will Get',
    targetAudience: rawCourse.targetAudience || '',
    published: rawCourse.published !== undefined ? Boolean(rawCourse.published) : (rawCourse.isPublished !== false),
    isPublished: rawCourse.published !== undefined ? Boolean(rawCourse.published) : (rawCourse.isPublished !== false),
    displayOrder: typeof rawCourse.displayOrder === 'number' ? rawCourse.displayOrder : (typeof rawCourse.id === 'number' ? rawCourse.id : 1),
    previewVideoUrl: rawCourse.previewVideoUrl || null,
    createdAt: rawCourse.createdAt || null,
    updatedAt: rawCourse.updatedAt || null,
    topics: []
  };

  if (Array.isArray(rawCourse.topics)) {
    normalized.topics = rawCourse.topics.map((top, topIdx) => {
      const topicOrder = top.displayOrder || (topIdx + 1);
      const topicId = top.id || `topic-${topicOrder}`;
      const topicTitle = top.title || `Module ${topicOrder}`;

      const lessons = Array.isArray(top.lessons) ? top.lessons.map((les, lesIdx) => {
        const lessonOrder = les.displayOrder || (lesIdx + 1);
        const lessonId = les.id || `lesson-${lessonOrder}`;
        const lessonTitle = les.title || `Lesson ${lessonOrder}`;
        const lessonDuration = les.duration || null;

        let lessonYouTubeUrl = null;
        if (les.youtubeUrl) {
          lessonYouTubeUrl = toCanonicalYouTubeUrl(les.youtubeUrl) || les.youtubeUrl;
        } else if (topIdx === 0 && lesIdx === 0 && rawCourse.previewVideoUrl) {
          lessonYouTubeUrl = toCanonicalYouTubeUrl(rawCourse.previewVideoUrl) || rawCourse.previewVideoUrl;
        }

        const isLessonFree = les.isFree !== undefined
          ? Boolean(les.isFree)
          : Boolean(topIdx === 0 && lesIdx === 0);

        const isLessonPublished = les.published !== undefined
          ? Boolean(les.published)
          : true;

        const lessonResources = Array.isArray(les.resources) ? les.resources : [];

        return {
          id: lessonId,
          topicId: topicId,
          title: lessonTitle,
          videoTitle: lessonTitle,
          shortDescription: les.shortDescription || les.goal || les.videoTitle || '',
          goal: les.shortDescription || les.goal || '',
          youtubeUrl: lessonYouTubeUrl,
          duration: lessonDuration,
          displayOrder: lessonOrder,
          rank: lessonOrder,
          published: isLessonPublished,
          isFree: isLessonFree,
          resources: lessonResources
        };
      }) : [];

      const isTopicPublished = top.published !== undefined
        ? Boolean(top.published)
        : true;

      return {
        id: topicId,
        title: topicTitle,
        shortDescription: top.shortDescription || '',
        displayOrder: topicOrder,
        moduleNumber: topicOrder,
        published: isTopicPublished,
        lessons: lessons
      };
    });
  } else if (Array.isArray(rawCourse.curriculum)) {
    normalized.topics = rawCourse.curriculum.map((mod, modIdx) => {
      const topicOrder = mod.moduleNumber || (modIdx + 1);
      const topicId = `topic-${topicOrder}`;
      const topicTitle = mod.title || `Module ${topicOrder}`;

      const lessons = Array.isArray(mod.lessons) ? mod.lessons.map((les, lesIdx) => {
        let lessonId;
        let lessonTitle;
        let lessonDuration = null;
        let lessonOrder;

        if (typeof les === 'string') {
          lessonOrder = lesIdx + 1;
          lessonId = `lesson-${topicOrder}-${lessonOrder}`;
          lessonTitle = les;
        } else {
          lessonOrder = les.rank || (lesIdx + 1);
          lessonId = `lesson-${lessonOrder}`;
          lessonTitle = les.title || `Lesson ${lessonOrder}`;
          lessonDuration = les.duration || null;
        }

        // Support resources defined on lesson or default first-time checklist
        let lessonResources = [];
        if (typeof les === 'object' && Array.isArray(les.resources) && les.resources.length > 0) {
          lessonResources = les.resources;
        } else if (modIdx === 0 && lesIdx === 0 && (rawCourse.id === 1 || rawCourse.slug === 'nepse-stock-market-basics')) {
          lessonResources = [
            {
              title: 'NEPSE First-Time Investor Checklist',
              url: '/assets/downloads/nepse-first-time-investor-checklist.html',
              fileType: 'checklist'
            }
          ];
        }

        const isLessonFree = (typeof les === 'object' && les.isFree !== undefined)
          ? Boolean(les.isFree)
          : Boolean(modIdx === 0 && lesIdx === 0);

        const lessonYouTubeUrl = (typeof les === 'object' && les.youtubeUrl)
          ? (toCanonicalYouTubeUrl(les.youtubeUrl) || les.youtubeUrl)
          : ((modIdx === 0 && lesIdx === 0 && rawCourse.previewVideoUrl) ? (toCanonicalYouTubeUrl(rawCourse.previewVideoUrl) || rawCourse.previewVideoUrl) : null);

        const isLessonPublished = (typeof les === 'object' && les.published !== undefined)
          ? Boolean(les.published)
          : true;

        return {
          id: lessonId,
          topicId: topicId,
          title: lessonTitle,
          videoTitle: lessonTitle,
          shortDescription: (typeof les === 'object' && les.shortDescription)
            ? les.shortDescription
            : (les.goal || les.videoTitle || ''),
          goal: (typeof les === 'object' && les.shortDescription)
            ? les.shortDescription
            : (les.goal || ''),
          youtubeUrl: lessonYouTubeUrl,
          duration: lessonDuration,
          displayOrder: lessonOrder,
          rank: lessonOrder,
          published: isLessonPublished,
          isFree: isLessonFree,
          resources: lessonResources
        };
      }) : [];

      const isTopicPublished = (typeof mod === 'object' && mod.published !== undefined)
        ? Boolean(mod.published)
        : true;

      return {
        id: topicId,
        title: topicTitle,
        shortDescription: mod.goal || '',
        displayOrder: topicOrder,
        moduleNumber: topicOrder,
        published: isTopicPublished,
        lessons: lessons
      };
    });
  }

  // Ensure previewVideoUrl reflects Lesson 1's YouTube URL if set
  if (normalized.topics.length > 0 && normalized.topics[0].lessons?.length > 0) {
    const l1Url = normalized.topics[0].lessons[0].youtubeUrl;
    if (l1Url) {
      normalized.previewVideoUrl = l1Url;
    }
  }

  // Mirror topics into curriculum for backward-compatible consumption across detail pages
  normalized.curriculum = normalized.topics.map(t => ({
    moduleNumber: t.displayOrder,
    title: t.title,
    goal: t.shortDescription || '',
    published: t.published,
    lessons: (t.lessons || []).map(l => ({
      rank: l.displayOrder,
      title: l.title,
      duration: l.duration || '',
      shortDescription: l.shortDescription || '',
      youtubeUrl: l.youtubeUrl || null,
      isFree: l.isFree,
      published: l.published,
      resources: l.resources || []
    }))
  }));

  return normalized;
}

// =============================================================================
// 4. Enrollment Foundation & Security Checks
// =============================================================================

/**
 * Standard Enrollment Audit Event Enum
 */
export const ENROLLMENT_AUDIT_EVENT = Object.freeze({
  ACCESS_GRANTED: 'access_granted',
  ACCESS_RENEWED: 'access_renewed',
  ACCESS_REVOKED: 'access_revoked',
  EXPIRATION_UPDATED: 'expiration_updated',
  STUDENT_ACCOUNT_CREATED: 'student_account_created',
  STUDENT_ACCOUNT_SUSPENDED: 'student_account_suspended',
  STUDENT_ACCOUNT_REACTIVATED: 'student_account_reactivated',
  STUDENT_PASSWORD_RESET: 'student_password_reset',
  STUDENT_PROFILE_UPDATED: 'student_profile_updated'
});

/**
 * Permitted Fields in Authoritative Enrollment Documents
 */
export const ALLOWED_ENROLLMENT_KEYS = Object.freeze([
  'courseId',
  'courseSlug',
  'status',
  'grantedAt',
  'grantedBy',
  'startsAt',
  'expiresAt',
  'updatedAt',
  'updatedBy',
  'revokedAt',
  'revokedBy',
  'source',
  'enrolledAt'
]);

/**
 * Safely parse a Firestore Timestamp, Date, string, or number to epoch milliseconds.
 * Returns null if the value is missing or unparseable.
 *
 * @param {any} val
 * @returns {number|null}
 */
export function parseDateToMillis(val) {
  if (!val) return null;
  if (typeof val.toDate === 'function') {
    try {
      return val.toDate().getTime();
    } catch {
      return null;
    }
  }
  if (val instanceof Date) {
    const t = val.getTime();
    return isNaN(t) ? null : t;
  }
  if (typeof val.seconds === 'number') {
    return val.seconds * 1000 + (val.nanoseconds ? Math.floor(val.nanoseconds / 1e6) : 0);
  }
  if (typeof val === 'number') {
    return isFinite(val) ? val : null;
  }
  if (typeof val === 'string') {
    const parsed = Date.parse(val);
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}

/**
 * Validate an enrollment document payload.
 *
 * @param {object} payload
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateEnrollmentPayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['Enrollment payload must be an object.'] };
  }

  const { courseId, status } = payload;

  if (!courseId || typeof courseId !== 'string' || courseId.trim() === '') {
    errors.push('Enrollment courseId must be a non-empty string.');
  }

  const allowedStatuses = Object.values(ENROLLMENT_STATUS);
  if (!status || !allowedStatuses.includes(status)) {
    errors.push(`Invalid enrollment status "${status}". Allowed: ${allowedStatuses.join(', ')}.`);
  }

  const extraKeys = Object.keys(payload).filter(k => !ALLOWED_ENROLLMENT_KEYS.includes(k));
  if (extraKeys.length > 0) {
    errors.push(`Disallowed fields found in enrollment payload: ${extraKeys.join(', ')}.`);
  }

  if (payload.courseSlug !== undefined && payload.courseSlug !== null) {
    if (typeof payload.courseSlug !== 'string' || payload.courseSlug.length > 100) {
      errors.push('courseSlug must be a string up to 100 characters.');
    }
  }

  if (payload.source !== undefined && payload.source !== null) {
    if (typeof payload.source !== 'string' || payload.source.length > 50) {
      errors.push('source must be a string up to 50 characters.');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Strict Security Guard:
 * Prevents client-side operations from self-granting paid course enrollments.
 *
 * All course enrollment writes must be executed exclusively by authorized
 * administrators via verified Firestore security rules.
 *
 * @param {object} attemptedPayload
 * @throws {Error} Always throws on client execution
 */
export function assertClientCannotEnroll(attemptedPayload = {}) {
  throw new Error(
    'SECURITY ERROR: Client-side self-enrollment is forbidden. ' +
    'Course enrollments cannot be self-assigned or written from browser JavaScript. ' +
    'Enrollment status must be validated and issued exclusively through a trusted server mechanism.'
  );
}

/**
 * Helper to determine whether an enrollment document grants active access.
 *
 * An enrollment is active only when:
 * 1. The enrollment document exists.
 * 2. status === "active" (an enrollment with status "revoked" or "expired" never grants access).
 * 3. The current time is at or after startsAt, if startsAt exists.
 * 4. The current time is strictly before expiresAt, if expiresAt exists.
 *
 * @param {object|null} enrollmentDoc
 * @param {Date|number} [referenceTime=new Date()]
 * @returns {boolean}
 */
export function isEnrollmentActive(enrollmentDoc, referenceTime = new Date()) {
  if (!enrollmentDoc || typeof enrollmentDoc !== 'object') return false;
  if (enrollmentDoc.status !== ENROLLMENT_STATUS.ACTIVE) return false;
  if (enrollmentDoc.accountStatus === 'suspended') return false;

  const refMs = referenceTime instanceof Date ? referenceTime.getTime() : Number(referenceTime);
  if (isNaN(refMs)) return false;

  // Check startsAt: current time must be at or after startsAt
  if (enrollmentDoc.startsAt) {
    const startsAtMs = parseDateToMillis(enrollmentDoc.startsAt);
    if (startsAtMs !== null && refMs < startsAtMs) {
      return false;
    }
  }

  // Check expiresAt: current time must be strictly before expiresAt (access ends at expiresAt instant)
  if (enrollmentDoc.expiresAt) {
    const expiresAtMs = parseDateToMillis(enrollmentDoc.expiresAt);
    if (expiresAtMs !== null && refMs >= expiresAtMs) {
      return false;
    }
  }

  return true;
}

/**
 * Resolve human-readable enrollment display status.
 *
 * Possible return values:
 * - 'active': Valid, unexpired, unrevoked active enrollment
 * - 'revoked': Access explicitly revoked by administration
 * - 'expired': Expiration date has elapsed
 * - 'scheduled': Future start date not yet reached
 * - 'not_enrolled': No record found
 *
 * @param {object|null} enrollmentDoc
 * @param {Date|number} [referenceTime=new Date()]
 * @returns {'active'|'revoked'|'expired'|'scheduled'|'not_enrolled'}
 */
export function resolveEnrollmentDisplayStatus(enrollmentDoc, referenceTime = new Date()) {
  if (!enrollmentDoc || typeof enrollmentDoc !== 'object') return 'not_enrolled';
  if (enrollmentDoc.status === ENROLLMENT_STATUS.REVOKED) return 'revoked';
  if (enrollmentDoc.status === ENROLLMENT_STATUS.EXPIRED) return 'expired';

  const refMs = referenceTime instanceof Date ? referenceTime.getTime() : Number(referenceTime);
  if (!isNaN(refMs)) {
    if (enrollmentDoc.expiresAt) {
      const expiresAtMs = parseDateToMillis(enrollmentDoc.expiresAt);
      if (expiresAtMs !== null && refMs >= expiresAtMs) {
        return 'expired';
      }
    }
    if (enrollmentDoc.startsAt) {
      const startsAtMs = parseDateToMillis(enrollmentDoc.startsAt);
      if (startsAtMs !== null && refMs < startsAtMs) {
        return 'scheduled';
      }
    }
  }

  if (enrollmentDoc.status === ENROLLMENT_STATUS.ACTIVE) {
    return 'active';
  }

  return enrollmentDoc.status || 'not_enrolled';
}

// =============================================================================
// 5. Lesson Progress Foundation (Decoupled from Enrollment)
// =============================================================================

/**
 * Validate a lesson progress payload.
 * Strictly forbids any privilege escalation keys (e.g. status, access, paid, role).
 * Progress is purely informative and NEVER confers course access.
 *
 * @param {object} payload
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateLessonProgressPayload(payload) {
  const errors = [];
  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['Progress payload must be an object.'] };
  }

  // Explicit check against privilege escalation
  const forbiddenKeys = ['enrolled', 'access', 'paid', 'status', 'role', 'isAdmin', 'courseAccess'];
  for (const key of forbiddenKeys) {
    if (key in payload) {
      errors.push(`Forbidden field "${key}" detected in progress payload.`);
    }
  }

  const allowedKeys = ['completed', 'lastPositionSeconds', 'updatedAt'];
  const extraKeys = Object.keys(payload).filter(k => !allowedKeys.includes(k));
  if (extraKeys.length > 0) {
    errors.push(`Disallowed fields in progress payload: ${extraKeys.join(', ')}.`);
  }

  if (typeof payload.completed !== 'boolean') {
    errors.push('Lesson progress "completed" flag must be a boolean.');
  }

  if (payload.lastPositionSeconds !== undefined && payload.lastPositionSeconds !== null) {
    if (typeof payload.lastPositionSeconds !== 'number' || payload.lastPositionSeconds < 0 || !isFinite(payload.lastPositionSeconds)) {
      errors.push('lastPositionSeconds must be a non-negative finite number.');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// =============================================================================
// 6. Client-Side Read-Only Firestore Methods (Zero Overhead for Guests)
// =============================================================================

/**
 * Check if the currently authenticated user is enrolled in a specific course.
 * Performs ZERO Firestore queries for guest / unauthenticated visitors.
 * Utilizes an in-memory session cache to avoid repeated network reads.
 *
 * @param {string|null} uid - Firebase Auth UID
 * @param {string} courseId - Stable course ID or slug
 * @returns {Promise<{ enrolled: boolean, status: string, enrolledAt?: any }>}
 */
export async function checkUserEnrollment(uid, courseId, forceRefresh = false, dbOverride = null) {
  if (!uid || typeof uid !== 'string' || !courseId) {
    // Zero database calls for guest visitors or missing parameters
    return { enrolled: false, hasAccess: false, status: 'none', cached: false };
  }

  let refresh = Boolean(forceRefresh);
  let override = dbOverride;
  if (forceRefresh && typeof forceRefresh === 'object') {
    if (forceRefresh.db && forceRefresh.sdk) {
      override = forceRefresh;
    } else if (typeof forceRefresh.getDoc === 'function') {
      override = { db: forceRefresh, sdk: forceRefresh };
    }
    refresh = true;
  }

  const cleanCourseId = String(courseId).trim().toLowerCase();
  const cacheKey = `${uid}_${cleanCourseId}`;

  // Check in-memory session cache (60s freshness window)
  const CACHE_TTL_MS = 60 * 1000;
  if (!refresh && _enrollmentCache.has(cacheKey)) {
    const cached = _enrollmentCache.get(cacheKey);
    const age = Date.now() - (cached._cachedAt || 0);
    if (age < CACHE_TTL_MS) {
      if (cached.data) {
        // Dynamically re-evaluate expiration against current instant
        const nowActive = isEnrollmentActive(cached.data);
        const nowStatus = resolveEnrollmentDisplayStatus(cached.data);
        return {
          ...cached,
          enrolled: nowActive,
          hasAccess: nowActive && !cached.isSuspended && !cached.onboardingRequired,
          status: nowStatus,
          cached: true
        };
      }
      return { ...cached, cached: true };
    }
  }

  if (!refresh && _inFlightEnrollmentChecks.has(cacheKey)) {
    return _inFlightEnrollmentChecks.get(cacheKey);
  }

  const checkPromise = (async () => {
    const bundle = override || await getFirestoreDb();
    if (!bundle) {
      // Node.js or uninitialized Firebase
      return { enrolled: false, hasAccess: false, status: 'unavailable', cached: false };
    }

    const { db, sdk } = bundle;

    // Authoritative Account Status Verification: Suspended accounts cannot access protected courses
    try {
      const userDocRef = sdk.doc(db, 'users', uid);
      const userSnap = await withBoundedRetry(async () => sdk.getDoc(userDocRef));
      if (userSnap && (typeof userSnap.exists === 'function' ? userSnap.exists() : Boolean(userSnap.exists))) {
        const uData = userSnap.data() || {};
        if (uData.accountStatus === 'suspended') {
          const suspendedResult = {
            enrolled: false,
            hasAccess: false,
            isSuspended: true,
            onboardingRequired: false,
            status: 'suspended',
            rawStatus: 'suspended',
            accountStatus: 'suspended',
            reason: 'account_suspended',
            message: 'Your RisePaisa account is currently suspended. Please contact support for assistance.',
            cached: false,
            _cachedAt: Date.now()
          };
          _enrollmentCache.set(cacheKey, suspendedResult);
          return suspendedResult;
        }
        if (uData.onboardingCompleted === false) {
          const onboardingResult = {
            enrolled: false,
            hasAccess: false,
            isSuspended: false,
            onboardingRequired: true,
            status: 'onboarding_required',
            rawStatus: 'onboarding_required',
            reason: 'onboarding_required',
            message: 'Please complete your student profile onboarding to access course lessons.',
            cached: false,
            _cachedAt: Date.now()
          };
          _enrollmentCache.set(cacheKey, onboardingResult);
          return onboardingResult;
        }
      }
    } catch (userErr) {
      // If user read is permission-denied due to suspension rules, fail closed safely
      if (userErr && String(userErr.code || userErr.message).includes('permission-denied')) {
        return { enrolled: false, hasAccess: false, status: 'error', cached: false };
      }
    }

    const enrollmentRef = sdk.doc(db, 'users', uid, 'courses', cleanCourseId);

    try {
      const snap = await withBoundedRetry(async () => sdk.getDoc(enrollmentRef));
      if (!snap.exists()) {
        const result = {
          enrolled: false,
          hasAccess: false,
          isSuspended: false,
          onboardingRequired: false,
          status: 'not_enrolled',
          reason: 'not_enrolled',
          cached: false,
          _cachedAt: Date.now()
        };
        _enrollmentCache.set(cacheKey, result);
        return result;
      }

      const data = snap.data() || {};
      const isActive = isEnrollmentActive(data);
      const displayStatus = resolveEnrollmentDisplayStatus(data);
      const result = {
        enrolled: isActive,
        hasAccess: isActive,
        isSuspended: false,
        onboardingRequired: false,
        status: displayStatus,
        reason: isActive ? 'enrolled' : (displayStatus === 'expired' ? 'expired' : 'revoked'),
        rawStatus: data.status || 'not_enrolled',
        enrolledAt: data.enrolledAt || data.grantedAt || null,
        startsAt: data.startsAt || null,
        expiresAt: data.expiresAt || null,
        data: data,
        cached: false,
        _cachedAt: Date.now()
      };

      _enrollmentCache.set(cacheKey, result);
      return result;
    } catch (err) {
      // If security rules forbid read or network error occurs, fail closed safely
      console.warn('[risePaisa:Course] Could not check enrollment status:', err.message || err);
      return { enrolled: false, hasAccess: false, status: 'error', cached: false };
    }
  })();

  _inFlightEnrollmentChecks.set(cacheKey, checkPromise);
  checkPromise.finally(() => {
    _inFlightEnrollmentChecks.delete(cacheKey);
  });
  return checkPromise;
}

/**
 * Fetch lesson progress for an authenticated user.
 *
 * @param {string|null} uid
 * @param {string} courseId
 * @returns {Promise<Record<string, { completed: boolean, lastPositionSeconds?: number }>>}
 */
export async function fetchUserCourseProgress(uid, courseId) {
  if (!uid || !courseId) return {};

  const cleanCourseId = String(courseId).trim().toLowerCase();
  const cacheKey = `${uid}_${cleanCourseId}`;

  if (_progressCache.has(cacheKey)) {
    return Object.fromEntries(_progressCache.get(cacheKey));
  }

  const bundle = await getFirestoreDb();
  if (!bundle) return {};

  const { db, sdk } = bundle;
  const lessonsColRef = sdk.collection(db, 'users', uid, 'courses', cleanCourseId, 'lessons');

  try {
    const querySnap = await sdk.getDocs(lessonsColRef);
    const progressMap = new Map();

    querySnap.forEach(docSnap => {
      const d = docSnap.data();
      progressMap.set(docSnap.id, {
        completed: Boolean(d.completed),
        lastPositionSeconds: d.lastPositionSeconds || 0
      });
    });

    _progressCache.set(cacheKey, progressMap);
    return Object.fromEntries(progressMap);
  } catch (err) {
    console.warn('[risePaisa:Course] Could not fetch progress:', err.message || err);
    return {};
  }
}

/**
 * Update lesson progress for an authenticated user.
 *
 * @param {string} uid
 * @param {string} courseId
 * @param {string} lessonId
 * @param {object} payload - { completed: boolean, lastPositionSeconds?: number }
 * @returns {Promise<boolean>}
 */
export async function saveUserLessonProgress(uid, courseId, lessonId, payload) {
  if (!uid || !courseId || !lessonId) return false;

  const validation = validateLessonProgressPayload(payload);
  if (!validation.valid) {
    console.error('[risePaisa:Course] Invalid progress payload:', validation.errors);
    return false;
  }

  const bundle = await getFirestoreDb();
  if (!bundle) return false;

  const { db, sdk } = bundle;
  const cleanCourseId = String(courseId).trim().toLowerCase();
  const cleanLessonId = String(lessonId).trim().toLowerCase();

  const lessonDocRef = sdk.doc(db, 'users', uid, 'courses', cleanCourseId, 'lessons', cleanLessonId);

  try {
    const dataToWrite = {
      completed: Boolean(payload.completed),
      updatedAt: sdk.serverTimestamp()
    };
    if (payload.lastPositionSeconds !== undefined) {
      dataToWrite.lastPositionSeconds = Math.max(0, Math.floor(payload.lastPositionSeconds));
    }

    await sdk.setDoc(lessonDocRef, dataToWrite, { merge: true });

    // Update in-memory cache
    const cacheKey = `${uid}_${cleanCourseId}`;
    if (!_progressCache.has(cacheKey)) {
      _progressCache.set(cacheKey, new Map());
    }
    const userMap = _progressCache.get(cacheKey);
    userMap.set(cleanLessonId, {
      completed: dataToWrite.completed,
      lastPositionSeconds: dataToWrite.lastPositionSeconds || 0
    });

    return true;
  } catch (err) {
    console.error('[risePaisa:Course] Failed to save progress:', err);
    return false;
  }
}

/**
 * In-memory course metadata cache
 * Key: courseSlug -> courseObject
 */
const _courseDataCache = new Map();
const _inFlightCourseData = new Map();

/**
 * Fetch course data from Firestore with transparent fallback to static catalog.
 * Guarantees that admin updates in Firestore are immediately visible while
 * preserving static and offline operation.
 *
 * @param {string} slugOrId
 * @returns {Promise<object|null>}
 */
export async function fetchCourseData(slugOrId, dbOverride = null) {
  if (!slugOrId) return null;
  const cleanKey = String(slugOrId).trim().toLowerCase();

  if (_courseDataCache.has(cleanKey)) {
    return _courseDataCache.get(cleanKey);
  }

  // Check localStorage early so caller gets cached values synchronously if available
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const cached = window.localStorage.getItem(`rp_course_cache_${cleanKey}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        const normalized = normalizeCourseData(parsed);
        if (normalized) {
          _courseDataCache.set(cleanKey, normalized);
          if (normalized.slug && normalized.slug !== cleanKey) {
            _courseDataCache.set(normalized.slug.toLowerCase(), normalized);
          }
          if (normalized.id && String(normalized.id).toLowerCase() !== cleanKey) {
            _courseDataCache.set(String(normalized.id).toLowerCase(), normalized);
          }
          if (typeof updateCourseInCache === 'function') {
            updateCourseInCache(normalized);
          }
        }
      }
    } catch {}
  }

  if (_inFlightCourseData.has(cleanKey)) {
    return _inFlightCourseData.get(cleanKey);
  }

  const fetchPromise = (async () => {
    // 1. Attempt Firestore read if online and available
    const bundle = dbOverride || await getFirestoreDb();
    if (bundle) {
      const { db, sdk } = bundle;
      try {
        let courseDocRef = sdk.doc(db, 'courses', cleanKey);
        let snap = await withBoundedRetry(async () => sdk.getDoc(courseDocRef));

        // If not found and cleanKey is an ID or alias, try resolving canonical slug
        if (!snap || !(typeof snap.exists === 'function' ? snap.exists() : snap.exists)) {
          const staticCourse = getCourseBySlug(cleanKey);
          if (staticCourse && staticCourse.slug && staticCourse.slug.toLowerCase() !== cleanKey) {
            const altDocRef = sdk.doc(db, 'courses', staticCourse.slug.toLowerCase());
            const altSnap = await withBoundedRetry(async () => sdk.getDoc(altDocRef)).catch(() => null);
            if (altSnap && (typeof altSnap.exists === 'function' ? altSnap.exists() : altSnap.exists)) {
              snap = altSnap;
            }
          }
        }

        if (snap && (typeof snap.exists === 'function' ? snap.exists() : snap.exists)) {
          const rawFirestoreData = snap.data();
          if (rawFirestoreData) {
            const normalized = normalizeCourseData(rawFirestoreData);
            _courseDataCache.set(cleanKey, normalized);
            if (normalized.slug && normalized.slug !== cleanKey) {
              _courseDataCache.set(normalized.slug.toLowerCase(), normalized);
            }
            if (normalized.id && String(normalized.id).toLowerCase() !== cleanKey) {
              _courseDataCache.set(String(normalized.id).toLowerCase(), normalized);
            }
            if (typeof window !== 'undefined' && window.localStorage) {
              try {
                window.localStorage.setItem(`rp_course_cache_${cleanKey}`, JSON.stringify(normalized));
                if (normalized.slug) {
                  window.localStorage.setItem(`rp_course_cache_${normalized.slug.toLowerCase()}`, JSON.stringify(normalized));
                }
                const indexStr = window.localStorage.getItem('rp_courses_index');
                const idxList = indexStr ? JSON.parse(indexStr) : [];
                if (normalized.slug && !idxList.includes(normalized.slug.toLowerCase())) {
                  idxList.push(normalized.slug.toLowerCase());
                  window.localStorage.setItem('rp_courses_index', JSON.stringify(idxList));
                }
              } catch {}
            }
            if (typeof updateCourseInCache === 'function') {
              updateCourseInCache(normalized);
            }
            return normalized;
          }
        }
      } catch {
        // Fall through safely on permission errors or offline state
      }
    }

    // 2. Fallback to localStorage if cached previously
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const cached = window.localStorage.getItem(`rp_course_cache_${cleanKey}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          const normalized = normalizeCourseData(parsed);
          _courseDataCache.set(cleanKey, normalized);
          if (typeof updateCourseInCache === 'function') {
            updateCourseInCache(normalized);
          }
          return normalized;
        }
      } catch {}
    }

    // 3. Fallback to static catalog
    const staticRaw = getCourseBySlug(cleanKey) || (getAllCourses ? getAllCourses().find(c => String(c.id) === cleanKey || c.slug === cleanKey) : null);
    if (staticRaw) {
      const normalized = normalizeCourseData(staticRaw);
      _courseDataCache.set(cleanKey, normalized);
      if (typeof updateCourseInCache === 'function') {
        updateCourseInCache(normalized);
      }
      return normalized;
    }

    return null;
  })();

  _inFlightCourseData.set(cleanKey, fetchPromise);
  fetchPromise.finally(() => {
    _inFlightCourseData.delete(cleanKey);
  });
  return fetchPromise;
}

/**
 * Fetch all published courses from Firestore with transparent fallback to local cache & static catalog.
 * Guarantees that public course catalogs and homepages display up-to-date saved courses.
 *
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<Array<object>>}
 */
export async function fetchPublishedCourses(dbOverride = null) {
  const coursesMap = new Map();

  // 1. Seed from static catalog baseline
  const staticList = getAllCourses ? getAllCourses() : [];
  for (const raw of staticList) {
    const norm = normalizeCourseData(raw);
    if (norm.published !== false && norm.isPublished !== false) {
      coursesMap.set(norm.slug.toLowerCase(), norm);
    }
  }

  // 2. Overlay localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const knownSlugs = new Set(Array.from(coursesMap.keys()));
      const indexStr = window.localStorage.getItem('rp_courses_index');
      if (indexStr) {
        const idxList = JSON.parse(indexStr);
        if (Array.isArray(idxList)) {
          idxList.forEach(s => s && knownSlugs.add(String(s).trim().toLowerCase()));
        }
      }
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith('rp_course_cache_')) {
          knownSlugs.add(k.slice('rp_course_cache_'.length).trim().toLowerCase());
        }
      }
      for (const slug of knownSlugs) {
        const raw = window.localStorage.getItem(`rp_course_cache_${slug}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          const norm = normalizeCourseData(parsed);
          if (norm && norm.published !== false && norm.isPublished !== false) {
            coursesMap.set(norm.slug.toLowerCase(), norm);
            _courseDataCache.set(norm.slug.toLowerCase(), norm);
          } else if (norm && (norm.published === false || norm.isPublished === false)) {
            // Explicitly respect unpublished status: remove from published catalog!
            coursesMap.delete(norm.slug.toLowerCase());
          }
        }
      }
    } catch {}
  }

  // 3. Overlay Firestore if available
  try {
    const bundle = dbOverride || await getFirestoreDb();
    if (bundle) {
      const { db, sdk } = bundle;
      const coursesColRef = sdk.collection(db, 'courses');
      let snap;
      try {
        if (typeof sdk.query === 'function' && typeof sdk.where === 'function') {
          const q = sdk.query(coursesColRef, sdk.where('published', '==', true));
          snap = await sdk.getDocs(q);
        } else {
          snap = await sdk.getDocs(coursesColRef);
        }
      } catch {
        snap = await sdk.getDocs(coursesColRef);
      }

      if (snap) {
        snap.forEach(docSnap => {
          const data = docSnap.data();
          if (data && data.slug) {
            const norm = normalizeCourseData(data);
            if (norm.published !== false && norm.isPublished !== false) {
              coursesMap.set(norm.slug.toLowerCase(), norm);
              _courseDataCache.set(norm.slug.toLowerCase(), norm);
              if (typeof window !== 'undefined' && window.localStorage) {
                try {
                  window.localStorage.setItem(`rp_course_cache_${norm.slug.toLowerCase()}`, JSON.stringify(norm));
                } catch {}
              }
            } else {
              coursesMap.delete(norm.slug.toLowerCase());
            }
          }
        });
      }
    }
  } catch (err) {
    // Graceful offline fallback
  }

  // Also sync with js/data/courses.js
  if (typeof updateCourseInCache === 'function') {
    for (const course of coursesMap.values()) {
      updateCourseInCache(course);
    }
  }

  const result = Array.from(coursesMap.values());
  result.sort((a, b) => (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0));
  return result;
}

/**
 * Fetch all courses actively or historically enrolled by an authenticated user.
 * Performs ZERO database calls for unauthenticated visitors.
 *
 * @param {string|null} uid - Firebase Auth UID
 * @param {object} [options={}] - { activeOnly: boolean }
 * @returns {Promise<Array<object>>} List of enrolled course models
 */
export async function fetchUserEnrolledCourses(uid, options = {}, dbOverride = null) {
  if (!uid || typeof uid !== 'string') return [];

  let opts = options || {};
  let override = dbOverride;
  if (options && (options.db || options.sdk)) {
    override = options;
    opts = {};
  }

  const bundle = override || await getFirestoreDb();
  if (!bundle) return [];

  const { db, sdk } = bundle;
  const enrollmentsColRef = sdk.collection(db, 'users', uid, 'courses');

  try {
    const snap = await sdk.getDocs(enrollmentsColRef);
    const validEntries = snap.docs
      .map(docSnap => ({ docSnap, data: docSnap.data() }))
      .filter(item => {
        if (!item.data) return false;
        if (opts.activeOnly && !isEnrollmentActive(item.data)) return false;
        return true;
      });

    const enrolledCourses = (
      await Promise.all(
        validEntries.map(async ({ docSnap, data }) => {
          const active = isEnrollmentActive(data);
          const displayStatus = resolveEnrollmentDisplayStatus(data);
          const courseId = docSnap.id;
          const course = await fetchCourseData(courseId);
          if (!course) return null;
          return {
            ...course,
            enrolledAt: data.enrolledAt || data.grantedAt || null,
            startsAt: data.startsAt || null,
            expiresAt: data.expiresAt || null,
            enrollmentStatus: displayStatus,
            isActive: active,
            enrollmentData: data
          };
        })
      )
    ).filter(Boolean);

    // Sort: active courses first, then by displayOrder
    enrolledCourses.sort((a, b) => {
      if (a.isActive && !b.isActive) return -1;
      if (!a.isActive && b.isActive) return 1;
      return (a.displayOrder || 0) - (b.displayOrder || 0);
    });
    return enrolledCourses;
  } catch (err) {
    console.warn('[risePaisa:Course] Could not fetch user enrolled courses:', err.message || err);
    return [];
  }
}

// =============================================================================
// 7. Administrator Authorization & Course Management
// =============================================================================

/**
 * Detailed administrative verification result.
 * Distinguishes between explicitly denied (not in allowlist) vs connection/firestore errors.
 *
 * @param {string|null} uid - Firebase Auth UID
 * @param {object|null} [dbOverride=null] - Optional DB bundle override
 * @returns {Promise<{ isAdmin: boolean, error: Error|null, reason: string }>}
 */
export async function checkIsAdminDetailed(uid, dbOverride = null) {
  if (!uid || typeof uid !== 'string') {
    return {
      isAdmin: false,
      error: null,
      reason: 'missing_uid',
      code: 'missing-uid',
      message: 'No authenticated user UID provided.'
    };
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) {
    return {
      isAdmin: false,
      error: new Error('Firebase Firestore service is unavailable or not configured.'),
      reason: 'db_unavailable',
      code: 'db-unavailable',
      message: 'Cloud Firestore database service is not initialized or configured.'
    };
  }

  const { db, sdk } = bundle;
  try {
    const adminDocRef = sdk.doc(db, 'admins', uid);
    const snap = await sdk.getDoc(adminDocRef);
    const exists = typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists);
    return {
      isAdmin: exists,
      error: null,
      reason: exists ? 'authorized' : 'not_in_allowlist',
      code: exists ? 'authorized' : 'not-found',
      message: exists
        ? 'User is an authorized platform administrator.'
        : `No administrator document found at admins/${uid}.`
    };
  } catch (err) {
    const msg = (err && err.message) ? err.message.toLowerCase() : '';
    const code = (err && err.code) ? String(err.code).toLowerCase() : '';

    if (code.includes('permission-denied') || msg.includes('insufficient permissions') || msg.includes('missing or insufficient permissions')) {
      return {
        isAdmin: false,
        error: err,
        reason: 'permission_denied',
        code: 'permission-denied',
        message: `Cloud Firestore Security Rules denied read access to admins/${uid}. The deployed security rules on Firebase project risepaisa-77278 do not permit reading this administrator document.`
      };
    }

    if (
      code.includes('unavailable') ||
      msg.includes('offline') ||
      msg.includes('network') ||
      (typeof navigator !== 'undefined' && !navigator.onLine)
    ) {
      return {
        isAdmin: false,
        error: err,
        reason: 'network_error',
        code: 'network-error',
        message: 'Network connection failed or Cloud Firestore is currently unreachable.'
      };
    }

    return {
      isAdmin: false,
      error: err,
      reason: 'firestore_error',
      code: code || 'firestore-error',
      message: err.message || 'An unexpected Firestore error occurred.'
    };
  }
}

/**
 * Verify whether an authenticated user possesses administrative authorization.
 * Checked strictly against the protected `/admins/{uid}` Firestore collection.
 *
 * @param {string|null} uid - Firebase Auth UID
 * @returns {Promise<boolean>}
 */
export async function checkIsAdmin(uid, dbOverride = null) {
  const res = await checkIsAdminDetailed(uid, dbOverride);
  return res.isAdmin;
}

/**
 * Administrative Student Account Search.
 * Safely looks up student accounts by exact email or exact Firebase Auth UID.
 * Restricted to verified administrators only.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} queryStr - Exact email or exact UID
 * @param {object|null} [dbOverride=null] - Optional DB bundle override for testing
 * @returns {Promise<{ found: boolean, method: string, user?: object, message?: string }>}
 */
export async function searchStudentUser(adminUid, queryStr, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to search students.');
  }

  if (!queryStr || typeof queryStr !== 'string' || queryStr.trim().length === 0) {
    throw new Error('Search query is required (Student ID, email, or Firebase UID).');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) {
    throw new Error('Database service unavailable.');
  }

  const { db, sdk } = bundle;
  const cleanQuery = queryStr.trim();

  // 1. Student ID Search (starts with RP- or matches format)
  if (cleanQuery.toUpperCase().startsWith('RP-') || /^RP-\d{4}-[A-Z0-9]+$/i.test(cleanQuery)) {
    const studentIdNorm = cleanQuery.toUpperCase();
    const mappingDocRef = sdk.doc(db, 'studentIdMappings', studentIdNorm);

    try {
      const mappingSnap = await sdk.getDoc(mappingDocRef);
      if (mappingSnap && (typeof mappingSnap.exists === 'function' ? mappingSnap.exists() : Boolean(mappingSnap.exists))) {
        const mappingData = mappingSnap.data() || {};
        const targetUid = mappingData.uid;
        if (targetUid) {
          const userDocRef = sdk.doc(db, 'users', targetUid);
          const userSnap = await sdk.getDoc(userDocRef);
          const uData = (userSnap && (typeof userSnap.exists === 'function' ? userSnap.exists() : Boolean(userSnap.exists)))
            ? (userSnap.data() || {})
            : {};

          return {
            found: true,
            method: 'studentId',
            user: {
              uid: targetUid,
              studentId: mappingData.studentId || studentIdNorm,
              email: uData.email || null,
              internalEmail: mappingData.internalEmail || uData.internalEmail || null,
              displayName: uData.displayName || null,
              phoneNumber: uData.phoneNumber || null,
              photoURL: uData.photoURL || null,
              role: uData.role || 'student',
              accountStatus: uData.accountStatus || mappingData.accountStatus || 'active',
              onboardingCompleted: Boolean(uData.onboardingCompleted),
              mustChangePassword: Boolean(uData.mustChangePassword),
              createdAt: uData.createdAt || mappingData.createdAt || null,
              updatedAt: uData.updatedAt || null,
              lastLoginAt: uData.lastLoginAt || null,
              adminNote: uData.adminNote || null
            }
          };
        }
      }

      // Fallback: Query users collection directly by studentId field
      const usersColRef = sdk.collection(db, 'users');
      const q = sdk.query(usersColRef, sdk.where('studentId', '==', studentIdNorm), sdk.limit(1));
      const qSnap = await sdk.getDocs(q);
      if (qSnap && !qSnap.empty) {
        const doc = qSnap.docs[0];
        const uData = doc.data() || {};
        return {
          found: true,
          method: 'studentId',
          user: {
            uid: doc.id,
            studentId: uData.studentId || studentIdNorm,
            email: uData.email || null,
            internalEmail: uData.internalEmail || null,
            displayName: uData.displayName || null,
            phoneNumber: uData.phoneNumber || null,
            photoURL: uData.photoURL || null,
            role: uData.role || 'student',
            accountStatus: uData.accountStatus || 'active',
            onboardingCompleted: Boolean(uData.onboardingCompleted),
            mustChangePassword: Boolean(uData.mustChangePassword),
            createdAt: uData.createdAt || null,
            updatedAt: uData.updatedAt || null,
            lastLoginAt: uData.lastLoginAt || null,
            adminNote: uData.adminNote || null
          }
        };
      }
    } catch (err) {
      console.warn('[risePaisa:Admin] Student ID search fallback error:', err);
    }
  }

  // 2. Email Search (must contain @)
  if (cleanQuery.includes('@')) {
    const cleanEmail = cleanQuery.toLowerCase();
    const usersColRef = sdk.collection(db, 'users');

    try {
      // First try normalized lowercase email
      let q = sdk.query(usersColRef, sdk.where('email', '==', cleanEmail), sdk.limit(1));
      let snap = await sdk.getDocs(q);

      // If not found, try original query string casing
      if (snap.empty && cleanQuery !== cleanEmail) {
        q = sdk.query(usersColRef, sdk.where('email', '==', cleanQuery), sdk.limit(1));
        snap = await sdk.getDocs(q);
      }

      // Also try internalEmail lookup
      if (snap.empty) {
        q = sdk.query(usersColRef, sdk.where('internalEmail', '==', cleanEmail), sdk.limit(1));
        snap = await sdk.getDocs(q);
      }

      if (snap.empty) {
        return {
          found: false,
          method: 'email',
          query: cleanQuery,
          message: `No user profile document found for email "${cleanQuery}". (Note: Users created directly in Firebase Auth will not have a Firestore profile until their first sign-in. Use their exact Firebase UID to manage access).`
        };
      }

      const userDoc = snap.docs[0];
      const userData = userDoc.data() || {};

      return {
        found: true,
        method: 'email',
        user: {
          uid: userDoc.id,
          studentId: userData.studentId || null,
          email: userData.email || cleanEmail,
          internalEmail: userData.internalEmail || null,
          displayName: userData.displayName || null,
          phoneNumber: userData.phoneNumber || null,
          photoURL: userData.photoURL || null,
          role: userData.role || 'student',
          accountStatus: userData.accountStatus || 'active',
          onboardingCompleted: Boolean(userData.onboardingCompleted),
          mustChangePassword: Boolean(userData.mustChangePassword),
          createdAt: userData.createdAt || null,
          updatedAt: userData.updatedAt || null,
          lastLoginAt: userData.lastLoginAt || null,
          adminNote: userData.adminNote || null
        }
      };
    } catch (err) {
      console.error('[risePaisa:Admin] Email lookup failed:', err);
      throw new Error(`Failed to search student by email: ${err.message || err}`);
    }
  }

  // 3. Exact Firebase UID Search
  try {
    const userDocRef = sdk.doc(db, 'users', cleanQuery);
    const snap = await sdk.getDoc(userDocRef);

    if (snap.exists && (typeof snap.exists === 'function' ? snap.exists() : true)) {
      const userData = snap.data() || {};
      return {
        found: true,
        method: 'uid',
        existsInFirestore: true,
        user: {
          uid: cleanQuery,
          studentId: userData.studentId || null,
          email: userData.email || null,
          internalEmail: userData.internalEmail || null,
          displayName: userData.displayName || null,
          phoneNumber: userData.phoneNumber || null,
          photoURL: userData.photoURL || null,
          role: userData.role || 'student',
          accountStatus: userData.accountStatus || 'active',
          onboardingCompleted: Boolean(userData.onboardingCompleted),
          mustChangePassword: Boolean(userData.mustChangePassword),
          createdAt: userData.createdAt || null,
          updatedAt: userData.updatedAt || null,
          lastLoginAt: userData.lastLoginAt || null,
          adminNote: userData.adminNote || null
        }
      };
    }

    // Account exists in Auth or is manually provisioned by UID, but lacks Firestore profile
    return {
      found: true,
      method: 'uid',
      existsInFirestore: false,
      user: {
        uid: cleanQuery,
        studentId: null,
        email: null,
        internalEmail: null,
        displayName: null,
        phoneNumber: null,
        role: 'student',
        accountStatus: 'active',
        onboardingCompleted: false,
        photoURL: null,
        createdAt: null,
        note: 'Target account profile document does not yet exist in Firestore. You can still provision or manage course enrollments for this verified UID.'
      }
    };
  } catch (err) {
    console.error('[risePaisa:Admin] UID lookup failed:', err);
    throw new Error(`Failed to lookup student by UID: ${err.message || err}`);
  }
}

/**
 * Administrative Student Account Creation.
 * Generates unique Student ID and temporary password, creates the Firebase Auth credential,
 * creates the authoritative Firestore profile and studentIdMapping, provisions initial course access
 * if selected, and commits an immutable audit record.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {object} params - { studentId?, temporaryPassword?, displayName?, phoneNumber?, personalEmail?, adminNote?, initialCourseId?, accessDurationDays?, expiresAt? }
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @param {object|null} [authOverride=null] - Optional Auth override (for tests/server)
 * @returns {Promise<{ success: boolean, studentId: string, studentUid: string, temporaryPassword: string, internalEmail: string }>}
 */
export async function createStudentAccount(adminUid, params = {}, dbOverride = null, authOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to create student accounts.');
  }

  // 1. Resolve or Generate Student ID
  let studentId = params.studentId ? String(params.studentId).trim().toUpperCase() : generateStudentId();
  if (!/^RP-\d{4}-[A-Z0-9]{4,10}$/i.test(studentId)) {
    throw new Error('Invalid Student ID format. Expected format: RP-YYYY-XXXXXX (e.g. RP-2026-A7K9M2).');
  }

  // 2. Resolve or Generate Temporary Password
  let temporaryPassword = params.temporaryPassword ? String(params.temporaryPassword) : generateTemporaryPassword(10);
  if (temporaryPassword.length < 6) {
    throw new Error('Temporary password must be at least 6 characters.');
  }

  // 3. Generate internal authentication identifier
  const internalEmail = formatStudentInternalEmail(studentId);

  // 4. Validate Phone Number (if provided)
  let normalizedPhone = null;
  if (params.phoneNumber && String(params.phoneNumber).trim().length > 0) {
    const phoneRes = validateNepaliPhoneNumber(params.phoneNumber);
    if (!phoneRes.valid) {
      throw new Error(phoneRes.error || 'Invalid Nepalese phone number.');
    }
    normalizedPhone = phoneRes.normalized;
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;

  // 5. Enforce Uniqueness: check studentIdMappings/{studentId}
  const mappingDocRef = sdk.doc(db, 'studentIdMappings', studentId);
  try {
    const existingSnap = await sdk.getDoc(mappingDocRef);
    if (existingSnap && (typeof existingSnap.exists === 'function' ? existingSnap.exists() : Boolean(existingSnap.exists))) {
      throw new Error(`Collision: Student ID "${studentId}" already exists. Please generate a unique ID.`);
    }
  } catch (collisionErr) {
    if (collisionErr.message && collisionErr.message.includes('Collision:')) {
      throw collisionErr;
    }
  }

  // 6. Create Account in Firebase Authentication
  let studentUid = null;

  if (authOverride && typeof authOverride.createUser === 'function') {
    // Custom/mock auth provider for tests
    const createdUser = await authOverride.createUser({
      email: internalEmail,
      password: temporaryPassword,
      displayName: params.displayName ? String(params.displayName).trim() : ''
    });
    studentUid = createdUser.uid || createdUser.user?.uid || 'student-uid-' + Date.now();
  } else if (typeof window !== 'undefined') {
    // In-browser: create isolated secondary Firebase App so the administrator's primary session is preserved
    try {
      const { initializeApp, deleteApp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
      const { getAuth, createUserWithEmailAndPassword, updateProfile, signOut } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
      const { firebaseConfig } = await import('./config.js');

      const secondaryAppName = `RisePaisa_StudentProvision_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      const secApp = initializeApp(firebaseConfig, secondaryAppName);
      const secAuth = getAuth(secApp);

      const userCred = await createUserWithEmailAndPassword(secAuth, internalEmail, temporaryPassword);
      studentUid = userCred.user.uid;

      if (params.displayName && String(params.displayName).trim()) {
        try {
          await updateProfile(userCred.user, { displayName: String(params.displayName).trim() });
        } catch {}
      }

      await signOut(secAuth);
      try {
        await deleteApp(secApp);
      } catch {}
    } catch (authErr) {
      console.error('[risePaisa:Admin] Failed to create Firebase Auth user:', authErr);
      throw new Error(`Firebase Auth user creation failed: ${authErr.message || authErr}`);
    }
  } else {
    // Node.js fallback for unit test mocks
    studentUid = 'student-' + Math.random().toString(36).substring(2, 10);
  }

  if (!studentUid) {
    throw new Error('Failed to resolve authoritative student UID.');
  }

  // 7. Write Authoritative Profile & Mapping in Firestore
  const userDocRef = sdk.doc(db, 'users', studentUid);
  const userPayload = {
    uid: studentUid,
    studentId: studentId,
    displayName: params.displayName ? String(params.displayName).trim() : null,
    phoneNumber: normalizedPhone,
    email: params.personalEmail ? String(params.personalEmail).trim().toLowerCase() : null,
    internalEmail: internalEmail,
    role: 'student',
    accountStatus: 'active',
    onboardingCompleted: Boolean(params.displayName && normalizedPhone),
    mustChangePassword: true,
    createdAt: sdk.serverTimestamp(),
    updatedAt: sdk.serverTimestamp(),
    createdBy: adminUid,
    adminNote: params.adminNote ? String(params.adminNote).trim() : null
  };

  const mappingPayload = {
    studentId: studentId,
    uid: studentUid,
    internalEmail: internalEmail,
    accountStatus: 'active',
    createdAt: sdk.serverTimestamp()
  };

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const auditPayload = {
    eventType: ENROLLMENT_AUDIT_EVENT.STUDENT_ACCOUNT_CREATED,
    studentUid: studentUid,
    studentId: studentId,
    adminUid: adminUid,
    courseId: params.initialCourseId ? String(params.initialCourseId).trim().toLowerCase() : 'none',
    timestamp: sdk.serverTimestamp(),
    previousStatus: 'not_created',
    newStatus: 'active',
    previousExpiresAt: null,
    newExpiresAt: null,
    note: params.adminNote ? String(params.adminNote).trim() : 'Student account created by administrator'
  };

  const batch = sdk.writeBatch(db);
  batch.set(userDocRef, userPayload);
  batch.set(mappingDocRef, mappingPayload);
  batch.set(auditDocRef, auditPayload);
  await batch.commit();

  // 8. Grant Initial Course Access if requested
  if (params.initialCourseId && String(params.initialCourseId).trim().length > 0) {
    try {
      let expiresAt = null;
      if (params.accessDurationDays) {
        const days = Number(params.accessDurationDays);
        if (!isNaN(days) && days > 0) {
          expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
        }
      } else if (params.expiresAt) {
        expiresAt = params.expiresAt instanceof Date ? params.expiresAt : new Date(params.expiresAt);
      }

      await grantStudentEnrollment(adminUid, studentUid, params.initialCourseId, {
        expiresAt: expiresAt,
        note: 'Initial course access granted during account creation'
      }, bundle);
    } catch (enrollErr) {
      console.warn('[risePaisa:Admin] Initial course enrollment grant warning:', enrollErr);
    }
  }

  return {
    success: true,
    studentId: studentId,
    studentUid: studentUid,
    temporaryPassword: temporaryPassword,
    internalEmail: internalEmail,
    displayName: userPayload.displayName,
    phoneNumber: userPayload.phoneNumber,
    accountStatus: 'active'
  };
}

/**
 * Suspend a student's account.
 * Updates authoritative status to 'suspended', blocking protected course lessons and actions,
 * and appends an immutable audit log record.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {object} [options={}] - { reason, note }
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<{ success: boolean, studentUid: string, accountStatus: string }>}
 */
export async function suspendStudentAccount(adminUid, studentUid, options = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to suspend accounts.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanStudentUid = studentUid.trim();
  const userDocRef = sdk.doc(db, 'users', cleanStudentUid);

  const snap = await sdk.getDoc(userDocRef);
  if (!snap || !(typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists))) {
    throw new Error('Cannot suspend: Student account document not found.');
  }

  const existingData = snap.data() || {};
  const studentId = existingData.studentId || null;

  const userUpdate = {
    accountStatus: 'suspended',
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid
  };

  const batch = sdk.writeBatch(db);
  batch.update(userDocRef, userUpdate);

  // If student has a studentIdMapping document, synchronize suspension status
  if (studentId) {
    const mappingDocRef = sdk.doc(db, 'studentIdMappings', studentId);
    batch.update(mappingDocRef, {
      accountStatus: 'suspended',
      updatedAt: sdk.serverTimestamp()
    });
  }

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const auditPayload = {
    eventType: ENROLLMENT_AUDIT_EVENT.STUDENT_ACCOUNT_SUSPENDED,
    studentUid: cleanStudentUid,
    studentId: studentId,
    adminUid: adminUid,
    courseId: 'all',
    timestamp: sdk.serverTimestamp(),
    previousStatus: existingData.accountStatus || 'active',
    newStatus: 'suspended',
    previousExpiresAt: null,
    newExpiresAt: null,
    note: options.reason || options.note || 'Student account suspended by administrator'
  };
  batch.set(auditDocRef, auditPayload);

  await batch.commit();

  // Invalidate in-memory caches
  resetCourseCache();

  return {
    success: true,
    studentUid: cleanStudentUid,
    accountStatus: 'suspended'
  };
}

/**
 * Reactivate a suspended student account.
 * Restores authoritative status to 'active', restores valid course access, and logs audit event.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {object} [options={}] - { note }
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<{ success: boolean, studentUid: string, accountStatus: string }>}
 */
export async function reactivateStudentAccount(adminUid, studentUid, options = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to reactivate accounts.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanStudentUid = studentUid.trim();
  const userDocRef = sdk.doc(db, 'users', cleanStudentUid);

  const snap = await sdk.getDoc(userDocRef);
  if (!snap || !(typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists))) {
    throw new Error('Cannot reactivate: Student account document not found.');
  }

  const existingData = snap.data() || {};
  const studentId = existingData.studentId || null;

  const userUpdate = {
    accountStatus: 'active',
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid
  };

  const batch = sdk.writeBatch(db);
  batch.update(userDocRef, userUpdate);

  // Synchronize studentIdMapping document
  if (studentId) {
    const mappingDocRef = sdk.doc(db, 'studentIdMappings', studentId);
    batch.update(mappingDocRef, {
      accountStatus: 'active',
      updatedAt: sdk.serverTimestamp()
    });
  }

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const auditPayload = {
    eventType: ENROLLMENT_AUDIT_EVENT.STUDENT_ACCOUNT_REACTIVATED,
    studentUid: cleanStudentUid,
    studentId: studentId,
    adminUid: adminUid,
    courseId: 'all',
    timestamp: sdk.serverTimestamp(),
    previousStatus: existingData.accountStatus || 'suspended',
    newStatus: 'active',
    previousExpiresAt: null,
    newExpiresAt: null,
    note: options.note || 'Student account reactivated by administrator'
  };
  batch.set(auditDocRef, auditPayload);

  await batch.commit();

  // Invalidate in-memory caches
  resetCourseCache();

  return {
    success: true,
    studentUid: cleanStudentUid,
    accountStatus: 'active'
  };
}

/**
 * Reset a student's password administratively.
 * Generates a new cryptographically secure temporary password, marks mustChangePassword,
 * appends an audit event, and returns the credentials to the administrator for immediate delivery.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {object} [options={}] - { note }
 * @param {object|null} [dbOverride=null]
 * @param {object|null} [authOverride=null]
 * @returns {Promise<{ success: boolean, temporaryPassword: string, studentId?: string, studentUid: string }>}
 */
export async function resetStudentPassword(adminUid, studentUid, options = {}, dbOverride = null, authOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to reset credentials.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanStudentUid = studentUid.trim();
  const userDocRef = sdk.doc(db, 'users', cleanStudentUid);

  const snap = await sdk.getDoc(userDocRef);
  if (!snap || !(typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists))) {
    throw new Error('Cannot reset password: Student profile document not found.');
  }

  const existingData = snap.data() || {};
  const studentId = existingData.studentId || null;
  const newTempPassword = generateTemporaryPassword(10);

  // If auth override provided, update password directly
  if (authOverride && typeof authOverride.updateUser === 'function') {
    await authOverride.updateUser(cleanStudentUid, { password: newTempPassword });
  }

  const batch = sdk.writeBatch(db);
  batch.update(userDocRef, {
    mustChangePassword: true,
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid
  });

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  batch.set(auditDocRef, {
    eventType: ENROLLMENT_AUDIT_EVENT.STUDENT_PASSWORD_RESET,
    studentUid: cleanStudentUid,
    studentId: studentId,
    adminUid: adminUid,
    courseId: 'none',
    timestamp: sdk.serverTimestamp(),
    previousStatus: 'active',
    newStatus: 'active',
    previousExpiresAt: null,
    newExpiresAt: null,
    note: options.note || 'Temporary password reset issued by administrator'
  });

  await batch.commit();

  return {
    success: true,
    temporaryPassword: newTempPassword,
    studentId: studentId,
    studentUid: cleanStudentUid
  };
}

/**
 * Edit student profile details as an administrator.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {object} updates - { displayName, phoneNumber, adminNote, personalEmail }
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<{ success: boolean }>}
 */
export async function updateStudentProfile(adminUid, studentUid, updates = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to edit student profiles.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanStudentUid = studentUid.trim();
  const userDocRef = sdk.doc(db, 'users', cleanStudentUid);

  const payload = {
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid
  };

  if (updates.displayName !== undefined) {
    payload.displayName = updates.displayName ? String(updates.displayName).trim() : null;
  }

  if (updates.phoneNumber !== undefined) {
    if (updates.phoneNumber && String(updates.phoneNumber).trim().length > 0) {
      const pRes = validateNepaliPhoneNumber(updates.phoneNumber);
      if (!pRes.valid) throw new Error(pRes.error || 'Invalid Nepalese phone number.');
      payload.phoneNumber = pRes.normalized;
    } else {
      payload.phoneNumber = null;
    }
  }

  if (updates.adminNote !== undefined) {
    payload.adminNote = updates.adminNote ? String(updates.adminNote).trim() : null;
  }

  if (updates.personalEmail !== undefined) {
    payload.email = updates.personalEmail ? String(updates.personalEmail).trim().toLowerCase() : null;
  }

  const batch = sdk.writeBatch(db);
  batch.update(userDocRef, payload);

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  batch.set(auditDocRef, {
    eventType: ENROLLMENT_AUDIT_EVENT.STUDENT_PROFILE_UPDATED,
    studentUid: cleanStudentUid,
    adminUid: adminUid,
    courseId: 'none',
    timestamp: sdk.serverTimestamp(),
    previousStatus: 'active',
    newStatus: 'active',
    previousExpiresAt: null,
    newExpiresAt: null,
    note: 'Student profile updated by administrator'
  });

  await batch.commit();
  return { success: true };
}

/**
 * Fetch all students for the Administrator Student Directory.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {object} [filter={}] - { status: 'all' | 'active' | 'suspended', limit?: number }
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<Array<object>>}
 */
export async function fetchStudentDirectory(adminUid, filter = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to view student directory.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const usersColRef = sdk.collection(db, 'users');

  try {
    const snap = await sdk.getDocs(usersColRef);
    const students = [];

    for (const docSnap of snap.docs) {
      const data = docSnap.data() || {};
      const isStudent = data.role === 'student' || Boolean(data.studentId);
      if (filter.onlyStudents !== false && !isStudent && data.role === 'admin') {
        continue;
      }

      const curStatus = data.accountStatus || 'active';
      if (filter.status && filter.status !== 'all' && curStatus !== filter.status) {
        continue;
      }

      students.push({
        uid: docSnap.id,
        studentId: data.studentId || null,
        displayName: data.displayName || null,
        phoneNumber: data.phoneNumber || null,
        email: data.email || null,
        internalEmail: data.internalEmail || null,
        role: data.role || 'student',
        accountStatus: curStatus,
        onboardingCompleted: Boolean(data.onboardingCompleted),
        mustChangePassword: Boolean(data.mustChangePassword),
        createdAt: data.createdAt || null,
        updatedAt: data.updatedAt || null,
        lastLoginAt: data.lastLoginAt || null,
        adminNote: data.adminNote || null
      });
    }

    // Sort by createdAt descending (newest first)
    students.sort((a, b) => {
      const tA = parseDateToMillis(a.createdAt) || 0;
      const tB = parseDateToMillis(b.createdAt) || 0;
      return tB - tA;
    });

    return students;
  } catch (err) {
    console.error('[risePaisa:Admin] Failed to fetch student directory:', err);
    throw err;
  }
}

/**
 * Complete First-Login Student Onboarding.
 * Validates full name, Nepalese mobile number, and terms acceptance,
 * and securely updates the student's profile.
 *
 * @param {string} studentUid - Authenticated student UID
 * @param {object} profileData - { displayName, phoneNumber, email?, termsAccepted }
 * @param {object|null} [dbOverride=null]
 * @returns {Promise<{ success: boolean }>}
 */
export async function completeStudentProfile(studentUid, profileData = {}, dbOverride = null) {
  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Authentication required: Student UID is required.');
  }

  // 1. Validate full name
  const name = profileData.displayName ? String(profileData.displayName).trim() : '';
  if (!name || name.length < 2) {
    throw new Error('Please enter your full name (minimum 2 characters).');
  }
  if (name.length > 100) {
    throw new Error('Full name cannot exceed 100 characters.');
  }

  // 2. Validate Nepalese mobile phone
  const phoneRes = validateNepaliPhoneNumber(profileData.phoneNumber);
  if (!phoneRes.valid) {
    throw new Error(phoneRes.error || 'Please enter a valid 10-digit Nepalese mobile number.');
  }

  // 3. Validate terms acceptance
  if (!profileData.termsAccepted) {
    throw new Error('You must accept the RisePaisa Terms of Service and Privacy Policy to continue.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanUid = studentUid.trim();
  const userDocRef = sdk.doc(db, 'users', cleanUid);

  const snap = await sdk.getDoc(userDocRef);
  if (!snap || !(typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists))) {
    throw new Error('Student account profile not found.');
  }

  const existingData = snap.data() || {};
  if (existingData.accountStatus === 'suspended') {
    throw new Error('Your RisePaisa account is currently suspended. Please contact support for assistance.');
  }

  const updatePayload = {
    displayName: name,
    phoneNumber: phoneRes.normalized,
    termsAccepted: true,
    termsAcceptedAt: sdk.serverTimestamp(),
    onboardingCompleted: true,
    updatedAt: sdk.serverTimestamp()
  };

  if (profileData.email && String(profileData.email).trim().length > 0) {
    updatePayload.email = String(profileData.email).trim().toLowerCase();
  }

  await sdk.updateDoc(userDocRef, updatePayload);

  return { success: true };
}

/**
 * Fetch all course enrollments for a specific student.
 * Requires administrator authorization.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @returns {Promise<Array<object>>} List of enrollment objects with status and course metadata
 */
export async function fetchStudentEnrollments(adminUid, studentUid, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to view student enrollments.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Valid student UID is required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanStudentUid = studentUid.trim();
  const enrollmentsColRef = sdk.collection(db, 'users', cleanStudentUid, 'courses');

  try {
    const snap = await sdk.getDocs(enrollmentsColRef);
    const results = [];

    for (const docSnap of snap.docs) {
      const data = docSnap.data() || {};
      const courseId = docSnap.id;
      const course = await fetchCourseData(courseId);

      const isActive = isEnrollmentActive(data);
      const displayStatus = resolveEnrollmentDisplayStatus(data);

      results.push({
        courseId: courseId,
        courseSlug: data.courseSlug || course?.slug || courseId,
        courseTitle: course?.title || data.courseTitle || courseId,
        status: data.status || 'not_enrolled',
        displayStatus: displayStatus,
        isActive: isActive,
        startsAt: data.startsAt || null,
        expiresAt: data.expiresAt || null,
        grantedAt: data.grantedAt || data.enrolledAt || null,
        grantedBy: data.grantedBy || null,
        updatedAt: data.updatedAt || null,
        updatedBy: data.updatedBy || null,
        revokedAt: data.revokedAt || null,
        revokedBy: data.revokedBy || null,
        source: data.source || 'manual_admin'
      });
    }

    // Sort active first, then by course title
    results.sort((a, b) => {
      if (a.isActive && !b.isActive) return -1;
      if (!a.isActive && b.isActive) return 1;
      return (a.courseTitle || '').localeCompare(b.courseTitle || '');
    });

    return results;
  } catch (err) {
    console.error('[risePaisa:Admin] Failed to fetch student enrollments:', err);
    throw err;
  }
}

/**
 * Grant course access to a student.
 * Creates or updates the authoritative enrollment record at `users/{studentUid}/courses/{courseId}`
 * and appends an immutable audit log entry in `enrollment_audits`.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {string} courseId - Course slug or identifier
 * @param {object} [options={}] - { startsAt, expiresAt, source, note }
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @returns {Promise<{ success: boolean, enrollment: object, auditId: string }>}
 */
export async function grantStudentEnrollment(adminUid, studentUid, courseId, options = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to grant course access.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  if (!courseId || typeof courseId !== 'string' || courseId.trim() === '') {
    throw new Error('Course identifier is required.');
  }

  const cleanStudentUid = studentUid.trim();
  const cleanCourseId = String(courseId).trim().toLowerCase();

  // Verify course exists in catalog
  const course = await fetchCourseData(cleanCourseId);
  if (!course) {
    throw new Error(`Cannot grant enrollment: Course "${cleanCourseId}" does not exist.`);
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const enrollmentDocRef = sdk.doc(db, 'users', cleanStudentUid, 'courses', cleanCourseId);

  // Read existing enrollment to inspect previous state
  let existingData = null;
  try {
    const existingSnap = await sdk.getDoc(enrollmentDocRef);
    if (existingSnap.exists && (typeof existingSnap.exists === 'function' ? existingSnap.exists() : true)) {
      existingData = existingSnap.data();
    }
  } catch {
    // If read fails, proceed with safe null baseline
  }

  // Format dates
  let startsAtVal = null;
  if (options.startsAt) {
    startsAtVal = options.startsAt instanceof Date ? options.startsAt : new Date(options.startsAt);
  } else {
    startsAtVal = sdk.serverTimestamp();
  }

  let expiresAtVal = null;
  if (options.expiresAt) {
    expiresAtVal = options.expiresAt instanceof Date ? options.expiresAt : new Date(options.expiresAt);
  }

  const enrollmentPayload = {
    courseId: cleanCourseId,
    courseSlug: course.slug || cleanCourseId,
    status: ENROLLMENT_STATUS.ACTIVE,
    grantedAt: existingData?.grantedAt || sdk.serverTimestamp(),
    grantedBy: existingData?.grantedBy || adminUid,
    startsAt: startsAtVal,
    expiresAt: expiresAtVal,
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid,
    revokedAt: null,
    revokedBy: null,
    source: options.source || 'manual_admin',
    enrolledAt: existingData?.enrolledAt || sdk.serverTimestamp()
  };

  const validation = validateEnrollmentPayload(enrollmentPayload);
  if (!validation.valid) {
    throw new Error(`Invalid enrollment data: ${validation.errors.join('; ')}`);
  }

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const eventType = existingData ? ENROLLMENT_AUDIT_EVENT.ACCESS_RENEWED : ENROLLMENT_AUDIT_EVENT.ACCESS_GRANTED;

  const auditPayload = {
    eventType: eventType,
    courseId: cleanCourseId,
    studentUid: cleanStudentUid,
    adminUid: adminUid,
    timestamp: sdk.serverTimestamp(),
    previousStatus: existingData ? (existingData.status || 'not_enrolled') : 'not_enrolled',
    newStatus: ENROLLMENT_STATUS.ACTIVE,
    previousExpiresAt: existingData?.expiresAt || null,
    newExpiresAt: expiresAtVal,
    note: options.note || (existingData ? 'Enrollment renewed by administrator' : 'Manual enrollment granted by administrator')
  };

  // Atomic batch write: ensures enrollment and audit log are committed together
  const batch = sdk.writeBatch(db);
  batch.set(enrollmentDocRef, enrollmentPayload, { merge: true });
  batch.set(auditDocRef, auditPayload);
  await batch.commit();

  // Invalidate in-memory caches
  _enrollmentCache.delete(`${cleanStudentUid}_${cleanCourseId}`);

  return {
    success: true,
    enrollment: enrollmentPayload,
    auditId: auditDocRef.id
  };
}

/**
 * Revoke course access for a student.
 * Updates authoritative enrollment status to 'revoked' and records an audit log entry.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {string} courseId - Course slug or identifier
 * @param {object} [options={}] - { reason, note }
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @returns {Promise<{ success: boolean }>}
 */
export async function revokeStudentEnrollment(adminUid, studentUid, courseId, options = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to revoke course access.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  if (!courseId || typeof courseId !== 'string' || courseId.trim() === '') {
    throw new Error('Course identifier is required.');
  }

  const cleanStudentUid = studentUid.trim();
  const cleanCourseId = String(courseId).trim().toLowerCase();

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const enrollmentDocRef = sdk.doc(db, 'users', cleanStudentUid, 'courses', cleanCourseId);

  const snap = await sdk.getDoc(enrollmentDocRef);
  if (!snap.exists || !(typeof snap.exists === 'function' ? snap.exists() : true)) {
    throw new Error(`Cannot revoke access: No enrollment record exists for course "${cleanCourseId}".`);
  }

  const existingData = snap.data() || {};

  const updatePayload = {
    status: ENROLLMENT_STATUS.REVOKED,
    revokedAt: sdk.serverTimestamp(),
    revokedBy: adminUid,
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid
  };

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const auditPayload = {
    eventType: ENROLLMENT_AUDIT_EVENT.ACCESS_REVOKED,
    courseId: cleanCourseId,
    studentUid: cleanStudentUid,
    adminUid: adminUid,
    timestamp: sdk.serverTimestamp(),
    previousStatus: existingData.status || 'active',
    newStatus: ENROLLMENT_STATUS.REVOKED,
    previousExpiresAt: existingData.expiresAt || null,
    newExpiresAt: existingData.expiresAt || null,
    note: options.reason || options.note || 'Manual access revocation by administrator'
  };

  const batch = sdk.writeBatch(db);
  batch.update(enrollmentDocRef, updatePayload);
  batch.set(auditDocRef, auditPayload);
  await batch.commit();

  _enrollmentCache.delete(`${cleanStudentUid}_${cleanCourseId}`);
  return { success: true, auditId: auditDocRef.id };
}

/**
 * Renew course access for a student.
 * Restores status to 'active', updates expiration date, and logs the administrative renewal.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {string} studentUid - Target student UID
 * @param {string} courseId - Course slug or identifier
 * @param {object} [options={}] - { expiresAt, note }
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @returns {Promise<{ success: boolean }>}
 */
export async function renewStudentEnrollment(adminUid, studentUid, courseId, options = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to renew course access.');
  }

  if (!studentUid || typeof studentUid !== 'string' || studentUid.trim() === '') {
    throw new Error('Student UID is required.');
  }

  if (!courseId || typeof courseId !== 'string' || courseId.trim() === '') {
    throw new Error('Course identifier is required.');
  }

  const cleanStudentUid = studentUid.trim();
  const cleanCourseId = String(courseId).trim().toLowerCase();

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const enrollmentDocRef = sdk.doc(db, 'users', cleanStudentUid, 'courses', cleanCourseId);

  const snap = await sdk.getDoc(enrollmentDocRef);
  if (!snap.exists || !(typeof snap.exists === 'function' ? snap.exists() : true)) {
    throw new Error(`Cannot renew access: No enrollment record exists for course "${cleanCourseId}". Grant access instead.`);
  }

  const existingData = snap.data() || {};

  let expiresAtVal = null;
  if (options.expiresAt) {
    expiresAtVal = options.expiresAt instanceof Date ? options.expiresAt : new Date(options.expiresAt);
  }

  const updatePayload = {
    status: ENROLLMENT_STATUS.ACTIVE,
    expiresAt: expiresAtVal,
    updatedAt: sdk.serverTimestamp(),
    updatedBy: adminUid,
    revokedAt: null,
    revokedBy: null
  };

  const auditColRef = sdk.collection(db, 'enrollment_audits');
  const auditDocRef = sdk.doc(auditColRef);
  const auditPayload = {
    eventType: ENROLLMENT_AUDIT_EVENT.ACCESS_RENEWED,
    courseId: cleanCourseId,
    studentUid: cleanStudentUid,
    adminUid: adminUid,
    timestamp: sdk.serverTimestamp(),
    previousStatus: existingData.status || 'expired',
    newStatus: ENROLLMENT_STATUS.ACTIVE,
    previousExpiresAt: existingData.expiresAt || null,
    newExpiresAt: expiresAtVal,
    note: options.note || 'Enrollment renewed with updated expiration by administrator'
  };

  const batch = sdk.writeBatch(db);
  batch.update(enrollmentDocRef, updatePayload);
  batch.set(auditDocRef, auditPayload);
  await batch.commit();

  _enrollmentCache.delete(`${cleanStudentUid}_${cleanCourseId}`);
  return { success: true, expiresAt: expiresAtVal, auditId: auditDocRef.id };
}

/**
 * Fetch immutable enrollment audit log entries.
 * Restricted exclusively to verified administrators.
 *
 * @param {string} adminUid - Verified administrator UID
 * @param {object} [filter={}] - Optional { studentUid, courseId, limit }
 * @param {object|null} [dbOverride=null] - Optional DB override
 * @returns {Promise<Array<object>>}
 */
export async function fetchEnrollmentAuditLogs(adminUid, filter = {}, dbOverride = null) {
  const isAdmin = await checkIsAdmin(adminUid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to view audit logs.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const auditColRef = sdk.collection(db, 'enrollment_audits');

  try {
    let constraints = [];
    if (filter.studentUid) {
      constraints.push(sdk.where('studentUid', '==', filter.studentUid.trim()));
    }
    if (filter.courseId) {
      constraints.push(sdk.where('courseId', '==', filter.courseId.trim().toLowerCase()));
    }

    // Try ordered query, fall back gracefully if composite index not yet built
    try {
      const q = sdk.query(
        auditColRef,
        ...constraints,
        sdk.orderBy('timestamp', 'desc'),
        sdk.limit(filter.limit || 50)
      );
      const snap = await sdk.getDocs(q);
      const logs = [];
      snap.forEach(doc => {
        logs.push({ id: doc.id, ...doc.data() });
      });
      return logs;
    } catch {
      // Unindexed fallback: fetch unordered with limit and sort client-side
      const qFallback = sdk.query(auditColRef, ...constraints, sdk.limit(filter.limit || 50));
      const snap = await sdk.getDocs(qFallback);
      const logs = [];
      snap.forEach(doc => {
        logs.push({ id: doc.id, ...doc.data() });
      });
      logs.sort((a, b) => {
        const tA = parseDateToMillis(a.timestamp) || 0;
        const tB = parseDateToMillis(b.timestamp) || 0;
        return tB - tA;
      });
      return logs;
    }
  } catch (err) {
    console.error('[risePaisa:Admin] Failed to fetch audit logs:', err);
    return [];
  }
}

/**
 * Fetch all courses for the Administrator Console.
 * Throws if the caller is not an authorized administrator.
 *
 * @param {string} uid - Firebase Auth UID
 * @returns {Promise<Array<object>>}
 */
export async function fetchAdminCourses(uid, dbOverride = null) {
  const isAdmin = await checkIsAdmin(uid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) {
    throw new Error('Database service unavailable.');
  }

  const { db, sdk } = bundle;
  const coursesColRef = sdk.collection(db, 'courses');

  try {
    const coursesMap = new Map();

    // 1. Seed with normalized static catalog as baseline
    const staticList = getAllCourses ? getAllCourses() : [];
    for (const raw of staticList) {
      const norm = normalizeCourseData(raw);
      coursesMap.set(norm.slug, norm);
    }

    // 2. Overlay locally cached courses if in browser
    if (typeof window !== 'undefined' && window.localStorage) {
      for (const [slug] of coursesMap.entries()) {
        try {
          const cached = window.localStorage.getItem(`rp_course_cache_${slug}`);
          if (cached) {
            const parsed = JSON.parse(cached);
            const norm = normalizeCourseData(parsed);
            coursesMap.set(slug, norm);
          }
        } catch {}
      }
    }

    // 3. Overlay live Firestore courses (authoritative override)
    const snap = await sdk.getDocs(coursesColRef);
    snap.forEach(docSnap => {
      const data = docSnap.data();
      if (data && data.slug) {
        const norm = normalizeCourseData(data);
        coursesMap.set(norm.slug, norm);
        _courseDataCache.set(norm.slug, norm);
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            window.localStorage.setItem(`rp_course_cache_${norm.slug}`, JSON.stringify(norm));
          } catch {}
        }
      }
    });

    const result = Array.from(coursesMap.values());
    result.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    return result;
  } catch (err) {
    console.error('[risePaisa:Admin] Failed to fetch admin courses:', err);
    throw err;
  }
}

/**
 * Save or update a course (including topics and lessons) in Firestore.
 * Requires administrator authorization and validates schemas strictly.
 *
 * @param {string} uid - Firebase Auth UID
 * @param {object} courseData - Full course object
 * @param {object|null} [dbOverride=null] - Optional database adapter
 * @returns {Promise<{ success: boolean, course: object }>}
 */
export async function saveAdminCourse(uid, courseData, dbOverride = null) {
  const isAdmin = await checkIsAdmin(uid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to save courses.');
  }

  // 1. Validate Course Metadata
  const courseValidation = validateCourse(courseData);
  if (!courseValidation.valid) {
    throw new Error(`Invalid course data: ${courseValidation.errors.join('; ')}`);
  }

  // 2. Validate Topics & Lessons
  if (Array.isArray(courseData.topics)) {
    for (const topic of courseData.topics) {
      const topicValidation = validateTopic(topic);
      if (!topicValidation.valid) {
        throw new Error(`Invalid topic "${topic.title}": ${topicValidation.errors.join('; ')}`);
      }
      if (Array.isArray(topic.lessons)) {
        for (const lesson of topic.lessons) {
          const lessonValidation = validateLesson(lesson);
          if (!lessonValidation.valid) {
            throw new Error(`Invalid lesson "${lesson.title}": ${lessonValidation.errors.join('; ')}`);
          }
        }
      }
    }
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) {
    throw new Error('Database service unavailable.');
  }

  const { db, sdk } = bundle;
  const cleanSlug = courseData.slug.trim().toLowerCase();
  const courseDocRef = sdk.doc(db, 'courses', cleanSlug);

  // Canonicalize lesson YouTube URLs and extract previewVideoUrl
  const normalizedTopics = (Array.isArray(courseData.topics) ? courseData.topics : []).map(t => ({
    ...t,
    lessons: (Array.isArray(t.lessons) ? t.lessons : []).map(l => ({
      ...l,
      youtubeUrl: l.youtubeUrl ? (toCanonicalYouTubeUrl(l.youtubeUrl) || l.youtubeUrl) : null
    }))
  }));

  let previewUrl = courseData.previewVideoUrl || null;
  if (normalizedTopics[0]?.lessons?.[0]?.youtubeUrl) {
    previewUrl = normalizedTopics[0].lessons[0].youtubeUrl;
  }

  const payload = {
    ...courseData,
    id: String(courseData.id || cleanSlug),
    slug: cleanSlug,
    title: courseData.title.trim(),
    shortDescription: courseData.shortDescription.trim(),
    description: (courseData.description || courseData.fullDescription || '').trim(),
    fullDescription: (courseData.fullDescription || courseData.description || '').trim(),
    thumbnail: courseData.thumbnail || null,
    published: Boolean(courseData.published),
    isPublished: Boolean(courseData.published),
    displayOrder: Number(courseData.displayOrder) || 1,
    previewVideoUrl: previewUrl,
    topics: normalizedTopics,
    updatedAt: sdk.serverTimestamp()
  };

  const normalized = normalizeCourseData(payload);
  await sdk.setDoc(courseDocRef, payload, { merge: true });

  // Update in-memory runtime caches with fully normalized course (including mirrored curriculum)
  _courseDataCache.set(cleanSlug, normalized);
  if (payload.id) {
    _courseDataCache.set(payload.id.toLowerCase(), normalized);
  }
  updateCourseInCache(normalized);

  // Update localStorage persistent cache for instantaneous offline/re-render access
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(`rp_course_cache_${cleanSlug}`, JSON.stringify(normalized));
      if (payload.id) {
        window.localStorage.setItem(`rp_course_cache_${payload.id.toLowerCase()}`, JSON.stringify(normalized));
      }
      let index = [];
      try {
        const rawIndex = window.localStorage.getItem('rp_courses_index');
        if (rawIndex) index = JSON.parse(rawIndex);
      } catch {}
      if (!Array.isArray(index)) index = [];
      const existingIdx = index.findIndex(c => (c.slug && c.slug.toLowerCase() === cleanSlug) || (c.id && String(c.id).toLowerCase() === String(payload.id).toLowerCase()));
      if (existingIdx >= 0) {
        index[existingIdx] = normalized;
      } else {
        index.push(normalized);
      }
      window.localStorage.setItem('rp_courses_index', JSON.stringify(index));
    } catch {
      // Ignore quota errors
    }
  }

  return { success: true, course: normalized };
}

/**
 * Delete a course from Firestore.
 * Requires administrator authorization.
 *
 * @param {string} uid - Firebase Auth UID
 * @param {string} courseId - Course slug or ID
 * @param {object|null} [dbOverride=null] - Optional database adapter
 * @returns {Promise<boolean>}
 */
export async function deleteAdminCourse(uid, courseId, dbOverride = null) {
  const isAdmin = await checkIsAdmin(uid, dbOverride);
  if (!isAdmin) {
    throw new Error('Access Denied: Administrative permissions required to delete courses.');
  }

  const bundle = dbOverride || await getFirestoreDb();
  if (!bundle) throw new Error('Database service unavailable.');

  const { db, sdk } = bundle;
  const cleanId = String(courseId).trim().toLowerCase();
  const courseDocRef = sdk.doc(db, 'courses', cleanId);

  await sdk.deleteDoc(courseDocRef);
  _courseDataCache.delete(cleanId);
  removeCourseFromCache(cleanId);
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.removeItem(`rp_course_cache_${cleanId}`);
      let index = [];
      try {
        const rawIndex = window.localStorage.getItem('rp_courses_index');
        if (rawIndex) index = JSON.parse(rawIndex);
      } catch {}
      if (Array.isArray(index)) {
        index = index.filter(c => (c.slug && c.slug.toLowerCase() !== cleanId) && (c.id && String(c.id).toLowerCase() !== cleanId));
        window.localStorage.setItem('rp_courses_index', JSON.stringify(index));
      }
    } catch {}
  }
  return true;
}

/**
 * Generate a cryptographically stable identifier for new topics or lessons.
 *
 * @param {string} [prefix='item']
 * @returns {string}
 */
export function generateStableId(prefix = 'item') {
  const randomPart = Math.random().toString(36).substring(2, 8);
  const timePart = Date.now().toString(36);
  return `${prefix}-${timePart}-${randomPart}`;
}

/**
 * Helper to reorder an array of items and re-index their displayOrder sequentially.
 *
 * @param {Array<object>} items
 * @param {number} fromIndex
 * @param {number} toIndex
 * @returns {Array<object>}
 */
export function reorderCollection(items, fromIndex, toIndex) {
  if (!Array.isArray(items)) return [];
  const list = [...items];
  if (fromIndex < 0 || fromIndex >= list.length || toIndex < 0 || toIndex >= list.length) {
    return list;
  }
  const [moved] = list.splice(fromIndex, 1);
  list.splice(toIndex, 0, moved);
  return list.map((item, idx) => ({
    ...item,
    displayOrder: idx + 1
  }));
}

/**
 * Reset course in-memory caches (for testing or sign-out).
 */
export function resetCourseCache() {
  _enrollmentCache.clear();
  _progressCache.clear();
  _courseDataCache.clear();
  _inFlightEnrollmentChecks.clear();
  _inFlightCourseData.clear();
}

