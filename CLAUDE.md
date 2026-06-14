# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build

There are no tests, linter, or typechecker configured.

## Architecture

This is a single-page marketing site for an aircraft cleaning business, ported from a Claude Design (design-tool) export into a minimal Next.js 15 App Router app (React 19). The page is four source files in `app/`, and they split responsibility in an unusual way:

- **`app/i18n.js`** exports `dict` (`{ en, ro }`) — the **translation dictionaries** where all user-visible copy lives, keyed by string, one object per locale. Also exports `locales` (switcher order/labels), `defaultLocale`, and `resolveLocale()`. Add a language by copying the `en` object, translating values, and registering it in `dict` + `locales`; keep the object SHAPE identical because the markup reads these exact keys/arrays. Price numbers, `data-count` values, and ✓/— symbols stay in the markup, not here.
- **`app/site-markup.js`** exports `siteHtml(t)`, a **function of a locale dictionary** that returns the entire page as raw HTML with **inline styles** (the design's literal colors, fonts, and gradient placeholders are baked into `style="..."` attributes). Structure/styles live here; every text node is `${t.…}` pulled from the dict.
- **`app/page.js`** is a `"use client"` component that holds the active `lang` in `useState`, renders `siteHtml(dict[lang])` via `dangerouslySetInnerHTML`, then in a `useEffect` attaches **vanilla DOM event listeners** to the injected nodes (queried by id/`data-*` from a `hostRef`). It drives nav scroll state, hero parallax, scroll-reveal, count-up stats, active-link highlight, before/after sliders, and the `[data-lang]` language switcher. The main effect depends on `[lang]`, so it re-attaches after every re-render; it returns a cleanup array that detaches every listener. Locale is persisted to `localStorage` (`acsite-lang`) and mirrored to `<html lang>`; on mount it resolves saved → browser (`navigator.language`) → `defaultLocale`.
- **`app/globals.css`** holds only what inline styles can't express: the Google Fonts `@import`, body reset, `@keyframes`, and the `[data-reveal]` / `[data-count]::after` rules the JS toggles.

The interactivity in `page.js` is **coupled to `site-markup.js` by selectors**, not by React props or state. The JS expects specific hooks in the markup — `#acsite`, `#acnav`, `#achero-img`, `[data-reveal]`, `[data-count]` (with `data-suffix`/`data-disp`), `[data-navlink]`, `[data-ba-before]`, `[data-lang]`. If you change or remove one of these attributes in the markup, update the matching query in `page.js` (and vice versa).

This is deliberately **not** idiomatic React: there are no components, no JSX for content, no state — the design is a static HTML blob with behavior bolted on. Do not "Reactify" the markup or reintroduce the original Claude Design runtime (`support.js` / `<x-dc>` wrapper), which were intentionally removed.

## Editing conventions

- **Content / text** → edit the values in `app/i18n.js`, **changing every locale** so they stay in sync. Don't put copy back into `app/site-markup.js`.
- **Prices** → live in `app/site-markup.js` (e.g. `€250`), since the numbers are locale-neutral; the surrounding labels (`from`, `per aircraft`, `Custom quote`) are in `i18n.js`.
- **Layout / structure / new sections** → edit `app/site-markup.js`, adding a matching `${t.…}` key to every locale in `app/i18n.js`.
- **Behavior** → edit the corresponding listener in `app/page.js`; preserve the cleanup pattern and the `[lang]` dependency.
- **Placeholders to replace**: `[ COMPANY&nbsp;NAME ]` / `[Company Name]` (in `app/site-markup.js`), the `info...@...company.com` email and `+00 000 000 000` phone (in `app/site-markup.js`), and the service-area value (`contact.areaValue` in `app/i18n.js`, per locale).
- **Images** are CSS-gradient placeholders, each labelled in mono with the intended photo. To use real images, drop files into `public/` and replace the panel's `background:repeating-linear-gradient(...)` with `background:url('/file.jpg') center/cover no-repeat;` (removing the mono label). For before/after sliders, `[data-ba-before]` is the "before" layer and the panel behind it is the "after"; give each its own background.

See `README.md` for deployment (Vercel) and `AGENTS.md` for additional agent notes.
