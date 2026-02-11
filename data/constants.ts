export const CONTACT_INFO = {
  email: 'info@akoyapearlllc.com',
  phone: '(307) 357-2645',
  address: {
    street: '30 N Gould St, Ste N',
    city: 'Sheridan',
    state: 'WY',
    zip: '82801',
    country: 'USA',
  },
  get fullAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zip}, ${this.address.country}`
  },
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start by understanding your goals, challenges, and technical requirements through in-depth discussions.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates a detailed plan covering architecture, timelines, and resource allocation.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We develop your solution iteratively, with regular check-ins and transparent progress updates.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'Post-launch, we provide ongoing maintenance, optimizations, and scaling support.',
  },
] as const

export const WHY_US_POINTS = [
  {
    title: 'Delivery-Focused',
    description: 'We prioritize shipping working software. Every sprint ends with demonstrable progress.',
  },
  {
    title: 'Transparent Communication',
    description: 'No surprises. You get regular updates, clear timelines, and direct access to our team.',
  },
  {
    title: 'Security-First Mindset',
    description: 'Security isn\'t an afterthought. We build with best practices from day one.',
  },
  {
    title: 'Scalable Teams',
    description: 'Start small, scale up. Our model adapts to your changing resource needs.',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and code reviews ensure reliable, maintainable software.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We invest in relationships. Many clients have worked with us for years.',
  },
] as const
