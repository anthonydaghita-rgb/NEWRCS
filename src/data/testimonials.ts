export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Right Cyber Solutions is top notch and one of the best. They helped us set up our entire office network and are always there when we need them.',
    name: 'Barb Frihauf',
    location: 'Wiggins, CO',
    rating: 5
  },
  {
    id: '2',
    quote: 'Finally, IT support that actually understands small business needs. Quick response times and fair pricing. Highly recommend!',
    name: 'Mike Thompson',
    location: 'Fort Morgan, CO',
    rating: 5
  },
  {
    id: '3',
    quote: 'After dealing with out-of-state IT companies, it\'s refreshing to have local support. They fixed our ransomware issue and set us up with proper backups.',
    name: 'Sarah Jenkins',
    location: 'Brush, CO',
    rating: 5
  },
  {
    id: '4',
    quote: 'Professional, knowledgeable, and actually explains things in plain English. Our go-to for all IT needs.',
    name: 'David Chen',
    location: 'Sterling, CO',
    rating: 5
  }
]
