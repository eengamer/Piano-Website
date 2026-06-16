import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})

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

  return (
    <div className="app">
      {/* Hero Section with Parallax */}
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content">
          <div className="fade-in-down">
            <h1 className="hero-title">Piano</h1>
            <p className="hero-subtitle">Elegance in Every Note</p>
            <button className="cta-button">Discover My Journey</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" data-section="about">
        <div className="container">
          <div className={`about-content slide-in-left ${visibleSections.about ? 'visible' : ''}`}>
            <h2>About Me</h2>
            <p>
              With a passion for classical music and contemporary compositions, I bring life to every piece I perform. 
              My journey spans years of dedicated practice and artistic exploration.
            </p>
            <p>
              Each performance is a story, each note a brushstroke on the canvas of sound.
            </p>
          </div>
          <div className={`about-image slide-in-right ${visibleSections.about ? 'visible' : ''}`}>
            <div className="image-placeholder">
              <span>🎹</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" data-section="services">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.services ? 'visible' : ''}`}>My Expertise</h2>
          
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
          <h2 className={`section-title fade-in-up ${visibleSections.featured ? 'visible' : ''}`}>Featured Performances</h2>
          
          <div className="works-grid">
            {['Moonlight Sonata', 'Les Misérables', 'River Flows in You'].map((work, index) => (
              <div 
                key={index}
                className={`work-card zoom-in ${visibleSections.featured ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="work-image">
                  <span>🎹</span>
                </div>
                <h3>{work}</h3>
                <p>An exquisite performance</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax" style={{ backgroundPositionY: `${scrollY * 0.7}px` }}>
        <div className="parallax-content">
          <h2>"Music is the language of the soul"</h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" data-section="gallery">
        <div className="container">
          <h2 className={`section-title fade-in-up ${visibleSections.gallery ? 'visible' : ''}`}>Gallery</h2>
          
          <div className="gallery-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className={`gallery-item slide-in-up ${visibleSections.gallery ? 'visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="gallery-placeholder">🎹</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" data-section="contact">
        <div className="container">
          <div className={`contact-content fade-in-up ${visibleSections.contact ? 'visible' : ''}`}>
            <h2>Let's Connect</h2>
            <p>Interested in performances, collaborations, or lessons?</p>
            <div className="contact-buttons">
              <button className="contact-btn primary">Send a Message</button>
              <button className="contact-btn secondary">Schedule a Consultation</button>
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
