# RisePaisa — Student Account Management & Onboarding Architecture

This document specifies the technical architecture, security model, and operating procedures for the Student Account Management System in the RisePaisa Administrator Portal.

---

## 1. Overview & Core Philosophy

RisePaisa provides a dedicated administrator-driven student provisioning lifecycle designed with Apple-inspired minimalism and bank-grade security:
1. **Zero Fake Mailboxes:** Students log in with a clean, memorable **Student ID** (e.g. `RP-2026-A7K9M2`) and temporary password. Internal authentication bridging maps this identifier to an internal Firebase Auth account (`rp-2026-xxxxxx@students.risepaisa.com`) without misleading the student into thinking an email mailbox exists.
2. **First-Login Mandatory Onboarding:** When a newly created student signs in, they are immediately guided to complete their profile (Full Name, Nepali Mobile Number `+977 98/97/96...`, and acceptance of terms & privacy policies). Protected course lessons remain gated until onboarding is complete.
3. **Multi-Layer Access Gating:** Course access requires:
   - Valid authentication.
   - Authoritative account status (`accountStatus == "active"`).
   - Completed onboarding (`onboardingCompleted == true`).
   - Active, non-expired, and non-revoked enrollment.
4. **Authoritative Audit Trail:** Every privileged operation (account creation, profile edits, password resets, suspension, reactivation, access grants, renewals, and revocations) writes an append-only audit record to `enrollment_audits`.

---

## 2. Student Profile Data Model

### A. User Document (`users/{uid}`)
```json
{
  "uid": "wJ8eK1xM4bQ...",
  "studentId": "RP-2026-A7K9M2",
  "internalEmail": "rp-2026-a7k9m2@students.risepaisa.com",
  "displayName": "Ramesh Sharma",
  "phoneNumber": "+9779841234567",
  "email": "ramesh.sharma@gmail.com",
  "role": "student",
  "accountStatus": "active",
  "onboardingCompleted": true,
  "termsAccepted": true,
  "termsAcceptedAt": "Timestamp",
  "adminNote": "Cohort 2026 / In-person registration",
  "createdAt": "Timestamp",
  "updatedAt": "Timestamp",
  "createdBy": "admin_uid_here"
}
```

### B. Student ID Mapping (`studentIdMappings/{studentId}`)
Maintains reverse index from Student ID to Auth UID. Restricted exclusively to allowlisted platform administrators in `firestore.rules` to prevent account enumeration.
```json
{
  "studentId": "RP-2026-A7K9M2",
  "uid": "wJ8eK1xM4bQ...",
  "internalEmail": "rp-2026-a7k9m2@students.risepaisa.com",
  "createdAt": "Timestamp",
  "createdBy": "admin_uid_here"
}
```

### C. Enrollment Document (`users/{uid}/courses/{courseId}`)
```json
{
  "courseId": "nepse-stock-market-basics",
  "status": "active",
  "source": "manual_admin",
  "startsAt": "Timestamp",
  "expiresAt": "Timestamp (or null for lifetime)",
  "grantedAt": "Timestamp",
  "updatedAt": "Timestamp",
  "grantedBy": "admin_uid_here",
  "note": "Granted by administrator"
}
```

### D. Audit Log (`enrollment_audits/{auditId}`)
Append-only log accessible exclusively to allowlisted admins:
```json
{
  "eventType": "student_account_created",
  "targetUid": "wJ8eK1xM4bQ...",
  "targetStudentId": "RP-2026-A7K9M2",
  "adminUid": "admin_uid_here",
  "timestamp": "Timestamp",
  "note": "Student account provisioned by administrator"
}
```
*Note: Passwords, tokens, and payment data are strictly excluded from audit records.*

---

## 3. Student-ID Authentication Flow

1. **Generation:** Server/client helper generates unique `RP-2026-[A-Z0-9]{6}` with random entropy across 32 alphanumeric chars (avoiding ambiguous letters `I`, `O`, `0`, `1`).
2. **Internal Bridge:**
   ```javascript
   resolveStudentLoginIdentifier("RP-2026-A7K9M2")
   // Returns: "rp-2026-a7k9m2@students.risepaisa.com"
   ```
3. **Sign-In:** The unified login modal (`js/firebase/ui.js`) accepts both regular emails and Student IDs (`type="text"`, placeholder `you@example.com or RP-2026-A7K9M2`).
4. **Session Isolation:** Creating a student account in the browser uses a secondary named Firebase App (`initializeApp(firebaseConfig, 'SecApp_...')`), keeping the primary administrator session active and authenticated.

---

## 4. First-Login Student Onboarding

1. Upon successful login (`initAuthUI`), `auth.js` detects if the user is a student with `onboardingCompleted === false`.
2. The user is presented with a non-dismissible onboarding dialog ("Complete Your Student Profile").
3. Mandatory inputs:
   - Full Name.
   - Nepali mobile phone number (`+977 98/97/96...`). Validated and normalized into E.164 standard.
   - Acceptance of Terms of Service & Privacy Notice.
4. On submission, `completeStudentProfile()` persists `displayName`, `phoneNumber`, `termsAccepted: true`, and `onboardingCompleted: true`.
5. Protected lesson views (`courseLearn.js`) gate video player playback and show an informative message if onboarding is pending.

---

## 5. Account Suspension & Reactivation

1. **Suspension:**
   - Admin triggers "Suspend Account" from directory or active profile.
   - `users/{uid}` updates `accountStatus: 'suspended'`.
   - Audit event `student_account_suspended` is recorded.
   - All protected video lessons (`courseLearn.js`) and enrolled course listings (`myCourses.js`) immediately lock with the warning:
     *"Your RisePaisa account is currently suspended. Please contact support for assistance."*
2. **Reactivation:**
   - Admin triggers "Reactivate Account".
   - `accountStatus` updates to `'active'`.
   - Audit event `student_account_reactivated` is recorded.
   - Restores valid non-expired course access; previously revoked courses remain revoked.

---

## 6. How to Test Locally

Run the complete test suite including all 24 student account tests:
```bash
npm test
```

Generate all static pages:
```bash
node scripts/generate_static_pages.mjs
```

Start the local server:
```bash
python3 server.py
# Open http://localhost:8000/admin/enrollments
```

---

## 7. Production Deployment Requirements

To activate in production Firebase project (`risepaisa-77278`):
1. **Firestore Security Rules:** Publish the updated rules from `firestore.rules` via the Firebase Console (Firestore > Rules) or via `firebase deploy --only firestore:rules`.
2. **Admin Allowlist:** Ensure your administrator Auth UID exists under collection `admins/{uid}` with `role: "admin"`.
