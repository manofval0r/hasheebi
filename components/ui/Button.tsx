import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, iconPosition = "right", children, ...props }, ref) => {
        const variants = {
            primary: "bg-brand-gold text-white hover:bg-brand-blue",
            secondary: "bg-brand-blue text-white hover:bg-brand-gold",
            outline: "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
            ghost: "bg-transparent text-brand-dark hover:bg-gray-100",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs",
            md: "px-6 py-3 text-sm",
            lg: "px-8 py-4 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center font-bold uppercase tracking-widest rounded-sm transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group overflow-hidden",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {icon && iconPosition === "left" && <span className="w-5 h-5">{icon}</span>}
                    {children}
                    {icon && iconPosition === "right" && (
                        <span className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                            {icon}
                        </span>
                    )}
                </span>

                {/* Animated Stripe Background on Hover */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 diagonal-stripes" />
            </button>
        );
    }
);

Button.displayName = "Button";
