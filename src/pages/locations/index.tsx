import Head from 'next/head'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { locations } from '@/data/locations'

export default function LocationsIndex() {
  return (
    <>
      <Head>
        <title>Service Areas | Right Cyber Solutions</title>
        <meta name="description" content="Right Cyber Solutions serves Northeastern Colorado including Wiggins, Fort Morgan, Brush, Sterling, Yuma, Akron, and Greeley." />
      </Head>

      <PageHero
        badge="Service Areas"
        title="Serving Northeastern Colorado"
        subtitle="We provide IT services throughout Northeastern Colorado, from Wiggins to Greeley and everywhere in between."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md hover:border-primary-100 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {location.description}
                </p>
                <div className="flex items-center text-primary-500 text-sm font-medium">
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We serve all of Northeastern Colorado. If you don't see your specific location listed, give us a call. We're likely able to help!
          </p>
          <a
            href="tel:970-743-0588"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Call 970-743-0588
          </a>
        </div>
      </section>

      <CTASection
        title="Ready for Local IT Support?"
        subtitle="Schedule a consultation to discuss your IT needs."
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </>
  )
}
