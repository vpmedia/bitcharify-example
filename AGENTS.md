# AGENTS.md

## Overview

Example application for the `@vpmedia/bitcharify` package, demonstrating bitmap font usage in both Phaser 2 (`@vpmedia/phaser`) and Phaser 3 (`phaser`) via the respective add-ons.

## Tech Stack

- **Language:** TypeScript (ESM)
- **Runtime:** Node.js / Browser
- **Package Manager:** pnpm (workspaces)
- **Game Engines:** `@vpmedia/phaser` (Phaser 2 port), `phaser` v3
- **Libs:** `@vpmedia/bitcharify`, `@vpmedia/bitcharify-phaser2`, `@vpmedia/bitcharify-phaser3`
- **Build/Dev Server:** Vite
- **Asset Pipeline:** `@vpmedia/phixify`
- **Testing:** Vitest, @vitest/coverage-v8, happy-dom
- **Lint/Format:** oxlint (+ `oxlint-tsgolint`), oxfmt
- **Type Checking:** TypeScript
- **Tooling:** lefthook (git hooks), commitlint (conventional commits)

## Documentation

- Lefthook: https://lefthook.dev/llms.txt
- OXC (oxlint, oxfmt): https://oxc.rs/llms.txt
- Phaser 3: https://context7.com/phaserjs/phaser/llms.txt
- TypeScript: https://context7.com/websites/typescriptlang/llms.txt
- Vite: https://vite.dev/llms.txt
- Vitest: https://vitest.dev/llms.txt

## Commands

- **Install:** `pnpm install`
- **Dev server:** `pnpm start` (Vite, opens browser)
- **Build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Generate assets:** `pnpm asset` (runs phixify)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`
- **All checks:** `pnpm check`

## Project Structure

- `src/index.html` — entry HTML
- `src/main-phaser2.ts` — Phaser 2 demo entry
- `src/main-phaser3.ts` — Phaser 3 demo entry
- `src/style.css` — styles
- `types/` — local type augmentations
- `dist/` — Vite build output (gitignored)

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Vitest with coverage; configured to pass with no tests
- Place new tests as `*.test.ts` co-located with source
