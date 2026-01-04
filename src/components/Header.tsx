'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Monitor,
  Headphones,
  Building2,
  Shield,
  Network,
  HardDrive,
  Mail as MailIcon,
  Cloud,
  Phone as PhoneIcon,
  Users,
  Laptop,
  Wrench,
  Cpu,
  Bug,
  Briefcase
} from 'lucide-react'

const serviceMenuItems = [
  { name: 'Managed IT Services', href: '/services/managed-it-services', icon: Monitor },
  { name: 'IT Support & Help Desk', href: '/services/it-support-help-desk', icon: Headphones },
  { name: 'Business IT Support', href: '/services/business-it-support', icon: Building2 },
  { name: 'Cybersecurity Services', href: '/services/cybersecurity-services', icon: Shield },
  { name: 'Network Management', href: '/services/network-management', icon: Network },
  { name: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery', icon: HardDrive },
  { name: 'Microsoft 365 Support', href: '/services/microsoft-365-support', icon: MailIcon },
  { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud },
  { name: 'VoIP & Phone Systems', href: '/services/voip-phone-systems', icon: PhoneIcon },
  { name: 'On-Site IT Support', href: '/services/on-site-it-support', icon: Users },
  { name: 'Remote IT Support', href: '/services/remote-it-support', icon: Laptop },
  { name: 'Computer Repair', href: '/services/computer-repair', icon: Wrench },
  { name: 'PC Upgrades & Diagnostics', href: '/services/pc-upgrades-diagnostics', icon: Cpu },
  { name: 'Virus & Malware Removal', href: '/services/virus-malware-removal', icon: Bug },
  { name: 'Small Business IT Consulting', href: '/services/small-business-it-consulting', icon: Briefcase },
]

const locationMenuItems = [
  { name: 'Wiggins IT Services', href: '/locations/wiggins-it-services' },
  { name: 'Wiggins Computer Repair', href: '/locations/wiggins-computer-repair' },
  { name: 'Fort Morgan', href: '/locations/fort-morgan-it-services' },
  { name: 'Brush', href: '/locations/brush-it-services' },
  { name: 'Sterling', href: '/locations/sterling-it-services' },
  { name: 'Yuma', href: '/locations/yuma-it-services' },
  { name: 'Akron', href: '/locations/akron-it-services' },
  { name: 'Greeley', href: '/locations/greeley-it-services' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setLocationsOpen(false)
  }, [router.pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4 md:space-x-6">
              <a href="tel:970-743-0588" className="flex items-center hover:text-primary-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>970-743-0588</span>
              </a>
              <a href="mailto:info@rightcybersolutions.com" className="hidden sm:flex items-center hover:text-primary-300 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@rightcybersolutions.com</span>
              </a>
            </div>
            <div className="flex items-center text-slate-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Wiggins, CO</span>
              <span className="hidden md:inline"> • Serving Northeastern Colorado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 relative">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M20 2 L36 8 L36 18 C36 28 28 35 20 38 C12 35 4 28 4 18 L4 8 Z"
                      fill="url(#shieldGradient)"
                      stroke="#0369a1"
                      strokeWidth="1"
                    />
                    <path
                      d="M14 20 L18 24 L26 16"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary-500">RightCyber</span>
                  <span className="text-xs text-slate-500 tracking-wider uppercase">Solutions LLC</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  router.pathname === '/' ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => {
                    setServicesOpen(!servicesOpen)
                    setLocationsOpen(false)
                  }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    router.pathname.startsWith('/services') ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      IT Services
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {serviceMenuItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-4 py-2.5 text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            <IconComponent className="w-5 h-5 mr-3 text-slate-400" />
                            <span className="text-sm">{item.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div ref={locationsRef} className="relative">
                <button
                  onClick={() => {
                    setLocationsOpen(!locationsOpen)
                    setServicesOpen(false)
                  }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    router.pathname.startsWith('/locations') ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                  }`}
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {locationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {locationMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  router.pathname === '/about' ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  router.pathname === '/contact' ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>

              <Link
                href="/book"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  router.pathname === '/book' ? 'text-primary-500 bg-primary-50' : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                }`}
              >
                Book Online
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/book"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {serviceMenuItems.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-primary-500"
                        >
                          <IconComponent className="w-4 h-4 mr-2 text-slate-400" />
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Locations Accordion */}
              <div>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  <span>Service Areas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {locationsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {locationMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
                Contact
              </Link>
              <Link href="/book" className="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-50">
                Book Online
              </Link>

              <div className="pt-4">
                <Link
                  href="/book"
                  className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
