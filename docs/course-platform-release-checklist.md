# RisePaisa — Course Platform Release Checklist & Runbook

> **Authoritative Deployment & Release Protocol for RisePaisa Course Platform (Parts 1–10)**  
> *Target Environment: risepaisa-77278 | Custom Domain: risepaisa.com | Hosting: GitHub Pages*

This runbook specifies the step-by-step procedures required to prepare, verify, configure, release, and monitor the RisePaisa Course Platform.

---

## Strict Policy Notice

**NO CODE OR RULES MAY BE COMMITTED, PUSHED, OR DEPLOYED WITHOUT EXPLICIT WRITTEN APPROVAL FROM THE REPOSITORY OWNER.**

---

## Stage A — Local Verification

Before seeking release approval, complete and document the local verification checklist:

1. [ ] **Review Source Modifications**:
   - Inspect local changes: `git status --short`.
   - Ensure only intentional course platform and static pre-rendering files are staged/modified.
   - Confirm no untracked secrets, credentials, or private configuration files exist.
2. [ ] **Execute Complete Test Suite**:
   Run all 12 automated test suites:
   ```bash
   node tests/test_firebase_auth_foundation.mjs
   node tests/test_firestore_foundation.mjs
   node tests/test_profile_and_bookmarks_sync.mjs
   node tests/test_course_foundation.mjs
   node tests/test_course_learning_interface.mjs
   node tests/test_admin_and_navigation.mjs
   node tests/test_enrollment_management.mjs
   node tests/test_full_integration_and_hardening.mjs
   node tests/test_calculator_rendering.mjs
   node tests/test_calculators.mjs
   node tests/test_seo_and_indexability.mjs
   node tests/test_theme_and_rules.mjs
   ```
   *Requirement*: 1,001 tests must pass with 0 failures.
3. [ ] **Execute Static Page Generator**:
   ```bash
   node scripts/generate_static_pages.mjs
   ```
   *Requirement*: 216 static HTML pages generated with zero errors.
4. [ ] **Verify Firebase Target**:
   - `.firebaserc` must point to `"default": "risepaisa-77278"`.
   - `firebase.json` must configure only `"firestore": { "rules": "firestore.rules", "indexes": "firestore.indexes.json" }`.
   - `firebase.json` must NOT configure Firebase Hosting or Cloud Functions.
5. [ ] **Verify Secret Cleanliness**:
   - Confirm `js/firebase/config.js` contains only public web API parameters.
   - Confirm no private keys or service account credentials exist in the working tree.

---

## Stage B — Firebase Configuration Verification

Prior to rules deployment, the project owner must verify project settings in the [Firebase Console](https://console.firebase.google.com/project/risepaisa-77278):

1. [ ] **Authentication Providers**:
   - Navigate to **Authentication > Sign-in method**.
   - Verify **Email/Password** is **Enabled**.
   - Verify **Google Sign-In** is **Enabled** (with support email configured).
2. [ ] **Authorized Domains**:
   - Navigate to **Authentication > Settings > Authorized domains**.
   - Ensure the following domains are listed:
     - `risepaisa.com`
     - `www.risepaisa.com`
     - `risepaisa-77278.firebaseapp.com`
     - `localhost` (for local development)
3. [ ] **Cloud Firestore Database**:
   - Navigate to **Firestore Database**.
   - Verify the database is active in production mode.
   - Confirm default region (e.g., `asia-south1` or project default).
4. [ ] **Provision Authoritative Administrator Record**:
   - Have the authorized owner sign in to RisePaisa to establish their Firebase Authentication account.
   - Copy the owner's Firebase Auth UID from **Authentication > Users**.
   - In **Firestore Database**, create a root collection document:
     - **Collection**: `admins`
     - **Document ID**: `<OWNER_FIREBASE_AUTH_UID>`
     - **Fields**:
       ```json
       {
         "role": "admin",
         "email": "owner@risepaisa.com",
         "createdAt": <Current Timestamp>
       }
       ```
   - *Security Note*: Document creation in `/admins` is blocked from client-side Web SDK writes by rule. It can only be created via the Firebase Console or Admin SDK.

---

## Stage C — Controlled Firebase Release

Execute this stage **only after receiving explicit owner approval**:

1. [ ] **Backup Existing Firestore Security Rules**:
   - In Firebase Console > Firestore Database > Rules, copy and save existing active rules to a local backup file (`firestore.rules.backup-<date>`).
2. [ ] **Review Rules Diff**:
   - Compare `firestore.rules` against the production rules.
   - Ensure default-deny, owner isolation, admin-only enrollment writes, and immutable audit logs are intact.
3. [ ] **Deploy Rules**:
   ```bash
   firebase deploy --only firestore:rules
   ```
4. [ ] **Deploy Firestore Indexes (If Required)**:
   - If composite queries for audit filtering (`studentUid` / `courseId` with `orderBy('timestamp', 'desc')`) are needed:
     ```bash
     firebase deploy --only firestore:indexes
     ```
   - Note: The application includes graceful client-side fallback sorting for unindexed queries.
5. [ ] **Smoke Test Rules (Read-Only)**:
   - Open RisePaisa in private browsing (guest mode).
   - Verify public courses are readable.
   - Confirm unauthenticated requests cannot read `/admins` or write to any collection.

---

## Stage D — Website Release (GitHub Pages)

Execute this stage **only after receiving explicit owner approval**:

1. [ ] **Confirm Working Branch**:
   - Verify clean git status and confirm target branch (e.g., `main`).
2. [ ] **Pre-Release Diff Review**:
   - Run `git diff` and verify all changes.
3. [ ] **Commit Changes**:
   ```bash
   git add .
   git commit -m "feat(courses): release course platform foundation, classroom, and admin management (Parts 1-10)"
   ```
4. [ ] **Push to GitHub**:
   ```bash
   git push origin main
   ```
5. [ ] **Verify GitHub Pages Build**:
   - Monitor GitHub Actions / Pages deployment in repository settings.
   - Verify successful deployment status (HTTP 200).
   - Check custom domain DNS resolution at `https://risepaisa.com`.

---

## Stage E — Post-Release Verification Runbook

Perform a full smoke-test across all critical user journeys:

1. [ ] **Public Visitor Experience**:
   - Visit `https://risepaisa.com/courses`.
   - Verify course catalog cards render correctly.
   - Open `https://risepaisa.com/courses/nepse-stock-market-basics`.
   - Verify syllabus, course metadata, and "Start Free Preview" CTA.
   - Open free preview (`/courses/nepse-stock-market-basics/learn?lesson=lesson-1`).
   - Confirm Lesson 1 video plays without requiring login.
2. [ ] **Student Authentication**:
   - Sign up or log in with a test student account.
   - Verify user avatar and dropdown menu appear in the header.
   - Navigate to `/my-courses`.
   - Confirm empty state renders if not enrolled.
3. [ ] **Administrator Provisioning Verification**:
   - Sign in as the designated administrator account.
   - Open `/admin/courses` and `/admin/enrollments`.
   - Confirm the administrator console renders and is accessible.
4. [ ] **Controlled Test Enrollment**:
   - In `/admin/enrollments`, search for the test student account by email or UID.
   - Grant course access for 7 days.
   - Verify the enrollment record appears with "Active" badge.
   - Check that an audit log entry is recorded in the audit history table.
5. [ ] **Student Course Player Verification**:
   - In the student test account, open `/courses/nepse-stock-market-basics/learn?lesson=lesson-2`.
   - Confirm protected lesson 2 is unlocked and video loads.
   - Mark lesson as complete; verify progress indicator updates.
6. [ ] **Revocation and Expiration Verification**:
   - From the admin account, revoke access for the test student.
   - Refresh or navigate to another lesson in the student browser.
   - Confirm the lesson displays the "Enrollment Revoked" screen and suppresses video playback.
7. [ ] **Platform Health & Regression Checks**:
   - Verify financial calculators: `/calculators/sip`, `/calculators/emi`, `/calculators/nepal-income-tax`.
   - Verify search functionality: press shortcut `Cmd+K` / `Ctrl+K` or use mobile search.
   - Verify learning guides: `/learn/guides/complete-ipo-guide`.
   - Check browser developer tools console for zero uncaught errors.

---

## Rollback & Disaster Recovery Protocol

In the unlikely event of an issue during or following deployment:

### 1. Rolling Back Frontend Website (GitHub Pages)

If the web frontend exhibits critical errors or layout regressions:
1. Identify the last known good commit:
   ```bash
   git log --oneline -n 10
   ```
2. Revert the release commit safely:
   ```bash
   git revert HEAD -m "revert: rollback course platform release"
   git push origin main
   ```
3. GitHub Pages will automatically rebuild and deploy the prior stable commit within 2–3 minutes.

### 2. Rolling Back Cloud Firestore Security Rules

*Important*: Reverting Git code does **NOT** revert live Firestore security rules. Rules must be rolled back explicitly in Firebase:
1. **Via Firebase Console**:
   - Open **Firestore Database > Rules**.
   - Click **Rules history**.
   - Select the previous rule revision and click **Restore**.
2. **Via Local File**:
   - If restored locally from backup:
     ```bash
     firebase deploy --only firestore:rules
     ```

### 3. Data Integrity & Safety

- **Never drop collections or delete user documents**: If enrollment or audit issues arise, adjust rule definitions rather than purging data.
- **Student Progress Preservation**: Student progress documents (`/users/{uid}/courses/{courseId}/lessons/*`) are decoupled from enrollments and will remain intact across access revisions.
- **Audit Immutability**: Audit records in `enrollment_audits` are write-once append-only. They provide an unalterable forensic record of all provisioning actions.
