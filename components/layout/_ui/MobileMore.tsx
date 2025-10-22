"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { moreLinks } from "../more.data";

export function MobileMore({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex items-center justify-center"
    >
      <AccordionItem value="more">
        <div className="min-w-[300px] flex items-center justify-center">
          <AccordionTrigger className="min-w-24 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 no-underline">
            More
          </AccordionTrigger>
        </div>

        <AccordionContent>
          <ul className="mt-2 space-y-2">
            {moreLinks.map((item) => (
              <li key={item.href} className="text-center">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition"
                >
                  <div className="text-lg font-medium">{item.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
