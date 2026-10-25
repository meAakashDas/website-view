// ==============================================
// risePaisa | Primary Courses Page
// Directly renders the Flagship Share Market Full Course (NEPSE) detailed landing page
// Eliminates the intermediate generic listing catalog for a frictionless one-click journey
// ==============================================
import { renderCourseDetailPage, initCourseDetailPage } from './courseDetail.js';

export function renderCoursesPage() {
  return renderCourseDetailPage('nepse-stock-market-basics');
}

export function initCoursesPage() {
  return initCourseDetailPage('nepse-stock-market-basics');
}
