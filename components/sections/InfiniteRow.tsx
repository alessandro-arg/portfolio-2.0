import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import StarIcon from "@/components/icons/star.svg";

export default function ScrollBasedVelocity() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer>
        <ScrollVelocityRow
          baseVelocity={2}
          direction={1}
          className="font-instrument leading-6 font-semibold tracking-wider text-nowrap text-gray-50 uppercase text-2xl md:text-3xl inline-flex items-center"
        >
          <span>Accessible</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Dynamic</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Engaging</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Scalable</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Secure</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Responsive</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>SEO</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Reliable</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
          <span>Interactive</span>
          <StarIcon className="size-8 text-[#16b1ff] mx-4" />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
