import { PROCESS_STEPS } from '@/data/constants'

const stepIcons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
]

export function Process() {
  return (
    <section id="process" className="section-padding bg-navy-900 dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="container-section relative">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-gold-500/20 border border-gold-500/30 
                         text-gold-400 text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="heading-2 text-white mb-4">How We Work</h2>
          <p className="text-slate-300">
            A straightforward process designed to minimize friction and maximize outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.number}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {index < PROCESS_STEPS.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-10 left-[calc(50%+60px)] right-0 h-px 
                             bg-slate-700 group-last:hidden"
                  aria-hidden="true"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 
                                 bg-gold-500 rounded-full" />
                </div>
              )}
              
              <div className="text-center lg:text-left">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gold-500/10 border border-gold-500/20
                                 flex items-center justify-center text-gold-400
                                 group-hover:bg-gold-500 group-hover:text-navy-900
                                 transition-all duration-300 group-hover:scale-105">
                    {stepIcons[index]}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-navy-800 
                                 flex items-center justify-center text-gold-500 font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 
                              group-hover:text-gold-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
