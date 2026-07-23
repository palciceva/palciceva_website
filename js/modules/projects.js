/**
 * projects.js — renders the personal-projects cards from data.
 */

import { projects } from "../data/content.js";
import { icons } from "./icons.js";
import { escapeHtml } from "./utils.js";

function renderCard(project) {
  const footer = project.href
    ? `<a class="link-underline" href="${escapeHtml(project.href)}"
          target="_blank" rel="noopener noreferrer">
         ${escapeHtml(project.cta)} ${icons.arrow}
       </a>`
    : "";

  const icon = project.icon && icons[project.icon]
    ? `<span class="project-card__icon">${icons[project.icon]}</span>`
    : "";

  return `
    <article class="project-card reveal">
      <p class="project-card__kicker">${escapeHtml(project.kicker)}</p>
      <h3 class="project-card__title">${escapeHtml(project.title)}${icon}</h3>
      <p class="project-card__desc">${escapeHtml(project.desc)}</p>
      <div class="project-card__footer">
        <span class="project-card__tag">${escapeHtml(project.tag)}</span>
        ${footer}
      </div>
    </article>`;
}

export function initProjects(container) {
  if (!container) return;
  container.innerHTML = projects.map(renderCard).join("");
}
