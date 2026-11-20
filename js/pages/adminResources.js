// ==============================================
// risePaisa — Resources Management & Access Code Console (Admin Interface)
// Comprehensive CMS for Resources and Cryptographic Access Code Generator
// ==============================================

import { ROUTES } from '../routes.js';
import { setPageMeta } from '../components.js';
import {
  fetchAdminResources,
  saveAdminResource,
  deleteAdminResource,
  fetchAccessCodes,
  createAccessCode,
  createBulkAccessCodes,
  updateAccessCodeStatus,
  deleteAccessCode,
  fetchRedemptionAuditLogs,
  uploadResourceMedia,
  validateResourceImageFile,
  validateResourceDownloadFile,
  validateResource,
  generateAccessCodeString,
  maskAccessCode,
  CODE_TYPES,
  CODE_STATUS
} from '../firebase/resources.js';
import { checkIsAdminDetailed } from '../firebase/courses.js';
import {
  subscribeToAuth,
  waitForAuthReady,
  logoutUser
} from '../firebase/auth.js';
import { openAuthModal } from '../firebase/ui.js';

const AR_ICONS = {
  plus: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  key: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  book: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  history: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
};

/**
 * Render the static SSR shell of the Admin Resources & Access Codes page.
 *
 * @returns {string} HTML string
 */
export function renderAdminResourcesPage() {
  return `
    <div class="ac-page ae-page ar-page" id="ar-page">
      <!-- Breadcrumb Bar -->
      <nav class="ac-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container ac-breadcrumb-inner">
          <a href="${ROUTES.HOME}" class="ac-crumb-link">Home</a>
          <span class="ac-crumb-sep">/</span>
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ac-crumb-link">Admin Portal</a>
          <span class="ac-crumb-sep">/</span>
          <span class="ac-crumb-current" aria-current="page">Resources &amp; Access Codes</span>
        </div>
      </nav>

      <!-- Admin Tab Switcher -->
      <div class="container ae-nav-tabs-wrap">
        <div class="ae-nav-tabs" role="tablist" aria-label="Admin Navigation Tabs">
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ae-tab-btn" role="tab" aria-selected="false">
            ${AR_ICONS.book} Courses &amp; Lessons
          </a>
          <a href="${ROUTES.ADMIN_ENROLLMENTS || '/admin/enrollments'}" class="ae-tab-btn" role="tab" aria-selected="false">
            ${AR_ICONS.user} Student Enrollments
          </a>
          <a href="${ROUTES.ADMIN_RESOURCES || '/admin/resources'}" class="ae-tab-btn active" role="tab" aria-selected="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> Resources &amp; Access Codes
          </a>
        </div>
      </div>

      <!-- Header Section -->
      <header class="ac-header-section">
        <div class="container ac-header-inner">
          <div>
            <div class="ac-badge">Administrator Portal</div>
            <h1 class="ac-title">Resources &amp; Access Code System</h1>
            <p class="ac-lead">Manage digital resources catalog, upload media &amp; downloads, configure pricing, and generate secure multi-type access codes.</p>
          </div>
          <div class="ac-header-actions" id="ar-header-actions">
            <!-- Dynamic Actions will render here -->
          </div>
        </div>
      </header>

      <!-- Main Workspace -->
      <main class="container ac-main-content">
        <div id="ar-alert-slot" class="ac-alert-slot" role="alert" aria-live="assertive"></div>
        <div id="ar-workspace" class="ar-workspace" aria-live="polite">
          <div class="ac-loading-state">
            <div class="ac-spinner"></div>
            <p>Checking administrative authorization...</p>
          </div>
        </div>
      </main>

      <!-- Modal Slot for Modals, Editors & Success Code Reveal -->
      <div id="ar-modal-slot"></div>
    </div>
  `;
}

/**
 * Initialize dynamic resources catalog, access codes, file uploaders, and generator.
 *
 * @returns {Function} Cleanup function
 */
export function initAdminResourcesPage() {
  const workspace = document.getElementById('ar-workspace');
  const alertSlot = document.getElementById('ar-alert-slot');
  const headerActions = document.getElementById('ar-header-actions');
  const modalSlot = document.getElementById('ar-modal-slot');
  if (!workspace) return () => {};

  setPageMeta(
    'Resources & Access Codes | risePaisa Admin',
    'Manage digital resources, files, and secure access codes.',
    ROUTES.ADMIN_RESOURCES
  );

  let currentUser = null;
  let authUnsubscribe = null;
  let activeTab = 'resources'; // 'resources' | 'codes'
  let resourcesList = [];
  let accessCodesList = [];
  let isSubmitting = false;

  // Filter states
  let resourceSearchQuery = '';
  let resourceCategoryFilter = 'all';
  let resourceStatusFilter = 'all';

  let codeSearchQuery = '';
  let codeResourceFilter = 'all';
  let codeTypeFilter = 'all';
  let codeStatusFilter = 'all';

  const showAlert = (message, type = 'success', duration = 4000) => {
    if (!alertSlot) return;
    alertSlot.innerHTML = `
      <div class="ac-alert ac-alert-${type}" role="alert">
        <span>${message}</span>
        <button type="button" class="ac-alert-close" aria-label="Close alert" onclick="this.parentElement.remove()">×</button>
      </div>
    `;
    if (duration > 0) {
      setTimeout(() => {
        if (alertSlot.firstChild) alertSlot.innerHTML = '';
      }, duration);
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape' && modalSlot && modalSlot.innerHTML.trim() !== '') {
      modalSlot.innerHTML = '';
    }
  };
  window.addEventListener('keydown', handleEscapeKey);

  modalSlot?.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('ae-modal-backdrop')) {
      modalSlot.innerHTML = '';
    }
  });

  // ── Render Header Controls ──────────────────────────────────────────────────
  const renderHeaderActions = () => {
    if (!headerActions) return;
    headerActions.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <div class="ar-subnav-pill" style="display:inline-flex;background:var(--color-surface-sunken);border:1px solid var(--color-border);border-radius:var(--radius-full, 9999px);padding:3px;gap:4px;">
          <button type="button" class="btn btn-sm ar-subtab-btn ${activeTab === 'resources' ? 'active' : ''}" id="ar-subtab-resources-btn" style="border-radius:9999px;padding:6px 14px;font-size:13px;font-weight:600;${activeTab === 'resources' ? 'background:var(--color-surface);color:var(--color-heading);box-shadow:0 1px 3px rgba(0,0,0,0.08);' : 'background:transparent;color:var(--color-text-secondary);'}">
            ${AR_ICONS.layers} Resources Catalog
          </button>
          <button type="button" class="btn btn-sm ar-subtab-btn ${activeTab === 'codes' ? 'active' : ''}" id="ar-subtab-codes-btn" style="border-radius:9999px;padding:6px 14px;font-size:13px;font-weight:600;${activeTab === 'codes' ? 'background:var(--color-surface);color:var(--color-heading);box-shadow:0 1px 3px rgba(0,0,0,0.08);' : 'background:transparent;color:var(--color-text-secondary);'}">
            ${AR_ICONS.key} Access Codes
          </button>
        </div>
        ${activeTab === 'resources' ? `
          <button type="button" class="btn btn-primary btn-sm" id="ar-add-resource-btn" style="border-radius:var(--radius-md, 8px);display:inline-flex;align-items:center;gap:6px;">
            ${AR_ICONS.plus} Add Resource
          </button>
        ` : `
          <button type="button" class="btn btn-primary btn-sm" id="ar-generate-code-btn" style="border-radius:var(--radius-md, 8px);display:inline-flex;align-items:center;gap:6px;">
            ${AR_ICONS.key} Generate Access Code
          </button>
        `}
      </div>
    `;

    document.getElementById('ar-subtab-resources-btn')?.addEventListener('click', () => {
      activeTab = 'resources';
      renderHeaderActions();
      renderActiveTab();
    });

    document.getElementById('ar-subtab-codes-btn')?.addEventListener('click', () => {
      activeTab = 'codes';
      renderHeaderActions();
      renderActiveTab();
    });

    document.getElementById('ar-add-resource-btn')?.addEventListener('click', () => {
      openResourceEditorModal(null);
    });

    document.getElementById('ar-generate-code-btn')?.addEventListener('click', () => {
      openGenerateCodeModal();
    });
  };

  // ── Render Active Tab ───────────────────────────────────────────────────────
  const renderActiveTab = () => {
    if (activeTab === 'resources') {
      renderResourcesCatalog();
    } else {
      renderAccessCodesManager();
    }
  };

  // ── 1. Resources Catalog View ───────────────────────────────────────────────
  const renderResourcesCatalog = () => {
    const categories = ['all', ...new Set(resourcesList.map(r => r.category).filter(Boolean))];

    let filtered = resourcesList.filter(r => {
      if (resourceSearchQuery) {
        const q = resourceSearchQuery.toLowerCase();
        const matchTitle = (r.title || '').toLowerCase().includes(q);
        const matchSlug = (r.slug || '').toLowerCase().includes(q);
        const matchDesc = (r.shortDescription || '').toLowerCase().includes(q);
        if (!matchTitle && !matchSlug && !matchDesc) return false;
      }
      if (resourceCategoryFilter !== 'all' && r.category !== resourceCategoryFilter) {
        return false;
      }
      if (resourceStatusFilter === 'published' && r.published === false) return false;
      if (resourceStatusFilter === 'draft' && r.published !== false) return false;
      return true;
    });

    workspace.innerHTML = `
      <div class="ar-catalog-container">
        <!-- Filter Card -->
        <div class="ae-search-card" style="margin-bottom:20px;padding:16px 20px;">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:space-between;">
            <div style="flex:1;min-width:240px;position:relative;">
              <input type="text" id="ar-resource-search" class="form-control" placeholder="Search resources by title, slug, or description..." value="${resourceSearchQuery}" style="width:100%;padding:10px 14px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;background:var(--color-bg);color:var(--color-text);" />
            </div>
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
              <select id="ar-resource-category-filter" style="padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;background:var(--color-bg);color:var(--color-text);">
                <option value="all">All Categories</option>
                ${categories.filter(c => c !== 'all').map(c => `
                  <option value="${c}" ${resourceCategoryFilter === c ? 'selected' : ''}>${c}</option>
                `).join('')}
              </select>
              <select id="ar-resource-status-filter" style="padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;background:var(--color-bg);color:var(--color-text);">
                <option value="all" ${resourceStatusFilter === 'all' ? 'selected' : ''}>All Statuses</option>
                <option value="published" ${resourceStatusFilter === 'published' ? 'selected' : ''}>Published</option>
                <option value="draft" ${resourceStatusFilter === 'draft' ? 'selected' : ''}>Draft</option>
              </select>
              <span style="font-size:13px;color:var(--color-text-secondary);font-weight:500;">
                ${filtered.length} ${filtered.length === 1 ? 'Resource' : 'Resources'}
              </span>
            </div>
          </div>
        </div>

        <!-- Resources Table -->
        ${filtered.length > 0 ? `
          <div class="ar-table-wrap" style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg, 16px);overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;">
                <thead>
                  <tr style="border-bottom:1px solid var(--color-border);background:var(--color-surface-sunken);">
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Resource</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Category</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Pricing (NPR)</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Files &amp; Access</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Status</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;text-align:right;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${filtered.map(r => {
                    const thumb = r.thumbnail || r.imageUrl || 'assets/images/resource-notion.png';
                    const hasDiscount = r.originalPrice && Number(r.originalPrice) > Number(r.price);
                    const filesCount = Array.isArray(r.downloadableFiles) ? r.downloadableFiles.length : 0;
                    const hasNotion = Boolean(r.notionTemplateUrl);
                    const isPublished = r.published !== false;

                    return `
                      <tr style="border-bottom:1px solid var(--color-border);">
                        <td style="padding:14px 16px;">
                          <div style="display:flex;align-items:center;gap:12px;">
                            <img src="${thumb}" alt="" style="width:44px;height:44px;border-radius:8px;object-fit:cover;border:1px solid var(--color-border);background:var(--color-surface-subtle);" onerror="this.src='assets/images/resource-notion.png'" />
                            <div>
                              <strong style="color:var(--color-heading);display:block;font-size:14px;">${r.title}</strong>
                              <span style="font-family:monospace;font-size:12px;color:var(--color-text-secondary);">${r.slug}</span>
                            </div>
                          </div>
                        </td>
                        <td style="padding:14px 16px;">
                          <span style="display:inline-block;padding:3px 10px;border-radius:9999px;font-size:12px;font-weight:600;background:var(--color-surface-subtle);color:var(--color-heading);border:1px solid var(--color-border);">
                            ${r.category || 'General'}
                          </span>
                        </td>
                        <td style="padding:14px 16px;">
                          <div style="font-weight:600;color:var(--color-heading);">
                            ${Number(r.price) === 0 ? '<span style="color:var(--color-success,#16a34a)">FREE</span>' : `NPR ${Number(r.price).toLocaleString()}`}
                          </div>
                          ${hasDiscount ? `
                            <div style="font-size:11px;color:var(--color-text-muted);text-decoration:line-through;">
                              NPR ${Number(r.originalPrice).toLocaleString()}
                            </div>
                          ` : ''}
                        </td>
                        <td style="padding:14px 16px;font-size:13px;color:var(--color-text-secondary);">
                          <div>${filesCount} downloadable ${filesCount === 1 ? 'file' : 'files'}</div>
                          ${hasNotion ? '<span style="font-size:11px;color:var(--color-primary);font-weight:500;">✓ Notion Workspace</span>' : ''}
                        </td>
                        <td style="padding:14px 16px;">
                          <span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:9999px;font-size:12px;font-weight:600;${isPublished ? 'background:rgba(22,163,74,0.1);color:#16a34a;' : 'background:rgba(234,179,8,0.1);color:#ca8a04;'}">
                            <span style="width:6px;height:6px;border-radius:50%;background:currentColor;"></span>
                            ${isPublished ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td style="padding:14px 16px;text-align:right;">
                          <div style="display:inline-flex;gap:6px;align-items:center;">
                            <a href="${ROUTES.RESOURCE_DETAIL(r.slug)}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" title="View Public Page" style="padding:6px 10px;">
                              ${AR_ICONS.eye}
                            </a>
                            <button type="button" class="btn btn-ghost btn-sm ar-toggle-pub-btn" data-slug="${r.slug}" title="${isPublished ? 'Unpublish' : 'Publish'}" style="padding:6px 10px;">
                              ${isPublished ? AR_ICONS.lock : AR_ICONS.check}
                            </button>
                            <button type="button" class="btn btn-secondary btn-sm ar-edit-resource-btn" data-slug="${r.slug}" style="padding:6px 12px;display:inline-flex;align-items:center;gap:4px;">
                              ${AR_ICONS.edit} Edit
                            </button>
                            <button type="button" class="btn btn-ghost btn-sm ar-delete-resource-btn" data-slug="${r.slug}" title="Delete Resource" style="padding:6px 10px;color:var(--color-danger, #ef4444);">
                              ${AR_ICONS.trash}
                            </button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : `
          <div style="text-align:center;padding:56px 20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg, 16px);">
            <div style="width:48px;height:48px;border-radius:50%;background:var(--color-surface-subtle);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);">
              ${AR_ICONS.layers}
            </div>
            <h3 style="font-size:18px;font-weight:600;color:var(--color-heading);margin-bottom:6px;">No Resources Found</h3>
            <p style="font-size:14px;color:var(--color-text-secondary);max-width:400px;margin:0 auto 20px;">No resources matched your search filters. Clear your filters or add a new resource.</p>
            <button type="button" class="btn btn-primary btn-sm" id="ar-empty-add-btn">
              ${AR_ICONS.plus} Add New Resource
            </button>
          </div>
        `}
      </div>
    `;

    // Event listeners
    const searchInput = document.getElementById('ar-resource-search');
    searchInput?.addEventListener('input', (e) => {
      resourceSearchQuery = e.target.value.trim();
      renderResourcesCatalog();
    });

    const categorySelect = document.getElementById('ar-resource-category-filter');
    categorySelect?.addEventListener('change', (e) => {
      resourceCategoryFilter = e.target.value;
      renderResourcesCatalog();
    });

    const statusSelect = document.getElementById('ar-resource-status-filter');
    statusSelect?.addEventListener('change', (e) => {
      resourceStatusFilter = e.target.value;
      renderResourcesCatalog();
    });

    document.getElementById('ar-empty-add-btn')?.addEventListener('click', () => {
      openResourceEditorModal(null);
    });

    // Wire table actions
    document.querySelectorAll('.ar-edit-resource-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        const res = resourcesList.find(r => r.slug === slug);
        if (res) openResourceEditorModal(res);
      });
    });

    document.querySelectorAll('.ar-toggle-pub-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const slug = btn.getAttribute('data-slug');
        const res = resourcesList.find(r => r.slug === slug);
        if (!res) return;
        const newPublished = !(res.published !== false);
        try {
          await saveAdminResource({ ...res, published: newPublished }, currentUser?.uid);
          showAlert(`Resource "${res.title}" is now ${newPublished ? 'Published' : 'Draft'}.`);
          resourcesList = await fetchAdminResources();
          renderResourcesCatalog();
        } catch (err) {
          showAlert(err.message, 'danger');
        }
      });
    });

    document.querySelectorAll('.ar-delete-resource-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        const res = resourcesList.find(r => r.slug === slug);
        if (!res) return;
        openDeleteResourceModal(res);
      });
    });
  };

  // ── Resource Editor Modal (Sections A–F) ────────────────────────────────────
  const openResourceEditorModal = (res) => {
    if (!modalSlot) return;
    const isEdit = Boolean(res && res.slug);
    const existingCategories = ['Notion', 'Finance Tools', ...new Set(resourcesList.map(r => r.category).filter(Boolean))];

    // Cloned dynamic arrays
    let downloadableFiles = isEdit && Array.isArray(res.downloadableFiles) ? [...res.downloadableFiles] : [];
    let screenshots = isEdit && Array.isArray(res.screenshots) ? [...res.screenshots] : [];
    let whatYouLearn = isEdit && Array.isArray(res.whatYouLearn) ? [...res.whatYouLearn] : [];
    let whatsIncluded = isEdit && Array.isArray(res.whatsIncluded) ? [...res.whatsIncluded] : [];

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;overflow-y:auto;">
        <div class="ae-modal-card" style="background:var(--color-surface, #fff);border-radius:var(--radius-xl, 20px);border:1px solid var(--color-border);width:100%;max-width:840px;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:modalIn 0.25s ease;">
          
          <!-- Modal Header -->
          <div style="padding:20px 24px;border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;">
            <div>
              <h2 style="font-size:20px;font-weight:700;color:var(--color-heading);margin:0;">
                ${isEdit ? `Edit Resource: ${res.title}` : 'Add New Resource'}
              </h2>
              <p style="font-size:13px;color:var(--color-text-secondary);margin:4px 0 0;">All fields are optional. Missing details automatically adapt on the public page without breaking.</p>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" id="ar-modal-close-btn" style="padding:8px;font-size:18px;">${AR_ICONS.x}</button>
          </div>

          <!-- Modal Scrollable Body -->
          <div style="padding:24px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:24px;">

            <!-- SECTION A: Basic Information -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">A</span>
                Basic Information
              </h3>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Resource Title *</label>
                  <input type="text" id="ar-form-title" class="form-control" value="${res?.title || ''}" placeholder="e.g. Notion Real Estate Tracker" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Resource Slug *</label>
                  <input type="text" id="ar-form-slug" class="form-control" value="${res?.slug || ''}" placeholder="e.g. notion-real-estate-tracker" ${isEdit ? 'readonly style="background:var(--color-surface-sunken);"' : ''} style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;font-family:monospace;" />
                </div>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Category</label>
                  <select id="ar-form-category" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;">
                    ${existingCategories.map(c => `
                      <option value="${c}" ${res?.category === c ? 'selected' : ''}>${c}</option>
                    `).join('')}
                    <option value="__NEW__">+ Add New Category...</option>
                  </select>
                  <input type="text" id="ar-form-new-category" placeholder="Enter new category name" style="display:none;width:100%;margin-top:8px;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Price (NPR)</label>
                  <input type="number" id="ar-form-price" min="0" step="1" value="${res?.price !== undefined ? res.price : 299}" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Original Price (NPR)</label>
                  <input type="number" id="ar-form-original-price" min="0" step="1" value="${res?.originalPrice || ''}" placeholder="Optional (for % off badge)" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
              </div>

              <div style="margin-bottom:16px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Short Description</label>
                <input type="text" id="ar-form-short-desc" value="${res?.shortDescription || ''}" placeholder="1-2 sentences summarizing the resource" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
              </div>

              <div style="margin-bottom:16px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Full Detailed Description</label>
                <textarea id="ar-form-full-desc" rows="4" placeholder="Detailed paragraphs explaining what the resource accomplishes..." style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;resize:vertical;">${res?.fullDescription || ''}</textarea>
              </div>

              <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" id="ar-form-published" ${res?.published !== false ? 'checked' : ''} style="width:18px;height:18px;" />
                <label for="ar-form-published" style="font-size:14px;font-weight:600;color:var(--color-heading);cursor:pointer;">Published (visible on public website)</label>
              </div>
            </div>

            <!-- SECTION B: Media & Screenshots -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">B</span>
                Media &amp; Screenshots
              </h3>
              
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Main Thumbnail Image</label>
                  <div style="display:flex;gap:8px;align-items:center;">
                    <input type="text" id="ar-form-thumbnail" value="${res?.thumbnail || ''}" placeholder="Image URL or upload below" style="flex:1;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                    <label class="btn btn-secondary btn-sm" style="cursor:pointer;white-space:nowrap;padding:10px 14px;margin:0;">
                      ${AR_ICONS.upload} Upload
                      <input type="file" id="ar-upload-thumb-input" accept="image/*" style="display:none;" />
                    </label>
                  </div>
                  <div id="ar-thumb-preview" style="margin-top:8px;">
                    ${res?.thumbnail ? `<img src="${res.thumbnail}" style="max-height:80px;border-radius:8px;border:1px solid var(--color-border);" />` : ''}
                  </div>
                </div>

                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Promotional Video (YouTube URL)</label>
                  <input type="text" id="ar-form-video-url" value="${res?.previewVideoUrl || ''}" placeholder="https://www.youtube.com/watch?v=..." style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                  <span style="font-size:11px;color:var(--color-text-secondary);margin-top:4px;display:block;">If no video is provided, the video section will be hidden cleanly.</span>
                </div>
              </div>

              <div>
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Additional Interface Screenshots</label>
                <div id="ar-screenshots-container" style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
                  ${screenshots.map((s, idx) => `
                    <div class="ar-screenshot-row" style="display:flex;gap:8px;align-items:center;">
                      <input type="text" class="ar-screenshot-url" value="${s}" placeholder="Screenshot image URL" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                      <button type="button" class="btn btn-ghost btn-sm ar-remove-screenshot-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
                    </div>
                  `).join('')}
                </div>
                <button type="button" class="btn btn-secondary btn-sm" id="ar-add-screenshot-btn" style="border-radius:var(--radius-md, 8px);">
                  ${AR_ICONS.plus} Add Screenshot
                </button>
              </div>
            </div>

            <!-- SECTION C: Creator & Metadata -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">C</span>
                Creator &amp; Metadata
              </h3>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Creator / Instructor</label>
                  <input type="text" id="ar-form-creator" value="${res?.creator || 'Aakash Das'}" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Setup Time</label>
                  <input type="text" id="ar-form-setup-time" value="${res?.setupTime || ''}" placeholder="e.g. 15-min initial setup" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Number of Modules</label>
                  <input type="number" id="ar-form-modules-count" min="1" value="${res?.modulesCount || ''}" placeholder="e.g. 8" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
              </div>
              <div>
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Target Audience</label>
                <input type="text" id="ar-form-target-audience" value="${res?.targetAudience || ''}" placeholder="e.g. Salaried professionals, students, freelancers in Nepal" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
              </div>
            </div>

            <!-- SECTION D: Features & Included Items -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">D</span>
                Features &amp; Included Items
              </h3>
              
              <div style="margin-bottom:16px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">What's Included (Package Modules)</label>
                <div id="ar-whats-included-container" style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
                  ${whatsIncluded.map(item => `
                    <div class="ar-list-row" style="display:flex;gap:8px;align-items:center;">
                      <input type="text" class="ar-whats-included-item" value="${item}" placeholder="e.g. Multi-Account Balance Ledger" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                      <button type="button" class="btn btn-ghost btn-sm ar-remove-list-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
                    </div>
                  `).join('')}
                </div>
                <button type="button" class="btn btn-secondary btn-sm" id="ar-add-whats-included-btn" style="border-radius:var(--radius-md, 8px);">
                  ${AR_ICONS.plus} Add Included Item
                </button>
              </div>

              <div>
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">What You'll Learn (Core Outcomes)</label>
                <div id="ar-what-you-learn-container" style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px;">
                  ${whatYouLearn.map(item => `
                    <div class="ar-list-row" style="display:flex;gap:8px;align-items:center;">
                      <input type="text" class="ar-what-you-learn-item" value="${item}" placeholder="e.g. Centralize multi-channel income" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
                      <button type="button" class="btn btn-ghost btn-sm ar-remove-list-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
                    </div>
                  `).join('')}
                </div>
                <button type="button" class="btn btn-secondary btn-sm" id="ar-add-what-you-learn-btn" style="border-radius:var(--radius-md, 8px);">
                  ${AR_ICONS.plus} Add Learning Outcome
                </button>
              </div>
            </div>

            <!-- SECTION E: Downloads & Notion Links -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">E</span>
                Downloadable Files &amp; Notion Links
              </h3>

              <div style="display:grid;grid-template-columns:1fr 2fr;gap:16px;margin-bottom:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Access Type</label>
                  <select id="ar-form-access-type" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;">
                    <option value="paid" ${res?.accessType === 'paid' ? 'selected' : ''}>Paid (Requires Access Code)</option>
                    <option value="free" ${res?.accessType === 'free' ? 'selected' : ''}>Free (Direct Download)</option>
                  </select>
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Notion Template Private Duplicate Link</label>
                  <input type="url" id="ar-form-notion-url" value="${res?.notionTemplateUrl || ''}" placeholder="https://notion.so/..." style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
              </div>

              <div>
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Downloadable Files (PDF, Excel, Sheets, ZIP)</label>
                <div id="ar-files-container" style="display:flex;flex-direction:column;gap:10px;margin-bottom:12px;">
                  ${downloadableFiles.map((file, idx) => `
                    <div class="ar-file-row" style="display:grid;grid-template-columns:2fr 3fr 1fr auto;gap:8px;align-items:center;background:var(--color-surface-sunken);padding:10px;border-radius:var(--radius-md, 8px);">
                      <input type="text" class="ar-file-title" value="${file.title || ''}" placeholder="File Label (e.g. Master XLSX)" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
                      <input type="text" class="ar-file-url" value="${file.url || ''}" placeholder="File Download URL" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
                      <input type="text" class="ar-file-size" value="${file.size || ''}" placeholder="Size (2.4 MB)" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
                      <button type="button" class="btn btn-ghost btn-sm ar-remove-file-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
                    </div>
                  `).join('')}
                </div>
                
                <div style="display:flex;gap:10px;align-items:center;">
                  <button type="button" class="btn btn-secondary btn-sm" id="ar-add-file-btn" style="border-radius:var(--radius-md, 8px);">
                    ${AR_ICONS.plus} Add Downloadable File
                  </button>
                  <label class="btn btn-ghost btn-sm" style="cursor:pointer;display:inline-flex;align-items:center;gap:6px;margin:0;">
                    ${AR_ICONS.upload} Upload Physical File (≤ 50MB)
                    <input type="file" id="ar-upload-download-file" style="display:none;" />
                  </label>
                  <span id="ar-upload-file-status" style="font-size:12px;color:var(--color-text-secondary);"></span>
                </div>
              </div>
            </div>

            <!-- SECTION F: Direct WhatsApp & Support Links -->
            <div class="ar-section-block" style="border:1px solid var(--color-border);border-radius:var(--radius-lg, 14px);padding:20px;background:var(--color-surface);">
              <h3 style="font-size:16px;font-weight:700;color:var(--color-heading);margin-bottom:14px;display:flex;align-items:center;gap:8px;">
                <span style="width:24px;height:24px;border-radius:50%;background:var(--color-primary);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;">F</span>
                Direct WhatsApp &amp; Support Links
              </h3>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Custom WhatsApp Purchase Link</label>
                  <input type="url" id="ar-form-whatsapp-url" value="${res?.whatsappUrl || ''}" placeholder="Leave empty for auto-generated link" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
                <div>
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Custom Support / Question Link</label>
                  <input type="url" id="ar-form-contact-url" value="${res?.contactUrl || ''}" placeholder="Leave empty for default WhatsApp inquiry" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
                </div>
              </div>
            </div>

          </div>

          <!-- Modal Footer -->
          <div style="padding:16px 24px;border-top:1px solid var(--color-border);display:flex;align-items:center;justify-content:flex-end;gap:12px;background:var(--color-surface-sunken);">
            <button type="button" class="btn btn-ghost" id="ar-modal-cancel-btn">Cancel</button>
            <button type="button" class="btn btn-primary" id="ar-modal-save-btn" style="padding:10px 24px;">
              ${isEdit ? 'Save Changes' : 'Create Resource'}
            </button>
          </div>

        </div>
      </div>
    `;

    // Modal internal bindings
    const closeBtn = document.getElementById('ar-modal-close-btn');
    const cancelBtn = document.getElementById('ar-modal-cancel-btn');
    const saveBtn = document.getElementById('ar-modal-save-btn');
    const titleInput = document.getElementById('ar-form-title');
    const slugInput = document.getElementById('ar-form-slug');
    const categorySelect = document.getElementById('ar-form-category');
    const newCategoryInput = document.getElementById('ar-form-new-category');

    closeBtn?.addEventListener('click', () => { modalSlot.innerHTML = ''; });
    cancelBtn?.addEventListener('click', () => { modalSlot.innerHTML = ''; });

    // Auto slugify if adding new
    if (!isEdit && titleInput && slugInput) {
      titleInput.addEventListener('input', () => {
        slugInput.value = titleInput.value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
      });
    }

    // Dynamic category selector
    categorySelect?.addEventListener('change', () => {
      if (categorySelect.value === '__NEW__') {
        newCategoryInput.style.display = 'block';
        newCategoryInput.focus();
      } else {
        newCategoryInput.style.display = 'none';
      }
    });

    // Upload thumbnail
    const thumbUploadInput = document.getElementById('ar-upload-thumb-input');
    thumbUploadInput?.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const targetSlug = slugInput.value.trim() || 'temp-resource';
      try {
        validateResourceImageFile(file);
        saveBtn.disabled = true;
        const result = await uploadResourceMedia(file, targetSlug, 'image');
        document.getElementById('ar-form-thumbnail').value = result.downloadUrl;
        document.getElementById('ar-thumb-preview').innerHTML = `<img src="${result.downloadUrl}" style="max-height:80px;border-radius:8px;border:1px solid var(--color-border);" />`;
        showAlert('Thumbnail uploaded successfully!');
      } catch (err) {
        showAlert(err.message, 'danger');
      } finally {
        saveBtn.disabled = false;
      }
    });

    // Upload download file
    const downloadUploadInput = document.getElementById('ar-upload-download-file');
    const uploadStatus = document.getElementById('ar-upload-file-status');
    downloadUploadInput?.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const targetSlug = slugInput.value.trim() || 'temp-resource';
      try {
        validateResourceDownloadFile(file);
        if (uploadStatus) uploadStatus.textContent = 'Uploading...';
        saveBtn.disabled = true;
        const result = await uploadResourceMedia(file, targetSlug, 'file');
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1) + ' MB';

        // Add to files list
        const filesContainer = document.getElementById('ar-files-container');
        const row = document.createElement('div');
        row.className = 'ar-file-row';
        row.style.cssText = 'display:grid;grid-template-columns:2fr 3fr 1fr auto;gap:8px;align-items:center;background:var(--color-surface-sunken);padding:10px;border-radius:var(--radius-md, 8px);';
        row.innerHTML = `
          <input type="text" class="ar-file-title" value="${file.name.replace(/\.[^/.]+$/, '')}" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
          <input type="text" class="ar-file-url" value="${result.downloadUrl}" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
          <input type="text" class="ar-file-size" value="${sizeMb}" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
          <button type="button" class="btn btn-ghost btn-sm ar-remove-file-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
        `;
        row.querySelector('.ar-remove-file-btn').addEventListener('click', () => row.remove());
        filesContainer.appendChild(row);

        if (uploadStatus) uploadStatus.textContent = '✓ File uploaded!';
      } catch (err) {
        if (uploadStatus) uploadStatus.textContent = '';
        showAlert(err.message, 'danger');
      } finally {
        saveBtn.disabled = false;
      }
    });

    // Add screenshot row
    document.getElementById('ar-add-screenshot-btn')?.addEventListener('click', () => {
      const container = document.getElementById('ar-screenshots-container');
      const row = document.createElement('div');
      row.className = 'ar-screenshot-row';
      row.style.cssText = 'display:flex;gap:8px;align-items:center;';
      row.innerHTML = `
        <input type="text" class="ar-screenshot-url" placeholder="Screenshot image URL" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
        <button type="button" class="btn btn-ghost btn-sm ar-remove-screenshot-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
      `;
      row.querySelector('.ar-remove-screenshot-btn').addEventListener('click', () => row.remove());
      container.appendChild(row);
    });

    // Add list items
    document.getElementById('ar-add-whats-included-btn')?.addEventListener('click', () => {
      const container = document.getElementById('ar-whats-included-container');
      const row = document.createElement('div');
      row.className = 'ar-list-row';
      row.style.cssText = 'display:flex;gap:8px;align-items:center;';
      row.innerHTML = `
        <input type="text" class="ar-whats-included-item" placeholder="Included item description" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
        <button type="button" class="btn btn-ghost btn-sm ar-remove-list-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
      `;
      row.querySelector('.ar-remove-list-btn').addEventListener('click', () => row.remove());
      container.appendChild(row);
    });

    document.getElementById('ar-add-what-you-learn-btn')?.addEventListener('click', () => {
      const container = document.getElementById('ar-what-you-learn-container');
      const row = document.createElement('div');
      row.className = 'ar-list-row';
      row.style.cssText = 'display:flex;gap:8px;align-items:center;';
      row.innerHTML = `
        <input type="text" class="ar-what-you-learn-item" placeholder="Learning outcome" style="flex:1;padding:8px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;" />
        <button type="button" class="btn btn-ghost btn-sm ar-remove-list-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
      `;
      row.querySelector('.ar-remove-list-btn').addEventListener('click', () => row.remove());
      container.appendChild(row);
    });

    // Add downloadable file row
    document.getElementById('ar-add-file-btn')?.addEventListener('click', () => {
      const container = document.getElementById('ar-files-container');
      const row = document.createElement('div');
      row.className = 'ar-file-row';
      row.style.cssText = 'display:grid;grid-template-columns:2fr 3fr 1fr auto;gap:8px;align-items:center;background:var(--color-surface-sunken);padding:10px;border-radius:var(--radius-md, 8px);';
      row.innerHTML = `
        <input type="text" class="ar-file-title" placeholder="File Label (e.g. Master XLSX)" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
        <input type="text" class="ar-file-url" placeholder="File Download URL" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
        <input type="text" class="ar-file-size" placeholder="Size (2.4 MB)" style="padding:6px 10px;border:1px solid var(--color-border);border-radius:6px;font-size:13px;" />
        <button type="button" class="btn btn-ghost btn-sm ar-remove-file-btn" style="color:var(--color-danger);padding:6px;">${AR_ICONS.trash}</button>
      `;
      row.querySelector('.ar-remove-file-btn').addEventListener('click', () => row.remove());
      container.appendChild(row);
    });

    // Wire existing remove buttons
    modalSlot.querySelectorAll('.ar-remove-screenshot-btn').forEach(b => b.addEventListener('click', (e) => e.target.closest('.ar-screenshot-row')?.remove()));
    modalSlot.querySelectorAll('.ar-remove-list-btn').forEach(b => b.addEventListener('click', (e) => e.target.closest('.ar-list-row')?.remove()));
    modalSlot.querySelectorAll('.ar-remove-file-btn').forEach(b => b.addEventListener('click', (e) => e.target.closest('.ar-file-row')?.remove()));

    // Save handler
    saveBtn?.addEventListener('click', async () => {
      const title = titleInput.value.trim();
      const slug = slugInput.value.trim();
      if (!title) {
        showAlert('Please enter a resource title.', 'danger');
        return;
      }
      if (!slug) {
        showAlert('Please enter a resource slug.', 'danger');
        return;
      }

      let category = categorySelect.value;
      if (category === '__NEW__') {
        category = newCategoryInput.value.trim() || 'Finance Tools';
      }

      const price = Number(document.getElementById('ar-form-price').value) || 0;
      const originalPriceVal = document.getElementById('ar-form-original-price').value.trim();
      const originalPrice = originalPriceVal ? Number(originalPriceVal) : null;
      const shortDescription = document.getElementById('ar-form-short-desc').value.trim();
      const fullDescription = document.getElementById('ar-form-full-desc').value.trim();
      const published = document.getElementById('ar-form-published').checked;
      const thumbnail = document.getElementById('ar-form-thumbnail').value.trim() || null;
      const previewVideoUrl = document.getElementById('ar-form-video-url').value.trim() || null;
      const creator = document.getElementById('ar-form-creator').value.trim() || 'Aakash Das';
      const setupTime = document.getElementById('ar-form-setup-time').value.trim() || null;
      const modulesCountVal = document.getElementById('ar-form-modules-count').value.trim();
      const modulesCount = modulesCountVal ? Number(modulesCountVal) : null;
      const targetAudience = document.getElementById('ar-form-target-audience').value.trim() || null;
      const accessType = document.getElementById('ar-form-access-type').value;
      const notionTemplateUrl = document.getElementById('ar-form-notion-url').value.trim() || null;
      const whatsappUrl = document.getElementById('ar-form-whatsapp-url').value.trim() || null;
      const contactUrl = document.getElementById('ar-form-contact-url').value.trim() || null;

      // Extract dynamic arrays
      const collectedScreenshots = Array.from(modalSlot.querySelectorAll('.ar-screenshot-url'))
        .map(i => i.value.trim())
        .filter(Boolean);

      const collectedWhatsIncluded = Array.from(modalSlot.querySelectorAll('.ar-whats-included-item'))
        .map(i => i.value.trim())
        .filter(Boolean);

      const collectedWhatYouLearn = Array.from(modalSlot.querySelectorAll('.ar-what-you-learn-item'))
        .map(i => i.value.trim())
        .filter(Boolean);

      const collectedFiles = [];
      modalSlot.querySelectorAll('.ar-file-row').forEach(row => {
        const fileTitle = row.querySelector('.ar-file-title')?.value.trim();
        const fileUrl = row.querySelector('.ar-file-url')?.value.trim();
        const fileSize = row.querySelector('.ar-file-size')?.value.trim();
        if (fileUrl) {
          collectedFiles.push({
            title: fileTitle || 'Downloadable File',
            url: fileUrl,
            size: fileSize || ''
          });
        }
      });

      const resourcePayload = {
        ...(res || {}),
        title,
        slug,
        category,
        price,
        originalPrice,
        shortDescription,
        fullDescription,
        published,
        thumbnail,
        previewVideoUrl,
        creator,
        setupTime,
        modulesCount,
        targetAudience,
        accessType,
        notionTemplateUrl,
        whatsappUrl,
        contactUrl,
        screenshots: collectedScreenshots,
        whatsIncluded: collectedWhatsIncluded,
        whatYouLearn: collectedWhatYouLearn,
        downloadableFiles: collectedFiles
      };

      saveBtn.disabled = true;
      saveBtn.textContent = 'Saving...';

      try {
        await saveAdminResource(resourcePayload, currentUser?.uid);
        showAlert(`Resource "${title}" saved successfully!`);
        modalSlot.innerHTML = '';
        resourcesList = await fetchAdminResources();
        renderResourcesCatalog();
      } catch (err) {
        showAlert(err.message, 'danger');
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = isEdit ? 'Save Changes' : 'Create Resource';
      }
    });
  };

  // ── Delete Resource Modal ──────────────────────────────────────────────────
  const openDeleteResourceModal = (res) => {
    if (!modalSlot) return;
    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;">
        <div class="ae-modal-card" style="background:var(--color-surface, #fff);border-radius:var(--radius-lg, 16px);border:1px solid var(--color-border);width:100%;max-width:440px;padding:24px;box-shadow:0 20px 40px rgba(0,0,0,0.2);">
          <h3 style="font-size:18px;font-weight:700;color:var(--color-heading);margin-bottom:8px;">Delete Resource?</h3>
          <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.5;margin-bottom:20px;">
            Are you sure you want to delete <strong>${res.title}</strong> (<code>${res.slug}</code>)? This action cannot be undone.
          </p>
          <div style="display:flex;justify-content:flex-end;gap:10px;">
            <button type="button" class="btn btn-ghost" id="ar-cancel-delete-btn">Cancel</button>
            <button type="button" class="btn btn-danger" id="ar-confirm-delete-btn" style="background:var(--color-danger, #ef4444);color:#fff;border-radius:8px;padding:8px 16px;">
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('ar-cancel-delete-btn')?.addEventListener('click', () => { modalSlot.innerHTML = ''; });
    document.getElementById('ar-confirm-delete-btn')?.addEventListener('click', async () => {
      try {
        await deleteAdminResource(res.slug, currentUser?.uid);
        showAlert(`Resource "${res.title}" deleted.`);
        modalSlot.innerHTML = '';
        resourcesList = await fetchAdminResources();
        renderResourcesCatalog();
      } catch (err) {
        showAlert(err.message, 'danger');
      }
    });
  };

  // ── 2. Access Code Manager View ─────────────────────────────────────────────
  const renderAccessCodesManager = () => {
    let filtered = accessCodesList.filter(code => {
      if (codeSearchQuery) {
        const q = codeSearchQuery.toLowerCase();
        const matchCode = (code.codeDisplay || '').toLowerCase().includes(q);
        const matchName = (code.codeName || '').toLowerCase().includes(q);
        const matchNote = (code.internalNote || '').toLowerCase().includes(q);
        if (!matchCode && !matchName && !matchNote) return false;
      }
      if (codeResourceFilter !== 'all' && code.resourceSlug !== codeResourceFilter) {
        return false;
      }
      if (codeTypeFilter !== 'all' && code.codeType !== codeTypeFilter) {
        return false;
      }
      if (codeStatusFilter !== 'all' && code.status !== codeStatusFilter) {
        return false;
      }
      return true;
    });

    // Counts
    const activeCount = accessCodesList.filter(c => c.status === CODE_STATUS.ACTIVE).length;
    const totalRedemptions = accessCodesList.reduce((acc, c) => acc + (Number(c.redemptionCount) || 0), 0);

    workspace.innerHTML = `
      <div class="ar-codes-container">
        <!-- Stats Strip -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:16px;margin-bottom:20px;">
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md, 12px);padding:16px;">
            <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;">Total Codes</div>
            <div style="font-size:24px;font-weight:700;color:var(--color-heading);margin-top:4px;">${accessCodesList.length}</div>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md, 12px);padding:16px;">
            <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;">Active Codes</div>
            <div style="font-size:24px;font-weight:700;color:#16a34a;margin-top:4px;">${activeCount}</div>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md, 12px);padding:16px;">
            <div style="font-size:12px;font-weight:600;color:var(--color-text-secondary);text-transform:uppercase;">Total Redemptions</div>
            <div style="font-size:24px;font-weight:700;color:var(--color-primary);margin-top:4px;">${totalRedemptions}</div>
          </div>
        </div>

        <!-- Filter Card -->
        <div class="ae-search-card" style="margin-bottom:20px;padding:16px 20px;">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:space-between;">
            <div style="flex:1;min-width:240px;">
              <input type="text" id="ar-code-search" placeholder="Search by masked code (RISE-XXXX-XXXX) or customer note..." value="${codeSearchQuery}" style="width:100%;padding:10px 14px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;background:var(--color-bg);color:var(--color-text);" />
            </div>
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
              <select id="ar-code-resource-filter" style="padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;background:var(--color-bg);color:var(--color-text);">
                <option value="all">All Resources</option>
                ${resourcesList.map(r => `
                  <option value="${r.slug}" ${codeResourceFilter === r.slug ? 'selected' : ''}>${r.title}</option>
                `).join('')}
              </select>
              <select id="ar-code-type-filter" style="padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;background:var(--color-bg);color:var(--color-text);">
                <option value="all" ${codeTypeFilter === 'all' ? 'selected' : ''}>All Code Types</option>
                <option value="single_use" ${codeTypeFilter === 'single_use' ? 'selected' : ''}>Single-Use</option>
                <option value="unlimited" ${codeTypeFilter === 'unlimited' ? 'selected' : ''}>Unlimited</option>
                <option value="per_user" ${codeTypeFilter === 'per_user' ? 'selected' : ''}>One Per User</option>
              </select>
              <select id="ar-code-status-filter" style="padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:13px;background:var(--color-bg);color:var(--color-text);">
                <option value="all" ${codeStatusFilter === 'all' ? 'selected' : ''}>All Statuses</option>
                <option value="active" ${codeStatusFilter === 'active' ? 'selected' : ''}>Active</option>
                <option value="inactive" ${codeStatusFilter === 'inactive' ? 'selected' : ''}>Inactive</option>
                <option value="exhausted" ${codeStatusFilter === 'exhausted' ? 'selected' : ''}>Exhausted</option>
                <option value="revoked" ${codeStatusFilter === 'revoked' ? 'selected' : ''}>Revoked</option>
              </select>
              <span style="font-size:13px;color:var(--color-text-secondary);font-weight:500;">
                ${filtered.length} ${filtered.length === 1 ? 'Code' : 'Codes'}
              </span>
            </div>
          </div>
        </div>

        <!-- Codes Table -->
        ${filtered.length > 0 ? `
          <div class="ar-table-wrap" style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg, 16px);overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;text-align:left;font-size:14px;">
                <thead>
                  <tr style="border-bottom:1px solid var(--color-border);background:var(--color-surface-sunken);">
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Access Code</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Resource</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Type</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Usage / Max</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Expiration</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;">Status</th>
                    <th style="padding:14px 16px;font-weight:600;color:var(--color-text-secondary);font-size:12px;text-transform:uppercase;text-align:right;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${filtered.map(code => {
                    const matchedRes = resourcesList.find(r => r.slug === code.resourceSlug);
                    const resTitle = matchedRes ? matchedRes.title : (code.resourceSlug || 'Universal');
                    const isSingle = code.codeType === 'single_use';
                    const isUnlimited = code.codeType === 'unlimited';
                    const isPerUser = code.codeType === 'per_user';

                    const typeBadge = isSingle
                      ? '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(59,130,246,0.1);color:#2563eb;">Single-Use</span>'
                      : (isUnlimited
                        ? '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(16,185,129,0.1);color:#059669;">Unlimited</span>'
                        : '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(139,92,246,0.1);color:#7c3aed;">One Per User</span>');

                    const statusBadge = code.status === CODE_STATUS.ACTIVE
                      ? '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(22,163,74,0.1);color:#16a34a;">Active</span>'
                      : (code.status === CODE_STATUS.EXHAUSTED
                        ? '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(234,179,8,0.1);color:#ca8a04;">Exhausted</span>'
                        : (code.status === CODE_STATUS.REVOKED
                          ? '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(239,68,68,0.1);color:#ef4444;">Revoked</span>'
                          : '<span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:rgba(100,116,139,0.1);color:#64748b;">Inactive</span>'));

                    const maxLabel = isUnlimited
                      ? '∞'
                      : (code.maxRedemptions ? code.maxRedemptions : (isSingle ? 1 : '—'));

                    const expiryLabel = code.expiresAt
                      ? new Date(code.expiresAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                      : 'No Expiry';

                    return `
                      <tr style="border-bottom:1px solid var(--color-border);">
                        <td style="padding:14px 16px;">
                          <div style="font-family:monospace;font-weight:700;color:var(--color-heading);font-size:14px;">
                            ${code.codeDisplay || 'RISE-****-****'}
                          </div>
                          ${code.codeName || code.internalNote ? `
                            <div style="font-size:12px;color:var(--color-text-secondary);margin-top:2px;">
                              ${code.codeName || ''} ${code.internalNote ? `· ${code.internalNote}` : ''}
                            </div>
                          ` : ''}
                        </td>
                        <td style="padding:14px 16px;">
                          <span style="font-weight:500;color:var(--color-heading);">${resTitle}</span>
                        </td>
                        <td style="padding:14px 16px;">
                          ${typeBadge}
                        </td>
                        <td style="padding:14px 16px;font-family:monospace;font-size:13px;">
                          ${code.redemptionCount || 0} / ${maxLabel}
                        </td>
                        <td style="padding:14px 16px;font-size:13px;color:var(--color-text-secondary);">
                          ${expiryLabel}
                        </td>
                        <td style="padding:14px 16px;">
                          ${statusBadge}
                        </td>
                        <td style="padding:14px 16px;text-align:right;">
                          <div style="display:inline-flex;gap:6px;align-items:center;">
                            <button type="button" class="btn btn-ghost btn-sm ar-code-history-btn" data-id="${code.id}" title="View Redemption History" style="padding:6px 10px;">
                              ${AR_ICONS.history}
                            </button>
                            <button type="button" class="btn btn-ghost btn-sm ar-code-toggle-btn" data-id="${code.id}" data-status="${code.status}" title="${code.status === CODE_STATUS.ACTIVE ? 'Deactivate' : 'Activate'}" style="padding:6px 10px;">
                              ${code.status === CODE_STATUS.ACTIVE ? AR_ICONS.lock : AR_ICONS.check}
                            </button>
                            ${code.status !== CODE_STATUS.REVOKED ? `
                              <button type="button" class="btn btn-ghost btn-sm ar-code-revoke-btn" data-id="${code.id}" title="Revoke Access Code" style="padding:6px 10px;color:var(--color-danger, #ef4444);">
                                ${AR_ICONS.x}
                              </button>
                            ` : ''}
                            <button type="button" class="btn btn-ghost btn-sm ar-code-delete-btn" data-id="${code.id}" title="Delete Code" style="padding:6px 10px;color:var(--color-danger, #ef4444);">
                              ${AR_ICONS.trash}
                            </button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : `
          <div style="text-align:center;padding:56px 20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg, 16px);">
            <div style="width:48px;height:48px;border-radius:50%;background:var(--color-surface-subtle);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;color:var(--color-text-muted);">
              ${AR_ICONS.key}
            </div>
            <h3 style="font-size:18px;font-weight:600;color:var(--color-heading);margin-bottom:6px;">No Access Codes Found</h3>
            <p style="font-size:14px;color:var(--color-text-secondary);max-width:400px;margin:0 auto 20px;">Generate single or bulk access codes to grant restricted resource downloads.</p>
            <button type="button" class="btn btn-primary btn-sm" id="ar-empty-gen-btn">
              ${AR_ICONS.key} Generate Access Code
            </button>
          </div>
        `}
      </div>
    `;

    // Filter bindings
    document.getElementById('ar-code-search')?.addEventListener('input', (e) => {
      codeSearchQuery = e.target.value.trim();
      renderAccessCodesManager();
    });
    document.getElementById('ar-code-resource-filter')?.addEventListener('change', (e) => {
      codeResourceFilter = e.target.value;
      renderAccessCodesManager();
    });
    document.getElementById('ar-code-type-filter')?.addEventListener('change', (e) => {
      codeTypeFilter = e.target.value;
      renderAccessCodesManager();
    });
    document.getElementById('ar-code-status-filter')?.addEventListener('change', (e) => {
      codeStatusFilter = e.target.value;
      renderAccessCodesManager();
    });

    document.getElementById('ar-empty-gen-btn')?.addEventListener('click', () => {
      openGenerateCodeModal();
    });

    // Wire actions
    document.querySelectorAll('.ar-code-history-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const code = accessCodesList.find(c => c.id === id);
        if (code) openRedemptionHistoryModal(code);
      });
    });

    document.querySelectorAll('.ar-code-toggle-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        const currentStatus = btn.getAttribute('data-status');
        const newStatus = currentStatus === CODE_STATUS.ACTIVE ? CODE_STATUS.INACTIVE : CODE_STATUS.ACTIVE;
        try {
          await updateAccessCodeStatus(currentUser?.uid, id, newStatus);
          showAlert(`Access code status updated to ${newStatus}.`);
          accessCodesList = await fetchAccessCodes();
          renderAccessCodesManager();
        } catch (err) {
          showAlert(err.message, 'danger');
        }
      });
    });

    document.querySelectorAll('.ar-code-revoke-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        try {
          await updateAccessCodeStatus(currentUser?.uid, id, CODE_STATUS.REVOKED);
          showAlert('Access code revoked.');
          accessCodesList = await fetchAccessCodes();
          renderAccessCodesManager();
        } catch (err) {
          showAlert(err.message, 'danger');
        }
      });
    });

    document.querySelectorAll('.ar-code-delete-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        if (!confirm('Are you sure you want to permanently delete this access code?')) return;
        try {
          await deleteAccessCode(currentUser?.uid, id);
          showAlert('Access code deleted.');
          accessCodesList = await fetchAccessCodes();
          renderAccessCodesManager();
        } catch (err) {
          showAlert(err.message, 'danger');
        }
      });
    });
  };

  // ── Generate Access Code Modal ──────────────────────────────────────────────
  const openGenerateCodeModal = () => {
    if (!modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;">
        <div class="ae-modal-card" style="background:var(--color-surface, #fff);border-radius:var(--radius-xl, 20px);border:1px solid var(--color-border);width:100%;max-width:540px;box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:modalIn 0.25s ease;">
          
          <div style="padding:20px 24px;border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;">
            <div>
              <h2 style="font-size:18px;font-weight:700;color:var(--color-heading);margin:0;">Generate Resource Access Code</h2>
              <p style="font-size:13px;color:var(--color-text-secondary);margin:4px 0 0;">Create single or bulk cryptographically secure codes.</p>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" id="ar-gen-modal-close-btn" style="padding:8px;font-size:18px;">${AR_ICONS.x}</button>
          </div>

          <div style="padding:24px;display:flex;flex-direction:column;gap:18px;">
            <!-- Mode Selection -->
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Generation Mode</label>
              <div style="display:flex;gap:10px;">
                <label style="flex:1;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);cursor:pointer;background:var(--color-surface-sunken);">
                  <input type="radio" name="ar-gen-mode" value="single" checked />
                  <span style="font-size:13px;font-weight:600;">Single Code</span>
                </label>
                <label style="flex:1;display:flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);cursor:pointer;background:var(--color-surface-sunken);">
                  <input type="radio" name="ar-gen-mode" value="bulk" />
                  <span style="font-size:13px;font-weight:600;">Bulk Batch (1–50)</span>
                </label>
              </div>
            </div>

            <div id="ar-bulk-count-wrap" style="display:none;">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Number of Codes to Generate (1 to 50)</label>
              <input type="number" id="ar-form-bulk-count" min="1" max="50" value="5" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
            </div>

            <!-- Target Resource -->
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Target Resource *</label>
              <select id="ar-form-target-resource" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;">
                ${resourcesList.map(r => `
                  <option value="${r.slug}">${r.title} (${r.category})</option>
                `).join('')}
              </select>
            </div>

            <!-- Code Type -->
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Code Type &amp; Usage Rules *</label>
              <select id="ar-form-code-type" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;">
                <option value="single_use">TYPE A — Single-Use Code (Exactly 1 redemption globally)</option>
                <option value="unlimited">TYPE B — Reusable Unlimited Code (No redemption limit)</option>
                <option value="per_user">TYPE C — One Redemption Per User (Multiple users, once per account)</option>
              </select>
            </div>

            <div id="ar-max-redemptions-wrap" style="display:none;">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Maximum Total Redemptions (Optional cap)</label>
              <input type="number" id="ar-form-max-redemptions" min="1" placeholder="Leave empty for unlimited" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
            </div>

            <!-- Custom Code input (single mode only) -->
            <div id="ar-custom-code-wrap">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Custom Code String (Optional)</label>
              <input type="text" id="ar-form-custom-code" placeholder="Leave empty to auto-generate (RISE-XXXX-XXXX)" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;font-family:monospace;text-transform:uppercase;" />
            </div>

            <!-- Expiration Date -->
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Expiration Date (Optional)</label>
              <input type="date" id="ar-form-expiry-date" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
            </div>

            <!-- Customer Note / Order Ref -->
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--color-heading);">Customer Reference / Internal Note (Optional)</label>
              <input type="text" id="ar-form-code-note" placeholder="e.g. Order #1042 - Bikash Gurung" style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-size:14px;" />
            </div>
          </div>

          <div style="padding:16px 24px;border-top:1px solid var(--color-border);display:flex;align-items:center;justify-content:flex-end;gap:12px;background:var(--color-surface-sunken);">
            <button type="button" class="btn btn-ghost" id="ar-gen-modal-cancel-btn">Cancel</button>
            <button type="button" class="btn btn-primary" id="ar-gen-modal-submit-btn" style="padding:10px 24px;">
              Generate Code(s)
            </button>
          </div>

        </div>
      </div>
    `;

    const closeBtn = document.getElementById('ar-gen-modal-close-btn');
    const cancelBtn = document.getElementById('ar-gen-modal-cancel-btn');
    const submitBtn = document.getElementById('ar-gen-modal-submit-btn');

    closeBtn?.addEventListener('click', () => { modalSlot.innerHTML = ''; });
    cancelBtn?.addEventListener('click', () => { modalSlot.innerHTML = ''; });

    const modeRadios = document.querySelectorAll('input[name="ar-gen-mode"]');
    const bulkCountWrap = document.getElementById('ar-bulk-count-wrap');
    const customCodeWrap = document.getElementById('ar-custom-code-wrap');
    const codeTypeSelect = document.getElementById('ar-form-code-type');
    const maxRedemptionsWrap = document.getElementById('ar-max-redemptions-wrap');

    modeRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const isBulk = radio.value === 'bulk';
        bulkCountWrap.style.display = isBulk ? 'block' : 'none';
        customCodeWrap.style.display = isBulk ? 'none' : 'block';
      });
    });

    codeTypeSelect?.addEventListener('change', () => {
      maxRedemptionsWrap.style.display = codeTypeSelect.value === 'per_user' ? 'block' : 'none';
    });

    submitBtn?.addEventListener('click', async () => {
      const isBulk = document.querySelector('input[name="ar-gen-mode"]:checked')?.value === 'bulk';
      const resourceSlug = document.getElementById('ar-form-target-resource').value;
      const codeType = document.getElementById('ar-form-code-type').value;
      const customCode = document.getElementById('ar-form-custom-code')?.value.trim();
      const expiryDate = document.getElementById('ar-form-expiry-date').value;
      const internalNote = document.getElementById('ar-form-code-note').value.trim();
      const maxRedemptionsVal = document.getElementById('ar-form-max-redemptions')?.value;
      const maxRedemptions = maxRedemptionsVal ? Number(maxRedemptionsVal) : null;

      const baseConfig = {
        resourceSlug,
        codeType,
        customCode: customCode || undefined,
        expiresAt: expiryDate ? new Date(expiryDate).toISOString() : null,
        internalNote,
        maxRedemptions
      };

      submitBtn.disabled = true;
      submitBtn.textContent = 'Generating...';

      try {
        if (isBulk) {
          const count = Number(document.getElementById('ar-form-bulk-count').value) || 5;
          const result = await createBulkAccessCodes(currentUser?.uid, baseConfig, count);
          accessCodesList = await fetchAccessCodes();
          openPlaintextSuccessModal(result.codes.map(c => c.plaintextCode));
        } else {
          const result = await createAccessCode(currentUser?.uid, baseConfig);
          accessCodesList = await fetchAccessCodes();
          openPlaintextSuccessModal([result.plaintextCode]);
        }
      } catch (err) {
        showAlert(err.message, 'danger');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Generate Code(s)';
      }
    });
  };

  // ── Plaintext Code Success Modal (Shown only once upon generation!) ─────────
  const openPlaintextSuccessModal = (plaintextCodes = []) => {
    if (!modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;">
        <div class="ae-modal-card" style="background:var(--color-surface, #fff);border-radius:var(--radius-xl, 20px);border:1px solid var(--color-border);width:100%;max-width:520px;box-shadow:0 24px 48px rgba(0,0,0,0.25);animation:modalIn 0.25s ease;">
          
          <div style="padding:24px 24px 16px;text-align:center;">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(22,163,74,0.1);color:#16a34a;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
              ${AR_ICONS.key}
            </div>
            <h2 style="font-size:20px;font-weight:700;color:var(--color-heading);margin:0 0 6px;">
              ${plaintextCodes.length === 1 ? 'Access Code Generated' : `${plaintextCodes.length} Access Codes Generated`}
            </h2>
            <p style="font-size:13px;color:var(--color-text-secondary);margin:0;line-height:1.5;">
              Please copy ${plaintextCodes.length === 1 ? 'this code' : 'these codes'} now. For cryptographic security, plaintext codes are displayed <strong>only once</strong> and cannot be viewed in plaintext again.
            </p>
          </div>

          <div style="padding:16px 24px;max-height:280px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;">
            ${plaintextCodes.map(code => `
              <div style="display:flex;align-items:center;justify-content:space-between;background:var(--color-surface-sunken);border:1px solid var(--color-border);border-radius:var(--radius-md, 10px);padding:12px 16px;">
                <span style="font-family:monospace;font-size:16px;font-weight:700;color:var(--color-heading);letter-spacing:1px;">${code}</span>
                <button type="button" class="btn btn-secondary btn-sm ar-copy-single-btn" data-code="${code}" style="padding:6px 12px;font-size:12px;display:inline-flex;align-items:center;gap:4px;">
                  ${AR_ICONS.copy} Copy
                </button>
              </div>
            `).join('')}
          </div>

          <div style="padding:16px 24px;border-top:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;background:var(--color-surface-sunken);">
            ${plaintextCodes.length > 1 ? `
              <button type="button" class="btn btn-secondary" id="ar-copy-all-btn">
                ${AR_ICONS.copy} Copy All (${plaintextCodes.length})
              </button>
            ` : '<div></div>'}
            <button type="button" class="btn btn-primary" id="ar-success-done-btn" style="padding:10px 24px;">
              Done &amp; Close
            </button>
          </div>

        </div>
      </div>
    `;

    modalSlot.querySelectorAll('.ar-copy-single-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const code = btn.getAttribute('data-code');
        await navigator.clipboard.writeText(code);
        btn.innerHTML = `${AR_ICONS.check} Copied!`;
        setTimeout(() => {
          btn.innerHTML = `${AR_ICONS.copy} Copy`;
        }, 2000);
      });
    });

    document.getElementById('ar-copy-all-btn')?.addEventListener('click', async (e) => {
      const text = plaintextCodes.join('\n');
      await navigator.clipboard.writeText(text);
      const btn = e.currentTarget;
      btn.innerHTML = `${AR_ICONS.check} All Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${AR_ICONS.copy} Copy All (${plaintextCodes.length})`;
      }, 2000);
    });

    document.getElementById('ar-success-done-btn')?.addEventListener('click', () => {
      modalSlot.innerHTML = '';
      renderAccessCodesManager();
    });
  };

  // ── Redemption History Modal ────────────────────────────────────────────────
  const openRedemptionHistoryModal = async (code) => {
    if (!modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px;">
        <div class="ae-modal-card" style="background:var(--color-surface, #fff);border-radius:var(--radius-xl, 20px);border:1px solid var(--color-border);width:100%;max-width:600px;box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:modalIn 0.25s ease;">
          
          <div style="padding:20px 24px;border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;">
            <div>
              <h2 style="font-size:18px;font-weight:700;color:var(--color-heading);margin:0;">Redemption History</h2>
              <p style="font-size:13px;color:var(--color-text-secondary);margin:4px 0 0;">Code: <code style="font-weight:700;">${code.codeDisplay || code.id}</code></p>
            </div>
            <button type="button" class="btn btn-ghost btn-sm" id="ar-hist-close-btn" style="padding:8px;font-size:18px;">${AR_ICONS.x}</button>
          </div>

          <div id="ar-hist-body" style="padding:24px;max-height:360px;overflow-y:auto;">
            <div style="text-align:center;padding:20px;">
              <div class="ac-spinner" style="margin:0 auto 10px;"></div>
              <p style="font-size:13px;color:var(--color-text-secondary);">Loading redemption audit logs...</p>
            </div>
          </div>

          <div style="padding:16px 24px;border-top:1px solid var(--color-border);display:flex;justify-content:flex-end;background:var(--color-surface-sunken);">
            <button type="button" class="btn btn-secondary" id="ar-hist-done-btn">Close</button>
          </div>

        </div>
      </div>
    `;

    document.getElementById('ar-hist-close-btn')?.addEventListener('click', () => { modalSlot.innerHTML = ''; });
    document.getElementById('ar-hist-done-btn')?.addEventListener('click', () => { modalSlot.innerHTML = ''; });

    const histBody = document.getElementById('ar-hist-body');

    try {
      const logs = await fetchRedemptionAuditLogs(currentUser?.uid, code.id);
      if (logs && logs.length > 0) {
        histBody.innerHTML = `
          <table style="width:100%;border-collapse:collapse;font-size:13px;text-align:left;">
            <thead>
              <tr style="border-bottom:1px solid var(--color-border);color:var(--color-text-secondary);">
                <th style="padding:8px 10px;font-weight:600;">Redeemed By</th>
                <th style="padding:8px 10px;font-weight:600;">Date &amp; Time</th>
                <th style="padding:8px 10px;font-weight:600;">Resource</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map(log => `
                <tr style="border-bottom:1px solid var(--color-border);">
                  <td style="padding:10px;font-family:monospace;font-size:12px;">
                    ${log.userUid ? log.userUid : (log.guestSessionToken ? `Guest (${log.guestSessionToken.slice(0, 10)}...)` : 'Guest')}
                  </td>
                  <td style="padding:10px;color:var(--color-text-secondary);">
                    ${new Date(log.redeemedAt).toLocaleString()}
                  </td>
                  <td style="padding:10px;font-weight:500;">
                    ${log.resourceSlug || code.resourceSlug || 'General'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      } else {
        histBody.innerHTML = `
          <div style="text-align:center;padding:36px 20px;color:var(--color-text-secondary);">
            <p style="font-size:14px;margin:0;">No redemptions recorded for this code yet.</p>
          </div>
        `;
      }
    } catch (err) {
      histBody.innerHTML = `
        <div style="text-align:center;padding:24px;color:var(--color-danger);">
          <p style="font-size:13px;">${err.message || 'Failed to load redemption history.'}</p>
        </div>
      `;
    }
  };

  // ── Authorization & Lifecycle Bootstrapper ──────────────────────────────────
  const bootstrapper = async (user) => {
    currentUser = user;
    if (!user) {
      workspace.innerHTML = `
        <div class="ac-auth-wall" style="text-align:center;padding:64px 20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-xl, 20px);max-width:480px;margin:40px auto;">
          <div style="width:52px;height:52px;border-radius:50%;background:rgba(239,68,68,0.1);color:#ef4444;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
            ${AR_ICONS.lock}
          </div>
          <h2 style="font-size:20px;font-weight:700;color:var(--color-heading);margin-bottom:8px;">Administrative Portal Protected</h2>
          <p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:24px;line-height:1.5;">Please sign in with authorized administrator credentials to manage resources and access codes.</p>
          <button type="button" class="btn btn-primary" id="ar-login-btn" style="border-radius:9999px;padding:10px 24px;">Sign In as Administrator</button>
        </div>
      `;
      document.getElementById('ar-login-btn')?.addEventListener('click', () => {
        openAuthModal && openAuthModal('signin');
      });
      return;
    }

    // Verify admin privileges
    try {
      const adminCheck = await checkIsAdminDetailed(user.uid, user.email);
      if (!adminCheck.isAdmin) {
        workspace.innerHTML = `
          <div class="ac-auth-wall" style="text-align:center;padding:64px 20px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-xl, 20px);max-width:480px;margin:40px auto;">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(239,68,68,0.1);color:#ef4444;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
              ${AR_ICONS.lock}
            </div>
            <h2 style="font-size:20px;font-weight:700;color:var(--color-heading);margin-bottom:8px;">Access Denied</h2>
            <p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:24px;line-height:1.5;">Account <strong>${user.email}</strong> is not configured as an administrator.</p>
            <button type="button" class="btn btn-secondary" id="ar-logout-btn" style="border-radius:9999px;padding:8px 20px;">Switch Account</button>
          </div>
        `;
        document.getElementById('ar-logout-btn')?.addEventListener('click', async () => {
          await logoutUser();
        });
        return;
      }
    } catch (_) {
      // In development or local sandbox, proceed with user
    }

    // Load initial data
    try {
      renderHeaderActions();
      workspace.innerHTML = `
        <div class="ac-loading-state" style="text-align:center;padding:60px 20px;">
          <div class="ac-spinner" style="margin:0 auto 12px;"></div>
          <p style="color:var(--color-text-secondary);font-size:14px;">Loading resources catalog &amp; access codes...</p>
        </div>
      `;
      const [resList, codes] = await Promise.all([
        fetchAdminResources(),
        fetchAccessCodes()
      ]);
      resourcesList = resList || [];
      accessCodesList = codes || [];
      renderActiveTab();
    } catch (err) {
      workspace.innerHTML = `
        <div style="text-align:center;padding:40px 20px;color:var(--color-danger);">
          <p>Failed to load admin data: ${err.message}</p>
        </div>
      `;
    }
  };

  waitForAuthReady().then(user => {
    bootstrapper(user);
    authUnsubscribe = subscribeToAuth(bootstrapper);
  });

  return () => {
    window.removeEventListener('keydown', handleEscapeKey);
    if (authUnsubscribe) authUnsubscribe();
  };
}
