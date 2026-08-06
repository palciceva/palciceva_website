/**
 * main.js — application entry point.
 *
 * Boots the site in the saved/default language and wires the language
 * toggle. The gallery is initialised once (its autoplay loop must not be
 * restarted); everything else is (re)rendered by applyLanguage().
 */

import { content } from "./data/content.js";
import { getLang, applyLanguage, otherLang } from "./modules/i18n.js";
import { createModal } from "./modules/modal.js";
import { initGallery } from "./modules/gallery.js";
import { initNavigation } from "./modules/navigation.js";
import { initFooter } from "./modules/footer.js";
import { initReveal } from "./modules/reveal.js";

function boot() {
  const modal = createModal();
  let lang = getLang();

  // Gallery renders once (its continuous auto-scroll must keep running).
  initGallery(content[lang].gallery);

  // Render static + dynamic content in the initial language.
  applyLanguage(lang, modal);

  initNavigation();
  initFooter();

  // Observe .reveal elements (including the freshly rendered cards) for
  // the scroll-in animation.
  initReveal();

  const toggle = document.querySelector("[data-lang-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      lang = otherLang(lang);
      applyLanguage(lang, modal, { immediate: true });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
