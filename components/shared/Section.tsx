import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    intent?: 'default' | 'muted' | 'dark' | 'primary' | 'accent'
    container?: boolean
    spacing?: 'sm' | 'default' | 'lg' | 'none'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className = '', intent = 'default', container = true, spacing = 'default', children, ...props }, ref) => {

        const intentStyles = {
            default: 'bg-background text-foreground',
            muted: 'bg-secondary text-secondary-foreground',
            dark: 'bg-[#0a0a0a] text-white',
            primary: 'bg-primary text-primary-foreground',
            accent: 'bg-accent text-accent-foreground',
        }

        const spacingStyles = {
            sm: 'py-12 md:py-16',
            default: 'py-20 md:py-32',
            lg: 'py-24 md:py-40',
            none: 'py-0'
        }

        const combinedClassName = `${spacingStyles[spacing]} ${intentStyles[intent]} ${className}`

        return (
            <section ref={ref} className={combinedClassName} {...props}>
                {container ? (
                    <div className="container-custom">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        )
    }
)

Section.displayName = 'Section'

export { Section }
