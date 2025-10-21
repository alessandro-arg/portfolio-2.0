"use client";

import { ReactNode } from "react";
import { useContactModal } from "@/app/contact/ContactModalProvider";

export default function ContactCTA({
  children = "Let’s chat",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { openModal } = useContactModal();
  return (
    <a type="button" onClick={openModal} className={className}>
      {children}
    </a>
  );
}
