"use client";

import { cn } from "@/lib/utils";

interface IndustrialAccentProps {
    className?: string;
    variant?: "beam" | "grid" | "bracket";
}

export function IndustrialAccent({ className, variant = "beam" }: IndustrialAccentProps) {
    if (variant === "beam") {
        return (
            <svg
                viewBox="0 0 400 100"
                className={cn("industrial-shadow-heavy opacity-10", className)}
                preserveAspectRatio="none"
            >
                <path d="M0 20 L400 20 L400 80 L0 80 Z" fill="currentColor" />
                <path d="M0 45 L400 45 L400 55 L0 55 Z" fill="rgba(255,255,255,0.1)" />
                {/* Rivets */}
                {[20, 100, 180, 260, 340, 380].map(x => (
                    <circle key={x} cx={x} cy="35" r="3" fill="rgba(0,0,0,0.3)" />
                ))}
                {[20, 100, 180, 260, 340, 380].map(x => (
                    <circle key={x} cx={x} cy="65" r="3" fill="rgba(0,0,0,0.3)" />
                ))}
            </svg>
        );
    }

    if (variant === "grid") {
        return (
            <svg
                viewBox="0 0 100 100"
                className={cn("opacity-5", className)}
            >
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
            </svg>
        );
    }

    if (variant === "bracket") {
        return (
            <svg
                viewBox="0 0 40 40"
                className={cn("industrial-shadow-heavy opacity-20", className)}
            >
                <path d="M0 0 L40 0 L40 10 L10 10 L10 40 L0 40 Z" fill="currentColor" />
            </svg>
        );
    }

    return null;
}
