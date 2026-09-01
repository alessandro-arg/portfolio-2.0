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

**Phase 4 - Homepage UI**

The homepage now includes the complete responsive content experience, shared navigation, command palette, theme support, GitHub contributions, featured projects, experience, certifications, testimonials, contact information, footer, keyboard-accessibility baseline, reduced-motion behavior, and initial runtime/performance cleanup.

Next:

**Phase 5 - Projects & Case Studies**

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
