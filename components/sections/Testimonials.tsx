import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TestimonialsMarquee } from "../ui/testimonials-marquee";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    quote:
      "Die Zusammenarbeit mit Alessandro ist eine großartige Erfahrung. Er verfügt nicht nur über ausgezeichnete Kenntnisse im Frontend-Bereich, sondern bringt auch bei jedem Projekt eine erfrischende Kreativität ein. Seine Fähigkeit Probleme zu lösen, macht ihn zu einem wertvollen Mitglied jedes Teams.",
    name: "Selahattin Safra",
    role: "System Engineer • Letec IT Solutions",
  },
  {
    quote:
      "Alessandro unisce competenza tecnica e autentica passione, qualità che emergono chiaramente in tutto ciò che realizza. È una persona su cui si può sempre contare, pronta a fare un passo in più e ad affrontare ogni sfida con professionalità, entusiasmo e spirito positivo.",
    name: "Alessandro Raucci",
    role: "Backend Developer • NTT Data",
  },
  {
    quote:
      "Die Zusammenarbeit mit Alessandro war stets konstruktiv und inspirierend. Er verfügt über ein fundiertes technisches Verständnis, kreative Ideen und eine lösungsorientierte Denkweise. Zuverlässig, teamorientiert und engagiert. Mit ihm wird jedes Projekt ein Erfolg.",
    name: "Eid Aden",
    role: "Software Engineer • Developer Akademie",
  },
  {
    quote:
      "Ich habe die Weiterbildung im Bereich Frontend-Entwicklung gemeinsam mit Alessandro absolviert. In dieser Zeit habe ich ihn als äußerst zuverlässigen, hilfsbereiten und talentierten Kollegen kennengelernt.",
    name: "Marco Marrocu",
    role: "Supervisor • Imperial Auto",
  },
  {
    quote:
      "Er arbeitete schnell und mit großem Engagement, beschränkte sich nie nur auf seine eigenen Aufgaben und brachte immer wieder kluge Ideen ein, die unser Projekt spürbar vorangebracht haben.",
    name: "Judith Lenz",
    role: "Frontend Developer • Developer Akdemie",
  },
];

/**
 * Displays the testimonials section with a gradient heading
 * and an animated marquee of colleague feedback.
 */
export default function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section
      id="testimonials"
      className="container mb-20 md:mb-32 md:mt-32 dark:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [text-shadow:0px_4px_8px_rgba(255,255,255,0.05),0px_8px_30px_rgba(255,255,255,0.25)]"
    >
      <h2 className="relative z-2 text-5xl font-medium tracking-tight text-balance sm:text-5xl md:mb-20 md:text-6xl text-center mt-44 md:mt-25 mb-16 mx-12 md:mx-2">
        <p className="mb-3 font-mono text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
          {t("eyebrow")}
        </p>
        <span className="font-instrument">
          <span>{t("title")} </span>
          <AnimatedGradientText
            colorFrom="#4aeedd"
            colorTo="#16b1ff"
            className="pe-2 tracking-tight italic"
          >
            {t("highlight")}
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
