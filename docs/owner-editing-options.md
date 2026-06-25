# Making the site owner-editable

> **Status:** Option 2 (TinaCMS, Tina Cloud backend) has been implemented. See
> [tinacms-setup.md](tinacms-setup.md) for the setup and editing guide. The comparison
> below is kept for reference.


This site is now a **Next.js** app hosted on **Vercel**. All of the page content —
copy, products, team members, testimonials, certifications, FAQs, etc. — lives as JSON
files in [`src/data`](../src/data). Whenever those files change in the Git repository,
Vercel automatically rebuilds and redeploys the site.

That single fact is the key: **"editing the site" means changing the files in
`src/data` and letting Vercel redeploy.** Every option below is just a different,
friendlier way to do that — from raw file editing up to a full visual dashboard.

The options are ordered from least to most effort. Given the owner is *somewhat
technical* (comfortable with a web admin panel, but not editing code in a repo), the
recommendation is **Option 2 (a Git-based CMS, TinaCMS)**, with Option 1 as a zero-cost
fallback and Option 3 if a fully decoupled, non-technical dashboard is wanted later.

---

## Option 1 — Edit JSON directly on GitHub (free, zero setup)

The owner edits the `src/data/*.json` files through GitHub's built-in web editor (the
pencil icon on any file). Committing the change triggers a Vercel deploy automatically.

- **Cost:** free
- **Setup:** none (already works today)
- **Editor experience:** edit raw JSON in the browser; commit with a message
- **Pros:** nothing to build or maintain; full history/rollback via Git
- **Cons:** the owner sees raw JSON and must keep it valid (a missing comma or quote
  breaks the build); no image upload UI (images go in `public/assets`); no live preview

**Good for:** occasional text tweaks by someone willing to be careful with JSON.

> Tip: pair this with Vercel's **deploy notifications** so the owner knows when a change
> is live, and rely on Vercel's **preview deployments** on a branch to catch a broken
> edit before it hits production.

---

## Option 2 — Git-based CMS with an admin panel  ✅ Recommended

A Git-based CMS adds a friendly admin UI (forms, rich-text fields, image uploads) that
reads and writes the **same files already in the repo**. The owner logs in, edits in a
form, hits save, and the CMS commits to Git → Vercel redeploys. No JSON, no code.

Because the content stays in the repo, there is **no separate database to pay for or
back up**, and every change is versioned in Git.

### Recommended: [TinaCMS](https://tina.io)

- **Cost:** generous free tier (Tina Cloud handles auth + editing); paid tiers for more
  editors
- **Editor experience:** clean form-based editor, optional live visual preview, image
  uploads, works great with Next.js on Vercel
- **Setup effort:** moderate — install Tina, describe each content type once (a schema
  that mirrors the existing JSON), connect the GitHub repo in Tina Cloud, add two
  environment variables on Vercel
- **Pros:** purpose-built for Next.js; non-technical editing; content stays in Git;
  free for a small team
- **Cons:** one-time schema setup; adds a dependency to the project

### Free / self-hosted alternative: [Decap CMS](https://decapcms.org) or [Sveltia CMS](https://github.com/sveltia/sveltia-cms)

- A config-only admin panel served at `/admin` that commits to GitHub.
- **Cost:** fully free and open-source.
- **Trade-off:** needs a GitHub OAuth handler to log editors in (a small serverless
  function on Vercel, or a hosted OAuth proxy). Slightly more DIY than Tina, and the UI
  is more basic, but there are no usage limits.

**Good for:** the current situation — a semi-technical owner who wants a dashboard, not
JSON, while keeping hosting simple and cheap.

---

## Option 3 — Hosted headless CMS (most polished, fully decoupled)

A hosted CMS stores content in its own cloud and exposes it via an API. The site fetches
content at build time (with a Vercel **deploy hook** so "Publish" triggers a rebuild) or
on demand. This fully separates content from code — the owner never touches the repo.

### Leading choices

| CMS | Notes |
| --- | --- |
| [Sanity](https://www.sanity.io) | Excellent free tier, highly structured content, polished "Studio" editor. Strong fit. |
| [Storyblok](https://www.storyblok.com) | Visual, click-on-the-page editing — most approachable for non-technical users. |
| [Contentful](https://www.contentful.com) | Mature, enterprise-friendly; free tier is more limited. |

- **Cost:** free tiers exist; cost grows with content/users/API usage
- **Editor experience:** best-in-class dashboards, roles/permissions, scheduled publishing
- **Setup effort:** highest — model all content types in the CMS, migrate the existing
  JSON into it, and change the site to fetch from the CMS API instead of importing JSON
- **Pros:** most powerful, truly non-technical editing, multi-user workflows
- **Cons:** most work to adopt; introduces a third-party service and (eventually) a
  recurring bill; another system to manage

**Good for:** if editing becomes frequent, multiple non-technical people are involved,
or features like scheduled publishing and granular permissions are needed.

---

## Recommendation summary

| Need | Best option |
| --- | --- |
| Cheapest, occasional edits, owner OK with care | **Option 1** — GitHub web editor |
| Friendly dashboard, keep it simple & cheap (current fit) | **Option 2** — TinaCMS (or Decap for $0) |
| Polished, fully non-technical, multi-editor, future-proof | **Option 3** — Sanity / Storyblok |

A sensible path: **start with Option 1 today** (it already works), and **adopt
TinaCMS (Option 2)** when hands-off editing is wanted. Moving to a hosted CMS later is
always possible because the content is cleanly separated in `src/data`.

> Note on accuracy: CMS products change their setup steps and APIs often. When
> implementing any option above, follow the tool's **current official documentation**
> (linked in each section) rather than older tutorials.
