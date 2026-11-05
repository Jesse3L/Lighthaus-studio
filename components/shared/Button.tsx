import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { LucideIcon } from "lucide-react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "beam" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg" | "icon"
  icon?: LucideIcon
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60"

const variants = {
  // The beam: the one bright thing on the page. Reserve for the main action.
  beam: "bg-accent text-accent-foreground hover:bg-accent-hover",
  primary: "bg-neutral-50 text-neutral-950 hover:bg-white",
  secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700",
  outline: "border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-300 hover:bg-white/5",
  ghost: "text-neutral-200 hover:bg-white/5 hover:text-white",
  link: "text-neutral-100 underline underline-offset-4 decoration-accent decoration-2 hover:text-white",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
  icon: "h-10 w-10",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, icon: Icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} ref={ref} {...props}>
        {children}
        {Icon && <Icon className="h-4 w-4" aria-hidden />}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
