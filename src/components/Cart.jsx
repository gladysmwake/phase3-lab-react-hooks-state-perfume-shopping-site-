import React from 'react'
import styles from '../styles/Cart.module.css'

const parsePrice = (price) => parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0

const Cart = ({ items = [] }) => {
  const count = items.length
  const subtotal = items.reduce((sum, item) => sum + parsePrice(item.price), 0)

  return (
    <section className={styles.wrap} aria-label="Shopping cart" id="cart">
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Shopping Cart</h2>
        <span className={styles.total}>{count} item{count === 1 ? '' : 's'}</span>
      </div>

      {items.length === 0 ? (
        <p className={styles.empty}>Your cart is empty —<br />add a note to begin.</p>
      ) : (
        <>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`} className={styles.item}>
                <span>{item.name} is in your cart.</span>
                <span className={styles.itemPrice}>{item.price}</span>
              </li>
            ))}
          </ul>

          <div className={styles.subtotalRow}>
            <span>Subtotal</span>
            <span className={styles.subtotalValue}>{subtotal.toFixed(2)}</span>
          </div>

          <button type="button" className={styles.checkoutBtn}>
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  )
}

export default Cart
