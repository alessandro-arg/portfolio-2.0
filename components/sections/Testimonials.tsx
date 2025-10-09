import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Working with Alessandro is a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to the team.",
    name: "Selahattin Safra",
    title: "Efficient, innovative, and a pleasure to work with.",
    role: "System Engineer • Letec IT Solutions",
    bg: "linear-gradient(#2b5876, #4e4376)",
  },
  {
    quote:
      "Working with Alessandro was always constructive and inspiring. He has a solid technical understanding, creative ideas and a solution-oriented way of thinking. Reliable, a team player and committed - with him, every project is a succes.",
    name: "Eid Aden",
    title: "Consistent and clean work in every project.",
    role: "Software Engineer • Developer Akdemie",
    bg: "linear-gradient(#2c3e50, #4ca1af)",
  },
  {
    quote:
      "I completed the frontend development training course together with Alessandro. During that time, I got to know him as a very reliable, helpful, and talented colleague.",
    name: "Marco Marrocu",
    title: "A frontend developer who transforms visions into reality.",
    role: "Supervisor • Imperial Auto",
    bg: "linear-gradient(#314755, #26a0da)",
  },
  {
    quote:
      "He worked quickly and with great commitment, never limited himself to just 'his' tasks, and repeatedly contributed clever ideas that noticeably advanced our project.",
    name: "Judith Lenz",
    title: "Working with Alessandro in the team was inspiring.",
    role: "Frontend Developer • Developer Akdemie",
    bg: "linear-gradient(#373b44, #4286f4)",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container mb-20 md:mb-32 md:mt-32 dark:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-36 md:text-6xl text-center mt-44 md:mt-28 mb-16 mx-12 md:mx-2">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          Testimonials
        </p>
        <span className="font-instrument">
          <span>Colleagues' thoughts </span>
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
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}
