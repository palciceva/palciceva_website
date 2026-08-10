/**
 * content.js — combines the per-language copy (content.es.js /
 * content.en.js) with the language-independent data (photo files,
 * contact links) and exposes it as `content[lang]`.
 *
 * To edit wording, change content.es.js / content.en.js.
 */

import es from "./content.es.js";
import en from "./content.en.js";
import it from "./content.it.js";
import sl from "./content.sl.js";

// Bump when photos are reordered/replaced so browsers fetch fresh files.
const GALLERY_VERSION = 2;

/** Build the gallery photo list for a language from its captions. */
function buildGallery(captions) {
  return captions.map((caption, i) => ({
    src: `assets/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg?v=${GALLERY_VERSION}`,
    caption,
    alt: caption,
  }));
}

export const content = {
  es: { ...es, gallery: buildGallery(es.galleryCaptions) },
  en: { ...en, gallery: buildGallery(en.galleryCaptions) },
  it: { ...it, gallery: buildGallery(it.galleryCaptions) },
  sl: { ...sl, gallery: buildGallery(sl.galleryCaptions) },
};

export const LANGS = ["es", "en", "it", "sl"];
// Fallback when the device language isn't one we support.
export const DEFAULT_LANG = "en";

/** Contact + social handles (language-independent). */
export const contact = {
  email: "palciceva9@gmail.com",
  instagramProject: "https://www.instagram.com/cafeconletras89.5/",
  instagramPersonal: "https://www.instagram.com/palciceva/",
  linkedin: "https://www.linkedin.com/in/evapalčič",
};
