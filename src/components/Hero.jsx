import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.orb1} aria-hidden="true" />
    <div className={styles.orb2} aria-hidden="true" />
    <div className={styles.grain} aria-hidden="true" />

    <div className={`container ${styles.inner}`}>
      <div className={styles.content}>
        <span className={`eyebrow ${styles.eyebrow}`}>On View · Vol. I Edition</span>
        <h1 className={styles.headline}>
          Identity,<br />
          <em>in liquid form.</em>
        </h1>
        <p className={styles.sub}>
          Single-origin botanical accords distilled in Nairobi. No blends hiding behind fantasy names — just the pure note, worn honestly.
        </p>
        <div className={styles.ctas}>
          <a href="#notes" className={styles.ctaPrimary}>Inspect The Collection</a>
          <a href="#studio" className={styles.ctaGhost}>Mixology Studio</a>
        </div>
      </div>

      <div className={styles.aside}>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNum}>8</span>
            <span className={styles.statLabel}>Pure Accords</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>5</span>
            <span className={styles.statLabel}>Fragrance Families</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Single Origin</span>
          </div>
        </div>
        <div className={styles.dividerLine} />
        <p className={styles.manifesto}>
          &ldquo;A fragrance should be a single truth — not a committee of ingredients masquerading as personality.&rdquo;
        </p>
      </div>
    </div>
  </section>
)

export default Hero
