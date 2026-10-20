// ==============================================
// risePaisa - Firebase Web Configuration
// Modular, secure client configuration
// Public web identifiers only — NEVER service account secrets
// ==============================================

/**
 * Standard Firebase Web App configuration for RisePaisa (risepaisa-77278).
 * Note: Firebase client config values are public identifiers used by the SDK
 * to connect to your Firebase project. Sensitive database security is enforced
 * strictly by Firebase Authentication and Firestore Security Rules.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyDhOz4BzvNS5aRV91kMDs6KBX9zskoWDLc",
  authDomain: "risepaisa-77278.firebaseapp.com",
  projectId: "risepaisa-77278",
  storageBucket: "risepaisa-77278.firebasestorage.app",
  messagingSenderId: "710320151474",
  appId: "1:710320151474:web:4b1f26d160061fc9b122ab",
  measurementId: "G-5RJW6D8E5L"
};

/**
 * Verify whether valid web credentials have been set.
 * Returns true only when required fields (apiKey, projectId, appId) are populated.
 */
export function isFirebaseConfigured(config = firebaseConfig) {
  if (!config) return false;
  return Boolean(
    config.apiKey &&
    config.apiKey.trim() !== '' &&
    config.projectId &&
    config.projectId.trim() !== '' &&
    config.appId &&
    config.appId.trim() !== ''
  );
}

let _firebaseAppInstance = null;
let _firebaseAppPromise = null;

/**
 * Get or initialize the modular Firebase App instance.
 * Safe for server-side / static build environments where window/document do not exist.
 */
export async function getFirebaseApp(config = firebaseConfig) {
  if (typeof window === 'undefined') {
    // Return null during Node.js static site generation (generate_static_pages.mjs)
    return null;
  }

  if (_firebaseAppInstance) {
    return _firebaseAppInstance;
  }

  if (!isFirebaseConfigured(config)) {
    return null;
  }

  if (_firebaseAppPromise) {
    return _firebaseAppPromise;
  }

  _firebaseAppPromise = (async () => {
    try {
      const { initializeApp, getApps, getApp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
      const existingApps = getApps();
      if (existingApps.length > 0) {
        _firebaseAppInstance = getApp();
      } else {
        _firebaseAppInstance = initializeApp(config);
      }
      return _firebaseAppInstance;
    } catch (err) {
      console.warn('[risePaisa:Firebase] Initialization failed:', err);
      _firebaseAppInstance = null;
      return null;
    } finally {
      _firebaseAppPromise = null;
    }
  })();

  return _firebaseAppPromise;
}

