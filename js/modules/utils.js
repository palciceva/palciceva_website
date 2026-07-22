/**
 * utils.js — tiny shared helpers with no side effects.
 */

/**
 * Escape a string for safe insertion into HTML. Content in this project
 * is authored by us, but escaping keeps the render functions robust and
 * makes the data layer safe to open up later.
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
