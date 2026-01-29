import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Target, Eye, Users } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Building Nigeria's Future"
                subtitle="Nearly two decades of unwavering commitment to excellence, safety, and professional integrity in construction."
                breadcrumb="Home / About Us"
            />

            {/* History & Philosophy */}
            <section className="py-24 bg-white" id="overview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-display font-black text-brand-dark">Our History & <span className="text-brand-gold">Philosophy</span></h2>
                            <div className="h-1.5 w-32 bg-brand-gold diagonal-stripes" />

                            <div className="space-y-6 text-gray-600 font-headings text-lg leading-relaxed">
                                <p>
                                    Founded on September 27, 2007 (RC 711094), Hashebi Global Services has been
                                    a leading construction firm specializing in various building projects across
                                    Delta State and Nigeria.
                                </p>
                                <p>
                                    Our philosophy is rooted in the belief that every structure we build
                                    is a testament to our craftsmanship and our clients&apos; trust. We combine
                                    traditional hard work with modern engineering precision.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div>
                                    <h4 className="text-4xl font-display font-black text-brand-dark">2007</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Established</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-display font-black text-brand-dark">50+</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Projects Delivered</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg"
                                    alt="Team at work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 diagonal-stripes opacity-20 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Cards */}
            <section className="py-24 bg-gray-50" id="values">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[40px] shadow-xl border-t-8 border-brand-gold">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8">
                                <Eye className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-3xl font-display font-black text-brand-dark mb-6">Our Vision</h3>
                            <p className="text-lg text-gray-600 font-headings leading-relaxed">
                                &quot;To establish ourselves as a trusted and highly respected building contractor,
                                committed to delivering exceptional services that exceed expectations
                                across the Nigerian construction industry.&quot;
                            </p>
                        </div>

                        <div className="bg-white p-12 rounded-[40px] shadow-xl border-t-8 border-brand-blue">
                            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="w-8 h-8 text-brand-blue" />
                            </div>
                            <h3 className="text-3xl font-display font-black text-brand-dark mb-6">Our Mission</h3>
                            <p className="text-lg text-gray-600 font-headings leading-relaxed">
                                &quot;We seek to acquire projects at competitive rates, guarantee safe working
                                conditions, and deliver quality work promptly to maintain our lead
                                in building excellence.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-white" id="leadership">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-brand-dark mb-6 tracking-tighter">Leadership <span className="text-brand-gold">Team</span></h2>
                        <div className="h-1 w-24 bg-brand-gold mx-auto mb-8" />
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-headings font-medium">
                            Guided by a group of dedicated professionals with decades of combined
                            experience in the Nigerian construction sector.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Hammed Shola", title: "Managing Director", focus: "Strategic Planning & Project Delivery" },
                            { name: "Hammed Ebiere", title: "Executive Director", focus: "Operations & Financial Oversight" },
                            { name: "Hammed Oluwatomisin", title: "Director", focus: "Technical Engineering & Innovation" }
                        ].map((member, index) => (
                            <Card key={index} variant="bordered" hoverable className="p-10 border-l-4 border-l-brand-gold">
                                <h4 className="text-2xl font-display font-black text-brand-dark">{member.name}</h4>
                                <p className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mt-2">{member.title}</p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-gray-500 font-headings text-sm leading-relaxed">
                                        Specializing in {member.focus.toLowerCase()}, ensuring every project meets the highest professional standards.
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
