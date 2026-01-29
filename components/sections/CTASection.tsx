"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { IndustrialAccent } from "@/components/ui/IndustrialAccent";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Diagonal Stripe Texture */}
            <div className="absolute inset-0 bg-brand-dark z-0" />
            <div className="absolute inset-0 diagonal-stripes opacity-10 z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-gold/20 z-0" />

            <IndustrialAccent variant="bracket" className="absolute top-0 left-0 w-32 h-32 text-brand-gold -translate-x-10 -translate-y-10" />
            <IndustrialAccent variant="bracket" className="absolute bottom-0 right-0 w-32 h-32 text-brand-blue translate-x-10 translate-y-10 rotate-180" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl overflow-hidden relative">
                    {/* Animated Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -ml-32 -mb-32" />

                    <div className="text-center space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.5, once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                                Ready to Build Your <br />
                                <span className="text-brand-gold">Next Big Infrastructure?</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-headings">
                                Partner with Nigeria&apos;s most reliable construction firm for quality,
                                safety, and precision. Let&apos;s discuss your project today.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.5, once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <Button size="lg" icon={<ArrowRight />} className="w-full sm:w-auto px-12 h-16 text-lg">
                                Get In Touch
                            </Button>
                            <a
                                href="tel:07065007653"
                                className="flex items-center gap-3 text-white font-bold hover:text-brand-gold transition-colors py-4 px-6 border border-white/10 rounded-xl bg-white/5"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                                    <PhoneCall className="w-5 h-5 text-brand-gold" />
                                </div>
                                <span>Call Us: +(234) 706 500 7653</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ amount: 0.5, once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex justify-center gap-12 pt-8"
                        >
                            <div className="text-center">
                                <p className="text-white font-bold block text-2xl">10+</p>
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Projects</p>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div className="text-center">
                                <p className="text-white font-bold block text-2xl">Warri</p>
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Based</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
