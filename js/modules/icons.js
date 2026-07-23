/**
 * icons.js — small library of inline SVG icons.
 *
 * Returned as strings so they can be dropped into innerHTML. Keeping
 * them here (rather than scattered through the markup) means one place
 * to tweak stroke weight or swap an icon. All use currentColor so the
 * CSS decides their colour.
 */

const svg = (paths, viewBox = "0 0 24 24") =>
  `<svg viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  chat: svg(
    `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`
  ),
  pen: svg(
    `<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>`
  ),
  globe: svg(
    `<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>`
  ),
  arrow: svg(`<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>`),
  mug: svg(
    `<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1.5" x2="6" y2="4"/><line x1="10" y1="1.5" x2="10" y2="4"/><line x1="14" y1="1.5" x2="14" y2="4"/>`
  ),
  book: svg(
    `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`
  ),
  close: svg(`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`),
  instagram: svg(
    `<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>`
  ),
  mail: svg(
    `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>`
  ),
  linkedin: svg(
    `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`
  ),
};
