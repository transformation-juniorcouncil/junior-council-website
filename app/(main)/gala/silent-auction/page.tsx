import type { Metadata } from 'next'
import Link from 'next/link'
import AuctionCountdown from '@/components/AuctionCountdown'
import AuctionItems from '@/components/AuctionItems'

export const metadata: Metadata = {
  title: 'Silent Auction | Snowball | Junior Council',
  description:
    'Bid on exclusive experiences, luxury items, and one-of-a-kind packages at the Junior Council Annual Snowball Silent Auction.',
}

export default function SilentAuctionPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1.5 h-full bg-jc-red" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-0 w-2/5 h-full bg-jc-red/8 transform skew-x-[-8deg]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              Annual Snowball Gala
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Silent <span className="text-jc-red">Auction</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            One of the most exciting parts of Snowball. Bid on exclusive
            packages and experiences — all proceeds go directly to youth with
            HIV and AIDS at Lurie Children&apos;s Hospital.
          </p>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="bg-jc-red py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-bold text-sm tracking-wide">
            Preview items below — official bidding opens at Snowball on February 27, 2027!
          </p>
        </div>
      </section>

      {/* Countdown */}
      <AuctionCountdown />

      {/* Auction Items */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">What's Up for Bid</span>
            </div>
            <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
              Auction <span className="text-jc-red">Items</span>
            </h2>
            <p className="text-jc-gray-dark text-lg mt-4">
              Click any item to see full details, estimated value, and current bid. New items added as they are secured.
            </p>
          </div>
          <AuctionItems />
        </div>
      </section>

      {/* Donate an item */}
      <section className="bg-jc-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Contribute</span>
              </div>
              <h2 className="text-white font-black text-3xl sm:text-4xl mb-6 tracking-tight">
                Donate an <span className="text-jc-red">Auction Item</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                In-kind donations power our silent auction and reduce event
                costs — meaning more of every dollar goes directly to patient
                care at Lurie Children&apos;s Hospital.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                All donated items are recognized in our event program and on
                our social media channels. We accept donations year-round.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Experiences & Travel', 'Sports Tickets', 'Restaurant Gift Cards', 'Luxury Items', 'Art & Collectibles', 'Spa & Wellness'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 px-4 py-3 border border-white/10">
                  <div className="w-2 h-2 bg-jc-red flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
