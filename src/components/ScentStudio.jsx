import React, { useState } from 'react'
import { sampleProducts } from './ProductList'
import styles from '../styles/ScentStudio.module.css'

const ACCORD_LABELS = {
  1: 'Pomme Verte',
  2: 'Lait Chaud',
  3: 'Vanille Bourbon',
  4: 'Rose Otto',
  5: 'Oud Fumé',
  6: 'Santal Blanc',
  7: 'Figue Feuille',
  8: 'Ambre Solaire',
}

const BLENDS = {
  '1+6': { name: 'Crisp Teakwood', desc: 'Fresh orchard air grounding into velvety Mysore cream.' },
  '2+3': { name: 'Cashmere Gourmand', desc: 'Warm rice steam folded into deep Madagascar amber.' },
  '4+5': { name: 'Damascene Noir', desc: 'Regal Bulgarian petal richness enveloped in dark smoke.' },
  '7+6': { name: 'Mediterranean Sage', desc: 'Milky fig sap drifting over sun-warmed cedar bark.' },
  '4+8': { name: 'Solar Bloom', desc: 'Luminous solar amber lifting dewy morning florals.' },
  '1+3': { name: 'Orchard Amber', desc: 'Sweet golden fruit roasted over warm bourbon vanilla.' },
}

const ScentStudio = ({ onAddDuo }) => {
  const [noteA, setNoteA] = useState(sampleProducts[0])
  const [noteB, setNoteB] = useState(sampleProducts[5])

  const key1 = `${noteA.id}+${noteB.id}`
  const key2 = `${noteB.id}+${noteA.id}`
  const currentBlend = BLENDS[key1] || BLENDS[key2] || {
    name: `${ACCORD_LABELS[noteA.id]} & ${ACCORD_LABELS[noteB.id]}`,
    desc: `A bespoke juxtaposition balancing ${noteA.category.toLowerCase()} and ${noteB.category.toLowerCase()} accords.`,
  }

  const duoPrice = Math.round((parseFloat(noteA.price) + parseFloat(noteB.price)) * 0.9)

  const handleAddDuo = () => {
    if (onAddDuo) {
      onAddDuo(noteA)
      onAddDuo(noteB)
    }
  }

  return (
    <section className={styles.studio} id="studio">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className="eyebrow">Interactive Mixology</span>
          <h2 className={styles.title}>Accord Layering Studio</h2>
          <p className={styles.subtitle}>
            Pure notes are engineered to be worn alone or layered in dialogue. Select two accords to preview their bespoke harmonic alchemy.
          </p>
        </div>

        <div className={styles.cockpit}>
          <div className={styles.selectorColumn}>
            <span className={styles.selectorLabel}>Primary Accord (Base)</span>
            <div className={styles.notePills}>
              {sampleProducts.map((p) => (
                <button
                  key={`primary-${p.id}`}
                  type="button"
                  className={`${styles.notePill} ${noteA.id === p.id ? styles.notePillActive : ''}`}
                  style={{ '--item-accent': p.accent }}
                  onClick={() => setNoteA(p)}
                >
                  {ACCORD_LABELS[p.id] || p.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.fusionCard}>
            <div className={styles.blendOrbs}>
              <div className={styles.orbA} style={{ background: noteA.accent }} />
              <span className={styles.plusSymbol}>+</span>
              <div className={styles.orbB} style={{ background: noteB.accent }} />
            </div>

            <span className={styles.fusionBadge}>Harmonic Result</span>
            <h3 className={styles.fusionTitle}>{currentBlend.name}</h3>
            <p className={styles.fusionDesc}>{currentBlend.desc}</p>

            <div className={styles.duoFooter}>
              <div className={styles.pricing}>
                <span className={styles.pairPrice}>KES {duoPrice.toLocaleString()}</span>
                <span className={styles.pairDiscount}>10% Layering Privilege</span>
              </div>
              <button
                type="button"
                className={styles.duoBtn}
                onClick={handleAddDuo}
              >
                Acquire Layering Duo
              </button>
            </div>
          </div>

          <div className={styles.selectorColumn}>
            <span className={styles.selectorLabel}>Secondary Accord (Over-layer)</span>
            <div className={styles.notePills}>
              {sampleProducts.map((p) => (
                <button
                  key={`secondary-${p.id}`}
                  type="button"
                  className={`${styles.notePill} ${noteB.id === p.id ? styles.notePillActive : ''}`}
                  style={{ '--item-accent': p.accent }}
                  onClick={() => setNoteB(p)}
                >
                  {ACCORD_LABELS[p.id] || p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScentStudio
