'use client'

import { Button } from '@/components/ui'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-500/5 dark:bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-gold-500/10 dark:bg-gold-500/20 border border-gold-500/20 
                           text-gold-700 dark:text-gold-400 text-sm font-medium mb-6
                           animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              Enterprise Software Partner
            </div>

            <h1 className="heading-1 text-navy-900 dark:text-white mb-6 animate-fade-in-up text-balance" style={{ animationDelay: '0.1s' }}>
              Build Better Software,
              <span className="block text-gold-600 dark:text-gold-400">Scale With Confidence</span>
            </h1>
            
            <p className="body-large mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We deliver custom software, dedicated engineering teams, and strategic IT consultancy. 
              A reliable partner for enterprises that need technology to work—without the friction.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Request a Consultation
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
              >
                View Services
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>US-Based Company</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600" />
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Transparent Pricing</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600" />
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible Engagement</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-6 grid-rows-4 gap-4 h-[500px]">
            <div className="col-span-4 row-span-2 bento-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 text-xs font-medium mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Fast Delivery
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">Rapid Development</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Agile sprints with weekly deliverables and transparent progress tracking.</p>
                </div>
                <div className="text-4xl font-bold text-gold-500/20 dark:text-gold-400/20">01</div>
              </div>
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl" />
            </div>

            <div className="col-span-2 row-span-2 bento-card p-5 flex flex-col justify-between animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-10 h-10 rounded-xl bg-navy-900 dark:bg-gold-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 dark:text-white">150+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Engineers</div>
              </div>
            </div>

            <div className="col-span-2 row-span-2 bento-card p-5 flex flex-col justify-between animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-10 h-10 rounded-xl bg-navy-900 dark:bg-gold-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 dark:text-white">98%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Client Retention</div>
              </div>
            </div>

            <div className="col-span-3 row-span-2 bento-card p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-900 dark:bg-gold-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-navy-900 dark:text-white">Global Delivery</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                US-based management with delivery centers across multiple time zones for round-the-clock progress.
              </p>
            </div>

            <div className="col-span-3 row-span-2 bento-card p-6 animate-fade-in overflow-hidden" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Python', 'AWS', 'Azure'].map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
