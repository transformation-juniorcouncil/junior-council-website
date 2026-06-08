'use client'

import { useState } from 'react'
import Link from 'next/link'

type Event = {
  title: string
  date: string
  time?: string
  location?: string
  type: string
  description: string
  cta?: { label: string; href: string; external?: boolean } | null
  featured?: boolean
}

const upcomingEvents: Event[] = [
  {
    title: 'VinHausa at Soldier Field',
    date: 'June 11, 2026',
    time: 'All Day',
    location: 'Soldier Field, Chicago',
    type: 'Community',
    description: 'An epic outdoor wine and music festival at Soldier Field. Join fellow JC members for an unforgettable summer evening.',
    cta: { label: 'Get Tickets', href: 'https://www.vinhausa.us/events/vinhausa-soldier-field', external: true },
    featured: true,
  },
  {
    title: 'Chicago Pride Fest',
    date: 'June 20 – 21, 2026',
    location: 'Halsted Street, Chicago',
    type: 'Community',
    description: 'Celebrate Pride with the JC community at one of Chicago\'s most vibrant summer traditions.',
    cta: null,
  },
  {
    title: 'Sunday Cycling at Equinox',
    date: 'Every Sunday',
    time: '9:45 AM',
    location: 'Equinox, Chicago',
    type: 'Wellness',
    description: 'Weekly Sunday morning cycling class with JC members. All levels welcome — show up, sweat, connect.',
    cta: null,
  },
  {
    title: 'Northalsted Market Days',
    date: 'Summer 2026',
    location: 'Halsted Street, Chicago',
    type: 'Community',
    description: 'One of the Midwest\'s largest street festivals. Stay tuned for details on how to join us.',
    cta: { label: 'Festival Info', href: 'https://northalsted.com/main-events/northalsted-market-days/', external: true },
  },
  {
    title: 'Annual Snowball Gala 2027',
    date: 'Winter 2027',
    location: 'Chicago, IL',
    type: 'Signature',
    description: 'Our flagship black-tie fundraiser. Live entertainment, silent auction, 500+ guests — one shared mission.',
    cta: { label: 'Gala Details', href: '/gala' },
  },
]

const pastEvents: Event[] = [
  {
    title: 'BOD Transition Party',
    date: 'Spring 2026',
    location: 'Chicago Trolley',
    type: 'Member Event',
    description: 'A wig-themed trolley ride through Chicago celebrating the transition from the 2025/26 board to the 2026/27 board.',
    cta: null,
  },
  {
    title: 'Walk for Lurie\'s',
    date: 'Spring 2026',
    location: 'Chicago, IL',
    type: 'Fundraiser',
    description: 'JC members walked alongside hundreds of Chicagoans raising funds and awareness for Lurie Children\'s Hospital.',
    cta: { label: 'Learn More', href: 'https://events.luriechildrens.org/walk-for-luriechildrens', external: true },
  },
]

const typeStyles: Record<string, { pill: string; accent: string }> = {
  'Community':   { pill: 'bg-blue-100 text-blue-700',   accent: 'border-blue-400' },
  'Wellness':    { pill: 'bg-green-100 text-green-700',  accent: 'border-green-400' },
  'Signature':   { pill: 'bg-jc-black text-white',       accent: 'border-jc-red' },
  'Fundraiser':  { pill: 'bg-jc-red/10 text-jc-red',     accent: 'border-jc-red' },
  'Member Event':{ pill: 'bg-jc-gray text-jc-gray-dark', accent: 'border-jc-gray-mid' },
}

export default function EventsPage() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')

  const featured = upcomingEvents.find(e => e.featured)!
  const rest = upcomingEvents.filter(e => !e.featured)

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1.5 h-full bg-jc-red" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-0 w-2/5 h-full bg-jc-red/8 transform skew-x-[-8deg]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Get Involved</span>
            </div>
            <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">Events</h1>
            <p className="text-white/50 text-base mt-3 max-w-xl">
              Join us out in Chicago — from community outings to our signature Snowball Gala.
            </p>
          </div>
          <Link
            href="/membership#join"
            className="inline-flex items-center gap-2 bg-jc-red hover:bg-jc-red-dark text-white font-black text-xs tracking-widest uppercase px-6 py-3 transition-colors flex-shrink-0"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="bg-white border-b border-jc-gray-mid sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0">
          {(['upcoming', 'past'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-8 py-4 text-xs font-black uppercase tracking-widest transition-colors ${
                tab === t
                  ? 'text-jc-red'
                  : 'text-jc-gray-dark hover:text-jc-black'
              }`}
            >
              {t === 'upcoming' ? `Upcoming (${upcomingEvents.length})` : `Past (${pastEvents.length})`}
              {tab === t && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-jc-red" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── UPCOMING TAB ── */}
      {tab === 'upcoming' && (
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            {/* Featured / Next Up */}
            <div className="relative bg-jc-black overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-jc-red" aria-hidden="true" />
              <div className="absolute top-4 right-4">
                <span className="bg-jc-red text-white text-xs font-black uppercase tracking-widest px-3 py-1">
                  Next Up
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Date block */}
                <div className="bg-jc-red px-10 py-12 flex flex-col justify-center">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">{featured.type}</p>
                  <h2 className="text-white font-black text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
                    {featured.title}
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white font-bold text-sm">{featured.date}</span>
                    </div>
                    {featured.time && (
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white font-bold text-sm">{featured.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-white/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white font-bold text-sm">{featured.location}</span>
                    </div>
                  </div>
                </div>
                {/* Description block */}
                <div className="px-10 py-12 flex flex-col justify-center">
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    {featured.description}
                  </p>
                  {featured.cta && (
                    <Link
                      href={featured.cta.href}
                      {...(featured.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center gap-2 bg-white text-jc-black hover:bg-jc-gray font-black text-xs tracking-widest uppercase px-6 py-3 transition-colors self-start"
                    >
                      {featured.cta.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Rest of upcoming — 2-col grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
              {rest.map((event, i) => {
                const style = typeStyles[event.type] ?? typeStyles['Community']
                return (
                  <div
                    key={i}
                    className={`border-t-4 bg-jc-gray border-jc-gray-mid p-6 flex flex-col ${style.accent}`}
                  >
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-4 self-start ${style.pill}`}>
                      {event.type}
                    </span>
                    <h3 className="text-jc-black font-black text-lg leading-tight mb-3">{event.title}</h3>
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-jc-gray-dark text-xs font-bold">{event.date}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-jc-gray-dark text-xs font-bold">{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-jc-gray-dark text-xs font-bold">{event.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-jc-gray-dark text-sm leading-relaxed flex-grow mb-5">{event.description}</p>
                    {event.cta ? (
                      <Link
                        href={event.cta.href}
                        {...(event.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="inline-flex items-center gap-1 text-jc-black hover:text-jc-red font-black text-xs uppercase tracking-widest border-b border-jc-red pb-0.5 transition-colors self-start mt-auto"
                      >
                        {event.cta.label}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="text-jc-gray-dark text-xs uppercase tracking-widest font-bold mt-auto">
                        Details coming soon
                      </span>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── PAST TAB ── */}
      {tab === 'past' && (
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pastEvents.map((event, i) => {
                const style = typeStyles[event.type] ?? typeStyles['Member Event']
                return (
                  <div key={i} className="border border-jc-gray-mid bg-jc-gray/50 p-8 flex flex-col opacity-80">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 ${style.pill}`}>
                        {event.type}
                      </span>
                      <span className="text-jc-gray-dark text-xs uppercase tracking-widest font-bold">Past</span>
                    </div>
                    <h3 className="text-jc-black font-black text-xl mb-3">{event.title}</h3>
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-jc-gray-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-jc-gray-dark text-xs">{event.date}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-jc-gray-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-jc-gray-dark text-xs">{event.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-jc-gray-dark text-sm leading-relaxed flex-grow mb-5">{event.description}</p>
                    {event.cta && (
                      <Link
                        href={event.cta.href}
                        {...(event.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="inline-flex items-center gap-1 text-jc-gray-dark hover:text-jc-black font-black text-xs uppercase tracking-widest border-b border-jc-gray-mid pb-0.5 transition-colors self-start"
                      >
                        {event.cta.label}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Stay in the Loop */}
      <section className="bg-jc-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-3">
            Want to Join Us?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Members get first access to event announcements, ticket releases, and exclusive gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership#join"
              className="inline-flex items-center justify-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-white/50 font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
