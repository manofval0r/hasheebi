"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "@/lib/data";

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-brand-dark overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
                                Our Work Speaks <br />For <span className="text-brand-gold italic">Itself</span>
                            </h2>
                            <div className="h-1.5 w-32 bg-brand-gold diagonal-stripes" />
                        </motion.div>
                        <p className="mt-8 text-gray-400 text-lg font-headings leading-relaxed">
                            Explore our portfolio of successfully delivered projects, showcasing our technical
                            expertise and commitment to structural integrity.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-gray-700 text-white hover:border-brand-gold swiper-button-prev-custom">
                            Prev
                        </Button>
                        <Button variant="outline" className="border-gray-700 text-white hover:border-brand-gold swiper-button-next-custom">
                            Next
                        </Button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="featured-projects-swiper !pb-16"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-brand-gold/30 transition-all rounded-2xl m-4" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-md">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-gold transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <MapPin className="w-4 h-4 text-brand-gold" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Calendar className="w-4 h-4 text-brand-gold" />
                                            {project.date}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="mt-6 inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-brand-gold transition-colors"
                                    >
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
