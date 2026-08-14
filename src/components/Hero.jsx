import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.eyebrow}`}>The Pure Notes Library</span>
          <h1 className={styles.headline}>
            Identity,<br />
            <em>in liquid form.</em>
          </h1>
          <p className={styles.sub}>
            Each Valance fragrance is named for the single accord that defines it —
            no blends hiding behind invented words. Just the note, worn honestly.
          </p>
          <div className={styles.ctas}>
            <a href="#notes" className={styles.ctaPrimary}>Explore the Collection</a>
            <a href="#about" className={styles.ctaGhost}>Our Philosophy</a>
          </div>
        </div>

        <div className={styles.aside}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>Pure Notes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>5</span>
              <span className={styles.statLabel}>Fragrance Families</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Single Accord</span>
            </div>
          </div>
          <div className={styles.dividerLine} />
          <p className={styles.manifesto}>
            &ldquo;A fragrance should be a single truth — not a committee of
            ingredients masquerading as personality.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
