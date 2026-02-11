import { CONTACT_INFO, NAV_LINKS } from '@/data/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="container-section relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 mb-4"
              aria-label="Akoya Pearl - Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Akoya <span className="text-gold-400">Pearl</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Software solutions, dedicated teams, and IT consultancy for enterprises 
              seeking reliable technology partners. Building better software, together.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-navy-800 dark:bg-slate-800 flex items-center justify-center
                          text-slate-400 hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-navy-800 dark:bg-slate-800 flex items-center justify-center
                          text-slate-400 hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm leading-relaxed">
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}<br />
                  {CONTACT_INFO.address.country}
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} Akoya Pearl LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
