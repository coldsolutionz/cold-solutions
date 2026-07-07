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

Implement every item in `Improvement.md`: establish this context workflow, remove label glow, use the snowflake cursor, update contact email and canonical URL, remove decorative icons, and refine the process section so cards fade beneath a subtle title panel.

## Last Verified State

Implementation in progress. Update this section after build, browser verification, commit, and deployment.
