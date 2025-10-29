import Image from "next/image";

export function BrandMark({
  className = "h-7 w-auto",
}: {
  className?: string;
}) {
  return (
    <>
      {/* Light mode */}
      <Image
        src="/brand/logo-dark.svg"
        alt="Alessandro"
        className={`block dark:hidden ${className}`}
        width={128}
        height={128}
      />
      {/* Dark mode */}
      <img
        src="/brand/logo-light.svg"
        alt="Alessandro"
        className={`hidden dark:block ${className}`}
        width={128}
        height={128}
      />
    </>
  );
}
