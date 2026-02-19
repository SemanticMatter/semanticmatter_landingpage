"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Item = {
  name: string;
  path: string;
  description?: string;
};

type DropdownMenuProps = {
  label: string;
  items: Item[];
  isActive?: boolean;
};

export default function DropdownMenu({
  label,
  items,
  isActive
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
          isActive ? "text-white" : "text-slate-400 hover:text-teal-300"
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-9 w-80 rounded-xl border border-white/10 bg-[#06070d]/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block rounded-lg px-3 py-3 transition-colors hover:bg-white/8"
              >
                <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                ) : null}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
