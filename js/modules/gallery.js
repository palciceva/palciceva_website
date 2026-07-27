/**
 * gallery.js — renders the culture photo carousel and wires the
 * prev/next buttons to a smooth horizontal scroll. Uses native
 * scroll-snap (see css/components/gallery.css); the buttons just
 * nudge the scroll position.
 */

import { gallery } from "../data/content.js";
import { escapeHtml } from "./utils.js";

function renderItem(photo) {
  const caption = photo.caption
    ? `<figcaption class="gallery__caption">${escapeHtml(photo.caption)}</figcaption>`
    : "";
  return `
    <figure class="gallery__item">
      <span class="gallery__frame">
        <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}"
             loading="lazy" />
      </span>
      ${caption}
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

  initEdgeAutoScroll(viewport);
}

/**
 * Edge auto-scroll — while the mouse rests over the partly-hidden tile on
 * either side, the carousel glides that way on its own. Snap and smooth
 * scrolling are paused during the glide so the motion stays continuous;
 * they're restored (settling to the nearest tile) when the mouse leaves.
 * Mouse-only enhancement; skipped for reduced-motion users.
 */
function initEdgeAutoScroll(viewport) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const EDGE = 0.15; // hot-zone width, as a fraction of the viewport
  const SPEED = 8; // pixels per frame
  let dir = 0;
  let rafId = null;

  const tick = () => {
    if (dir === 0) {
      rafId = null;
      return;
    }
    viewport.scrollLeft += dir * SPEED;
    rafId = requestAnimationFrame(tick);
  };

  const setDir = (next) => {
    if (next === dir) return;
    dir = next;
    if (dir !== 0) {
      viewport.style.scrollSnapType = "none";
      viewport.style.scrollBehavior = "auto";
      if (rafId === null) rafId = requestAnimationFrame(tick);
    } else {
      viewport.style.scrollSnapType = "";
      viewport.style.scrollBehavior = "";
    }
  };

  viewport.addEventListener("mousemove", (event) => {
    const rect = viewport.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x > rect.width * (1 - EDGE)) setDir(1);
    else if (x < rect.width * EDGE) setDir(-1);
    else setDir(0);
  });
  viewport.addEventListener("mouseleave", () => setDir(0));
}
