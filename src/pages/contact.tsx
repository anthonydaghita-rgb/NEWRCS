'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import { services } from '@/data/services'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '970-743-0588',
    href: 'tel:970-743-0588',
    description: 'Call us directly for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@rightcybersolutions.com',
    href: 'mailto:info@rightcybersolutions.com',
    description: 'Email us anytime'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Wiggins, Colorado',
    href: null,
    description: 'Serving Northeastern Colorado'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon-Fri: 9am - 5pm',
    href: null,
    description: 'Emergency support available'
  }
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Head>
        <title>Contact Us | Right Cyber Solutions</title>
        <meta name="description" content="Contact Right Cyber Solutions for IT support in Northeastern Colorado. Call 970-743-0588 or fill out our contact form." />
      </Head>

      <PageHero
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Have a question or need IT support? We're here to help. Reach out and we'll get back to you quickly."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{item.title}</h3>
                          {item.href ? (
                            <a href={item.href} className="text-primary-500 hover:text-primary-600">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-700">{item.value}</p>
                          )}
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">Need Immediate Help?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    For urgent IT issues, call us directly for the fastest response.
                  </p>
                  <a
                    href="tel:970-743-0588"
                    className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within one business day.
                </p>

                {status === 'success' ? (
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-green-600 hover:text-green-700 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="(970) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your Business Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your IT needs or the issue you're experiencing..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
