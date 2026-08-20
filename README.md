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

The portfolio is currently under active refactoring.

Current phase:

**Phase 1 - Project Foundation & Next.js Migration**

The previous portfolio implementation remains available through the Git history while the new architecture is developed incrementally.

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

Client Components are introduced only where browser APIs, local state, or interactive behavior require them.

Architecture documentation is maintained in:

- [docs/architecture.md](docs/architecture.md)
- [docs/decisions.md](docs/decisions.md)

## Deployment

The production portfolio will be deployed on Vercel and version-controlled with GitHub.

Deployment configuration will be completed once the application reaches the production phase.
