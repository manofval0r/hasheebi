import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "elevated" | "bordered" | "glass";
    hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", hoverable = true, children, ...props }, ref) => {
        const variants = {
            default: "bg-white",
            elevated: "bg-white professional-shadow",
            bordered: "bg-white border border-gray-100",
            glass: "glass-card",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-sm overflow-hidden transition-all duration-300",
                    variants[variant],
                    hoverable && "hover:-translate-y-2 hover:professional-shadow-hover",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
