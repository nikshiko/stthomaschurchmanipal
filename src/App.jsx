import './App.css';
import heroImage from './assets/hero-image.png';
function App() {
  return (
    <div className="app">
      {/* Header with Orthodox styling */}
      <header className="orthodox-header">
        <div className="header-content">
          <div className="church-identity">
            <div className="cross-symbol">✠</div>
            <div className="church-name">
              <h1>St. Thomas Orthodox Syrian Church</h1>
              <p className="church-subtitle">Manipal</p>
            </div>
          </div>
          <nav className="orthodox-nav">
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Divine Services</a>
            <a href="#contact" className="nav-link">Visit Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay">
          <img 
            src={heroImage} 
            alt="St Thomas Orthodox Church" 
            className="hero-image" 
          />
          <div className="hero-content">
            <div className="hero-cross">☦</div>
            <h2 className="hero-title">Welcome to Our Sacred Community</h2>
            <p className="hero-verse">"Come unto me, all ye that labor and are heavy laden, and I will give you rest." - Matthew 11:28</p>
            <div className="hero-actions">
              <a href="#services" className="cta-button primary">Join Our Services</a>
              <a href="#about" className="cta-button secondary">Learn About Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Our Church</h2>
            <div className="section-ornament">✠ ✠ ✠</div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="lead-text">
                St Thomas Orthodox Church stands as a beacon of Orthodox Christian faith in Manipal, 
                welcoming all who seek spiritual nourishment and community fellowship.
              </p>
              <p>
                Our church follows the ancient traditions and teachings of the Orthodox faith, 
                maintaining the sacred liturgy and practices that have been preserved for centuries. 
                We are committed to spiritual growth, community service, and living according to 
                the Gospel of our Lord Jesus Christ.
              </p>
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>To glorify God through worship, fellowship, and service, while preserving the sacred traditions of Orthodox Christianity and sharing Christ's love with our community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="content-section services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Divine Services & Worship</h2>
            <div className="section-ornament">☦ ☦ ☦</div>
          </div>
          <div className="services-grid">
            <div className="service-card primary-service">
              <div className="service-icon">⛪</div>
              <h3>Sunday Divine Liturgy</h3>
              <p className="service-time">Every Sunday at 07:30 AM</p>
              <p>Join us for the celebration of the Holy Eucharist and traditional Orthodox worship.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🕯️</div>
              <h3>Evening Prayers</h3>
              <p className="service-time">Saturday : 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Visit & Connect With Us</h2>
            <div className="section-ornament">☦ ☦ ☦</div>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p><a href="mailto:sample@email.com">sample@email.com</a></p>
            </div>
            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p><a href="tel:+000000000">+91 00000000</a></p>
            </div>
            <div className="contact-card">
              <h3>🌐 Social Media</h3>
              <p><a href="https://www.facebook.com/profile.php?id=100064382814024" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></p>
            </div>
          <div className="location-info">
            <div className="location-card">
              <h3>📍 Our Location</h3>
              <p><strong><a href="https://maps.app.goo.gl/xhpDo1EocutVBuE38">Eshwar Nagar</a></strong><br />
              Manipal, Karnataka 576104<br />
              India</p>
            </div>
          </div>
          </div>
          <div className="visit-us">
            <div className="visit-card">
              <h3>All Are Welcome</h3>
              <p>Whether you are new to the Orthodox faith or a lifelong believer, we invite you to join our community. Come as you are and experience the love of Christ in our fellowship.</p>
              <div className="blessing">
                <em>"May the grace of our Lord Jesus Christ, the love of God the Father, and the communion of the Holy Spirit be with you all."</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="orthodox-footer">
        <div className="footer-content">
          <div className="footer-cross">☦</div>
          <p className="footer-text">© 2025 St Thomas Orthodox Church Manipal</p>
          <p className="footer-blessing">In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;