import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'neutral' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  padding = 'lg',
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    neutral: 'bg-neutral-50',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary via-primary-dark to-primary',
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  return (
    <section id={id} className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      {children}
    </section>
  )
}
