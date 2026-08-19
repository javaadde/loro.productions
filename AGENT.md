# AGENT Rules

This project must be built and maintained with the following stack and conventions.

## Required Stack

- React for all UI implementation.
- Tailwind CSS for styling.
- shadcn/ui for base UI primitives and reusable interface patterns.
- Framer Motion for motion and interaction work.
- TypeScript for application code.

## Hard Rules

- Do not build new pages or sections with plain standalone HTML, CSS, and JavaScript when React components can be used.
- Keep UI code componentized and colocated under `src/components`.
- Prefer reusable shadcn/ui primitives before creating custom UI wrappers.
- Use Tailwind utility classes as the default styling approach.
- Use global CSS only for tokens, fonts, resets, and cases that are not practical in utilities.
- Preserve the existing visual design unless a redesign is explicitly requested.
- Keep animations subtle and implement them with Framer Motion when interaction or reveal behavior is needed.
- Avoid introducing a different framework or styling system.

## Preferred Structure

- `src/components/ui` for shadcn/ui primitives.
- `src/components/site` for landing-page or product-specific sections.
- `src/lib` for shared utilities.
- `src/App.tsx` as the page composition layer.
- `src/main.tsx` as the React entrypoint.

## Implementation Notes

- When migrating static markup, recreate it as React components instead of embedding raw HTML strings.
- When adding assets, import them through the app when possible.
- Keep files small and focused, but avoid unnecessary abstraction.
- Match existing spacing, typography, and responsive behavior before changing structure.
