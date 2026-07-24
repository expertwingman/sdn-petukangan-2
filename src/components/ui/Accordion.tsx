import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const Accordion = React.forwardRef<
  HTMLDetailsElement,
  React.DetailsHTMLAttributes<HTMLDetailsElement> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <details
      ref={ref}
      className={cn(
        'group rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-sm transition-all duration-200 hover:border-neutral-300',
        className
      )}
      {...props}
    >
      <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-primary list-none">
        <span>{title}</span>
        <ChevronDown className="h-5 w-5 text-neutral-500 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </details>
  )
})
Accordion.displayName = 'Accordion'

export { Accordion }
