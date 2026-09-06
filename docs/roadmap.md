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

Status: **Completed**

Perform a dedicated accessibility review covering semantic structure,
keyboard navigation, focus behavior, screen-reader support, contrast,
touch targets, reduced motion, and reflow.

- [x] Review document landmarks and heading hierarchy
- [x] Add skip navigation
- [x] Review accessible names and native element semantics
- [x] Expose theme-toggle state
- [x] Review keyboard navigation and focus order
- [x] Restore focus correctly after command-palette dismissal
- [x] Improve scroll-to-top focus behavior
- [x] Remove redundant contribution-graph navigation
- [x] Review dynamic content with NVDA
- [x] Keep copy-email feedback in a polite live region
- [x] Focus destination headings after command navigation
- [x] Review light and dark theme contrast
- [x] Review touch-target sizing and spacing
- [x] Verify 200% and 400% zoom/reflow
- [x] Constrain command-palette height for short viewports
- [x] Verify reduced-motion behavior
- [x] Run Lighthouse accessibility audits on homepage and project routes
- [x] Resolve identical-link-purpose warning
- [x] Run final lint and production build

## Phase 8 - SEO & Social Sharing

Status: **Completed**

Implement production SEO and sharing metadata while preserving the existing
production domain history and keeping metadata derived from canonical portfolio
content where practical.

- [x] Preserve `https://www.alessandro-argenziano.com` as the canonical production origin
- [x] Add global metadata title template and production description
- [x] Add canonical homepage metadata
- [x] Add project-specific titles, descriptions, canonical URLs, Open Graph metadata, and Twitter metadata
- [x] Add `sitemap.ts` for the real indexable V2 routes
- [x] Add `robots.ts` referencing the canonical sitemap
- [x] Inventory legacy V1 routes before defining redirects
- [x] Add permanent redirects only where a genuine V2 replacement exists
- [x] Allow intentionally removed legacy content to resolve as not found
- [x] Add generated Open Graph preview images for the homepage and project routes
- [x] Add matching Twitter large-image previews
- [x] Add homepage `Person` and `WebSite` JSON-LD structured data
- [x] Keep project structured data intentionally omitted where it adds little value
- [x] Validate rendered titles, descriptions, canonical URLs, Open Graph metadata, and Twitter metadata
- [x] Validate sitemap and robots output
- [x] Validate legacy 308 redirects and intentional 404 responses
- [x] Run Lighthouse SEO audits on homepage and both project routes
- [x] Achieve Lighthouse SEO score of 100 on all indexable routes
- [x] Run final lint and production build

## Phase 9 - Performance & Quality

Status: **Completed**

Measure and optimize the completed application rather than applying speculative optimizations during feature development.

- [x] Establish clean production Lighthouse baselines
- [x] Review Core Web Vitals across homepage and project routes
- [x] Audit client JavaScript and route-specific bundles
- [x] Review Server and Client Component boundaries
- [x] Audit dependency usage and duplicate package versions
- [x] Replace final project mockups with optimized static WebP assets
- [x] Verify project assets contain no unintended animation data
- [x] Review responsive image sizing and LCP fetch priority
- [x] Remove temporary image-loading workarounds
- [x] Audit application fonts and defer the decorative Kalam preload
- [x] Verify layout stability across indexable routes
- [x] Review non-composited animations
- [x] Narrow broad interactive transitions
- [x] Review contribution-data caching and failure behavior
- [x] Replace `unstable_cache` wrapping with Next.js fetch revalidation
- [x] Run final mobile Lighthouse regression checks
- [x] Run final lint and production build

## Phase 10 - Production & Deployment

Status: **Completed**

Release and validate the completed portfolio in production.

- [x] Review production-readiness configuration
- [x] Align the production Node.js runtime with Node.js 24
- [x] Validate the Vercel Preview deployment
- [x] Complete final responsive regression checks
- [x] Complete final accessibility regression checks
- [x] Complete final production-readiness performance checks
- [x] Verify production metadata, canonical URLs, sitemap, robots, and social preview images
- [x] Preserve the previous portfolio locally and through Git history
- [x] Review repository history for exposed secrets before making the repository public
- [x] Make the GitHub repository public
- [x] Merge Portfolio V2 into `main`
- [x] Deploy the replacement portfolio to Vercel production
- [x] Verify the canonical `www.alessandro-argenziano.com` production domain
- [x] Verify the apex-domain redirect to the canonical `www` origin
- [x] Complete production smoke testing
- [x] Confirm production pages are indexable and contain no `noindex` response directive
- [x] Verify the production sitemap contains the three canonical V2 routes
- [x] Verify intentional legacy redirects and removed-route 404 behavior
- [x] Validate the production property in Google Search Console
- [x] Submit the updated sitemap to Google Search Console
- [x] Run live URL inspection for the homepage and both project routes
- [x] Request indexing for the updated homepage and new project routes
- [x] Run final public mobile Lighthouse audits
- [x] Achieve Lighthouse Accessibility, Best Practices, and SEO scores of 100 on all three indexable routes
- [x] Achieve final Lighthouse Performance scores of 92 on the homepage and 98 on both project routes
- [x] Remove obsolete Portfolio V1 environment variables from Vercel
- [x] Clean obsolete local and remote development branches
- [x] Refresh the public repository README
- [x] Complete production documentation
