import { useState, useEffect } from 'react'
import './App.css'
import img1 from './assets/1D29431A-DB86-4AD8-BC40-D65F2E59666A.JPG'
import img2 from './assets/20b48e7f-9b09-4956-ac8c-d47865580434.JPG'
import img3 from './assets/DSC02666.JPEG'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Simulate loading time and auto-hide startup screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Check which sections are in view
      const sections = document.querySelectorAll('[data-section]')
      const newVisible = {}
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75
        newVisible[section.dataset.section] = isVisible
      })
      
      setVisibleSections(newVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const translations = {
    en: {
      heroTitle: 'Marcel Marki',
      heroSubtitle: 'Event Pianist',
      featuredTitle: 'Featured Performances',
      cta: 'Discover My Journey',
      aboutTitle: 'About Me',
      aboutP1: 'I am a 22 year old pianist who lives close to Lucerne. I started learning piano on my own at the age of 13 and began taking lessons 5 years later.',
      aboutP2: 'I am very open to playing different styles; I love to perform a lot, whether on stage or at open pianos.',
      servicesTitle: 'My Expertise',
      upcomingTitle: 'Upcoming Concerts',
      previousTitle: 'Previous Concerts',
      galleryTitle: 'Gallery',
      contactTitle: "Let's Connect",
      sendMessage: 'Send a Message',
      schedule: 'Schedule a Consultation',
      navAbout: 'About Me',
      navUpcoming: 'Upcoming Concerts',
      navPrevious: 'Previous Concerts',
      navGallery: 'Gallery',
      navContact: 'Contact'
    },
    de: {
      heroTitle: 'Marcel Marki',
      heroSubtitle: 'Eventpianist',
      featuredTitle: 'Ausgewählte Auftritte',
      cta: 'Entdecke meine Reise',
      aboutTitle: 'Über mich',
      aboutP1: 'Mit einer Leidenschaft für klassische Musik und zeitgenössische Kompositionen erwecke ich jedes Stück zum Leben.',
      aboutP2: 'Jeder Auftritt ist eine Geschichte, jede Note ein Pinselstrich auf der Klangleinwand.',
      servicesTitle: 'Meine Expertise',
      upcomingTitle: 'Bevorstehende Konzerte',
      previousTitle: 'Frühere Konzerte',
      galleryTitle: 'Galerie',
      contactTitle: 'Lass uns in Kontakt treten',
      sendMessage: 'Nachricht senden',
      schedule: 'Beratung vereinbaren',
      navAbout: 'Über mich',
      navUpcoming: 'Bevorstehende Konzerte',
      navPrevious: 'Frühere Konzerte',
      navGallery: 'Galerie',
      navContact: 'Kontakt'
    }
  }

  const t = (key) => (translations[language] && translations[language][key]) || key

  const handleLanguageSelect = (lang) => {
    setLanguage(lang)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="startup-container">
          <div className="logo-animation">
            <div className="piano-keys">
              <div className="key key-1"></div>
              <div className="key key-2"></div>
              <div className="key key-3"></div>
              <div className="key key-4"></div>
              <div className="key key-5"></div>
              <div className="key key-6"></div>
              <div className="key key-7"></div>
            </div>
          </div>
          <h1 className="startup-title">{t('heroTitle')}</h1>
          <p className="startup-subtitle">{t('heroSubtitle')}</p>

          <div className="loading-bar music-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="topbar">
        <nav className="nav">
          <ul className="nav-list">
            {[{id:'about', key:'navAbout'},{id:'upcoming', key:'navUpcoming'},{id:'previous', key:'navPrevious'},{id:'gallery', key:'navGallery'},{id:'contact', key:'navContact'}].map(item => (
              <li key={item.id} className="nav-item">
                <button className="nav-link" onClick={() => {
                  const el = document.querySelector(`[data-section="${item.id}"]`)
                  if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'})
                }}>{t(item.key)}</button>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="nav-lang" onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}>{language === 'en' ? 'DE' : 'EN'}</button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Parallax */}
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content">
          <div className="fade-in-down">
            <h1 className="hero-title">{t('heroTitle')}</h1>
            <p className="hero-subtitle">{t('heroSubtitle')}</p>
            <button className="cta-button" onClick={() => {
              const el = document.querySelector('[data-section="about"]')
              if (el) el.scrollIntoView({behavior: 'smooth'})
            }}>{t('cta')}</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" data-section="about">
        <div className="container">
          <div className={`about-content slide-in-left ${visibleSections.about ? 'visible' : ''}`}>
            <h2>{t('aboutTitle')}</h2>
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
          </div>
          <div className={`about-image slide-in-right ${visibleSections.about ? 'visible' : ''}`}>
            <img src={img1} alt="Piano performance" className="about-img" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" data-section="services">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.services ? 'visible' : ''}`}>{t('servicesTitle')}</h2>
          
          <div className="services-grid">
            <div className={`service-card fade-in-up ${visibleSections.services ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="service-icon">🎼</div>
              <h3>Classical Performance</h3>
              <p>Masterful interpretations of timeless classical compositions</p>
            </div>
            
            <div className={`service-card fade-in-up ${visibleSections.services ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="service-icon">🎵</div>
              <h3>Contemporary Fusion</h3>
              <p>Modern arrangements blending classical elegance with contemporary vibrancy</p>
            </div>
            
            <div className={`service-card fade-in-up ${visibleSections.services ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="service-icon">🎓</div>
              <h3>Instruction & Mentoring</h3>
              <p>Personalized lessons and guidance for aspiring musicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="featured" data-section="featured">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.featured ? 'visible' : ''}`}>{t('featuredTitle')}</h2>
          
          <div className="works-grid">
            {[
              { title: 'Moonlight Sonata', img: img1 },
              { title: 'Les Misérables', img: img2 },
              { title: 'River Flows in You', img: img3 }
            ].map((work, index) => (
              <div 
                key={index}
                className={`work-card zoom-in hover-lift ${visibleSections.featured ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="work-image">
                  <img src={work.img} alt={work.title} className="work-img" />
                </div>
                <h3>{work.title}</h3>
                <p>An exquisite performance</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Concerts Section */}
      <section className="upcoming" data-section="upcoming">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.upcoming ? 'visible' : ''}`}>{t('upcomingTitle')}</h2>
          <p className="center muted">{language === 'en' ? '(No upcoming concerts listed yet)' : '(Keine bevorstehenden Konzerte vorhanden)'}</p>
        </div>
      </section>

      {/* Previous Concerts Section */}
      <section className="previous" data-section="previous">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.previous ? 'visible' : ''}`}>{t('previousTitle')}</h2>
          <p className="center muted">{language === 'en' ? '(Past concerts will appear here)' : '(Vergangene Konzerte erscheinen hier)'}</p>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax" style={{ backgroundPositionY: `${scrollY * 0.7}px` }}>
        <div className="parallax-content">
          <h2>"Music is the language of the soul"</h2>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" data-section="testimonials">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.testimonials ? 'visible' : ''}`}>Testimonials</h2>
          <div className="testimonials-grid">
            <div className={`testimonial-card slide-in-up ${visibleSections.testimonials ? 'visible' : ''}`}>
              <p className="quote">“A mesmerising performance — professional and heartfelt.”</p>
              <p className="author">— Anna S.</p>
            </div>
            <div className={`testimonial-card slide-in-up ${visibleSections.testimonials ? 'visible' : ''}`}>
              <p className="quote">“Perfect for our event, very accommodating and talented.”</p>
              <p className="author">— K. Meier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" data-section="gallery">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.gallery ? 'visible' : ''}`}>{t('galleryTitle')}</h2>
          
          <div className="gallery-grid">
            {[img1, img2, img3, img1, img2, img3].map((img, i) => (
              <div 
                key={i}
                className={`gallery-item slide-in-up hover-scale ${visibleSections.gallery ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img src={img} alt={`Gallery item ${i + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" data-section="contact">
        <div className="container">
          <div className={`contact-content fade-in-up ${visibleSections.contact ? 'visible' : ''}`}>
            <h2>{t('contactTitle')}</h2>
            <p>{language === 'en' ? 'Interested in performances, collaborations, or lessons?' : 'Interessiert an Auftritten, Zusammenarbeit oder Unterricht?'}</p>
            <div className="contact-buttons">
              <a className="contact-btn primary" href={`mailto:hello@example.com?subject=${encodeURIComponent(language === 'en' ? 'Booking request' : 'Buchungsanfrage')}`}>{t('sendMessage')}</a>
              <button className="contact-btn secondary" onClick={() => alert(language === 'en' ? 'To schedule, please email hello@example.com' : 'Um zu buchen, senden Sie bitte eine E-Mail an hello@example.com')}>{t('schedule')}</button>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Piano Portfolio. Crafted with passion.</p>
      </footer>
    </div>
  )
}

export default App
