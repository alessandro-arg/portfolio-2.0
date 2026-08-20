# Architecture

## Overview

The portfolio is a Next.js application using the App Router, React, TypeScript, Tailwind CSS, shadcn/ui, and Motion.

The architecture intentionally starts small and expands only when application requirements justify additional abstractions.

## Current Structure

    src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    ├── components/
    │   ├── providers/
    │   │   └── theme-provider.tsx
    │   └── ui/
    │       └── button.tsx
    │
    └── lib/
        └── utils.ts

Additional directories will be introduced when their first real responsibility appears.

## Rendering Strategy

Server Components are the default.

Client Components are used only when a component requires functionality such as:

- browser APIs
- interactive state
- event listeners
- theme interaction
- pointer interaction
- client-side animation

This keeps unnecessary client-side JavaScript out of static portfolio content.

## Application Router

`src/app` owns routing and route-level concerns.

`layout.tsx` owns global application concerns including:

- HTML document structure
- global fonts
- metadata defaults
- application providers
- global styles

`page.tsx` should remain primarily responsible for composing the homepage rather than containing the complete implementation of every section.

## Components

Reusable components will be grouped by responsibility as the application grows.

Expected categories include:

    components/
    ├── ui/
    ├── providers/
    ├── layout/
    ├── sections/
    └── interactive/

Directories are created only when they contain real implementation.

## Styling

Tailwind CSS is the primary styling system.

shadcn/ui provides accessible component foundations while keeping component source code inside this repository.

Semantic CSS variables such as `background`, `foreground`, `muted`, `border`, and `primary` form the base of the theme system.

Detailed visual decisions will be defined during the design-system phase.

## Theme

`next-themes` manages persisted light, dark, and system theme preferences.

Theme-specific browser behavior is isolated inside a Client Component provider instead of making the complete application client-rendered.

## Animation

Motion is the primary animation library.

Animation should support hierarchy, feedback, and interaction rather than act as decoration by default.

Reduced-motion preferences must be respected.

## Content

Portfolio content will eventually be separated from presentation components.

Typed content modules will hold project information, profile details, technologies, and social links rather than embedding large content objects directly inside UI components.

## Deployment

GitHub is the source-control platform.

Vercel is the planned production hosting platform.

Production deployment configuration will be introduced in the deployment phase.
