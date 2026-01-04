import Link from 'next/link'

interface PageHeroProps {
  badge?: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function PageHero({
  badge,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-block mb-4">
            <span className="bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium">
              {badge}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/20 inline-block"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
