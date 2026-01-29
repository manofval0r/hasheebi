"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrialAccent } from "@/components/ui/IndustrialAccent";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/WhatsApp Image 2026-01-29 at 4.18.55 PM (1).jpeg"
                    alt="Hashebi Construction Site Excavation"
                    fill
                    className="object-cover brightness-[0.35]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" />

                {/* Structural Accents */}
                <IndustrialAccent variant="beam" className="absolute top-1/4 -left-20 w-[400px] h-24 text-brand-gold rotate-15" />
                <IndustrialAccent variant="beam" className="absolute bottom-1/4 -right-20 w-[400px] h-24 text-brand-blue -rotate-15" />
                <IndustrialAccent variant="grid" className="absolute inset-0 text-white" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                            Building Nigeria&apos;s Future Since 2007
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[1.05] tracking-tight">
                        Building <span className="text-brand-gold">Excellence</span>, <br />
                        Delivering <span className="text-brand-blue">Trust</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-headings font-medium">
                        Hashebi Global Services is a leading construction firm in Delta State,
                        providing world-class engineering and building solutions for complex projects.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" icon={<ArrowRight />} className="shadow-2xl">
                            View Our Projects
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:border-brand-gold">
                            Request a Quote
                        </Button>
                    </div>

                    {/* Stats / Trust Badges */}
                    <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                        <div className="space-y-1">
                            <span className="block text-4xl font-display font-black text-white">15+</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Years Experience</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-4xl font-display font-black text-white">50+</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Projects Done</span>
                        </div>
                        <div className="space-y-1">
                            <span className="block text-4xl font-display font-black text-white">RC711094</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Verified Reg</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Side Stripe */}
            <div className="absolute right-0 top-0 bottom-0 w-24 diagonal-stripes opacity-5 hidden lg:block" />
        </section>
    );
}
