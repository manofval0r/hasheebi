"use client";

import { ServiceCard } from "./ServiceCard";
import { Building2, Landmark, FolderCog, Compass, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Building Construction",
        description: "From luxury residential homes to commercial office complexes, we deliver high-quality building solutions.",
        icon: Building2,
        href: "/services#building",
    },
    {
        title: "Civil Engineering",
        description: "Expertise in roads, bridges, drainage systems, and large-scale infrastructure projects across Nigeria.",
        icon: Landmark,
        href: "/services#civil",
    },
    {
        title: "Project Management",
        description: "End-to-end supervision ensuring projects are delivered on time, within budget, and to spec.",
        icon: FolderCog,
        href: "/services#pm",
    },
    {
        title: "Design & Planning",
        description: "Architectural design, structural engineering, and feasibility studies for sustainable construction.",
        icon: Compass,
        href: "/services#design",
    },
    {
        title: "Quality Assurance",
        description: "Rigorous inspection and quality control processes to ensure every structure meets national standards.",
        icon: ShieldCheck,
        href: "/services#qa",
    },
    {
        title: "Consultancy",
        description: "Professional advice on construction projects, procurement, and regulatory compliance.",
        icon: Users,
        href: "/services#consultancy",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6">
                                Comprehensive <span className="text-brand-blue">Solutions</span>
                            </h2>
                            <div className="h-1.5 w-32 bg-brand-blue diagonal-stripes" />
                        </motion.div>
                        <p className="mt-8 text-gray-600 text-lg font-headings leading-relaxed">
                            We offer a wide range of specialized services designed to meet the unique
                            demands of modern construction and engineering projects.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="text-brand-dark font-bold uppercase tracking-widest flex items-center gap-2 hover:text-brand-gold transition-colors pb-2 border-b-2 border-brand-gold/20 hover:border-brand-gold"
                    >
                        All Services <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
