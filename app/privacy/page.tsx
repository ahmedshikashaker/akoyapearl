import type { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Akoya Pearl',
  description: 'Privacy Policy for Akoya Pearl LLC - How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container-section py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-gold-500/10 dark:bg-gold-500/20 border border-gold-500/20 
                             text-gold-700 dark:text-gold-400 text-sm font-medium mb-4">
                Legal
              </div>
              <h1 className="heading-1 text-navy-900 dark:text-white mb-4">Privacy Policy</h1>
              <p className="body-base">Last updated: January 2025</p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none
                           prose-headings:text-navy-900 dark:prose-headings:text-white
                           prose-headings:font-semibold
                           prose-a:text-gold-600 dark:prose-a:text-gold-400
                           prose-strong:text-navy-900 dark:prose-strong:text-white">
              
              <section className="mb-10">
                <h2>1. Introduction</h2>
                <p>
                  Akoya Pearl LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this 
                  privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2>2. Information We Collect</h2>
                
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Fill out a contact form on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a consultation or quote</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>This information may include:</p>
                <ul>
                  <li>Name and job title</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name and size</li>
                  <li>Project requirements and business needs</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your 
                  device and usage patterns, including:
                </p>
                <ul>
                  <li>IP address and geographic location</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including to:</p>
                <ul>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you promotional communications (with your consent)</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>4. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> We may share information with vendors who assist 
                      us in operating our website and providing services (e.g., hosting, analytics).</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law 
                      or in response to legal requests.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                      of assets, your information may be transferred to the acquiring entity.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing 
                  experience. You can control cookie preferences through your browser settings. Disabling 
                  cookies may affect certain website functionality.
                </p>
              </section>

              <section className="mb-10">
                <h2>7. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:info@akoyapearlllc.com">info@akoyapearlllc.com</a>.
                </p>
              </section>

              <section className="mb-10">
                <h2>8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the 
                  privacy practices or content of these external sites. We encourage you to review the 
                  privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-10">
                <h2>9. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If you believe we have collected information 
                  from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-10">
                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date. 
                  We encourage you to review this policy periodically.
                </p>
              </section>

              <section className="mb-10">
                <h2>11. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-slate-50 dark:bg-navy-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="mb-2"><strong>Akoya Pearl LLC</strong></p>
                  <p>30 N Gould St, Ste N</p>
                  <p>Sheridan, WY 82801, USA</p>
                  <p className="mt-2">
                    Email: <a href="mailto:info@akoyapearlllc.com">info@akoyapearlllc.com</a>
                  </p>
                  <p>
                    Phone: <a href="tel:3073572645">(307) 357-2645</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
