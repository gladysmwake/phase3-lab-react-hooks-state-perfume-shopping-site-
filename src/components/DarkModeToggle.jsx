import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button type="button" className={styles.toggle} onClick={onToggle}>
      <span className={styles.icon}>{isDark ? '☀️' : '🌙'}</span>
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
