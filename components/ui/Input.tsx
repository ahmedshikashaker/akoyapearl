import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    
    return (
      <div className={`space-y-1.5 ${className}`}>
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-navy-900 dark:text-white"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 text-base
            bg-white dark:bg-navy-800/50 
            border rounded-lg
            transition-colors duration-200
            focus-ring
            text-navy-900 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-slate-500
            ${error 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
              : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 focus:border-gold-500 dark:focus:border-gold-500'
            }
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p 
            id={`${inputId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    
    return (
      <div className={`space-y-1.5 ${className}`}>
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-navy-900 dark:text-white"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 text-base
            bg-white dark:bg-navy-800/50 
            border rounded-lg
            transition-colors duration-200
            focus-ring resize-y min-h-[120px]
            text-navy-900 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-slate-500
            ${error 
              ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
              : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 focus:border-gold-500 dark:focus:border-gold-500'
            }
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p 
            id={`${inputId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
