"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumb?: string;
    className?: string;
}

export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
    return (
        <section className={cn("relative pt-40 pb-24 bg-brand-dark overflow-hidden", className)}>
            {/* Background Accents */}
            <div className="absolute inset-0 diagonal-stripes opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -mr-48 -mt-48" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    {breadcrumb && (
                        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-brand-gold" />
                            {breadcrumb}
                        </p>
                    )}
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-400 max-w-2xl font-headings leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 diagonal-stripes opacity-30" />
        </section>
    );
}
