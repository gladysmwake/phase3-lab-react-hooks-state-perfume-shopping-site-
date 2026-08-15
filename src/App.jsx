import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DarkModeToggle from './components/DarkModeToggle'
import ProductList from './components/ProductList'
import ProductDetailModal from './components/ProductDetailModal'
import ScentStudio from './components/ScentStudio'
import BrandStory from './components/BrandStory'
import Cart from './components/Cart'
import CheckoutModal from './components/CheckoutModal'
import Footer from './components/Footer'
import styles from './styles/App.module.css'

const CATEGORIES = ['all', 'Fruits', 'Gourmand', 'Florals', 'Woods', 'Musks']

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')
  const [inspectingProduct, setInspectingProduct] = useState(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (product) => setCartItems((prev) => [...prev, product])

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove))
  }

  const clearCart = () => setCartItems([])

  return (
    <div className={`app-root ${isDark ? 'dark' : ''}`}>
      <Navbar
        cartCount={cartItems.length}
        darkModeSlot={<DarkModeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />}
      />

      <Hero />

      <main className="container" id="notes">
        <div className={styles.layout}>
          <div className={styles.catalog}>
            <div className={styles.filterRow}>
              <label htmlFor="category-filter" className={styles.filterLabel}>
                Filter by fragrance family
              </label>
              <select
                id="category-filter"
                className={styles.select}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c === 'all' ? 'All Notes' : c}
                  </option>
                ))}
              </select>
            </div>

            <ProductList
              category={category}
              onAddToCart={addToCart}
              onSelectProduct={setInspectingProduct}
            />
          </div>

          <aside className={styles.sidebar}>
            <Cart
              items={cartItems}
              onRemoveItem={removeFromCart}
              onCheckout={() => setIsCheckoutOpen(true)}
            />
          </aside>
        </div>
      </main>

      <ScentStudio onAddDuo={addToCart} />

      <BrandStory />

      <Footer />

      {inspectingProduct && (
        <ProductDetailModal
          product={inspectingProduct}
          onClose={() => setInspectingProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {isCheckoutOpen && (
        <CheckoutModal
          items={cartItems}
          onClose={() => setIsCheckoutOpen(false)}
          onClearCart={clearCart}
        />
      )}
    </div>
  )
}

export default App
