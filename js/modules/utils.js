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

/**
 * Escape a string, then turn a lightweight *emphasis* marker into <em>.
 * Escaping runs first, so only our own asterisk markers become markup —
 * any real HTML in the text stays inert. Use for copy that needs a word
 * or two in italics (e.g. a magazine title).
 * @param {string} value
 * @returns {string}
 */
export function escapeWithEmphasis(value) {
  return escapeHtml(value).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
