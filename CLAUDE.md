# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`). Do not use npm/yarn.

- `pnpm dev` — start the dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint

There is no test runner configured yet.

## Critical: Next.js version

This project runs **Next.js 16.2.9 with React 19.2.4** — newer than most training data, with breaking changes to APIs, conventions, and file structure. Per `AGENTS.md`, **read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code**, and heed deprecation notices.

Docs are organized as:
- `node_modules/next/dist/docs/01-app/01-getting-started/`
- `node_modules/next/dist/docs/01-app/02-guides/`
- `node_modules/next/dist/docs/01-app/03-api-reference/`

These docs contain version-specific "AI agent hint" comments flagging non-obvious behavior. For example, `index.md` notes that fixing slow client-side navigations requires exporting `unstable_instant` from the route (not just wrapping in Suspense). Check for such hints before assuming a fix matches older Next.js behavior.

## Architecture

App Router project (`app/` directory). Currently a minimal create-next-app scaffold:
- `app/layout.tsx` — root layout; loads Geist fonts via `next/font/google` and exposes them as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- `app/page.tsx` — home route.
- `app/globals.css` — global styles.

Styling is **Tailwind CSS v4**, configured via `postcss.config.mjs` using `@tailwindcss/postcss` (no `tailwind.config.js` — v4 uses CSS-based config in `globals.css`).

The `@/*` import alias maps to the project root (see `tsconfig.json`).
