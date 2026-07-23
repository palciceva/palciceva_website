/**
 * gallery.js — renders the culture photo carousel and wires the
 * prev/next buttons to a smooth horizontal scroll. Uses native
 * scroll-snap (see css/components/gallery.css); the buttons just
 * nudge the scroll position.
 */

import { gallery } from "../data/content.js";
import { escapeHtml } from "./utils.js";

function renderItem(photo) {
  return `
    <figure class="gallery__item">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}"
           width="640" height="800" loading="lazy" />
    </figure>`;
}

export function initGallery() {
  const track = document.getElementById("gallery-track");
  if (!track) return;

  track.innerHTML = gallery.map(renderItem).join("");

  const viewport = track.parentElement;
  const prev = document.querySelector("[data-gallery-prev]");
  const next = document.querySelector("[data-gallery-next]");

  // Scroll by roughly one-and-a-bit tiles per click.
  const stepBy = (dir) => {
    const item = track.querySelector(".gallery__item");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
    const amount = item ? item.getBoundingClientRect().width + gap : 320;
    viewport.scrollBy({ left: dir * amount * 1.2, behavior: "smooth" });
  };

  if (prev) prev.addEventListener("click", () => stepBy(-1));
  if (next) next.addEventListener("click", () => stepBy(1));
}
