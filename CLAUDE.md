# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 with hot-reload
npm run build    # Production build (required before deploying)
npm start        # Run production build locally
npm run lint     # ESLint check
npx tsc --noEmit # Type-check without building
```

Requires Node.js 20+.

## Architecture

This is a **Next.js 15 App Router** site for Bharat Paints (Karnal), a paint retailer. It is a marketing/lead-generation site — no backend, no database.

### Key conventions

- **Path alias:** `@/` maps to project root (e.g. `@/components/ui/Button`).
- **Styling:** Tailwind CSS + custom design tokens defined in `globals.css` as CSS variables (`--bp-navy-900`, `--bp-magenta-600`, etc.) and surfaced as Tailwind utility classes. Component-level utility classes (`.glass-card`, `.eyebrow`, `.section-heading`) are defined in `@layer components`. Use `cn()` from `lib/utils.ts` (wraps `clsx` + `tailwind-merge`) to merge class names conditionally.
- **Animations:** Framer Motion throughout. Sections use `motion.div` with `variants` for staggered entrance animations.
- **Forms:** `react-hook-form` + `zod` for validation. No API routes yet — form submissions are client-side only (Phase 2 will add backend integrations).
- **Images:** Next.js `<Image>` component with `webp` format. All images live in `public/`.

### Directory layout

```
app/              # Routes (Next.js App Router)
  layout.tsx      # Root layout — wraps every page with <Header> and <Footer>
  page.tsx        # Homepage — composes all section components in order
  chatbot/        # /chatbot route — embeds public/chatbot/index.html via <iframe>
  about/ quote/ privacy/ terms/

components/
  layout/         # Header, Footer
  sections/       # Full-width page sections (HeroSection, BrandsSection, etc.)
  cards/          # Card sub-components used inside sections
  ui/             # Primitives: Button, Input, Select, Textarea, Accordion, Badge, Card

content/          # Static data as typed TS arrays (divisions, brands, faqs, process, testimonials)
types/index.ts    # Shared TypeScript types (Division, Brand, ProcessStep, Testimonial, etc.)
lib/utils.ts      # cn() helper only
public/chatbot/   # Pre-built standalone chatbot (index.html) — do not modify
```

### Design tokens (brand colours)

| Token | Value | Usage |
|---|---|---|
| `navy-900` | `#0b1437` | Primary dark backgrounds, headings |
| `magenta-600` | `#d1118c` | Accent / CTA highlights |
| `gold-400` | `#d4a574` | Premium badge, stat numbers |
| `yellow-500` | `#ffc820` | Primary button background |
| `cream` | `#fafaf7` | Page background |

### Content updates

All site copy and data live in `content/`. No rebuild is needed to see data changes in development. The `types/index.ts` file defines the shape of every content array — match those types when adding entries.

### Chatbot

`public/chatbot/index.html` is a standalone pre-built asset. The `/chatbot` route embeds it via `<iframe>`. Do not move or rename this file.

### Phase 2 environment variables (not yet active)

When backend integrations are added, create `.env.local` with:
- `RESEND_API_KEY` — email delivery
- `NEXT_PUBLIC_SHEET_ID` / `NEXT_PUBLIC_SHEET_API_KEY` — Google Sheets
- `NEXT_PUBLIC_GA_ID` — Google Analytics
