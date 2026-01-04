import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle?: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function CTASection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaLink}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="bg-white hover:bg-slate-100 text-slate-800 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
