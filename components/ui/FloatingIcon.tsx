"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingIconProps {
    icon: LucideIcon;
    className?: string;
    variant?: "gold" | "blue" | "white";
    size?: "sm" | "md" | "lg";
}

export function FloatingIcon({ icon: Icon, className, variant = "gold", size = "md" }: FloatingIconProps) {
    const variants = {
        gold: "text-brand-gold bg-brand-gold/10",
        blue: "text-brand-blue bg-brand-blue/10",
        white: "text-white bg-white/10",
    };

    const sizes = {
        sm: "w-10 h-10",
        md: "w-16 h-16",
        lg: "w-24 h-24",
    };

    const iconSizes = {
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.05 }}
            className={cn("relative group", className)}
        >
            {/* Structural Cradle SVG Background */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full cradle-shadow opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            >
                <path
                    d="M10 30 L50 10 L90 30 L90 70 L50 90 L10 70 Z"
                    fill="currentColor"
                    className={cn(variant === "gold" ? "text-brand-gold" : "text-brand-blue")}
                />
            </svg>

            {/* Heavy Shadow Base */}
            <div className="absolute inset-2 bg-black/40 blur-xl rounded-full translate-y-4 opacity-50 group-hover:opacity-80 transition-opacity" />

            {/* Main Icon Container */}
            <div className={cn(
                "relative z-10 rounded-sm flex items-center justify-center border border-white/10 backdrop-blur-md transition-all duration-500",
                variants[variant],
                sizes[size],
                "industrial-shadow-heavy"
            )}>
                <Icon className={cn(iconSizes[size], "drop-shadow-lg")} />

                {/* Decorative Tech Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            </div>

            {/* Secondary Floating Accent */}
            <motion.div
                animate={{
                    y: [0, -4, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold rounded-full blur-[2px] opacity-20 group-hover:opacity-50"
            />
        </motion.div>
    );
}
