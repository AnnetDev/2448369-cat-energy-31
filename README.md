# Cat Energy

A responsive multi-page website for a cat nutrition brand, built as part of the HTML Academy adaptive layout course.

**Student:** [Anna Baidikova](https://up.htmlacademy.ru/adaptive/31/user/2448369)
**Mentor:** Dmitry Osadchenko

---

## Pages

- **Home** (`index.html`) — hero section, feature highlights, nutrition programs, before/after showcase, subscription form
- **Catalog** (`catalog.html`) — product cards with filters and additional promo block
- **404** (`404.html`) — custom error page

## Tech Stack

| Area | Tools |
|------|-------|
| Markup | HTML5, BEM methodology |
| Styles | SCSS → PostCSS → LightningCSS |
| Scripts | Vanilla JS, ES modules, esbuild |
| Build | Gulp 4 |
| Dev server | browser-sync |
| Images | WebP + JPEG/PNG, 1x/2x retina, responsive `<picture>` |
| SVG | SVG sprite via gulp-stacksvg |
| Linting | stylelint, eslint, linthtml, BEM linter, W3C HTML validator |

## Features

- **Fully adaptive layout** — mobile-first, tested across mobile, tablet, and desktop breakpoints
- **Retina-ready images** — all raster images served in WebP + fallback formats at 1x/2x resolutions
- **SVG icon sprite** — optimized and bundled with svgo + gulp-stacksvg
- **Slider** — interactive before/after cat photo comparison on the homepage
- **Subscription form** — email capture with field validation
- **BEM architecture** — strict block/element/modifier naming enforced by linter
- **Automated build pipeline** — Gulp handles SCSS compilation, JS bundling, image optimization, HTML minification, and live reload

## Getting Started

```bash
npm install
npm start       # dev server with live reload
npm run build   # production build → /build
npm run lint    # run all linters
npm run preview # build + serve the production output
```

## Project Structure

```
source/
├── styles/
│   ├── blocks/     # BEM block styles (SCSS)
│   └── common/     # global styles, variables, mixins
├── scripts/        # JavaScript modules
├── images/         # raster assets (jpg, png, webp)
├── icons/          # SVG icons for sprite
├── fonts/
├── *.html
```

---

<a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/adaptive/logo-for-github-2.png"></a>

Built during the professional course [«HTML & CSS. Adaptive Layout and Automation»](https://htmlacademy.ru/intensive/adaptive) by [HTML Academy](https://htmlacademy.ru).
