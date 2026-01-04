import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const serviceLinks = [
  { name: 'Managed IT Services', href: '/services/managed-it-services' },
  { name: 'Cybersecurity Services', href: '/services/cybersecurity-services' },
  { name: 'Cloud Services', href: '/services/cloud-services' },
  { name: 'Microsoft 365 Support', href: '/services/microsoft-365-support' },
  { name: 'Network Management', href: '/services/network-management' },
  { name: 'Computer Repair', href: '/services/computer-repair' },
]

const locationLinks = [
  { name: 'Wiggins', href: '/locations/wiggins-it-services' },
  { name: 'Fort Morgan', href: '/locations/fort-morgan-it-services' },
  { name: 'Brush', href: '/locations/brush-it-services' },
  { name: 'Sterling', href: '/locations/sterling-it-services' },
  { name: 'Yuma', href: '/locations/yuma-it-services' },
  { name: 'Greeley', href: '/locations/greeley-it-services' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book Appointment', href: '/book' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="shieldGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 2 L36 8 L36 18 C36 28 28 35 20 38 C12 35 4 28 4 18 L4 8 Z"
                    fill="url(#shieldGradientFooter)"
                    stroke="#7dd3fc"
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
                <span className="text-xl font-bold text-primary-400">RightCyber</span>
                <span className="text-xs text-slate-400 tracking-wider uppercase">Solutions LLC</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-6">
              Professional IT services for businesses and residents in Northeastern Colorado. Local support you can trust.
            </p>
            <div className="space-y-3">
              <a href="tel:970-743-0588" className="flex items-center text-slate-300 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                <span>970-743-0588</span>
              </a>
              <a href="mailto:info@rightcybersolutions.com" className="flex items-center text-slate-300 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@rightcybersolutions.com</span>
              </a>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Wiggins, CO</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Clock className="w-4 h-4 mr-3" />
                <span>Mon-Fri: 9am - 5pm</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-primary-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/book"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Right Cyber Solutions LLC. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Serving Northeastern Colorado with pride
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
