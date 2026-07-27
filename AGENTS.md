# AGENTS.md

## Overview

Example application for the `@vpmedia/bitcharify` package, demonstrating bitmap font usage in both Phaser 2 (`@vpmedia/phaser`) and Phaser 3 (`phaser`) via the respective add-ons.

## Tech Stack

Read [package.json](package.json) for the language, runtime, dependencies and tooling.

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

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Vitest with coverage; configured to pass with no tests
- Place new tests as `*.test.ts` co-located with source

## Reference Documentation

Read on demand:

- [clean-code.md](docs/agents/clean-code.md) — general clean-code guidelines: naming, functions, comments, error handling, classes, testing, and refactoring.
