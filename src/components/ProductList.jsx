import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/ProductList.module.css'

// The Valance "Pure Notes" library — each fragrance is named after the single
// accord that defines it. Categories map to fragrance families.
//
// NOTE: 'Apple' (Fruits) and 'Milk' (Gourmand) are required by the lab's test
// suite (src/__tests__/indexTest.js) — kept as real, on-brand catalog items
// rather than hidden fixtures.
export const sampleProducts = [
  {
    id: 1,
    name: 'Apple',
    price: '2000',
    category: 'Fruits',
    inStock: true,
    note: 'Crisp orchard fruit absolute, laced with pink pepper.',
    image:
      'https://images.unsplash.com/photo-1612871178341-33f941a841e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 2,
    name: 'Milk',
    price: '1200',
    category: 'Gourmand',
    inStock: true,
    note: 'Warm rice milk and blonde woods — skin-soft and quiet.',
    image:
      'https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 3,
    name: 'Vanilla',
    price: '1500',
    category: 'Gourmand',
    inStock: true,
    note: 'Bourbon vanilla absolute wrapped in smoked amber.',
    image:
      'https://images.unsplash.com/photo-1759848547378-d59542dcb935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 4,
    name: 'Rose',
    price: '1600',
    category: 'Florals',
    inStock: true,
    note: 'Bulgarian rose otto laid over damp green moss.',
    image:
      'https://images.unsplash.com/photo-1626872640220-e5f4454198b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 5,
    name: 'Oud',
    price: '2500',
    category: 'Woods',
    inStock: false,
    note: 'Smoked oud resin, worn leather, and dark honey.',
    image:
      'https://images.unsplash.com/photo-1643797517590-c44cb552ddcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 6,
    name: 'Sandalwood',
    price: '2000',
    category: 'Woods',
    inStock: true,
    note: 'Mysore sandalwood, fresh cream, and white musk.',
    image:
      'https://images.unsplash.com/photo-1761495726914-40e7f10842f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 7,
    name: 'Fig',
    price: '1800',
    category: 'Fruits',
    inStock: true,
    note: 'Green fig leaf, creamy coconut, and cedar shavings.',
    image:
      'https://images.unsplash.com/photo-1612871178341-33f941a841e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 8,
    name: 'Amber Musk',
    price: '1500',
    category: 'Musks',
    inStock: true,
    note: 'Warm ambergris accord over soft, close-to-skin musk.',
    image:
      'https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
]

const ProductList = ({ category = 'all', onAddToCart }) => {
  const filtered =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category)

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className="eyebrow">Pure Notes</span>
        <h2 className={styles.title}>Available Fragrances</h2>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No products available in this category.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
