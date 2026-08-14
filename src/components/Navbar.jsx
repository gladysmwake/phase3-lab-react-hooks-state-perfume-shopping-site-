import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = ({ cartCount, darkModeSlot }) => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandGroup}>
          <a href="#" className={styles.wordmark}>VALANCE</a>
          <span className={styles.submark}>PARFUM LAB · KENYA</span>
        </div>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#notes">Pure Notes</a>
          <a href="#layering">Scent Studio</a>
          <a href="#philosophy">The Craft</a>
          <a href="#about">About</a>
        </nav>
        <div className={styles.actions}>
          {darkModeSlot}
          <a href="#cart" className={`${styles.cartPill} ${cartCount > 0 ? styles.cartActive : ''}`}>
            <span className={styles.cartIcon}>🛒</span> Cart · {cartCount}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
