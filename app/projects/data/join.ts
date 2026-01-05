import type { Project } from "../types";

export const join: Project = {
  title: "Join",
  smallDescription:
    "Kanban-style project board for visual task management and collaboration.",
  description:
    "Join is a task manager built with vanilla JavaScript, HTML, and CSS. It provides a drag-and-drop Kanban board where tasks move between different stages. Each task can have details such as description, due date, priority, category, and assigned contacts. The app was created as a team project and focuses on solid fundamentals.",
  src: "/images/join_mockup.webp",
  href: "/projects/join",
  liveLink: "https://join.alessandro-argenziano.com",
  slug: "join",
  github: "https://github.com/alessandro-arg/join",
  technologies: ["js", "sass", "firebase"],
  techDesc: [
    {
      name: "JavaScript",
      description:
        "- Vanilla JS powers the entire app: drag-and-drop interactions, task creation flows, board filtering, and state handling without a framework.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      description:
        "- Semantic multi-page structure for login, board, add-task, contacts, summary, and help views, forming the backbone of the UI.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      description:
        "- Custom styling for the Kanban board, modals, responsive layout, and hover/focus states, giving the app a polished, app-like feel.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Firebase",
      description:
        "- Backend for persisting tasks, users, and board data with real-time syncing between clients.",
      link: "https://firebase.google.com/",
    },
  ],
  year: "2024",
  date: "2024-01-15",
  points: [
    {
      title: "Drag-and-Drop Kanban Board",
      description:
        "Move tasks between stages like To Do, In Progress, Feedback, and Done using an intuitive drag-and-drop interface.",
    },
    {
      title: "Rich Task Details",
      description:
        "Add descriptions, due dates, priorities, categories, and assigned contacts so every task carries the context it needs.",
    },
    {
      title: "Contact Management",
      description:
        "Maintain a list of contacts and assign them to tasks to clarify responsibility and ownership across the board.",
    },
    {
      title: "Multi-Page App Structure",
      description:
        "Dedicated views for creating tasks, viewing the board, managing contacts, reading a summary dashboard, and accessing help/legal pages.",
    },
    {
      title: "Responsive Layout & Keyboard-Friendly UX",
      description:
        "Custom CSS layout that works across screen sizes, with clear focus states and accessible interactions for everyday use.",
    },
  ],
  theme: {
    angle: 10,
    stops: [
      { color: "#1F2937", at: "25%" },
      { color: "#2B3647", at: "55%" },
      { color: "#3A475C", at: "90%" },
      { color: "#4B5A73", at: "115%" },
    ],
    primary: "#2B3647",
  },
  calloutTitle: "🧩 Visual Kanban board for organizing tasks and workflows",
  calloutDescription:
    "Join lets you create tasks, assign them to contacts, and drag them across a Kanban board, so you always see what's pending, in progress, and done at a glance.",
  learnings: [
    "Modeling tasks, statuses, categories, and contacts upfront makes later features like filtering and searching much easier to implement.",
    "Implementing drag-and-drop with the native HTML5 API requires careful handling of indices, drop zones, and visual feedback states.",
    "Keeping a single source of truth for task state and re-rendering from that state avoids subtle DOM desync bugs.",
    "Splitting logic into smaller script modules (board, add-task, contacts, summary) keeps a growing vanilla JS codebase maintainable.",
    "Working in a 5-person team reinforced the importance of Git workflows, consistent coding conventions, and clear UI/UX decisions.",
  ],
};
