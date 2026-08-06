/**
 * gallery.js — the culture photo carousel.
 *
 * The strip drifts slowly and continuously on its own. Resting the mouse
 * near the right edge speeds it up; near the left edge it runs backwards.
 * The photo set is rendered twice so the motion loops seamlessly.
 * Autoplay is skipped for reduced-motion users (they can still scroll it
 * by hand — the viewport stays horizontally scrollable).
 */

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

/**
 * Update only the caption/alt text of the existing tiles — used on a
 * language switch, so the auto-scroll loop keeps running untouched.
 * @param {Array<{caption:string, alt:string}>} photos
 */
export function updateGalleryText(photos) {
  const track = document.getElementById("gallery-track");
  if (!track || !photos.length) return;
  const n = photos.length;
  track.querySelectorAll(".gallery__item").forEach((fig, i) => {
    const photo = photos[i % n];
    const cap = fig.querySelector(".gallery__caption");
    const img = fig.querySelector("img");
    if (cap && photo.caption) cap.textContent = photo.caption;
    if (img) img.alt = photo.alt;
  });
}

/**
 * @param {Array<{src, alt, caption}>} photos - active language's gallery
 */
export function initGallery(photos) {
  const track = document.getElementById("gallery-track");
  if (!track) return;

  // Render the set twice so the drift can wrap without a visible seam.
  track.innerHTML = photos.concat(photos).map(renderItem).join("");

  const viewport = track.parentElement;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const BASE = 0.5;    // constant slow drift (px/frame)
  const FAST = 7;      // mouse near the right edge
  const REVERSE = -5;  // mouse near the left edge
  const EDGE = 0.15;   // hot-zone width, as a fraction of the viewport

  let target = BASE;   // speed we're easing toward
  let speed = BASE;    // current speed
  let pos = 0;         // our own float scroll position (avoids sub-pixel stalls)
  let setWidth = 0;    // width of one photo set (wrap distance)

  const measure = () => {
    const n = photos.length;
    setWidth =
      track.children.length > n
        ? track.children[n].offsetLeft - track.children[0].offsetLeft
        : 0;
  };
  measure();
  window.addEventListener("resize", measure);

  const loop = () => {
    if (!setWidth) measure();
    speed += (target - speed) * 0.08; // ease toward the target speed
    pos += speed;
    if (setWidth > 0) {
      if (pos >= setWidth) pos -= setWidth;
      else if (pos < 0) pos += setWidth;
    }
    viewport.scrollLeft = pos;
    requestAnimationFrame(loop);
  };

  viewport.addEventListener("mousemove", (event) => {
    const rect = viewport.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x > rect.width * (1 - EDGE)) target = FAST;
    else if (x < rect.width * EDGE) target = REVERSE;
    else target = BASE;
  });
  viewport.addEventListener("mouseleave", () => {
    target = BASE;
  });

  requestAnimationFrame(loop);
}
