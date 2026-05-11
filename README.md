<h1>
  Portfolio
</h1>

A modern, performance-focused **developer portfolio** with polished UI, smooth motion, and full internationalization support.
https://alessandro-argenziano.com

##

### ✨ Key Features

| Feature                    | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| **⚡ Next.js + Turbopack** | Fast dev/build workflow and modern App Router architecture.         |
| **🎨 Modern UI System**    | Tailwind CSS v4 + shadcn/ui + Radix UI primitives.                  |
| **🧠 Motion & Effects**    | Framer Motion, GSAP, particles, carousels and micro-interactions.   |
| **🌍 Dev Journal**         | Blog posts with .mdx files.                                         |
| **🌗 Theme Switching**     | Dark/light mode with `next-themes`.                                 |
| **📈 SEO + Analytics**     | SEO metadata with `next-seo` + usage insights via Vercel Analytics. |
| **✉️ Email Delivery**      | Contact flow using Resend + React Email.                            |
| **📦 Data Fetching**       | Client data fetching with SWR where needed.                         |

##

### 🛠 Tech Stack (Complete & Accurate)

#### Core

- **Next.js** `^15.5.7`
- **React** `^19.2.1`
- **TypeScript** `^5`

#### UI / Styling

- **Tailwind CSS** `^4.1.13`
- **shadcn/ui** (`shadcn` `^3.5.0`)
- **Radix UI** (Accordion, Navigation Menu, Separator, Slot, Switch, Tooltip, Icons)
- **class-variance-authority** + **clsx** + **tailwind-merge**
- **tw-animate-css**

#### Animation / Visuals

- **Framer Motion** `^12.23.21` (+ `motion` `^12.23.24`)
- **GSAP** `^3.13.0`
- **tsParticles** (`@tsparticles/react`, `@tsparticles/engine`, `@tsparticles/slim`)
- **Embla Carousel** (`embla-carousel-react`)
- **Cobe** (3D globe)

#### Content / Docs / Code Rendering

- **fumadocs** (`fumadocs-core`, `fumadocs-ui`)
- **Shiki** (syntax highlighting)

#### Internationalization

- **next-intl** `^4.3.9`

#### SEO / Analytics

- **next-seo** `^6.8.0`
- **@vercel/analytics** `^1.5.0`

#### Email

- **Resend** `^6.2.2`
- **React Email** (`@react-email/components`, `@react-email/render`)

#### Utilities / UI Enhancements

- **lucide-react**
- **sonner** (toasts)
- **react-countup**
- **react-type-animation**
- **react-activity-calendar**
- **simple-icons**

#### Data Fetching

- **SWR** `^2.3.6`

#### Tooling

- **ESLint** `^9` + `eslint-config-next`
- **SVGR** (`@svgr/webpack`)
- **PostCSS** + `@tailwindcss/postcss`

##

### 📂 Project Structure

```text
/
├─ app/                 # Next.js App Router pages, layouts, routes
├─ components/          # Reusable UI components (incl. shadcn/ui)
├─ lib/                 # Utilities, helpers, configs (i18n, seo, etc.)
├─ public/              # Static assets (images, icons)
├─ styles/              # Global styles (if applicable)
├─ types/               # Shared TypeScript types
└─ README.md
```
