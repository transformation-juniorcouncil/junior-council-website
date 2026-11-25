import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Donors & Partners | Junior Council',
  description:
    'Junior Council is grateful to our corporate donors, hospitality partners, silent auction contributors, and Wellness for a Cause sponsors.',
}

// Monogram shown in place of a partner logo until the real asset is supplied.
const SKIP_WORDS = new Set(['the', 'of', 'for', 'and', 'a', '&'])

function initials(name: string) {
  return name
    .split(/[\s/]+/)
    .filter((w) => w && !SKIP_WORDS.has(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export default function DonorsPage() {
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
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27 Season</span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Our Donors &amp; Partners
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Sponsorship opportunities for the 2026–27 season are now open.
            These spots are yours — partner with Junior Council and be seen by
            hundreds of Chicago professionals.
          </p>
        </div>
      </section>

      {/* Corporate */}
      <section id="corporate" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Corporate <span className="text-jc-red">Donors</span>
              </h2>
            </div>
            <Link href="/support#corporate" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Corporate Partner →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Baker Tilly', category: 'Longest Drive', website: 'https://www.bakertilly.com/', logo: '/baker-tilly-logo.png', xlarge: true },
              { name: 'Collaborate Health', category: 'Golf Outing Hole Sponsor', website: 'https://www.collaborate.health/', logo: '/collaborate-health-logo.webp', wide: true },
              { name: 'Deslauriers, Inc.', category: 'Golf Outing Hole Sponsor', website: 'https://www.deslinc.com/', logo: '/deslauriers-logo.png', large: true },
              { name: 'Vrdolyak Law Group', category: 'Golf Outing Hole Sponsor', website: 'https://www.vlglaw.com/', logo: '/vrdolyak-law-logo.png' },
            ].map((partner: { name: string; category: string; website?: string; logo: string; wide?: boolean; large?: boolean; xlarge?: boolean }, i) => {
              const cardClasses = `border border-jc-gray-mid transition-colors p-5 flex flex-col items-center text-center group ${partner.website ? 'hover:border-jc-red cursor-pointer' : ''}`
              const inner = (
                <>
                  <div className="h-24 w-full flex items-center justify-center mb-3">
                    <div className={`${partner.wide ? 'w-full h-16 px-3' : partner.xlarge ? 'w-24 h-24' : partner.large ? 'w-20 h-20' : 'w-16 h-16'} bg-white rounded-sm flex items-center justify-center transition-colors flex-shrink-0 overflow-hidden ${partner.website ? 'group-hover:bg-jc-red/10' : ''}`}>
                      <Image src={partner.logo} alt={partner.name} width={partner.wide ? 130 : partner.xlarge ? 96 : partner.large ? 80 : 56} height={partner.xlarge ? 96 : partner.large ? 80 : 56} className="object-contain max-h-full w-auto" />
                    </div>
                  </div>
                  <div className={`text-jc-black font-black text-sm leading-tight mb-1 transition-colors ${partner.website ? 'group-hover:text-jc-red' : ''}`}>
                    {partner.name}
                  </div>
                  <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                    {partner.category}
                  </div>
                </>
              )
              return partner.website ? (
                <a key={i} href={partner.website} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={cardClasses}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="bg-jc-gray py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Hospitality <span className="text-jc-red">Partners</span>
              </h2>
            </div>
            <Link href="/support#hospitality" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Hospitality Partner →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Happy Camper',   category: 'Restaurant Partner', website: 'https://happycamper.pizza/old-town/', logo: '/happy-camper-logo.png' },
              { name: 'Two Thirty',     category: 'Venue Partner',      website: 'https://www.twothirty.space/',       logo: '/two-thirty-logo.png' },
              { name: 'Tapas Valencia', category: 'Restaurant Partner', website: 'https://www.tapasvalencia.com/',      logo: '/tapas-valencia.png', wide: true },
              { name: "Osito's Tap",    category: 'Bar Partner',        website: 'https://www.ositostap.com/',          logo: '/ositos-tap.png' },
              { name: "Joe's on Weed St.", category: 'Bar Partner',     website: 'https://www.joesbar.com/',            logo: '/joes-on-weed.webp' },
              { name: '8 Hospitality',  category: 'Hospitality Group',  website: 'https://8hospitality.com/',           logo: '/8-hospitality.png' },
              { name: 'Navy Pier Event Center', category: 'Venue Partner', website: 'https://navypier.org/event-center/', logo: '/navy-pier-event-center.svg', wide: true },
            ].map((partner: { name: string; category: string; website: string; logo: string; wide?: boolean }, i) => (
              <a
                key={i}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-jc-gray-mid hover:border-jc-red transition-colors p-5 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`${partner.wide ? 'w-full h-16 px-3' : 'w-16 h-16'} bg-white rounded-sm mb-3 flex items-center justify-center group-hover:bg-jc-red/10 transition-colors flex-shrink-0 overflow-hidden`}>
                  <Image src={partner.logo} alt={partner.name} width={partner.wide ? 160 : 56} height={56} className="object-contain max-h-full w-auto" />
                </div>
                <div className="text-jc-black font-black text-sm leading-tight mb-1 group-hover:text-jc-red transition-colors">
                  {partner.name}
                </div>
                <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                  {partner.category}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Silent Auction */}
      <section id="silent-auction" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026–27</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Silent <span className="text-jc-red">Auction</span>
              </h2>
            </div>
            <Link href="/support#inkind" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Donate an Auction Item →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: '312 Cruises', category: 'Cruise Partner', website: 'https://312cruises.weebly.com/', logo: '/312-cruises.png' },
              { name: 'Four Corners Tavern Group', category: 'Restaurant Partner', website: 'https://www.4cbars.com/', logo: '/four-corners.png' },
              { name: 'Alexandra Marks Jewelry', category: 'Jewelry Partner', website: 'https://alexandramarksjewelry.com', logo: '/alexandra-marks-jewelry.png', wide: true },
              { name: 'Arthur Murray Dance Studio Lakeview', category: 'Dance Partner', website: 'https://www.arthurmurray.com/studios/lakeview/', logo: '/arthur-murray-dance-studio-lakeview.svg', wide: true },
              { name: 'Atomic Hospitality', category: 'Hospitality Partner', website: 'https://www.atomichg.com', logo: '/atomic-hospitality.png', wide: true },
              { name: 'Barcocina', category: 'Restaurant Partner', website: 'https://www.barcocinachicago.com/', logo: '/barcocina.jpg' },
              { name: 'BarkBox', category: 'Retail Partner', website: 'https://www.barkbox.com', logo: '/barkbox.svg', wide: true },
              { name: 'Basecamp Fitness', category: 'Fitness Partner', website: 'https://www.basecampfitness.com/studio/chicago', logo: '/basecamp-fitness.svg' },
              { name: 'Batsu', category: 'Entertainment Partner', website: 'https://batsulive.com/chicago/', logo: '/batsu.png' },
              { name: 'Big Onion Hospitality', category: 'Hospitality Partner', website: 'https://bigonioninc.com', logo: '/big-onion-hospitality.svg' },
              { name: 'Birch Road', category: 'Venue Partner', website: 'https://www.birchroad.com', logo: '/birch-road.png' },
              { name: 'Blowout Junkie', category: 'Salon Partner', website: 'https://www.blowoutjunkie.com', logo: '/blowout-junkie.png', wide: true },
              { name: 'BLVDier', category: 'Apparel Partner', website: 'https://www.blvdier.com', logo: '/blvdier.png' },
              { name: 'Bradford Photography Studios', category: 'Photography Partner' },
              { name: 'C3 Presents Lollapalooza', category: 'Music Partner', website: 'https://www.lollapalooza.com/', logo: '/c3-presents-lollapalooza.png' },
              { name: 'Cards Against Humanity', category: 'Game Partner', website: 'https://www.cardsagainsthumanity.com/', logo: '/cards-against-humanity.svg' },
              { name: "Carol's Pub", category: 'Bar Partner', website: 'https://www.carolspub.com/', logo: '/carols-pub.png' },
              { name: 'Chicago 20Something', category: 'Events Partner', website: 'https://chicago20something.weebly.com/', logo: '/chicago-20something.png' },
              { name: 'Chicago Architecture Center', category: 'Attraction Partner', website: 'https://www.architecture.org/', logo: '/chicago-architecture-center.png' },
              { name: 'Chicago Athletic Clubs', category: 'Fitness Partner', website: 'https://www.chicagoathleticclubs.com/', logo: '/chicago-athletic-clubs.png', wide: true },
              { name: 'Chicago Bears', category: 'Team Partner', website: 'https://www.chicagobears.com/', logo: '/chicago-bears.svg' },
              { name: 'Chicago Food & City Tours', category: 'Tour Partner', website: 'https://chicagofoodtours.com/', logo: '/chicago-food-and-city-tours.svg' },
              { name: 'Chicago Stars FC', category: 'Team Partner', website: 'https://www.chicagostars.com/', logo: '/chicago-stars-fc.png' },
              { name: 'Chicago Symphony Orchestra', category: 'Music Partner', website: 'https://cso.org/', logo: '/chicago-symphony-orchestra.png', wide: true },
              { name: 'Chicago Union', category: 'Team Partner', website: 'https://www.watchufa.com/union', logo: '/chicago-union.png' },
              { name: 'Chicago White Sox', category: 'Team Partner', website: 'https://www.mlb.com/whitesox', logo: '/chicago-white-sox.svg' },
              { name: 'Club Pilates', category: 'Fitness Partner', website: 'https://www.clubpilates.com/regional/chicago', logo: '/club-pilates.svg', wide: true },
              { name: 'ComEd', category: 'Corporate Partner', website: 'https://www.comed.com/community', logo: '/comed.svg', wide: true },
              { name: 'Common Language Studio', category: 'Fitness Partner', website: 'https://www.commonlanguagestudio.com', logo: '/common-language-studio.png' },
              { name: 'Criquet Shirts', category: 'Apparel Partner', website: 'https://criquetshirts.com/', logo: '/criquet-shirts.png' },
              { name: 'The Cubby Bear', category: 'Bar Partner', website: 'https://www.cubbybear.com/', logo: '/cubby-bear.png' },
              { name: 'Defloured Bakery', category: 'Bakery Partner', website: 'https://www.deflouredbakery.com', logo: '/defloured-bakery.png', wide: true },
              { name: 'The Den Theatre', category: 'Comedy Partner', website: 'https://thedentheatre.com', logo: '/the-den-theatre.png', wide: true },
              { name: 'DePaul Athletics', category: 'Team Partner', website: 'https://depaulbluedemons.com', logo: '/depaul-athletics.svg' },
              { name: 'Dyson', category: 'Retail Partner', website: 'https://www.dyson.com', logo: '/dyson.svg', wide: true },
              { name: 'Elite Trips', category: 'Travel Partner' },
              { name: 'First Ascent', category: 'Climbing Partner', website: 'https://faclimbing.com', logo: '/first-ascent.png', wide: true },
              { name: 'First Lady Cruises', category: 'Cruise Partner', website: 'https://cruisechicago.com/', logo: '/first-lady-cruises.png' },
              { name: 'Fitness Formula Clubs South Loop', category: 'Fitness Partner', website: 'https://ffc.com/club-locations/south-loop/', logo: '/fitness-formula-clubs-south-loop.png' },
              { name: 'Five Iron Golf', category: 'Golf Partner', website: 'https://fiveirongolf.com/locations/chicago-river-north', logo: '/five-iron-golf.png' },
              { name: 'Flowers for Dreams', category: 'Floral Partner', website: 'https://flowersfordreams.com', logo: '/flowers-for-dreams.png', wide: true },
              { name: "Formento's", category: 'Restaurant Partner', website: 'https://www.formentos.com', logo: '/formentos.png' },
              { name: 'Foursided', category: 'Gift Partner', website: 'https://foursided.com', logo: '/foursided.png', wide: true },
              { name: 'Gibsons Restaurant Group', category: 'Restaurant Partner', website: 'https://gibsonssteakhouse.com', logo: '/gibsons-restaurant-group.svg' },
              { name: 'Grand Cru', category: 'Wine Partner', website: 'https://www.grandcruchicago.com', logo: '/grand-cru.png' },
              { name: 'Hubbard Radio', category: 'Media Partner', website: 'https://hubbardchicago.com', logo: '/hubbard-radio.png', wide: true },
              { name: 'Joffrey Ballet', category: 'Dance Partner', website: 'https://joffrey.org', logo: '/joffrey-ballet.svg', wide: true },
              { name: 'Kathleen Weinstein Photography', category: 'Photography Partner', website: 'https://www.kathleenweinsteinphotography.com', logo: '/kathleen-weinstein-photography.png', wide: true },
              { name: 'Knockaround Sunglasses', category: 'Apparel Partner', website: 'https://knockaround.com', logo: '/knockaround-sunglasses-mark.png' },
              { name: 'Koval Distillery', category: 'Spirits Partner', website: 'https://www.koval-distillery.com', logo: '/koval-distillery.svg', wide: true },
              { name: "Lady Gregory's", category: 'Restaurant Partner', website: 'https://www.ladygregorys.com', logo: '/lady-gregorys.png', wide: true },
              { name: 'Lakeshore Physical Therapy', category: 'Wellness Partner', website: 'https://www.lakeshore-pt.com', logo: '/lakeshore-physical-therapy.png' },
              { name: 'Laugh Factory', category: 'Comedy Partner', website: 'https://www.laughfactory.com/chicago', logo: '/laugh-factory.png' },
              { name: 'Legendary Spa', category: 'Spa Partner', website: 'https://legendaryspa.com', logo: '/legendary-spa.png' },
              { name: 'Lettuce Entertain You', category: 'Restaurant Partner', website: 'https://www.lettuce.com/', logo: '/lettuce-entertain-you.png' },
              { name: 'Lincoln Hall & Schubas', category: 'Music Venue Partner', website: 'https://www.lh-st.com/', logo: '/lincoln-hall-schubas.jpg' },
              { name: 'Lloyd Moss, Life Coach', category: 'Coaching Partner' },
              { name: 'LondonHouse Chicago', category: 'Hotel Partner', website: 'https://londonhousechicago.com', logo: '/londonhouse-chicago.png', wide: true },
              { name: "Lou Malnati's", category: 'Restaurant Partner', website: 'https://www.loumalnatis.com/', logo: '/lou-malnatis.svg', wide: true },
              { name: 'Meson Sabika', category: 'Restaurant Partner', website: 'https://www.mesonsabika.com', logo: '/meson-sabika.png', wide: true },
              { name: 'Movement Lincoln Park', category: 'Fitness Partner', website: 'https://movementgyms.com/lincoln-park/', logo: '/movement-lincoln-park.svg' },
              { name: 'Museum of Contemporary Art Chicago', category: 'Museum Partner', website: 'https://mcachicago.org', logo: '/museum-of-contemporary-art-chicago.svg', wide: true },
              { name: 'Museum of Ice Cream', category: 'Attraction Partner', website: 'https://www.museumoficecream.com/', logo: '/museum-of-ice-cream.png' },
              { name: 'The Neo-Futurists', category: 'Theatre Partner', website: 'https://neofuturists.org', logo: '/the-neo-futurists.svg' },
              { name: 'Patagonia', category: 'Apparel Partner', website: 'https://www.patagonia.com/stores/il/chicago/48-e-walton-street/store_magmile.html', logo: '/patagonia.svg', wide: true },
              { name: 'PGA Tour Superstore', category: 'Golf Partner', website: 'https://www.pgatoursuperstore.com/', logo: '/pga-tour-superstore.svg' },
              { name: 'Picnic Wine and Provisions', category: 'Wine Partner', website: 'https://www.picnicwineandprovisions.com/', logo: '/picnic-wine-and-provisions.png' },
              { name: 'Pizza Lobo', category: 'Restaurant Partner', website: 'https://www.pizzalobo.com', logo: '/pizza-lobo.png' },
              { name: 'Pure Barre', category: 'Fitness Partner', website: 'https://www.purebarre.com/', logo: '/pure-barre.png' },
              { name: 'Raygun', category: 'Retail Partner', website: 'https://www.raygunsite.com/', logo: '/raygun.png' },
              { name: 'The River Kitchen and Bar', category: 'Restaurant Partner', website: 'https://www.theriverchicago.com', logo: '/the-river-kitchen-and-bar.png', wide: true },
              { name: 'Royal Palms Shuffleboard Club', category: 'Attraction Partner', website: 'https://www.royalpalmschicago.com', logo: '/royal-palms-shuffleboard-club.png', wide: true },
              { name: 'Sailing Chi', category: 'Sailing Partner', website: 'https://www.sailingchi.com', logo: '/sailing-chi.png' },
              { name: 'Scott Harris Hospitality', category: 'Restaurant Partner', website: 'https://shhospitality.co', logo: '/scott-harris-hospitality.svg', wide: true },
              { name: 'Scratch Goods', category: 'Retail Partner', website: 'https://www.scratchgoods.com', logo: '/scratch-goods.png', wide: true },
              { name: 'Sepia', category: 'Restaurant Partner', website: 'https://www.sepiachicago.com', logo: '/sepia.png', wide: true },
              { name: 'Shure', category: 'Audio Partner', website: 'https://www.shure.com/en-US', logo: '/shure.svg', wide: true },
              { name: 'Skydeck Chicago', category: 'Attraction Partner', website: 'https://theskydeck.com/', logo: '/skydeck-chicago.png' },
              { name: 'SMART Golf & Fitness', category: 'Golf Partner', website: 'https://smartgolffitness.com', logo: '/smart-golf-and-fitness.png', wide: true },
              { name: 'Starbucks Reserve Roastery', category: 'Coffee Partner', website: 'https://www.starbucksreserve.com/locations/chicago-roastery', logo: '/starbucks-reserve-roastery.svg' },
              { name: 'Steppenwolf Theatre Company', category: 'Theatre Partner', website: 'https://www.steppenwolf.org/', logo: '/steppenwolf.svg' },
              { name: 'StretchLab', category: 'Wellness Partner', website: 'https://www.stretchlab.com/location/westloop', logo: '/stretchlab.png', wide: true },
              { name: 'Summer House', category: 'Restaurant Partner', website: 'https://www.summerhouserestaurants.com/lincoln-park/', logo: '/summer-house.png' },
              { name: 'Tailgreeter', category: 'Events Partner', website: 'https://tailgreeter.com/', logo: '/tailgreeter.png' },
              { name: 'Three Cities Social', category: 'Hospitality Partner', website: 'https://threecitiessocial.com', logo: '/three-cities-social.png', wide: true },
              { name: 'Thrive Market', category: 'Retail Partner', website: 'https://thrivemarket.com', logo: '/thrive-market.svg', wide: true },
              { name: 'Tieks', category: 'Apparel Partner', website: 'https://tieks.com', logo: '/tieks.svg', wide: true },
              { name: 'Train Moment River North', category: 'Fitness Partner', website: 'https://www.trainmoment.com/river-north', logo: '/train-moment-river-north.jpg' },
              { name: 'Tutore Italian Cooking School', category: 'Culinary Partner', website: 'https://www.tutorecookingschool.com', logo: '/tutore-italian-cooking-school.png', wide: true },
              { name: 'United Center', category: 'Venue Partner', website: 'https://www.unitedcenter.com/', logo: '/united-center.png', wide: true },
              { name: 'Vanille Patisserie', category: 'Bakery Partner', website: 'https://vanillepatisserie.com', logo: '/vanille-patisserie.png' },
              { name: 'Vin Chicago', category: 'Wine Partner', website: 'https://vinchicago.com', logo: '/vin-chicago.png' },
              { name: "Will's Northwoods Inn", category: 'Bar Partner', website: 'https://willsnorthwoodsinn.com/', logo: '/wills-northwoods-inn.png' },
              { name: 'Willow Room', category: 'Restaurant Partner', website: 'https://willowroomchicago.com', logo: '/willow-room.png', wide: true },
              { name: 'Windy City Rollers', category: 'Sports Partner', website: 'https://www.windycityrollers.com', logo: '/windy-city-rollers.png' },
              { name: 'Wines for Humanity', category: 'Wine Partner', website: 'https://www.winesforhumanity.com/', logo: '/wines-for-humanity.png' },
              { name: 'Wolfbait & B-Girls', category: 'Retail Partner', website: 'https://wolfbaitchicago.com', logo: '/wolfbait-and-b-girls.png' },
              { name: 'Yip Fitness', category: 'Fitness Partner', website: 'https://www.yipfitness.com', logo: '/yip-fitness.png', wide: true },
              { name: "Zanie's Rosemont", category: 'Comedy Partner', website: 'https://rosemont.zanies.com/', logo: '/zanies-rosemont.jpg' },
            ].map((partner: { name: string; category: string; website?: string; logo?: string; wide?: boolean }, i) => {
              const cardClasses = `border border-jc-gray-mid transition-colors p-5 flex flex-col items-center text-center group ${partner.website ? 'hover:border-jc-red cursor-pointer' : ''}`
              const inner = (
                <>
                  <div className={`${partner.wide ? 'w-full h-16 px-3' : 'w-16 h-16'} ${partner.logo ? 'bg-white' : 'bg-jc-gray'} rounded-sm mb-3 flex items-center justify-center transition-colors flex-shrink-0 overflow-hidden ${partner.website ? 'group-hover:bg-jc-red/10' : ''}`}>
                    {partner.logo ? (
                      <Image src={partner.logo} alt={partner.name} width={partner.wide ? 160 : 56} height={56} className="object-contain max-h-full w-auto" />
                    ) : (
                      <span className="text-jc-red font-black text-xl tracking-tight" aria-hidden="true">
                        {initials(partner.name)}
                      </span>
                    )}
                  </div>
                  <div className={`text-jc-black font-black text-sm leading-tight mb-1 transition-colors ${partner.website ? 'group-hover:text-jc-red' : ''}`}>
                    {partner.name}
                  </div>
                  <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                    {partner.category}
                  </div>
                </>
              )
              return partner.website ? (
                <a key={i} href={partner.website} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={cardClasses}>
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section id="wellness" className="bg-white py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
                <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">2026</span>
              </div>
              <h2 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
                Wellness <span className="text-jc-red">for a Cause</span>
              </h2>
            </div>
            <Link href="/contact" className="flex-shrink-0 text-xs font-bold uppercase tracking-widest text-jc-gray-dark hover:text-jc-red transition-colors border-b border-jc-gray-mid hover:border-jc-red pb-1">
              Become a Wellness Partner →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'VinHausa',  category: 'Yoga & Dance', website: 'https://www.vinhausa.us',   logo: '/vinhausa-logo.png' },
              { name: 'Equinox',   category: 'Cycling',      website: 'https://www.equinox.com',   logo: '/equinox-logo.png' },
              { name: 'Barre3',    category: 'Barre',        website: 'https://barre3.com',         logo: '/barre3-logo.png' },
            ].map((partner, i) => (
              <a
                key={i}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-jc-gray-mid hover:border-jc-red transition-colors p-5 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-jc-gray rounded-sm mb-3 flex items-center justify-center group-hover:bg-jc-red/10 transition-colors flex-shrink-0 overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} width={56} height={56} className="object-contain" />
                </div>
                <div className="text-jc-black font-black text-sm leading-tight mb-1 group-hover:text-jc-red transition-colors">
                  {partner.name}
                </div>
                <div className="text-jc-red text-xs font-semibold uppercase tracking-wide">
                  {partner.category}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-jc-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-black text-3xl sm:text-4xl mb-4 tracking-tight">
            Want to Be Featured Here?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join our growing community of donors and partners who are directly
            changing the lives of youth with HIV and AIDS in Chicago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support#corporate" className="inline-flex items-center justify-center bg-white text-jc-black font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-jc-gray-mid transition-colors">
              Partner With Us
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-black text-sm tracking-widest uppercase px-8 py-4 hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
