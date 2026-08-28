import { CopyEmailButton } from "@/components/interactive/copy-email-button";
import { profile } from "@/content/profile";

export function ContactSection() {
  const { contact } = profile;

  return (
    <section aria-labelledby="contact-heading">
      <header className="screen-line-bottom border-border p-4 py-1 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          /Contact
        </p>

        <h2
          id="contact-heading"
          className="text-3xl font-medium tracking-tight"
        >
          Let&apos;s work together
        </h2>
      </header>

      <div className="p-4 bg-surface/40">
        <div className="screen-line-top screen-line-bottom border-border p-5 sm:p-7">
          <div className="max-w-2xl">
            <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
              {contact.heading}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {contact.description}
            </p>
          </div>

          <div className="mt-6 min-w-0 flex items-center gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="min-w-0 truncate font-mono text-sm hover:underline underline-offset-3"
            >
              {contact.email}
            </a>

            <CopyEmailButton email={contact.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
