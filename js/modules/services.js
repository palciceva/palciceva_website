/**
 * services.js — renders the three service "compartments" and wires
 * each card to open its detail modal. Language-aware: `initServices`
 * receives the active language's data and can be re-run on a switch.
 */

import { icons } from "./icons.js";
import { escapeHtml } from "./utils.js";

function renderCard(service, moreLabel) {
  return `
    <button class="service-card reveal" type="button"
            data-service="${escapeHtml(service.id)}"
            aria-haspopup="dialog">
      <span class="service-card__title">${escapeHtml(service.title)}</span>
      <span class="service-card__tagline">${escapeHtml(service.tagline)}</span>
      <span class="service-card__more">
        ${escapeHtml(moreLabel)} ${icons.arrow}
      </span>
    </button>`;
}

/**
 * @param {HTMLElement} container - grid element to fill
 * @param {{open: (service:object, labels:object)=>void}} modal
 * @param {object} data - the active language's content (`content[lang]`)
 */
export function initServices(container, modal, data) {
  if (!container) return;
  const { services, ui } = data;

  container.innerHTML = services
    .map((service) => renderCard(service, ui.services.more))
    .join("");

  // onclick (not addEventListener) so re-running on a language switch
  // never stacks duplicate handlers.
  container.onclick = (event) => {
    const card = event.target.closest("[data-service]");
    if (!card) return;
    const service = services.find((s) => s.id === card.dataset.service);
    if (service) {
      modal.open(service, {
        experience: ui.services.experienceLabel,
        skills: ui.services.skillsLabel,
        close: ui.services.closeLabel,
      });
    }
  };
}
