# Aircraft Cleaning Site

A single-page Next.js (App Router) site, converted from the Claude Design export.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Vercel auto-detects Next.js. No settings to change — click **Deploy**.

(Or, from this folder, run `npx vercel` and follow the prompts.)

## How it's put together

- `app/layout.js` — page shell, `<title>`/description metadata, loads `globals.css`.
- `app/globals.css` — Google Fonts import, body reset, scroll-reveal / count-up / keyframe rules (these came from the original `<style>` block).
- `app/site-markup.js` — the static page markup, ported verbatim from the design. **Edit your text and prices here.**
- `app/page.js` — renders the markup and runs all the interactivity (nav scroll state, hero parallax, scroll reveals, count-up stats, active-link highlight, before/after sliders, hover effects).

The original `support.js` (the Claude Design runtime) and the `<x-dc>` wrapper are intentionally gone — that engine is replaced by the React effect in `page.js`.

## Replace the placeholders

Search `app/site-markup.js` for these and swap in your real details:

- `[ COMPANY&nbsp;NAME ]` and `[Company Name]` — business name
- `info<span ...>@</span>company.com` — email
- `+00 000 000 000` — phone
- `[ Region &mdash; FBOs &amp; private terminals ]` — service area

## Add real photos

The hero, gallery, and before/after panels are currently CSS-gradient placeholders, each labelled in mono with what photo belongs there (e.g. "jet in hangar", "clean cabin"). To use real images:

1. Drop photos into the `public/` folder (e.g. `public/hero.jpg`).
2. In `app/site-markup.js`, find the placeholder panel and replace its
   `background:repeating-linear-gradient(...)...` with
   `background:url('/hero.jpg') center/cover no-repeat;` (and remove the mono label span).

For the before/after sliders, the `[data-ba-before]` div is the "before" image and the panel behind it is the "after" — give each its own `background:url(...)`.
