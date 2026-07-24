import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-dark',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-dark',
        accent:
          'bg-accent text-accent-foreground hover:bg-accent-dark',
        success:
          'bg-success text-success-foreground hover:bg-success/90',
        error:
          'bg-error text-error-foreground hover:bg-error/90',
        warning:
          'bg-warning text-warning-foreground hover:bg-warning/90',
        info:
          'bg-info text-info-foreground hover:bg-info/90',
        outline:
          'border border-current bg-transparent text-primary hover:bg-primary/10',
        ghost:
          'bg-transparent text-primary hover:bg-primary/10',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
