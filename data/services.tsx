export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: 'code' | 'users' | 'lightbulb' | 'cloud'
}

export const services: Service[] = [
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Custom web and mobile applications built for your specific business needs.',
    features: [
      'Custom web applications',
      'Mobile apps (iOS & Android)',
      'Enterprise systems',
      'API development & integration',
    ],
    icon: 'code',
  },
  {
    id: 'outsource-resources',
    title: 'Outsource Resources',
    description: 'Dedicated teams and staff augmentation to extend your capabilities.',
    features: [
      'Dedicated development teams',
      'Staff augmentation',
      'Flexible engagement models',
      'Direct team integration',
    ],
    icon: 'users',
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic guidance on architecture, delivery, and technology modernization.',
    features: [
      'Technical architecture review',
      'Digital transformation',
      'Security assessments',
      'Technology roadmap planning',
    ],
    icon: 'lightbulb',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Infrastructure, CI/CD pipelines, and operational excellence.',
    features: [
      'Cloud infrastructure (AWS, Azure, GCP)',
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Monitoring & alerting',
    ],
    icon: 'cloud',
  },
]

export const serviceIcons = {
  code: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
} as const
