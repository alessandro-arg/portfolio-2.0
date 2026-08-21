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

## Typography

Geist Sans is the primary typeface for content, interface elements, and headings.

Geist Mono is available for limited technical details and metadata.

Typography should establish hierarchy through scale, spacing, and moderate weight rather than relying on excessive bold text or widespread uppercase styling.

## Color System

The portfolio uses a primarily neutral semantic color system.

Components should reference design roles such as `background`, `foreground`, `surface`, `muted`, and `border` rather than depending directly on fixed neutral palette values.

Light and dark themes intentionally avoid absolute white and black backgrounds to reduce visual harshness.

Accent colors are introduced only when they communicate a meaningful state or hierarchy.

## Layout

Page content uses a shared centered container rather than defining independent widths in individual sections.

The current layout foundation uses a maximum page width with responsive horizontal padding.

Section-specific components remain responsible for their own vertical rhythm and semantic structure, while the shared page container controls horizontal alignment.

The current portfolio frame uses a maximum width of `48rem`, carried forward from the visual prototype.

## Structural Frame

The portfolio uses a centered structural frame with persistent vertical rails and section-level horizontal separators.

The page frame is separate from the page container:

- the page frame controls structural rails
- the page container controls content width and horizontal padding
- individual sections control their own semantic structure and vertical spacing

Borders and whitespace are preferred over heavy shadows or excessive card containers for visual separation.

Surfaces are used deliberately:

- `background` represents the main page environment
- `surface` represents subtly differentiated content areas
- `surface-elevated` is reserved primarily for floating or elevated interface elements

Horizontal section rules intentionally extend beyond the centered frame to the viewport edges while section content remains constrained to the portfolio frame.

Decorative overflow created by these structural rules is clipped at the page shell. This clipping is intentional and should not be used to conceal accidental component overflow.

Diagonal stripe dividers may be used between major content groups as part of the portfolio's established visual language.

Stripe dividers own their full-width top and bottom boundaries.

Sections directly adjacent to a stripe divider do not duplicate those boundaries. This prevents overlapping one-pixel rules from producing visually stronger lines inside the centered frame.

## Interaction Accessibility

Interactive elements must remain usable with keyboard navigation.

A visible `focus-visible` treatment is provided globally for native focusable elements. Components may provide their own equivalent focus treatment when their interaction design requires it.

Native semantic elements are preferred over recreating controls with generic elements:

- links represent navigation
- buttons represent actions
- form controls use their corresponding native elements

Hover states must not be the only indication that an element is interactive.

Accessibility is treated as part of component implementation rather than a final styling pass.

## Responsive Design

The interface is designed mobile-first.

Base styles target narrow viewports, with larger breakpoint variants introduced only when content or layout requires additional space.

The project uses Tailwind CSS default breakpoints rather than maintaining custom device-specific breakpoints.

Responsive behavior should be driven by component content and available space rather than assumptions about specific phones, tablets, or desktop devices.

Arbitrary breakpoints should be avoided unless a component has a concrete layout requirement that cannot be expressed clearly with the shared breakpoint system.

## Theme

`next-themes` manages persisted light, dark, and system theme preferences.

Theme-specific browser behavior is isolated inside a Client Component provider instead of making the complete application client-rendered.

## Animation

Motion is the primary animation library.

Animation should support hierarchy, feedback, and interaction rather than act as decoration by default.

Reduced-motion preferences must be respected.

## Motion

Motion is used selectively for interaction feedback, content transitions, and signature interactive elements.

Animation is not treated as a default decoration layer.

General principles:

- interaction feedback should be short and responsive
- large spatial transforms should be used sparingly
- springs are primarily reserved for physical-feeling interactions
- simple appearance transitions generally prefer restrained tween or opacity animation
- reduced-motion preferences must be respected
- animation must not be required to understand or operate the interface

A root Motion configuration respects the user's reduced-motion preference by default. Individual interactive components may use `useReducedMotion()` when they require more specific fallback behavior.

## Application Shell

Global page geometry is owned by a shared application shell.

The shell is responsible for:

- clipping intentional decorative horizontal overflow
- rendering the sticky site header
- aligning the header and page content to the same `48rem` frame
- maintaining persistent vertical rails
- providing the main structural page container

Route components remain responsible for composing page-specific sections and content.

The header initially contains only functional shell controls. Navigation and command-search controls are added when their destination sections and interaction behavior exist.

The root application layout renders the shared `SiteShell`, so global frame geometry and navigation remain consistent across routes.

Individual route components compose only their route-specific content inside that shell.

## Content

Portfolio content will eventually be separated from presentation components.

Typed content modules will hold project information, profile details, technologies, and social links rather than embedding large content objects directly inside UI components.

## Deployment

GitHub is the source-control platform.

Vercel is the planned production hosting platform.

Production deployment configuration will be introduced in the deployment phase.
