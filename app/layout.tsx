import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akoya Pearl | Enterprise Software Solutions & IT Consultancy',
  description: 'Akoya Pearl delivers custom software development, dedicated engineering teams, and strategic IT consultancy for enterprises seeking reliable technology partners.',
  keywords: ['software development', 'staff augmentation', 'IT consultancy', 'enterprise software', 'dedicated teams', 'digital transformation'],
  openGraph: {
    title: 'Akoya Pearl | Enterprise Software Solutions',
    description: 'Custom software development, dedicated teams, and IT consultancy for growing enterprises.',
    type: 'website',
    siteName: 'Akoya Pearl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akoya Pearl | Enterprise Software Solutions',
    description: 'Custom software development, dedicated teams, and IT consultancy.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
