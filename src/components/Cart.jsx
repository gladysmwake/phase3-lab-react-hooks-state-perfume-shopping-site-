import React from 'react'
import styles from '../styles/Cart.module.css'

const FREE_SHIPPING_THRESHOLD = 3500
const toNumber = (price) => parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0

const Cart = ({ items = [], onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + toNumber(item.price), 0)
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <section className={styles.wrap} aria-label="Shopping cart" id="cart">
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Shopping Cart</h2>
        <span className={styles.total}>
          {items.length} item{items.length === 1 ? '' : 's'}
        </span>
      </div>

      {items.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🧪</div>
          <p className={styles.empty}>Your curation is empty.<br />Select a pure accord from the exhibition to begin.</p>
        </div>
      ) : (
        <>
          <div className={styles.shippingMeter}>
            <div className={styles.meterText}>
              {remainingForFree === 0 ? (
                <span className={styles.freeAchieved}>✓ Complimentary courier dispatch unlocked</span>
              ) : (
                <span>Add KES {remainingForFree.toLocaleString()} for complimentary dispatch</span>
              )}
            </div>
            <div className={styles.meterTrack}>
              <div className={styles.meterFill} style={{ width: `${progress}%` }} />
            </div>
          </div>

          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={`${item.id}-${i}`} className={styles.item}>
                <div className={styles.itemInfo}>
                  {/* Exact text format required by test suites */}
                  <span className={styles.itemName}>{item.name} is in your cart.</span>
                  {item.selectedSize && <span className={styles.itemMeta}>{item.selectedSize}</span>}
                </div>
                <div className={styles.itemActions}>
                  <span className={styles.itemPrice}>KES {item.price}</span>
                  {onRemoveItem && (
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => onRemoveItem(i)}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <div className={styles.subtotalRow}>
              <span>Subtotal</span>
              <span className={styles.subtotalValue}>KES {subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.shippingRow}>
              <span>Shipping</span>
              <span className={styles.shippingValue}>
                {remainingForFree === 0 ? 'Complimentary' : 'Calculated at dispatch'}
              </span>
            </div>
          </div>

          <button
            type="button"
            className={styles.checkoutBtn}
            onClick={onCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  )
}

export default Cart
