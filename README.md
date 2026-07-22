# Eva Palčič — Personal Website

Personal and professional website for **Eva Palčič**, Hispanist and Italianist.
It presents her services as a linguist — **language classes, proofreading and
translation** — along with her personal projects (e.g. *Café con letras*).

> Minimalist, elegant, editorial. EB Garamond type on a neutral coffee-and-nude
> palette.

## ✦ Sections

- **Intro** — a short, personal introduction.
- **Servicios** — three compartments (*Clases*, *Corrección*, *Traducción*);
  each opens a detail view with a personal note, experience and skills.
- **Proyectos** — personal projects.
- **Contacto** — email and social links.

## ✦ Tech

Plain **HTML + CSS + JavaScript** (ES modules) — no build step, so it deploys
straight to **GitHub Pages**.

```
├── index.html
├── assets/images/     # optimized portrait (responsive sizes)
├── css/               # base/ (design tokens, reset, type) + components/
└── js/                # data/content.js (all copy) + modules/
```

The site is **data-driven**: all editable text lives in
[`js/data/content.js`](js/data/content.js). Design tokens (colours, fonts,
spacing) live in [`css/base/variables.css`](css/base/variables.css).

## ✦ Run locally

```bash
# from the repo root
python3 -m http.server 8123
# open http://localhost:8123
```

## ✦ Deploy (GitHub Pages)

Repo **Settings → Pages → Deploy from branch → `main` / root**.
All asset paths are relative, so the site works under the project subpath.

---

See [`CLAUDE.md`](CLAUDE.md) for architecture notes and project direction.

© Eva Palčič. All rights reserved.
