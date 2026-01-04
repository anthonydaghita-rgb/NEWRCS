export interface Location {
  id: string
  name: string
  slug: string
  title: string
  description: string
  heroText: string
  introParagraphs: string[]
  nearbyAreas: string[]
  isComputerRepair?: boolean
}

export const locations: Location[] = [
  {
    id: 'wiggins',
    name: 'Wiggins',
    slug: 'wiggins-it-services',
    title: 'Wiggins IT Services',
    description: 'Professional IT services for businesses and residents in Wiggins, Colorado.',
    heroText: 'Your Local IT Partner in Wiggins',
    introParagraphs: [
      'Right Cyber Solutions is proud to be based right here in Wiggins, Colorado. As your neighbors, we understand the unique technology needs of local businesses and residents. From the agricultural operations that drive our economy to the small businesses on Main Street, we provide the IT support that keeps Wiggins running.',
      'Being local means we\'re just minutes away when you need on-site support. No waiting for technicians to drive from Denver or dealing with out-of-state support centers. When you call Right Cyber Solutions, you\'re talking to someone who knows Wiggins and cares about our community.'
    ],
    nearbyAreas: ['Fort Morgan', 'Brush', 'Weldona', 'Orchard', 'Snyder']
  },
  {
    id: 'wiggins-repair',
    name: 'Wiggins Computer Repair',
    slug: 'wiggins-computer-repair',
    title: 'Wiggins Computer Repair',
    description: 'Fast, affordable computer repair services in Wiggins, Colorado.',
    heroText: 'Computer Repair in Wiggins',
    introParagraphs: [
      'Need computer repair in Wiggins? Right Cyber Solutions offers fast, reliable repair services for all types of computers. Whether your laptop won\'t turn on, your desktop is running slow, or you\'re dealing with virus problems, we can help.',
      'As a Wiggins-based business, we offer convenient local service without the long drive to Fort Morgan or Greeley. Drop off your computer at our location or schedule an on-site visit. Most repairs are completed within 1-3 business days.'
    ],
    nearbyAreas: ['Fort Morgan', 'Brush', 'Weldona', 'Orchard'],
    isComputerRepair: true
  },
  {
    id: 'fort-morgan',
    name: 'Fort Morgan',
    slug: 'fort-morgan-it-services',
    title: 'Fort Morgan IT Services',
    description: 'Professional IT services for businesses in Fort Morgan, Colorado.',
    heroText: 'IT Services for Fort Morgan Businesses',
    introParagraphs: [
      'Fort Morgan businesses deserve IT support that understands the local market. Right Cyber Solutions provides comprehensive technology services to businesses throughout Fort Morgan, from downtown shops to industrial facilities.',
      'As Morgan County\'s largest city, Fort Morgan has diverse IT needs. We serve healthcare providers, agricultural businesses, retailers, manufacturers, and professional services firms. Our team understands the technology challenges facing Fort Morgan businesses and provides solutions that work.'
    ],
    nearbyAreas: ['Wiggins', 'Brush', 'Log Lane Village', 'Hillrose', 'Snyder']
  },
  {
    id: 'brush',
    name: 'Brush',
    slug: 'brush-it-services',
    title: 'Brush IT Services',
    description: 'Reliable IT support for Brush, Colorado businesses and residents.',
    heroText: 'IT Support for Brush, Colorado',
    introParagraphs: [
      'Brush businesses and residents can count on Right Cyber Solutions for all their IT needs. We provide the same professional service to Brush that larger cities expect, but with the personal touch of a local provider.',
      'Whether you\'re a family-owned business, a healthcare facility, or a resident needing computer help, we\'re here for you. Our quick response times mean you\'re never waiting long for support, and our fair pricing makes professional IT accessible to everyone in Brush.'
    ],
    nearbyAreas: ['Fort Morgan', 'Wiggins', 'Hillrose', 'Snyder', 'Akron']
  },
  {
    id: 'sterling',
    name: 'Sterling',
    slug: 'sterling-it-services',
    title: 'Sterling IT Services',
    description: 'Expert IT services for Sterling and Logan County businesses.',
    heroText: 'IT Services in Sterling, Colorado',
    introParagraphs: [
      'Sterling and Logan County businesses need reliable IT support they can trust. Right Cyber Solutions extends our professional IT services to Sterling, bringing enterprise-level technology support to northeastern Colorado\'s hub.',
      'From Northeastern Junior College to the businesses along Main Street, we understand Sterling\'s diverse technology needs. Our team provides managed IT services, cybersecurity, cloud solutions, and responsive support to keep Sterling businesses productive.'
    ],
    nearbyAreas: ['Fleming', 'Peetz', 'Iliff', 'Crook', 'Atwood']
  },
  {
    id: 'yuma',
    name: 'Yuma',
    slug: 'yuma-it-services',
    title: 'Yuma IT Services',
    description: 'IT support and services for Yuma, Colorado and Yuma County.',
    heroText: 'IT Services for Yuma, Colorado',
    introParagraphs: [
      'Yuma and Yuma County businesses deserve IT support that understands rural business needs. Right Cyber Solutions provides professional technology services to Yuma, helping local businesses compete in an increasingly digital world.',
      'We know that reliable technology is crucial for Yuma\'s agricultural businesses, healthcare providers, and local retailers. Our remote support capabilities mean we can solve many issues instantly, while our on-site service ensures hands-on help when you need it.'
    ],
    nearbyAreas: ['Wray', 'Eckley', 'Joes', 'Vernon', 'Kirk']
  },
  {
    id: 'akron',
    name: 'Akron',
    slug: 'akron-it-services',
    title: 'Akron IT Services',
    description: 'Professional IT services for Akron and Washington County.',
    heroText: 'IT Support in Akron, Colorado',
    introParagraphs: [
      'Akron and Washington County businesses can rely on Right Cyber Solutions for professional IT support. We bring the same quality service to Akron that businesses in larger cities enjoy, with the personal attention that comes from a regional provider.',
      'Whether you\'re running a farm operation, a local business, or a county office, we have the expertise to support your technology needs. Our team understands the unique challenges of doing business in rural Colorado and provides solutions that work for you.'
    ],
    nearbyAreas: ['Otis', 'Cope', 'Anton', 'Woodrow', 'Last Chance']
  },
  {
    id: 'greeley',
    name: 'Greeley',
    slug: 'greeley-it-services',
    title: 'Greeley IT Services',
    description: 'Comprehensive IT services for Greeley and Weld County businesses.',
    heroText: 'IT Services for Greeley Businesses',
    introParagraphs: [
      'Greeley businesses looking for a personal alternative to big-city IT companies choose Right Cyber Solutions. We provide comprehensive IT services to Greeley and the surrounding Weld County area, combining professional expertise with genuine customer care.',
      'From UNC-area businesses to downtown Greeley, from agricultural operations to growing startups, we serve the diverse technology needs of Colorado\'s 10th largest city. Our team delivers the responsiveness and personal attention that sets us apart from larger IT firms.'
    ],
    nearbyAreas: ['Evans', 'Windsor', 'Eaton', 'LaSalle', 'Kersey']
  }
]

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(l => l.slug === slug)
}
