import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>IT Services | Right Cyber Solutions</title>
        <meta name="description" content="Complete IT services for businesses in Northeastern Colorado. Managed IT, cybersecurity, cloud services, computer repair, and more." />
      </Head>

      <PageHero
        badge="Our Services"
        title="IT Services for Northeastern Colorado"
        subtitle="Comprehensive technology solutions for businesses and residents. From managed IT to computer repair, we've got you covered."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure What You Need?"
        subtitle="No problem! Contact us for a free consultation and we'll help you figure out the best solution for your needs."
        ctaText="Get Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="Call 970-743-0588"
        secondaryCtaLink="tel:970-743-0588"
      />
    </>
  )
}
