<p align="center">
  <img alt="header" src="https://shieldcn.dev/header/surface.svg?title=Portfolio&amp;subtitle=A+production-focused+dev+portfolio+built+around+accessibility%2C+performance+and+clean+architecture.&amp;logo=https%3A%2F%2Fwww.alessandro-argenziano.com%2Ficons%2Ficon0.svg&amp;mode=dark&amp;font=geist" />
</p>

<p align="center">
  <img alt="Custom badge" src="https://shieldcn.dev/badge/Production.svg?variant=outline&amp;font=geist" />
  <img alt="badge" src="https://shieldcn.dev/badge/Next.js_16.svg?variant=outline&amp;font=geist&amp;logo=nextdotjs&amp;labelColor=1&amp;valueColor=1&amp;labelTextColor=1&amp;labelOpacity=1" />
  <img alt="Custom badge" src="https://shieldcn.dev/badge/Vercel.svg?variant=outline&amp;font=geist&amp;logo=vercel" />
  <a href="https://github.com/alessandro-arg/portfolio"><img alt="license" src="https://shieldcn.dev/github/alessandro-arg/portfolio/license.svg?variant=outline&amp;font=geist" /></a>
</p>

<p align="center">
  <a href="https://www.alessandro-argenziano.com" ><strong>/LIVE PORTFOLIO</strong></a>
</p>

## Overview

My personal developer portfolio, rebuilt as a production-focused Next.js application.

The project is designed to demonstrate more than visual frontend work. It focuses on the engineering details around a modern web application: clean architecture, accessibility, performance, SEO, responsive behavior, deployment, and production validation.

The portfolio includes a responsive homepage, internal engineering overviews for selected projects, keyboard-accessible navigation, light and dark themes, reduced-motion support, generated social previews, and production search metadata.

## Highlights

- Server Components by default with narrow Client Component boundaries
- Typed content architecture separated from presentation
- Statically generated project overview routes
- Keyboard-accessible navigation and command palette
- Explicit focus management and screen-reader considerations
- Reduced-motion alternatives for continuous and spatial animation
- Responsive layouts tested through 400% browser zoom
- Generated Open Graph and Twitter preview images
- Canonical metadata, sitemap, robots configuration, and structured data
- Production deployment and validation through Vercel and Google Search Console

## Tech Stack

| Area        | Technologies                |
| ----------- | --------------------------- |
| Framework   | Next.js 16, React 19        |
| Language    | TypeScript                  |
| Styling     | Tailwind CSS 4              |
| UI          | shadcn/ui, Radix UI, Lucide |
| Interaction | Motion, cmdk                |
| Theme       | next-themes                 |
| Runtime     | Node.js 24                  |
| Deployment  | Vercel                      |

## Architecture

The application uses the Next.js App Router with Server Components as the default rendering model.

Static portfolio data is kept in typed content modules under `src/content`, while presentation, interactive behavior, and route-level concerns remain separated by responsibility.

```text
src/
├── app/          # routes, metadata, sitemap, robots
├── components/   # layout, sections, UI and interaction
├── content/      # typed portfolio content
├── lib/          # shared utilities and data access
└── types/        # portfolio contracts
```

Projects with internal engineering overviews are statically generated from known slugs. Unknown project routes resolve as not found instead of being generated dynamically.

See [docs/architecture.md](https://github.com/alessandro-arg/portfolio/blob/main/docs/architecture.md) for the complete architecture.

## Accessibility

Accessibility was treated as part of the application architecture rather than as a final audit step.

The portfolio includes:

- skip navigation
- visible keyboard focus states
- semantic landmarks and heading structure
- accessible names and state announcements
- explicit focus restoration and destination focus
- screen-reader friendly dynamic content
- reduced-motion behavior
- touch-target and contrast review
- 200% and 400% zoom/reflow validation

The homepage and both project routes achieved a Lighthouse Accessibility score of 100 in the final production audit.

## Performance & SEO

Final mobile Lighthouse results on the public production deployment:

| Route            | Performance | Accessibility | Best Practices | SEO |
| ---------------- | ----------- | ------------- | -------------- | --- |
| Homepage         | 92          | 100           | 100            | 100 |
| Homelab Platform | 98          | 100           | 100            | 100 |
| Coordina         | 98          | 100           | 100            | 100 |

The final homepage run recorded:

- FCP: 1.2 s
- LCP: 2.9 s
- TBT: 210 ms
- CLS: 0

Both project routes recorded:

- FCP: 0.9 s
- LCP: 2.5 s
- TBT: 60 ms
- CLS: 0

Production SEO includes canonical URLs, generated Open Graph and Twitter images, structured data, a sitemap containing the three canonical V2 routes, and crawl configuration through robots.txt.

## Development

Requirements:

```text
Node.js 24.x
npm
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deployment

The portfolio is deployed on Vercel and served from:

[www.alessandro-argenziano.com](https://www.alessandro-argenziano.com)

Production deployment uses the `main` branch.

The canonical domain, redirects, metadata, sitemap, robots configuration, Search Console integration, and public Lighthouse results were verified after the V2 production launch.

## Documentation

Additional project documentation:

- [docs/roadmap.md](https://github.com/alessandro-arg/portfolio/blob/main/docs/roadmap.md) - incremental project phases
- [docs/architecture.md](https://github.com/alessandro-arg/portfolio/blob/main/docs/architecture.md) - application architecture
- [docs/decisions.md](https://github.com/alessandro-arg/portfolio/blob/main/docs/decisions.md) - important technical decisions

## License

This project is licensed under the [MIT License](https://github.com/alessandro-arg/portfolio/blob/main/LICENSE).
