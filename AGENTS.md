# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router project. Route UI lives in `app/`: `app/layout.tsx` defines the root HTML/body shell, `app/page.tsx` is the home route, and `app/globals.css` holds global Tailwind/CSS styles. Static files are served from `public/` and referenced from the site root, for example `/next.svg` or `/AirShine.dc.html`. Root config files include `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, and `pnpm-workspace.yaml`.

## Build, Test, and Development Commands

Use pnpm because the repo includes `pnpm-lock.yaml`.

- `pnpm dev`: start the local Next dev server with hot reload.
- `pnpm build`: create a production build in `.next/`.
- `pnpm start`: serve the production build after `pnpm build`.
- `pnpm lint`: run ESLint using Next core web vitals and TypeScript rules.

## Coding Style & Naming Conventions

Write TypeScript/React components in `.tsx` files and prefer server components unless interactivity requires `"use client"`. Keep components PascalCase, route folders lowercase, and reusable helpers camelCase. Use the configured `@/*` path alias for root-relative imports when it improves clarity. The codebase uses strict TypeScript and Tailwind utility classes; keep styling close to components unless it is truly global. Follow the existing two-space indentation and double-quote import style.

## Testing Guidelines

No test framework is configured yet. Before merging behavior changes, run `pnpm lint` and `pnpm build`. If tests are added, colocate them with the relevant module or place shared suites under a future `tests/` directory, using names like `component.test.tsx` or `feature.spec.ts`.

## Commit & Pull Request Guidelines

Git history currently contains only the initial Create Next App commit, so no detailed convention is established. Use short, imperative commit messages such as `Add support page assets` or `Fix home layout spacing`. Pull requests should include a concise summary, verification steps, linked issues when applicable, and screenshots for visible UI changes.

## Agent-Specific Instructions

Next.js APIs in this repo may differ from older versions. Before changing Next-specific code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices, especially for App Router file conventions and CLI behavior.
