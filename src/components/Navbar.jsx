import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = ({ cartCount, darkModeSlot, onOpenCart }) => (
  <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.brandGroup}>
        <a href="#" className={styles.wordmark}>VALANCE</a>
        <span className={styles.submark}>PARFUM ATELIER · NAIROBI</span>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <a href="#notes">Collection</a>
        <a href="#studio">Mixology Studio</a>
        <a href="#craft">The Craft</a>
        <a href="#about">About</a>
      </nav>

      <div className={styles.actions}>
        {darkModeSlot}
        <a
          href="#cart"
          className={`${styles.cartPill} ${cartCount > 0 ? styles.cartActive : ''}`}
          onClick={onOpenCart}
        >
          <span className={styles.cartIcon}>🛒</span> Cart · {cartCount}
        </a>
      </div>
    </div>
  </header>
)

export default Navbar
