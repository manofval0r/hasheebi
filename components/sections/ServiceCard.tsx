"use client";

import Link from "next/link";
import { LucideIcon, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FloatingIcon } from "@/components/ui/FloatingIcon";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
    return (
        <Link href={href}>
            <Card variant="bordered" className="group h-full p-8 relative overflow-hidden bg-white hover:bg-brand-dark transition-colors duration-500">
                {/* Animated Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 diagonal-stripes -mr-12 -mt-12 opacity-0 group-hover:opacity-10 transition-opacity rotate-45" />

                <div className="relative z-10">
                    <div className="mb-8">
                        <FloatingIcon
                            icon={Icon}
                            variant="gold"
                            size="md"
                            className="group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-brand-dark mb-4 group-hover:text-white transition-colors duration-500">
                        {title}
                    </h3>

                    <p className="text-gray-600 mb-8 group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                        {description}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue group-hover:text-brand-gold transition-colors duration-500">
                        Read More
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </div>
            </Card>
        </Link>
    );
}
