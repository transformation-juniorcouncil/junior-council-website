import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Donors & Partners | Junior Council',
  description:
    'Junior Council is grateful to our corporate donors, hospitality partners, silent auction contributors, and Wellness for a Cause sponsors.',
}

function YourBrandGrid({ count, ctaHref }: { count: number; ctaHref: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <a
          key={i}
          href={ctaHref}
          className="border-2 border-dashed border-jc-red/30 hover:border-jc-red p-5 flex flex-col items-center text-center min-h-[120px] justify-center group transition-colors cursor-pointer"
        >
          <div className="w-14 h-14 border-2 border-dashed border-jc-red/30 group-hover:border-jc-red rounded-sm mb-3 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-jc-red/30 group-hover:text-jc-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div className="text-jc-gray-dark group-hover:text-jc-red font-black text-xs uppercase tracking-widest transition-colors">
            Your Brand Here
          </div>
        </a>
      ))}
    </div>
  )
}

export default function DonorsPage() {
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
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27 Season</span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Our Donors &amp; Partners
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Sponsorship opportunities for the 2026–27 season are now open.
            These spots are yours — partner with Junior Council and be seen by
            hundreds of Chicago professionals.
          </p>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Corporate <span className="text-jc-red">Donors</span>
              </h2>
            </div>
            <Link href="/support#corporate" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Corporate Partner →
            </Link>
          </div>
          <YourBrandGrid count={4} ctaHref="/support#corporate" />
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Hospitality <span className="text-jc-red">Partners</span>
              </h2>
            </div>
            <Link href="/support#hospitality" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Hospitality Partner →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Happy Camper', category: 'Restaurant Partner', website: 'https://happycamper.pizza/old-town/', logo: '/happy-camper-logo.png' },
              { name: 'Two Thirty',   category: 'Venue Partner',      website: 'https://www.twothirty.space/',       logo: '/two-thirty-logo.png' },
              { name: '312 Cruises', category: 'Cruise Partner', website: 'https://312cruises.weebly.com/', logo: '/312-cruises.png' },
              { name: 'Barcocina', category: 'Restaurant Partner', website: 'https://www.barcocinachicago.com/', logo: '/barcocina.jpg' },
              { name: 'Basecamp Fitness', category: 'Fitness Partner', website: 'https://www.basecampfitness.com/studio/chicago', logo: '/basecamp-fitness.svg' },
              { name: 'Batsu', category: 'Entertainment Partner', website: 'https://batsulive.com/chicago/', logo: '/batsu.png' },
              { name: 'Cards Against Humanity', category: 'Game Partner', website: 'https://www.cardsagainsthumanity.com/', logo: '/cards-against-humanity.svg' },
              { name: "Carol's Pub", category: 'Bar Partner', website: 'https://www.carolspub.com/', logo: '/carols-pub.png' },
              { name: 'Chicago 20Something', category: 'Events Partner', website: 'https://chicago20something.weebly.com/', logo: '/chicago-20something.png' },
              { name: 'Chicago Bears', category: 'Team Partner', website: 'https://www.chicagobears.com/', logo: '/chicago-bears.svg' },
              { name: 'Criquet Shirts', category: 'Apparel Partner', website: 'https://criquetshirts.com/', logo: '/criquet-shirts.png' },
              { name: 'Fitness Formula Clubs South Loop', category: 'Fitness Partner', website: 'https://ffc.com/club-locations/south-loop/', logo: '/fitness-formula-clubs-south-loop.png' },
              { name: 'Five Iron Golf', category: 'Golf Partner', website: 'https://fiveirongolf.com/locations/chicago-river-north', logo: '/five-iron-golf.png' },
              { name: "Formento's", category: 'Restaurant Partner', website: 'https://www.formentos.com', logo: '/formentos.png' },
              { name: 'Gibsons Restaurant Group', category: 'Restaurant Partner', website: 'https://gibsonssteakhouse.com', logo: '/gibsons-restaurant-group.svg' },
              { name: 'Knockaround Sunglasses', category: 'Apparel Partner', website: 'https://knockaround.com', logo: '/knockaround-sunglasses-mark.png' },
              { name: 'Laugh Factory', category: 'Comedy Partner', website: 'https://www.laughfactory.com/chicago', logo: '/laugh-factory.png' },
              { name: 'Legendary Spa', category: 'Spa Partner', website: 'https://legendaryspa.com', logo: '/legendary-spa.png' },
              { name: 'PGA Tour Superstore', category: 'Golf Partner', website: 'https://www.pgatoursuperstore.com/', logo: '/pga-tour-superstore.svg' },
              { name: 'Picnic Wine and Provisions', category: 'Wine Partner', website: 'https://www.picnicwineandprovisions.com/', logo: '/picnic-wine-and-provisions.png' },
              { name: 'Pure Barre', category: 'Fitness Partner', website: 'https://www.purebarre.com/', logo: '/pure-barre.png' },
              { name: 'Raygun', category: 'Retail Partner', website: 'https://www.raygunsite.com/', logo: '/raygun.png' },
              { name: 'Summer House', category: 'Restaurant Partner', website: 'https://www.summerhouserestaurants.com/lincoln-park/', logo: '/summer-house.png' },
              { name: 'Skydeck Chicago', category: 'Attraction Partner', website: 'https://theskydeck.com/', logo: '/skydeck-chicago.png' },
              { name: 'Tailgreeter', category: 'Events Partner', website: 'https://tailgreeter.com/', logo: '/tailgreeter.png' },
              { name: 'Train Moment River North', category: 'Fitness Partner', website: 'https://www.trainmoment.com/river-north', logo: '/train-moment-river-north.jpg' },
              { name: "Will's Northwoods Inn", category: 'Bar Partner', website: 'https://willsnorthwoodsinn.com/', logo: '/wills-northwoods-inn.png' },
              { name: "Zanie's Rosemont", category: 'Comedy Partner', website: 'https://rosemont.zanies.com/', logo: '/zanies-rosemont.jpg' },
            ].map((partner, i) => (
              <a
                key={i}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-jc-gray-mid hover:border-jc-red transition-colors p-5 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-sm mb-3 flex items-center justify-center group-hover:bg-jc-red/10 transition-colors flex-shrink-0 overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} width={56} height={56} className="object-contain" />
                </div>
                <div className="text-jc-black font-black text-sm leading-tight mb-1 group-hover:text-jc-red transition-colors">
                  {partner.name}
                </div>
                <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                  {partner.category}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Silent Auction */}
      <section id="silent-auction" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Silent <span className="text-jc-red">Auction</span>
              </h2>
            </div>
            <Link href="/support#inkind" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Donate an Auction Item →
            </Link>
          </div>
          <YourBrandGrid count={4} ctaHref="/support#inkind" />
        </div>
      </section>

      {/* Wellness */}
      <section id="wellness" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Wellness <span className="text-jc-red">for a Cause</span>
              </h2>
            </div>
            <Link href="/contact" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Wellness Partner →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'VinHausa',  category: 'Yoga & Dance', website: 'https://www.vinhausa.us',   logo: '/vinhausa-logo.png' },
              { name: 'Equinox',   category: 'Cycling',      website: 'https://www.equinox.com',   logo: '/equinox-logo.png' },
              { name: 'Barre3',    category: 'Barre',        website: 'https://barre3.com',         logo: '/barre3-logo.png' },
            ].map((partner, i) => (
              <a
                key={i}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-jc-gray-mid hover:border-jc-red transition-colors p-5 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-jc-gray rounded-sm mb-3 flex items-center justify-center group-hover:bg-jc-red/10 transition-colors flex-shrink-0 overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} width={56} height={56} className="object-contain" />
                </div>
                <div className="text-jc-black font-black text-sm leading-tight mb-1 group-hover:text-jc-red transition-colors">
                  {partner.name}
                </div>
                <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                  {partner.category}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-jc-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Want to Be Featured Here?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join our growing community of donors and partners who are directly
            changing the lives of youth with HIV and AIDS in Chicago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support#corporate" className="inline-flex items-center justify-center bg-white text-jc-black font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-jc-gray-mid transition-colors">
              Partner With Us
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
