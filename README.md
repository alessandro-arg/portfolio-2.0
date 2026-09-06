# Portfolio

Personal developer portfolio built as a production-focused Next.js application.

The project is being rebuilt from an earlier portfolio implementation with a stronger focus on maintainability, performance, accessibility, SEO, clean architecture, and polished UI/UX.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Radix UI
- Motion
- next-themes
- Lucide
- npm

## Project Status

The portfolio is being rebuilt incrementally from an earlier implementation.

Completed through:

**Phase 9 - Performance & Quality**

The replacement application now includes the complete responsive homepage, statically generated engineering overviews for selected projects, accessible navigation and command interfaces, light and dark themes, focused interaction motion, production SEO and social-sharing metadata, and optimized project assets.

Dedicated accessibility, SEO, and performance reviews have been completed across the homepage and project routes. Performance work included image optimization, client JavaScript and rendering-boundary analysis, font loading improvements, dependency review, animation-cost review, layout-stability checks, and contribution-data caching improvements.

Next:

**Phase 10 - Production & Deployment**

The final phase will deploy and validate the replacement portfolio in production, configure the canonical domain, verify real deployment behavior and sharing previews, perform final responsive, accessibility, and performance checks, and merge the replacement portfolio to `main` only after the production-readiness review.

The previous production portfolio remains preserved while the replacement application continues to be developed and reviewed before it is merged to `main`.

See [docs/roadmap.md](docs/roadmap.md) for the full project roadmap.

## Development

Install dependencies:

    npm install

Start the development server:

    npm run dev

Run linting:

    npm run lint

Create a production build:

    npm run build

## Architecture

The application uses the Next.js App Router with Server Components by default.

Static portfolio content is separated from presentation through typed content modules. Client Components are introduced only where browser APIs, local state, event handling, theme behavior, or interactive UI require them.

The homepage is composed from dedicated section components inside a shared application shell.

Architecture documentation is maintained in:

- [docs/architecture.md](docs/architecture.md)
- [docs/decisions.md](docs/decisions.md)

## Deployment

The production portfolio will be deployed on Vercel and version-controlled with GitHub.

Deployment configuration will be completed once the application reaches the production phase.
