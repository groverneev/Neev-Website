# Neev Grover — Personal Website

Source code for **[neevgrover.com](https://neevgrover.com)** — a personal website showcasing projects, blog posts, and contact info.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** with TypeScript
- **Tailwind CSS v4** (via PostCSS)
- **react-icons** for social/project icons
- **rss-parser** for fetching Substack blog posts
- Deployed on **Vercel**

## Project Structure

```
app/
  layout.tsx            Root layout (Navbar + Footer)
  page.tsx              Homepage (Hero, Blog, Projects, Contact)
  globals.css           Global styles
  blog/page.tsx         Blog page (fetches Substack RSS feed via ISR)
  privacy-policy/       Privacy policy page
  not-found.tsx         Custom 404

components/
  Navbar.tsx            Sticky nav with mobile drawer
  Footer.tsx            Footer with social links
  BlogSection.tsx       Blog preview card for homepage
  ProjectsSection.tsx   Projects grid for homepage
  ContactSection.tsx    Contact form (Formspree)
  PrivacyPolicy.tsx     Privacy policy content

public/
  favicon.svg           Site favicon
  profile.png           Profile photo
```

## About

- Chess — USCF ~1800, Chess.com ~2100
- [DuneBroom](https://dunebroom.com) — Autonomous beach-cleaning robot
- [Tech Unpacked](https://techunpacked.substack.com) — Weekly tech blog
- [College Statistics](https://collegestatistics.org) — College data visualization dashboard
