import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership | Junior Council',
  description:
    'Join Junior Council. Learn about membership, committees, life in JC, and dues.',
}

const committees = [
  {
    name: 'Snowball Committee',
    description:
      'Plan and execute Junior Council\'s flagship Annual Snowball Gala — from venue and entertainment to ticketing, logistics, and night-of operations.',
  },
  {
    name: 'Corporate Committee',
    description:
      'Identify and secure corporate sponsorships, manage partner relationships, and develop packages that align businesses with our mission.',
  },
  {
    name: 'Fundraising Committee',
    description:
      'Drive individual and peer-to-peer fundraising efforts, manage donor outreach, and support the Wellness for a Cause and Silent Auction programs.',
  },
  {
    name: 'Hospitality Committee',
    description:
      'Source and steward hospitality partnerships — restaurants, bars, and beverage sponsors who support JC events with in-kind donations and venue contributions.',
  },
  {
    name: 'Membership Committee',
    description:
      'Recruit and retain members, welcome new joiners, and build the programming and connections that make JC a community worth being part of.',
  },
  {
    name: 'Education & DEI Committee',
    description:
      'Lead member education on HIV/AIDS awareness and advance diversity, equity, and inclusion across all JC programming and organizational practices.',
  },
  {
    name: 'Marketing Committee',
    description:
      'Manage JC\'s brand, social media presence, email communications, and digital content — telling our story in a way that drives engagement and awareness.',
  },
  {
    name: 'PR Committee',
    description:
      'Build media relationships, secure press coverage, and amplify Junior Council\'s mission across Chicago\'s nonprofit and professional communities.',
  },
]

export default function MembershipPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              Membership
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Join Junior Council
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Become part of a community of passionate Chicago professionals
            committed to making a real difference.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section id="join" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-6 tracking-tight">
                Why <span className="text-jc-red">Join?</span>
              </h2>
              <p className="text-jc-gray-dark text-lg leading-relaxed mb-5">
                Junior Council membership is more than a title — it&apos;s a
                commitment to community, advocacy, and action. Members are the
                heartbeat of everything we do: planning events, building
                partnerships, amplifying our mission, and raising critical funds
                for Lurie Children&apos;s Hospital.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Access to exclusive JC events and networking',
                  'Volunteer leadership opportunities',
                  'Committee involvement and skill development',
                  'Connection to Chicago\'s nonprofit community',
                  'Direct impact on youth with HIV and AIDS',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-jc-red flex-shrink-0 flex items-center justify-center mt-0.5" aria-hidden="true">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-jc-gray-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
              >
                Join the Team
              </Link>
            </div>
            <div className="bg-jc-black p-10">
              <h3 className="text-white font-black text-2xl mb-6">
                Membership at a Glance
              </h3>
              <div className="space-y-6">
                {[
                  {
                    label: 'Who Can Join',
                    value: 'Chicago-area professionals & community members',
                  },
                  {
                    label: 'Commitment',
                    value: 'Committee participation, event attendance',
                  },
                  {
                    label: 'Annual Dues',
                    value: 'See dues section below',
                  },
                  {
                    label: 'Applications',
                    value: 'Accepted on a rolling basis',
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-jc-red pl-4">
                    <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Meetings */}
      <section className="bg-jc-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Monthly Meetings</span>
              </div>
              <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-5">
                Come See What We&apos;re About.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Not sure if JC is right for you? Come to a meeting first. Every month, Junior Council members gather to connect, plan, and move our mission forward. Guests are always welcome — it&apos;s the best way to get a real feel for our community before committing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-jc-red flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">When</div>
                    <div className="text-white font-bold">Second Wednesday of Every Month · 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-jc-red flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Where</div>
                    <div className="text-white font-bold">Two Thirty Co-Working · 230 W Superior St, Chicago, IL 60654</div>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=230+W+Superior+St+Chicago+IL+60654"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-black text-xs tracking-widest uppercase px-6 py-3 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
            <div className="border border-white/10 p-8">
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">About the Space</div>
              <h3 className="text-white font-black text-xl mb-3">Two Thirty Co-Working</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A modern co-working space in Chicago&apos;s River North neighborhood — the perfect home base for our monthly gatherings. Centrally located, easy to get to, and a great setting for connecting with fellow members.
              </p>
              <a
                href="https://www.twothirty.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-jc-red hover:text-white font-black text-xs uppercase tracking-widest border-b border-jc-red pb-0.5 transition-colors"
              >
                Visit Two Thirty
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-jc-black font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Our <span className="text-jc-red">Committees</span>
          </h2>
          <p className="text-jc-gray-dark text-lg max-w-3xl mb-12">
            Members join one or more committees based on their interests and
            skills. Committees are where the real work happens.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {committees.map((committee, i) => (
              <div key={i} className="border border-jc-gray-mid hover:border-jc-red transition-colors p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <h3 className="text-jc-black font-black text-lg mb-3">
                  {committee.name}
                </h3>
                <p className="text-jc-gray-dark text-sm leading-relaxed">
                  {committee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dues */}
      <section id="dues" className="bg-jc-charcoal py-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Membership <span className="text-jc-red">Dues</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Junior Council membership is an investment in your community — and
            directly in the lives of adolescents living with HIV and AIDS.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Annual Dues */}
            <div className="bg-jc-black border border-white/10 p-8">
              <div className="text-jc-red font-black text-4xl mb-1">$100</div>
              <div className="text-white font-black text-xl mb-3">Annual Dues</div>
              <div className="w-8 h-0.5 bg-jc-red mb-4" aria-hidden="true" />
              <p className="text-white/60 text-sm leading-relaxed">
                Flat annual membership fee covering committee access, event
                invitations, voting rights, and full participation in Junior
                Council programming.
              </p>
            </div>
            {/* Fundraising Requirement */}
            <div className="bg-jc-red p-8">
              <div className="text-white font-black text-4xl mb-1">$100</div>
              <div className="text-white font-black text-xl mb-3">Fundraising Minimum</div>
              <div className="w-8 h-0.5 bg-white/40 mb-4" aria-hidden="true" />
              <p className="text-white/80 text-sm leading-relaxed">
                Each member raises a minimum of $100 through their personal
                OneCause fundraiser page. Every dollar goes directly to the
                Adolescent HIV program at Lurie Children&apos;s Hospital.
              </p>
            </div>
          </div>
          {/* OneCause callout */}
          <div className="border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 bg-jc-red flex-shrink-0 flex items-center justify-center" aria-hidden="true">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold mb-1">Powered by OneCause</div>
              <p className="text-white/50 text-sm">
                Every member gets their own personal fundraising page on
                OneCause — share it with friends, family, and your network to
                hit your $100 fundraising goal.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
