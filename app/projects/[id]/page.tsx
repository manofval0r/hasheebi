import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Building2, Calendar, MapPin, User, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <PageHero
                title={project.title}
                subtitle={`${project.category} | ${project.location}`}
                breadcrumb={`Home / Projects / ${project.title}`}
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Project Image Gallery (Simplified for now) */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-gold text-brand-dark font-black uppercase tracking-widest text-xs rounded-full shadow-lg">
                                    {project.category}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-display font-black text-brand-dark">Project <span className="text-brand-gold">Overview</span></h2>
                                <div className="h-1.5 w-24 bg-brand-gold diagonal-stripes" />
                                <p className="text-xl text-gray-600 font-headings leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="space-y-8 bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                                <h3 className="text-2xl font-display font-black text-brand-dark flex items-center gap-3">
                                    <Building2 className="w-8 h-8 text-brand-gold" />
                                    Technical Highlights
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border-l-4 border-brand-gold">
                                            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                                            <span className="font-bold text-brand-dark text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="space-y-8">
                                <h3 className="text-2xl font-display font-black text-brand-dark">Progress <span className="text-brand-gold">Gallery</span></h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {project.gallery.map((img, index) => (
                                        <div key={index} className="aspect-square relative rounded-2xl overflow-hidden group cursor-pointer">
                                            <Image
                                                src={img}
                                                alt={`Gallery ${index}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Info */}
                        <div className="space-y-8">
                            <Card variant="elevated" className="p-8 space-y-8 sticky top-28 bg-white border border-gray-100">
                                <h3 className="text-xl font-display font-black text-brand-dark border-b border-gray-100 pb-4">Project Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-brand-gold">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Client</p>
                                            <p className="font-bold text-brand-dark">{project.client}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-brand-gold">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Location</p>
                                            <p className="font-bold text-brand-dark">{project.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-brand-gold">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Date Completed</p>
                                            <p className="font-bold text-brand-dark">{project.date}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100 grid gap-4">
                                    {project.stats.map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg">
                                            <span className="text-gray-500 font-bold">{stat.label}</span>
                                            <span className="text-brand-dark font-black">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button size="lg" className="w-full mt-4" icon={<ChevronRight />}>
                                    Download Profile
                                </Button>
                            </Card>

                            <div className="bg-brand-blue p-8 rounded-[30px] text-white space-y-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 diagonal-stripes opacity-10 -mr-16 -mt-16 rotate-45" />
                                <h4 className="text-xl font-display font-black relative z-10">Need a similar project?</h4>
                                <p className="text-brand-blue-light text-sm font-headings relative z-10 opacity-80">
                                    Get in touch with our experts today for a professional consultation and quote.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-gold transition-colors relative z-10 group">
                                    Contact Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

// Generate static params for production build
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}
