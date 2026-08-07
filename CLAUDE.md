# CLAUDE.md — Project memory for Eva Palčič's personal website

This file orients any future session working in this repository. Read it first.

---

## 1 · Purpose & direction

A **personal, professional website** for **Eva Palčič** — a Hispanist and
Italianist (linguist and literature specialist) launching her own business.

The site presents her **services** and **personal projects**:

- **Intro / About** — a short, personal first-person introduction.
- **Three service "compartments"** — the core of the site. Each is a card that
  opens a **detail modal** with more info (a personal note, experience, skills):
  1. **Clases** — Spanish & Italian language classes.
  2. **Corrección** — proofreading / text correction.
  3. **Traducción** — translation (ES / IT / SL / EN).
- **Educación** — academic timeline (degrees) + a "Formación complementaria"
  card with courses. Data-driven from `content.js` (`education`, `courses`).
- **Proyectos** — personal projects, e.g. **Café con letras**
  (Instagram: https://www.instagram.com/cafeconletras89.5/) and a future
  "Biblioteca virtual".
- **Contacto** — email + social links.

- **Cultura (gallery)** — a horizontal scroll-snap photo carousel between
  Educación and Contacto, with a centred uppercase sans title ("Vivir la
  cultura es entender el idioma"). Data-driven from `content.js` (`gallery`);
  the tiles in `assets/images/gallery/` are **placeholders** to be replaced
  with real ~4:5 photos. Not in the nav (yet).

Section order: Servicios → Proyectos → Educación → Cultura → Contacto.
Nav order: Servicios → Proyectos → Educación → Contacto.

Primary language of the site: **Spanish** (her brand and audience are
Spanish-speaking). Keep copy warm, personal, and professional.

Deployment target: **GitHub Pages** (repo `palciceva/palciceva_website`).

---

## 2 · Eva's style preferences (design north star)

- **Minimalist but elegant.** Lots of whitespace, calm rhythm, nothing loud.
- **Fonts (experiment):** Eva picked **Adrianna** (sans) and **Goldenbook**
  (serif) from a reference. Both are *commercial* fonts (not on Google Fonts),
  so the site currently uses close free stand-ins: **Cormorant Garamond** for
  the serif voice (Goldenbook) and **Jost** for the uppercase micro-labels /
  nav (Adrianna). If Eva provides the licensed Adrianna/Goldenbook files, embed
  them in `assets/fonts/` via `@font-face` and update `--font-serif` /
  `--font-sans` — no other change needed. Body weight is 500 (Cormorant renders
  light). She likes Garamond-style serifs generally.
- **Palette: sage / olive / cream / espresso** (Eva's chosen swatches).
  Defined as tokens in `css/base/variables.css` — change the whole skin there.
  Source swatches & their roles:
  1. **Espresso** `#332821` → `--color-text`, primary text (dark brown).
  2. **Cream** `#E9E1D2` → `--color-surface-alt` (the alternating section
     background); the page `--color-bg` is a lifted cream `#f2ece1`, cards
     `--color-surface` a near-white `#f8f4ec`.
  3. **Sage** `#868264` → `--color-accent`, the highlight tone: title accents
     (lenguas/letras/culturas), service icons, "Descubre mis servicios" hover.
     Its translucent form `--color-accent-glass` is used by all `.eyebrow`
     labels and the service-card borders/numbers/"Ver más".
  4. **Taupe** `#86755F` → `--color-text-muted`, secondary text.
  5. **Dark olive** `#5B563B` → `--color-accent-deep`, links / hover.
  White is fine for small details. Keep the soft background **change between
  sections** (Proyectos uses `--color-surface-alt`); Eva likes that alternation.
  NOTE: palette is still being tuned — she may keep iterating on colours.
  (A gold-accent + rotating-seal + script-signature experiment was tried and
  reverted — Eva did not like the gold. Avoid re-introducing gold unprompted.)
- **Modern, refined vibe.** Editorial feel, subtle motion (reveal-on-scroll),
  tactile hover states.

## 3 · Working preferences (IMPORTANT)

- **Never add Claude as a `Co-Authored-By` on git commits.** (Explicit request.)
- Keep the architecture **clean and modular** — one responsibility per file.
- **All binary assets live under `assets/`** (e.g. `assets/images/`). Never
  scatter images elsewhere.
- Source materials (`CV.pdf`, `Esbozo.docx`, original photo) live in the *parent*
  folder, intentionally **outside** the repo — they contain personal data (DOB,
  phone) and should not be committed publicly.

---

## 4 · Architecture

Plain **HTML + CSS + JS**, no build step (GitHub-Pages friendly). ES modules.

```
palciceva_website/
├── index.html              # semantic structure; content mounts into #ids
├── .nojekyll               # tell GitHub Pages to serve files as-is
├── assets/
│   └── images/             # portrait-large.jpg (1200w), portrait-small.jpg (700w)
├── css/
│   ├── main.css            # entry — @imports everything in cascade order
│   ├── base/               # variables (tokens), reset, typography, layout
│   └── components/         # buttons, header, hero, services, projects,
│                           #   modal, footer, reveal — one file per component
└── js/
    ├── main.js             # entry — wires modules to the DOM on boot
    ├── data/content.js     # SINGLE SOURCE OF TRUTH for all editable copy
    └── modules/            # icons, utils, services, projects, modal,
                            #   navigation, footer, reveal
```

**Four languages (ES / EN / IT / SL).** Spanish is default; a header switch
(ES · EN · IT · SL, active one underlined) changes language (saved to
`localStorage`, key `lang`). EN, IT & SL are translated from the Spanish
original — Eva is a native Slovenian speaker, so treat the SL copy as
draft-for-review.
- Copy lives in `js/data/content.{es,en,it,sl}.js` (mirror each other).
  `content.js` merges them into `content[lang]` + holds language-independent
  data (photo `src`s, contact links). `LANGS` lists the codes.
- To add a language: add `content.<xx>.js`, import + register it in
  `content.js` (add to `content` and `LANGS`), and add a
  `<button data-lang="<xx>">` to the switch in `index.html`.
- **Static** HTML text uses `data-i18n` / `data-i18n-html` / `data-i18n-aria`
  attributes = dotted paths into that language's `ui` dictionary.
- **Dynamic** sections re-render via `js/modules/i18n.js` `applyLanguage()`.
- **"Café con letras" stays in Spanish in both languages** (original name);
  institution names use English exonyms in EN.
- To add a translatable string: add the key to BOTH content files, then use it
  via `data-i18n` (static) or a render module (dynamic).

**Data-driven:** services/projects/education/gallery render from the active
language's data — edit copy in the two `content.*.js` files only. Each service:
`{ id, title, modalTitle?, icon, tagline, intro[], experience[], skills[] }`.

**Modal** is built on the native `<dialog>` element (`js/modules/modal.js`) so
accessibility (focus trap, Esc-to-close, backdrop) is handled by the platform.

**Reveal-on-scroll** (`js/modules/reveal.js`) adds `.is-visible` to `.reveal`
elements via IntersectionObserver; respects `prefers-reduced-motion`.

---

## 5 · Dev workflow

A Python `.venv` lives in the **parent** folder (`../.venv`). It has
`Pillow` (image optimization) and `playwright` (+ chromium) installed.

- **Serve locally:**
  `../.venv/bin/python -m http.server 8123 --directory .`  → http://localhost:8123
- **Optimize a new image:** use Pillow; output web sizes into `assets/images/`.
- **Visual check / screenshots:** drive the local server with Playwright
  (headless chromium). Note: `.reveal` content starts at `opacity:0`, so scroll
  the page before a full-page screenshot or the sections look empty.

## 6 · Deployment (GitHub Pages)

- All paths in `index.html` are **relative** (`css/…`, `js/…`, `assets/…`) so the
  site works under the project subpath `https://palciceva.github.io/palciceva_website/`.
- `.nojekyll` is present so Pages serves the folders untouched.
- Enable via repo **Settings → Pages → Deploy from branch → `main` / root**.

---

## 7 · Key facts about Eva (from CV, for copy)

- Slovenian. Master's in Spanish & Italian Language and Literature (Univ. of Ljubljana).
- Languages: Slovenian (native), **Spanish C2, Italian C1, English B2**, Catalan A1.
- Experience feeding the three services:
  - *Clases* → MANU Language Factory (online Spanish, Jan 2026–).
  - *Corrección* → Editorial Universidad de Sevilla (2024); Revista FIF "Capture Life" (2025).
  - *Traducción* → Escuela de idiomas Carlos V, Sevilla (2024).
- Creative: dance, singing, theatre, aesthetic content creation.
- Contact: palciceva9@gmail.com · Instagram @cafeconletras89.5 (project) / @palciceva (personal).
