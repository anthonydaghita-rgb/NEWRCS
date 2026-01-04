import Head from 'next/head'
import Link from 'next/link'
import {
  User,
  Target,
  Heart,
  Award,
  MapPin,
  Clock,
  Shield,
  Users,
  Check,
  ArrowRight
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import { locations } from '@/data/locations'

const values = [
  {
    icon: Heart,
    title: 'Honesty',
    description: 'We give you straight answers, not sales pitches. If you don\'t need something, we\'ll tell you.'
  },
  {
    icon: Users,
    title: 'Reliability',
    description: 'When we say we\'ll be there, we\'ll be there. You can count on us when technology fails.'
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'We explain technology in plain English. No jargon, no confusion, just solutions that work.'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We do the job right the first time. No shortcuts, no band-aid fixes, just quality work.'
  }
]

const differentiators = [
  {
    title: 'Local & Accessible',
    description: 'We\'re based in Wiggins and serve all of Northeastern Colorado. When you call, you talk to someone who knows the area and understands local business needs.',
    icon: MapPin
  },
  {
    title: 'Fast Response',
    description: 'Most issues are resolved remotely within an hour. For on-site needs, we can often be there the same day.',
    icon: Clock
  },
  {
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden fees. We\'ll tell you what things cost upfront and never charge for work you didn\'t approve.',
    icon: Shield
  }
]

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Right Cyber Solutions</title>
        <meta name="description" content="Learn about Right Cyber Solutions, your local IT partner in Northeastern Colorado. Our story, mission, and commitment to honest, reliable IT support." />
      </Head>

      <PageHero
        badge="About Us"
        title="Your Local IT Partner"
        subtitle="Right Cyber Solutions was founded to bring professional IT services to Northeastern Colorado with a personal touch."
      />

      {/* Owner Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="w-24 h-24 text-slate-400" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Right Cyber Solutions was started with a simple mission: bring honest, reliable IT support to the businesses and families of Northeastern Colorado.
              </p>
              <p className="text-slate-600 mb-4">
                After years of watching local businesses struggle with out-of-state IT companies that didn't understand their needs or show up when promised, we decided to do something about it.
              </p>
              <p className="text-slate-600 mb-6">
                Today, we serve businesses and residents throughout Wiggins, Fort Morgan, Brush, Sterling, and the surrounding areas. We're proud to be part of this community and committed to helping our neighbors succeed with technology.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-500">
                <p className="text-slate-700 italic">
                  "Our goal is simple: be the IT company we'd want to hire ourselves. That means showing up when we say we will, charging fair prices, and actually solving problems instead of creating new ones."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600">
              To provide Northeastern Colorado businesses and residents with professional, honest, and accessible IT support that empowers them to focus on what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide IT services throughout Northeastern Colorado.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="bg-slate-50 hover:bg-primary-50 rounded-full px-6 py-2 text-slate-700 hover:text-primary-600 transition-colors font-medium"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Work Together"
        subtitle="Ready to experience IT support that actually cares? Get in touch today."
        ctaText="Contact Us"
        ctaLink="/contact"
        secondaryCtaText="Book Appointment"
        secondaryCtaLink="/book"
      />
    </>
  )
}
