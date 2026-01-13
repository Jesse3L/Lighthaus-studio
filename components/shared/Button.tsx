import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { LucideIcon } from "lucide-react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg" | "icon"
  icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, icon: Icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    // Base styles
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase letter-spacing-1 ease-out active:scale-95"

    // Variants
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-neutral-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5",
      secondary: "bg-secondary text-secondary-foreground hover:bg-neutral-200 border border-transparent hover:border-neutral-300",
      outline: "border border-neutral-200 bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300",
      ghost: "hover:bg-accent/10 hover:text-accent",
      link: "text-primary underline-offset-4 hover:underline decoration-accent decoration-2",
    }

    // Sizes
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-12 px-8 py-2",
      lg: "h-14 px-10 text-base",
      icon: "h-10 w-10",
    }

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <Comp
        className={combinedClassName}
        ref={ref}
        {...props}
      >
        {children}
        {Icon && <Icon className="ml-2 h-4 w-4" />}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
