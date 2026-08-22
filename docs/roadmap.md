# Portfolio Roadmap

The portfolio is developed incrementally so architecture, design, accessibility, performance, and content decisions can be reviewed independently.

## Phase 1 - Project Foundation & Next.js Migration

Status: **Completed**

- [x] Preserve previous portfolio through Git history
- [x] Create dedicated refactor branch
- [x] Establish clean Next.js App Router baseline
- [x] Configure TypeScript
- [x] Configure Tailwind CSS
- [x] Configure ESLint
- [x] Use `src/` application structure
- [x] Initialize shadcn/ui with Radix
- [x] Add Motion
- [x] Add next-themes
- [x] Establish theme provider boundary
- [x] Replace generated demo homepage
- [x] Remove generated demo assets
- [x] Establish project documentation
- [x] Review foundation architecture
- [x] Run final lint and production build
- [x] Commit and push foundation to refactor integration branch

## Phase 2 - Design System & Application Shell

Status: **Completed**

- [x] Establish Geist typography system
- [x] Define neutral semantic light and dark themes
- [x] Define shared spacing and `48rem` page frame
- [x] Establish structural rails and viewport-wide horizontal rules
- [x] Add reusable stripe dividers
- [x] Define mobile-first responsive rules
- [x] Establish keyboard focus and accessibility baseline
- [x] Establish reduced-motion behavior
- [x] Create shared application shell
- [x] Add sticky site header
- [x] Add working theme control
- [x] Add portfolio branding and metadata icons
- [x] Add web app manifest
- [x] Verify light and dark themes
- [x] Run lint and production build

## Phase 3 - Content Architecture

Status: **In Progress**

Separate portfolio content from presentation and establish typed, reusable data models for the homepage and future case studies.

- [x] Define profile content contract
- [x] Separate profile and contact content from presentation
- [x] Define project content contract
- [x] Add featured project content
- [x] Use optional project slugs for selective case-study routing
- [x] Reference project technologies through stable IDs
- [x] Define semantic technology categories
- [x] Create recruiter-facing Stack technology registry
- [x] Create separate project-only technology registry
- [x] Create combined technology lookup
- [x] Define Stack presentation groups
- [x] Document content architecture decisions
- [x] Run final lint and production build
- [ ] Commit and push foundation to refactor integration branch

## Phase 4 - Homepage UI

Build the main portfolio sections incrementally:

Header, Hero, Overview, Projects, About, Technology Stack, Contact, and Footer.

Each section will be reviewed for responsive behavior and accessibility while it is implemented.

## Phase 5 - Projects & Case Studies

Create dedicated project routes and structured case studies covering project goals, architecture, technical decisions, challenges, results, and lessons learned.

## Phase 6 - Interaction & Motion

Add intentional interaction and animation including the interactive logo, theme controls, command/search interface, navigation feedback, and restrained section transitions.

Motion must respect reduced-motion preferences.

## Phase 7 - Accessibility

Perform a dedicated accessibility review covering semantic structure, keyboard navigation, focus behavior, screen-reader support, contrast, touch targets, and reduced motion.

## Phase 8 - SEO & Social Sharing

Implement production metadata, title templates, descriptions, canonical URLs, Open Graph data, social previews, sitemap, robots configuration, and appropriate structured data.

## Phase 9 - Performance & Quality

Measure and optimize Core Web Vitals, client JavaScript, images, fonts, rendering boundaries, animations, layout stability, and dependency usage.

Run Lighthouse and production quality checks.

## Phase 10 - Production & Deployment

Connect the final application to Vercel, configure the production domain, validate production and preview deployments, perform final responsive/accessibility/performance checks, and complete project documentation.
