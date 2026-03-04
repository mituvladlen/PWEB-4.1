# MediaGrowth — Lab 4: Static Site Generator & Git CMS

A landing page for **MediaGrowth** — a performance-based short-form content platform for creators and streamers.

## Stack

| Layer | Technology |
|-------|-----------|
| Static Site Generator | [Next.js 14](https://nextjs.org) (Pages Router, `getStaticProps`) |
| Git-based CMS | [TinaCMS](https://tina.io) |
| Styling | Custom CSS (from Lab 3) |
| Deployment | [Vercel](https://vercel.com) |

## Features

- All page content (hero, steps, benefits, stats, contact, footer) is editable via TinaCMS
- Content is stored as Markdown in `content/home.md` and committed to Git
- TinaCMS admin panel is available at `/admin`
- Fully static output via `getStaticProps` — no runtime server needed

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your TinaCMS credentials:

```bash
cp .env.example .env.local
```

Get your values from [app.tina.io](https://app.tina.io) → your project → **Tokens**.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Project Client ID (safe to expose) |
| `TINA_TOKEN` | Content read-only token |
| `GITHUB_BRANCH` | Branch to use (default: `main`) |

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.  
Open [http://localhost:4001](http://localhost:4001) to access the TinaCMS local editor.

## CMS Usage

The TinaCMS admin panel at `/admin` lets you edit all page content without touching code:

- Site title & SEO description
- Hero section text and CTA
- "How It Works" steps (add/remove/reorder)
- Benefits cards (icon, title, description)
- Stats numbers
- Contact section text and social links
- Footer text
- Mascot bubble messages

Changes made via the cloud admin are saved as commits to `content/home.md` in the Git repository.

## Build & Deploy

```bash
npm run build   # tinacms build + next build
npm run start   # serve production build locally
```

### Deploy to Vercel

1. Connect the GitHub repo to [Vercel](https://vercel.com)
2. Set environment variables in Vercel dashboard (same as `.env.local`)
3. Build command: `npm run build`
4. Output directory: `.next`

## Project Structure

```
content/
  home.md          # All page content (CMS-managed)
pages/
  index.tsx        # Main page, reads content via TinaCMS GraphQL
  _app.tsx         # Global styles import
  _document.tsx    # HTML document shell
styles/
  reset.css        # CSS reset (from Lab 3)
  style.css        # Custom design system (from Lab 3)
tina/
  config.ts        # TinaCMS schema — defines all editable fields
  __generated__/   # Auto-generated GraphQL types and client
public/
  images/          # Static assets
  admin/           # TinaCMS admin panel (generated)
```
