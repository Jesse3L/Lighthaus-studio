import React from 'react'


export function H1({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`scroll-m-20 text-5xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] ${className}`}>
            {children}
        </h1>
    )
}

export function H2({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={`scroll-m-20 text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl leading-tight ${className}`}>
            {children}
        </h2>
    )
}

export function H3({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`scroll-m-20 text-2xl font-medium tracking-tight text-primary ${className}`}>
            {children}
        </h3>
    )
}

export function Lead({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`text-lg text-muted-foreground md:text-xl lg:text-2xl font-light leading-relaxed ${className}`}>
            {children}
        </p>
    )
}
