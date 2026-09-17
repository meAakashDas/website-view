import { getResources } from '../data/resources.js';
import { FREE_RESOURCES } from '../data/learn.js';
import { renderResourceCard, setPageMeta } from '../components.js';
import { ROUTES } from '../routes.js';
import { openResourcePreviewModal } from './learn.js';

export function renderResourcesPage() {
  setPageMeta('Resources', 'Browse premium templates, tools, and free educational systems for financial growth including Notion trackers, budget planners, and spreadsheets designed for Nepal.', ROUTES.RESOURCES);

  const RESOURCES = getResources();
  const categories = ['All', ...new Set(RESOURCES.map(r => r.category))];

  function renderFreeCard(res) {
    const isHtml = (res.downloadUrl || '').endsWith('.html');
    const filename = res.downloadFilename || '';
    const downloadAttr = isHtml ? '' : `download="${filename}"`;
    const targetAttr = isHtml ? 'target="_blank" rel="noopener noreferrer"' : '';
    const title = typeof res.title === 'object' ? res.title.en : res.title;
    const desc = typeof res.desc === 'object' ? res.desc.en : res.desc;
    const badge = typeof res.badge === 'object' ? res.badge.en : (res.formatBadge || res.type || 'Template');

    const highlights = Array.isArray(res.highlights) ? res.highlights : [];
    const highlightsHtml = highlights.length > 0 ? `
      <div class="learn-res-highlights" style="margin-bottom:14px;">
        ${highlights.map(h => `<span class="learn-res-highlight-chip">${typeof h === 'object' ? h.en : h}</span>`).join('')}
      </div>
    ` : '';

    return `
      <article class="resource-card free-download-card learn-resource-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:24px; background:var(--color-surface); border:1px solid var(--color-border); border-radius:18px;">
        <div>
          <div class="learn-resource-top" style="margin-bottom:12px;">
            <div class="learn-res-format-pill">
              <span class="badge" style="background:rgba(52, 199, 89, 0.15); color:#248A3D; font-weight:600; padding:3px 8px; border-radius:9999px; font-size:11px;">100% Free</span>
              <span style="font-size:11.5px; font-weight:600; color:var(--color-accent); margin-left:6px;">${badge}</span>
            </div>
            <span class="learn-resource-size">${res.fileSize || 'Instant File'}</span>
          </div>
          <h3 style="font-size:17px; font-weight:600; margin-bottom:8px; line-height:1.3; letter-spacing:-0.2px;">${title}</h3>
          <p style="font-size:13.5px; color:var(--color-text-secondary); line-height:1.5; margin-bottom:14px;">${desc}</p>
          ${highlightsHtml}
        </div>

        <div class="learn-resource-actions" style="margin-top:auto; padding-top:14px; border-top:1px solid var(--color-border-subtle); display:flex; gap:8px;">
          <button type="button" class="btn btn-outline btn-sm free-res-preview-btn" data-res-id="${res.id}" style="flex:1; justify-content:center; border-radius:9999px; font-size:12.5px;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Preview</span>
          </button>
          <a href="${res.downloadUrl}" class="btn btn-primary btn-sm free-res-download-btn" ${downloadAttr} ${targetAttr} data-resource-title="${title.replace(/"/g, '&quot;')}" style="flex:1; justify-content:center; border-radius:9999px; font-size:12.5px;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>${isHtml ? 'Open / Print' : 'Download'}</span>
          </a>
        </div>
      </article>
    `;
  }

  return `
    <div class="page-header" id="resources-header">
      <div class="container">
        <span class="section-eyebrow">Tools & Systems</span>
        <h1>Resources</h1>
        <p>Templates, tools, and systems for financial growth in Nepal.</p>
      </div>
    </div>

    <!-- Free Educational Downloads Section -->
    <section class="section" id="free-resources-section" style="padding-bottom: 20px;">
      <div class="container">
        <div class="section-header-row" style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:28px; flex-wrap:wrap; gap:16px;">
          <div>
            <span class="section-eyebrow" style="color:var(--color-accent); font-weight:600;">Free Community Tools</span>
            <h2 style="font-size:28px; font-weight:700; letter-spacing:-0.4px; margin-top:4px;">Free Educational Downloads</h2>
            <p style="color:var(--color-text-muted); font-size:15px; margin-top:4px;">Instant, ready-to-use templates, spreadsheets, and print-ready checklists.</p>
          </div>
          <a href="/learn" class="btn btn-outline btn-sm">Visit Learn Academy →</a>
        </div>
        <div class="grid-3" id="free-resources-grid">
          ${(FREE_RESOURCES || []).map(r => renderFreeCard(r)).join('')}
        </div>
      </div>
    </section>

    <!-- Premium Resources Section -->
    <section class="section" id="resources-listing">
      <div class="container">
        <div class="section-header-row" style="margin-bottom:28px;">
          <span class="section-eyebrow">Comprehensive Solutions</span>
          <h2 style="font-size:28px; font-weight:700; letter-spacing:-0.4px; margin-top:4px;">Premium Financial Systems</h2>
          <p style="color:var(--color-text-muted); font-size:15px; margin-top:4px;">Complete multi-year architectures built for structured financial planning.</p>
        </div>

        <div class="filter-tabs" id="resource-filters">
          ${categories.map((cat, i) => `
            <button class="filter-tab ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
          `).join('')}
        </div>
        <div class="grid-2" id="resources-grid" style="max-width:860px;margin:0 auto">
          ${RESOURCES.map(r => renderResourceCard(r)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initResourcesPage() {
  const RESOURCES = getResources();
  const filters = document.querySelectorAll('#resource-filters .filter-tab');
  const grid = document.getElementById('resources-grid');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;
      const filtered = cat === 'All' ? RESOURCES : RESOURCES.filter(r => r.category === cat);

      grid.innerHTML = filtered.map(r => renderResourceCard(r)).join('');
      // Re-animate
      grid.querySelectorAll('.card, .resource-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.4s ease forwards ${i * 80}ms`;
      });
    });
  });

  // Free downloads toast feedback
  document.querySelectorAll('.free-res-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-resource-title') || 'Educational Resource';
      showResourcePageToast(`📥 Download started: ${title}`);
    });
  });

  // Free resources quick preview modal
  document.querySelectorAll('.free-res-preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const resId = btn.getAttribute('data-res-id');
      if (resId) openResourcePreviewModal(resId, 'en');
    });
  });
}

function showResourcePageToast(message) {
  let toast = document.getElementById('rp-resource-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rp-resource-toast';
    toast.className = 'lesson-toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__resourceToastTimer);
  window.__resourceToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
