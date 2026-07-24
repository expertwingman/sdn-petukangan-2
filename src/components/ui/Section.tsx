import * as React from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  background?: 'white' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'transparent' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, background = 'white', padding = 'lg', children, ...props }, ref) => {
    const bgClasses = {
      white: 'bg-white',
      neutral: 'bg-neutral-50',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      accent: 'bg-accent text-accent-foreground',
      transparent: 'bg-transparent',
      gradient: 'bg-gradient-to-br from-primary via-primary-dark to-primary/80 text-white',
    }

    const paddingClasses = {
      sm: 'py-8 md:py-12',
      md: 'py-12 md:py-16',
      lg: 'py-16 md:py-24',
      xl: 'py-24 md:py-32',
      none: 'py-0',
    }

    const content = container ? (
      <Container>{children}</Container>
    ) : (
      children
    )

    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          bgClasses[background],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {content}
      </section>
    )
  }
)
Section.displayName = 'Section'

export { Section }
