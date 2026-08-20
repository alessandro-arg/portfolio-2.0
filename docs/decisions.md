# Architectural Decisions

This document records important technical decisions made during the portfolio refactor.

The goal is to preserve the reasoning behind the architecture rather than only documenting the final implementation.

---

## ADR-001 - Rebuild the existing portfolio incrementally

**Decision**

Use the existing GitHub repository while rebuilding the application from a clean foundation on a dedicated refactor branch.

**Reasoning**

The previous implementation remains preserved through Git history while the new architecture can be developed without carrying unnecessary legacy complexity forward.

---

## ADR-002 - Use Next.js App Router

**Decision**

Use Next.js with the App Router as the production application framework.

**Reasoning**

The portfolio benefits from server-first rendering, route-based project case studies, metadata support, static generation, image and font optimization, and direct Vercel integration.

The previous Vite prototype remains useful as a visual reference but is not used as the production architecture.

---

## ADR-003 - Server Components by default

**Decision**

Components remain Server Components unless they require client-side behavior.

**Reasoning**

Most portfolio content is static.

Keeping static sections server-rendered avoids sending unnecessary JavaScript to the browser and creates clearer boundaries between content and interaction.

Client Components will be used for features such as theme controls, interactive animation, command/search interfaces, and browser-event handling.

---

## ADR-004 - Use TypeScript

**Decision**

Use TypeScript throughout the application.

**Reasoning**

Typed interfaces improve refactoring safety, component APIs, content modelling, editor tooling, and maintainability as the portfolio grows.

---

## ADR-005 - Use Tailwind CSS and semantic theme tokens

**Decision**

Use Tailwind CSS as the primary styling system with semantic CSS variables for theme values.

**Reasoning**

Semantic values such as `background`, `foreground`, `border`, and `muted` separate design intent from individual color values and make light/dark theme maintenance easier.

---

## ADR-006 - Use shadcn/ui with Radix

**Decision**

Use shadcn/ui as a component foundation with Radix primitives.

**Reasoning**

shadcn places component source code inside the project rather than hiding implementation inside a dependency.

This provides control over styling and behavior while Radix offers reliable foundations for accessible interactive components.

---

## ADR-007 - Use Motion as the animation library

**Decision**

Use Motion for portfolio animation and interactive motion.

**Reasoning**

The existing visual prototype already uses Motion successfully, including the interactive portfolio logo.

Using one primary animation system reduces unnecessary dependencies and keeps animation behavior consistent.

---

## ADR-008 - Use next-themes for theme state

**Decision**

Use `next-themes` instead of maintaining custom theme persistence logic.

**Reasoning**

Theme state depends on browser preferences, persisted user choice, and DOM class updates.

Keeping this behavior behind a small client-side provider avoids duplicating theme logic throughout the application.

---

## ADR-009 - Use npm

**Decision**

Use npm as the project's package manager.

**Reasoning**

The development environment already uses npm, Next.js and Vercel support it directly, and introducing another package manager would provide little benefit for this project.

---

## ADR-010 - Add dependencies only when required

**Decision**

Avoid recreating the large dependency set from the previous portfolio.

**Reasoning**

Every dependency increases maintenance, security, bundle, and architectural complexity.

New packages should solve a concrete requirement that is not adequately covered by the framework or existing dependencies.

---

## ADR-011 - Maintain documentation alongside implementation

**Decision**

Update documentation throughout development instead of creating it after implementation is finished.

**Reasoning**

Documentation written alongside architectural changes is more likely to remain accurate and preserves the reasoning behind decisions while they are still fresh.

---

## ADR-012 - Deploy with Vercel

**Decision**

Use Vercel as the production deployment platform.

**Reasoning**

The application is built with Next.js and Vercel provides direct framework integration, Git-based deployment workflows, preview deployments, and production hosting without requiring custom server infrastructure.
