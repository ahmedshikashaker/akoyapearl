interface MapPlaceholderProps {
  className?: string
}

export function MapPlaceholder({ className = '' }: MapPlaceholderProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-navy-800/30 ${className}`}>
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-600"/>
            </pattern>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-slate-200 dark:text-slate-700"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <path d="M 0 200 Q 200 180 400 200 T 800 180" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-300 dark:text-slate-600" strokeDasharray="10 5"/>
          
          <path d="M 200 0 L 200 400" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-300 dark:text-slate-600"/>
          <path d="M 500 0 L 500 400" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-300 dark:text-slate-600"/>
          <path d="M 650 0 L 650 400" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-200 dark:text-slate-700"/>
          
          <path d="M 0 120 L 800 120" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-300 dark:text-slate-600"/>
          <path d="M 0 280 L 800 280" fill="none" stroke="currentColor" strokeWidth="5" className="text-slate-300 dark:text-slate-600"/>
          
          <rect x="80" y="80" width="60" height="40" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          <rect x="300" y="150" width="80" height="50" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          <rect x="550" y="100" width="70" height="45" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          <rect x="700" y="250" width="50" height="35" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          <rect x="150" y="300" width="90" height="55" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          <rect x="420" y="320" width="60" height="40" rx="2" className="fill-slate-200 dark:fill-slate-700"/>
          
          <circle cx="350" cy="200" r="8" className="fill-gold-500"/>
          <circle cx="350" cy="200" r="20" className="fill-gold-500/20"/>
          <circle cx="350" cy="200" r="35" className="fill-gold-500/10"/>
        </svg>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm 
                      px-4 py-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-navy-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-navy-900 dark:text-white">Akoya Pearl LLC</div>
            <div className="text-slate-500 dark:text-slate-400">Sheridan, Wyoming</div>
          </div>
        </div>
      </div>
      
      <a 
        href="https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Sheridan+WY+82801"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm
                   px-3 py-2 rounded-lg shadow-md border border-slate-200 dark:border-slate-700
                   text-xs font-medium text-navy-900 dark:text-white
                   hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors
                   flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        View on Google Maps
      </a>
    </div>
  )
}
