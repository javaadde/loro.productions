<environment_details>
Current time: 2026-08-19T10:58:39+05:30
Working directory: /home/kuttappi/Projects/loro.productions
Workspace root folder: /home/kuttappi/Projects/loro.productions
</environment_details>

# Loro Productions - Development Context

## Project Overview

Loro Productions is a React-based marketing website that must preserve its current visual design while being implemented with a structured, reusable frontend architecture.

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | `React` | All UI implementation |
| Language | `TypeScript` | Typed application code |
| Styling | `Tailwind CSS` | Utility-first styling system |
| UI Primitives | `shadcn/ui` | Reusable base components |
| Motion | `Framer Motion` | Interaction and reveal animations |
| Build Tool | `Vite` | Development server and production build |

## Conventions

- Use React components for all UI work. Do not introduce plain standalone HTML, CSS, and JavaScript pages.
- Keep UI code componentized and colocated under `src/components`.
- Prefer reusable `shadcn/ui` primitives before creating custom wrappers.
- Use Tailwind utility classes as the default styling approach.
- Use global CSS only for fonts, design tokens, resets, keyframes, and utility gaps that are not practical in Tailwind classes.
- Preserve the current design exactly unless a redesign is explicitly requested.
- Keep animations subtle and implement them with Framer Motion when animation or reveal behavior is needed.
- Avoid introducing a different UI framework, styling system, or page architecture.
- Import assets through the app when possible instead of relying on static HTML references.
- Keep files focused and small, but avoid unnecessary abstraction.

## Architecture

```
src/
├── components/
│   ├── site/              # Landing-page and product-specific sections
│   └── ui/                # shadcn/ui primitives
├── lib/                   # Shared utilities
├── App.tsx                # Page composition layer
├── index.css              # Global tokens, fonts, resets, utilities
├── main.tsx               # React entrypoint
└── vite-env.d.ts          # Vite type declarations
```

## Implementation Notes

- When migrating static markup, recreate it as React components instead of embedding raw HTML strings.
- Match existing spacing, typography, and responsive behavior before changing structure.
- Reuse the established section split under `src/components/site` for future landing-page work.
- Keep `src/App.tsx` focused on composition, not section-level implementation details.
- Extend `src/components/ui` when a shared primitive is needed across sections.

## Hard Rules

- Do not rebuild sections in raw static files when the same work can live in React.
- Do not change the current visual language while restructuring the codebase.
- Do not add an alternative styling approach such as CSS modules, styled-components, or another component library.
- Do not move page-specific section code out of `src/components/site` without a strong structural reason.
