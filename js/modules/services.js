/**
 * services.js — renders the three service "compartments" and wires
 * each card to open its detail modal.
 *
 * Data in  → data/content.js
 * Behaviour → modal.js (injected, so this module stays decoupled)
 */

import { services } from "../data/content.js";
import { icons } from "./icons.js";
import { escapeHtml } from "./utils.js";

function renderCard(service) {
  return `
    <button class="service-card reveal" type="button"
            data-service="${escapeHtml(service.id)}"
            aria-haspopup="dialog">
      <span class="service-card__title">${escapeHtml(service.title)}</span>
      <span class="service-card__tagline">${escapeHtml(service.tagline)}</span>
      <span class="service-card__more">
        Ver más ${icons.arrow}
      </span>
    </button>`;
}

/**
 * @param {HTMLElement} container - grid element to fill
 * @param {{open: (service:object)=>void}} modal - modal controller
 */
export function initServices(container, modal) {
  if (!container) return;

  container.innerHTML = services.map(renderCard).join("");

  // Event delegation: one listener for all cards.
  container.addEventListener("click", (event) => {
    const card = event.target.closest("[data-service]");
    if (!card) return;
    const service = services.find((s) => s.id === card.dataset.service);
    if (service) modal.open(service);
  });
}
