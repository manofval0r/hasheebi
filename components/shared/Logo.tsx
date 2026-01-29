"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <Link href="/" className={cn("flex flex-col gap-0 group", className)}>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-2xl font-display font-bold tracking-tighter leading-none",
          isWhite ? "text-white" : "text-white"
        )} style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
          HASHEBI
        </span>
        <div className="h-6 w-[2px] bg-brand-gold group-hover:bg-brand-blue transition-colors duration-300" />
        <span className={cn(
          "text-lg font-headings font-semibold tracking-tight leading-none",
          isWhite ? "text-gray-300" : "text-gray-600"
        )}>
          GLOBAL
        </span>
      </div>
      <div className="flex items-center gap-1 mt-0.5">
        <div className="h-1 flex-1 diagonal-stripes rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap",
          isWhite ? "text-brand-gold" : "text-brand-blue"
        )}>
          Nigeria Ltd
        </span>
      </div>
    </Link>
  );
}
