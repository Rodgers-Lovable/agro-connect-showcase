# TinaCMS setup & editing guide

TinaCMS is installed as the content editor for this site. It gives a friendly admin
panel at **`/admin`** with forms for every section of the site. When an editor saves a
change, Tina commits it to the JSON files in `src/data` on GitHub, which triggers a
Vercel redeploy — the change is live in a minute or two.

The content itself stays in **Git** (`src/data/*.json`); Tina Cloud is only the
editing backend (auth + the connection between the admin panel and GitHub).

---

## What's already done (in the code)

- `tinacms` + `@tinacms/cli` installed
- [`tina/config.ts`](../tina/config.ts) — a schema mirroring all 16 files in `src/data`
  (company details, products, team, certifications, FAQ, testimonials, etc.)
- `package.json` scripts updated:
  - `npm run dev` → `tinacms dev -c "next dev"` (runs the site **and** the local editor)
  - `npm run build` → `tinacms build && next build` (used by Vercel)
  - `npm run dev:next` / `npm run build:next` → run Next.js **without** Tina (handy for
    a quick build when Tina credentials aren't set)
- `.gitignore` updated for Tina's generated files (`tina/__generated__`, `public/admin`)

## What you need to do (one-time)

These steps require **your** accounts, so I can't do them for you.

### 1. Push the repo to GitHub

Tina Cloud connects to a GitHub repository. Make sure this project is pushed to GitHub.

### 2. Create a Tina Cloud project

1. Sign up at <https://app.tina.io>.
2. Create a new project and **connect it to this GitHub repository**.
3. From the project, copy the **Client ID** (Project → Overview).
4. Create a **read-only Token** (Project → Tokens).

### 3. Add the credentials locally

Put them in your `.env` (already stubbed for you):

```sh
NEXT_PUBLIC_TINA_CLIENT_ID='your-client-id'
TINA_TOKEN='your-read-only-token'
```

### 4. Add the credentials to Vercel

In the Vercel project: **Settings → Environment Variables**, add the same two variables
(`NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN`) for **all environments**, then redeploy.

### 5. Invite the owner as an editor

In Tina Cloud, add the site owner as a user so they can log in and edit.

---

## How editing works

### Locally (for developers)

```sh
npm run dev
```

Open <http://localhost:3000/admin>. In local mode Tina uses your filesystem directly —
no login needed — and saves write straight to the JSON files in `src/data`.

### In production (for the owner)

Go to **`https://your-domain/admin`**, log in via Tina Cloud, edit using the forms, and
click **Save**. Tina commits to GitHub → Vercel redeploys → the change goes live.

---

## Notes & limitations

- **Image uploads are enabled.** Product images, team photos, and the quality gallery use
  Tina `image` fields with the built-in media manager (media root is `public/assets`).
  Editors can upload a new image or pick an existing one directly in the admin — no need to
  touch the repo. Tina stores the full path (e.g. `/assets/products/coffee.jpg`) and the
  site renders it directly.
  - Uploaded files are committed to `public/assets` in the repo (Git-backed media), so they
    deploy with the site like any other content change.
- **`icon` fields** expect a [Lucide](https://lucide.dev/icons) icon name that the code
  knows how to render (the field labels list the valid options where the set is small).
  Typing an unknown icon name falls back to a default icon rather than breaking the build.
- **Don't rename the `id` fields** — they're used as React keys and, for products, to
  match the category filter.
- Editors can't add or delete whole files (create/delete is disabled); they edit the
  fields within each existing section. They _can_ add/remove items within a list (e.g. a
  new product, team member, or FAQ).

See [owner-editing-options.md](owner-editing-options.md) for how this compares to the
other approaches that were considered.
