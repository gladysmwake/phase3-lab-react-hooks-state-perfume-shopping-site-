import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, price, category, inStock, note, image } = product

  return (
    <article className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={`${name} fragrance bottle`}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.imageOverlay} />
        <span className={styles.categoryBadge}>{category}</span>
        {!inStock && <span className={styles.soldOutBanner}>Sold Out</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>{price}</span>
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
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            {inStock ? (
              <>
                <span className={styles.btnIcon}>+</span> Add to Cart
              </>
            ) : (
              'Notify Me'
            )}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
