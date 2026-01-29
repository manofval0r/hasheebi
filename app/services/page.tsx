import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import {
    Building2, Landmark, FolderCog, Compass, ShieldCheck, Users,
    CheckCircle2
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const services = [
    {
        id: "building",
        title: "Building Construction",
        description: "Our core expertise lies in delivering turnkey building solutions for residential, commercial, and industrial sectors.",
        features: ["Residential Housing", "Commercial Complexes", "Industrial Facilities", "Structural Upgrades"],
        icon: Building2,
        color: "brand-gold"
    },
    {
        id: "civil",
        title: "Civil Engineering",
        description: "We handle complex infrastructure projects with a focus on durability, safety, and national standards.",
        features: ["Road Construction", "Drainage Systems", "Bridge Works", "Water Management"],
        icon: Landmark,
        color: "brand-blue"
    },
    {
        id: "pm",
        title: "Project Management",
        description: "End-to-end management services ensuring your project is completed on time and within the specified budget.",
        features: ["Planning & Scheduling", "Cost Management", "Quality Control", "Risk Assessment"],
        icon: FolderCog,
        color: "brand-dark"
    },
    {
        id: "design",
        title: "Design & Planning",
        description: "Collaborative design services that bridge the gap between architectural vision and engineering reality.",
        features: ["Architectural Design", "Structural Analysis", "3D Modeling", "Feasibility Studies"],
        icon: Compass,
        color: "brand-gold"
    },
    {
        id: "qa",
        title: "Quality Assurance",
        description: "Rigorous inspection protocols to ensure every structural element meets or exceeds industry standards.",
        features: ["Material Testing", "Site Inspections", "Certification", "Compliance Audits"],
        icon: ShieldCheck,
        color: "brand-blue"
    },
    {
        id: "consultancy",
        title: "Consultancy Services",
        description: "Expert advisory services for stakeholders in the construction and real estate development sector.",
        features: ["Development Advisory", "Legal Compliance", "Procurement Strategy", "Site Evaluation"],
        icon: Users,
        color: "brand-dark"
    }
];

const steps = [
    { step: "01", title: "Consultation", desc: "Understanding your vision, requirements, and budget constraints." },
    { step: "02", title: "Planning & Design", desc: "Developing detailed blueprints and structural engineering plans." },
    { step: "03", title: "Procurement", desc: "Sourcing premium materials and mobilizing expert specialized labor." },
    { step: "04", title: "Construction", desc: "Executing site works with constant supervision and quality checks." },
    { step: "05", title: "Delivery", desc: "Final inspections, site clearing, and project handover to client." }
];

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Specialized Solutions"
                subtitle="Comprehensive engineering and construction services tailored to meet the highest standards of quality and safety."
                breadcrumb="Home / Services"
            />

            {/* Services Detail Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <Card key={service.id} className="p-10 border border-gray-100 flex flex-col md:flex-row gap-8 hover:border-brand-gold transition-all duration-500" id={service.id}>
                                <div className={`w-20 h-20 rounded-2xl bg-${service.color}/10 flex items-center justify-center shrink-0`}>
                                    <service.icon className={`w-10 h-10 text-${service.color === 'brand-dark' ? 'brand-dark' : 'brand-gold'}`} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-display font-black text-brand-dark">{service.title}</h3>
                                    <p className="text-gray-600 font-headings leading-relaxed">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-3 pt-4">
                                        {service.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-brand-dark text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Our Working <span className="text-brand-gold italic">Process</span></h2>
                        <div className="h-1.5 w-24 bg-brand-gold mx-auto diagonal-stripes" />
                    </div>

                    <div className="grid md:grid-cols-5 gap-0 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gray-800 diagonal-stripes z-0" />

                        {steps.map((item, index) => (
                            <div key={index} className="relative z-10 p-6 flex flex-col items-center text-center space-y-6 group">
                                <div className="w-20 h-20 rounded-full bg-brand-dark border-4 border-gray-800 flex items-center justify-center font-display font-black text-2xl text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                                    {item.step}
                                </div>
                                <div className="space-y-2 px-4">
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
