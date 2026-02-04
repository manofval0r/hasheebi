"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingIconProps {
    icon: LucideIcon;
    className?: string;
    variant?: "gold" | "blue" | "white";
    size?: "sm" | "md" | "lg";
}

export function FloatingIcon({ icon: Icon, className, variant = "gold", size = "md" }: FloatingIconProps) {
    const iconColors = {
        gold: "text-brand-gold",
        blue: "text-brand-blue",
        white: "text-white",
    };

    const bgColors = {
        gold: "bg-[#f5f0e6]",
        blue: "bg-slate-100",
        white: "bg-white/10",
    };

    const sizes = {
        sm: "w-10 h-10",
        md: "w-14 h-14",
        lg: "w-20 h-20",
    };

    const iconSizes = {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-10 h-10",
    };

    return (
        <div
            className={cn(
                "rounded-lg flex items-center justify-center transition-transform duration-300 hover:-translate-y-1",
                bgColors[variant],
                sizes[size],
                className
            )}
        >
            <Icon className={cn(iconSizes[size], iconColors[variant])} strokeWidth={1.5} />
        </div>
    );
}
