# Nexus Language Academy

The official web platform for Nexus Language Academy — an online English language school. Currently a marketing site, soon to become a full-featured learning management system.

## Project Structure

```
nexus-language-academy/
├── frontend/          # Next.js web application
├── backend/           # (Coming soon...)
└── CLAUDE.md          # Developer guide
```

---

## Frontend

A statically generated site built with Next.js 16 (App Router), deployed on Vercel.

### Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16 (App Router + Turbopack) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Package Manager | pnpm |

### Features

- Fully responsive design (mobile, tablet, desktop)
- Animated decorative backgrounds with floating shapes and wave section dividers
- Warm cream/white/green color palette
- WhatsApp integration (CTA buttons, form redirects)
- SEO-optimized static pages
- All Turkish content managed via JSON data files

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Pricing, intro video, why Nexus, course overview, CTA |
| Courses | `/courses` | Level-based English programs (A1–B2) |
| Teachers | `/teachers` | Instructor profiles and intro videos |
| Pricing | `/pricing` | Package options and pricing |
| Placement Test | `/placement-test` | Free placement test form |

### Getting Started

```bash
cd frontend
pnpm install
pnpm dev        # Dev server (localhost:3000)
```

```bash
pnpm build      # Production build
pnpm lint       # ESLint check
```

### Environment Variables

```env
NEXT_PUBLIC_WA_PHONE=905XXXXXXXXX   # WhatsApp contact number
```

---

## Backend

> ### Coming soon...
>
> The backend is being actively planned and is about to enter development. Here's what's on the horizon:
>
> - **Student Portal** — Lesson tracking, homework management, progress reports
> - **Teacher Portal** — Lesson planning, student assessments, material sharing
> - **Admin Dashboard** — Full-featured academy management system
> - **Online Placement Test** — Interactive test with automatic scoring
> - **Payment System** — Online lesson package purchases
> - **Booking System** — Calendar-based lesson scheduling and reminders
> - **Notification System** — Email and WhatsApp notifications
>
> Tech stack and architecture decisions are being finalized. Stay tuned!

---

## Development

See [CLAUDE.md](./CLAUDE.md) for the full developer guide.

### Git Workflow

1. Never commit directly to `main`
2. Create branches using the `NLA-XXX` naming convention
3. Open a PR, merge after review
4. Vercel auto-deploys on merge to `main`
