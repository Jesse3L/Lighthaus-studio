import React from 'react'

// Archivo Expanded runs wide, so the scale is a step smaller than a normal-width face.

export function H1({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h1>
  )
}

export function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`scroll-m-20 text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl lg:text-[2.75rem] ${className}`}>
      {children}
    </h2>
  )
}

export function H3({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`scroll-m-20 text-xl font-semibold text-neutral-50 ${className}`}>{children}</h3>
}

export function Lead({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`max-w-[62ch] text-lg leading-relaxed text-neutral-300 md:text-xl ${className}`}>{children}</p>
}
