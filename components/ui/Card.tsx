import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-slate-200 rounded-lg p-6
        ${hover ? 'transition-shadow duration-200 hover:shadow-md' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface CardIconProps {
  children: ReactNode
  className?: string
}

export function CardIcon({ children, className = '' }: CardIconProps) {
  return (
    <div className={`text-accent-600 mb-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-primary-900 mb-2 ${className}`}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-slate-600 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}
