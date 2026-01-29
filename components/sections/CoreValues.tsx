"use client";

import { Card } from "@/components/ui/Card";
import { ShieldCheck, Lightbulb, Handshake, HardHat } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        title: "Quality & Excellence",
        description: "We never compromise on the quality of materials and craftsmanship in every project we undertake.",
        icon: ShieldCheck,
        color: "text-brand-gold",
        bg: "bg-brand-gold/10",
    },
    {
        title: "Innovation",
        description: "We embrace modern construction techniques and technologies to deliver efficient and sustainable solutions.",
        icon: Lightbulb,
        color: "text-brand-blue",
        bg: "bg-brand-blue/10",
    },
    {
        title: "Integrity & Trust",
        description: "Our foundation is built on honesty and transparency, ensuring our clients can rely on us completely.",
        icon: Handshake,
        color: "text-brand-gold",
        bg: "bg-brand-gold/10",
    },
    {
        title: "Safety First",
        description: "Protecting our people and the community is our top priority. We maintain strict safety protocols on every site.",
        icon: HardHat,
        color: "text-brand-blue",
        bg: "bg-brand-blue/10",
    },
];

export function CoreValues() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="values">
            {/* Decorative Stripes */}
            <div className="absolute top-0 right-0 w-64 h-1 diagonal-stripes rotate-45 transform translate-x-1/2 -translate-y-1/2 opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-4">
                            Our Core <span className="text-brand-gold">Values</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-brand-gold mx-auto diagonal-stripes" />
                    </motion.div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-headings">
                        Defining our commitment to excellence and professional integrity in the construction industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="elevated" className="h-full p-8 group border-t-4 border-transparent hover:border-brand-gold">
                                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
