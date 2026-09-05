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

---

## ADR-013 - Keep main production-safe during the refactor

**Rule**

`main` continues to serve the existing production portfolio. New portfolio development is integrated into `refactor/portfolio-v2`. Feature pull requests target the refactor branch. The refactor is merged to `main` only after the replacement portfolio passes final design, responsive, accessibility, performance, and production-readiness reviews.

---

## ADR-014 - Use Geist as the primary typography system

**Decision**

Use Geist Sans as the primary application font and Geist Mono for limited technical accents.

**Reasoning**

Geist provides a clean and neutral visual foundation that fits the portfolio's technical design direction without becoming the visual identity itself.

The sans-serif typeface is used for general interface and content typography, while the monospace variant is reserved for technical metadata, shortcuts, code-like details, and similar accents.

Fonts are loaded through Next.js font optimization rather than external runtime stylesheet requests.

---

## ADR-015 - Use a neutral semantic color system

**Decision**

Use a primarily neutral color palette expressed through semantic design tokens.

**Reasoning**

The portfolio's visual identity should come primarily from typography, structure, spacing, imagery, and interaction rather than a dominant brand color.

Semantic tokens such as `background`, `surface`, `foreground`, `muted`, and `border` describe interface roles instead of fixed colors, allowing light and dark themes to evolve without changing component-level styling.

---

## ADR-016 - Use a shared page container

**Decision**

Use a shared layout component to control maximum content width and responsive horizontal page padding.

**Reasoning**

Major portfolio sections should align to the same structural frame.

Centralizing horizontal layout rules avoids duplicated width and padding values across sections while keeping the component focused on one responsibility.

---

## ADR-017 - Use lines and spacing as the primary structural language

**Decision**

Use thin semantic borders, structural rails, and whitespace as the primary means of separating portfolio content.

**Reasoning**

The portfolio is intended to have a precise, technical visual character rather than a card-heavy application aesthetic.

Persistent rails and section separators establish alignment and hierarchy while keeping the layout visually lightweight.

Shadows, rounded surfaces, and elevated containers should be introduced only when they communicate a meaningful UI relationship.

This structural language is carried forward from the portfolio prototype and treated as a core visual constraint of the refactor.

---

## ADR-018 - Use a mobile-first responsive strategy

**Decision**

Use Tailwind CSS default breakpoints with mobile-first component styling.

**Reasoning**

Starting with the narrowest layout encourages components to work under constrained space before additional layout complexity is introduced.

Using the shared Tailwind breakpoint system keeps responsive behavior consistent across the application and avoids device-specific media queries that are difficult to maintain.

Custom or arbitrary breakpoints should be introduced only when a concrete component requirement justifies them.

---

## ADR-019 - Establish keyboard focus behavior at the design-system level

**Decision**

Provide a visible global `focus-visible` treatment and require interactive components to preserve an equivalent keyboard-focus indicator.

**Reasoning**

Keyboard accessibility should be part of the interface foundation rather than added after components are complete.

Providing a shared baseline gives native interactive elements sensible behavior automatically while still allowing complex components to implement appropriate component-specific focus states.

---

## ADR-020 - Treat motion as interaction rather than decoration

**Decision**

Use Motion selectively for interaction feedback and signature interface behavior while respecting the user's reduced-motion preference throughout the application.

Do not introduce generic section entrance animations or route transitions unless a future interaction requirement clearly justifies them.

**Reasoning**

Motion contributes to the portfolio's identity most effectively when it explains or reinforces interaction.

Examples include the pointer-responsive SpotlightLogo, tactile press feedback, rotating hero copy, accordion behavior, scroll feedback, external-link arrows, and the testimonial marquee.

Applying animation uniformly to sections or route changes would increase distraction and client-side complexity without improving the information architecture.

Reduced-motion behavior is therefore treated as part of each interaction's design rather than as a final override.

The application provides a global Motion reduced-motion policy while individual components and shared UI primitives provide more specific fallbacks where required.

Continuous or spatial movement must never be required to understand or operate the interface.

---

## ADR-021 - Separate the application shell from route content

**Decision**

Use a shared site shell for global frame geometry, the sticky header, and page-wide structural behavior.

**Reasoning**

The portfolio prototype relies on a single visual coordinate system where the header and page content share the same centered rails.

Keeping that geometry in the application shell preserves the prototype's visual language while preventing individual routes from duplicating global layout responsibilities.

Interactive header features are introduced only when they provide working behavior rather than appearing as non-functional placeholders.

---

## ADR-022 - Separate portfolio content from presentation

**Decision**

Store profile, project, and technology information in typed content modules rather than embedding portfolio data directly inside UI components.

**Reasoning**

Portfolio content changes independently from component structure and styling.

Keeping content in dedicated modules makes presentation components smaller, improves reuse across homepage sections and project routes, and allows TypeScript to validate the shape of portfolio data without coupling that data to a specific interface implementation.

---

## ADR-023 - Separate Stack technologies from project-only technologies

**Decision**

Use one shared `Technology` contract while maintaining separate `stackTechnologies` and `projectTechnologies` registries.

Expose a combined `technologies` registry for components that need to resolve technology IDs from either source.

**Reasoning**

Using a technology in a project does not necessarily mean it should be presented as part of the developer's primary Stack.

Separating the registries allows project descriptions to remain technically accurate without overstating individual technologies as core skills.

A shared contract and combined lookup avoid duplicating names, URLs, and technology metadata while allowing the Stack and Projects interfaces to present the same technology differently.

---

## ADR-024 - Use optional project slugs for project overviews

**Decision**

Make the project `slug` optional.

The presence of a slug indicates that the project has a valid internal overview route under `/projects/[slug]`.

Projects without a slug remain valid portfolio entries without requiring a dedicated overview.

**Reasoning**

Not every portfolio project benefits from a dedicated engineering overview.

Using the optional slug as the routing signal avoids maintaining a second boolean such as `hasCaseStudy` or duplicating route information in the project model.

This establishes one clear invariant: if a project has a slug, its internal project overview must resolve.

The overview content remains separate from shared project metadata so information such as title, year, technologies, repository URLs, live URLs, and imagery does not need to be duplicated.

---

## ADR-025 - Keep the command palette non-modal

**Decision**

Use the global command palette as a non-modal Radix dialog.

Keep the underlying portfolio visible and scrollable while the palette is open instead of using Radix's default modal behavior.

**Reasoning**

The command palette is intended as a lightweight command surface rather than a blocking application dialog.

Modal behavior would make the underlying document inert, lock page scrolling, and introduce scrollbar compensation while the palette is open.

That behavior conflicts with the intended interaction, where users can continue to visually inspect and scroll the portfolio behind the palette without causing layout shifts.

Using `modal={false}` preserves that interaction model while the command interface still provides:

- immediate focus on the command search input
- arrow-key navigation through commands
- active-command announcements through `cmdk` combobox semantics
- Escape and keyboard-shortcut dismissal
- restoration of the previously focused element after dismissal
- suppression of stale focus restoration during navigation
- programmatic focus of destination section headings after homepage navigation
- viewport-constrained result scrolling at high zoom or short viewport heights

The visual backdrop remains a presentation treatment and does not imply modal semantics.

If the interaction model changes in the future so that the underlying document should become unavailable while the palette is open, the dialog behavior should be reconsidered rather than overriding modal scroll-lock behavior with custom CSS.
