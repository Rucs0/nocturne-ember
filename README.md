# Ember

A free single-page starter from [Nocturne](https://nocturneui.com/?utm_source=ember&utm_medium=readme&utm_campaign=free-starter) — dark-first, animation-heavy, and production-shaped rather than demo-shaped.

![Ember in motion](docs/demo.gif)

It ships the same design-system machinery and motion primitives as the paid Nocturne templates, cut down to one page so you can read the whole thing in an afternoon.

MIT licensed — use it for anything, no attribution required.

```bash
git clone https://github.com/Rucs0/nocturne-ember.git
cd nocturne-ember && npm install && npm run dev
```

## What's in it

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind v4** with a CSS-first token system — one file to rebrand
- **Motion** primitives: scroll reveals, staggered entrances, count-up numbers, a CSS marquee, and a cursor-following spotlight card
- **next-themes** dark/light with system detection, no flash on load
- An animated status-board mock built entirely from CSS and data — **no image assets anywhere in this template**
- Accessible accordion, button, badge, and input built on Radix

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. There are **no environment variables** — it builds and runs with zero configuration.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Making it yours

Three files, in order of impact:

1. **`lib/site.ts`** — product name, tagline, description, nav, footer links, CTAs. Everything on the page reads from here.
2. **`app/theme.css`** — the entire palette as `oklch()` values. Change the three `--brand*` hues and every gradient, glow, and accent follows. The hue cheat sheet is in the file.
3. **`app/layout.tsx`** — fonts, via `next/font`. The CSS variables feed `--font-sans` and `--font-display`, so swapping a font propagates automatically.

Then edit the section content in `components/sections/`. Each section is self-contained and safe to delete — `app/page.tsx` is just a list of them.

### A note on the demo content

The company on this page is fictional, and so are the customer names in the logo marquee and the numbers on the status board. Swap them for real ones or delete the sections — please don't ship invented social proof.

## Structure

```
app/
  layout.tsx        root layout, fonts, metadata
  page.tsx          the page — a list of sections
  theme.css         all design tokens (edit this to rebrand)
  globals.css       design-system machinery and utilities
components/
  motion/           reveal, marquee, count-up, spotlight-card
  sections/         hero, logos, features, pricing, faq, cta
  mock/             the animated status board
  site/             navbar, footer, logo, theme toggle
  ui/               accordion, badge, button, input, switch
lib/
  site.ts           site-wide copy and config
  utils.ts          cn() class merger
```

## Gotchas worth knowing

- **Gradient text must use `background-image:` longhand.** Tailwind v4's minifier merges a `background:` shorthand and resets `background-clip: text`, silently turning gradient headlines into solid bars. See `.text-gradient-brand` in `globals.css`.
- **All motion respects `prefers-reduced-motion`.** CSS animations are disabled at the bottom of `globals.css`; Motion components read the preference via `useReducedMotion`.

## License

MIT — use it for anything, commercial or not, no attribution required. The footer credit is a courtesy, not an obligation; delete it freely.

---

If this is useful, the paid templates go a lot further: [nocturneui.com](https://nocturneui.com/?utm_source=ember&utm_medium=readme&utm_campaign=free-starter)
