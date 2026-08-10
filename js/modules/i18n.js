/**
 * i18n.js — language state and applying a language across the page.
 *
 * Static text carries `data-i18n` / `data-i18n-html` / `data-i18n-aria`
 * attributes whose values are dotted paths into the ui dictionary.
 * Dynamic sections are re-rendered from the active language's data.
 */

import { content, LANGS, DEFAULT_LANG } from "../data/content.js";
import { initServices } from "./services.js";
import { initProjects } from "./projects.js";
import { initEducation } from "./education.js";
import { updateGalleryText } from "./gallery.js";

// Versioned key: bumping it drops any stale saved choice so returning
// visitors get fresh device-language detection.
const STORAGE_KEY = "eva-lang-v2";

/**
 * Pick the starting language:
 *   1. the visitor's saved choice, else
 *   2. the device/browser language, if we support it, else
 *   3. the default (English).
 */
export function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (LANGS.includes(saved)) return saved;

  const prefs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
  for (const pref of prefs) {
    const code = pref.slice(0, 2).toLowerCase();
    if (LANGS.includes(code)) return code;
  }
  return DEFAULT_LANG;
}

/** Resolve a dotted path ("a.b.c") against an object. */
function resolve(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/** Apply all static [data-i18n*] text from the ui dictionary. */
function applyStatic(ui) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = resolve(ui, el.getAttribute("data-i18n"));
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = resolve(ui, el.getAttribute("data-i18n-html"));
    if (typeof v === "string") el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = resolve(ui, el.getAttribute("data-i18n-aria"));
    if (typeof v === "string") el.setAttribute("aria-label", v);
  });
}

/**
 * Apply a language everywhere and persist the choice.
 * @param {string} lang
 * @param {{open:Function}} modal
 * @param {{immediate?:boolean}} opts - on a switch, reveal freshly
 *   rendered content at once (it isn't watched by the scroll observer).
 */
export function applyLanguage(lang, modal, { immediate = false } = {}) {
  const data = content[lang];
  const { ui } = data;

  document.documentElement.lang = lang;
  document.title = ui.docTitle;

  applyStatic(ui);

  initServices(document.getElementById("services-grid"), modal, data);
  initProjects(document.getElementById("projects-grid"), data);
  initEducation(
    document.getElementById("education-list"),
    document.getElementById("courses-list"),
    data
  );
  updateGalleryText(data.gallery);

  // Mark the active language in the switch.
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    if (active) btn.setAttribute("aria-current", "true");
    else btn.removeAttribute("aria-current");
  });

  if (immediate) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
  }

  localStorage.setItem(STORAGE_KEY, lang);
}
