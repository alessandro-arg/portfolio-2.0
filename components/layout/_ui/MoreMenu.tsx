"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { moreLinks } from "../more.data";
import { Link2, Goal, Laptop } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Icons = { Link2, Goal, Laptop };

type Props = {
  active?: boolean;
  underlineLayoutId?: string;
};

export function MoreMenu({ active, underlineLayoutId }: Props) {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem className="relative">
          <div className="relative">
            <NavigationMenuTrigger
              className={cn(
                "relative bg-transparent px-0 py-0 h-auto",
                "text-sm font-medium",
                "text-neutral-800 dark:text-gray-300",
                "hover:text-black dark:hover:text-white"
              )}
            >
              More
            </NavigationMenuTrigger>

            {/* animated underline when active */}
            <AnimatePresence>
              {active && (
                <motion.span
                  layoutId={underlineLayoutId}
                  className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#16b1ff]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Panel (unchanged styles) */}
          <NavigationMenuContent
            className={cn(
              "border border-black/10 dark:border-white/10",
              "bg-white/90 dark:bg-neutral-900/90 backdrop-blur",
              "shadow-xl"
            )}
          >
            <ul className="flex w-[320px] flex-col gap-2 p-2 md:w-[340px] lg:w-[360px]">
              {moreLinks.map((item) => {
                const Icon = Icons[item.icon];
                return (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group flex flex-row w-full items-start gap-3 rounded-xl bg-white p-3 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800/60 dark:hover:bg-neutral-800"
                      >
                        <span
                          className="mt-0.5 rounded-lg bg-neutral-200 p-3 group-hover:bg-black/10 dark:bg-neutral-700 dark:group-hover:bg-white/80"
                          aria-hidden="true"
                        >
                          <Icon className="size-5 text-neutral-600 group-hover:text-black dark:text-neutral-300 dark:group-hover:text-black" />
                        </span>
                        <span className="flex min-w-0 flex-col text-left">
                          <span className="line-clamp-1 text-base text-black dark:text-white">
                            {item.title}
                          </span>
                          <span className="mt-0.5 line-clamp-1 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
