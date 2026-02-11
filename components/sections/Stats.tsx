'use client'

import { useEffect, useState, useRef } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 200,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Enterprise and mid-market solutions shipped',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Active Clients',
    description: 'Long-term partnerships across industries',
  },
  {
    value: 8,
    suffix: ' years',
    label: 'In Business',
    description: 'Proven track record since 2017',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Faster Delivery',
    description: 'Compared to traditional vendors',
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-20 bg-navy-900 dark:bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="container-section relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-gold-400 font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
