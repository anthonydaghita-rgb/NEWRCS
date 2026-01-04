import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  showArrow?: boolean
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  showArrow = true
}: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full transition-all duration-200 hover:shadow-md hover:border-primary-100 hover:-translate-y-1">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
          <Icon className="w-6 h-6 text-primary-500" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          {description}
        </p>
        {showArrow && (
          <div className="flex items-center text-primary-500 text-sm font-medium">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </Link>
  )
}
