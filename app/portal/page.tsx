'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const upcomingEvents = [
  {
    id: 1,
    title: 'Monthly Member Meeting',
    date: 'May 14, 2026',
    time: '6:30 PM – 8:00 PM',
    location: 'The Drake Hotel, Chicago',
    type: 'Meeting',
    rsvp: null,
  },
  {
    id: 2,
    title: 'Snowball 2026 Kick-Off Party',
    date: 'January 17, 2026',
    time: '7:00 PM – 10:00 PM',
    location: 'TBD, Chicago',
    type: 'Event',
    rsvp: null,
  },
  {
    id: 3,
    title: 'Cruising for a Cause',
    date: 'July 12, 2026',
    time: '5:00 PM – 9:00 PM',
    location: 'Navy Pier, Chicago',
    type: 'Fundraiser',
    rsvp: null,
  },
  {
    id: 4,
    title: 'Happy Hour — Summer Edition',
    date: 'August 6, 2026',
    time: '6:00 PM – 9:00 PM',
    location: 'Venteux, Chicago',
    type: 'Social',
    rsvp: null,
  },
  {
    id: 5,
    title: 'Annual Golf Outing',
    date: 'September 19, 2026',
    time: '8:00 AM – 4:00 PM',
    location: 'Cog Hill Golf & Country Club',
    type: 'Fundraiser',
    rsvp: null,
  },
]

const eventTypeColors: Record<string, string> = {
  Meeting:    'bg-blue-100 text-blue-700',
  Event:      'bg-purple-100 text-purple-700',
  Fundraiser: 'bg-green-100 text-green-700',
  Social:     'bg-yellow-100 text-yellow-700',
}

type RsvpMap = Record<number, 'yes' | 'no'>

export default function PortalPage() {
  const [rsvps, setRsvps] = useState<RsvpMap>({})
  const [duesModalOpen, setDuesModalOpen] = useState(false)

  const handleRsvp = (id: number, answer: 'yes' | 'no') => {
    setRsvps((prev) => ({ ...prev, [id]: answer }))
  }

  return (
    <div className="min-h-screen bg-jc-gray">
      {/* Portal nav */}
      <nav className="bg-jc-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="bg-white px-3 py-1 border-[6px] border-jc-red">
            <Image
              src="/jc-logo.png"
              alt="Junior Council"
              width={120}
              height={30}
              className="h-6 w-auto"
              priority
            />
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-white/50 text-sm hidden sm:block">
            Welcome back, <span className="text-white font-bold">Member</span>
          </span>
          <Link
            href="/"
            className="text-white/50 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors"
          >
            Sign Out
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Welcome banner */}
        <div className="bg-jc-black border-l-4 border-jc-red p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-jc-red text-xs font-bold tracking-widest uppercase mb-1">Member Dashboard</p>
            <h1 className="text-white font-black text-2xl sm:text-3xl tracking-tight">
              Welcome back!
            </h1>
            <p className="text-white/50 text-sm mt-1">Junior Council 2026 / 2027</p>
          </div>
          <button
            onClick={() => setDuesModalOpen(true)}
            className="flex-shrink-0 bg-jc-red hover:bg-jc-red-dark text-white font-black text-xs tracking-widest uppercase px-6 py-3 transition-colors"
          >
            Pay My Dues
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Dues Status', value: 'Pending', sub: '2026–2027', highlight: true },
            { label: 'Events Attended', value: '4', sub: 'This season' },
            { label: 'My Committee', value: 'Events', sub: 'Active member' },
            { label: 'OneCause Page', value: 'Active', sub: 'Fundraising live' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-jc-gray-mid p-5">
              <div className="text-jc-gray-dark text-xs uppercase tracking-widest mb-1">{stat.label}</div>
              <div className={`font-black text-xl mb-0.5 ${stat.highlight ? 'text-jc-red' : 'text-jc-black'}`}>
                {stat.value}
              </div>
              <div className="text-jc-gray-dark text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Upcoming events — takes 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-jc-gray-mid">
              <div className="px-6 py-4 border-b border-jc-gray-mid flex items-center justify-between">
                <h2 className="text-jc-black font-black text-lg">Upcoming Events</h2>
                <span className="text-jc-gray-dark text-xs">{upcomingEvents.length} events</span>
              </div>
              <div className="divide-y divide-jc-gray-mid">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 ${eventTypeColors[event.type]}`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-jc-black font-black text-sm">{event.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <span className="text-jc-gray-dark text-xs flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date} · {event.time}
                        </span>
                        <span className="text-jc-gray-dark text-xs flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    {/* RSVP buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {rsvps[event.id] ? (
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold px-3 py-1.5 ${rsvps[event.id] === 'yes' ? 'bg-green-100 text-green-700' : 'bg-jc-gray text-jc-gray-dark'}`}>
                            {rsvps[event.id] === 'yes' ? 'Attending' : 'Not Attending'}
                          </span>
                          <button
                            onClick={() => setRsvps((prev) => { const n = { ...prev }; delete n[event.id]; return n })}
                            className="text-jc-gray-dark text-xs hover:text-jc-red transition-colors"
                          >
                            Change
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => handleRsvp(event.id, 'yes')}
                            className="bg-jc-red hover:bg-jc-red-dark text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 transition-colors"
                          >
                            RSVP Yes
                          </button>
                          <button
                            onClick={() => handleRsvp(event.id, 'no')}
                            className="border border-jc-gray-mid hover:border-jc-red text-jc-gray-dark hover:text-jc-red text-xs font-bold uppercase tracking-wide px-3 py-1.5 transition-colors"
                          >
                            Can't Go
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Dues */}
            <div className="bg-white border border-jc-gray-mid">
              <div className="px-6 py-4 border-b border-jc-gray-mid">
                <h2 className="text-jc-black font-black text-lg">My Dues</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-jc-gray-dark text-sm">2026–2027 Dues</span>
                  <span className="text-jc-red font-black">Unpaid</span>
                </div>
                <div className="bg-jc-red/10 border border-jc-red/20 px-4 py-3 mb-4">
                  <p className="text-jc-red text-xs font-medium leading-snug">
                    Annual dues help fund Junior Council operations and keep membership benefits active.
                  </p>
                </div>
                <button
                  onClick={() => setDuesModalOpen(true)}
                  className="w-full bg-jc-red hover:bg-jc-red-dark text-white font-black text-xs tracking-widest uppercase py-3 transition-colors"
                >
                  Pay Dues Now
                </button>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white border border-jc-gray-mid">
              <div className="px-6 py-4 border-b border-jc-gray-mid">
                <h2 className="text-jc-black font-black text-lg">Quick Links</h2>
              </div>
              <div className="divide-y divide-jc-gray-mid">
                {[
                  { label: 'My OneCause Fundraiser', href: 'https://www.onecause.com/juniorcouncil', external: true },
                  { label: 'Member Directory', href: '/members', external: false },
                  { label: 'Board of Directors', href: '/board', external: false },
                  { label: 'Contact the Board', href: '/contact', external: false },
                  { label: 'Become a Sponsor', href: '/support', external: false },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between px-6 py-3 hover:bg-jc-gray transition-colors group"
                  >
                    <span className="text-jc-black text-sm group-hover:text-jc-red transition-colors">{link.label}</span>
                    <svg className="w-4 h-4 text-jc-gray-mid group-hover:text-jc-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Dues modal */}
      {duesModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4" onClick={() => setDuesModalOpen(false)}>
          <div className="bg-white max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-jc-red text-xs font-bold tracking-widest uppercase mb-1">Member Portal</p>
                <h2 className="text-jc-black font-black text-2xl tracking-tight">Pay Your Dues</h2>
              </div>
              <button onClick={() => setDuesModalOpen(false)} className="text-jc-gray-mid hover:text-jc-black transition-colors mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-jc-gray p-4 mb-6 border-l-4 border-jc-red">
              <div className="flex items-center justify-between">
                <span className="text-jc-black font-bold text-sm">2026–2027 Annual Dues</span>
                <span className="text-jc-red font-black text-xl">$[Amount]</span>
              </div>
              <p className="text-jc-gray-dark text-xs mt-2">Tax-deductible to the extent permitted by law.</p>
            </div>
            <div className="bg-jc-gray/50 border border-jc-gray-mid p-6 text-center">
              <svg className="w-8 h-8 text-jc-gray-mid mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <p className="text-jc-gray-dark text-sm font-medium mb-1">Payment processor coming soon</p>
              <p className="text-jc-gray-dark text-xs">
                In the meantime, contact{' '}
                <a href="mailto:info@juniorcouncil.org" className="text-jc-red font-bold hover:underline">
                  info@juniorcouncil.org
                </a>{' '}
                to arrange payment.
              </p>
            </div>
            <button
              onClick={() => setDuesModalOpen(false)}
              className="w-full mt-4 border-2 border-jc-gray-mid hover:border-jc-red text-jc-black hover:text-jc-red font-black text-xs tracking-widest uppercase py-3 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
