/**
 * test_admin_resources_and_access_codes.mjs
 *
 * Exhaustive Integration Test Suite for RisePaisa Resources Management CMS
 * & Secure Resource Access Code System:
 *
 * 1. Firestore & Storage Security Rules Verification
 * 2. Resource Data Normalization & Graceful Optionality
 * 3. Dynamic Category Management (Notion, Finance Tools, Custom)
 * 4. Resource CRUD, Persistence & Cache Synchronization
 * 5. Cryptographic Code Generation, Hashing & Masking (RISE-XXXX-XXXX)
 * 6. Redemption Engine — TYPE A: Single-Use (1 global use -> exhausted)
 * 7. Redemption Engine — TYPE B: Reusable Unlimited (multi-use, revokable)
 * 8. Redemption Engine — TYPE C: One Per User (multi-user, once per account)
 * 9. Code Expiration, Deactivation & Tamper Resistance
 * 10. Persistent Download Authorization without re-consumption
 * 11. Frontend Detail Page Optionality (No Video, No Screenshots, No Anchor Price)
 * 12. Frontend Pricing & Discount Badge Calculations
 * 13. Resource Card Rendering & Dynamic Filter Tabs
 * 14. Admin Navigation 3-Tab Cohesion & Routing Integrity
 */

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to load ES modules
async function importModule(relPath) {
  const fullPath = path.resolve(ROOT_DIR, relPath);
  return await import(`file://${fullPath}`);
}

// In-memory Mock DB Adapter for unit & integration testing
function createMockDb() {
  const store = new Map();
  store.set('admins/admin-uid-123', { uid: 'admin-uid-123', email: 'admin@risepaisa.com', role: 'admin' });
  store.set('admins/admin-uid', { uid: 'admin-uid', email: 'admin@risepaisa.com', role: 'admin' });
  const sdk = {
    doc: (db, col, id) => {
      const parts = id ? [col, id] : [col];
      return { path: parts.join('/'), id };
    },
    collection: (db, col) => ({ path: col }),
    getDoc: async (docRef) => {
      const data = store.get(docRef.path);
      return {
        exists: () => data !== undefined,
        data: () => (data ? JSON.parse(JSON.stringify(data)) : undefined),
        id: docRef.id
      };
    },
    setDoc: async (docRef, data, opts) => {
      if (opts && opts.merge && store.has(docRef.path)) {
        const existing = store.get(docRef.path);
        store.set(docRef.path, { ...existing, ...JSON.parse(JSON.stringify(data)) });
      } else {
        store.set(docRef.path, JSON.parse(JSON.stringify(data)));
      }
    },
    deleteDoc: async (docRef) => {
      store.delete(docRef.path);
    },
    getDocs: async (colRef) => {
      const docs = [];
      for (const [p, data] of store.entries()) {
        if (p.startsWith(colRef.path + '/') && p.split('/').length === colRef.path.split('/').length + 1) {
          docs.push({
            id: p.split('/').pop(),
            data: () => JSON.parse(JSON.stringify(data))
          });
        }
      }
      return { docs };
    }
  };

  return { db: {}, sdk, store };
}

describe('RisePaisa — Resources Management & Access Code System', () => {

  // ── 1. Security Rules Audit ────────────────────────────────────────────────
  describe('1. Firestore & Storage Security Rules', () => {
    it('verifies firestore.rules covers resources, access codes, and redemptions', () => {
      const firestoreRules = fs.readFileSync(path.join(ROOT_DIR, 'firestore.rules'), 'utf-8');
      
      assert.ok(firestoreRules.includes('match /resources/{resourceId}'), 'Must cover /resources collection');
      assert.ok(firestoreRules.includes('match /resource_access_codes/{codeId}'), 'Must cover /resource_access_codes');
      assert.ok(firestoreRules.includes('match /resource_redemptions/{redemptionId}'), 'Must cover /resource_redemptions');
      assert.ok(firestoreRules.includes('/users/{userId}/resources/{resourceId}'), 'Must cover user resource subcollection');
      
      // Check admin restrictions
      assert.ok(firestoreRules.includes('isAdmin()'), 'Must enforce isAdmin check for write access');
    });

    it('verifies storage.rules allows resource images (<=5MB) and files (<=50MB)', () => {
      const storageRules = fs.readFileSync(path.join(ROOT_DIR, 'storage.rules'), 'utf-8');
      
      assert.ok(storageRules.includes('match /resources/{resourceSlug}/images/{fileName}'), 'Covers resource images');
      assert.ok(storageRules.includes('match /resources/{resourceSlug}/files/{fileName}'), 'Covers resource download files');
      assert.ok(storageRules.includes('5 * 1024 * 1024'), 'Limits images to 5MB');
      assert.ok(storageRules.includes('50 * 1024 * 1024'), 'Limits downloads to 50MB');
    });
  });

  // ── 2. Resource Normalization & Graceful Optionality ───────────────────────
  describe('2. Resource Normalization & Graceful Optionality', () => {
    it('gracefully normalizes a minimal resource with missing optional fields without crashing', async () => {
      const { normalizeResourceData } = await importModule('js/firebase/resources.js');

      const minimal = {
        title: 'Simple Cheatsheet',
        slug: 'simple-cheatsheet',
        downloadableFiles: [{ title: 'Cheatsheet PDF', url: 'https://example.com/sheet.pdf', size: '1.2 MB' }]
      };

      const normalized = normalizeResourceData(minimal);

      assert.equal(normalized.title, 'Simple Cheatsheet');
      assert.equal(normalized.slug, 'simple-cheatsheet');
      assert.equal(normalized.price, 0);
      assert.equal(normalized.currency, 'NPR');
      assert.equal(normalized.category, 'Finance Tools');
      assert.equal(normalized.creator, 'Aakash Das');
      assert.equal(normalized.thumbnail, null, 'Thumbnail defaults to null');
      assert.equal(normalized.previewVideoUrl, null, 'Preview video defaults to null');
      assert.equal(normalized.originalPrice, null, 'Original price defaults to null');
      assert.deepEqual(normalized.screenshots, [], 'Screenshots array defaults to empty');
      assert.deepEqual(normalized.whatYouLearn, []);
      assert.deepEqual(normalized.whatsIncluded, []);
      assert.equal(normalized.published, true);
    });

    it('preserves existing static resources notion-finance-tracker and budget-planner-system', async () => {
      const { getResources, getResourceBySlug } = await importModule('js/data/resources.js');

      const all = getResources();
      assert.ok(all.length >= 2, 'Must contain at least 2 default resources');

      const notion = getResourceBySlug('notion-finance-tracker');
      assert.ok(notion, 'Notion Finance Tracker must exist');
      assert.equal(notion.price, 299);
      assert.equal(notion.category, 'Notion');

      const budget = getResourceBySlug('budget-planner-system');
      assert.ok(budget, 'Budget Planner System must exist');
      assert.equal(budget.price, 399);
      assert.equal(budget.category, 'Finance Tools');
    });
  });

  // ── 3. Resource CRUD & Dynamic Cache Synchronization ───────────────────────
  describe('3. Resource CRUD & Persistence', () => {
    it('saves a new resource to database and updates cache', async () => {
      const mockDb = createMockDb();
      const { saveAdminResource, fetchAdminResources, deleteAdminResource } = await importModule('js/firebase/resources.js');

      const newResource = {
        title: 'NEPSE Dividend Master Sheet',
        slug: 'nepse-dividend-master-sheet',
        category: 'Finance Tools',
        price: 499,
        originalPrice: 999,
        shortDescription: 'Track historical dividend yields and book closure dates in Nepal.',
        creator: 'Aakash Das',
        published: true,
        downloadableFiles: [
          { title: 'Dividend Tracker XLSX', url: 'https://example.com/div.xlsx', size: '3.1 MB' }
        ]
      };

      const saveResult = await saveAdminResource(newResource, 'admin-uid-123', { dbAdapter: mockDb });
      assert.equal(saveResult.success, true);
      assert.equal(saveResult.slug, 'nepse-dividend-master-sheet');

      // Verify persisted in mock db
      const doc = mockDb.store.get('resources/nepse-dividend-master-sheet');
      assert.ok(doc, 'Must be stored in resources/nepse-dividend-master-sheet');
      assert.equal(doc.price, 499);
      assert.equal(doc.originalPrice, 999);

      // Verify fetchAdminResources returns it
      const list = await fetchAdminResources({ dbAdapter: mockDb });
      const found = list.find(r => r.slug === 'nepse-dividend-master-sheet');
      assert.ok(found, 'Must be present in admin resources list');
      assert.equal(found.title, 'NEPSE Dividend Master Sheet');

      // Delete resource
      const delResult = await deleteAdminResource('nepse-dividend-master-sheet', 'admin-uid-123', { dbAdapter: mockDb });
      assert.equal(delResult.success, true);
      assert.equal(mockDb.store.has('resources/nepse-dividend-master-sheet'), false);
    });
  });

  // ── 4. Cryptographic Code Generation & Hashing ─────────────────────────────
  describe('4. Cryptographic Access Code Generator', () => {
    it('generates secure random code format RISE-XXXX-XXXX using non-ambiguous chars', async () => {
      const { generateAccessCodeString } = await importModule('js/firebase/resources.js');

      for (let i = 0; i < 20; i++) {
        const code = generateAccessCodeString();
        assert.match(code, /^RISE-[2-9A-HJ-NP-Z]{4}-[2-9A-HJ-NP-Z]{4}$/, `Code ${code} must match RISE-XXXX-XXXX format`);
        // Ambiguous characters (0, O, 1, I) should never be present in the random parts
        const randomPart = code.slice(5).replace('-', '');
        assert.ok(!randomPart.includes('0'), 'Random part should not contain 0');
        assert.ok(!randomPart.includes('O'), 'Random part should not contain O');
        assert.ok(!randomPart.includes('1'), 'Random part should not contain 1');
        assert.ok(!randomPart.includes('I'), 'Random part should not contain I');
      }
    });

    it('hashes access codes with SHA-256 and masks them for UI presentation', async () => {
      const { hashAccessCode, maskAccessCode, normalizeAccessCode } = await importModule('js/firebase/resources.js');

      const plain = 'RISE-8B4K-9D7W';
      const normalized = normalizeAccessCode(plain);
      assert.equal(normalized, 'RISE-8B4K-9D7W');

      const hash1 = await hashAccessCode(plain);
      const hash2 = await hashAccessCode('rise-8b4k-9d7w'); // Case-insensitive
      const hash3 = await hashAccessCode('  RISE-8B4K-9D7W  '); // Trimming

      assert.equal(hash1, hash2, 'Hash must be case-insensitive');
      assert.equal(hash1, hash3, 'Hash must be whitespace-agnostic');
      assert.equal(typeof hash1, 'string');
      assert.equal(hash1.length, 64, 'SHA-256 produces 64-char hex string');

      // Masking verification
      const masked = maskAccessCode(plain);
      assert.equal(masked, 'RISE-8B**-****');
    });

    it('creates single access code, storing hash but returning plaintext once', async () => {
      const mockDb = createMockDb();
      const { createAccessCode, CODE_TYPES, CODE_STATUS } = await importModule('js/firebase/resources.js');

      const result = await createAccessCode('admin-uid', {
        resourceSlug: 'notion-finance-tracker',
        codeType: CODE_TYPES.SINGLE_USE,
        internalNote: 'Customer Order #44'
      }, { dbAdapter: mockDb });

      assert.equal(result.success, true);
      assert.ok(result.plaintextCode.startsWith('RISE-'), 'Returns plaintext code');
      assert.ok(result.codeRecord, 'Returns code metadata record');
      
      // In the database: codeHash is stored, plaintextCode is NEVER stored
      const stored = mockDb.store.get(`resource_access_codes/${result.codeRecord.id}`);
      assert.ok(stored, 'Record stored in resource_access_codes');
      assert.ok(stored.codeHash, 'Hash must be stored');
      assert.equal(stored.plaintextCode, undefined, 'Plaintext code must NEVER be stored in DB');
      assert.equal(stored.codeDisplay, result.codeRecord.codeDisplay);
      assert.equal(stored.status, CODE_STATUS.ACTIVE);
      assert.equal(stored.redemptionCount, 0);
    });

    it('bulk generates 5 unique access codes', async () => {
      const mockDb = createMockDb();
      const { createBulkAccessCodes, CODE_TYPES } = await importModule('js/firebase/resources.js');

      const result = await createBulkAccessCodes('admin-uid', {
        resourceSlug: 'budget-planner-system',
        codeType: CODE_TYPES.SINGLE_USE,
        codeName: 'Tihar Promo'
      }, 5, { dbAdapter: mockDb });

      assert.equal(result.success, true);
      assert.equal(result.count, 5);
      assert.equal(result.codes.length, 5);

      const plaintextList = result.codes.map(c => c.plaintextCode);
      const uniqueCodes = new Set(plaintextList);
      assert.equal(uniqueCodes.size, 5, 'All 5 bulk codes must be unique');
    });
  });

  // ── 5. Redemption Engine: TYPE A (Single-Use) ──────────────────────────────
  describe('5. Redemption Engine — TYPE A: Single-Use Code', () => {
    it('redeems single-use code once and rejects second redemption as exhausted', async () => {
      const mockDb = createMockDb();
      const {
        createAccessCode,
        verifyAndRedeemAccessCode,
        CODE_TYPES,
        CODE_STATUS
      } = await importModule('js/firebase/resources.js');

      // 1. Create single-use code
      const created = await createAccessCode('admin-uid', {
        resourceSlug: 'budget-planner-system',
        codeType: CODE_TYPES.SINGLE_USE,
        internalNote: 'Bikash Das Order'
      }, { dbAdapter: mockDb });

      const plainCode = created.plaintextCode;

      // 2. First redemption (User A)
      const firstTry = await verifyAndRedeemAccessCode(plainCode, 'budget-planner-system', {
        userUid: 'user-a',
        dbAdapter: mockDb
      });

      assert.equal(firstTry.success, true);
      assert.equal(firstTry.resourceSlug, 'budget-planner-system');
      assert.ok(firstTry.accessToken, 'Access token issued');

      // Check record in DB
      const stored = mockDb.store.get(`resource_access_codes/${created.codeRecord.id}`);
      assert.equal(stored.redemptionCount, 1);
      assert.equal(stored.status, CODE_STATUS.EXHAUSTED, 'Single-use code becomes EXHAUSTED after 1st use');
      assert.equal(stored.redemptions.length, 1);
      assert.equal(stored.redemptions[0].userUid, 'user-a');

      // 3. Second redemption (User B) must fail!
      const secondTry = await verifyAndRedeemAccessCode(plainCode, 'budget-planner-system', {
        userUid: 'user-b',
        dbAdapter: mockDb
      });

      assert.equal(secondTry.success, false);
      assert.match(secondTry.message, /exhausted|already used/i);
    });
  });

  // ── 6. Redemption Engine: TYPE B (Reusable Unlimited) ──────────────────────
  describe('6. Redemption Engine — TYPE B: Reusable Unlimited Code', () => {
    it('allows multiple users to redeem unlimited code, then stops when revoked', async () => {
      const mockDb = createMockDb();
      const {
        createAccessCode,
        verifyAndRedeemAccessCode,
        updateAccessCodeStatus,
        CODE_TYPES,
        CODE_STATUS
      } = await importModule('js/firebase/resources.js');

      const created = await createAccessCode('admin-uid', {
        resourceSlug: 'notion-finance-tracker',
        codeType: CODE_TYPES.UNLIMITED,
        internalNote: 'Public Workshop Code'
      }, { dbAdapter: mockDb });

      const plainCode = created.plaintextCode;

      // User 1 redeems
      const r1 = await verifyAndRedeemAccessCode(plainCode, 'notion-finance-tracker', {
        userUid: 'user-1',
        dbAdapter: mockDb
      });
      assert.equal(r1.success, true);

      // User 2 redeems
      const r2 = await verifyAndRedeemAccessCode(plainCode, 'notion-finance-tracker', {
        userUid: 'user-2',
        dbAdapter: mockDb
      });
      assert.equal(r2.success, true);

      // User 3 (guest) redeems
      const r3 = await verifyAndRedeemAccessCode(plainCode, 'notion-finance-tracker', {
        guestSessionToken: 'guest-session-33',
        dbAdapter: mockDb
      });
      assert.equal(r3.success, true);

      const stored = mockDb.store.get(`resource_access_codes/${created.codeRecord.id}`);
      assert.equal(stored.redemptionCount, 3);
      assert.equal(stored.status, CODE_STATUS.ACTIVE);

      // Admin revokes the code
      await updateAccessCodeStatus('admin-uid', created.codeRecord.id, CODE_STATUS.REVOKED, { dbAdapter: mockDb });

      // User 4 tries to redeem -> blocked
      const r4 = await verifyAndRedeemAccessCode(plainCode, 'notion-finance-tracker', {
        userUid: 'user-4',
        dbAdapter: mockDb
      });
      assert.equal(r4.success, false);
      assert.match(r4.message, /revoked/i);
    });
  });

  // ── 7. Redemption Engine: TYPE C (One Per User) ────────────────────────────
  describe('7. Redemption Engine — TYPE C: One Redemption Per User', () => {
    it('allows distinct users to redeem once, and does not re-consume quota on repeat downloads', async () => {
      const mockDb = createMockDb();
      const {
        createAccessCode,
        verifyAndRedeemAccessCode,
        CODE_TYPES
      } = await importModule('js/firebase/resources.js');

      const created = await createAccessCode('admin-uid', {
        resourceSlug: 'budget-planner-system',
        codeType: CODE_TYPES.PER_USER,
        internalNote: 'Community Per User'
      }, { dbAdapter: mockDb });

      const plainCode = created.plaintextCode;

      // User 1 redeems first time
      const u1First = await verifyAndRedeemAccessCode(plainCode, 'budget-planner-system', {
        userUid: 'user-100',
        dbAdapter: mockDb
      });
      assert.equal(u1First.success, true);
      assert.equal(u1First.alreadyOwned, false);

      // User 1 redeems again (re-entering code or refreshing download)
      const u1Second = await verifyAndRedeemAccessCode(plainCode, 'budget-planner-system', {
        userUid: 'user-100',
        dbAdapter: mockDb
      });
      assert.equal(u1Second.success, true);
      assert.equal(u1Second.alreadyOwned, true, 'Returns already owned without re-incrementing count');

      const stored = mockDb.store.get(`resource_access_codes/${created.codeRecord.id}`);
      assert.equal(stored.redemptionCount, 1, 'Quota must remain 1 after repeat redemption by same user');

      // User 2 redeems
      const u2 = await verifyAndRedeemAccessCode(plainCode, 'budget-planner-system', {
        userUid: 'user-200',
        dbAdapter: mockDb
      });
      assert.equal(u2.success, true);
      assert.equal(u2.alreadyOwned, false);

      const storedAfter = mockDb.store.get(`resource_access_codes/${created.codeRecord.id}`);
      assert.equal(storedAfter.redemptionCount, 2);
    });
  });

  // ── 8. Code Expiration & Invalid Code Handling ─────────────────────────────
  describe('8. Expiration & Invalidation Handling', () => {
    it('rejects expired access code with clear error', async () => {
      const mockDb = createMockDb();
      const {
        createAccessCode,
        verifyAndRedeemAccessCode,
        CODE_TYPES
      } = await importModule('js/firebase/resources.js');

      // Create code expired yesterday
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const created = await createAccessCode('admin-uid', {
        resourceSlug: 'notion-finance-tracker',
        codeType: CODE_TYPES.UNLIMITED,
        expiresAt: yesterday
      }, { dbAdapter: mockDb });

      const res = await verifyAndRedeemAccessCode(created.plaintextCode, 'notion-finance-tracker', {
        userUid: 'user-x',
        dbAdapter: mockDb
      });

      assert.equal(res.success, false);
      assert.match(res.message, /expired/i);
    });

    it('rejects non-existent or tampered codes', async () => {
      const mockDb = createMockDb();
      const { verifyAndRedeemAccessCode } = await importModule('js/firebase/resources.js');

      const res = await verifyAndRedeemAccessCode('RISE-FAKE-CODE', 'notion-finance-tracker', {
        dbAdapter: mockDb
      });

      assert.equal(res.success, false);
      assert.match(res.message, /invalid|not found/i);
    });

    it('rejects code entered for wrong resource', async () => {
      const mockDb = createMockDb();
      const {
        createAccessCode,
        verifyAndRedeemAccessCode,
        CODE_TYPES
      } = await importModule('js/firebase/resources.js');

      // Code generated specifically for budget-planner-system
      const created = await createAccessCode('admin-uid', {
        resourceSlug: 'budget-planner-system',
        codeType: CODE_TYPES.SINGLE_USE
      }, { dbAdapter: mockDb });

      // User tries to enter it on notion-finance-tracker
      const res = await verifyAndRedeemAccessCode(created.plaintextCode, 'notion-finance-tracker', {
        dbAdapter: mockDb
      });

      assert.equal(res.success, false);
      assert.match(res.message, /not valid for this resource/i);
    });
  });

  // ── 9. Frontend Detail Page Optionality & Graceful Rendering ───────────────
  describe('9. Frontend Resource Detail Page Rendering & Optionality', () => {
    it('gracefully renders resource detail with missing video and screenshots without errors', async () => {
      const { renderResourceDetailPage } = await importModule('js/pages/resourceDetail.js');
      const { updateResourceInCache } = await importModule('js/data/resources.js');

      // Insert minimal test resource into cache
      updateResourceInCache({
        title: 'Minimal Excel Budgeting',
        slug: 'minimal-excel-budgeting',
        price: 249,
        category: 'Finance Tools',
        shortDescription: 'Clean budgeting spreadsheet',
        fullDescription: 'Simple and practical budgeting for individuals.',
        previewVideoUrl: null, // NO VIDEO
        imageUrl: null,        // NO PREVIEW IMAGE
        screenshots: [],       // NO SCREENSHOTS
        originalPrice: null,   // NO ORIGINAL PRICE
        targetAudience: null,  // NO AUDIENCE
        downloadableFiles: [
          { title: 'Budget Template', url: 'https://example.com/b.xlsx', size: '1 MB' }
        ]
      });

      const html = renderResourceDetailPage('minimal-excel-budgeting');

      assert.ok(html.includes('Minimal Excel Budgeting'), 'Renders title');
      assert.ok(html.includes('NPR 249'), 'Renders price');
      assert.ok(!html.includes('cd-video-wrap'), 'Must NOT render video wrapper when no video provided');
      assert.ok(!html.includes('cd-price-anchor'), 'Must NOT render anchor price when originalPrice is null');
      assert.ok(!html.includes('cd-discount-badge'), 'Must NOT render discount badge when no originalPrice');
      assert.ok(!html.includes('id="resource-audience"'), 'Must NOT render audience section when empty');
      assert.ok(html.includes('id="resource-access-unlock-box"'), 'Must render access code unlock area');
    });

    it('renders anchor price and discount badge when originalPrice > price', async () => {
      const { renderResourceDetailPage } = await importModule('js/pages/resourceDetail.js');
      const { updateResourceInCache } = await importModule('js/data/resources.js');

      updateResourceInCache({
        title: 'Discounted Notion System',
        slug: 'discounted-notion-system',
        price: 500,
        originalPrice: 1000, // 50% off
        category: 'Notion',
        shortDescription: 'Half off system',
        fullDescription: 'Full description.',
        downloadableFiles: []
      });

      const html = renderResourceDetailPage('discounted-notion-system');

      assert.ok(html.includes('cd-price-anchor'), 'Must render anchor price');
      assert.ok(html.includes('NPR 1,000'), 'Anchor price must show 1,000');
      assert.ok(html.includes('50% OFF'), 'Must render 50% OFF discount badge');
    });

    it('renders FREE badge when price is 0', async () => {
      const { renderResourceDetailPage } = await importModule('js/pages/resourceDetail.js');
      const { updateResourceInCache } = await importModule('js/data/resources.js');

      updateResourceInCache({
        title: 'Free Personal Finance Cheatsheet',
        slug: 'free-finance-cheatsheet',
        price: 0,
        accessType: 'free',
        category: 'Finance Tools',
        downloadableFiles: [
          { title: 'Cheatsheet PDF', url: 'https://example.com/c.pdf', size: '500 KB' }
        ]
      });

      const html = renderResourceDetailPage('free-finance-cheatsheet');

      assert.ok(html.includes('FREE'), 'Must show FREE badge');
      assert.ok(html.includes('Direct Download') || html.includes('Download Cheatsheet PDF'), 'Must allow direct download');
    });
  });

  // ── 10. Components & Catalog Parity ─────────────────────────────────────────
  describe('10. Resource Card & Dynamic Categories', () => {
    it('renders resource card with correct thumbnail fallback and pricing', async () => {
      const { renderResourceCard } = await importModule('js/components.js');

      const cardHtml = renderResourceCard({
        id: 99,
        slug: 'custom-tool',
        title: 'Custom Tool',
        price: 350,
        originalPrice: 700,
        category: 'Finance Tools',
        shortDescription: 'Practical automated tool'
      });

      assert.ok(cardHtml.includes('Custom Tool'), 'Renders title');
      assert.ok(cardHtml.includes('NPR 350') || cardHtml.includes('350'), 'Renders price');
      assert.ok(cardHtml.includes('50% OFF'), 'Renders discount badge');
      assert.ok(cardHtml.includes('/resources/custom-tool'), 'Links to detail page');
    });

    it('verifies dynamic categories support in renderResourcesPage', async () => {
      const { renderResourcesPage } = await importModule('js/pages/resources.js');

      const customCatalog = [
        { id: 1, slug: 'tool-a', title: 'Tool A', category: 'Notion', price: 100 },
        { id: 2, slug: 'tool-b', title: 'Tool B', category: 'Finance Tools', price: 200 },
        { id: 3, slug: 'tool-c', title: 'Tool C', category: 'Real Estate Tools', price: 300 }
      ];

      const html = renderResourcesPage(customCatalog);

      assert.ok(html.includes('Real Estate Tools'), 'Dynamic custom category must be rendered in filter tabs');
      assert.ok(html.includes('Tool C'), 'Resource card rendered');
    });
  });

  // ── 11. Admin Navigation 3-Tab Cohesion ─────────────────────────────────────
  describe('11. Admin Portal Navigation Cohesion', () => {
    it('verifies all 3 admin pages share the unified 3-tab navigation bar', async () => {
      const { renderAdminCoursesPage } = await importModule('js/pages/adminCourses.js');
      const { renderAdminEnrollmentsPage } = await importModule('js/pages/adminEnrollments.js');
      const { renderAdminResourcesPage } = await importModule('js/pages/adminResources.js');

      const coursesHtml = renderAdminCoursesPage();
      const enrollHtml = renderAdminEnrollmentsPage();
      const resHtml = renderAdminResourcesPage();

      // Check all 3 tabs present in all 3 pages
      [coursesHtml, enrollHtml, resHtml].forEach(html => {
        assert.ok(html.includes('Courses &amp; Lessons'), 'Must have Courses tab');
        assert.ok(html.includes('Student Enrollments'), 'Must have Enrollments tab');
        assert.ok(html.includes('Resources &amp; Access Codes'), 'Must have Resources & Access Codes tab');
      });

      // Check active state
      assert.ok(coursesHtml.includes('/admin/courses" class="ae-tab-btn active"'), 'Courses tab is active in courses page');
      assert.ok(enrollHtml.includes('/admin/enrollments" class="ae-tab-btn active"'), 'Enrollments tab is active in enrollments page');
      assert.ok(resHtml.includes('/admin/resources" class="ae-tab-btn active"'), 'Resources tab is active in resources page');
    });
  });

  // ── 12. Protection of Existing Video Player & Courses ──────────────────────
  describe('12. Protection of Existing Courses & Player System', () => {
    it('verifies NEPSE stock market course remains untouched and valid', async () => {
      const { getCourseBySlug, getPublicCourse } = await importModule('js/data/courses.js');

      const nepse = getCourseBySlug('nepse-stock-market-basics');
      assert.ok(nepse, 'NEPSE course must exist');
      assert.equal(nepse.price, 2999);
      assert.ok(Array.isArray(nepse.curriculum), 'Curriculum intact');

      const pub = getPublicCourse();
      assert.equal(pub.slug, 'nepse-stock-market-basics');
    });

    it('verifies Video.js branded player component functions without modification', async () => {
      const { createBrandedVideoPlayer } = await importModule('js/components/videoPlayer.js');

      const player = createBrandedVideoPlayer({
        embedUrl: 'https://www.youtube.com/watch?v=ddb4H0uPioo',
        title: 'Lesson 1',
        playerId: 'test-player'
      });

      assert.ok(player.includes('youtube-video') || player.includes('video-player') || player.includes('video-js'), 'Video player element preserved');
      assert.ok(player.includes('test-player'), 'Player ID preserved');
    });
  });

});
