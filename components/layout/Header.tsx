"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        submenu: [
            { name: "Company Overview", href: "/about#overview" },
            { name: "History & Philosophy", href: "/about#history" },
            { name: "Leadership Team", href: "/about#leadership" },
            { name: "Core Values", href: "/about#values" },
        ],
    },
    {
        name: "Services",
        href: "/services",
        submenu: [
            { name: "Building Construction", href: "/services#building" },
            { name: "Civil Engineering", href: "/services#civil" },
            { name: "Project Management", href: "/services#pm" },
            { name: "Design & Planning", href: "/services#design" },
            { name: "Consultancy", href: "/services#consultancy" },
        ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo variant="default" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveSubmenu(item.name)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-headings font-semibold flex items-center gap-1 transition-colors",
                                        pathname === item.href
                                            ? "text-brand-gold"
                                            : "text-gray-600 hover:text-brand-gold"
                                    )}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Desktop Mega Menu Dropdown */}
                                {item.submenu && (
                                    <AnimatePresence>
                                        {activeSubmenu === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 py-2"
                                            >
                                                <div className="h-1 diagonal-stripes w-full absolute top-0" />
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-gold transition-colors border-l-2 border-transparent hover:border-brand-gold"
                                                        onClick={closeMenu}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}

                        {/* Quote Button */}
                        <Link
                            href="/contact"
                            className="ml-6 px-6 py-2.5 bg-brand-gold hover:bg-brand-blue text-white text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Get a Quote
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                isScrolled ? "text-brand-dark" : "text-brand-dark"
                            )}
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-3 py-3 text-base font-headings font-bold border-l-4",
                                            pathname === item.href
                                                ? "text-brand-gold border-brand-gold bg-gray-50"
                                                : "text-brand-dark border-transparent hover:bg-gray-50"
                                        )}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu && (
                                        <div className="pl-8 mt-1 space-y-1">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block py-2 text-sm text-gray-500 hover:text-brand-gold"
                                                    onClick={closeMenu}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
                                <a href="tel:07065007653" className="flex items-center gap-3 text-sm font-semibold text-brand-dark">
                                    <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    07065007653
                                </a>
                                <a href="mailto:hashebi@yahoo.com" className="flex items-center gap-3 text-sm font-semibold text-brand-dark">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    hashebi@yahoo.com
                                </a>
                                <Link
                                    href="/contact"
                                    className="mt-2 w-full py-4 bg-brand-gold text-white text-center font-bold uppercase tracking-widest rounded-md"
                                    onClick={closeMenu}
                                >
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                        <div className="h-2 diagonal-stripes w-full" />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
