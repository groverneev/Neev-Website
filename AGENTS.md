# AGENTS.md

## Project Overview

Personal website for Neev Grover — live at [neevgrover.com](https://neevgrover.com). Built with Astro as a fully static site and deployed on Vercel.

## Tech Stack

- **Framework:** Astro (static output, no client framework). Pages in `src/pages`, components in `src/components`, shared layout in `src/layouts/Base.astro`
- **Package manager / scripts:** Bun (`bun install`, `bun run dev`, `bun run build`, `bun run check`). `bunfig.toml` sets `minimumReleaseAge` to 3 days, so Bun won't install package versions newer than that
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens (colors, shadows, font) and the `section-label` / `card` utilities live in `src/styles/global.css`
- **Font:** Inter Variable, self-hosted via `@fontsource-variable/inter`
- **Icons:** `astro-icon` with Iconify sets (`fa6-brands`, `fa6-solid`, `simple-icons`), inlined as SVG at build time
- **Images:** `astro:assets` `<Image>` (profile photo lives in `src/assets` and is optimized to WebP)
- **Interactivity:** small inline `<script>` tags only (mobile menu, contact form). No React
- **Contact form:** Formspree (`https://formspree.io/f/xnnvbrzq`). Plain HTML form that also works without JS
- **Lint/format:** Biome (`biome.json`) plus `astro check` for types
- **Site content:** social links, projects and nav links are in `src/data.ts`

## URLs & Social Links

- GitHub: https://github.com/groverneev
- Substack: https://techunpacked.substack.com
- X/Twitter: https://x.com/groverneev01
- LinkedIn: https://www.linkedin.com/in/neevgrover/
- College Statistics project: https://collegestatistics.org
- DuneBroom project: https://dunebroom.com

## When Making Major Changes
Make sure this file reflects the current state of this codebase

## Commits
Do not add yourself as a co-author on commits (no `Co-Authored-By` trailers or similar agent attribution lines in commit messages or PR descriptions).
