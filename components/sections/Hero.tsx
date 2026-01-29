"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, HardHat, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/WhatsApp Image 2026-01-29 at 4.18.55 PM (1).jpeg"
                    alt="Hashebi Construction Site Excavation"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/20 border border-brand-gold/30 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                                Building Nigeria&apos;s Future Since 2007
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
                            Building <span className="text-brand-gold underline decoration-brand-yellow/30 decoration-8 underline-offset-8">Excellence</span>, <br />
                            Delivering <span className="text-brand-blue">Trust</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-headings">
                            Hashebi Global Services is a leading construction firm in Delta State,
                            providing world-class engineering and building solutions for complex projects.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" icon={<ArrowRight />} className="shadow-2xl shadow-brand-gold/20">
                                View Our Projects
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:border-brand-gold">
                                Request a Quote
                            </Button>
                        </div>

                        {/* Stats / Trust Badges */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div className="space-y-1">
                                <span className="block text-3xl font-display font-bold text-white">15+</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Years Experience</span>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl font-display font-bold text-white">50+</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Projects Done</span>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl font-display font-bold text-white">RC711094</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Verified Reg</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Element / Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 p-8 glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripes -mr-16 -mt-16 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center shadow-lg">
                                        <ShieldCheck className="w-7 h-7 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Safety First</h3>
                                        <p className="text-sm text-gray-400">Zero-accident commitment</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center shadow-lg">
                                        <Zap className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Precise Quality</h3>
                                        <p className="text-sm text-gray-400">Professional engineering standards</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
                                        <HardHat className="w-7 h-7 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Expert Team</h3>
                                        <p className="text-sm text-gray-400">Licensed & certified professionals</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-xs text-gray-500 italic">
                                    &quot;Leading the way in construction innovation and structural integrity across Nigeria.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Decorative Angular Cut */}
                        <div className="absolute -bottom-6 -left-6 w-full h-full bg-brand-gold -z-10 rounded-2xl opacity-10 blur-2xl" />
                    </motion.div>
                </div>
            </div>

            {/* Hero Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 120 307.75 0 1200 120z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
