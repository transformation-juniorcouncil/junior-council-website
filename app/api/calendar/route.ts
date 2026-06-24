import { NextResponse } from 'next/server'

const CALENDAR_ID = 'juniorcouncil.org_tiul9akldge6a8vu014dhmlrt0@group.calendar.google.com'

export async function GET() {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'Missing API key' }, { status: 500 })

  const now = new Date().toISOString()
  const oneYearOut = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()

  const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`)
  url.searchParams.set('key', apiKey)
  url.searchParams.set('timeMin', now)
  url.searchParams.set('timeMax', oneYearOut)
  url.searchParams.set('singleEvents', 'true')
  url.searchParams.set('orderBy', 'startTime')
  url.searchParams.set('maxResults', '50')

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!res.ok) {
    const err = await res.text()
    return NextResponse.json({ error: err }, { status: res.status })
  }

  const data = await res.json()

  type GCalEvent = {
    id: string
    summary?: string
    start: { dateTime?: string; date?: string }
    end: { dateTime?: string; date?: string }
    location?: string
    description?: string
  }

  const events = (data.items as GCalEvent[]).map((item) => {
    const startRaw = item.start.dateTime ?? item.start.date ?? ''
    const endRaw   = item.end?.dateTime ?? item.end?.date ?? ''
    const startDate = new Date(startRaw)
    const endDate   = new Date(endRaw)

    const dateKey = startRaw.slice(0, 10)

    const dateLabel = startDate.toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago',
    })

    const formatTime = (d: Date) =>
      d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'America/Chicago' })

    const time = item.start.dateTime
      ? `${formatTime(startDate)} – ${formatTime(endDate)}`
      : 'All day'

    // Classify event type based on title keywords
    const title = item.summary ?? 'Event'
    let type = 'Event'
    if (/meeting/i.test(title))                        type = 'Meeting'
    else if (/gala|derby|golf|cruise|cause|fundrais/i.test(title)) type = 'Fundraiser'
    else if (/happy hour|social|party/i.test(title))   type = 'Social'

    return {
      id: item.id,
      title,
      dateKey,
      date: dateLabel,
      time,
      location: item.location ?? '',
      type,
    }
  })

  return NextResponse.json({ events })
}
