'use client'

import { useState } from 'react'

export type AuctionItem = {
  id: number
  title: string
  category: string
  tagline: string
  description: string
  donor: string
  estimatedValue: number
  startingBid: number
  currentBid: number
  bidCount: number
  details: string[]
  emoji: string
}

export const auctionItems: AuctionItem[] = [
  // Travel & Experiences
  {
    id: 1,
    title: '7-Night Caribbean Cruise for 2',
    category: 'Travel & Experiences',
    tagline: 'Set sail on the ultimate escape',
    description:
      'Enjoy a luxurious 7-night Caribbean cruise for two aboard Royal Caribbean\'s Oasis of the Seas. Visit stunning ports including Nassau, Bahamas, Cozumel, Mexico, and St. Thomas, USVI. Includes an ocean-view stateroom, all onboard dining, entertainment, and a $300 onboard credit.',
    donor: 'Royal Caribbean International',
    estimatedValue: 4200,
    startingBid: 1800,
    currentBid: 2400,
    bidCount: 7,
    emoji: '🚢',
    details: [
      '7 nights aboard Royal Caribbean Oasis of the Seas',
      'Ocean-view stateroom for 2 guests',
      'Ports: Nassau · Cozumel · St. Thomas',
      '$300 onboard dining & spa credit',
      'Valid through December 2027 (blackout dates apply)',
      'Airfare not included',
    ],
  },
  {
    id: 2,
    title: 'Aruba All-Inclusive Resort, 5 Nights',
    category: 'Travel & Experiences',
    tagline: 'Sun, sand & unlimited everything',
    description:
      'Escape to the "One Happy Island" with a 5-night all-inclusive stay for two at the iconic Bucuti & Tara Beach Resort in Aruba — consistently ranked one of the most romantic resorts in the Caribbean. Includes all meals, premium beverages, and direct beachfront access.',
    donor: 'Bucuti & Tara Beach Resort',
    estimatedValue: 5800,
    startingBid: 2500,
    currentBid: 3100,
    bidCount: 11,
    emoji: '🏝️',
    details: [
      '5 nights, all-inclusive for 2 guests',
      'Beachfront room at Bucuti & Tara Beach Resort',
      'All meals & premium beverages included',
      'Daily sunset cocktail hour on the beach',
      'Complimentary snorkel equipment rental',
      'Valid through November 2027 (blackout dates apply)',
    ],
  },

  // Sports & Entertainment
  {
    id: 3,
    title: 'Chicago Bulls Courtside Seats (4 Tickets)',
    category: 'Sports & Entertainment',
    tagline: 'Feel the energy from the floor',
    description:
      'Experience a Chicago Bulls home game like never before with 4 courtside tickets. You\'ll be steps from the action at the United Center, with access to the exclusive courtside lounge, complimentary food and beverages, and a meet-and-greet opportunity with a team ambassador.',
    donor: 'Chicago Bulls Organization',
    estimatedValue: 3200,
    startingBid: 1200,
    currentBid: 1750,
    bidCount: 9,
    emoji: '🏀',
    details: [
      '4 courtside seats for one Bulls home game',
      'Access to exclusive courtside lounge',
      'Complimentary food & beverage service',
      'Team ambassador meet-and-greet',
      'Game to be selected from available 2026–27 home schedule',
      'Playoff games excluded',
    ],
  },
  {
    id: 4,
    title: 'Wrigley Field Rooftop Suite Experience',
    category: 'Sports & Entertainment',
    tagline: "Chicago's most iconic view",
    description:
      'Host your crew at a private Wrigley Field rooftop suite for a Chicago Cubs home game. Includes 10 tickets, an all-inclusive food and open bar package, and a breathtaking view of the ivy-covered outfield. A quintessential Chicago summer experience.',
    donor: 'Wrigley Rooftops Chicago',
    estimatedValue: 2800,
    startingBid: 1000,
    currentBid: 1300,
    bidCount: 5,
    emoji: '⚾',
    details: [
      '10 tickets in a private rooftop suite',
      'All-inclusive food & open bar',
      'Unobstructed view of Wrigley Field',
      'Game selected from 2027 Cubs home schedule',
      'Playoff games and special events excluded',
    ],
  },

  // Dining & Hospitality
  {
    id: 5,
    title: "Chef's Table Dinner at Alinea",
    category: 'Dining & Hospitality',
    tagline: 'A once-in-a-lifetime culinary journey',
    description:
      'Indulge in an extraordinary chef\'s table experience for 4 guests at Alinea, Chicago\'s only three-Michelin-star restaurant. Chef Grant Achatz\'s avant-garde cuisine redefines what a meal can be. Includes wine pairings, a signed cookbook, and a kitchen tour.',
    donor: 'Alinea Restaurant Group',
    estimatedValue: 2200,
    startingBid: 900,
    currentBid: 1150,
    bidCount: 8,
    emoji: '🍽️',
    details: [
      "Chef's table experience for 4 guests",
      'Full tasting menu with wine pairings',
      'Signed copy of the Alinea cookbook',
      'Private kitchen tour with a member of the culinary team',
      'Reservation subject to availability — advance scheduling required',
      'Valid through June 2027',
    ],
  },
  {
    id: 6,
    title: 'Private Wine Tasting for 10',
    category: 'Dining & Hospitality',
    tagline: 'Uncork something special',
    description:
      'Host an intimate private wine tasting for up to 10 guests at Chicago\'s acclaimed Ēst Wine Bar. A certified sommelier will guide your group through a curated selection of 8 premium wines from across the globe, paired with an artisan cheese and charcuterie spread.',
    donor: 'Ēst Wine Bar Chicago',
    estimatedValue: 900,
    startingBid: 350,
    currentBid: 500,
    bidCount: 6,
    emoji: '🍷',
    details: [
      'Private tasting for up to 10 guests',
      '8 premium wines guided by a certified sommelier',
      'Artisan cheese & charcuterie board',
      'Take-home wine guide & tasting notes',
      'Available Tuesday–Thursday evenings',
      'Valid through August 2027',
    ],
  },

  // Luxury & Lifestyle
  {
    id: 7,
    title: 'Weekend at The Ritz-Carlton Chicago',
    category: 'Luxury & Lifestyle',
    tagline: 'Two nights of pure indulgence',
    description:
      'Treat yourself to a 2-night stay in a Magnificent Mile Deluxe Room at The Ritz-Carlton Chicago. Includes daily breakfast for two, a $250 spa credit at the award-winning Spa at The Ritz-Carlton, and complimentary valet parking.',
    donor: 'The Ritz-Carlton Chicago',
    estimatedValue: 2400,
    startingBid: 950,
    currentBid: 1200,
    bidCount: 10,
    emoji: '🏨',
    details: [
      '2-night stay in a Magnificent Mile Deluxe Room',
      'Daily breakfast for 2 guests',
      '$250 spa credit at The Spa at Ritz-Carlton',
      'Complimentary valet parking (one vehicle)',
      'Subject to availability — blackout dates may apply',
      'Valid through October 2027',
    ],
  },
  {
    id: 8,
    title: 'Louis Vuitton Neverfull MM Tote',
    category: 'Luxury & Lifestyle',
    tagline: 'An icon, reimagined',
    description:
      'The Louis Vuitton Neverfull MM in Monogram Canvas — one of the world\'s most coveted handbags. Timeless, versatile, and impeccably crafted. Comes with the original dust bag, authenticity card, and gift receipt from Louis Vuitton Chicago.',
    donor: 'Anonymous Donor',
    estimatedValue: 1800,
    startingBid: 900,
    currentBid: 1050,
    bidCount: 4,
    emoji: '👜',
    details: [
      'Louis Vuitton Neverfull MM, Monogram Canvas',
      'Brand new with original packaging',
      'Includes dust bag & authenticity card',
      'Purchased from Louis Vuitton Chicago',
      'Color: Classic Brown Monogram with Beige interior',
    ],
  },

  // Wellness & Beauty
  {
    id: 9,
    title: 'Luxury Spa Day for 2 — The Peninsula',
    category: 'Wellness & Beauty',
    tagline: 'The ultimate day of self-care',
    description:
      'Unwind with a full day at The Peninsula Spa Chicago for two guests. Enjoy a 90-minute couples massage, access to the rooftop pool, steam room, and fitness center, plus a light spa lunch. One of Chicago\'s most celebrated spa experiences.',
    donor: 'The Peninsula Chicago',
    estimatedValue: 1100,
    startingBid: 450,
    currentBid: 625,
    bidCount: 7,
    emoji: '🧖‍♀️',
    details: [
      '90-minute couples massage of your choice',
      'Full-day access to rooftop pool & relaxation areas',
      'Steam room, sauna & fitness center included',
      'Spa lunch for 2 (light menu)',
      'Robe & slippers provided',
      'Valid Monday–Friday through September 2027',
    ],
  },
]

const categoryColors: Record<string, string> = {
  'Travel & Experiences':   'bg-blue-100 text-blue-700',
  'Sports & Entertainment': 'bg-orange-100 text-orange-700',
  'Dining & Hospitality':   'bg-amber-100 text-amber-700',
  'Luxury & Lifestyle':     'bg-purple-100 text-purple-700',
  'Wellness & Beauty':      'bg-pink-100 text-pink-700',
}

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function AuctionItems() {
  const [selected, setSelected] = useState<AuctionItem | null>(null)

  return (
    <>
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctionItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group border border-jc-gray-mid hover:border-jc-red transition-colors cursor-pointer flex flex-col"
          >
            {/* Emoji hero */}
            <div className="bg-jc-gray h-40 flex items-center justify-center text-6xl border-b border-jc-gray-mid group-hover:border-jc-red transition-colors">
              {item.emoji}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-3 w-fit ${categoryColors[item.category] ?? 'bg-gray-100 text-gray-600'}`}>
                {item.category}
              </span>
              <h3 className="text-jc-black font-black text-base leading-snug mb-1">{item.title}</h3>
              <p className="text-jc-gray-dark text-xs mb-4 italic">{item.tagline}</p>

              <div className="mt-auto pt-4 border-t border-jc-gray-mid flex items-end justify-between">
                <div>
                  <div className="text-jc-gray-dark text-xs uppercase tracking-widest">Current Bid</div>
                  <div className="text-jc-red font-black text-xl">{fmt(item.currentBid)}</div>
                </div>
                <div className="text-right">
                  <div className="text-jc-gray-dark text-xs uppercase tracking-widest">Bids</div>
                  <div className="text-jc-black font-bold text-lg">{item.bidCount}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-2xl border-t-4 border-jc-red shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero */}
            <div className="bg-jc-gray h-40 flex items-center justify-center text-7xl border-b border-jc-gray-mid">
              {selected.emoji}
            </div>

            <div className="p-8">
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-2 ${categoryColors[selected.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {selected.category}
                  </span>
                  <h2 className="text-jc-black font-black text-2xl tracking-tight leading-snug">{selected.title}</h2>
                  <p className="text-jc-gray-dark text-sm italic mt-1">{selected.tagline}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-jc-gray-dark hover:text-jc-black transition-colors flex-shrink-0 ml-4"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Bid stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Starting Bid',   value: fmt(selected.startingBid) },
                  { label: 'Current Bid',    value: fmt(selected.currentBid), highlight: true },
                  { label: 'Est. Value',     value: fmt(selected.estimatedValue) },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className={`p-3 text-center border ${highlight ? 'border-jc-red bg-jc-red/5' : 'border-jc-gray-mid'}`}>
                    <div className="text-jc-gray-dark text-xs uppercase tracking-widest mb-1">{label}</div>
                    <div className={`font-black text-lg ${highlight ? 'text-jc-red' : 'text-jc-black'}`}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-jc-gray-dark text-sm leading-relaxed mb-5">{selected.description}</p>

              {/* Details */}
              <div className="mb-6">
                <h4 className="text-jc-black font-black text-xs uppercase tracking-widest mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {selected.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-jc-gray-dark">
                      <div className="w-1.5 h-1.5 bg-jc-red flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donor */}
              <p className="text-jc-gray-dark text-xs mb-6">
                <span className="font-bold text-jc-black">Donated by:</span> {selected.donor}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase py-4 transition-colors"
                  onClick={() => alert('Live bidding opens at Snowball 2027 — February 27, 2027!')}
                >
                  Place a Bid — {fmt(selected.currentBid + 100)} Min.
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="sm:w-auto border-2 border-jc-gray-mid hover:border-jc-black text-jc-black font-black text-sm tracking-widest uppercase px-6 py-4 transition-colors"
                >
                  Close
                </button>
              </div>
              <p className="text-jc-gray-dark text-xs text-center mt-3">
                {selected.bidCount} bid{selected.bidCount !== 1 ? 's' : ''} placed · Bidding closes at the event on Feb 27, 2027
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
