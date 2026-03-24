# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint

No test framework is configured.

## Architecture

Next.js 14 App Router portfolio site (React 18, TypeScript, Tailwind CSS 3). Uses `src/` directory structure.

### Content System

All UI text is centralized in `src/lib/content.json` — headings, labels, nav links, social URLs, form copy, metadata. Components import from this file rather than hardcoding strings.

Blog posts live in `content/blog/*.mdx` with gray-matter frontmatter (`title`, `date`, `excerpt`). `src/lib/blog.ts` reads them from the filesystem and sorts by date. Posts render via `next-mdx-remote/rsc` (RSC-compatible MDX). MDX prose styles are in `globals.css` under `.prose`.

### Pages

- `/` — Home: Welcome (scroll-driven sprite animation) → Hero → Skills → Experience
- `/blog` — Lists all MDX posts
- `/blog/[slug]` — Individual post (statically generated via `generateStaticParams`)
- `/contact` — Contact form via EmailJS

### Key Patterns

- **Welcome component** (`src/components/Welcome.tsx`): scroll-driven "typing" animation that reveals HTML-like text character by character. Uses `parseHtmlSegments` utility for syntax-colored rendering on desktop, plain white text on mobile. Only renders on the home route.
- **Client vs Server**: Components using framer-motion, scroll listeners, or form state are `"use client"`. Blog listing and post pages are server components.
- **Custom hooks**: `src/hooks/useMobile.ts` — mobile breakpoint detection.
- **CSS variables**: Theme colors defined in `globals.css` `:root` and mapped through Tailwind's `extend.colors` in `tailwind.config.ts`. Custom utilities for 3D flip cards and cursor blink animation are in `globals.css`.
- **Fonts**: Inter (sans) and Inconsolata (mono) via `next/font/google`, exposed as CSS variables.

### Environment Variables

EmailJS integration requires three `NEXT_PUBLIC_EMAILJS_*` vars (see `.env.local.example`).
