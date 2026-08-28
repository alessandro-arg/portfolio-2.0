import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/types/portfolio";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full w-72 shrink-0 flex-col justify-between gap-5 rounded-md border border-border bg-surface/40 p-4 sm:w-80">
      <blockquote className="flex-1 text-sm leading-relaxed">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>

      <figcaption>
        <p className="text-sm font-medium">{testimonial.name}</p>
        <p className="mt-0.5 font-mono text-xs text-muted-foreground">
          {testimonial.role}
        </p>
      </figcaption>
    </figure>
  );
}

function TestimonialGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden || undefined}>
      {testimonials.map((testimonial) => (
        <li key={testimonial.id} className="flex">
          <TestimonialCard testimonial={testimonial} />
        </li>
      ))}
    </ul>
  );
}

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading">
      <header className="screen-line-bottom border-border p-4 py-1 pt-2">
        <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted-foreground">
          /Feedback
        </p>

        <h2
          id="testimonials-heading"
          className="text-3xl font-medium tracking-tight"
        >
          Testimonials
        </h2>
      </header>

      <div className="testimonial-marquee-viewport py-4">
        <div className="testimonial-marquee-track flex w-max pl-4">
          <TestimonialGroup />

          <div className="testimonial-marquee-copy">
            <TestimonialGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
