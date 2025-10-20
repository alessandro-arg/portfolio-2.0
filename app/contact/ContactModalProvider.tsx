"use client";

import { createContext, useContext, ReactNode, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import ContactModal from "./ContactModal";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Modal open state is derived from the URL
  const isOpen = searchParams.get("contact") === "1";

  const openModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("contact") === "1") return; // avoid duplicate pushes
    params.set("contact", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [router, pathname, searchParams]);

  const closeModal = useCallback(() => {
    // If we navigated here via push, back() will just remove ?contact=1
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      // Direct entry on ?contact=1: remove it in place
      const params = new URLSearchParams(searchParams.toString());
      params.delete("contact");
      const url = params.toString() ? `${pathname}?${params}` : pathname;
      router.replace(url, { scroll: false });
    }
  }, [router, pathname, searchParams]);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx)
    throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
