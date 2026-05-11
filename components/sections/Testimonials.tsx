import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TestimonialsMarquee } from "../ui/testimonials-marquee";

const testimonials = [
  {
    quote:
      "Working with Alessandro is a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to the team.",
    name: "Selahattin Safra",
    role: "System Engineer • Letec IT Solutions",
  },
  {
    quote:
      "He combines technical skill with genuine passion, and it shows in everything he works on. You can always count on him to go the extra mile and approach challenges with positivity and professionalism.",
    name: "Alessandro Raucci",
    role: "Backend Developer • NTT Data",
  },
  {
    quote:
      "Working with Alessandro was always constructive and inspiring. He has a solid technical understanding, creative ideas and a solution-oriented way of thinking. Reliable, a team player and committed - with him, every project is a succes.",
    name: "Eid Aden",
    role: "Software Engineer • Developer Akademie",
  },
  {
    quote:
      "I completed the frontend development training course together with Alessandro. During that time, I got to know him as a very reliable, helpful, and talented colleague.",
    name: "Marco Marrocu",
    role: "Supervisor • Imperial Auto",
  },
  {
    quote:
      "He worked quickly and with great commitment, never limited himself to just 'his' tasks, and repeatedly contributed clever ideas that noticeably advanced our project.",
    name: "Judith Lenz",
    role: "Frontend Developer • Developer Akdemie",
  },
];

/**
 * Displays the testimonials section with a gradient heading
 * and an animated marquee of colleague feedback.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container mb-20 md:mb-32 md:mt-32 dark:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-20 md:text-6xl text-center mt-44 md:mt-25 mb-16 mx-12 md:mx-2">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          Testimonials
        </p>
        <span className="font-instrument">
          <span>Colleagues&apos; thoughts </span>
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="pe-2 tracking-tight italic"
          >
            about me
          </AnimatedGradientText>
        </span>
      </h2>
      <div className="w-full overflow-hidden">
        <TestimonialsMarquee
          testimonials={testimonials}
          duration={80}
          pauseOnHover
        />
      </div>
    </section>
  );
}
