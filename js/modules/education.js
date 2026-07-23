/**
 * education.js — renders the academic timeline and the list of
 * complementary courses from data/content.js.
 */

import { education, courses } from "../data/content.js";
import { escapeHtml } from "./utils.js";

function renderEduItem(item) {
  return `
    <article class="edu-item reveal">
      <h3 class="edu-item__degree">${escapeHtml(item.degree)}</h3>
      <p class="edu-item__org">${escapeHtml(item.org)}</p>
      <p class="edu-item__loc">${escapeHtml(item.location)} (${escapeHtml(item.date)})</p>
    </article>`;
}

function renderCourse(item) {
  return `
    <article class="course-item">
      <p class="course-item__date">${escapeHtml(item.date)}</p>
      <p class="course-item__title">${escapeHtml(item.title)}</p>
      <p class="course-item__org">${escapeHtml(item.org)}</p>
    </article>`;
}

/**
 * @param {HTMLElement} listEl    - timeline container for degrees
 * @param {HTMLElement} coursesEl - container for the courses list
 */
export function initEducation(listEl, coursesEl) {
  if (listEl) listEl.innerHTML = education.map(renderEduItem).join("");
  if (coursesEl) coursesEl.innerHTML = courses.map(renderCourse).join("");
}
