# CLAUDE.md

**IMPORTANT:** When you make major changes to this codebase (adding/removing pages, components, or dependencies; changing architecture or conventions), you MUST update this file to reflect those changes before finishing the task.

## Project Overview

Personal website for Neev Grover — live at [neevgrover.com](https://neevgrover.com). Built with Next.js (App Router) and deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Inline styles + Tailwind CSS v4 (via PostCSS plugin), Inter font from Google Fonts
- **Icons:** react-icons (FontAwesome, Simple Icons)
- **Contact form:** Formspree (`https://formspree.io/f/xnnvbrzq`)
- **Deployment:** Vercel

## Project Structure

```
app/
  layout.tsx          — Root layout (Navbar + Footer wrapper)
  page.tsx            — Homepage (Hero, Writing, Projects, Contact sections)
  globals.css         — Global styles, CSS variables, Inter font import
  not-found.tsx       — Custom 404 page
  privacy-policy/page.tsx — Privacy policy page

components/
  Navbar.tsx          — Sticky glassy dark navbar with mobile hamburger
  Footer.tsx          — Single-row footer (copyright, privacy link, social icons)
  BlogSection.tsx     — Slim "Writing" card linking to Substack newsletter
  ProjectsSection.tsx — 2-column projects grid (Earth Day Art Contest, College Statistics, DuneBroom, BuddyBridge)
  ContactSection.tsx  — Contact form using Formspree
  PrivacyPolicy.tsx   — Privacy policy content

public/
  favicon.svg         — Site favicon
  profile.png         — Profile photo
```

## Key URLs & Social Links

- GitHub: https://github.com/groverneev
- Substack: https://techunpacked.substack.com
- X/Twitter: https://x.com/groverneev01
- LinkedIn: https://www.linkedin.com/in/neevgrover/
- College Statistics project: https://collegestatistics.org
- DuneBroom project: https://dunebroom.com
- BuddyBridge project: https://buddybridge.us
- Earth Day Art Contest: https://earthdayartcontest.vercel.app

## Important Notes

- `ProjectsSection.tsx` shows 4 projects in a 2-column grid: Earth Day Art Contest, College Statistics, DuneBroom, BuddyBridge.
- `BlogSection.tsx` is a slim single-row card (not a full section) in the "Writing" area.
- Social links appear in both `page.tsx` (hero section) and `Footer.tsx` — keep them in sync when updating.
- `rss-parser` remains as an installed dependency but is no longer used (blog page was removed). Safe to uninstall if desired.
- Do NOT add a privacy policy link to the footer. The privacy policy is accessible at `/privacy-policy` but should not appear as a footer link.

## When Making Major Changes

After significant updates to the codebase (new pages, new components, dependency changes, architectural changes), update this CLAUDE.md file to reflect the current state. Specifically update:
- The **Project Structure** section if files are added/removed/renamed
- The **Tech Stack** section if dependencies change
- The **Architecture & Patterns** section if conventions change
- The **Important Notes** section for any new caveats or TODOs
