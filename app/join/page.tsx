import Link from 'next/link'
import Image from 'next/image'

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-jc-black flex flex-col">
      {/* Top bar */}
      <div className="px-6 py-5 flex items-center justify-between">
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
        <Link
          href="/login"
          className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to sign in
        </Link>
      </div>

      {/* Card */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">New Member</span>
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            </div>
            <h1 className="text-white font-black text-3xl sm:text-4xl tracking-tight">
              Member <span className="text-jc-red">Access</span>
            </h1>
            <p className="text-white/50 text-sm mt-2">
              Membership is by invitation only.
            </p>
          </div>

          <div className="bg-jc-charcoal border border-white/10 p-8">
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 bg-jc-red/10 border border-jc-red/30 flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-jc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <div>
                <p className="text-white font-bold text-sm mb-2">You need an invite to join</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Junior Council membership is by invitation from a JC admin. If you believe you should have access, reach out and we&apos;ll get you set up.
                </p>
              </div>

              <a
                href="mailto:transformation@juniorcouncil.org"
                className="block w-full bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase py-4 text-center transition-colors"
              >
                Contact Us
              </a>
            </div>

            <div className="border-t border-white/10 mt-8 pt-6 text-center">
              <p className="text-white/40 text-xs">
                Already have an account?{' '}
                <Link href="/login" className="text-jc-red hover:underline font-bold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <p className="text-white/20 text-xs text-center mt-6">
            <a href="mailto:transformation@juniorcouncil.org" className="text-white/40 hover:text-white transition-colors">
              transformation@juniorcouncil.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
