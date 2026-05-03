'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ScholarshipApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    school: '',
    program: '',
    graduationYear: '',
    howUsed: '',
    statement: '',
    patient: false,
  })

  const set = (field: string, value: string | boolean) =>
    setForm(f => ({ ...f, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to a real submission endpoint or form service when ready
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1.5 h-full bg-jc-red" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Apply</span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">
            Scholarship <span className="text-jc-red">Application</span>
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Applications are reviewed annually. All fields are required unless marked optional.
          </p>
          <Link
            href="/about/scholarship"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-sm mt-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Scholarship Fund
          </Link>
        </div>
      </section>

      <section className="bg-jc-gray py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {submitted ? (
            <div className="bg-white border-t-4 border-jc-red p-10 text-center">
              <div className="w-14 h-14 bg-jc-red/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-jc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-jc-black font-black text-3xl tracking-tight mb-3">
                Application Received
              </h2>
              <p className="text-jc-gray-dark text-lg mb-2">
                Thank you, <strong>{form.firstName}</strong>. We&apos;ve received your application.
              </p>
              <p className="text-jc-gray-dark text-sm mb-8">
                Our scholarship committee will review your application and be in touch at <strong>{form.email}</strong>.
              </p>
              <Link
                href="/about/scholarship"
                className="inline-flex items-center bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors"
              >
                Back to Scholarship Fund
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border-t-4 border-jc-red p-8 sm:p-10 space-y-8">

              {/* Personal Info */}
              <div>
                <h2 className="text-jc-black font-black text-lg uppercase tracking-widest mb-6 pb-3 border-b border-jc-gray-mid">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={e => set('firstName', e.target.value)}
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={e => set('lastName', e.target.value)}
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Phone Number <span className="text-jc-gray-dark normal-case tracking-normal">(optional)</span></label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Date of Birth</label>
                    <input
                      type="date"
                      required
                      value={form.dob}
                      onChange={e => set('dob', e.target.value)}
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black"
                    />
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-jc-black font-black text-lg uppercase tracking-widest mb-6 pb-3 border-b border-jc-gray-mid">
                  Education
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">School / Institution</label>
                    <input
                      type="text"
                      required
                      value={form.school}
                      onChange={e => set('school', e.target.value)}
                      placeholder="Name of school or institution you plan to attend"
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black placeholder:text-jc-gray-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Program / Field of Study</label>
                    <input
                      type="text"
                      required
                      value={form.program}
                      onChange={e => set('program', e.target.value)}
                      placeholder="e.g. Nursing, Business, Trade Program"
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black placeholder:text-jc-gray-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Expected Graduation Year</label>
                    <input
                      type="text"
                      required
                      value={form.graduationYear}
                      onChange={e => set('graduationYear', e.target.value)}
                      placeholder="e.g. 2027"
                      className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black placeholder:text-jc-gray-dark"
                    />
                  </div>
                </div>
              </div>

              {/* Fund Usage */}
              <div>
                <h2 className="text-jc-black font-black text-lg uppercase tracking-widest mb-6 pb-3 border-b border-jc-gray-mid">
                  Fund Usage
                </h2>
                <div>
                  <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">How do you plan to use the scholarship funds?</label>
                  <textarea
                    required
                    rows={4}
                    value={form.howUsed}
                    onChange={e => set('howUsed', e.target.value)}
                    placeholder="e.g. Tuition, housing, technology, books..."
                    className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black placeholder:text-jc-gray-dark resize-none"
                  />
                </div>
              </div>

              {/* Personal Statement */}
              <div>
                <h2 className="text-jc-black font-black text-lg uppercase tracking-widest mb-6 pb-3 border-b border-jc-gray-mid">
                  Personal Statement
                </h2>
                <div>
                  <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Tell us about yourself and why you are applying</label>
                  <p className="text-jc-gray-dark text-xs mb-3">Share your goals, challenges, and what this scholarship would mean to you. (250–500 words recommended)</p>
                  <textarea
                    required
                    rows={8}
                    value={form.statement}
                    onChange={e => set('statement', e.target.value)}
                    className="w-full border border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-sm text-jc-black resize-none"
                  />
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="text-jc-black font-black text-lg uppercase tracking-widest mb-6 pb-3 border-b border-jc-gray-mid">
                  Eligibility
                </h2>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.patient}
                    onChange={e => set('patient', e.target.checked)}
                    className="mt-1 accent-jc-red w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-jc-gray-dark text-sm leading-relaxed">
                    I confirm that I am a current or former patient of the Pediatric &amp; Adolescent HIV/AIDS Program at Ann &amp; Robert H. Lurie Children&apos;s Hospital of Chicago.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase py-4 transition-colors"
              >
                Submit Application
              </button>

              <p className="text-jc-gray-dark text-xs text-center">
                Questions? Contact us at{' '}
                <a href="mailto:info@juniorcouncil.org" className="text-jc-black hover:text-jc-red transition-colors">
                  info@juniorcouncil.org
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
