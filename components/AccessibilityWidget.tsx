'use client'

import { useState, useEffect } from 'react'

type Prefs = {
  bigText: boolean
  highContrast: boolean
  textSpacing: boolean
  pauseAnimations: boolean
  dyslexicFont: boolean
}

const defaultPrefs: Prefs = {
  bigText: false,
  highContrast: false,
  textSpacing: false,
  pauseAnimations: false,
  dyslexicFont: false,
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs)

  // Load saved prefs on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('jc-a11y')
      if (saved) setPrefs(JSON.parse(saved))
    } catch {}
  }, [])

  // Apply prefs to <html> element
  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('a11y-big-text', prefs.bigText)
    html.classList.toggle('a11y-high-contrast', prefs.highContrast)
    html.classList.toggle('a11y-text-spacing', prefs.textSpacing)
    html.classList.toggle('a11y-pause-animations', prefs.pauseAnimations)
    html.classList.toggle('a11y-dyslexic', prefs.dyslexicFont)
    try {
      localStorage.setItem('jc-a11y', JSON.stringify(prefs))
    } catch {}
  }, [prefs])

  function toggle(key: keyof Prefs) {
    setPrefs(p => ({ ...p, [key]: !p[key] }))
  }

  function resetAll() {
    setPrefs(defaultPrefs)
  }

  const anyActive = Object.values(prefs).some(Boolean)

  const features: { key: keyof Prefs; label: string; icon: string }[] = [
    { key: 'bigText',          label: 'Bigger Text',        icon: 'TT' },
    { key: 'highContrast',     label: 'High Contrast',      icon: '◐' },
    { key: 'textSpacing',      label: 'Text Spacing',       icon: '↔' },
    { key: 'pauseAnimations',  label: 'Pause Animations',   icon: '⏸' },
    { key: 'dyslexicFont',     label: 'Dyslexia Friendly',  icon: 'Df' },
  ]

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open accessibility menu"
        aria-expanded={open}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-jc-red hover:bg-jc-red-dark text-white flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-jc-red"
      >
        {anyActive && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" aria-hidden="true" />
        )}
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {/* Head */}
          <circle cx="12" cy="3.5" r="1.75" />
          {/* Body leaning forward with raised arm */}
          <path d="M12 6.5c-1 0-1.8.6-2.1 1.4L8.5 11H6a1 1 0 000 2h3a1 1 0 00.9-.6l.6-1.4.5 2H8a1 1 0 00-.9.6l-2 4.5a1 1 0 001.8.8L8.7 16h4.6l1 3a1 1 0 001.9-.6l-1.3-4a1 1 0 00-.9-.4h-2l-.4-2h2.9a1 1 0 00.9-.6l1.1-2.6a1 1 0 00-1.8-.8l-.7 1.6H13l-.4-1.6c.1 0 .2-.1.4-.1 0 0 1.5-.3 2-.9a1 1 0 00-1.4-1.4c-.1.1-.4.3-1.6.4z" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          aria-modal="false"
          className="fixed bottom-20 left-6 z-50 w-72 bg-white border border-jc-gray-mid shadow-2xl"
        >
          {/* Header */}
          <div className="bg-jc-black px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-jc-red text-xs font-bold tracking-widest uppercase">Junior Council</p>
              <h2 className="text-white font-black text-sm tracking-tight">Accessibility Options</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility menu"
              className="text-white/50 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Feature toggles */}
          <div className="p-4 space-y-2">
            {features.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={prefs[key]}
                className={`w-full flex items-center gap-4 px-4 py-3 border-2 transition-colors text-left ${
                  prefs[key]
                    ? 'border-jc-red bg-jc-red/5 text-jc-black'
                    : 'border-jc-gray-mid hover:border-jc-red text-jc-gray-dark hover:text-jc-black'
                }`}
              >
                <span
                  className={`w-9 h-9 flex items-center justify-center font-black text-sm flex-shrink-0 ${
                    prefs[key] ? 'bg-jc-red text-white' : 'bg-jc-gray text-jc-gray-dark'
                  }`}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span className="font-bold text-sm">{label}</span>
                {prefs[key] && (
                  <span className="ml-auto text-jc-red">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 pb-4 flex items-center justify-between">
            <button
              onClick={resetAll}
              disabled={!anyActive}
              className="text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Reset All
            </button>
            <span className="text-jc-gray-dark text-xs">
              {Object.values(prefs).filter(Boolean).length} active
            </span>
          </div>
        </div>
      )}
    </>
  )
}
