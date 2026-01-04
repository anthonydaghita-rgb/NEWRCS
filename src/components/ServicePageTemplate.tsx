import Head from 'next/head'
import Link from 'next/link'
import {
  Check,
  ArrowRight,
  ChevronDown,
  Phone
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import TestimonialCard from '@/components/TestimonialCard'
import ServiceCard from '@/components/ServiceCard'
import { Service, getRelatedServices } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { useState } from 'react'

interface ServicePageTemplateProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const relatedServices = getRelatedServices(service.relatedServices)
  const Icon = service.icon

  return (
    <>
      <Head>
        <title>{service.title} | Right Cyber Solutions</title>
        <meta name="description" content={`${service.description} Serving Wiggins, Fort Morgan, and Northeastern Colorado.`} />
      </Head>

      <PageHero
        badge="IT Services"
        title={service.title}
        subtitle={service.description}
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Call 970-743-0588"
        secondaryCtaLink="tel:970-743-0588"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {service.title} for Northeastern Colorado
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {service.description} Right Cyber Solutions provides professional {service.title.toLowerCase()} to businesses and residents throughout Wiggins, Fort Morgan, Brush, Sterling, and all of Northeastern Colorado.
              </p>
              <p className="text-slate-600 mb-8">
                As a local IT company, we understand the unique needs of businesses in our community. We're not a big-city firm that treats you like a number. We're your neighbors, and we're committed to providing honest, reliable IT support that actually helps you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Schedule Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:970-743-0588"
                  className="border border-slate-300 hover:border-primary-300 text-slate-700 hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Benefits of Our {service.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here's how our {service.title.toLowerCase()} helps your business succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialCard {...testimonials[0]} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-slate-800 pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-slate-600">
                Other services that work well with {service.title.toLowerCase()}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <ServiceCard
                  key={related.id}
                  title={related.title}
                  description={related.description}
                  icon={related.icon}
                  href={`/services/${related.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title={`Ready for ${service.title}?`}
        subtitle="Schedule a free consultation to discuss how we can help your business."
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </>
  )
}
