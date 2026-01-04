import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {
  MapPin,
  Check,
  ArrowRight,
  Phone,
  Clock,
  Shield,
  Users,
  Monitor,
  Headphones,
  Building2,
  Network,
  HardDrive,
  Mail,
  Cloud,
  Wrench,
  Cpu,
  Bug,
  Briefcase,
  LucideIcon
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import ServiceCard from '@/components/ServiceCard'
import { locations, getLocationBySlug, Location } from '@/data/locations'
import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Headphones,
  Building2,
  Shield,
  Network,
  HardDrive,
  Mail,
  Cloud,
  Phone,
  Users,
  Wrench,
  Cpu,
  Bug,
  Briefcase,
}

const whyLocalMatters = [
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'Being local means we can be on-site quickly when you need hands-on support.'
  },
  {
    icon: Users,
    title: 'Personal Relationships',
    description: 'We\'re your neighbors. You\'ll know our team by name, and we\'ll know your business.'
  },
  {
    icon: Shield,
    title: 'Community Commitment',
    description: 'We\'re invested in the success of local businesses. Your success is our success.'
  },
  {
    icon: MapPin,
    title: 'No Extra Fees',
    description: 'No long-distance charges or travel fees for service calls within our area.'
  }
]

interface LocationPageProps {
  location: Location
  featuredServices: Array<{
    id: string
    title: string
    description: string
    iconName: string
    slug: string
  }>
}

export default function LocationPage({ location, featuredServices }: LocationPageProps) {
  return (
    <>
      <Head>
        <title>{location.title} | Right Cyber Solutions</title>
        <meta name="description" content={location.description} />
      </Head>

      <PageHero
        badge="Service Area"
        title={location.heroText}
        subtitle={`Professional IT services for businesses and residents in ${location.name}, Colorado and surrounding areas.`}
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Call 970-743-0588"
        secondaryCtaLink="tel:970-743-0588"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                {location.isComputerRepair
                  ? `Computer Repair Services in ${location.name}`
                  : `IT Services in ${location.name}, Colorado`
                }
              </h2>
              {location.introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-600 mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                  970-743-0588
                </a>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-primary-400 mr-3" />
                <h3 className="text-xl font-bold">Serving {location.name}</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Right Cyber Solutions proudly provides IT services to {location.name} and the surrounding communities. As a local company, we understand your needs and are committed to your success.
              </p>
              <div className="border-t border-slate-700 pt-6">
                <h4 className="font-semibold mb-3">Nearby Areas We Serve:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Local IT Support Matters
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              There's a difference between hiring a faceless out-of-state company and working with your neighbors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLocalMatters.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Services Available in {location.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a full range of IT services to businesses and residents in {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.iconName] || Monitor
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                  href={`/services/${service.slug}`}
                />
              )
            })}
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

      {/* Other Locations */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Other Areas We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {locations
              .filter((l) => l.id !== location.id)
              .map((loc) => (
                <Link
                  key={loc.id}
                  href={`/locations/${loc.slug}`}
                  className="bg-white hover:bg-primary-50 rounded-full px-6 py-2 text-slate-700 hover:text-primary-600 transition-colors font-medium shadow-sm border border-gray-100"
                >
                  {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need IT Help in ${location.name}?`}
        subtitle="Get in touch today for professional, local IT support."
        ctaText="Book Appointment"
        ctaLink="/book"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locations.map((location) => ({
    params: { slug: location.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      notFound: true,
    }
  }

  // Get featured services (first 6)
  const featuredServices = services.slice(0, 6).map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    iconName: s.icon.name || 'Monitor',
    slug: s.slug,
  }))

  return {
    props: {
      location,
      featuredServices,
    },
  }
}
