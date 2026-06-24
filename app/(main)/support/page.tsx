'use client'

import Link from 'next/link'

// Note: metadata moved out since this is now a client component
// Title/description handled by layout defaults

const corporateTiers = [
  {
    name: 'Presenting',
    amount: '$20,000',
    tickets: 12,
    highlight: true,
    benefits: [
      'Official Presenting Sponsor of Snowball & Kick-Off Party',
      'Stage speaking opportunity at Snowball',
      'Official Sponsor of Thermometer Raise',
      'Logo on wristbands for all attendees',
      'Exclusive Sponsor of the Silent Auction',
      'Distribute company giveaways to all attendees',
      'Featured in 2 JC e-newsletters',
      'Logo on JC website & Snowball ticketing page',
    ],
  },
  {
    name: 'Diamond',
    amount: '$15,000',
    tickets: 10,
    highlight: false,
    benefits: [
      'Official Sponsor of Thermometer Raise',
      'Stage speaking opportunity at Snowball',
      'Acknowledgement at media appearances',
      'Logo on wristbands for all attendees',
      'Featured in 2 JC e-newsletters',
      'Logo on JC website & Snowball ticketing page',
    ],
  },
  {
    name: 'Platinum',
    amount: '$10,000',
    tickets: 8,
    highlight: false,
    benefits: [
      'Logo on wristbands for all attendees',
      'Speaking opportunity at a JC Member Meeting',
      'Distribute giveaways to Snowball attendees',
      'Live mention & photo op on stage',
      'Featured in 2 JC e-newsletters',
      'Logo on JC website & Snowball ticketing page',
    ],
  },
  {
    name: 'Gold',
    amount: '$7,500',
    tickets: 6,
    highlight: false,
    benefits: [
      'Distribute giveaways to Snowball attendees',
      'Recognized at JC Specialty Events',
      'Live mention & photo op on stage',
      'Social media promotion',
      'Featured in 2 JC e-newsletters',
      'Logo on JC website & Snowball ticketing page',
    ],
  },
  {
    name: 'Silver',
    amount: '$5,000',
    tickets: 4,
    highlight: false,
    benefits: [
      'Social media promotion',
      'Featured in 2 JC e-newsletters',
      'Logo on JC website & Snowball ticketing page',
      'Logo on rotating slides at Snowball',
    ],
  },
  {
    name: 'Bronze',
    amount: '$2,500',
    tickets: 2,
    highlight: false,
    benefits: [
      'Featured in 1 JC e-newsletter & promo emails',
      'Logo on JC website & Snowball ticketing page',
      'Logo on rotating slides at Snowball',
    ],
  },
  {
    name: 'Black',
    amount: '$1,500',
    tickets: 2,
    highlight: false,
    benefits: [
      'Featured in 1 JC e-newsletter & promo emails',
      'Logo on JC website & Snowball ticketing page',
      'Logo on rotating slides at Snowball',
    ],
  },
]

export default function SupportPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              Support
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Support Junior Council
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Every contribution — financial, in-kind, or through partnership —
            directly benefits adolescents living with HIV and AIDS at Lurie
            Children&apos;s Hospital.
          </p>
        </div>
      </section>

      {/* Sticky Section Nav */}
      <div className="sticky top-16 z-40 bg-jc-black border-b border-white/10 overflow-x-auto">
        <div className="flex items-center gap-0 px-4 max-w-7xl mx-auto">
          {[
            { label: 'Donate', href: '#donate' },
            { label: 'Corporate', href: '#corporate' },
            { label: 'Hospitality', href: '#hospitality' },
            { label: 'Silent Auction', href: '#inkind' },
            { label: 'Wellness', href: '#wellness' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-shrink-0 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest px-4 py-3.5 border-b-2 border-transparent hover:border-jc-red hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Your Gift in Action */}
      <section id="donate" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-jc-black p-10">
            <h3 className="text-white font-black text-2xl mb-6">
              Your Gift in Action
            </h3>
            <div className="space-y-0">
              {[
                { amount: '$40,000', impact: 'Direct patient support and educational assistance for past and present patients of the Lurie Adolescent HIV Program.' },
                { amount: '$20,000', impact: 'The purchase of vehicles (lasting 20 years) to help transport patients to necessary check-ups.' },
                { amount: '$10,058', impact: '30 days of HIV medication for a single patient during financial hardship.' },
                { amount: '$2,347',  impact: 'One week of standard HIV medication for a single patient.' },
                { amount: '$500',    impact: 'Genotype testing used to identify effective medications for newly diagnosed patients.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-white/10 py-4 last:border-0">
                  <div className="text-jc-red font-black text-base w-24 flex-shrink-0 pt-0.5">
                    {item.amount}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="https://my.onecause.com/fundraiser/organizations/sf-001C0000018LfpcIAC/fundraisers/fundraiser:4f72a4df-6a73-4d3c-b436-c3350aba4f3b/friendly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section id="corporate" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
                For Businesses
              </span>
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-4 tracking-tight text-center">
            Corporate <span className="text-jc-red">Partnerships</span>
          </h2>
          <p className="text-jc-gray-dark text-lg max-w-3xl mx-auto text-center mb-14">
            Align your brand with Chicago&apos;s most passionate nonprofit community.
            All sponsorships are tax-deductible and JC is happy to tailor packages
            to create a mutually beneficial partnership.
          </p>

          {/* Presenting Tier — Featured */}
          {(() => {
            const presenting = corporateTiers[0]
            return (
              <div className="bg-jc-black border-2 border-jc-red p-8 mb-6 flex flex-col sm:flex-row sm:items-start gap-8">
                <div className="sm:w-48 flex-shrink-0">
                  <div className="bg-jc-red text-white text-xs font-bold tracking-widest uppercase px-3 py-1 inline-block mb-4">
                    Top Tier
                  </div>
                  <div className="text-jc-red font-black text-4xl mb-1">{presenting.amount}</div>
                  <div className="text-white font-black text-2xl mb-2">{presenting.name}</div>
                  <div className="w-8 h-0.5 bg-jc-red mb-3" aria-hidden="true" />
                  <div className="text-white/50 text-sm">{presenting.tickets} Snowball Tickets</div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 flex-grow">
                  {presenting.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-jc-red flex-shrink-0 flex items-center justify-center mt-0.5" aria-hidden="true">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-xs leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })()}

          {/* Remaining 6 Tiers — 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {corporateTiers.slice(1).map((tier, i) => (
              <div
                key={i}
                className="p-6 border-2 border-jc-gray-mid hover:border-jc-red transition-colors bg-white flex flex-col"
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="text-jc-red font-black text-2xl">{tier.amount}</div>
                  <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-wide mt-1">
                    {tier.tickets} Tickets
                  </div>
                </div>
                <div className="text-jc-black font-black text-xl mb-3">{tier.name}</div>
                <div className="w-8 h-0.5 bg-jc-red mb-4" aria-hidden="true" />
                <ul className="space-y-2.5 flex-grow">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 bg-jc-red flex-shrink-0 flex items-center justify-center mt-0.5"
                        aria-hidden="true"
                      >
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs leading-relaxed text-jc-gray-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
              >
                Become a Sponsor
              </Link>
              <a
                href="/JC-Corporate-Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-jc-gray-mid hover:border-jc-red text-jc-black hover:text-jc-red font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Corporate Packet
              </a>
            </div>
            <p className="text-jc-gray-dark text-sm">
              For further information, contact Marisa Stefani or Jessica Linley at{' '}
              <a href="mailto:corporate@juniorcouncil.org" className="text-jc-red font-bold hover:underline">
                corporate@juniorcouncil.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality Partners */}
      <section id="hospitality" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
                Hospitality <span className="text-jc-red">Partnerships</span>
              </h2>
              <p className="text-jc-gray-dark text-lg leading-relaxed mb-5">
                Hospitality partners provide in-kind food, beverage, venue, and
                catering services for Junior Council events. In return, they
                receive prominent brand visibility, social media recognition, and
                direct access to hundreds of Chicago professionals.
              </p>
              <p className="text-jc-gray-dark leading-relaxed mb-8">
                Whether you&apos;re a restaurant, caterer, bar, hotel, or event venue,
                we&apos;d love to explore a partnership. Our Annual Snowball Gala alone
                draws 900+ attendees and dozens of corporate sponsors.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
              >
                Become a Hospitality Partner
              </Link>
              <p className="text-jc-gray-dark text-sm mt-5">
                For further information, contact Emily Splinter at{' '}
                <a href="mailto:hospitality@juniorcouncil.com" className="text-jc-red font-bold hover:underline">
                  hospitality@juniorcouncil.com
                </a>
              </p>
            </div>
            <div className="bg-jc-gray p-8">
              <h3 className="text-jc-black font-black text-xl mb-6">
                What We Look For
              </h3>
              <div className="space-y-4">
                {[
                  'Catering & food service',
                  'Bar & beverage service',
                  'Venue & event space',
                  'Event staffing & support',
                  'Audio/visual production',
                  'Floral & décor',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-jc-red flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-jc-gray-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section id="inkind" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
              In-Kind <span className="text-jc-red">Donations</span>
            </h2>
            <p className="text-jc-gray-dark text-lg leading-relaxed mb-5">
              In-kind donations — goods, services, or experiences — power our
              silent auction and reduce event costs, meaning more of every dollar
              goes directly to patient care at Lurie Children&apos;s Hospital.
            </p>
            <p className="text-jc-gray-dark leading-relaxed mb-8">
              We accept in-kind donations year-round. Items for our silent
              auction are especially valued. All donated items are recognized in
              our event program and on our social media channels.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Experiences & Travel',
                'Sports & Entertainment Tickets',
                'Restaurant Gift Certificates',
                'Luxury & Lifestyle Items',
                'Art & Collectibles',
                'Services (spa, fitness, etc.)',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-jc-red flex-shrink-0" aria-hidden="true" />
                  <span className="text-jc-gray-dark text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
            >
              Donate an Item
            </Link>
            <p className="text-jc-gray-dark text-sm mt-5">
              For further information, contact Erin Bylina at{' '}
              <a href="mailto:silentauction@juniorcouncil.org" className="text-jc-red font-bold hover:underline">
                silentauction@juniorcouncil.org
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Wellness for a Cause */}
      <section id="wellness" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Wellness for a Cause</span>
          </div>
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Wellness <span className="text-jc-red">Partnerships</span>
          </h2>
          <p className="text-jc-gray-dark text-lg leading-relaxed mb-10 max-w-3xl">
            Junior Council partners with fitness and wellness brands to host events that raise funds and awareness for our mission. A portion of proceeds from every Wellness for a Cause event benefits adolescents living with HIV and AIDS at Lurie Children&apos;s Hospital.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: 'VinHausa',
                description: 'An outdoor yoga and house music experience. Junior Council members joined hundreds of Chicagoans at Soldier Field for a percentage-of-proceeds benefit event.',
                href: 'https://www.vinhausa.us',
              },
              {
                name: 'Barre3',
                description: 'Junior Council hosts a Barre3 strength class in Chicago. Tickets are $25 with a portion of proceeds benefiting adolescents living with HIV and AIDS at Lurie Children\'s Hospital.',
                href: 'https://my.onecause.com/event/organizations/sf-001C0000018LfpcIAC/events/vevt:c4974874-6b96-49e9-bd45-1a18370d97c4/home/story',
              },
              {
                name: 'Equinox',
                description: 'Junior Council hosts a cycling class at Equinox Chicago, bringing members together for a morning sweat with a portion of proceeds supporting our mission.',
                href: null,
              },
            ].map((partner, i) => (
              <div key={i} className="bg-white border-t-4 border-jc-red p-6 flex flex-col">
                <h3 className="text-jc-black font-black text-xl mb-3">{partner.name}</h3>
                <p className="text-jc-gray-dark text-sm leading-relaxed flex-grow mb-4">{partner.description}</p>
                {partner.href && (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-jc-black hover:text-jc-red font-black text-xs uppercase tracking-widest border-b border-jc-red pb-0.5 transition-colors self-start"
                  >
                    Learn More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
            >
              Become a Wellness Partner
            </Link>
            <p className="text-jc-gray-dark text-sm">
              For further information, contact Isabella Del Muro at{' '}
              <a href="mailto:w4ac@juniorcouncil.org" className="text-jc-red font-bold hover:underline">
                w4ac@juniorcouncil.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
