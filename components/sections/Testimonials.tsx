import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container-section relative">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-gold-500/10 dark:bg-gold-500/20 border border-gold-500/20 
                         text-gold-700 dark:text-gold-400 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="heading-2 text-navy-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="body-base">
            We measure success by the results we deliver and the relationships we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id}
              className="group relative p-6 md:p-8 bg-white dark:bg-navy-800/50 
                        border border-slate-200 dark:border-slate-700/50 rounded-2xl
                        hover:border-gold-400/30 dark:hover:border-gold-500/20
                        transition-all duration-300
                        animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <svg 
                className="w-10 h-10 text-gold-400/20 dark:text-gold-400/10 mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {testimonial.result && (
                <div className="mb-6 px-4 py-3 bg-gold-500/10 dark:bg-gold-500/20 
                               border border-gold-500/20 rounded-xl inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-sm font-semibold text-gold-700 dark:text-gold-400">{testimonial.result}</span>
                </div>
              )}
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-900 dark:bg-gold-500/20 
                                 flex items-center justify-center text-white dark:text-gold-400 
                                 font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
