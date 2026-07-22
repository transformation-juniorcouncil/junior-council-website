import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Annual Snowball Gala | Junior Council',
  description:
    'Join Junior Council\'s Annual Snowball Gala — Chicago\'s premier fundraising event for youth with HIV and AIDS.',
}

const sponsorTiers = [
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
      'Distribute giveaways to all attendees',
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

export default function GalaPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/gala-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-jc-black/70" />
          <div className="absolute -left-24 top-0 w-2/5 h-full bg-jc-red/5 transform skew-x-[-8deg]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              Signature Event
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Annual Snowball Gala
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Chicago&apos;s premier fundraising event for youth with HIV and AIDS.
            An unforgettable evening of community, generosity, and impact.
          </p>
          {/* Save the Date announcement bar */}
          <div className="mt-8 inline-flex items-center gap-3 bg-jc-red px-5 py-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-white font-bold text-sm tracking-wide">
              Save the date: February 27, 2027 — venue announcement coming soon!
            </span>
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
                About the <span className="text-jc-red">Gala</span>
              </h2>
              <p className="text-jc-gray-dark text-lg leading-relaxed mb-5">
                The Annual Snowball Gala is Junior Council&apos;s flagship fundraising
                event, bringing together hundreds of Chicago professionals,
                corporate leaders, and community advocates for an evening of
                impact.
              </p>
              <p className="text-jc-gray-dark leading-relaxed mb-5">
                Each year, the Gala features live entertainment, an exciting
                silent auction, premium food and beverage hospitality, and
                an opportunity to hear directly from the patients and medical
                team at Lurie Children&apos;s Hospital.
              </p>
              <p className="text-jc-gray-dark leading-relaxed mb-8">
                Proceeds from the Gala fund critical programs and services for
                adolescents living with HIV and AIDS at Ann &amp; Robert H. Lurie
                Children&apos;s Hospital of Chicago.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Date', value: 'February 27, 2027' },
                  { label: 'Location', value: 'Chicago, IL' },
                  { label: 'Dress Code', value: 'Black Tie' },
                  { label: 'Tickets', value: 'Contact us to get notified' },
                ].map((detail, i) => (
                  <div key={i} className="border-l-2 border-jc-red pl-4">
                    <div className="text-jc-gray-dark text-xs uppercase tracking-wide mb-1">
                      {detail.label}
                    </div>
                    <div className="text-jc-black font-bold text-sm">{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-jc-black p-10">
              <div className="text-white font-black text-2xl mb-6">
                Event Highlights
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    ),
                    title: 'Live Entertainment',
                    desc: 'Music and performances throughout the evening.',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    title: 'Silent Auction',
                    desc: 'Bid on curated experiences, travel packages, and luxury items.',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v7.296z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19.5h18" />
                      </svg>
                    ),
                    title: 'Premium Hospitality',
                    desc: "Top-tier catering and open bar from Chicago's best vendors.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    title: 'Mission Moment',
                    desc: 'Hear firsthand from patients and the Lurie care team.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-jc-red flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold mb-1">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Auction */}
      <section id="auction" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Silent <span className="text-jc-red">Auction</span>
          </h2>
          <p className="text-jc-gray-dark text-lg max-w-3xl mb-12">
            Our silent auction features an incredible array of experiences,
            luxury items, travel packages, and more — all donated by our generous
            sponsors and community partners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Travel & Experiences',
              'Sports & Entertainment',
              'Dining & Hospitality',
              'Art & Luxury Items',
            ].map((category, i) => (
              <div key={i} className="bg-white border-t-4 border-jc-red p-6">
                <h3 className="text-jc-black font-black text-lg mb-2">{category}</h3>
                <p className="text-jc-gray-dark text-sm">
                  Curated items and experiences from Chicago&apos;s best.
                </p>
              </div>
            ))}
          </div>
          <p className="text-jc-gray-dark text-sm mt-8">
            Interested in donating an item to the silent auction?{' '}
            <Link href="/contact" className="text-jc-red font-bold hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Sponsorship <span className="text-jc-red">Opportunities</span>
          </h2>
          <p className="text-jc-gray-dark text-lg max-w-3xl mb-12">
            Gala sponsorship is an opportunity to align your brand with a
            meaningful cause while gaining visibility among Chicago&apos;s most
            engaged professional community.
          </p>
          {/* Presenting — featured full-width */}
          {(() => {
            const presenting = sponsorTiers[0]
            return (
              <div className="bg-jc-black border-2 border-jc-red p-8 mb-6 flex flex-col sm:flex-row sm:items-start gap-8">
                <div className="sm:w-44 flex-shrink-0">
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

          {/* Remaining 6 tiers — 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorTiers.slice(1).map((tier, i) => (
              <div key={i} className="border-2 border-jc-gray-mid hover:border-jc-red transition-colors p-6 flex flex-col">
                <div className="flex items-start justify-between mb-1">
                  <div className="text-jc-red font-black text-2xl">{tier.amount}</div>
                  <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-wide mt-1">
                    {tier.tickets} Tickets
                  </div>
                </div>
                <div className="text-jc-black font-black text-xl mb-3">{tier.name}</div>
                <div className="w-8 h-0.5 bg-jc-red mb-4" aria-hidden="true" />
                <ul className="space-y-2 flex-grow">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-jc-red flex-shrink-0 flex items-center justify-center mt-0.5" aria-hidden="true">
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
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-10 py-4 transition-colors"
            >
              Become a Gala Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-12 tracking-tight">
            Photo <span className="text-jc-red">Gallery</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/gallery/snowball-gala/snowball-2026-01.jpg', caption: 'Snowball Gala 2026' },
              { src: '/images/gallery/snowball-gala/snowball-2026-02.jpg', caption: 'Snowball Gala 2026' },
              { src: '/images/gallery/snowball-gala/snowball-2026-03.jpg', caption: 'Snowball Gala 2026' },
              { src: '/images/gallery/snowball-gala/snowball-2025-01.jpg', caption: 'Snowball Gala 2025' },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-jc-gray-mid">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <p className="text-jc-gray-dark text-sm mt-6 text-center">
            <Link href="/gallery" className="text-jc-red font-bold hover:underline">
              View the full photo gallery
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
