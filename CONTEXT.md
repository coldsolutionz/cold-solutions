# Cold Solutions Project Context

## Product

Cold Solutions is a cinematic agency website for web development, GoHighLevel, automation, custom software, integrations, and technical support. The primary audience is small-business owners seeking a credible digital partner.

## Brand and UX

- Brand register: marketing/portfolio.
- Visual identity: Oxford Blue, Storm, Steel, Frost Blue, Moonlight, and restrained Ice Cyan.
- Logo: geometric snowflake only; do not add a wordmark beside it in navigation or footer.
- Motion should feel smooth and purposeful, with reduced-motion and mobile fallbacks.
- Section labels may remain, but must not use neon dots or glow effects.
- Decorative icons should not be introduced; company/logo marks are allowed.
- Contact email: `hello.coldsolutions@gmail.com`.
- Canonical production URL: `https://coldsolutionz.vercel.app`.

## Architecture

- Next.js App Router, TypeScript, Motion, GSAP ScrollTrigger, and Lenis.
- Main homepage: `app/page.tsx`.
- Portfolio index: `app/work/page.tsx`.
- Case-study pages: `app/work/[slug]/page.tsx`.
- Editable project/service data: `lib/data.ts`.
- Global visual system: `app/globals.css` and `DESIGN.md`.

## Deployment

- GitHub: `https://github.com/coldsolutionz/cold-solutions` on `main`.
- Vercel account: Cold Solutions account only.
- Existing Vercel project: `cold-solutions`.
- Never push or deploy through a Coldplay-related identity.

## Current Request

All items in `Improvement.md` were implemented: persistent context workflow, glow-free labels, snowflake cursor, Gmail/canonical URL updates, decorative icon removal, and a refined masked process timeline.

## Last Verified State

- Date: 2026-07-07.
- Desktop and mobile process layouts visually verified in Chromium.
- Impeccable detector: no findings.
- Next.js production build: passed with all eight static routes generated.
- Dependency audit: zero vulnerabilities.
- Implementation commit: `1df0a6f`.
- Git integration deployed the changes successfully to `https://cold-solutions.vercel.app`; the live HTML contains the new Gmail address.
- Requested alias `https://coldsolutionz.vercel.app` is pending because the local Vercel CLI session expired (`Not authorized`). Re-authenticate the Cold Solutions account, then assign the alias to the existing `cold-solutions` project.
