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

Status: **Completed**

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
- [x] Commit, push, and merge content architecture into refactor integration branch

## Phase 4 - Homepage UI

Status: **Completed**

Build the complete homepage from the established design system and typed content architecture.

- [x] Build Hero section
- [x] Build Overview section
- [x] Add social links
- [x] Add cached GitHub contributions graph
- [x] Build expandable featured Projects section
- [x] Build About section
- [x] Build Technology Stack section
- [x] Build Experience section
- [x] Build Certifications section
- [x] Build Testimonials marquee
- [x] Build Contact section
- [x] Build production-style Footer
- [x] Add stable homepage section IDs and shared navigation content
- [x] Add desktop anchor navigation
- [x] Add mobile bottom navigation
- [x] Add global command palette and keyboard shortcut
- [x] Add scroll-to-top control
- [x] Complete desktop, tablet, and mobile responsive QA
- [x] Complete keyboard and focus-navigation QA
- [x] Establish semantic accessibility baseline
- [x] Respect reduced-motion preferences across homepage interactions
- [x] Complete homepage implementation and client-runtime cleanup
- [x] Run final lint and production build

## Phase 5 - Projects & Case Studies

Create dedicated project routes and structured case studies for selected projects.

Case studies should focus on:

- project goals and context
- architecture and technical decisions
- implementation approach
- challenges and solutions
- results and current status
- lessons learned

Only projects that benefit from deeper explanation require a dedicated case-study route.

## Phase 6 - Interaction & Motion

Refine the portfolio's motion language after the core content and project routes are complete.

The homepage already includes the functional interaction baseline:

- theme controls
- command palette
- navigation feedback
- accordion interaction
- mobile navigation
- scroll-to-top behavior

This phase focuses on intentional polish rather than adding animation everywhere.

Potential work includes:

- signature logo interaction
- restrained section entrance transitions
- project/case-study transitions
- interaction timing refinement
- motion consistency review

Motion must continue to respect reduced-motion preferences.

## Phase 7 - Accessibility

Perform the dedicated final accessibility audit.

The homepage already establishes a baseline for semantic structure, keyboard navigation, focus visibility, accessible names, touch targets, and reduced motion.

This phase verifies the complete application, including future project routes, with:

- semantic structure review
- keyboard-only navigation
- focus management
- screen-reader behavior
- color contrast
- touch-target review
- reduced-motion behavior
- automated accessibility tooling where useful

## Phase 8 - SEO & Social Sharing

Implement production SEO and sharing metadata.

- production titles and descriptions
- canonical URLs
- Open Graph metadata
- social preview images
- sitemap
- robots configuration
- appropriate structured data
- project-specific metadata for case-study routes

## Phase 9 - Performance & Quality

Measure and optimize the completed application rather than applying speculative optimizations during feature development.

Review:

- Core Web Vitals
- client JavaScript
- rendering boundaries
- dependency usage
- image delivery
- fonts
- layout stability
- animation cost
- caching and data loading

### Final project asset pass

After the final Portfolio screenshots are available:

- create final Homelab, Coordina, and Portfolio mockups together
- export them as genuine static WebP and/or AVIF assets
- verify that WebP files do not contain unintended animation data
- optimize source file sizes
- remove temporary `unoptimized` / eager-loading workarounds where appropriate
- verify responsive `next/image` sizing
- measure LCP and image loading behavior

Run Lighthouse and production quality checks after the final assets are in place.

## Phase 10 - Production & Deployment

Prepare and release the completed portfolio.

- connect final Vercel production deployment
- configure the production domain
- validate preview and production environments
- perform final responsive checks
- perform final accessibility checks
- perform final performance checks
- validate production metadata and sharing previews
- complete project documentation
- merge the replacement portfolio to `main` only after production-readiness review
