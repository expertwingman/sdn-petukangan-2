import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  className?: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
}

export function Heading({
  children,
  className,
  level = 'h2',
  size,
  align = 'left',
  gradient = false,
}: HeadingProps) {
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  }

  const alignMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const finalSize = size || (level === 'h1' ? '5xl' : level === 'h2' ? '4xl' : level === 'h3' ? '3xl' : level === 'h4' ? '2xl' : level === 'h5' ? 'xl' : 'lg')

  const Component = level

  return (
    <Component
      className={cn(
        'font-bold tracking-tight',
        sizeMap[finalSize as keyof typeof sizeMap] || 'text-4xl',
        alignMap[align],
        gradient && 'bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Component>
  )
}
