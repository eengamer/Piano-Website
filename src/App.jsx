import { useState, useEffect, useRef } from 'react'
import './App.css'
import img2 from './assets/20b48e7f-9b09-4956-ac8c-d47865580434.JPG'
import img3 from './assets/DSC02666.JPEG'
import imgDSC02310 from './assets/DSC02310.JPEG'
import imgDSC02765 from './assets/DSC02765.JPEG'
import imgIMG9610 from './assets/IMG_9610.jpg'
import imgP1 from './assets/1000137652 3.JPG'
import imgP2 from './assets/1000137656 3.JPG'
import imgP3 from './assets/1000137658 3.JPG'
const VIDEOS = [
  { id: 'WzodCT9Qw4I', title: 'Marcel Marki – Live @ SAMIGO' },
  { id: 'fbtFVJNG1RQ', title: 'Marcel Marki – Piano Performance' },
]
import bgPiano from './assets/blackwhitepiano.jpg'
import amantelogo from './assets/amante Bern.png'
import imgKKL from './assets/KKLopenpiano.jpg'
import imgBridge from './assets/BRIDGEopenpianonights.jpg'
import imgSwiss from './assets/Swissarbeitgeber.JPG'
import imgSamigo from './assets/SAMIGO SUNSET.webp'
import imgKKLLogo from './assets/KKL logo.png'
import imgSwissLogo from './assets/Swiss arbeit geber awardshow logo.webp'
import imgBernCityPiano from './assets/BernCityPiano2.jpg'
import imgLoebLogo from './assets/loeb logo.png'
import imgWedding from './assets/wedding.webp'
import imgBirthday from './assets/birthday.avif'

const FLOATING_NOTES = ['♩','♪','♫','♬','♩','♪','♫','♬']
const SITE_OWNER = 'Marcel Marki'
const CONTACT_EMAIL = 'event@marcel-marki.com'
const SITE_DOMAIN = 'marcel-marki.com'

const PAGE_META = {
  home: {
    title: 'Marcel Marki | Event Pianist',
    description: 'Personal and professional website of Marcel Marki, showcasing piano performances, arrangements, recordings, videos, photographs, and booking inquiries.',
  },
  terms: {
    title: 'Terms & Conditions | Marcel Marki',
    description: 'Terms and conditions for marcel-marki.com, including intellectual property rights, permitted use, scraping and AI training restrictions, liability, and Swiss governing law.',
  },
  privacy: {
    title: 'Privacy Policy | Marcel Marki',
    description: 'Privacy policy for marcel-marki.com, explaining contact inquiries, technical data, cookies, third-party services, user rights, retention, and security.',
  },
  impressum: {
    title: 'Impressum | Marcel Marki',
    description: 'Legal notice for marcel-marki.com with website owner, contact information, content responsibility, copyright, and external links disclaimer.',
  },
}

const LEGAL_LINKS = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/impressum', label: 'Impressum' },
]

const LEGAL_PAGES = {
  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    updated: 'Last updated: 2026',
    intro: `These Terms & Conditions govern the use of ${SITE_DOMAIN}, the personal and professional website of ${SITE_OWNER}. By accessing this website, you agree to use it only in accordance with these Terms.`,
    sections: [
      {
        title: 'Website Purpose',
        body: [
          'This website showcases piano performances, musical arrangements, recordings, videos, photographs, and related professional information, and allows visitors to contact Marcel Marki for bookings and inquiries.',
        ],
      },
      {
        title: 'Intellectual Property',
        body: [
          `All website content is the exclusive intellectual property of ${SITE_OWNER}, unless expressly stated otherwise.`,
          'Protected content includes, but is not limited to, musical arrangements, performances, recordings, videos, photographs, images, graphics, logos, text, designs, source code, and downloadable materials.',
          `No content may be copied, reproduced, redistributed, modified, republished, sold, licensed, publicly performed, commercially exploited, or otherwise used without the prior written permission of ${SITE_OWNER}.`,
        ],
      },
      {
        title: 'Automated Collection And AI Use',
        body: [
          `Automated scraping, downloading, AI training, machine learning dataset creation, indexing for generative AI systems, or mass collection of website content is strictly prohibited without explicit written consent from ${SITE_OWNER}.`,
        ],
      },
      {
        title: 'Permitted Use',
        body: [
          'Users may access this website for personal and non-commercial purposes only. Any use beyond ordinary website viewing requires prior written permission.',
        ],
      },
      {
        title: 'Disclaimer Of Warranties',
        body: [
          'The website is provided on an as-is and as-available basis. While reasonable care is taken to keep information accurate and available, no warranty is given that the website will be uninterrupted, error-free, secure, or free from harmful components.',
        ],
      },
      {
        title: 'Limitation Of Liability',
        body: [
          `${SITE_OWNER} shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from access to, use of, or inability to use this website, to the fullest extent permitted by applicable law.`,
        ],
      },
      {
        title: 'External Links',
        body: [
          'This website may contain links to external websites or third-party services. Marcel Marki has no control over and accepts no responsibility for the content, availability, or practices of external websites.',
        ],
      },
      {
        title: 'Changes To These Terms',
        body: [
          `${SITE_OWNER} reserves the right to modify these Terms at any time. Updates become effective when published on this page.`,
        ],
      },
      {
        title: 'Governing Law',
        body: [
          'These Terms shall be governed by and interpreted in accordance with the laws of Switzerland.',
        ],
      },
    ],
  },
  privacy: {
    eyebrow: 'Data Protection',
    title: 'Privacy Policy',
    updated: 'Last updated: 2026',
    intro: `This Privacy Policy explains how personal data may be collected and processed when you visit ${SITE_DOMAIN} or contact ${SITE_OWNER}.`,
    sections: [
      {
        title: 'Applicable Law',
        body: [
          'This website is operated in accordance with Swiss data protection law. The General Data Protection Regulation (GDPR) may also apply where visitors are located in the European Union or European Economic Area.',
        ],
      },
      {
        title: 'Data Collected Through Contact And Inquiries',
        body: [
          'If you contact Marcel Marki through a contact form, booking inquiry, email link, or similar communication, the information you provide may be collected and processed. This may include your name, email address, phone number, event type, event date, location, budget range, message content, and any other details you choose to share.',
          'This information is used to respond to your inquiry, discuss bookings or collaborations, provide requested information, and maintain related correspondence.',
        ],
      },
      {
        title: 'Technical Information',
        body: [
          'When you visit the website, technical information may be processed automatically by hosting providers, security systems, or standard server logs. This may include IP addresses, browser type, device information, operating system, referring pages, pages visited, time of access, and access logs.',
        ],
      },
      {
        title: 'Cookies',
        body: [
          'This website may use cookies or similar technologies that are necessary for basic functionality, security, performance, or user experience. If optional analytics, embedded media, or marketing services are added, they may set their own cookies according to their respective policies.',
        ],
      },
      {
        title: 'Third-Party Services',
        body: [
          'Embedded third-party services such as YouTube, Google Maps, Spotify, Instagram, and analytics providers may process personal data according to their own privacy policies when such services are displayed, loaded, or interacted with.',
          'Visitors should review the privacy policies of these providers for details about their data processing practices.',
        ],
      },
      {
        title: 'No Sale Of Personal Data',
        body: [
          'Personal data is never sold. Data may only be shared where necessary to operate the website, respond to inquiries, comply with legal obligations, protect legitimate interests, or use trusted service providers.',
        ],
      },
      {
        title: 'Your Rights',
        body: [
          'Subject to applicable law, you may have the right to access your personal data, request correction of inaccurate data, request deletion, restrict or object to processing, and withdraw consent where processing is based on consent.',
          `To exercise these rights, contact ${SITE_OWNER} at ${CONTACT_EMAIL}.`,
        ],
      },
      {
        title: 'Data Retention',
        body: [
          'Personal data is retained only for as long as necessary for the purpose for which it was collected, including responding to inquiries, managing bookings or professional correspondence, meeting legal obligations, resolving disputes, and maintaining appropriate records.',
        ],
      },
      {
        title: 'Security',
        body: [
          'Reasonable technical and organizational measures are used to protect personal data against unauthorized access, loss, misuse, or disclosure. No method of transmission or storage is completely secure, and absolute security cannot be guaranteed.',
        ],
      },
      {
        title: 'Contact',
        body: [
          `For privacy-related questions or requests, contact ${SITE_OWNER} at ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  impressum: {
    eyebrow: 'Legal Notice',
    title: 'Impressum',
    updated: 'Legal notice for marcel-marki.com',
    intro: `This Impressum provides legal information for ${SITE_DOMAIN}.`,
    sections: [
      {
        title: 'Website Owner',
        body: [
          `${SITE_OWNER}`,
          `Domain: ${SITE_DOMAIN}`,
          `Contact email: ${CONTACT_EMAIL}`,
        ],
      },
      {
        title: 'Responsibility For Content',
        body: [
          `${SITE_OWNER} is responsible for the content of this website.`,
        ],
      },
      {
        title: 'Copyright',
        body: [
          `All materials on this website, including musical works, arrangements, performances, recordings, videos, photographs, written material, graphics, logos, designs, source code, and downloadable materials, are protected by copyright and other intellectual property rights. They may not be copied, reproduced, distributed, publicly performed, used for AI training, or otherwise exploited without the prior written consent of ${SITE_OWNER}.`,
        ],
      },
      {
        title: 'External Links',
        body: [
          'This website may link to external websites. Marcel Marki is not responsible for the content, accuracy, availability, or privacy practices of external websites.',
        ],
      },
    ],
  },
}

const getPathKey = (pathname) => {
  const normalized = pathname.replace(/\/Piano-Website\/?/, '/').replace(/\/$/, '') || '/'
  if (normalized === '/terms') return 'terms'
  if (normalized === '/privacy') return 'privacy'
  if (normalized === '/impressum') return 'impressum'
  return 'home'
}

function setPageMeta(pageKey) {
  const meta = PAGE_META[pageKey] ?? PAGE_META.home
  document.title = meta.title
  let description = document.querySelector('meta[name="description"]')
  if (!description) {
    description = document.createElement('meta')
    description.setAttribute('name', 'description')
    document.head.appendChild(description)
  }
  description.setAttribute('content', meta.description)
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <p className="footer-name">{SITE_OWNER}</p>
      <nav className="footer-links" aria-label="Legal">
        {LEGAL_LINKS.map((link) => (
          <a
            key={link.path}
            href={link.path}
            onClick={(e) => {
              e.preventDefault()
              navigate(link.path)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="footer-copyright">
        © 2026 Marcel Marki. All rights reserved. The content of this website, including musical works, arrangements, performances, recordings, videos, photographs, written material, graphics, and designs, may not be copied, reproduced, distributed, publicly performed, used for AI training, or otherwise exploited without the prior written consent of Marcel Marki.
      </p>
    </footer>
  )
}

function LegalPage({ page, navigate }) {
  return (
    <main className="legal-page">
      <div className="legal-bg" aria-hidden="true" />
      <section className="legal-hero">
        <p className="legal-eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <div className="section-underline centered" />
        <p className="legal-updated">{page.updated}</p>
        <p className="legal-intro">{page.intro}</p>
      </section>

      <section className="legal-content" aria-label={page.title}>
        {page.sections.map((section) => (
          <article className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph.includes(CONTACT_EMAIL) ? (
                  paragraph.split(CONTACT_EMAIL).map((part, partIdx, parts) => (
                    <span key={partIdx}>
                      {part}
                      {partIdx < parts.length - 1 && (
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                      )}
                    </span>
                  ))
                ) : paragraph}
              </p>
            ))}
          </article>
        ))}
      </section>

      <div className="legal-actions">
        <a
          href="/"
          className="legal-home-link"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}

/* ─── Consultation Modal ─── */
function ConsultationModal({ onClose, t }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '',
    guests: '', budget: '', date: '', location: '', description: ''
  })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `${t('modalName')}: ${form.name}`,
      `${t('modalEmail')}: ${form.email}`,
      form.phone    ? `${t('modalPhone')}: ${form.phone}`       : null,
      `${t('modalEventType')}: ${form.eventType}`,
      `${t('modalGuests')}: ${form.guests}`,
      `${t('modalBudget')}: ${form.budget}`,
      form.date     ? `${t('modalDate')}: ${form.date}`         : null,
      form.location ? `${t('modalLocation')}: ${form.location}` : null,
      `\n${t('modalDescription')}:\n${form.description}`,
    ].filter(Boolean).join('\n')

    const subject = encodeURIComponent(`${t('modalEmailSubject')} – ${form.name}`)
    const body    = encodeURIComponent(lines)
    window.open(`mailto:event@marcel-marki.com?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {sent ? (
          <div className="modal-success">
            <span className="modal-success-note">♪</span>
            <h3>{t('modalSuccessTitle')}</h3>
            <p>{t('modalSuccessText')}</p>
            <button className="modal-submit" onClick={onClose}>{t('modalClose')}</button>
          </div>
        ) : (
          <>
            <h2 className="modal-title">{t('schedule')}</h2>
            <p className="modal-subtitle">{t('modalSubtitle')}</p>
            <form className="modal-form" onSubmit={handleSubmit}>

              <div className="modal-row">
                <div className="modal-field">
                  <label>{t('modalName')} *</label>
                  <input required value={form.name} onChange={set('name')} placeholder={t('modalNamePh')} />
                </div>
                <div className="modal-field">
                  <label>{t('modalEmail')} *</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                </div>
              </div>

              <div className="modal-row">
                <div className="modal-field">
                  <label>{t('modalPhone')}</label>
                  <input value={form.phone} onChange={set('phone')} placeholder="+41 ..." />
                </div>
                <div className="modal-field">
                  <label>{t('modalEventType')} *</label>
                  <select required value={form.eventType} onChange={set('eventType')}>
                    <option value="">{t('selectOption')}</option>
                    <option value={t('etWedding')}>{t('etWedding')}</option>
                    <option value={t('etPrivate')}>{t('etPrivate')}</option>
                    <option value={t('etCorporate')}>{t('etCorporate')}</option>
                    <option value={t('etConcert')}>{t('etConcert')}</option>
                    <option value={t('etOther')}>{t('etOther')}</option>
                  </select>
                </div>
              </div>

              <div className="modal-row">
                <div className="modal-field">
                  <label>{t('modalGuests')} *</label>
                  <select required value={form.guests} onChange={set('guests')}>
                    <option value="">{t('selectOption')}</option>
                    <option>1–20</option>
                    <option>20–50</option>
                    <option>50–100</option>
                    <option>100–200</option>
                    <option>200+</option>
                  </select>
                </div>
                <div className="modal-field">
                  <label>{t('modalBudget')} *</label>
                  <select required value={form.budget} onChange={set('budget')}>
                    <option value="">{t('selectOption')}</option>
                    <option value="< CHF 500">{'< CHF 500'}</option>
                    <option value="CHF 500–1,000">CHF 500–1,000</option>
                    <option value="CHF 1,000–2,500">CHF 1,000–2,500</option>
                    <option value="CHF 2,500–5,000">CHF 2,500–5,000</option>
                    <option value="CHF 5,000+">CHF 5,000+</option>
                    <option value={t('budgetOpen')}>{t('budgetOpen')}</option>
                  </select>
                </div>
              </div>

              <div className="modal-row">
                <div className="modal-field">
                  <label>{t('modalDate')}</label>
                  <input type="date" value={form.date} onChange={set('date')} />
                </div>
                <div className="modal-field">
                  <label>{t('modalLocation')}</label>
                  <input value={form.location} onChange={set('location')} placeholder={t('modalLocationPh')} />
                </div>
              </div>

              <div className="modal-field full">
                <label>{t('modalDescription')} *</label>
                <textarea
                  required rows={4}
                  value={form.description}
                  onChange={set('description')}
                  placeholder={t('modalDescPh')}
                />
              </div>

              <button type="submit" className="modal-submit">{t('modalSubmit')}</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

/* ─── Main App ─── */
function App() {
  const parallaxRef                          = useRef(null)
  const [visibleSections, setVisibleSections] = useState({})
  const [isLoading, setIsLoading]           = useState(true)
  const [language, setLanguage]             = useState('en')
  const [navScrolled, setNavScrolled]       = useState(false)
  const [showModal, setShowModal]           = useState(false)
  const [pageKey, setPageKey]               = useState(() => getPathKey(window.location.pathname))
  const [perfDropdown, setPerfDropdown]     = useState(false)
  const [showAllUpcoming, setShowAllUpcoming] = useState(false)
  const [showAllPast, setShowAllPast]       = useState(false)
  const [showAllGallery, setShowAllGallery] = useState(false)
  const [lightboxSrc, setLightboxSrc]       = useState(null)
  const isLegalPage = pageKey !== 'home'

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setPageMeta(pageKey)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pageKey])

  useEffect(() => {
    const handlePopState = () => setPageKey(getPathKey(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (showModal || lightboxSrc) document.body.style.overflow = 'hidden'
    else                         document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [showModal, lightboxSrc])

  useEffect(() => {
    let rafId = null
    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY
        if (parallaxRef.current) parallaxRef.current.style.backgroundPositionY = `${y * 0.5}px`
        setNavScrolled(prev => { const next = y > 60; return prev === next ? prev : next })
        const sections = document.querySelectorAll('[data-section]')
        setVisibleSections(prev => {
          let changed = false
          const nv = { ...prev }
          sections.forEach(s => {
            const v = s.getBoundingClientRect().top < window.innerHeight * 0.78
            if (nv[s.dataset.section] !== v) { nv[s.dataset.section] = v; changed = true }
          })
          return changed ? nv : prev
        })
        rafId = null
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => { window.removeEventListener('scroll', handleScroll); if (rafId) cancelAnimationFrame(rafId) }
  }, [])

  const translations = {
    en: {
      /* hero */
      heroSubtitle:      'Event Pianist',
      heroKicker:        'Piano for elevated occasions',
      heroIntro:         'Elegant live piano for private events, concert evenings, and memorable celebrations.',
      cta:               'Discover My Journey',
      /* nav */
      navAbout:          'About',
      navServices:       'Services',
      navPerformances:   'Performances',
      navFeatured:       'Featured',
      navUpcoming:       'Upcoming Events',
      navPrevious:       'Past Events',
      navTestimonials:   'Testimonials',
      navGallery:        'Gallery',
      navContact:        'Contact',
      /* about */
      aboutTitle:        'About Me',
      aboutP1:           'Hello, my name is Marcel Marki, a passionate pianist dedicated to bringing unforgettable musical experiences to every event.',
      aboutP2:           'My journey with the piano began at the age of 13 when I started learning on my own. After five years of self-teaching, I continued my musical education through professional piano lessons, further developing my skills and artistic expression.',
      aboutP3:           'Today, I perform a wide variety of styles, from classical music to modern pop, film music, and contemporary arrangements. In addition to live performances, I create my own arrangements and compositions and share my passion for music through social media content.',
      aboutP4:           'Whether performing at weddings, corporate events, private celebrations, or other special occasions, my goal is always to provide high-quality music tailored to the atmosphere of your event. I take pride in being professional, reliable, and attentive to every detail, ensuring that your special occasion is both memorable and seamless.',
      aboutP5:           'My mission is simple: to create the perfect musical atmosphere and help make your event truly unforgettable.',
      /* services */
      servicesTitle:     'My Expertise',
      svc1Title:         'Diverse Musical Repertoire',
      svc1Desc:          'From classical masterpieces to modern hits, film scores, jazz, pop, and contemporary arrangements — performances tailored to every audience and atmosphere.',
      svc2Title:         'Custom Arrangements & Piano Covers',
      svc2Desc:          'Unique piano arrangements and personalized interpretations of well-known songs, creating memorable musical moments for every occasion.',
      svc3Title:         'Weddings & Special Events',
      svc3Desc:          'Professional live piano entertainment for weddings, corporate events, receptions, private celebrations, and exclusive gatherings.',
      /* featured */
      featuredTitle:     'Featured Performances',
      /* events */
      upcomingTitle:     'Upcoming Events',
      previousTitle:     'Past Events',
      featuredTitle:     'Featured Performances',
      eventVenueAmante:  'Amante, Belp',
      eventOpenTo:       'Open to everyone',
      eventDiningDesc:   'Join us for an intimate dining evening where I will be performing live piano background music throughout the night. A wonderful opportunity to enjoy fine dining accompanied by live music in a warm, welcoming atmosphere.',
      eventSamigoDesc:   'Teaming up with the DJ to bring a spark of live piano into the latin world — a unique fusion of latin rhythms and live piano keys for an unforgettable day and night experience.',
      eventSamigoTickets:'Get Tickets',
      showMore:          'Show More',
      showLess:          'Show Less',
      /* parallax */
      parallaxQuote:     '"Music is the language of the soul"',
      /* testimonials */
      testimonialsTitle: 'Testimonials',
      testimonialKatrin: 'Marcel enchanted and enriched my birthday celebration with his wonderful piano music. He played my favourite pieces, the whole preparation and communication were very straightforward — it was definitely a HUGE highlight, merci Marcel!',
      /* gallery */
      galleryTitle:      'Gallery',
      galleryVideos:     'Videos',
      galleryPhotos:     'Photos',
      /* contact */
      contactTitle:      "Let's Connect",
      contactSubtext:    'Interested in performances, collaborations, or lessons?',
      sendMessage:       'Send a Message',
      schedule:          'Schedule a Consultation',
      /* footer */
      footerLine:        'Crafted with passion',
      /* modal */
      modalSubtitle:     'Fill in the details below and I will be in touch shortly.',
      modalName:         'Full Name',
      modalNamePh:       'Your name',
      modalEmail:        'Email Address',
      modalPhone:        'Phone (optional)',
      modalEventType:    'Event Type',
      modalGuests:       'Expected Guests',
      modalBudget:       'Budget Range',
      modalDate:         'Preferred Date',
      modalLocation:     'Event Location',
      modalLocationPh:   'City or venue',
      modalDescription:  'Description & Expectations',
      modalDescPh:       'Tell me about your event, musical preferences, and what you envision...',
      modalSubmit:       'Send Inquiry',
      modalClose:        'Close',
      modalSuccessTitle: 'Thank you!',
      modalSuccessText:  'Your inquiry has been sent to event@marcel-marki.com. I will be in touch shortly.',
      modalEmailSubject: 'Consultation Request',
      selectOption:      '— Please select —',
      etWedding:         'Wedding',
      etPrivate:         'Private Party',
      etCorporate:       'Corporate Event',
      etConcert:         'Concert Evening',
      etOther:           'Other',
      budgetOpen:        'Open to discuss',
    },
    de: {
      /* hero */
      heroSubtitle:      'Eventpianist',
      heroKicker:        'Klavier für besondere Anlässe',
      heroIntro:         'Elegantes Live-Piano für private Anlässe, Konzertabende und besondere Momente.',
      cta:               'Entdecke meine Reise',
      /* nav */
      navAbout:          'Über mich',
      navServices:       'Leistungen',
      navPerformances:   'Auftritte',
      navFeatured:       'Highlights',
      navUpcoming:       'Kommende Events',
      navPrevious:       'Vergangene Events',
      navTestimonials:   'Stimmen',
      navGallery:        'Galerie',
      navContact:        'Kontakt',
      /* about */
      aboutTitle:        'Über mich',
      aboutP1:           'Hallo, mein Name ist Marcel Marki. Als leidenschaftlicher Pianist widme ich mich dem Ziel, unvergessliche musikalische Erlebnisse bei jedem Anlass zu schaffen.',
      aboutP2:           'Meine Reise am Klavier begann im Alter von 13 Jahren, als ich autodidaktisch zu lernen begann. Nach fünf Jahren Selbststudium setzte ich meine musikalische Ausbildung durch professionellen Klavierunterricht fort und entwickelte meine Fähigkeiten und meinen künstlerischen Ausdruck weiter.',
      aboutP3:           'Heute spiele ich eine breite Vielfalt an Stilen — von klassischer Musik bis hin zu modernem Pop, Filmmusik und zeitgenössischen Arrangements. Neben Live-Auftritten erstelle ich eigene Arrangements und Kompositionen und teile meine Leidenschaft für Musik über Social Media.',
      aboutP4:           'Ob bei Hochzeiten, Firmenevents, privaten Feiern oder anderen besonderen Anlässen — mein Ziel ist es stets, hochwertige Musik zu bieten, die perfekt zur Atmosphäre Ihres Events passt. Mir ist es wichtig, professionell, zuverlässig und aufmerksam zu sein, damit Ihr besonderer Anlass unvergesslich und reibungslos verläuft.',
      aboutP5:           'Meine Mission ist einfach: die perfekte musikalische Atmosphäre zu schaffen und dazu beizutragen, Ihr Event wirklich unvergesslich zu machen.',
      /* services */
      servicesTitle:     'Meine Expertise',
      svc1Title:         'Vielseitiges Musikrepertoire',
      svc1Desc:          'Von klassischen Meisterwerken bis zu modernen Hits, Filmmusik, Jazz, Pop und zeitgenössischen Arrangements — Auftritte, die auf jedes Publikum und jede Atmosphäre zugeschnitten sind.',
      svc2Title:         'Eigene Arrangements & Piano-Cover',
      svc2Desc:          'Einzigartige Klavierarrangements und persönliche Interpretationen bekannter Songs, die unvergessliche musikalische Momente für jeden Anlass schaffen.',
      svc3Title:         'Hochzeiten & besondere Anlässe',
      svc3Desc:          'Professionelle Live-Klavierunterhaltung für Hochzeiten, Firmenevents, Empfänge, private Feiern und exklusive Veranstaltungen.',
      /* featured */
      featuredTitle:     'Ausgewählte Auftritte',
      /* events */
      upcomingTitle:     'Kommende Events',
      previousTitle:     'Vergangene Events',
      featuredTitle:     'Ausgewählte Auftritte',
      eventVenueAmante:  'Amante, Belp',
      eventOpenTo:       'Offen für alle',
      eventDiningDesc:   'Begleiten Sie uns an einem stimmungsvollen Dinerabend, bei dem ich live Hintergrundmusik auf dem Klavier spielen werde. Eine wunderbare Gelegenheit, ein feines Dinner mit Live-Klaviermusik in einer einladenden Atmosphäre zu geniessen.',
      eventSamigoDesc:   'Gemeinsam mit dem DJ bringe ich einen Funken Live-Klavier in die lateinamerikanische Welt — eine einzigartige Fusion aus Latin-Rhythmen und Live-Piano für ein unvergessliches Tag- und Nachterlebnis.',
      eventSamigoTickets:'Tickets kaufen',
      showMore:          'Mehr anzeigen',
      showLess:          'Weniger anzeigen',
      /* parallax */
      parallaxQuote:     '„Musik ist die Sprache der Seele"',
      /* testimonials */
      testimonialsTitle: 'Stimmen',
      testimonialKatrin: 'Marcel hat mit seinen grossartigen Klavierklängen mein Geburtstagsfest verzaubert und bereichert. Er ging auf meine Lieblingsstücke ein, die ganze Vorbereitung und der Austausch waren sehr unkompliziert, es war definitiv ein GROSSSES Highlight, merci Marcel!',
      /* gallery */
      galleryTitle:      'Galerie',
      galleryVideos:     'Videos',
      galleryPhotos:     'Fotos',
      /* contact */
      contactTitle:      'Lass uns in Kontakt treten',
      contactSubtext:    'Interessiert an Auftritten, Zusammenarbeit oder Unterricht?',
      sendMessage:       'Nachricht senden',
      schedule:          'Beratung anfragen',
      /* footer */
      footerLine:        'Mit Leidenschaft gestaltet',
      /* modal */
      modalSubtitle:     'Füllen Sie das Formular aus — ich melde mich baldmöglichst.',
      modalName:         'Vollständiger Name',
      modalNamePh:       'Ihr Name',
      modalEmail:        'E-Mail-Adresse',
      modalPhone:        'Telefon (optional)',
      modalEventType:    'Art der Veranstaltung',
      modalGuests:       'Erwartete Gäste',
      modalBudget:       'Budgetrahmen',
      modalDate:         'Gewünschtes Datum',
      modalLocation:     'Veranstaltungsort',
      modalLocationPh:   'Stadt oder Venue',
      modalDescription:  'Beschreibung & Erwartungen',
      modalDescPh:       'Erzählen Sie mir von Ihrer Veranstaltung, musikalischen Vorlieben und Vorstellungen...',
      modalSubmit:       'Anfrage senden',
      modalClose:        'Schließen',
      modalSuccessTitle: 'Vielen Dank!',
      modalSuccessText:  'Ihre Anfrage wurde an event@marcel-marki.com gesendet. Ich melde mich so bald wie möglich.',
      modalEmailSubject: 'Beratungsanfrage',
      selectOption:      '— Bitte auswählen —',
      etWedding:         'Hochzeit',
      etPrivate:         'Privatfeier',
      etCorporate:       'Firmenveranstaltung',
      etConcert:         'Konzertabend',
      etOther:           'Sonstiges',
      budgetOpen:        'Offen für Gespräch',
    }
  }

  const t = (key) => (translations[language]?.[key]) ?? key

  const navigate = (path) => {
    const targetKey = getPathKey(path)
    window.history.pushState({}, '', path)
    setPageKey(targetKey)
  }

  const getScrollTarget = (id) =>
    document.querySelector(`[data-section="${id}"]`) || document.getElementById(id)

  const scrollTo = (id) => {
    if (isLegalPage) {
      navigate('/')
      window.setTimeout(() => getScrollTarget(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
      return
    }
    getScrollTarget(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* ── Loading screen ── */
  if (isLoading && !isLegalPage) {
    return (
      <div className="loading-screen" style={{ backgroundImage: `url(${bgPiano})` }}>
        <div className="loading-bg-overlay" />
        <div className="startup-container">
          <div className="logo-animation">
            <div className="piano-keyboard">
              <div className="piano-white-keys">
                <div className="wkey wk-1" /><div className="wkey wk-2" /><div className="wkey wk-3" />
                <div className="wkey wk-4" /><div className="wkey wk-5" /><div className="wkey wk-6" />
                <div className="wkey wk-7" />
              </div>
              <div className="piano-black-keys">
                <div className="bkey bk-1" /><div className="bkey bk-2" /><div className="bkey bk-3" />
                <div className="bkey bk-4" /><div className="bkey bk-5" />
              </div>
            </div>
          </div>
          <h1 className="startup-title">Marcel Marki</h1>
          <p className="startup-subtitle">{t('heroSubtitle')}</p>
          <p className="startup-kicker">{t('heroKicker')}</p>
          <div className="loading-bar music-bar">
            <div className="loading-progress" />
          </div>
        </div>
      </div>
    )
  }

  const NAV_ITEMS = [
    { id: 'about',        key: 'navAbout' },
    { id: 'services',     key: 'navServices' },
    {
      id: 'perf-featured', key: 'navPerformances',
      dropdown: [
        { id: 'perf-featured',  key: 'navFeatured' },
        { id: 'perf-upcoming',  key: 'navUpcoming' },
        { id: 'perf-previous',  key: 'navPrevious' },
      ]
    },
    { id: 'testimonials', key: 'navTestimonials' },
    { id: 'gallery',      key: 'navGallery' },
    { id: 'contact',      key: 'navContact' },
  ]

  return (
    <div className="app">
      {/* ── Consultation Modal ── */}
      {showModal && (
        <ConsultationModal onClose={() => setShowModal(false)} t={t} />
      )}

      {/* ── Nav ── */}
      <header className={`topbar ${navScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <span
            className="nav-brand"
            onClick={() => {
              if (isLegalPage) navigate('/')
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Marcel Marki
          </span>
          <ul className="nav-list">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.id}
                className={`nav-item${item.dropdown ? ' nav-has-dropdown' : ''}`}
                onMouseEnter={item.dropdown ? () => setPerfDropdown(true) : undefined}
                onMouseLeave={item.dropdown ? () => setPerfDropdown(false) : undefined}
              >
                {idx > 0 && <span className="nav-divider" aria-hidden="true" />}
                <button className="nav-link" onClick={() => scrollTo(item.id)}>
                  {t(item.key)}{item.dropdown && <span className="nav-caret" aria-hidden="true">▾</span>}
                </button>
                {item.dropdown && perfDropdown && (
                  <div className="nav-dropdown" role="menu">
                    {item.dropdown.map(sub => (
                      <button
                        key={sub.id}
                        className="nav-dropdown-item"
                        role="menuitem"
                        onClick={() => { scrollTo(sub.id); setPerfDropdown(false) }}
                      >
                        {t(sub.key)}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="nav-lang" onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}>
              {language === 'en' ? 'DE' : 'EN'}
            </button>
          </div>
        </nav>
      </header>

      {isLegalPage ? (
        <>
          <LegalPage page={LEGAL_PAGES[pageKey]} navigate={navigate} />
          <Footer navigate={navigate} />
        </>
      ) : (
        <>

      {/* ── Hero ── */}
      <section className="hero">
        {/* Piano image background — same treatment as loading screen */}
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${bgPiano})` }}
        />

        <div className="floating-notes" aria-hidden="true">
          {FLOATING_NOTES.map((note, i) => (
            <span key={i} className={`floating-note fn-${i + 1}`}>{note}</span>
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-inner fade-in-down">
            <p className="hero-kicker">{t('heroKicker')}</p>
            <h1 className="hero-title">
              {['Marcel', 'Marki'].map((word, wi) => (
                <span key={wi} className="title-word">
                  {word.split('').map((char, ci) => (
                    <span
                      key={ci}
                      className="title-char"
                      style={{ animationDelay: `${0.3 + (wi * 6 + ci) * 0.07}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{t('heroSubtitle')}</p>
            <div className="hero-divider" aria-hidden="true">
              <span className="hero-divider-line" />
              <span className="hero-divider-note">♪</span>
              <span className="hero-divider-line" />
            </div>
            <p className="hero-intro">{t('heroIntro')}</p>
            <button className="cta-button" onClick={() => scrollTo('about')}>
              {t('cta')}
            </button>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="scroll-line" />
        </div>
      </section>

      {/* ── About ── */}
      <section className="about" data-section="about">
        <div className="container">
          <div className={`about-content slide-in-left ${visibleSections.about ? 'visible' : ''}`}>
            <h2>{t('aboutTitle')}</h2>
            <div className="section-underline" />
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
            <p>{t('aboutP3')}</p>
            <p>{t('aboutP4')}</p>
            <p>{t('aboutP5')}</p>
          </div>
          <div className={`about-image slide-in-right ${visibleSections.about ? 'visible' : ''}`}>
            <div className="image-frame">
              <img src={img2} alt="Piano performance" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services" data-section="services">
        <div className="section-wrap">
          <h2 className={`section-title fade-in-up ${visibleSections.services ? 'visible' : ''}`}>
            {t('servicesTitle')}
          </h2>
          <div className={`section-underline centered fade-in-up ${visibleSections.services ? 'visible' : ''}`} />
          <div className="services-grid">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                ),
                tKey: 'svc1'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="9" y1="13" x2="15" y2="13"/>
                    <line x1="9" y1="17" x2="12" y2="17"/>
                    <path d="M14 13v3.5a1.5 1.5 0 0 0 3 0V13h-3z"/>
                    <line x1="17" y1="13" x2="17" y2="16.5"/>
                  </svg>
                ),
                tKey: 'svc2'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ),
                tKey: 'svc3'
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`service-card fade-in-up ${visibleSections.services ? 'visible' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{t(`${s.tKey}Title`)}</h3>
                <p>{t(`${s.tKey}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Performances (Featured + Upcoming + Past) ── */}
      <div className="performances-section">

        {/* Featured */}
        <div id="perf-featured" data-section="perf-featured" className="perf-sub">
          <div className="section-wrap">
            <h2 className={`section-title fade-in-up ${visibleSections['perf-featured'] ? 'visible' : ''}`}>
              {t('featuredTitle')}
            </h2>
            <div className={`section-underline centered fade-in-up ${visibleSections['perf-featured'] ? 'visible' : ''}`} />
            <div className="works-grid">
              {[
                { title: 'KKL Open Piano Night',          subtitle: 'Sara Anna Walser & Marcel Marki', img: imgKKL },
                { title: 'BRIDGE Zürich Piano Nights',    subtitle: 'Marcel Marki',                    img: imgBridge },
                { title: 'Swiss Arbeitgeber Award Show',  subtitle: 'Sara Anna Walser & Marcel Marki', img: imgSwiss },
              ].map((work, i) => (
                <div
                  key={i}
                  className={`work-card zoom-in ${visibleSections['perf-featured'] ? 'visible' : ''}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="work-image">
                    <img src={work.img} alt={work.title} className="work-img" />
                    <div className="work-overlay"></div>
                  </div>
                  <div className="work-info">
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming + Past Events (auto-migration) */}
        {(() => {
          const de = language === 'de'
          const today = new Date(); today.setHours(0, 0, 0, 0)

          const upcomingDefs = [
            {
              isoDate: '2026-06-26',
              pastTitle: de ? 'Private Hochzeit' : 'Private Wedding', pastLogo: imgWedding, pastLogoDark: false, pastVenue: '',
              type: 'logo', logo: imgWedding, logoAlt: 'Wedding', logoLight: true,
              date: de ? 'Freitag, 26. Juni 2026' : 'Friday, 26 June 2026',
              time: de ? 'Privat' : 'Private',
              venue: de ? 'Private Hochzeit' : 'Private Wedding',
              desc: de ? 'Ein unvergesslicher Abend mit live Klaviermusik für einen besonderen Hochzeitstag.' : 'An unforgettable evening of live piano music for a very special wedding day.',
            },
            {
              isoDate: '2026-06-27',
              pastTitle: 'Latin Sunset @ SAMIGO', pastLogo: imgSamigo, pastIsPhoto: true, pastLogoDark: false, pastVenue: 'Samigo',
              type: 'image', img: imgSamigo, imgAlt: 'Latin Sunset @ Samigo',
              date: de ? 'Samstag, 27. Juni 2026' : 'Saturday, 27 June 2026',
              time: de ? 'Tag & Nacht' : 'Day & Night',
              venue: 'Samigo',
              desc: t('eventSamigoDesc'),
              ticketUrl: 'https://eventfrog.ch/de/p/partys/latin-brasil/latin-sunset-day-and-nightparty-samigo-7467879824339538144.html',
              ticketLabel: t('eventSamigoTickets'),
            },
            {
              isoDate: '2026-07-10',
              pastTitle: de ? 'Private Hochzeit' : 'Private Wedding', pastLogo: imgWedding, pastLogoDark: false, pastVenue: '',
              type: 'logo', logo: imgWedding, logoAlt: 'Wedding', logoLight: true,
              date: de ? 'Freitag, 10. Juli 2026' : 'Friday, 10 July 2026',
              time: de ? 'Privat' : 'Private',
              venue: de ? 'Private Hochzeit' : 'Private Wedding',
              desc: de ? 'Ein unvergesslicher Abend mit live Klaviermusik für einen besonderen Hochzeitstag.' : 'An unforgettable evening of live piano music for a very special wedding day.',
            },
            {
              isoDate: '2026-11-10',
              pastTitle: de ? 'Amante Belp Dining Evening' : 'Amante Belp Dining Evening', pastLogo: amantelogo, pastLogoDark: false, pastVenue: 'Amante Belp',
              type: 'logo', logo: amantelogo, logoAlt: 'Amante Belp', logoLight: true,
              date: de ? 'Dienstag, 10. November 2026' : 'Tuesday, 10 November 2026',
              time: '18:00 – 21:00', venue: t('eventVenueAmante'),
              desc: t('eventDiningDesc'), badge: t('eventOpenTo'),
            },
            {
              isoDate: '2026-12-22',
              pastTitle: de ? 'Amante Belp Dining Evening' : 'Amante Belp Dining Evening', pastLogo: amantelogo, pastLogoDark: false, pastVenue: 'Amante Belp',
              type: 'logo', logo: amantelogo, logoAlt: 'Amante Belp', logoLight: true,
              date: de ? 'Dienstag, 22. Dezember 2026' : 'Tuesday, 22 December 2026',
              time: '18:00 – 21:00', venue: t('eventVenueAmante'),
              desc: t('eventDiningDesc'), badge: t('eventOpenTo'),
            },
          ]

          const monthsEN = ['January','February','March','April','May','June','July','August','September','October','November','December']
          const monthsDE = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']
          const formatPastDate = (iso) => {
            const d = new Date(iso + 'T12:00:00')
            return de
              ? `${d.getDate()}. ${monthsDE[d.getMonth()]} ${d.getFullYear()}`
              : `${monthsEN[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
          }

          const allUpcoming = upcomingDefs.filter(ev => new Date(ev.isoDate) >= today)
          const autoMigrated = upcomingDefs
            .filter(ev => new Date(ev.isoDate) < today)
            .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))
            .map(ev => ({ isoDate: ev.isoDate, date: formatPastDate(ev.isoDate), title: ev.pastTitle, venue: ev.pastVenue, logo: ev.pastLogo, logoDark: ev.pastLogoDark, isPhoto: !!ev.pastIsPhoto }))

          const staticPast = [
            { isoDate: '2026-02-07', date: de ? '7. Februar 2026'   : 'February 7, 2026',   title: 'Piano Moments im Café des Artistes',    venue: 'Bern City Piano', logo: imgBernCityPiano, logoDark: true  },
            { isoDate: '2026-01-15', date: de ? '15. Januar 2026'   : 'January 15, 2026',   title: 'Swiss Arbeitgeber Award Show',           venue: '',                logo: imgSwissLogo,     logoDark: false },
            { isoDate: '2026-01-11', date: de ? '11. Januar 2026'   : 'January 11, 2026',   title: 'KKL Open Piano Night',                   venue: 'KKL Luzern',      logo: imgKKLLogo,       logoDark: false },
            { isoDate: '2025-12-27', date: de ? '27. Dezember 2025' : 'December 27, 2025',  title: 'Loeb Open Piano Moments',                venue: 'Loeb, Bern',      logo: imgLoebLogo,      logoDark: false },
            { isoDate: '2025-12-21', date: de ? '21. Dezember 2025' : 'December 21, 2025',  title: 'Loeb Open Piano Moments',                venue: 'Loeb, Bern',      logo: imgLoebLogo,      logoDark: false },
            { isoDate: '2025-09-13', date: de ? '13. September 2025': 'September 13, 2025', title: de ? 'Privater Geburtstag' : 'Private Birthday', venue: '',          logo: imgBirthday,      logoDark: false },
            { isoDate: '2025-08-16', date: de ? '16. August 2025'   : 'August 16, 2025',    title: de ? 'Private Hochzeit' : 'Private Wedding', venue: '',             logo: imgWedding,       logoDark: false },
          ]

          const allPast = [...autoMigrated, ...staticPast].sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))

          const visibleUpcoming = showAllUpcoming ? allUpcoming : allUpcoming.slice(0, 2)
          const visiblePast     = showAllPast     ? allPast     : allPast.slice(0, 3)

          return (
            <>
              <div id="perf-upcoming" data-section="perf-upcoming" className="perf-sub perf-sub--alt">
                <div className="section-wrap">
                  <h2 className={`section-title fade-in-up ${visibleSections['perf-upcoming'] ? 'visible' : ''}`}>
                    {t('upcomingTitle')}
                  </h2>
                  <div className={`section-underline centered fade-in-up ${visibleSections['perf-upcoming'] ? 'visible' : ''}`} />
                  <div className="events-grid">
                    {visibleUpcoming.map((ev, i) => (
                      <div
                        key={i}
                        className={`event-card${ev.type === 'image' ? ' event-card--image' : ''} fade-in-up ${visibleSections['perf-upcoming'] ? 'visible' : ''}`}
                        style={{ animationDelay: `${0.1 + i * 0.18}s` }}
                      >
                        {ev.type === 'image' ? (
                          <div className="event-img-header">
                            <img src={ev.img} alt={ev.imgAlt} />
                          </div>
                        ) : (
                          <div className={`event-venue-logo${ev.logoLight ? '' : ' event-venue-logo--dark'}`}>
                            <img src={ev.logo} alt={ev.logoAlt} className="amante-logo" />
                          </div>
                        )}
                        <div className="event-body">
                          <div className="event-meta">
                            <span className="event-date">{ev.date}</span>
                            <span className="event-time">{ev.time}</span>
                          </div>
                          <p className="event-venue-name">{ev.venue}</p>
                          <p className="event-desc">{ev.desc}</p>
                          {ev.ticketUrl && (
                            <a href={ev.ticketUrl} target="_blank" rel="noopener noreferrer" className="event-ticket-link">
                              🎟 {ev.ticketLabel}
                            </a>
                          )}
                          {ev.badge && <span className="event-badge">{ev.badge}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                  {allUpcoming.length > 2 && (
                    <div className="show-more-wrap">
                      <button className="show-more-btn" onClick={() => setShowAllUpcoming(v => !v)}>
                        {showAllUpcoming ? t('showLess') : t('showMore')} {showAllUpcoming ? '▲' : '▼'}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div id="perf-previous" data-section="perf-previous" className="perf-sub">
                <div className="section-wrap">
                  <h2 className={`section-title fade-in-up ${visibleSections['perf-previous'] ? 'visible' : ''}`}>
                    {t('previousTitle')}
                  </h2>
                  <div className={`section-underline centered fade-in-up ${visibleSections['perf-previous'] ? 'visible' : ''}`} />
                  <div className="past-grid">
                    {visiblePast.map((ev, i) => (
                      <div
                        key={i}
                        className={`past-card fade-in-up ${visibleSections['perf-previous'] ? 'visible' : ''}`}
                        style={{ animationDelay: `${0.08 * i}s` }}
                      >
                        <div className={`past-logo-wrap${ev.isPhoto ? ' past-logo-wrap--photo' : ev.logo ? (ev.logoDark ? ' past-logo-wrap--dark' : ' past-logo-wrap--light') : ' past-logo-wrap--none'}`}>
                          {ev.logo
                            ? <img src={ev.logo} alt={ev.title} className={ev.isPhoto ? 'past-photo' : 'past-logo'} />
                            : <span className="past-placeholder">♪</span>
                          }
                        </div>
                        <div className="past-info">
                          <p className="past-date">{ev.date}</p>
                          <p className="past-title">{ev.title}</p>
                          {ev.venue && <p className="past-venue">{ev.venue}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  {allPast.length > 3 && (
                    <div className="show-more-wrap">
                      <button className="show-more-btn" onClick={() => setShowAllPast(v => !v)}>
                        {showAllPast ? t('showLess') : t('showMore')} {showAllPast ? '▲' : '▼'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )
        })()}

      </div>

      {/* ── Parallax quote ── */}
      <section className="parallax" ref={parallaxRef}>
        <div className="parallax-content">
          <span className="parallax-deco" aria-hidden="true">♫</span>
          <h2>{t('parallaxQuote')}</h2>
          <span className="parallax-deco" aria-hidden="true">♫</span>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials" data-section="testimonials">
        <div className="section-wrap">
          <h2 className={`section-title fade-in-up ${visibleSections.testimonials ? 'visible' : ''}`}>
            {t('testimonialsTitle')}
          </h2>
          <div className={`section-underline centered fade-in-up ${visibleSections.testimonials ? 'visible' : ''}`} />
          <div className="testimonials-grid">
            {[
              { key: 'testimonialKatrin', author: 'Katrin G.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`testimonial-card slide-in-up ${visibleSections.testimonials ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="quote-mark">"</span>
                <p className="quote">{t(item.key)}</p>
                <p className="author">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="gallery" data-section="gallery">
        <div className="section-wrap">
          <h2 className={`section-title fade-in-up ${visibleSections.gallery ? 'visible' : ''}`}>
            {t('galleryTitle')}
          </h2>
          <div className={`section-underline centered fade-in-up ${visibleSections.gallery ? 'visible' : ''}`} />
          {/* Videos */}
          <h3 className={`gallery-sub-title fade-in-up ${visibleSections.gallery ? 'visible' : ''}`}>{t('galleryVideos')}</h3>
          <div className="gallery-video-grid">
            {VIDEOS.map((vid, i) => (
              <div key={i} className={`gallery-video-wrap fade-in-up ${visibleSections.gallery ? 'visible' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="gallery-video-ratio">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="gallery-video"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Photos */}
          <h3 className={`gallery-sub-title fade-in-up ${visibleSections.gallery ? 'visible' : ''}`} style={{ marginTop: '3rem' }}>{t('galleryPhotos')}</h3>
          {(() => {
            const allPhotos = [
              { src: imgSwiss,        alt: 'Swiss Arbeitgeber Award Show' },     // 2026-01-17
              { src: img2,            alt: 'Marcel Marki – Piano' },             // 2026-01-17
              { src: imgIMG9610,      alt: 'Marcel Marki – Performance' },       // 2026-01-12
              { src: imgKKL,          alt: 'KKL Open Piano Night' },             // 2026-01-11
              { src: imgDSC02765,     alt: 'Marcel Marki – Live Performance' },  // 2025-12-06
              { src: img3,            alt: 'Marcel Marki – Concert' },           // 2025-12-06
              // imgBernCityPiano removed (logo, not a performance photo)
              { src: imgBridge,       alt: 'BRIDGE Zürich Piano Nights' },       // 2025-11-21
              { src: imgP3,           alt: 'Marcel Marki – Live Performance' },  // 2025-09-12
              { src: imgP2,           alt: 'Marcel Marki – Live Performance' },  // 2025-09-12
              { src: imgP1,           alt: 'Marcel Marki – Live Performance' },  // 2025-09-12
              { src: imgDSC02310,     alt: 'Marcel Marki – Performance' },       // 2025-09-06
            ]
            const visible = showAllGallery ? allPhotos : allPhotos.slice(0, 4)
            return (
              <>
                <div className="gallery-grid">
                  {visible.map((photo, i) => (
                    <div
                      key={i}
                      className={`gallery-item slide-in-up ${visibleSections.gallery ? 'visible' : ''}`}
                      style={{ animationDelay: `${i * 0.08}s` }}
                      onClick={() => setLightboxSrc(photo.src)}
                    >
                      <img src={photo.src} alt={photo.alt} className="gallery-img" />
                      <div className="gallery-overlay" />
                    </div>
                  ))}
                </div>
                <div className="show-more-wrap">
                  <button className="show-more-btn" onClick={() => setShowAllGallery(v => !v)}>
                    {showAllGallery ? t('showLess') : t('showMore')} {showAllGallery ? '▲' : '▼'}
                  </button>
                </div>
              </>
            )
          })()}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" data-section="contact">
        <div className="section-wrap">
          <div className={`contact-content fade-in-up ${visibleSections.contact ? 'visible' : ''}`}>
            <h2>{t('contactTitle')}</h2>
            <div className="section-underline centered" />
            <p>{t('contactSubtext')}</p>
            <div className="contact-buttons">
              <button
                className="contact-btn primary"
                onClick={() => setShowModal(true)}
              >
                {t('schedule')}
              </button>
              <a
                className="contact-email-link"
                href={`mailto:event@marcel-marki.com?subject=${encodeURIComponent(t('modalEmailSubject'))}`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
                {t('sendMessage')}
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/marcel_marki?igsh=MWxucGZocW53YmRoaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@marcel.marki?_r=1&_t=ZN-97Hxzo26vmY" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
                <span>TikTok</span>
              </a>
              <a href="https://www.youtube.com/@marcelmarki" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a href="https://www.facebook.com/people/Marcel-Marki/pfbid02wZGuG6nzZ6eCwk7YWxaQbT6bx3uyQrx7gPW4E4TENNSa9dQ4ZbtfVRQdw9hDM3snl/?mibextid=wwXIfr&rdid=websU4FvH0I6qINZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F181MxjXPkA%2F%3Fmibextid%3DwwXIfr%26ref%3D1" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/marcel-marki-a410a61b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 0 1-2.06-2.07 2.06 2.06 0 0 1 2.06-2.06 2.06 2.06 0 0 1 2.07 2.06 2.06 2.06 0 0 1-2.07 2.07zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer navigate={navigate} />

      {/* ── Lightbox ── */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Close">✕</button>
          <img src={lightboxSrc} alt="Gallery" className="lightbox-img" onClick={e => e.stopPropagation()} />
        </div>
      )}
        </>
      )}
    </div>
  )
}

export default App
