import React from 'react'
import styles from '../styles/BrandStory.module.css'

const PILLARS = [
  {
    num: '01',
    title: 'Single-Accord Purity',
    desc: 'Each flacon is formulated around a singular, unadulterated botanical or resin extract. We refuse to hide mediocrity behind complex twenty-note blends.',
  },
  {
    num: '02',
    title: 'Cold-Pressed Extraction',
    desc: 'Harvested at peak olfactory vitality and macerated over six months in our Nairobi atelier under controlled temperature and zero artificial fixatives.',
  },
  {
    num: '03',
    title: 'Skin Dialogue',
    desc: 'Designed to meld with your body heat rather than project synthetic sillage. A Valance fragrance is felt in proximity, not announced from across the room.',
  },
]

const BrandStory = () => {
  return (
    <section className={styles.story} id="craft">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topGrid}>
          <div className={styles.leadContent}>
            <span className="eyebrow">The Atelier Philosophy</span>
            <h2 className={styles.title}>
              No invented words.<br />
              <em>Just the note, worn honestly.</em>
            </h2>
            <p className={styles.leadText}>
              In an industry dominated by commercial marketing and synthetic shortcuts, Valance was founded in Nairobi as a purist reaction. We believe high perfumery is an art of subtraction, not clutter.
            </p>
            <div className={styles.manifestoQuote}>
              &ldquo;A fragrance is a personal truth. You do not wear an illusion; you wear an accord that honors your presence.&rdquo;
            </div>
          </div>

          <div className={styles.statVisual}>
            <div className={styles.statCard}>
              <span className={styles.statBig}>180</span>
              <span className={styles.statUnit}>Days Maceration</span>
              <p className={styles.statSub}>Allowed to mature in amber glass before bottling to achieve peak depth.</p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statBig}>0%</span>
              <span className={styles.statUnit}>Synthetic Fillers</span>
              <p className={styles.statSub}>Pure botanicals, fractionated organic cane alcohol, and natural isolates.</p>
            </div>
          </div>
        </div>

        <div className={styles.pillarsGrid}>
          {PILLARS.map((p) => (
            <div key={p.num} className={styles.pillar}>
              <span className={styles.pillarNum}>{p.num}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandStory
