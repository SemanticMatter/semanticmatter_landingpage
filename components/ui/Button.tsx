import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-teal-400 text-ink border border-teal-300 hover:bg-teal-300 shadow-[0_0_40px_rgba(17,184,184,0.2)]",
  ghost:
    "bg-white/5 text-slate-100 border border-white/20 hover:bg-white/10 hover:border-white/35"
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 text-sm font-semibold transition-colors md:px-8 md:py-3.5",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
