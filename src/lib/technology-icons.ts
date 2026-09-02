import type { SimpleIcon } from "simple-icons";
import {
  siAngular,
  siClaude,
  siCoderabbit,
  siDocker,
  siGit,
  siJavascript,
  siLinux,
  siMongodb,
  siMysql,
  siNeovim,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siPostgresql,
  siPython,
  siReact,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
  siFastapi,
  siGrafana,
  siPrometheus,
  siTailscale,
} from "simple-icons";

type TechnologyIconDefinition =
  | {
      type: "simple";
      icon: SimpleIcon;
      monochrome?: boolean;
    }
  | {
      type: "asset";
      src: string;
      monochrome?: boolean;
    };

export const technologyIcons: Record<string, TechnologyIconDefinition> = {
  typescript: {
    type: "simple",
    icon: siTypescript,
  },
  javascript: {
    type: "simple",
    icon: siJavascript,
  },
  python: {
    type: "simple",
    icon: siPython,
  },

  react: {
    type: "simple",
    icon: siReact,
  },
  nextjs: {
    type: "simple",
    icon: siNextdotjs,
    monochrome: true,
  },
  angular: {
    type: "simple",
    icon: siAngular,
    monochrome: true,
  },
  tailwindcss: {
    type: "simple",
    icon: siTailwindcss,
  },
  "shadcn-ui": {
    type: "simple",
    icon: siShadcnui,
    monochrome: true,
  },

  nodejs: {
    type: "simple",
    icon: siNodedotjs,
  },

  postgresql: {
    type: "simple",
    icon: siPostgresql,
  },
  mysql: {
    type: "simple",
    icon: siMysql,
  },
  mongodb: {
    type: "simple",
    icon: siMongodb,
  },

  git: {
    type: "simple",
    icon: siGit,
  },
  npm: {
    type: "simple",
    icon: siNpm,
  },
  docker: {
    type: "simple",
    icon: siDocker,
  },
  vercel: {
    type: "simple",
    icon: siVercel,
    monochrome: true,
  },

  claude: {
    type: "simple",
    icon: siClaude,
  },
  coderabbit: {
    type: "simple",
    icon: siCoderabbit,
  },
  chatgpt: {
    type: "asset",
    src: "/icons/technologies/chatgpt.svg",
    monochrome: true,
  },

  linux: {
    type: "simple",
    icon: siLinux,
  },
  neovim: {
    type: "simple",
    icon: siNeovim,
  },
  vscode: {
    type: "asset",
    src: "/icons/technologies/vscode.svg",
  },
  fastapi: {
    type: "simple",
    icon: siFastapi,
  },
  prometheus: {
    type: "simple",
    icon: siPrometheus,
  },
  grafana: {
    type: "simple",
    icon: siGrafana,
  },
  tailscale: {
    type: "simple",
    icon: siTailscale,
    monochrome: true,
  },
};
