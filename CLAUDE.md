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
- Custom colors: `primary`, `primary-light`, `navy`, `gold`, `gray-light`, `cream`, `text-dark`, `text-muted`
- Font: Nunito (via `next/font/google`)
- Use `next/image` for all images
- No hardcoded Turkish strings in components — import from `data/tr/` JSON files

## Design System — Decorative Elements

Every page follows a consistent visual pattern:

### Page Layout Pattern
```
<section> (relative overflow-hidden bg-white)
  <FloatingShapes variant="hero" />
  <Container> … page content … </Container>
</section>
<SectionDivider topColor="#ffffff" bottomColor="#2EAF4B" />
<CTABand />
```
- Homepage uses multiple sections with alternating backgrounds (white → cream → white → green CTA)
- Inner pages use a single white content section + wave divider + shared CTABand

### Components
- **`FloatingShapes`** (`components/ui/FloatingShapes.tsx`): Animated decorative circles. Variants: `hero` (pastel primary/gold on white), `cream` (green/gold on cream), `cta` (white circles on green). Always `absolute`, `pointer-events-none`, `aria-hidden`.
- **`SectionDivider`** (`components/ui/SectionDivider.tsx`): Asymmetric wave SVG. Props: `topColor`, `bottomColor`, `flip?`. Height: `clamp(40px, 5vw, 80px)`.
- **`CTABand`** (`components/landing/CTABand.tsx`): Green gradient CTA section with WhatsApp button. Reused across all pages.

### Colors & Animations
- `--color-cream: #FFF9F0` — Warm background for alternating sections (replaces cold gray)
- Float animations defined in `globals.css`: `float-slow` (8-10s), `float-medium` (7-8s), `float-fast` (5-6s)
- All decorative elements use low opacity (5-15%) to stay subtle

## Git Workflow
- **Never commit directly to `main`**
- Branch naming: `NLA-XXX` (e.g. `NLA-002`)
  - XXX is incremental starting from 1 — check the latest branch number from the repo before creating a new one (`git branch -a | grep NLA- | sort -t'-' -k2 -n | tail -1`)
- After every completed task: commit, push, and **open a PR** to `main`
- Merge via PR after review — Vercel auto-deploys on merge
