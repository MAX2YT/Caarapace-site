# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Caarapace is a software development company website built with **Next.js 16 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for animations.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build & Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run Next.js ESLint
```

## Architecture

### App Router Structure
- `app/layout.tsx` - Root layout with SEO metadata, Inter font configuration
- `app/page.tsx` - Homepage, renders `HeroSection`
- `app/globals.css` - CSS variables for theming (light/dark mode support)

### Components
- `components/hero-section.tsx` - Main landing page component with header navigation, animated hero content, and services section (client component)
- `components/ui/button.tsx` - shadcn/ui Button with CVA variants (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`)
- `components/ui/animated-group.tsx` - Framer Motion wrapper with preset animations (`fade`, `slide`, `scale`, `blur`, `blur-slide`, `zoom`, `flip`, `bounce`, `rotate`, `swing`)

### Utilities
- `lib/utils.ts` - `cn()` helper combining `clsx` and `tailwind-merge`

### Path Aliases
- `@/*` maps to project root (e.g., `@/components`, `@/lib`)

## Styling

### Brand Colors
- **Primary**: `#BE0B45` (deep crimson) - defined in `tailwind.config.ts` with full color scale (50-900)
- CSS variables in `globals.css` use HSL format: `345 95% 39%`

### Theme System
Uses CSS custom properties (`--background`, `--foreground`, `--primary`, etc.) with light/dark mode via `.dark` class. Colors accessed via `hsl(var(--color-name))` pattern.

### Tailwind
- Tailwind CSS v4 with `tailwindcss-animate` plugin
- Border radius via `--radius` CSS variable

## Image Configuration

Remote images allowed from:
- `ik.imagekit.io`
- `tailark.com`
- `html.tailus.io`
- `images.unsplash.com`

## Key Patterns

### Client Components
Use `'use client'` directive for components using React hooks or browser APIs (see `hero-section.tsx`, `animated-group.tsx`).

### Animation Pattern
Wrap content in `AnimatedGroup` with `variants` prop for staggered entrance animations:
```tsx path=null start=null
<AnimatedGroup
  variants={{
    container: { visible: { transition: { staggerChildren: 0.05 } } },
    item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
  }}
>
  {/* children */}
</AnimatedGroup>
```

### Button with Link
Use `asChild` prop to render Button as a Link:
```tsx path=null start=null
<Button asChild size="lg">
  <Link href="#contact">Get Started</Link>
</Button>
```
