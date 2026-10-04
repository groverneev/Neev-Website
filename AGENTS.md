# AGENTS.md

## Project Overview

Personal website for Neev Grover — live at [neevgrover.com](https://neevgrover.com). Built with Next.js (App Router) and deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Inline styles + Tailwind CSS v4 (via PostCSS plugin), Inter font from Google Fonts
- **Icons:** react-icons (FontAwesome, Simple Icons)
- **Contact form:** Formspree (`https://formspree.io/f/xnnvbrzq`)

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
  ProjectsSection.tsx — 2-column projects grid (College Statistics, DuneBroom)
  ContactSection.tsx  — Contact form using Formspree
  PrivacyPolicy.tsx   — Privacy policy content

public/
  favicon.svg         — Site favicon
  profile.png         — Profile photo
```

## URLs & Social Links

- GitHub: https://github.com/groverneev
- Substack: https://techunpacked.substack.com
- X/Twitter: https://x.com/groverneev01
- LinkedIn: https://www.linkedin.com/in/neevgrover/
- College Statistics project: https://collegestatistics.org
- DuneBroom project: https://dunebroom.com

## When Making Major Changes
Make sure this file reflects the current state of this codebase
