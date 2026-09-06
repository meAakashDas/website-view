// ==============================================
// risePaisa | Courses Catalog Page
// ==============================================
import { getCourses } from '../data/courses.js';
import { renderCourseCard, setPageMeta } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderCoursesPage() {
  setPageMeta('Courses', 'Browse our Nepal-focused finance courses, including personal finance and wealth management masterclasses, designed for Nepali youth.', ROUTES.COURSES);

  const COURSES = getCourses();
  const categories = ['All', ...new Set(COURSES.map(c => c.category))];

  return `
    <div class="page-header" id="courses-header">
      <div class="container">
        <h1>Our Courses</h1>
        <p>Practical financial education designed for Nepal. Learn at your own pace.</p>
      </div>
    </div>
    <section class="section" id="courses-listing">
      <div class="container">
        ${categories.length > 1 ? `
          <div class="filter-tabs" id="course-filters">
            ${categories.map((cat, i) => `
              <button class="filter-tab ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
            `).join('')}
          </div>
        ` : ''}
        <div class="grid-2" id="courses-grid" style="max-width:860px;margin:0 auto">
          ${COURSES.map(c => renderCourseCard(c)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initCoursesPage() {
  const COURSES = getCourses();
  const filters = document.querySelectorAll('#course-filters .filter-tab');
  const grid = document.getElementById('courses-grid');
  if (!grid) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.category;
      const filtered = cat === 'All' ? COURSES : COURSES.filter(c => c.category === cat);

      grid.innerHTML = filtered.map(c => renderCourseCard(c)).join('');
      // Re-animate
      grid.querySelectorAll('.card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.4s ease forwards ${i * 80}ms`;
      });
    });
  });
}
