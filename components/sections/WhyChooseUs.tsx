"use client";

import { CheckCircle2, Award, Clock, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const checks = [
    "Licensed and RC Registered (RC 711094)",
    "Highly Experienced Engineering Team",
    "Commitment to Zero-Accident Safety",
    "Premium Quality Material Sourcing",
    "Timely Project Delivery & Budget Control",
    "Innovative Construction Techniques"
];

const highlights = [
    { icon: Award, label: "Proven Track Record", desc: "Successfully delivered complex projects across various sectors." },
    { icon: Clock, label: "Timely Delivery", desc: "Expert project management ensures milestones are always met." },
    { icon: Wrench, label: "Modern Equipment", desc: "Utilizing state-of-the-art machinery for precision and speed." },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.5, once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6">
                                Why Partner With <span className="text-brand-gold italic">Hashebi</span>?
                            </h2>
                            <div className="h-1.5 w-32 bg-brand-gold diagonal-stripes" />
                        </div>

                        <p className="text-lg text-gray-600 font-headings leading-relaxed">
                            With nearly two decades of experience, we&apos;ve built a reputation for
                            reliability, excellence, and safety in Nigeria&apos;s construction landscape.
                        </p>

                        <div className="grid sm:grid-cols-1 gap-6">
                            {checks.map((check, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold group-hover:text-brand-dark" />
                                    </div>
                                    <span className="text-gray-700 font-bold tracking-tight">{check}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-100">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-6 h-6 text-brand-blue" />
                                        <span className="font-display font-bold text-brand-dark">{item.label}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 max-w-[200px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.5, once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10 rounded-sm overflow-hidden professional-shadow"
                        >
                            <Image
                                src="/images/WhatsApp Image 2026-01-29 at 4.18.57 PM (1).jpeg"
                                alt="Hashebi Team on Site"
                                width={600}
                                height={800}
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decors */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 diagonal-stripes opacity-30 z-0 animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-full h-full bg-brand-blue/5 -z-10 rounded-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 blur-3xl -z-20 rounded-full" />

                        {/* Experience Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 bg-brand-dark p-8 rounded-sm shadow-3xl z-20 border-l-4 border-l-brand-gold"
                        >
                            <div className="text-brand-gold text-5xl font-display font-black leading-none mb-2">17+</div>
                            <div className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Years of <br />Excellence</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
