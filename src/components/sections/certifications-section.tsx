import { format, parseISO } from "date-fns";
import { ArrowUpRight, CircleCheckBig } from "lucide-react";

import type { Certification } from "@/types/portfolio";
import { certifications } from "@/content/certifications";

function CertificationMark({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated text-muted-foreground">
      {certification.logo ? (
        <span
          aria-hidden="true"
          className="size-4 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
          style={{
            maskImage: `url(${certification.logo})`,
            WebkitMaskImage: `url(${certification.logo})`,
          }}
        />
      ) : (
        <CircleCheckBig
          className="size-4"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

function CertificationRow({ certification }: { certification: Certification }) {
  return (
    <li className="border-b border-border last:border-b-0">
      <a
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center pr-2 transition-colors hover:bg-accent/40"
      >
        <div className="mx-4">
          <CertificationMark certification={certification} />
        </div>

        <div className="min-w-0 space-y-1 border-l border-dashed border-border p-4">
          <div className="flex min-w-0 flex-col items-start sm:flex-row sm:items-baseline sm:gap-2">
            <h3 className="text-balance leading-snug font-medium">
              {certification.name}
            </h3>

            {certification.credentialId && (
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                #{certification.credentialId}
              </span>
            )}
          </div>

          <dl className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">Issued by</dt>
              <dd>
                <span aria-hidden="true">@</span>
                <span className="ml-0.5">{certification.issuer}</span>
              </dd>
            </div>

            <span
              aria-hidden="true"
              className="h-4 w-px shrink-0 self-center bg-border"
            />

            <div>
              <dt className="sr-only">Issued on</dt>
              <dd>
                <time dateTime={certification.issuedOn}>
                  {format(parseISO(certification.issuedOn), "dd.MM.yyyy")}
                </time>
              </dd>
            </div>
          </dl>
        </div>

        <ArrowUpRight
          className="ml-2 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </a>
    </li>
  );
}

export function CertificationsSection() {
  return (
    <section aria-labelledby="certifications-heading">
      <header className="screen-line-bottom border-border p-4 py-1 pt-2">
        <p className="mb-1 font-mono text-xs text-muted-foreground">
          /Credentials
        </p>

        <h2
          id="certifications-heading"
          className="text-3xl font-medium tracking-tight"
        >
          Certifications
        </h2>
      </header>

      <ul className="list-none">
        {certifications.map((certification) => (
          <CertificationRow
            key={certification.id}
            certification={certification}
          />
        ))}
      </ul>
    </section>
  );
}
