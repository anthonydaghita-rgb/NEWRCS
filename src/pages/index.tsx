import Head from 'next/head'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Users,
  Shield,
  Check,
  ArrowRight,
  Phone,
  Zap,
  Building2
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { locations } from '@/data/locations'

const valueProps = [
  {
    icon: MapPin,
    title: 'Locally Owned',
    description: 'Based right here in Wiggins, we\'re your neighbors serving Northeastern Colorado.'
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Quick response times with same-day on-site support when you need it.'
  },
  {
    icon: Users,
    title: 'On-Site Support',
    description: 'Real technicians who come to your location for hands-on help.'
  }
]

const featuredServices = services.slice(0, 6)

export default function Home() {
  return (
    <>
      <Head>
        <title>Right Cyber Solutions | IT Services in Northeastern Colorado</title>
        <meta name="description" content="Professional IT services for businesses and residents in Wiggins, Fort Morgan, and Northeastern Colorado. Managed IT, cybersecurity, computer repair, and more." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-primary-500/20 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium">
                Serving Northeastern Colorado
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              IT Support You Can
              <span className="text-primary-400"> Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Professional IT services for businesses and residents in Wiggins, Fort Morgan, and all of Northeastern Colorado. Local support, fair pricing, no corporate runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:970-743-0588"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white/20 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 970-743-0588
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon
              return (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{prop.title}</h3>
                    <p className="text-slate-600 text-sm">{prop.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive IT solutions for businesses of all sizes. From managed services to computer repair, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services/managed-it-services"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Why Northeastern Colorado Businesses Choose Us
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're not a big-city IT company that treats you like a number. We're your neighbors, and we take pride in providing honest, reliable IT support that actually helps your business succeed.
              </p>
              <ul className="space-y-4">
                {[
                  'Local technicians who know your business',
                  'Straightforward pricing with no surprises',
                  'Same-day on-site support when you need it',
                  'Plain-English explanations, not tech jargon',
                  'Proactive maintenance to prevent problems'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-primary-400 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Your Technology Partner</h3>
                  <p className="text-slate-300">Not just a vendor</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                We believe in building relationships, not just fixing computers. When you work with Right Cyber Solutions, you get a technology partner who's invested in your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-400">15+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-400">100%</div>
                  <div className="text-sm text-slate-300">Satisfaction Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Here's what local businesses and residents have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We proudly serve businesses and residents throughout Northeastern Colorado.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="bg-slate-50 hover:bg-primary-50 rounded-lg p-4 text-center transition-colors group"
              >
                <Building2 className="w-8 h-8 text-slate-400 group-hover:text-primary-500 mx-auto mb-2 transition-colors" />
                <h3 className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Schedule a free consultation to discuss your IT needs. No pressure, no obligations - just honest advice."
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Call Us Now"
        secondaryCtaLink="tel:970-743-0588"
      />
    </>
  )
}
