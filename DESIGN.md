# Cold Solutions Design System

## Direction

A nocturnal winter landscape translated into a precise digital instrument: deep Oxford Blue fields, Frost Blue light, Moonlight text, geometric snowflake structures, and restrained cyan energy. Motion is smooth and cinematic, with moments of hard graphic contrast.

## Color

- Oxford Blue `#02122F`: primary canvas
- Storm `#23354D`: elevated surfaces
- Steel `#495B7D`: secondary surfaces and muted structure
- Frost Blue `#8BA3C5`: secondary copy and soft highlights
- Moonlight `#F0ECDD`: primary text and warm counterpoint
- Ice Cyan `#7DDFF2`: interaction and active-flow accent only

Use CSS custom properties and color-mix for translucent states. Large surfaces stay in Oxford/Storm; bright cyan remains below 10% of the page.

## Typography

Use Manrope for body and utility text, and Chakra Petch for display typography. Display copy is compact, engineered, and slightly angular; body copy is open and highly readable. Keep display tracking no tighter than `-0.035em`.

## Layout

Desktop uses a 12-column fluid grid with asymmetry and generous negative space. Mobile collapses to a single reading column. Sections use varied pacing rather than repeated card grids. Content width is capped at 1440px; body copy at 68ch.

## Components

- Navigation: fixed, compacting dark bar with hairline Frost border
- Buttons: pill-shaped, high-contrast, magnetic only for precise pointers
- Panels: 12–16px radius, either a hairline border or a short defined shadow, never both
- Project stages: full-width scenes with image-like generated compositions
- Flow nodes: connected operational diagram, not cards

## Motion

Use Motion for local entrances and interactions, GSAP ScrollTrigger for pinned narratives, and Lenis for scrolling. Prefer transform, opacity, clip-path, blur, and SVG stroke animation. Disable smooth scrolling, particles, cursor effects, pinning, and parallax under reduced motion.

## Imagery

The supplied geometric snowflake is the mark. Reconstruct it as a clean SVG for transparent use while keeping the source image in Assets. Case-study visuals are abstract product compositions made from interface layers rather than empty placeholders.

## Responsive & Accessibility

All primary flows work at 320px width, with 44px minimum interactive targets, visible focus rings, AA contrast, and no hover-only content. Decorative canvas and pointer effects are `aria-hidden` and omitted on coarse pointers.
