"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { projects as allProjects } from "@/lib/data";
import Link from "next/link";

const categories = ["All", "Building", "Civil", "Infrastructure", "Industrial"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    return (
        <>
            <PageHero
                title="Our Project Portfolio"
                subtitle="Exploring the landmark projects that define our commitment to engineering excellence and community development."
                breadcrumb="Home / Projects"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${filter === cat
                                    ? "bg-brand-gold text-white shadow-xl scale-110"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Link href={`/projects/${project.id}`}>
                                        <Card className="group relative h-[450px] cursor-pointer">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Dark Overlay */}
                                            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/80 transition-all duration-500" />

                                            {/* Hover Content */}
                                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                                                <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-[10px] mb-2">
                                                    {project.category}
                                                </span>
                                                <h3 className="text-2xl font-display font-black text-white mb-4">
                                                    {project.title}
                                                </h3>

                                                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                        <MapPin className="w-4 h-4 text-brand-gold" />
                                                        {project.location}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                                                        <Calendar className="w-4 h-4 text-brand-gold" />
                                                        {project.date}
                                                    </div>
                                                </div>

                                                <div className="mt-8 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                                                    <div className="w-full py-3 bg-brand-gold text-brand-dark font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 rounded-lg">
                                                        View Details <Plus className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Corner Accent */}
                                            <div className="absolute top-0 right-0 w-24 h-24 diagonal-stripes -mr-12 -mt-12 opacity-0 group-hover:opacity-20 transition-opacity rotate-45" />
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
