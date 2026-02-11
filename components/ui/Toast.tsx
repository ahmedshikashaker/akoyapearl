'use client'

import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export function Toast({ message, isVisible, onClose, duration = 4000 }: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(onClose, 200)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible && !isAnimating) return null

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        px-5 py-4 rounded-xl shadow-xl
        bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900
        flex items-center gap-3
        transition-all duration-200
        ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="w-6 h-6 rounded-full bg-gold-500 dark:bg-navy-900 flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-navy-900 dark:text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={() => {
          setIsAnimating(false)
          setTimeout(onClose, 200)
        }}
        className="ml-2 p-1 hover:bg-white/10 dark:hover:bg-navy-900/10 rounded transition-colors"
        aria-label="Dismiss notification"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
