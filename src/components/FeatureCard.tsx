import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function FeatureCard({
  title,
  description,
  icon: Icon
}: FeatureCardProps) {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <Icon className="w-5 h-5 text-primary-500" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
