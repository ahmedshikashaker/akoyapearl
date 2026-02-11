const clientLogos = [
  { name: 'Meridian Health', initials: 'MH' },
  { name: 'Pinecrest Financial', initials: 'PF' },
  { name: 'Cascadia Logistics', initials: 'CL' },
  { name: 'Vertex Systems', initials: 'VS' },
  { name: 'Northstar Energy', initials: 'NE' },
  { name: 'Aurora Technologies', initials: 'AT' },
]

export function Clients() {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="container-section">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-16">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className="group flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-200 dark:bg-slate-700 
                               flex items-center justify-center text-slate-500 dark:text-slate-400 
                               font-bold text-sm md:text-base
                               group-hover:bg-navy-900 group-hover:text-white 
                               dark:group-hover:bg-gold-500 dark:group-hover:text-navy-900
                               transition-colors">
                  {client.initials}
                </div>
                <span className="hidden sm:block text-slate-600 dark:text-slate-400 font-medium 
                               group-hover:text-navy-900 dark:group-hover:text-white transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
