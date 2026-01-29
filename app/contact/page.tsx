"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    projectType: z.string().min(1, "Please select a project type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        try {
            // Using Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_ACCESS_KEY_HERE", // Replace with real key or env
                    ...data,
                    subject: `New Inquiry from ${data.name} - Hashebi Global`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
                reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error submitting form. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageHero
                title="Let's Build Together"
                subtitle="Get in touch for consultations, project quotes, and professional advisory services."
                breadcrumb="Home / Contact"
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-display font-black text-brand-dark">Get in <span className="text-brand-gold">Touch</span></h2>
                                <div className="h-1.5 w-24 bg-brand-gold diagonal-stripes" />
                                <p className="text-gray-600 font-headings">
                                    Whether you have a specific project in mind or just want to learn more about our services, we&apos;re here to help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl group hover:bg-brand-blue/5 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6 text-brand-blue group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                                        <a href="tel:07065007653" className="text-lg font-bold text-brand-dark hover:text-brand-blue">07065007653</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl group hover:bg-brand-gold/5 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all">
                                        <Mail className="w-6 h-6 text-brand-gold group-hover:text-brand-dark" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                                        <a href="mailto:hashebi@yahoo.com" className="text-lg font-bold text-brand-dark hover:text-brand-gold">hashebi@yahoo.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <div className="w-12 h-12 rounded-xl bg-brand-dark/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Visit Us</p>
                                        <p className="text-sm font-bold text-brand-dark leading-relaxed">
                                            3 Ekuredeurhoboroad, <br />Warri, Delta State, Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl">
                                    <div className="w-12 h-12 rounded-xl bg-brand-dark/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Business Hours</p>
                                        <p className="text-sm font-bold text-brand-dark">Mon-Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="text-xs text-brand-gold font-bold mt-1">Saturdays & Site: 24/7 on projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card variant="elevated" className="p-8 md:p-12 border border-gray-100 overflow-hidden relative">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-20 space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-display font-black text-brand-dark">Message Sent!</h3>
                                        <p className="text-gray-600 font-headings max-w-sm mx-auto">
                                            Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSuccess(false)}
                                            className="mt-8"
                                        >
                                            Send Another Message
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name *</label>
                                                <input
                                                    {...register("name")}
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand-gold focus:ring-0 text-brand-dark font-bold p-3 transition-colors"
                                                    placeholder="John Doe"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address *</label>
                                                <input
                                                    {...register("email")}
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand-blue focus:ring-0 text-brand-dark font-bold p-3 transition-colors"
                                                    placeholder="john@example.com"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Phone Number *</label>
                                                <input
                                                    {...register("phone")}
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand-gold focus:ring-0 text-brand-dark font-bold p-3 transition-colors"
                                                    placeholder="+234..."
                                                    disabled={isSubmitting}
                                                />
                                                {errors.phone && <p className="text-xs text-red-500 font-bold">{errors.phone.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Type *</label>
                                                <select
                                                    {...register("projectType")}
                                                    className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand-blue focus:ring-0 text-brand-dark font-bold p-3 transition-colors appearance-none"
                                                    disabled={isSubmitting}
                                                >
                                                    <option value="">Select Project Type</option>
                                                    <option value="residential">Residential Building</option>
                                                    <option value="commercial">Commercial Complex</option>
                                                    <option value="industrial">Industrial Facility</option>
                                                    <option value="infrastructure">Civil / Infrastructure</option>
                                                    <option value="consultancy">Consultancy</option>
                                                </select>
                                                {errors.projectType && <p className="text-xs text-red-500 font-bold">{errors.projectType.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Message *</label>
                                            <textarea
                                                {...register("message")}
                                                rows={5}
                                                className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 focus:border-brand-gold focus:ring-0 text-brand-dark font-bold p-3 transition-colors resize-none"
                                                placeholder="Tell us about your project..."
                                                disabled={isSubmitting}
                                            ></textarea>
                                            {errors.message && <p className="text-xs text-red-500 font-bold">{errors.message.message}</p>}
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full py-6"
                                            disabled={isSubmitting}
                                            icon={isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Inquiry"}
                                        </Button>
                                    </form>
                                )}
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[500px] w-full bg-gray-100 flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 diagonal-stripes opacity-20" />
                <div className="relative z-10 text-center space-y-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                        <MapPin className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-brand-dark">3 Ekuredeurhoboroad, Warri</h3>
                    <p className="text-gray-500 font-headings">Google Maps Integration Placeholder</p>
                </div>
            </section>
        </>
    );
}
