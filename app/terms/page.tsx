import type { Metadata } from 'next'
import { Header, Footer } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Terms of Service | Akoya Pearl',
  description: 'Terms of Service for Akoya Pearl LLC - The terms and conditions governing your use of our services.',
}

export default function TermsPage() {
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
              <h1 className="heading-1 text-navy-900 dark:text-white mb-4">Terms of Service</h1>
              <p className="body-base">Last updated: January 2025</p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none
                           prose-headings:text-navy-900 dark:prose-headings:text-white
                           prose-headings:font-semibold
                           prose-a:text-gold-600 dark:prose-a:text-gold-400
                           prose-strong:text-navy-900 dark:prose-strong:text-white">
              
              <section className="mb-10">
                <h2>1. Agreement to Terms</h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you 
                  and Akoya Pearl LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) concerning your access to and 
                  use of our website and services.
                </p>
                <p>
                  By accessing our website or using our services, you agree to be bound by these Terms. 
                  If you disagree with any part of these Terms, you may not access our website or use 
                  our services.
                </p>
              </section>

              <section className="mb-10">
                <h2>2. Services</h2>
                <p>Akoya Pearl LLC provides the following services:</p>
                <ul>
                  <li><strong>Software Solutions:</strong> Custom software development, web and mobile 
                      applications, enterprise systems, and API development.</li>
                  <li><strong>Outsource Resources:</strong> Dedicated development teams, staff augmentation, 
                      and flexible engagement models.</li>
                  <li><strong>IT Consultancy:</strong> Technical architecture review, digital transformation, 
                      security assessments, and technology roadmap planning.</li>
                  <li><strong>Cloud & DevOps:</strong> Cloud infrastructure, CI/CD pipeline setup, 
                      infrastructure as code, and monitoring solutions.</li>
                </ul>
                <p>
                  Specific terms, deliverables, timelines, and pricing for each engagement will be 
                  defined in separate statements of work or service agreements.
                </p>
              </section>

              <section className="mb-10">
                <h2>3. Intellectual Property</h2>
                
                <h3>Our Intellectual Property</h3>
                <p>
                  The content, features, and functionality of our website, including but not limited to 
                  text, graphics, logos, and software, are owned by Akoya Pearl LLC and protected by 
                  intellectual property laws.
                </p>

                <h3>Client Deliverables</h3>
                <p>
                  Unless otherwise agreed in writing, custom software and deliverables created specifically 
                  for a client project will be subject to the terms outlined in the applicable service 
                  agreement. Generally:
                </p>
                <ul>
                  <li>Upon full payment, clients receive ownership or license rights to custom deliverables</li>
                  <li>We retain rights to any pre-existing tools, frameworks, or methodologies</li>
                  <li>Both parties retain ownership of their respective pre-existing intellectual property</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>4. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information when requested</li>
                  <li>Cooperate reasonably in the provision of services</li>
                  <li>Provide timely feedback and approvals as required</li>
                  <li>Ensure you have the necessary rights to any materials you provide to us</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not infringe upon the intellectual property rights of others</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms, including fees, billing cycles, and payment methods, will be specified 
                  in individual service agreements or statements of work. General terms include:
                </p>
                <ul>
                  <li>Payment is due according to the schedule outlined in your service agreement</li>
                  <li>Late payments may incur interest charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared 
                  during the course of our engagement. Confidential information includes:
                </p>
                <ul>
                  <li>Business strategies and plans</li>
                  <li>Technical specifications and code</li>
                  <li>Financial information</li>
                  <li>Customer data</li>
                  <li>Any information marked as confidential</li>
                </ul>
                <p>
                  This obligation survives termination of the business relationship and remains in 
                  effect for a period of three (3) years, unless otherwise agreed.
                </p>
              </section>

              <section className="mb-10">
                <h2>7. Warranties and Disclaimers</h2>
                
                <h3>Our Warranty</h3>
                <p>
                  We warrant that our services will be performed in a professional and workmanlike manner 
                  consistent with industry standards. Specific warranty terms for deliverables will be 
                  outlined in individual service agreements.
                </p>

                <h3>Disclaimer</h3>
                <p>
                  EXCEPT AS EXPRESSLY SET FORTH HEREIN, SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY 
                  OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF 
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </section>

              <section className="mb-10">
                <h2>8. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AKOYA PEARL LLC SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
                  LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, REGARDLESS OF THE CAUSE 
                  OF ACTION OR THE THEORY OF LIABILITY.
                </p>
                <p>
                  Our total liability for any claim arising from or related to our services shall not 
                  exceed the total fees paid by you for the specific service giving rise to the claim 
                  in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section className="mb-10">
                <h2>9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Akoya Pearl LLC and its officers, 
                  directors, employees, and agents from any claims, damages, losses, or expenses 
                  (including reasonable attorneys&apos; fees) arising from:
                </p>
                <ul>
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your infringement of any third-party rights</li>
                  <li>Any content or materials you provide to us</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>10. Termination</h2>
                <p>
                  Either party may terminate a service agreement according to the terms specified in 
                  that agreement. Upon termination:
                </p>
                <ul>
                  <li>All outstanding fees for services rendered become immediately due</li>
                  <li>We will deliver any completed work product</li>
                  <li>Each party will return or destroy confidential materials belonging to the other</li>
                  <li>Provisions that by their nature should survive will remain in effect</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2>11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Wyoming, United States, without regard to its conflict of law provisions. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                  of the state and federal courts located in Sheridan County, Wyoming.
                </p>
              </section>

              <section className="mb-10">
                <h2>12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of 
                  material changes by posting the updated Terms on our website and updating the 
                  &quot;Last updated&quot; date. Your continued use of our services after changes become effective 
                  constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2>13. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary, and the remaining 
                  provisions shall remain in full force and effect.
                </p>
              </section>

              <section className="mb-10">
                <h2>14. Entire Agreement</h2>
                <p>
                  These Terms, together with any service agreements and statements of work, constitute 
                  the entire agreement between you and Akoya Pearl LLC regarding your use of our 
                  services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section className="mb-10">
                <h2>15. Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us:
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
