'use client'

import { useState } from 'react'
import Image from 'next/image'

type BoardMember = {
  name: string
  title: string
  photo?: string
  jobTitle?: string
  company?: string
  memberSince?: string
  bio?: string
  linkedin?: string
}

const boardMembers: BoardMember[] = [
  {
    name: 'Eve Voci',
    title: 'President',
    photo: '/eve.JPEG',
    jobTitle: 'Corporate Retail Buyer, Apparel & Accessories and Crafting',
    company: 'Barnes & Noble / Paper Source',
    bio: 'Eve Voci is a corporate retail Buyer in the Apparel & Accessories and Crafting divisions at Barnes & Noble and Paper Source stores. Originally from Grosse Pointe Park, Michigan, Eve is also an alum of the Eli Broad Business School at Michigan State. Passionate about community impact and industry innovation, Eve is actively involved in organizations supporting healthcare philanthropy and the fashion industry. She enjoys her free time dog sitting, needlepointing, and traveling!',
    linkedin: 'https://www.linkedin.com/in/evevoci/',
  },
  {
    name: 'Gabe Spach',
    title: 'Vice President',
    photo: '/gabe.JPEG',
    jobTitle: 'Director of Partnerships',
    company: 'Sawmill Sports Hub',
    memberSince: 'March 2025',
    bio: 'Gabe Spach is a Seattle native currently working as the Director of Partnerships at Sawmill Sports Hub. Gabe has an MBA from Seattle University with a focus in Sports & Entertainment. In his free time, he enjoys running, playing golf, going to concerts, and attending baseball games. Gabe has been involved with Junior Council since March 2025 and is excited to be a part of this year\'s board.',
  },
  {
    name: 'Charlie Nash',
    title: 'Treasurer',
    photo: '/charlie.JPEG',
    jobTitle: 'Lead Data Engineer',
    company: 'United Center',
    memberSince: 'December 2024',
    bio: 'Charlie Nash hails from Winnetka, Illinois and joined Junior Council to get more involved in his community and build new friendships. After joining in December 2024, Charlie hit the ground running as the 2025/2026 board\'s Corporate Director and now serves as this year\'s Treasurer. A graduate of DePauw University, Charlie works as the lead data engineer at the United Center. Outside of work, Charlie is an avid sports fan, a regular at his local CrossFit gym, and enjoys spending time with friends, family, and his 5-year-old dog, Bear.',
    linkedin: 'https://www.linkedin.com/in/charles-nash-399b37116/',
  },
  {
    name: 'Hailie Schroll',
    title: 'Snowball Director',
    photo: '/haille-new.jpg',
    jobTitle: 'Event Coordinator',
    company: 'Shore Capital Partners',
    memberSince: '2023',
    bio: 'Hailie Schroll graduated from Indiana University with a B.S. in Tourism, Hospitality and Event Management. She currently works as an Event Coordinator at Shore Capital Partners, where she manages corporate events, meetings, and travel logistics. Hailie joined Junior Council in 2023 and joined the board in 2024 as Hospitality Director. In 2025, she transitioned to the executive board as Snowball Director, where she leads all planning and execution of the Annual Snowball Gala. When she\'s not planning events, Hailie enjoys exploring Chicago, traveling, hosting friends, and spending time with her cats, Parker and Pippa.',
    linkedin: 'https://www.linkedin.com/in/hailie-schroll/',
  },
  {
    name: 'KK Begley',
    title: 'Secretary',
    photo: '/kk.JPEG',
    jobTitle: 'Healthcare Administrator',
    company: 'Rush University Medical Center',
    memberSince: 'February 2026',
    bio: 'Kk Begley holds a Master of Health Administration from the University of Kentucky and works in administration at Rush University Medical Center. She joined Junior Council in February 2026 and is ecstatic to be on the board this year. In her free time, Kk enjoys trying new restaurants and bars around Chicago, playing pickleball, traveling, and attending live sporting events and concerts.',
  },
  {
    name: 'Thomas Ware',
    title: 'Engagement Director',
    photo: '/thomas.JPEG',
    jobTitle: 'Associate Marketing Manager',
    company: 'PepsiCo',
    bio: 'Thomas Ware is an Associate Marketing Manager for Gatorade at PepsiCo. An alum of Dartmouth College and the University of Chicago Booth School of Business, Thomas is originally from Wisconsin. In his spare time he enjoys marathon training, playing and watching baseball, and political comedy.',
    linkedin: 'https://www.linkedin.com/in/thomasholmesware',
  },
  {
    name: 'Danielle Imbrigiotta',
    title: 'Recruitment Director',
    photo: '/danielle.JPEG',
    jobTitle: 'Management Consultant',
    company: 'BDO',
    bio: 'Danielle Imbrigiotta is a Florida native and a double Gator from the University of Florida, where she earned a Master\'s in International Business and a Bachelor of Business Administration. She moved to Chicago to begin her career as a consultant with BDO\'s Management Consulting group, where she has worked for the past three and a half years. Danielle enjoys exploring the city, traveling, reading, and participating in outdoor activities. She is especially grateful that Junior Council has introduced her to so many great friends.',
    linkedin: 'https://www.linkedin.com/in/danielle-imbrigiotta',
  },
  {
    name: 'Caroline Cheung',
    title: 'Education Director',
    photo: '/caroline.JPEG',
    jobTitle: 'Underwriting Operations Specialist',
    company: 'Travelers Insurance',
    memberSince: 'August 2024',
    bio: 'Caroline Cheung is from Northbrook, Illinois and graduated from TCU with a B.A. in Mathematics with a concentration in Actuarial Science and a B.S. in Economics. She currently works as an Underwriting Operations Specialist at Travelers Insurance. Caroline joined Junior Council in August 2024 and is excited to serve as Education Director. Outside of work, Caroline is a big Chicago White Sox fan and enjoys spending time with friends and family, playing with her cat Sunny, and doing arts and crafts!',
    linkedin: 'https://www.linkedin.com/in/carolinemcheung',
  },
  {
    name: 'Erin Bylina',
    title: 'Silent Auction Director',
    photo: '/erin.JPEG',
    jobTitle: 'Special Education Teacher',
    memberSince: 'October 2023',
    bio: 'Erin Bylina graduated from Bradley University with degrees in Special Education and Elementary Education, and completed her graduate degree from UIC in Behavior Intervention and Curriculum Adaptation. She currently teaches kindergarten at a therapeutic practice in Chicago and tutors students of all ages. Erin has been a JC member since October 2023 and has previously served as Snowball Committee Lead and Hospitality Director. In her free time, she enjoys spending time with family and friends and exploring Chicago\'s restaurants and events.',
  },
  {
    name: 'Isabella Del Muro',
    title: 'W4AC / Fundraising Director',
    photo: '/isabella.JPEG',
    jobTitle: 'Clinical Research Coordinator',
    company: 'Rush University Medical Center',
    bio: 'Isabella del Muro is a Chicago native and public health graduate student at DePaul University, as well as a Clinical Research Coordinator at Rush University Medical Center. She graduated from the University of Kansas with a degree in Molecular Cellular Developmental Biology and a minor in Astrobiology. Isabella is also a [solidcore] coach with a passion for community engagement, wellness, and philanthropy. She joined Junior Council to combine her interests in healthcare advocacy and fundraising in support of Lurie Children\'s. In her free time, she enjoys marathon running, fitness, traveling, concerts, motorsports, and exploring Chicago\'s restaurant scene.',
    linkedin: 'https://www.linkedin.com/in/idel-muro/',
  },
  {
    name: 'Marisa Stefani',
    title: 'Corporate Co-Chair',
    photo: '/marissa.JPEG',
    jobTitle: 'Manager, Accounting & Projects',
    company: 'CF Industries',
    bio: 'Marisa Stefani holds a Master\'s in Accounting from the University of Illinois Urbana-Champaign and is a CPA and Manager of Accounting & Projects at CF Industries, the world\'s largest ammonia producer. In her third year as a Junior Council member, Marisa is thrilled to serve on the board as Corporate Co-Chair. A committed fitness enthusiast with over 1,400 barre classes completed, she also ran the 2014 Chicago Marathon and studied abroad in Belgium. In her free time, Marisa enjoys golfing, traveling, trying new restaurants, and spending time with friends and family.',
    linkedin: 'https://www.linkedin.com/in/marisa-stefani-cpa-981b8627',
  },
  {
    name: 'Jessica Linley',
    title: 'Corporate Co-Chair',
    photo: '/jessica.JPEG',
    jobTitle: 'Epidemiological Research Assistant',
    company: 'Rush Alzheimer\'s Disease Center',
    memberSince: 'March 2025',
    bio: 'Jessica Linley graduated from Northern Illinois University in 2023 with a Bachelor of Science in Psychology and Non-Profit Studies. She is currently employed at Rush Alzheimer\'s Disease Center as an Epidemiological Research Assistant. Jessica joined Junior Council in March 2025.',
    linkedin: 'https://www.linkedin.com/in/jessica-linley-604938236',
  },
  {
    name: 'Brooklyn Mychalowych',
    title: 'Creative Director',
    photo: '/brooklyn.JPEG',
    jobTitle: 'Lawyer Support Assistant',
    company: 'Jenner & Block',
    bio: 'Brooklyn Mychalowych is a Michigan native and graduate of Michigan State University, where she earned a degree in English. She currently works as a Lawyer Support Assistant at Jenner & Block. In her free time, Brooklyn enjoys exploring both new and longtime hobbies, including sailing, DJing, mosaics, embroidery, travel, fashion, and other creative pursuits.',
    linkedin: 'https://www.linkedin.com/in/brooklynmych',
  },
  {
    name: 'Catie Hinton',
    title: 'PR Director',
    photo: '/catie.JPEG',
    bio: 'Catie Hinton was born and raised in Seattle, Washington, and moved to Chicago after graduating from Washington State University to begin her career. She spent several months living in Paris while attending EM Normandie Business School\'s Marketing and Digital in Luxury & Lifestyle Program. In her free time she enjoys sailing, golfing, cooking, and traveling. She is excited to continue exploring Chicago and being part of the Junior Council.',
    linkedin: 'https://www.linkedin.com/in/catiehinton/',
  },
  {
    name: 'Emily Splinter',
    title: 'Hospitality Director',
    photo: '/emily.JPEG',
    jobTitle: 'Administrative Assistant',
    company: 'BDO',
    memberSince: '2025',
    bio: 'Emily Splinter is a Chicago native who graduated from the University of Wisconsin–Madison with a degree in Art, a Minor in Environmental Science, and a Minor in Theatre & Drama. She spent several months living in Florence, Italy while attending the Santa Reparata International School of Art. She currently works as an Administrative Assistant at BDO. In her free time, Emily enjoys biking, painting, cooking, and traveling. She joined Junior Council in 2025 and is excited to continue her participation with this year\'s Board of Directors.',
    linkedin: 'https://www.linkedin.com/in/emily-splinter/',
  },
  {
    name: 'Diana Wolf',
    title: 'Transformation Director',
    photo: '/diana.PNG',
    jobTitle: 'Financial Tech Consultant',
    company: 'Cognizant',
    memberSince: 'November 2025',
    bio: 'A University of Dayton graduate with a degree in Finance and a minor in German, Diana is a global adventurer at heart who has explored 25+ countries — her most recent trip taking her to the vibrant streets of Thailand. Of Austrian and Mexican heritage, she speaks English, Spanish, and German fluently. When she\'s not consulting in the financial tech space at Cognizant, you\'ll find her on the Chicago Lakefront Trail training for her first triathlon or buried in GMAT prep.',
    linkedin: 'https://www.linkedin.com/in/wolfdiana/',
  },
]

export default function BoardPage() {
  const [selected, setSelected] = useState<BoardMember | null>(null)

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
              Leadership
            </span>
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Board of Directors
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            Meet the 2026 / 2027 Junior Council Board of Directors — Chicago
            professionals leading the fight for youth with HIV and AIDS.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {boardMembers.map((member, i) => {
              const isClickable = Boolean(member.bio)
              const isSelected = selected?.name === member.name
              return (
                <div
                  key={i}
                  onClick={() => isClickable && setSelected(isSelected ? null : member)}
                  className={`group border transition-colors ${
                    isSelected
                      ? 'border-jc-red'
                      : 'border-jc-gray-mid hover:border-jc-red'
                  } ${isClickable ? 'cursor-pointer' : ''}`}
                >
                  {/* Photo */}
                  <div className={`aspect-square border-b transition-colors overflow-hidden ${
                    isSelected ? 'border-jc-red' : 'border-jc-gray-mid group-hover:border-jc-red'
                  } ${member.photo ? '' : 'bg-jc-gray flex items-center justify-center'}`}>
                    {member.photo ? (
                      <div className="w-full h-full overflow-hidden">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover" style={{objectPosition:'center 15%'}}
                        />
                      </div>
                    ) : (
                      <svg
                        className="w-16 h-16 text-jc-gray-mid"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-5 flex items-start justify-between">
                    <div>
                      <div className="text-jc-red text-xs font-bold tracking-widest uppercase mb-1">
                        {member.title}
                      </div>
                      <h2 className="text-jc-black font-black text-sm sm:text-lg leading-tight">
                        {member.name}
                      </h2>
                    </div>
                    {isClickable && (
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-jc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Modal popup */}
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white w-full max-w-4xl border-t-4 border-jc-red shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Photo */}
                  <div className="bg-white flex items-center justify-center p-8 min-h-[300px]">
                    {selected.photo ? (
                      <div className="relative aspect-[3/4] w-full max-w-[260px]">
                        <Image
                          src={selected.photo}
                          alt={selected.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <svg className="w-20 h-20 text-jc-gray-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase mb-1">
                          {selected.title}
                        </div>
                        <h3 className="text-jc-black font-black text-2xl tracking-tight">
                          {selected.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-jc-gray-dark hover:text-jc-black transition-colors"
                        aria-label="Close profile"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-3 mb-6 pb-6 border-b border-jc-gray-mid">
                      {selected.jobTitle && (
                        <div>
                          <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-widest mb-0.5">Job Title</div>
                          <div className="text-jc-black font-bold text-sm">{selected.jobTitle}</div>
                        </div>
                      )}
                      {selected.company && (
                        <div>
                          <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-widest mb-0.5">Company</div>
                          <div className="text-jc-black font-bold text-sm">{selected.company}</div>
                        </div>
                      )}
                      {selected.memberSince && (
                        <div>
                          <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-widest mb-0.5">Member Since</div>
                          <div className="text-jc-black font-bold text-sm">{selected.memberSince}</div>
                        </div>
                      )}
                      {selected.linkedin && (
                        <div>
                          <div className="text-jc-gray-dark text-xs font-bold uppercase tracking-widest mb-1">LinkedIn</div>
                          <a
                            href={selected.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-jc-black hover:text-jc-red font-bold text-xs uppercase tracking-widest border-b-2 border-jc-red pb-0.5 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            View Profile
                          </a>
                        </div>
                      )}
                    </div>

                    {selected.bio && (
                      <p className="text-jc-gray-dark text-sm leading-relaxed">{selected.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
