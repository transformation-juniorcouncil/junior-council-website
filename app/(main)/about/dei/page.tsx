import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diversity, Equity & Inclusion | Junior Council',
  description:
    "Junior Council's commitment to diversity, equity, and inclusion in everything we do — from our board to our programming to the communities we serve.",
}

const pillars = [
  {
    title: 'Diversity',
    description:
      'We actively recruit board members, volunteers, and partners who reflect the full diversity of Chicago — across race, ethnicity, gender identity, sexual orientation, socioeconomic background, and lived experience.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Equity',
    description:
      "HIV disproportionately affects communities of color, LGBTQ+ youth, and low-income families. Our work is intersectional by nature — we meet patients where they are and ensure care is accessible regardless of ability to pay.",
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  },
  {
    title: 'Inclusion',
    description:
      'We hold ourselves accountable to creating a welcoming, representative, and impactful organization. Every event, committee, and initiative is designed to be inclusive — so everyone feels they belong here.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
]

export default function DEIPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-0 w-2/5 h-full bg-jc-red/8 transform skew-x-[-8deg]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Diversity, Equity<br className="hidden sm:block" />
            <span className="text-jc-red"> & Inclusion</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Our commitment to DEI isn&apos;t a checkbox — it&apos;s woven into
            every part of how we operate and who we serve.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Our Commitment</span>
            </div>
            <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
              Intersectional <span className="text-jc-red">By Nature</span>
            </h2>
            <p className="text-jc-gray-dark text-lg leading-relaxed mb-5">
              Junior Council is committed to diversity, equity, and inclusion in
              all that we do — from our board composition to our event
              programming to the communities we serve.
            </p>
            <p className="text-jc-gray-dark text-base leading-relaxed">
              HIV disproportionately affects communities of color, LGBTQ+ youth,
              and low-income families. That reality shapes everything we do. We
              don&apos;t just acknowledge these disparities — we actively work to
              address them through the causes we fund, the partners we engage,
              and the culture we build inside our organization.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-jc-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 border-t-4 border-jc-red">
                <div className="w-12 h-12 bg-jc-red/10 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-jc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                  </svg>
                </div>
                <h3 className="text-jc-black font-black text-xl mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-jc-gray-dark text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEI in action */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">In Practice</span>
            </div>
            <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
              DEI in <span className="text-jc-red">Action</span>
            </h2>
            <div className="space-y-4">
              {[
                'Our board reflects the diversity of Chicago and the patients we serve.',
                'We fund care that is accessible regardless of a patient\'s ability to pay.',
                'Our DEI committee leads internal accountability efforts and programming.',
                'We partner with organizations that share our values of equity and justice.',
                'We intentionally design events and spaces that are welcoming to all.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-jc-red flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-jc-gray-dark text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-jc-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Questions or <span className="text-jc-red">Feedback?</span>
          </h2>
          <p className="text-white/60 mb-8">
            We&apos;re always looking to improve. Reach out with thoughts on how
            Junior Council can better serve our community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
