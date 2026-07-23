/**
 * modal.js — controls the service-detail dialog.
 *
 * Responsibility: given a service object, render its detailed content
 * into the shared <dialog> and manage open/close. Uses the native
 * <dialog> element so accessibility (focus trap, Esc-to-close,
 * inert background) comes for free.
 */

import { icons } from "./icons.js";
import { escapeHtml, escapeWithEmphasis } from "./utils.js";

/**
 * Build the inner HTML for a service's detail view.
 * @param {object} service - one entry from data/content.js `services`
 */
function renderModalContent(service) {
  const experienceHtml = service.experience
    .map((item) => {
      // `desc` may be a single string or several paragraphs.
      const descHtml = (Array.isArray(item.desc) ? item.desc : [item.desc])
        .map((para) => `<p class="experience-item__desc">${escapeWithEmphasis(para)}</p>`)
        .join("");
      return `
      <article class="experience-item">
        <div class="experience-item__head">
          <h4 class="experience-item__role">${escapeHtml(item.role)}</h4>
          <span class="experience-item__date">${escapeHtml(item.date)}</span>
        </div>
        <p class="experience-item__org">${escapeHtml(item.org)}</p>
        ${descHtml}
      </article>`;
    })
    .join("");

  const skillsHtml = service.skills
    .map((skill) => `<li>${escapeHtml(skill)}</li>`)
    .join("");

  // `intro` is an array of paragraphs.
  const introHtml = service.intro
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  const title = service.modalTitle || service.title;

  return `
    <div class="modal__scroll">
      <header class="modal__header">
        <p class="modal__index">${escapeHtml(service.index)}</p>
        <h3 class="modal__title" id="modal-title">${escapeHtml(title)}</h3>
        <button class="modal__close" type="button" data-close aria-label="Cerrar">
          ${icons.close}
        </button>
      </header>
      <div class="modal__body">
        <div class="modal__intro">${introHtml}</div>

        <section class="modal-section">
          <p class="modal-section__label">Experiencia</p>
          ${experienceHtml}
        </section>

        <section class="modal-section">
          <p class="modal-section__label">Habilidades</p>
          <ul class="skill-list">${skillsHtml}</ul>
        </section>
      </div>
    </div>`;
}

export function createModal() {
  const dialog = document.getElementById("service-modal");
  let lastFocused = null;

  function open(service) {
    lastFocused = document.activeElement;
    dialog.innerHTML = renderModalContent(service);
    dialog.setAttribute("aria-labelledby", "modal-title");
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!dialog.open) return;
    dialog.close();
  }

  // Close on the × button (event delegation — content is re-rendered).
  dialog.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) close();
    // Click on the backdrop area (outside the dialog box) closes it.
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) close();
    }
  });

  // Restore scroll + focus when the dialog closes (Esc or programmatic).
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  });

  return { open, close };
}
