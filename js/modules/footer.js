/**
 * footer.js — fills in the footer's social icons and the current year.
 *
 * The social links live in the HTML (real anchors, good for SEO and
 * no-JS fallback); this module just paints their icons and stamps the
 * year so the copyright never goes stale.
 */

import { icons } from "./icons.js";

export function initFooter() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.dataset.icon;
    if (icons[name]) el.innerHTML = icons[name];
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
