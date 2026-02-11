export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  result?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Akoya Pearl delivered our platform ahead of schedule and under budget. Their team felt like an extension of our own, not an external vendor.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'Meridian Health Tech',
    result: '40% faster time-to-market',
  },
  {
    id: '2',
    quote: 'We needed to scale our engineering capacity quickly without compromising on quality. Akoya Pearl provided senior developers who integrated seamlessly with our processes.',
    author: 'Marcus Williams',
    role: 'VP of Engineering',
    company: 'Pinecrest Financial',
  },
  {
    id: '3',
    quote: 'Their consultancy helped us modernize a legacy system we thought would take years to replace. Pragmatic advice, clear communication, and real results.',
    author: 'Elena Rodriguez',
    role: 'Director of Technology',
    company: 'Cascadia Logistics',
    result: '60% reduction in maintenance costs',
  },
]
