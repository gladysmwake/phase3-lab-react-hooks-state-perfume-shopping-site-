import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => (
  <footer className={styles.footer} id="about">
    <div className={styles.gradientDivider} />
    <div className={`container ${styles.inner}`}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>VALANCE</span>
          <p className={styles.tagline}>
            A single-note fragrance library,<br />built one accord at a time.
          </p>
        </div>

        <nav className={styles.linkGroup} aria-label="Fragrance families">
          <span className={styles.linkGroupLabel}>Families</span>
          <a href="#notes">Fruits</a>
          <a href="#notes">Gourmand</a>
          <a href="#notes">Florals</a>
          <a href="#notes">Woods</a>
          <a href="#notes">Musks</a>
        </nav>

        <nav className={styles.linkGroup} aria-label="Company">
          <span className={styles.linkGroupLabel}>Company</span>
          <a href="#about">The Craft</a>
          <a href="#about">Our Story</a>
          <a href="#about">Wholesale</a>
          <a href="#about">Press</a>
        </nav>

        <div className={styles.newsletter}>
          <span className={styles.linkGroupLabel}>The Edit</span>
          <p className={styles.newsletterSub}>
            New notes, rare accords, and olfactory essays — straight to your inbox.
          </p>
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.emailInput}
              aria-label="Email address for newsletter"
            />
            <button type="button" className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Valance. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#about">Privacy Policy</a>
          <a href="#about">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
