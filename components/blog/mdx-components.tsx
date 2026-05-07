type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  caption?: string;
};

type PreProps = React.HTMLAttributes<HTMLPreElement>;
type CodeProps = React.HTMLAttributes<HTMLElement>;

function PostVideo({ caption, className, ...props }: VideoProps) {
  return (
    <figure className="my-8 space-y-3">
      <video
        className={`w-full rounded-xl border border-border ${className ?? ""}`}
        controls
        playsInline
        {...props}
      />
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Pre(props: PreProps) {
  return (
    <pre
      {...props}
      className={`my-6 overflow-x-auto rounded-2xl border border-border bg-card p-4 ${
        props.className ?? ""
      }`}
    />
  );
}

function Code(props: CodeProps) {
  return <code {...props} className={`font-mono ${props.className ?? ""}`} />;
}

type HighlightProps = {
  children: React.ReactNode;
};

function Hl({ children }: HighlightProps) {
  return (
    <code className="rounded-md border dark:border-border border-stone-600 dark:bg-card bg-stone-100 px-1.5 py-0.5 font-mono text-sm text-muted-foreground dark:text-[#d4d4d4]">
      {children}
    </code>
  );
}

// Block callout — e.g. <Callout type="warning">Watch out!</Callout>
type CalloutProps = {
  children: React.ReactNode;
  type?: "info" | "warning" | "danger" | "tip";
};

const calloutStyles = {
  info: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    icon: "i",
  },
  warning: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    icon: "⚠",
  },
  danger: {
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    text: "text-red-400",
    icon: "✕",
  },
  tip: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    icon: "✦",
  },
};

function Callout({ children, type = "info" }: CalloutProps) {
  const s = calloutStyles[type];
  return (
    <div
      className={`my-6 flex gap-3 rounded-xl border ${s.border} ${s.bg} px-4 py-3`}
    >
      <span className={`mt-0.5 shrink-0 text-sm font-semibold ${s.text}`}>
        {s.icon}
      </span>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

type QuoteProps = {
  children: React.ReactNode;
};

function Quote({ children }: QuoteProps) {
  return (
    <div className="rounded-md border-l-8 border-border dark:bg-card bg-stone-100 px-2 py-2 font-mono text-lg text-muted-foreground">
      <q>{children}</q>
    </div>
  );
}

type TableProps = {
  children: React.ReactNode;
};

function Table({ children }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border cursor-default">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

function Thead({ children }: TableProps) {
  return (
    <thead className="border-b border-border dark:bg-card bg-stone-100 text-muted-foreground uppercase">
      {children}
    </thead>
  );
}

function Tbody({ children }: TableProps) {
  return <tbody className="divide-y divide-border text-base">{children}</tbody>;
}

function Tr({ children }: TableProps) {
  return <tr className="transition-colors hover:bg-accent/30">{children}</tr>;
}

function Th({ children }: TableProps) {
  return <th className="px-4 py-3 text-left tracking-wide">{children}</th>;
}

function Td({ children }: TableProps) {
  return <td className="px-4 py-3 text-muted-foreground">{children}</td>;
}

export const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      {...props}
      className={`my-8 rounded-xl border border-border ${props.className ?? ""}`}
      alt={props.alt ?? ""}
    />
  ),
  pre: Pre,
  code: Code,
  PostVideo,
  Hl,
  Callout,
  Quote,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};
