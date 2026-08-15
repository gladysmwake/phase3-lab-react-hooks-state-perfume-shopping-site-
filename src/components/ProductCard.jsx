import React, { useRef, useState } from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart, onSelectProduct }) => {
  const { id, name, price, category, inStock, note, image, accent, tag } = product
  const cardRef = useRef(null)
  const [coords, setCoords] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 8
    const rotateX = -((e.clientY - rect.top) / rect.height - 0.5) * 8
    setCoords({ x, y, rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setCoords({ x: 50, y: 50, rotateX: 0, rotateY: 0 })
  }

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}
      style={{
        '--item-accent': accent || 'var(--accent)',
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProduct && onSelectProduct(product)}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt={`${name} fragrance bottle`} className={styles.image} loading="lazy" />
        <div
          className={styles.spotlight}
          style={{ background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)` }}
        />
        <span className={styles.categoryBadge}>{category}</span>
        {tag && <span className={styles.tagBadge}>{tag}</span>}
        {!inStock && <span className={styles.soldOutBanner}>Archived Batch</span>}
        <button
          type="button"
          className={styles.inspectBtn}
          onClick={(e) => {
            e.stopPropagation()
            onSelectProduct && onSelectProduct(product)
          }}
        >
          Inspect Accord
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <div>
            <span className={styles.catalogNumber}>NO. 0{id}</span>
            <h3 className={styles.name}>{name}</h3>
          </div>
          <span className={styles.price}>KES {price}</span>
        </div>
        <p className={styles.note}>{note}</p>

        <div className={styles.footer}>
          <div className={styles.scentBar}>
            <span className={styles.scentBarFill} />
          </div>
          <button
            type="button"
            className={`${styles.addBtn} ${!inStock ? styles.notifyBtn : ''}`}
            data-testid={'product-' + id}
            disabled={!inStock}
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart && onAddToCart(product)
            }}
          >
            {inStock ? <><span className={styles.btnIcon}>+</span> Add to Collection</> : 'Notify Next Batch'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
