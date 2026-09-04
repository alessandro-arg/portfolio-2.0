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

Status: **Completed**

Add concise internal engineering overviews for selected projects without introducing a documentation framework or duplicating repository documentation.

- [x] Define the `ProjectOverview` content contract
- [x] Use optional project slugs as the routing signal for internal overviews
- [x] Add statically generated `/projects/[slug]` routes
- [x] Disable unknown dynamic project routes
- [x] Build the shared project overview renderer
- [x] Add Homelab Platform engineering overview
- [x] Add Coordina engineering overview
- [x] Keep shared project metadata separate from overview content
- [x] Reuse project technologies, repository links, live links, and imagery
- [x] Add project-specific context headings
- [x] Add project overview navigation to the homepage
- [x] Add project overviews to the global command palette
- [x] Keep Portfolio without a dedicated overview
- [x] Add a theme-aware not-found page for invalid routes
- [x] Complete responsive and navigation QA
- [x] Run final lint and production build

## Phase 6 - Interaction & Motion

Status: **Completed**

Refine the portfolio's motion language with focused interaction feedback while avoiding decorative animation that does not improve the experience.

- [x] Add interactive SpotlightLogo with local pointer tracking
- [x] Add tactile press feedback and optional click sound
- [x] Respect reduced-motion preferences in the SpotlightLogo
- [x] Add rotating hero sentences with a reduced-motion fallback
- [x] Add theme-aware hero profile imagery
- [x] Add desktop-only handwritten interaction annotations
- [x] Keep cursor-specific guidance limited to fine-pointer devices
- [x] Standardize external CTA arrow interactions
- [x] Review accordion, dialog, popover, tooltip, and navigation motion
- [x] Provide reduced-motion behavior for continuous and spatial animations
- [x] Move spinner reduced-motion behavior into the shared primitive
- [x] Verify testimonial marquee reduced-motion behavior
- [x] Verify scroll-to-top reduced-motion behavior
- [x] Complete application-wide motion audit
- [x] Complete desktop, mobile, light, dark, keyboard, and reduced-motion QA
- [x] Deliberately skip generic section entrance animations
- [x] Deliberately skip route-transition animations
- [x] Run final lint and production build

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
