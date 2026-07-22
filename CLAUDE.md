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
- **Proyectos** — personal projects, e.g. **Café con letras**
  (Instagram: https://www.instagram.com/cafeconletras89.5/) and a future
  "Biblioteca virtual".
- **Contacto** — email + social links.

Primary language of the site: **Spanish** (her brand and audience are
Spanish-speaking). Keep copy warm, personal, and professional.

Deployment target: **GitHub Pages** (repo `palciceva/palciceva_website`).

---

## 2 · Eva's style preferences (design north star)

- **Minimalist but elegant.** Lots of whitespace, calm rhythm, nothing loud.
- **Font: Garamond.** We use **EB Garamond** (Google Fonts) as the serif voice,
  with `Inter` only for tiny uppercase micro-labels ("eyebrows").
- **Palette: neutral / nude / coffee.** Warm creams, espresso text, caramel
  accent. Defined as tokens in `css/base/variables.css` — change the whole skin
  from there.
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

**Data-driven:** the three services and the projects are rendered from
`js/data/content.js`. To edit text, add an experience entry, or add a service,
**change that file only** — the UI rebuilds itself. Each service object:
`{ id, index, title, icon, tagline, intro, experience[], skills[] }`.

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
