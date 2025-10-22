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
    <Accordion type="single" collapsible className="w-fit">
      <AccordionItem value="more">
        <AccordionTrigger className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 no-underline">
          More
        </AccordionTrigger>

        <AccordionContent>
          <ul className="mt-2 space-y-2">
            {moreLinks.map((item) => (
              <li key={item.href} className="text-left">
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block rounded-lg border border-neutral-200/70 dark:border-neutral-800/70 p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition"
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
