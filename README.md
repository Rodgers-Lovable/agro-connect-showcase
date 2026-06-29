# AgroInternational Pty Ltd

Marketing website for AgroInternational Pty Ltd — a premium agro-products exporter
connecting trusted producers with global markets.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives)
- EmailJS (contact form)
- Umami (analytics)

## Getting started

Requires Node.js 18+ and npm.

```sh
# 1. Install dependencies
npm install

# 2. Create a .env file (see "Environment variables" below)

# 3. Start the development server
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally     |
| `npm run lint`  | Lint the codebase                    |

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com). Create a `.env` file in the
project root with:

```sh
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These are public client-side keys (prefixed `NEXT_PUBLIC_`). On Vercel, add the same
variables under **Project → Settings → Environment Variables**.

## Project structure

```
src/
  app/            App Router routes (one folder per page) + layout, sitemap
  components/     Shared components and shadcn/ui primitives (components/ui)
  data/           Site content as JSON (edit these to update copy)
  hooks/          React hooks
  lib/            Utilities, constants, analytics
public/
  assets/         Images (referenced by path, e.g. /assets/hero-agro.jpg)
```

## Editing content

Most page copy, products, team members, testimonials, and certifications live as JSON
files in [`src/data`](src/data). Edit those files to update the site — no component
changes required. See [`docs/owner-editing-options.md`](docs/owner-editing-options.md)
for ways to make the site editable without touching the repo.

## Deployment

The site is configured for [Vercel](https://vercel.com). Push to your connected Git
repository and Vercel builds and deploys automatically. Set the EmailJS environment
variables in the Vercel project settings before the first production deploy.
