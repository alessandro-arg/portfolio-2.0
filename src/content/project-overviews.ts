import type { ProjectOverview } from "@/types/portfolio";

export const projectOverviews = [
  {
    projectSlug: "homelab-platform",
    context: [
      "Homelab Platform started as a practical replacement for managing internship applications in a spreadsheet. The first goal was intentionally small: build a reliable CRUD application for creating, tracking, updating, and deleting applications while learning Python, FastAPI, API design, validation, testing, and persistent storage.",
      "Instead of stopping once the application worked locally, I used the project to understand the full lifecycle of a self-hosted application. Over several phases, it evolved from an in-memory API into a persistent, containerized platform running on a Raspberry Pi with automated deployment, monitoring, a browser-based frontend, and private remote access.",
    ],
    architecture: [
      "The application runs as a Docker Compose stack on an ARM64 Raspberry Pi. A React and TypeScript frontend is built with Vite and served by an unprivileged Nginx container. Nginx acts as the main application entry point and proxies API requests through the internal Docker network to a FastAPI backend.",
      "FastAPI handles the application API while PostgreSQL provides persistent storage through SQLAlchemy. Alembic manages schema migrations, and a repository abstraction keeps HTTP behavior separate from database-specific logic. Prometheus, Grafana, node_exporter, and cAdvisor provide application, host, and container observability.",
      "Services start in a controlled order: PostgreSQL must become healthy before migrations run, migrations must complete before the backend starts, and the frontend starts only after the backend becomes healthy.",
    ],
    decisions: [
      {
        title: "Separate application logic from persistence",
        description:
          "The API was designed around a repository contract instead of coupling FastAPI endpoints directly to SQLAlchemy or PostgreSQL. The production application uses a PostgreSQL-backed repository, while an in-memory implementation remains available for fast and isolated API tests. This allowed persistent storage to be introduced without changing the existing API behavior.",
      },
      {
        title: "Make container startup deterministic",
        description:
          "Docker Compose health checks and service dependencies establish a predictable startup sequence. PostgreSQL must become healthy, Alembic migrations must finish successfully, the backend must become healthy, and only then is the frontend considered ready.",
      },
      {
        title: "Use a single application entry point",
        description:
          "Browser traffic enters through the frontend Nginx service, which reverse proxies API requests to FastAPI through Docker's internal network. This keeps the backend and database away from normal client access while giving users one application entry point.",
      },
      {
        title: "Deploy only validated commits",
        description:
          "GitHub Actions validates backend tests, PostgreSQL integration tests, the frontend build, and the containerized application before deployment. Successful changes to main are deployed through temporary Tailscale connectivity and OpenSSH, with exact-commit verification and post-deployment health validation.",
      },
      {
        title: "Keep infrastructure private by default",
        description:
          "The platform uses explicit network boundaries rather than exposing every service. Docker Compose separates application, data, monitoring, and test traffic, while FastAPI, PostgreSQL, and Prometheus remain restricted from normal client access. Tailscale provides private remote connectivity without public application ingress.",
      },
    ],
    outcome: [
      "The project progressed through eight completed phases covering backend development, persistent storage, containerization, Raspberry Pi deployment, CI/CD, monitoring, frontend development, and network security.",
      "The resulting platform runs continuously on a Raspberry Pi with persistent PostgreSQL storage, automated migrations, health-checked Docker services, a React frontend, automated testing and deployment, Prometheus and Grafana monitoring, reboot recovery, and private remote access through Tailscale.",
    ],
    lessons: [
      "Good architectural boundaries became easier to identify when they were introduced in response to real requirements instead of being designed prematurely.",
      "Running software reliably involves more than making it work locally; migrations, health checks, persistence, deployment validation, observability, and recovery all became part of the application architecture.",
      "Network security became easier to reason about after explicitly documenting which services should be reachable from containers, the host, the local network, Tailscale, and the public Internet.",
      "Building the project incrementally made it possible to add infrastructure and operational complexity while preserving behavior established in earlier phases.",
    ],
    resources: [
      {
        label: "README",
        href: "https://github.com/alessandro-arg/homelab-platform#readme",
      },
      {
        label: "Architecture",
        href: "https://github.com/alessandro-arg/homelab-platform/blob/main/docs/architecture.md",
      },
      {
        label: "Roadmap",
        href: "https://github.com/alessandro-arg/homelab-platform/blob/main/docs/roadmap.md",
      },
    ],
  },
] satisfies readonly ProjectOverview[];
