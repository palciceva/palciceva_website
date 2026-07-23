/**
 * main.js — application entry point.
 *
 * Orchestrates the independent modules. Each module owns one concern;
 * this file just wires them to the DOM in the right order:
 *   1. render dynamic content (services, projects)
 *   2. attach behaviour (modal, navigation)
 *   3. enable reveal-on-scroll last, once all .reveal nodes exist.
 */

import { initServices } from "./modules/services.js";
import { initEducation } from "./modules/education.js";
import { initGallery } from "./modules/gallery.js";
import { initProjects } from "./modules/projects.js";
import { createModal } from "./modules/modal.js";
import { initNavigation } from "./modules/navigation.js";
import { initFooter } from "./modules/footer.js";
import { initReveal } from "./modules/reveal.js";

function boot() {
  const modal = createModal();

  initServices(document.getElementById("services-grid"), modal);
  initEducation(
    document.getElementById("education-list"),
    document.getElementById("courses-list")
  );
  initGallery();
  initProjects(document.getElementById("projects-grid"));
  initNavigation();
  initFooter();

  // Must run after dynamic content is injected so its .reveal
  // elements are observed too.
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
