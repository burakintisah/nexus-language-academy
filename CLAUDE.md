# Nexus Language Academy — Development Guide

## Project Structure
- `frontend/` — Next.js 16 App Router site (TypeScript, Tailwind CSS v4, pnpm)
- All user-facing Turkish text lives in `frontend/src/data/tr/*.json`
- Components, variables, file names — **English only**
- URL routes are English: `/courses`, `/teachers`, `/placement-test`, `/pricing`

## Commands
- `cd frontend && pnpm dev` — Start dev server
- `cd frontend && pnpm build` — Production build
- `cd frontend && pnpm lint` — Run ESLint

## Key Conventions
- Primary CTA channel: WhatsApp (`wa.me` links)
- WhatsApp phone from env: `NEXT_PUBLIC_WA_PHONE`
- Use `@/` path alias for imports (maps to `src/`)
- Tailwind v4: custom colors defined in `globals.css` `@theme` block
- Custom colors: `primary`, `primary-light`, `navy`, `gold`, `gray-light`, `text-dark`, `text-muted`
- Font: Nunito (via `next/font/google`)
- Use `next/image` for all images
- No hardcoded Turkish strings in components — import from `data/tr/` JSON files
