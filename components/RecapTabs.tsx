'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const tabs = ['Photos', 'Corporate Sponsors', 'Hospitality Sponsors'] as const
type Tab = typeof tabs[number]

const corporateSponsors = [
  'American Medical Association',
  'Barnes and Thornburg LLP',
  'Blacklane',
  'Blue Cross Blue Shield of Illinois',
  'CBRE',
  'Chicago Speech Therapy Academy',
  'Clayco',
  'Concord Group',
  'Dexter Blackwell',
  'Energy CX',
  'Hoffman Foundation',
  'Merrill Lynch',
  'Neuberger Berman',
  'Old Republic International',
  'RSM Foundation',
  'Vistage',
]

const hospitalitySponsors = [
  'Anheuser Busch',
  'Bacardi',
  'Biatch Tequila',
  'Bombay Eats',
  'Brother Justus Whiskey',
  'Bubblehouse Brewing',
  'Cafe Bionda',
  'Cafe Yaya',
  'Cebu',
  'CH Distillery',
  'Chay Spirits',
  'Chicago Beverage Systems',
  'Cooper Hawk (Wheeling)',
  'Coopers Hawk',
  'Crafthouse Cocktails',
  'Do-Rite Donuts',
  'Doc Brown Farm and Distillers',
  'Dr. Yvonne Smith Canegan',
  'Gene & Georgetti',
  'Go Brewing',
  'Goose Island',
  'Happy Camper',
  'Hubbard Inn',
  "JoJo's Shake Bar",
  'Khmai Cambodian Fine Dining',
  'Koval Distillery',
  'La Croix',
  'Links Drinks',
  'MMMM Enjoy',
  "Nancy's Pizza",
  "Nonna's Pizza and Sandwiches",
  'Pepsi',
  'Polombia',
  'REV Brew',
  'Ritual',
  'RPM Italian',
  'RPM Restaurants',
  'RPM Steak',
  'Select Beverage Company',
  'Solemn Oath Brewery',
  'Spritz Society',
  'STK',
  'Summer House',
  'Sushi San',
  'Tandoor Char House',
  "Tito's Vodka",
  "Trader Joe's",
  'Uni Uni South Loop / Aduanaba and Company',
  'Venteux',
  'Whiskey Acres Distilling',
]

const photos = [
  { id: 1, src: '/images/gallery/snowball-gala/snowball-2026-01.jpg', alt: 'Snowball Gala 2026' },
  { id: 2, src: '/images/gallery/snowball-gala/snowball-2026-02.jpg', alt: 'Snowball Gala 2026' },
  { id: 3, src: '/images/gallery/snowball-gala/snowball-2026-03.jpg', alt: 'Snowball Gala 2026' },
]

export default function RecapTabs() {
  const [active, setActive] = useState<Tab>('Photos')

  return (
    <div>
      {/* Tab bar */}
      <div className="border-b border-jc-gray-mid mb-10">
        <div className="flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                active === tab
                  ? 'border-jc-red text-jc-red'
                  : 'border-transparent text-jc-gray-dark hover:text-jc-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Photos */}
      {active === 'Photos' && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-jc-gray overflow-hidden group relative aspect-square"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-jc-red/0 group-hover:bg-jc-red/10 transition-colors" />
              </div>
            ))}
          </div>
          <p className="text-jc-gray-dark text-sm text-center mt-6">
            More photos available on our{' '}
            <Link href="/gallery" className="text-jc-red font-bold hover:underline">
              full gallery page
            </Link>
            .
          </p>
        </div>
      )}

      {/* Corporate Sponsors */}
      {active === 'Corporate Sponsors' && (
        <div>
          <p className="text-jc-gray-dark text-base mb-8">
            Thank you to our <strong className="text-jc-black">{corporateSponsors.length} corporate sponsors</strong> whose
            generosity made Snowball 2026 possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corporateSponsors.map((name, i) => (
              <div key={i} className="flex items-center gap-4 border border-jc-gray-mid p-5 hover:border-jc-red transition-colors group">
                <div className="w-2 h-2 bg-jc-red flex-shrink-0" aria-hidden="true" />
                <span className="text-jc-black font-bold text-sm group-hover:text-jc-red transition-colors">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-jc-gray-mid text-center">
            <p className="text-jc-gray-dark text-sm mb-4">Interested in sponsoring Snowball 2027?</p>
            <Link
              href="/support#corporate"
              className="inline-flex items-center text-jc-black font-black text-xs uppercase tracking-widest border-b-2 border-jc-red hover:text-jc-red transition-colors pb-1"
            >
              View Corporate Packages
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* Hospitality Sponsors */}
      {active === 'Hospitality Sponsors' && (
        <div>
          <p className="text-jc-gray-dark text-base mb-8">
            Thank you to our <strong className="text-jc-black">{hospitalitySponsors.length}+ hospitality sponsors</strong> who
            donated food, beverage, and services to make the night unforgettable.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {hospitalitySponsors.map((name, i) => (
              <div key={i} className="flex items-center gap-3 border border-jc-gray-mid p-4 hover:border-jc-red transition-colors group">
                <div className="w-2 h-2 bg-jc-red flex-shrink-0" aria-hidden="true" />
                <span className="text-jc-black font-semibold text-sm group-hover:text-jc-red transition-colors">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-jc-gray-mid text-center">
            <p className="text-jc-gray-dark text-sm mb-4">Want to be a hospitality partner for Snowball 2027?</p>
            <Link
              href="/support#hospitality"
              className="inline-flex items-center text-jc-black font-black text-xs uppercase tracking-widest border-b-2 border-jc-red hover:text-jc-red transition-colors pb-1"
            >
              Become a Hospitality Partner
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
