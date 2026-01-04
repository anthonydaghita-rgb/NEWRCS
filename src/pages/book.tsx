'use client'

import { useState } from 'react'
import Head from 'next/head'
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  AlertTriangle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import { services } from '@/data/services'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWeekend, isBefore, startOfToday, addDays } from 'date-fns'

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM'
]

export default function BookAppointment() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    notes: ''
  })

  const today = startOfToday()
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Add padding days for the calendar grid
  const startDay = monthStart.getDay()
  const paddingDays = Array(startDay).fill(null)

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const isDateDisabled = (date: Date) => {
    return isWeekend(date) || isBefore(date, today)
  }

  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date)
      setSelectedTime('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <>
        <Head>
          <title>Appointment Booked | Right Cyber Solutions</title>
        </Head>

        <PageHero
          title="Appointment Requested!"
          subtitle="We've received your appointment request and will confirm within 1 business day."
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Thank You, {formState.name}!
              </h2>
              <p className="text-green-700 mb-6">
                Your appointment request has been submitted. We'll send a confirmation email to <strong>{formState.email}</strong> within 1 business day.
              </p>
              <div className="bg-white rounded-lg p-4 text-left mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Appointment Details:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Date:</strong> {selectedDate && format(selectedDate, 'MMMM d, yyyy')}</li>
                  <li><strong>Time:</strong> {selectedTime}</li>
                  <li><strong>Service:</strong> {services.find(s => s.id === formState.service)?.title || formState.service}</li>
                </ul>
              </div>
              <p className="text-slate-600 text-sm">
                Questions? Call us at <a href="tel:970-743-0588" className="text-primary-500 hover:text-primary-600 font-medium">970-743-0588</a>
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Book Appointment | Right Cyber Solutions</title>
        <meta name="description" content="Schedule an IT service appointment with Right Cyber Solutions. Choose your preferred date and time for on-site or remote support." />
      </Head>

      <PageHero
        badge="Schedule Service"
        title="Book an Appointment"
        subtitle="Schedule a time that works for you. We'll confirm your appointment within 1 business day."
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-slate-800 mb-6">Request an Appointment</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="970-555-0123"
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
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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

                  {/* Date Picker */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <button
                          type="button"
                          onClick={prevMonth}
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <h3 className="font-semibold text-slate-800">
                          {format(currentMonth, 'MMMM yyyy')}
                        </h3>
                        <button
                          type="button"
                          onClick={nextMonth}
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-slate-600" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {paddingDays.map((_, index) => (
                          <div key={`padding-${index}`} className="p-2" />
                        ))}
                        {days.map((day) => {
                          const disabled = isDateDisabled(day)
                          const selected = selectedDate && isSameDay(day, selectedDate)

                          return (
                            <button
                              key={day.toISOString()}
                              type="button"
                              onClick={() => handleDateSelect(day)}
                              disabled={disabled}
                              className={`
                                p-2 text-sm rounded-lg transition-colors
                                ${disabled ? 'text-slate-300 cursor-not-allowed' : 'hover:bg-primary-50 cursor-pointer'}
                                ${selected ? 'bg-primary-500 text-white hover:bg-primary-600' : ''}
                                ${!disabled && !selected ? 'text-slate-700' : ''}
                              `}
                            >
                              {format(day, 'd')}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    {selectedDate && (
                      <p className="text-sm text-primary-600 mt-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Selected: {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                      </p>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`
                            py-3 px-4 rounded-lg border text-sm font-medium transition-colors
                            ${selectedTime === time
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 text-slate-700 hover:border-primary-200 hover:bg-primary-50/50'}
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formState.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please describe your issue or what you need help with..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || !selectedDate || !selectedTime || !formState.service}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-slate-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Appointment Info Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Appointment Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Business Hours</p>
                        <p className="text-sm text-slate-600">Mon-Fri: 9am - 5pm</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Service Area</p>
                        <p className="text-sm text-slate-600">Northeastern Colorado</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Need Immediate Help?</p>
                        <a href="tel:970-743-0588" className="text-sm text-primary-500 hover:text-primary-600">
                          Call 970-743-0588
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      'Confirmation email within 1 business day',
                      'We\'ll call to verify your appointment',
                      'On-site or remote support available',
                      'Fair, upfront pricing—no surprises'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Urgent Issue Card */}
                <div className="bg-red-50 rounded-xl border border-red-100 p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-800">Urgent Issue?</h3>
                      <p className="text-sm text-red-700 mt-1">
                        For emergencies like ransomware, network outages, or critical system failures, please call us directly for fastest response.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
