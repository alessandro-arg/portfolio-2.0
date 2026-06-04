import { Plus } from "lucide-react";
import Image from "next/image";

export default function SectionImage() {
  return (
    <>
      <div className="absolute -top-8 -left-8 border-b-2 border-r-2 border-t-0 border-l-0 border-dotted h-8 w-8 group-hover:-top-14 group-hover:-left-14 group-hover:h-14 group-hover:w-14 transition-all duration-400" />
      <Plus
        size={14}
        className="absolute -bottom-2 -left-2 text-muted-foreground z-2 group-hover:rotate-45 transition-all duration-400"
      />
      <div className="absolute -bottom-8 -left-8 border-b-0 border-r-2 border-t-2 border-l-0 border-dotted h-8 w-8 group-hover:-bottom-14 group-hover:-left-14 group-hover:h-14 group-hover:w-14 transition-all duration-400" />
      <Plus
        size={14}
        className="absolute -top-2 -right-2 text-muted-foreground z-2 group-hover:rotate-45 transition-all duration-400"
      />
      <div className="absolute -bottom-8 -right-8 border-b-0 border-r-0 border-t-2 border-l-2 border-dotted h-8 w-8 group-hover:-bottom-14 group-hover:-right-14 group-hover:h-14 group-hover:w-14 transition-all duration-400" />
      <Plus
        size={14}
        className="absolute -top-2 -left-2 text-muted-foreground z-2 group-hover:rotate-45 transition-all duration-400"
      />
      <div className="absolute -top-8 -right-8 border-b-2 border-r-0 border-t-0 border-l-2 border-dotted h-8 w-8 group-hover:-top-14 group-hover:-right-14 group-hover:h-14 group-hover:w-14 transition-all duration-400" />
      <Plus
        size={14}
        className="absolute -bottom-2 -right-2 text-muted-foreground z-2 group-hover:rotate-45 transition-all duration-400"
      />

      {/* keep the exact “absolute + inset + rotate” look while using next/image */}
      <Image
        src="/images/profile-img.webp"
        alt="Alessandro pic"
        fill
        className="absolute inset-0 rotate-3 sm:rotate-0 transition-all hover:rotate-3 duration-300 object-cover group-hover:scale-97 group-hover:rounded-4xl"
        loading="lazy"
        decoding="async"
        sizes="80vw"
      />
    </>
  );
}
