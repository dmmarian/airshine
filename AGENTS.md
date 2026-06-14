# AGENTS — Guidance for AI coding agents

Purpose
- Brief, actionable notes to help AI agents work productively in this repo.

How to run
- Install: `npm install`
- Dev: `npm run dev` (Next.js dev server)
- Build: `npm run build` / `npm start` for production

Project overview
- Framework: Next.js (App Router). See [README.md](README.md) for full details.
- Single-page site exported from a design tool; most logic lives in `app/page.js`.

Key files
- `app/site-markup.js`: static page markup — update business text, prices, and image placeholders.
- `app/page.js`: interactivity and runtime effects (scroll reveal, parallax, sliders).
- `app/layout.js` and `app/globals.css`: page shell and global styles.
- `public/`: static assets for images and media.

Agent conventions
- Prefer editing `app/site-markup.js` for content changes rather than restructuring the app.
- Link to existing docs instead of copying: use [README.md](README.md) for deployment and run instructions.
- Keep changes minimal and focused; preserve original structure unless a clear refactor is requested.

Common pitfalls
- The design was converted from a runtime export; avoid reintroducing the original design engine.
- Images are placeholders implemented via CSS backgrounds — replace them in `public/` and update the CSS accordingly.

If unsure
- Ask for clarification before large refactors or dependency upgrades.
