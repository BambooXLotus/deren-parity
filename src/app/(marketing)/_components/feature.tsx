import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'

type FeatureProps = {
  children: React.ReactNode
  className?: string
}

export const Feature: React.FC<FeatureProps> = ({ children, className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  )
}
