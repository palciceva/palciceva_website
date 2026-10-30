/**
 * gallery.js — the culture photo carousel.
 *
 * The strip drifts slowly and continuously on its own. Resting the mouse
 * near the right edge speeds it up; near the left edge it runs backwards.
 * On touch screens a swipe drags the strip, flings it with the swipe's
 * momentum, and the drift then carries on in the swiped direction.
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

  const BASE = 30;         // constant slow drift (px/s)
  const FAST = 420;        // mouse near the right edge
  const REVERSE = -300;    // mouse near the left edge
  const EDGE = 0.15;       // hot-zone width, as a fraction of the viewport
  const EASE = 200;        // ms for the speed to settle on a new target
  const GLIDE = 600;       // ms for a swipe's momentum to fade into the drift
  const MAX_FLING = 5000;  // cap on the release speed (px/s)

  let target = BASE;   // speed we're easing toward (px/s)
  let speed = BASE;    // current speed (px/s)
  let ease = EASE;     // current easing time — longer while a swipe glides
  let pos = 0;         // strip offset (px), a float for sub-pixel motion
  let setWidth = 0;    // width of one photo set (wrap distance)
  let dir = 1;         // drift direction: 1 forwards, -1 backwards (last swipe)
  let last = 0;        // timestamp of the previous frame

  let dragging = false; // a finger is dragging the strip
  let lastX = 0;        // finger x at the previous pointermove
  let dragDelta = 0;    // finger travel since the last frame (px)
  let dragTotal = 0;    // net travel of the current swipe (px)
  let samples = [];     // recent {t, x} finger positions, for the fling speed

  // The strip moves by transform (sub-pixel smooth, unlike scrollLeft) and
  // touch drags are handled here; vertical swipes still scroll the page
  // (see gallery.css).
  viewport.classList.add("is-swipeable");

  const measure = () => {
    const n = photos.length;
    setWidth =
      track.children.length > n
        ? track.children[n].offsetLeft - track.children[0].offsetLeft
        : 0;
  };
  measure();
  window.addEventListener("resize", measure);

  const loop = (now) => {
    const dt = Math.min(now - last, 50); // ms; clamped after a hidden tab
    last = now;
    if (!setWidth) measure();
    if (dragging) {
      pos += dragDelta; // the strip sticks to the finger
      dragDelta = 0;
    } else {
      speed += (target - speed) * (1 - Math.exp(-dt / ease));
      pos += (speed * dt) / 1000;
    }
    if (setWidth > 0) {
      if (pos >= setWidth) pos -= setWidth;
      else if (pos < 0) pos += setWidth;
    }
    track.style.transform = `translate3d(${-pos}px, 0, 0)`;
    requestAnimationFrame(loop);
  };

  // Finger speed (px/s) over the last ~100 ms of the swipe.
  const flingSpeed = (t) => {
    const recent = samples.filter((s) => t - s.t < 100);
    if (recent.length < 2) return 0;
    const first = recent[0];
    const end = recent[recent.length - 1];
    if (end.t === first.t) return 0;
    return ((first.x - end.x) / (end.t - first.t)) * 1000;
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") return;
    dragging = true;
    lastX = event.clientX;
    dragDelta = 0;
    dragTotal = 0;
    samples = [{ t: event.timeStamp, x: event.clientX }];
  });

  viewport.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") {
      if (!dragging) return;
      const dx = lastX - event.clientX; // finger left = strip forwards
      lastX = event.clientX;
      dragDelta += dx;
      dragTotal += dx;
      samples.push({ t: event.timeStamp, x: event.clientX });
      if (samples.length > 20) samples.shift();
      return;
    }
    // Edge hot zones are for a real mouse only — a tap would leave them stuck.
    const rect = viewport.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x > rect.width * (1 - EDGE)) target = FAST;
    else if (x < rect.width * EDGE) target = REVERSE;
    else target = dir * BASE;
    ease = EASE;
  });

  const release = (event) => {
    if (!dragging) return;
    dragging = false;
    const v = flingSpeed(event.timeStamp);
    speed = Math.max(-MAX_FLING, Math.min(MAX_FLING, v));
    if (Math.abs(v) > 100) dir = Math.sign(v);
    else if (Math.abs(dragTotal) > 10) dir = Math.sign(dragTotal); // not a tap
    target = dir * BASE; // the fling glides back into the swiped direction
    ease = GLIDE;
  };
  viewport.addEventListener("pointerup", release);
  viewport.addEventListener("pointercancel", release); // e.g. page scrolled

  viewport.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "mouse") return;
    target = dir * BASE;
    ease = EASE;
  });

  requestAnimationFrame(loop);
}
