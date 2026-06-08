import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events | Junior Council',
  description:
    'Upcoming Junior Council events open to the public — join us for networking, fundraising, and community gatherings in Chicago.',
}

type Event = {
  title: string
  date: string
  time?: string
  location?: string
  type: string
  description: string
  cta?: { label: string; href: string; external?: boolean } | null
}

const upcomingEvents: Event[] = [
  {
    title: 'VinHausa at Soldier Field',
    date: 'June 11, 2026',
    location: 'Soldier Field, Chicago, IL',
    type: 'Community Event',
    description:
      'Join Junior Council members at VinHausa — an epic outdoor wine and music festival at Soldier Field. A great opportunity to connect with fellow members and enjoy a summer evening in Chicago.',
    cta: { label: 'Event Details', href: 'https://www.vinhausa.us/events/vinhausa-soldier-field', external: true },
  },
  {
    title: 'Chicago Pride Fest',
    date: 'June 20 – 21, 2026',
    location: 'Halsted Street, Chicago, IL',
    type: 'Community Event',
    description:
      'Celebrate Pride with the Junior Council community at Chicago Pride Fest — one of the city\'s most vibrant and joyful summer traditions. Come out, show your colors, and support a cause that fights for every young person\'s right to care.',
    cta: null,
  },
  {
    title: 'Sunday Cycling at Equinox',
    date: 'Sundays',
    time: '9:45 AM',
    location: 'Equinox, Chicago, IL',
    type: 'Wellness',
    description:
      'Sweat with us! Join Junior Council members for a weekly Sunday morning cycling class at Equinox. A fun, energizing way to stay connected with the community outside of our formal events.',
    cta: null,
  },
  {
    title: 'Northalsted Market Days',
    date: 'Summer 2026',
    location: 'Halsted Street, Chicago, IL',
    type: 'Community Event',
    description:
      'One of the Midwest\'s largest street festivals, Northalsted Market Days is a beloved Chicago summer tradition. Junior Council will be there — stay tuned for details on how to join us.',
    cta: { label: 'Festival Info', href: 'https://northalsted.com/main-events/northalsted-market-days/', external: true },
  },
  {
    title: 'Annual Snowball Gala 2027',
    date: 'Winter 2027 — Announcing Soon',
    time: 'Doors open at 6:00 PM',
    location: 'Chicago, IL',
    type: 'Signature Event',
    description:
      'Junior Council\'s flagship fundraiser returns for another unforgettable evening. Black tie. Live entertainment. Silent auction. 500+ guests. And one shared mission: giving Chicago\'s youth with HIV and AIDS a fighting chance.',
    cta: { label: 'View Gala Details', href: '/gala' },
  },
]

const pastEvents: Event[] = [
  {
    title: 'BOD Transition Party',
    date: 'Spring 2026',
    location: 'Chicago, IL',
    type: 'Member Event',
    description:
      'A wig-themed trolley ride through Chicago to celebrate the transition from the 2025/26 board to the 2026/27 board. An unforgettable night welcoming in new leadership and honoring the outgoing team.',
    cta: null,
  },
  {
    title: 'Walk for Lurie\'s',
    date: 'Spring 2026',
    location: 'Chicago, IL',
    type: 'Fundraiser',
    description:
      'Junior Council members laced up and walked in support of Lurie Children\'s Hospital — joining hundreds of Chicagoans raising funds and awareness for the patients and families served by Lurie.',
    cta: { label: 'Learn More', href: 'https://events.luriechildrens.org/walk-for-luriechildrens', external: true },
  },
]

const typeColors: Record<string, string> = {
  'Networking':      'bg-jc-gray text-jc-gray-dark border border-jc-gray-mid',
  'Fundraiser':      'bg-jc-red/10 text-jc-red border border-jc-red/20',
  'Signature Event': 'bg-jc-black text-white border border-white/10',
  'Community Event': 'bg-blue-50 text-blue-700 border border-blue-100',
  'Wellness':        'bg-green-50 text-green-700 border border-green-100',
  'Member Event':    'bg-jc-gray text-jc-gray-dark border border-jc-gray-mid',
}

function EventCard({ event, muted = false }: { event: Event; muted?: boolean }) {
  return (
    <div className={`border transition-colors p-8 sm:p-10 ${muted ? 'border-jc-gray-mid bg-jc-gray/40' : 'border-jc-gray-mid hover:border-jc-red'}`}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 ${typeColors[event.type] ?? typeColors['Networking']}`}>
            {event.type}
          </span>
          <h2 className={`font-black text-2xl sm:text-3xl tracking-tight ${muted ? 'text-jc-gray-dark' : 'text-jc-black'}`}>
            {event.title}
          </h2>
        </div>
      </div>

      {/* Details row */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-jc-gray-dark text-sm">{event.date}</span>
        </div>
        {event.time && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-jc-gray-dark text-sm">{event.time}</span>
          </div>
        )}
        {event.location && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-jc-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-jc-gray-dark text-sm">{event.location}</span>
          </div>
        )}
      </div>

      <p className="text-jc-gray-dark text-base leading-relaxed mb-6">
        {event.description}
      </p>

      {event.cta ? (
        <Link
          href={event.cta.href}
          {...(event.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center text-jc-black font-bold text-sm uppercase tracking-widest border-b-2 border-jc-red hover:text-jc-red transition-colors pb-1"
        >
          {event.cta.label}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      ) : (
        muted ? null : (
          <p className="text-jc-gray-dark text-xs uppercase tracking-widest font-bold">
            Details announcing soon
          </p>
        )
      )}
    </div>
  )
}

export default function EventsPage() {
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
              Get Involved
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Events
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            From community outings to our signature Snowball Gala — there are
            plenty of ways to get involved, give back, and connect with the
            Junior Council community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Upcoming</span>
          </div>
          <div className="space-y-8">
            {upcomingEvents.map((event, i) => (
              <EventCard key={i} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-jc-gray py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-jc-gray-mid" aria-hidden="true" />
            <span className="text-jc-gray-dark text-xs font-bold tracking-[0.25em] uppercase">Past Events</span>
          </div>
          <div className="space-y-8">
            {pastEvents.map((event, i) => (
              <EventCard key={i} event={event} muted />
            ))}
          </div>
        </div>
      </section>

      {/* Stay in the Loop CTA */}
      <section className="bg-jc-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Become a member to get first access to event announcements, ticket
            releases, and exclusive Junior Council gatherings.
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
