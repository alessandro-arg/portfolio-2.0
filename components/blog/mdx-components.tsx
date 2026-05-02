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
};
