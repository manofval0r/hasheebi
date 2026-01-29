import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
];

const servicesLinks = [
    { name: "Building Construction", href: "/services#building" },
    { name: "Civil Engineering", href: "/services#civil" },
    { name: "Project Management", href: "/services#pm" },
    { name: "Design & Planning", href: "/services#design" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Logo variant="white" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Hashebi Global Services Nigeria Ltd is a leading construction firm
                            specializing in residential, commercial, and industrial building projects.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a href="tel:07065007653" className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-gold transition-colors">
                                <Phone className="w-4 h-4 text-brand-gold" />
                                07065007653
                            </a>
                            <a href="mailto:hashebi@yahoo.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-gold transition-colors">
                                <Mail className="w-4 h-4 text-brand-gold" />
                                hashebi@yahoo.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-headings font-bold relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-1 left-0 w-12 h-1 bg-brand-gold" />
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                        <ArrowRight className="w-3 h-3 text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-headings font-bold relative inline-block">
                            Our Services
                            <div className="absolute -bottom-1 left-0 w-12 h-1 bg-brand-gold" />
                        </h4>
                        <ul className="space-y-4">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                        <ArrowRight className="w-3 h-3 text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Office Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-headings font-bold relative inline-block">
                            Head Office
                            <div className="absolute -bottom-1 left-0 w-12 h-1 bg-brand-gold" />
                        </h4>
                        <div className="space-y-4 pt-2">
                            <div className="flex gap-3 items-start text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                                <p>3 Ekuredeurhoboroad, Warri, Delta State, Nigeria</p>
                            </div>
                            <div className="flex gap-3 items-start text-sm text-gray-400">
                                <Clock className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                                <div className="space-y-1">
                                    <p className="font-semibold text-gray-200">Office Hours:</p>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    <p>Weekend & Site: 24/7 (on projects)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} Hashebi Global Services Nigeria Ltd. All Rights Reserved. RC 711094.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <div className="h-1.5 diagonal-stripes w-full mt-10 opacity-60" />
        </footer>
    );
}
