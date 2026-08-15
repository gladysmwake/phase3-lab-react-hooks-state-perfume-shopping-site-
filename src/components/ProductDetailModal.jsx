import React, { useState } from 'react'
import styles from '../styles/ProductDetailModal.module.css'

const SIZES = [
  { id: '15ml', label: '15ml Travel', multiplier: 0.6 },
  { id: '50ml', label: '50ml Atelier', multiplier: 1.0 },
  { id: '100ml', label: '100ml Extrait', multiplier: 1.7 },
]

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(SIZES[1])

  if (!product) return null

  const basePrice = parseFloat(product.price) || 0
  const adjustedPrice = Math.round(basePrice * selectedSize.multiplier)

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize: selectedSize.label,
      price: String(adjustedPrice),
    })
    onClose()
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} style={{ '--item-accent': product.accent || 'var(--accent)' }}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close details">
          ✕
        </button>

        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.accentGlow} />
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.header}>
              <span className={styles.badge}>{product.category} · Pure Accord</span>
              <h2 className={styles.title}>{product.name}</h2>
              <span className={styles.tagline}>{product.tag}</span>
            </div>

            <p className={styles.description}>{product.note}</p>

            <div className={styles.section}>
              <h4 className={styles.sectionHeading}>Olfactory Architecture</h4>
              <div className={styles.pyramid}>
                <div className={styles.pyramidLevel}>
                  <span className={styles.levelLabel}>Top</span>
                  <span className={styles.levelValue}>{product.pyramid?.top || 'Fresh opening notes'}</span>
                </div>
                <div className={styles.pyramidLevel}>
                  <span className={styles.levelLabel}>Heart</span>
                  <span className={styles.levelValue}>{product.pyramid?.heart || 'Pure botanical absolute'}</span>
                </div>
                <div className={styles.pyramidLevel}>
                  <span className={styles.levelLabel}>Base</span>
                  <span className={styles.levelValue}>{product.pyramid?.base || 'Aged woods & warm amber'}</span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionHeading}>Vessel Volume</h4>
              <div className={styles.sizeSelector}>
                {SIZES.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    className={`${styles.sizeBtn} ${selectedSize.id === size.id ? styles.sizeActive : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.footerRow}>
              <div className={styles.priceGroup}>
                <span className={styles.priceLabel}>Price</span>
                <span className={styles.priceValue}>KES {adjustedPrice}</span>
              </div>

              <button
                type="button"
                className={styles.addBtn}
                disabled={!product.inStock}
                onClick={handleAdd}
              >
                {product.inStock ? `Acquire (${selectedSize.id})` : 'Sold Out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal
