/**
 * navigation.js — header behaviour.
 *
 * Adds a hairline border / background to the sticky header once the
 * page is scrolled, and keeps in-page anchor links smooth. Kept tiny
 * and dependency-free.
 */

export function initNavigation() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
