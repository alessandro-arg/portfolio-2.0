import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import StarIcon from "@/components/icons/star.svg";
import { useTranslations } from "next-intl";

/**
 * Renders an animated horizontal scrolling marquee
 * showcasing core development and product qualities.
 */
export default function ScrollBasedVelocity() {
  const t = useTranslations("InfiniteRow");

  const items = [
    t("velocity_accessible"),
    t("velocity_dynamic"),
    t("velocity_engaging"),
    t("velocity_scalable"),
    t("velocity_secure"),
    t("velocity_responsive"),
    t("velocity_seo"),
    t("velocity_reliable"),
    t("velocity_interactive"),
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer>
        <ScrollVelocityRow
          baseVelocity={2}
          direction={1}
          className="font-instrument leading-6 font-semibold tracking-wider text-nowrap dark:text-gray-50 uppercase text-2xl md:text-3xl inline-flex items-center"
        >
          {items.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span>{item}</span>
              <StarIcon className="size-8 text-[#16b1ff] mx-4" />
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
