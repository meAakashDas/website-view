import { getResources } from '../data/resources.js';
import { renderResourceCard, setPageMeta } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderResourcesPage(customList = null) {
  setPageMeta(
    'Financial Systems & Tools',
    'Explore premium financial systems, Notion operating dashboards, and budgeting frameworks designed for Nepal.',
    ROUTES.RESOURCES
  );

  const RESOURCES = Array.isArray(customList) ? customList : getResources();
  const categories = ['All', ...new Set(RESOURCES.map(r => r.category))];

  return `
    <div class="page-header" id="resources-header">
      <div class="container">
        <span class="section-eyebrow">Tools & Systems</span>
        <h1>Financial Systems</h1>
        <p>Premium templates, operating dashboards, and automated frameworks designed for financial growth in Nepal.</p>
      </div>
    </div>

    <!-- Premium Resources Section -->
    <section class="section" id="resources-listing" style="padding-top: clamp(36px, 5vw, 56px); padding-bottom: clamp(56px, 8vw, 100px);">
      <div class="container">
        ${categories.length > 2 ? `
        <div class="filter-tabs-wrapper" style="justify-content: center; margin-bottom: 36px;">
          <div class="filter-tabs" id="resource-filters">
            ${categories.map((cat, i) => `
              <button class="filter-tab ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${RESOURCES.length > 0 ? `
        <div class="grid-2" id="resources-grid" style="max-width: 880px; margin: 0 auto; gap: clamp(24px, 3.5vw, 36px);">
          ${RESOURCES.map(r => renderResourceCard(r)).join('')}
        </div>
        ` : `
        <div class="resources-empty-state" style="text-align: center; max-width: 480px; margin: 40px auto; padding: 56px 24px; background: var(--liquid-glass-sheet-bg); border: 1px solid var(--liquid-glass-sheet-border); border-radius: var(--radius-xl, 20px);">
          <div style="width: 52px; height: 52px; margin: 0 auto 16px; border-radius: 50%; background: var(--color-surface-subtle); display: flex; align-items: center; justify-content: center; color: var(--color-text-muted);">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          </div>
          <h3 style="font-size: 19px; font-weight: 600; margin-bottom: 8px; color: var(--color-heading);">No Resources Currently Available</h3>
          <p style="font-size: 14px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 24px;">New financial operating frameworks and Notion systems are in development.</p>
          <a href="/learn" class="btn btn-primary btn-sm" style="border-radius: 9999px;">Visit Learn Academy</a>
        </div>
        `}
      </div>
    </section>
  `;
}

export function initResourcesPage() {
  const RESOURCES = getResources();
  const filters = document.querySelectorAll('#resource-filters .filter-tab');
  const grid = document.getElementById('resources-grid');

  if (!filters || filters.length === 0 || !grid) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

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
}
