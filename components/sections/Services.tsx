import { CardIcon } from '@/components/ui'
import { services, serviceIcons } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-navy-900/50">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-gold-500/10 dark:bg-gold-500/20 border border-gold-500/20 
                         text-gold-700 dark:text-gold-400 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="heading-2 text-navy-900 dark:text-white mb-4">What We Do</h2>
          <p className="body-base">
            From building software to augmenting your team, we offer services 
            that help enterprises move faster and build better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article 
              key={service.id}
              className="group relative p-6 md:p-8 bg-white dark:bg-navy-800/50 
                        border border-slate-200 dark:border-slate-700/50 rounded-2xl
                        hover:border-gold-400/30 dark:hover:border-gold-500/20
                        transition-all duration-300 ease-out
                        hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/20
                        animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gold-500/0 group-hover:bg-gold-500/5 
                             transition-colors duration-300 pointer-events-none" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-navy-900 dark:bg-gold-500/20 
                               flex items-center justify-center mb-6
                               group-hover:scale-110 group-hover:bg-gold-500 
                               transition-all duration-300">
                  <div className="text-gold-500 group-hover:text-white transition-colors">
                    {serviceIcons[service.icon]}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3 
                              group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <svg 
                        className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-medium 
                              text-navy-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 
                              transition-colors group/link"
                  >
                    Learn more
                    <svg 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
