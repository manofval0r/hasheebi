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
        <section className={cn("relative pt-48 pb-24 bg-brand-dark overflow-hidden", className)}>
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 diagonal-stripes opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5, once: true }}
                    className="space-y-6"
                >
                    {breadcrumb && (
                        <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-brand-gold" />
                            {breadcrumb}
                        </p>
                    )}
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-400 max-w-3xl font-headings font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Sharp Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
        </section>
    );
}
