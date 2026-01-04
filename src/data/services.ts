import {
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
  Laptop,
  Wrench,
  Cpu,
  Bug,
  Briefcase,
  LucideIcon
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  slug: string
  features: string[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
  relatedServices: string[]
}

export const services: Service[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    shortTitle: 'Managed IT Services',
    description: 'Complete IT management and monitoring for your business. We handle everything from day-to-day support to strategic planning.',
    icon: Monitor,
    slug: 'managed-it-services',
    features: [
      '24/7 System Monitoring',
      'Proactive Maintenance',
      'Help Desk Support',
      'Network Management',
      'Security Updates',
      'Regular Reporting'
    ],
    benefits: [
      'Predictable monthly IT costs',
      'Reduced downtime and disruptions',
      'Access to enterprise-level expertise',
      'Focus on your business, not IT problems'
    ],
    faqs: [
      {
        question: 'What does managed IT services include?',
        answer: 'Our managed IT services include 24/7 monitoring, help desk support, proactive maintenance, security updates, backup management, and strategic IT planning - all for a predictable monthly fee.'
      },
      {
        question: 'How quickly can you respond to issues?',
        answer: 'We typically respond to critical issues within 15 minutes and resolve most problems remotely within an hour. For on-site needs in Northeastern Colorado, we can usually be there the same day.'
      },
      {
        question: 'Is managed IT cost-effective for small businesses?',
        answer: 'Absolutely! Managed IT eliminates the need for a full-time IT employee while providing access to a team of experts. Most small businesses see significant savings compared to break-fix IT support.'
      }
    ],
    relatedServices: ['it-support-help-desk', 'network-management', 'cybersecurity-services']
  },
  {
    id: 'it-support',
    title: 'IT Support & Help Desk',
    shortTitle: 'IT Support & Help Desk',
    description: 'Fast, friendly technical support when you need it. Our help desk team resolves issues quickly so you can get back to work.',
    icon: Headphones,
    slug: 'it-support-help-desk',
    features: [
      'Phone & Email Support',
      'Remote Troubleshooting',
      'Quick Response Times',
      'Ticketing System',
      'Knowledge Base Access',
      'User Training'
    ],
    benefits: [
      'Minimize productivity loss',
      'Professional support without full-time costs',
      'Issues tracked and documented',
      'Friendly, patient technicians'
    ],
    faqs: [
      {
        question: 'What are your support hours?',
        answer: 'Our standard support hours are Monday through Friday, 9am to 5pm. Emergency support is available outside these hours for managed service clients.'
      },
      {
        question: 'Can you support remote employees?',
        answer: 'Yes! We provide full support for remote workers, including secure remote access setup, cloud application support, and virtual troubleshooting.'
      },
      {
        question: 'How do I submit a support request?',
        answer: 'You can call us directly, email our support address, or use our online ticketing portal. We respond to all requests promptly.'
      }
    ],
    relatedServices: ['managed-it-services', 'remote-it-support', 'on-site-it-support']
  },
  {
    id: 'business-it',
    title: 'Business IT Support',
    shortTitle: 'Business IT Support',
    description: 'Comprehensive IT solutions designed for small and medium businesses in Northeastern Colorado.',
    icon: Building2,
    slug: 'business-it-support',
    features: [
      'Business Continuity Planning',
      'IT Infrastructure Management',
      'Employee Onboarding/Offboarding',
      'Software Licensing Management',
      'Vendor Coordination',
      'Technology Budgeting'
    ],
    benefits: [
      'Strategic IT alignment with business goals',
      'Reduced operational risks',
      'Streamlined technology processes',
      'Expert guidance on technology decisions'
    ],
    faqs: [
      {
        question: 'What size businesses do you work with?',
        answer: 'We specialize in small to medium businesses with 1-50 employees. Our solutions scale to fit your needs whether you\'re a solo entrepreneur or a growing team.'
      },
      {
        question: 'Can you help us plan for growth?',
        answer: 'Absolutely. We help businesses plan their IT infrastructure to support growth, including scalable solutions and technology roadmaps.'
      },
      {
        question: 'Do you offer on-site support?',
        answer: 'Yes, we provide on-site support throughout Northeastern Colorado. Our local presence means we can be there when you need hands-on assistance.'
      }
    ],
    relatedServices: ['managed-it-services', 'small-business-it-consulting', 'network-management']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    shortTitle: 'Cybersecurity Services',
    description: 'Protect your business from cyber threats with our comprehensive security solutions and monitoring.',
    icon: Shield,
    slug: 'cybersecurity-services',
    features: [
      'Threat Detection & Prevention',
      'Firewall Management',
      'Antivirus & Anti-malware',
      'Security Assessments',
      'Employee Security Training',
      'Incident Response'
    ],
    benefits: [
      'Protection against ransomware and malware',
      'Compliance with industry regulations',
      'Peace of mind for you and your customers',
      'Reduced risk of costly data breaches'
    ],
    faqs: [
      {
        question: 'Is cybersecurity really necessary for small businesses?',
        answer: 'Yes! Small businesses are increasingly targeted by cybercriminals because they often have weaker defenses. 43% of cyber attacks target small businesses.'
      },
      {
        question: 'What is ransomware and how do you protect against it?',
        answer: 'Ransomware is malicious software that encrypts your files and demands payment. We protect against it with layered security, regular backups, email filtering, and employee training.'
      },
      {
        question: 'Do you help with compliance requirements?',
        answer: 'Yes, we help businesses meet various compliance requirements including HIPAA, PCI-DSS, and general data protection best practices.'
      }
    ],
    relatedServices: ['virus-malware-removal', 'backup-disaster-recovery', 'network-management']
  },
  {
    id: 'network-management',
    title: 'Network Management',
    shortTitle: 'Network Management',
    description: 'Keep your network running smoothly with professional setup, monitoring, and maintenance.',
    icon: Network,
    slug: 'network-management',
    features: [
      'Network Design & Setup',
      'WiFi Optimization',
      'Router & Switch Configuration',
      'Network Monitoring',
      'Bandwidth Management',
      'Network Security'
    ],
    benefits: [
      'Fast, reliable network connections',
      'Optimized performance for your needs',
      'Secure network architecture',
      'Proactive issue detection'
    ],
    faqs: [
      {
        question: 'Can you improve our slow WiFi?',
        answer: 'Yes! We analyze your space, identify dead zones and interference, and optimize your WiFi setup for maximum coverage and speed.'
      },
      {
        question: 'Do you set up networks for new offices?',
        answer: 'Absolutely. We handle complete network infrastructure including cabling, switches, routers, WiFi access points, and security configuration.'
      },
      {
        question: 'How do you monitor our network?',
        answer: 'We use professional monitoring tools to track network health, bandwidth usage, and security threats 24/7, alerting us to issues before they cause problems.'
      }
    ],
    relatedServices: ['managed-it-services', 'cybersecurity-services', 'voip-phone-systems']
  },
  {
    id: 'backup-recovery',
    title: 'Backup & Disaster Recovery',
    shortTitle: 'Backup & Disaster Recovery',
    description: 'Protect your critical data with automated backups and tested recovery procedures.',
    icon: HardDrive,
    slug: 'backup-disaster-recovery',
    features: [
      'Automated Daily Backups',
      'Cloud & Local Backup Options',
      'Disaster Recovery Planning',
      'Regular Backup Testing',
      'Quick Data Restoration',
      'Business Continuity Support'
    ],
    benefits: [
      'Never lose critical business data',
      'Quick recovery from any disaster',
      'Peace of mind knowing data is safe',
      'Compliance with data retention requirements'
    ],
    faqs: [
      {
        question: 'How often should we backup our data?',
        answer: 'We recommend daily backups for most businesses, with more frequent backups for critical systems. Our solutions automate this process completely.'
      },
      {
        question: 'Where is our backup data stored?',
        answer: 'We use a combination of local and cloud backups for maximum protection. Cloud backups are stored in secure, encrypted data centers.'
      },
      {
        question: 'How quickly can you restore our data?',
        answer: 'Recovery time depends on the amount of data, but we can typically restore critical files within hours and full systems within a day.'
      }
    ],
    relatedServices: ['managed-it-services', 'cloud-services', 'cybersecurity-services']
  },
  {
    id: 'microsoft-365',
    title: 'Microsoft 365 Support',
    shortTitle: 'Microsoft 365 Support',
    description: 'Get the most out of Microsoft 365 with expert setup, migration, and ongoing support.',
    icon: Mail,
    slug: 'microsoft-365-support',
    features: [
      'Microsoft 365 Setup & Migration',
      'Email Configuration',
      'SharePoint & Teams Setup',
      'User Management',
      'Security Configuration',
      'Training & Support'
    ],
    benefits: [
      'Professional email with your domain',
      'Collaborate effectively with Teams',
      'Secure cloud storage with OneDrive',
      'Always up-to-date Office applications'
    ],
    faqs: [
      {
        question: 'Can you migrate our existing email to Microsoft 365?',
        answer: 'Yes! We handle complete email migrations from any provider, ensuring no lost emails and minimal disruption to your business.'
      },
      {
        question: 'Which Microsoft 365 plan do we need?',
        answer: 'We\'ll help you choose the right plan based on your needs. Most small businesses do well with Business Basic or Business Standard.'
      },
      {
        question: 'Do you provide training on Microsoft 365?',
        answer: 'Yes, we offer training to help your team get the most out of Microsoft 365 tools like Teams, SharePoint, and OneDrive.'
      }
    ],
    relatedServices: ['cloud-services', 'managed-it-services', 'it-support-help-desk']
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    shortTitle: 'Cloud Services',
    description: 'Move to the cloud with confidence. We help you leverage cloud technology for flexibility and efficiency.',
    icon: Cloud,
    slug: 'cloud-services',
    features: [
      'Cloud Migration Planning',
      'Cloud Infrastructure Setup',
      'SaaS Application Management',
      'Cloud Security',
      'Cost Optimization',
      'Hybrid Cloud Solutions'
    ],
    benefits: [
      'Access your data from anywhere',
      'Reduce hardware costs',
      'Scale resources as needed',
      'Improved disaster recovery'
    ],
    faqs: [
      {
        question: 'Is the cloud secure for business data?',
        answer: 'Yes, when properly configured. Major cloud providers invest heavily in security. We ensure your cloud setup follows security best practices.'
      },
      {
        question: 'Will moving to the cloud save us money?',
        answer: 'For most businesses, yes. Cloud reduces hardware costs, electricity, and maintenance while providing better reliability and flexibility.'
      },
      {
        question: 'Can we keep some things on-premise?',
        answer: 'Absolutely. Many businesses benefit from a hybrid approach, keeping some resources local while leveraging the cloud for others.'
      }
    ],
    relatedServices: ['microsoft-365-support', 'backup-disaster-recovery', 'managed-it-services']
  },
  {
    id: 'voip',
    title: 'VoIP & Phone Systems',
    shortTitle: 'VoIP & Phone Systems',
    description: 'Modern business phone systems that grow with your business and reduce costs.',
    icon: Phone,
    slug: 'voip-phone-systems',
    features: [
      'VoIP Phone Setup',
      'Auto Attendant Configuration',
      'Call Routing & Queues',
      'Voicemail to Email',
      'Mobile Integration',
      'Video Conferencing'
    ],
    benefits: [
      'Lower phone bills',
      'Professional call handling',
      'Work from anywhere',
      'Easy to add or remove lines'
    ],
    faqs: [
      {
        question: 'What is VoIP?',
        answer: 'VoIP (Voice over Internet Protocol) uses your internet connection for phone calls instead of traditional phone lines, typically at much lower cost.'
      },
      {
        question: 'Will call quality be good?',
        answer: 'With a decent internet connection, VoIP call quality is excellent - often better than traditional phone lines. We\'ll assess your connection before setup.'
      },
      {
        question: 'Can we keep our existing phone numbers?',
        answer: 'Yes, we can port your existing phone numbers to the new VoIP system at no extra charge.'
      }
    ],
    relatedServices: ['network-management', 'cloud-services', 'managed-it-services']
  },
  {
    id: 'on-site',
    title: 'On-Site IT Support',
    shortTitle: 'On-Site IT Support',
    description: 'When remote support isn\'t enough, we come to you. Local IT support throughout Northeastern Colorado.',
    icon: Users,
    slug: 'on-site-it-support',
    features: [
      'Same-Day On-Site Visits',
      'Hardware Installation',
      'Network Infrastructure Work',
      'New Office Setup',
      'Equipment Moves',
      'Hands-On Troubleshooting'
    ],
    benefits: [
      'Local technicians who know your business',
      'Hands-on help when you need it',
      'No waiting for shipping or travel',
      'Personal relationship with your IT team'
    ],
    faqs: [
      {
        question: 'How quickly can you get to our location?',
        answer: 'For most locations in Northeastern Colorado, we can provide same-day on-site service. Emergency visits are prioritized.'
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve all of Northeastern Colorado including Wiggins, Fort Morgan, Brush, Sterling, Yuma, Akron, Greeley, and surrounding areas.'
      },
      {
        question: 'Is there an extra charge for on-site visits?',
        answer: 'On-site visits are included in our managed service plans. For non-managed clients, we charge a reasonable trip fee based on distance.'
      }
    ],
    relatedServices: ['remote-it-support', 'it-support-help-desk', 'managed-it-services']
  },
  {
    id: 'remote',
    title: 'Remote IT Support',
    shortTitle: 'Remote IT Support',
    description: 'Fast remote support to solve most issues without waiting for an on-site visit.',
    icon: Laptop,
    slug: 'remote-it-support',
    features: [
      'Instant Remote Access',
      'Screen Sharing Support',
      'Remote Troubleshooting',
      'Software Installation',
      'System Configuration',
      'Quick Issue Resolution'
    ],
    benefits: [
      'Immediate help for most issues',
      'No need to wait for someone to arrive',
      'Cost-effective support option',
      'Support from anywhere with internet'
    ],
    faqs: [
      {
        question: 'How does remote support work?',
        answer: 'We use secure remote access software to connect to your computer with your permission. You can watch everything we do on screen.'
      },
      {
        question: 'Is remote access secure?',
        answer: 'Yes, we use encrypted connections and only connect with your explicit permission. You can end the session at any time.'
      },
      {
        question: 'What issues can be fixed remotely?',
        answer: 'Most software issues, email problems, virus removal, system configuration, and many other issues can be resolved remotely. Hardware issues typically require on-site support.'
      }
    ],
    relatedServices: ['on-site-it-support', 'it-support-help-desk', 'virus-malware-removal']
  },
  {
    id: 'computer-repair',
    title: 'Computer Repair',
    shortTitle: 'Computer Repair',
    description: 'Professional computer repair services for businesses and residents in Northeastern Colorado.',
    icon: Wrench,
    slug: 'computer-repair',
    features: [
      'Hardware Diagnostics',
      'Component Replacement',
      'Screen Repair',
      'Data Recovery',
      'System Restoration',
      'Performance Optimization'
    ],
    benefits: [
      'Extend the life of your equipment',
      'Avoid expensive replacements',
      'Local service you can trust',
      'Quick turnaround times'
    ],
    faqs: [
      {
        question: 'Do you repair both PCs and Macs?',
        answer: 'Yes, we repair all types of computers including Windows PCs, Apple Macs, and laptops of all brands.'
      },
      {
        question: 'How long does a typical repair take?',
        answer: 'Most repairs are completed within 1-3 business days. We\'ll give you an estimate when we diagnose the issue.'
      },
      {
        question: 'Is it worth repairing my old computer?',
        answer: 'We\'ll give you an honest assessment. Sometimes repair makes sense, other times replacement is more cost-effective. We\'ll help you decide.'
      }
    ],
    relatedServices: ['pc-upgrades-diagnostics', 'virus-malware-removal', 'on-site-it-support']
  },
  {
    id: 'pc-upgrades',
    title: 'PC Upgrades & Diagnostics',
    shortTitle: 'PC Upgrades & Diagnostics',
    description: 'Speed up your computer with upgrades or find out what\'s causing problems with professional diagnostics.',
    icon: Cpu,
    slug: 'pc-upgrades-diagnostics',
    features: [
      'RAM Upgrades',
      'SSD Installation',
      'Hardware Diagnostics',
      'Performance Tuning',
      'Graphics Card Upgrades',
      'System Assessment'
    ],
    benefits: [
      'Faster computer performance',
      'Extended equipment lifespan',
      'Cost-effective alternative to replacement',
      'Expert recommendations'
    ],
    faqs: [
      {
        question: 'Will an SSD really make my computer faster?',
        answer: 'Yes! Upgrading to an SSD is often the single biggest performance improvement you can make. Boot times and application loading become dramatically faster.'
      },
      {
        question: 'How much RAM do I need?',
        answer: 'For most business use, 8-16GB is sufficient. We\'ll assess your actual usage and recommend the right amount.'
      },
      {
        question: 'Can you upgrade my laptop?',
        answer: 'Many laptops can be upgraded with more RAM or an SSD. Some newer models have limited upgrade options. We\'ll let you know what\'s possible.'
      }
    ],
    relatedServices: ['computer-repair', 'managed-it-services', 'on-site-it-support']
  },
  {
    id: 'virus-malware',
    title: 'Virus & Malware Removal',
    shortTitle: 'Virus & Malware Removal',
    description: 'Fast, thorough removal of viruses, malware, and other threats from your computers.',
    icon: Bug,
    slug: 'virus-malware-removal',
    features: [
      'Complete Virus Removal',
      'Malware & Spyware Cleanup',
      'Ransomware Recovery',
      'System Security Hardening',
      'Prevention Setup',
      'Security Software Installation'
    ],
    benefits: [
      'Get your computer working again',
      'Protect your personal data',
      'Prevent future infections',
      'Peace of mind'
    ],
    faqs: [
      {
        question: 'How do I know if I have a virus?',
        answer: 'Common signs include slow performance, pop-ups, programs crashing, unfamiliar programs, and browser redirects. When in doubt, have us check.'
      },
      {
        question: 'Can you recover files encrypted by ransomware?',
        answer: 'Sometimes. Success depends on the type of ransomware. We\'ll assess the situation and give you honest options, including restoring from backups if available.'
      },
      {
        question: 'How can I prevent future infections?',
        answer: 'We\'ll set up proper antivirus software, configure security settings, and educate you on safe computing practices to minimize future risks.'
      }
    ],
    relatedServices: ['cybersecurity-services', 'computer-repair', 'remote-it-support']
  },
  {
    id: 'consulting',
    title: 'Small Business IT Consulting',
    shortTitle: 'Small Business IT Consulting',
    description: 'Strategic IT guidance to help your business make smart technology decisions.',
    icon: Briefcase,
    slug: 'small-business-it-consulting',
    features: [
      'Technology Assessment',
      'IT Strategy Planning',
      'Budget Planning',
      'Vendor Selection',
      'Project Management',
      'Technology Roadmaps'
    ],
    benefits: [
      'Make informed technology decisions',
      'Avoid costly mistakes',
      'Plan for growth',
      'Expert guidance without bias'
    ],
    faqs: [
      {
        question: 'When should I hire an IT consultant?',
        answer: 'Anytime you\'re making significant technology decisions - new software, infrastructure changes, growth planning, or when you\'re not sure what you need.'
      },
      {
        question: 'Do you sell specific products or brands?',
        answer: 'We\'re vendor-neutral and recommend solutions based on your needs, not sales commissions. Our advice is always in your best interest.'
      },
      {
        question: 'Can you help us with a specific project?',
        answer: 'Yes, we offer project-based consulting for specific initiatives like office moves, system implementations, or technology upgrades.'
      }
    ],
    relatedServices: ['managed-it-services', 'business-it-support', 'cloud-services']
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug)
}

export const getRelatedServices = (slugs: string[]): Service[] => {
  return services.filter(s => slugs.includes(s.slug))
}
