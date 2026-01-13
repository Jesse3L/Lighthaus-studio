import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean
    variant?: 'default' | 'glass' | 'outline' | 'flat'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hover = false, variant = 'default', children, ...props }, ref) => {

        const variants = {
            default: 'bg-[#121212] text-white border border-white/10 shadow-2xl',
            glass: 'bg-black/40 backdrop-blur-md border border-white/10 shadow-xl',
            outline: 'bg-transparent border border-white/20 text-neutral-200',
            flat: 'bg-secondary border-none'
        }

        const hoverStyles = hover ? 'transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1' : ''

        return (
            <div
                ref={ref}
                className={`relative overflow-hidden ${variants[variant]} ${hoverStyles} ${className}`}
                {...props}
            >
                {children}
            </div>
        )
    }
)

Card.displayName = 'Card'

export { Card }
