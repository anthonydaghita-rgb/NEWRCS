import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  rating: number
}

export default function TestimonialCard({
  quote,
  name,
  location,
  rating
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
          />
        ))}
      </div>
      <div className="relative mb-4">
        <Quote className="w-8 h-8 text-primary-100 absolute -top-2 -left-2" />
        <p className="text-slate-700 relative z-10 pl-4">
          "{quote}"
        </p>
      </div>
      <div className="border-t border-gray-100 pt-4 mt-4">
        <p className="font-semibold text-slate-800">{name}</p>
        <p className="text-sm text-slate-500">{location}</p>
      </div>
    </div>
  )
}
