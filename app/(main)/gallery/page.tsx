'use client'

import { useState } from 'react'
import Image from 'next/image'

const events = [
  {
    id: 'all',
    label: 'All Photos',
  },
  {
    id: 'snowball-gala',
    label: 'Snowball Gala',
  },
  {
    id: 'golf-outing',
    label: 'Golf Outing',
  },
  {
    id: 'life-in-jc',
    label: 'Life in JC',
  },
  {
    id: 'volunteer',
    label: 'Volunteer Days',
  },
]

const photos = [
  // Snowball Gala — placeholder slots until real photos are added
  { id: 1, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 2, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 3, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 4, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 5, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 6, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2024', caption: 'Snowball Gala 2024', src: '' },
  { id: 7, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2023', caption: 'Snowball Gala 2023', src: '' },
  { id: 8, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2023', caption: 'Snowball Gala 2023', src: '' },
  { id: 9, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2023', caption: 'Snowball Gala 2023', src: '' },
  { id: 10, event: 'snowball-gala', eventLabel: 'Snowball Gala', year: '2023', caption: 'Snowball Gala 2023', src: '' },
  // Golf Outing — 2025
  { id: 11, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1553.JPG' },
  { id: 12, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1564.JPG' },
  { id: 13, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1578.JPG' },
  { id: 14, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1608.JPG' },
  { id: 15, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1647.JPG' },
  { id: 16, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1688.JPG' },
  { id: 17, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1703.JPG' },
  { id: 18, event: 'golf-outing', eventLabel: 'Golf Outing', year: '2025', caption: '2025 Golf Outing', src: '/images/gallery/golf-outing/IMG_1719.JPG' },
  // Life in JC — 2025 Derby Party
  { id: 19, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09313.JPG' },
  { id: 20, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09314.JPG' },
  { id: 21, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09676.JPG' },
  { id: 22, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09708.JPG' },
  { id: 23, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09739.JPG' },
  { id: 24, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09786.JPG' },
  { id: 25, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09801.JPG' },
  { id: 26, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09821.JPG' },
  { id: 27, event: 'life-in-jc', subEvent: 'derby-party', eventLabel: 'Life in JC', subEventLabel: 'Derby Party', year: '2025', caption: '2025 Derby Party', src: '/images/gallery/life-in-jc/DSC09826.JPG' },
  // Life in JC — 2025 Snowball Kickoff
  { id: 32, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/img_5680--1-.jpg' },
  { id: 33, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-001.jpg' },
  { id: 34, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-011.jpg' },
  { id: 35, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-019.jpg' },
  { id: 36, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-023--2-.jpg' },
  { id: 37, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-043.jpg' },
  { id: 38, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-045--1-.jpg' },
  { id: 39, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-057.jpg' },
  { id: 40, event: 'life-in-jc', subEvent: 'snowball-kickoff', eventLabel: 'Life in JC', subEventLabel: 'Snowball Kickoff', year: '2025', caption: '2025 Snowball Kickoff', src: '/images/gallery/life-in-jc/kickoff/jc-kickoff-25-091--1-.jpg' },
  // Volunteer Days — placeholder slots
  { id: 28, event: 'volunteer', eventLabel: 'Volunteer Days', year: '2024', caption: 'Volunteer Day 2024', src: '' },
  { id: 29, event: 'volunteer', eventLabel: 'Volunteer Days', year: '2024', caption: 'Volunteer Day 2024', src: '' },
  { id: 30, event: 'volunteer', eventLabel: 'Volunteer Days', year: '2024', caption: 'Volunteer Day 2024', src: '' },
  { id: 31, event: 'volunteer', eventLabel: 'Volunteer Days', year: '2023', caption: 'Volunteer Day 2023', src: '' },
]

type Photo = typeof photos[0]

// Derive sub-tabs for Life in JC from the photos array
const lifeInJcSubEvents = Array.from(
  new Map(
    photos
      .filter((p) => p.event === 'life-in-jc' && p.subEvent)
      .map((p) => [p.subEvent, { id: p.subEvent!, label: p.subEventLabel! }])
  ).values()
)

export default function GalleryPage() {
  const [activeEvent, setActiveEvent] = useState('all')
  const [activeSubEvent, setActiveSubEvent] = useState('all')
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const handleEventChange = (eventId: string) => {
    setActiveEvent(eventId)
    setActiveSubEvent('all')
  }

  const lifeInJcPhotos = photos.filter((p) => p.event === 'life-in-jc')
  const filteredLifeInJc =
    activeSubEvent === 'all'
      ? lifeInJcPhotos
      : lifeInJcPhotos.filter((p) => p.subEvent === activeSubEvent)

  const filtered =
    activeEvent === 'all'
      ? photos
      : activeEvent === 'life-in-jc'
      ? filteredLifeInJc
      : photos.filter((p) => p.event === activeEvent)

  // Group by sub-event label (if present) or event label + year for the "All" view
  const grouped = (activeEvent === 'all' ? photos : filtered).reduce<Record<string, Photo[]>>((acc, photo) => {
    const label = photo.subEventLabel || photo.eventLabel
    const key = `${label} — ${photo.year}`
    if (!acc[key]) acc[key] = []
    acc[key].push(photo)
    return acc
  }, {})

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-jc-black py-24 relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 top-0 w-2/5 h-full bg-jc-red/8 transform skew-x-[-8deg]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
              Memories
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            A look at the people, events, and moments that make Junior Council
            what it is. Browse by event below.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-jc-charcoal sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {events.map((ev) => (
              <button
                key={ev.id}
                onClick={() => handleEventChange(ev.id)}
                className={`flex-shrink-0 px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none ${
                  activeEvent === ev.id
                    ? 'bg-jc-red text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {ev.label}
              </button>
            ))}
          </div>
        </div>
        {/* Life in JC sub-tabs — full width white bar */}
        {activeEvent === 'life-in-jc' && lifeInJcSubEvents.length > 1 && (
          <div className="bg-white border-t border-jc-gray-mid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveSubEvent('all')}
                  className={`flex-shrink-0 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none ${
                    activeSubEvent === 'all'
                      ? 'text-jc-black border-b-2 border-jc-red'
                      : 'text-jc-gray-dark hover:text-jc-black'
                  }`}
                >
                  All
                </button>
                {lifeInJcSubEvents.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubEvent(sub.id)}
                    className={`flex-shrink-0 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none ${
                      activeSubEvent === sub.id
                        ? 'text-jc-black border-b-2 border-jc-red'
                        : 'text-jc-gray-dark hover:text-jc-black'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeEvent === 'all' ? (
            // Grouped view — show section headers per event + year
            <div className="space-y-16">
              {Object.entries(grouped).map(([group, groupPhotos]) => (
                <div key={group}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-jc-black font-black text-2xl tracking-tight">
                      {group.split(' — ')[0]}
                      <span className="text-jc-red ml-2">— {group.split(' — ')[1]}</span>
                    </h2>
                    <div className="flex-1 h-px bg-jc-gray-mid" aria-hidden="true" />
                    <span className="text-jc-gray-dark text-xs uppercase tracking-widest">
                      {groupPhotos.length} photos
                    </span>
                  </div>
                  <PhotoGrid photos={groupPhotos} onOpen={setLightbox} />
                </div>
              ))}
            </div>
          ) : (
            // Single event view
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-jc-black font-black text-2xl tracking-tight">
                  {activeEvent === 'life-in-jc' && activeSubEvent !== 'all'
                    ? lifeInJcSubEvents.find((s) => s.id === activeSubEvent)?.label
                    : events.find((e) => e.id === activeEvent)?.label}
                </h2>
                <div className="flex-1 h-px bg-jc-gray-mid" aria-hidden="true" />
                <span className="text-jc-gray-dark text-xs uppercase tracking-widest">
                  {filtered.length} photos
                </span>
              </div>
              <PhotoGrid photos={filtered} onOpen={setLightbox} />
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${lightbox.caption}`}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.src ? (
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.caption}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className="bg-jc-charcoal aspect-video w-full flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/30 text-sm">Photo placeholder</p>
              </div>
            )}
            <div className="mt-3 flex items-center justify-between">
              <p className="text-white font-semibold">{lightbox.caption}</p>
              <span className="text-white/40 text-xs uppercase tracking-widest">
                {lightbox.eventLabel} · {lightbox.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PhotoGrid({
  photos,
  onOpen,
}: {
  photos: Photo[]
  onOpen: (photo: Photo) => void
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {photos.map((photo) => (
        <button
          key={photo.id}
          onClick={() => onOpen(photo)}
          className="group relative bg-jc-gray aspect-square overflow-hidden focus:outline-none focus:ring-2 focus:ring-jc-red focus:ring-offset-2"
          aria-label={`View photo: ${photo.caption}`}
        >
          {photo.src ? (
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-jc-gray group-hover:bg-jc-gray-mid transition-colors">
              <svg className="w-10 h-10 text-jc-gray-mid group-hover:text-jc-gray-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-jc-black/0 group-hover:bg-jc-black/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
            <p className="text-white text-xs font-semibold leading-tight">
              {photo.caption}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}
