'use client'

import { useState, type FormEvent } from 'react'
import { Button, Input, Textarea, Toast } from '@/components/ui'
import { MapPlaceholder } from '@/components/MapPlaceholder'
import { CONTACT_INFO } from '@/data/constants'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 500))

    console.log('Form submitted:', formData)

    setIsSubmitting(false)
    setShowToast(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setErrors({})
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-navy-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="container-section relative">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-gold-500/10 dark:bg-gold-500/20 border border-gold-500/20 
                         text-gold-700 dark:text-gold-400 text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="heading-2 text-navy-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="body-base">
            Ready to discuss your project? Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white dark:bg-navy-800/50 p-6 md:p-8 rounded-2xl 
                         border border-slate-200 dark:border-slate-700/50 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
                placeholder="Your name"
                required
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
                placeholder="you@company.com"
                required
              />

              <Input
                label="Company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Company name (optional)"
              />

              <Textarea
                label="Message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                error={errors.message}
                placeholder="Tell us about your project..."
                required
              />

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6">Contact Information</h3>
              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-800/30 
                               border border-slate-200 dark:border-slate-700/50
                               hover:border-gold-400/30 dark:hover:border-gold-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 dark:bg-gold-500/20 
                                 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</div>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-navy-900 dark:text-white font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-800/30 
                               border border-slate-200 dark:border-slate-700/50
                               hover:border-gold-400/30 dark:hover:border-gold-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 dark:bg-gold-500/20 
                                 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</div>
                    <a 
                      href={`tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}`}
                      className="text-navy-900 dark:text-white font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-navy-800/30 
                               border border-slate-200 dark:border-slate-700/50
                               hover:border-gold-400/30 dark:hover:border-gold-500/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 dark:bg-gold-500/20 
                                 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Address</div>
                    <div className="text-navy-900 dark:text-white">
                      {CONTACT_INFO.address.street}<br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}<br />
                      {CONTACT_INFO.address.country}
                    </div>
                  </div>
                </div>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6">Our Location</h3>
              <MapPlaceholder className="h-72" />
            </div>
          </div>
        </div>
      </div>

      <Toast
        message="Thank you! We'll be in touch soon."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  )
}
