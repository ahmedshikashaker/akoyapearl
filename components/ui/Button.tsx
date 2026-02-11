import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 dark:bg-gold-500 dark:text-navy-900 dark:hover:bg-gold-400 dark:active:bg-gold-600',
  secondary: 'bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-50 active:bg-navy-100 dark:border-gold-500 dark:text-gold-500 dark:hover:bg-gold-500/10 dark:active:bg-gold-500/20',
  ghost: 'text-navy-700 hover:bg-navy-50 active:bg-navy-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium
          rounded-lg transition-all duration-200
          focus-ring disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
