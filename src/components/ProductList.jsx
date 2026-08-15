import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/ProductList.module.css'

export const sampleProducts = [
  {
    id: 1,
    name: 'Apple',
    price: '2000',
    category: 'Fruits',
    inStock: true,
    accent: '#8ea857',
    tag: 'Crisp & Radiant',
    note: 'Crisp orchard fruit absolute, laced with pink pepper.',
    pyramid: { top: 'Green Apple, Pink Pepper', heart: 'Apple Blossom, White Tea', base: 'Cedar, Clean Amber' },
    intensity: 'Medium · 6-8 hrs',
    pairWith: 'Sandalwood',
    image: 'https://images.unsplash.com/photo-1612871178341-33f941a841e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 2,
    name: 'Milk',
    price: '1200',
    category: 'Gourmand',
    inStock: true,
    accent: '#c4a682',
    tag: 'Skin-Soft & Quiet',
    note: 'Warm rice milk and blonde woods — skin-soft and quiet.',
    pyramid: { top: 'Steamed Rice, Oat Milk', heart: 'Toasted Almond, Silk Musk', base: 'Blonde Cedar, Cashmere' },
    intensity: 'Intimate · 5-7 hrs',
    pairWith: 'Vanilla',
    image: 'https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 3,
    name: 'Vanilla',
    price: '1500',
    category: 'Gourmand',
    inStock: true,
    accent: '#d99047',
    tag: 'Smoked & Opulent',
    note: 'Bourbon vanilla absolute wrapped in smoked amber.',
    pyramid: { top: 'Caramelized Sugar', heart: 'Madagascar Vanilla Pod', base: 'Smoked Resin, Benzoin' },
    intensity: 'High · 10+ hrs',
    pairWith: 'Oud',
    image: 'https://images.unsplash.com/photo-1759848547378-d59542dcb935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 4,
    name: 'Rose',
    price: '1600',
    category: 'Florals',
    inStock: true,
    accent: '#c26d78',
    tag: 'Botanical & Dewy',
    note: 'Bulgarian rose otto laid over damp green moss.',
    pyramid: { top: 'Dewy Petals, Bergamot', heart: 'Bulgarian Rose Otto', base: 'Earth Moss, Vetiver' },
    intensity: 'Moderate · 7-9 hrs',
    pairWith: 'Amber Musk',
    image: 'https://images.unsplash.com/photo-1626872640220-e5f4454198b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 5,
    name: 'Oud',
    price: '2500',
    category: 'Woods',
    inStock: false,
    accent: '#7a5438',
    tag: 'Smoky & Monumental',
    note: 'Smoked oud resin, worn leather, and dark honey.',
    pyramid: { top: 'Wild Thyme, Saffron', heart: 'Aged Agarwood (Oud)', base: 'Worn Leather, Dark Honey' },
    intensity: 'Extrait · 12+ hrs',
    pairWith: 'Vanilla',
    image: 'https://images.unsplash.com/photo-1643797517590-c44cb552ddcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 6,
    name: 'Sandalwood',
    price: '2000',
    category: 'Woods',
    inStock: true,
    accent: '#b58863',
    tag: 'Creamy & Meditative',
    note: 'Mysore sandalwood, fresh cream, and white musk.',
    pyramid: { top: 'Cardamom Pod, Fig Leaf', heart: 'Mysore Sandalwood Heart', base: 'White Musk, Papyrus' },
    intensity: 'Moderate · 8-10 hrs',
    pairWith: 'Apple',
    image: 'https://images.unsplash.com/photo-1761495726914-40e7f10842f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 7,
    name: 'Fig',
    price: '1800',
    category: 'Fruits',
    inStock: true,
    accent: '#648f70',
    tag: 'Verdant & Creamy',
    note: 'Green fig leaf, creamy coconut, and cedar shavings.',
    pyramid: { top: 'Crushed Fig Leaf, Mandarin', heart: 'Ripe Fig Flesh, Coconut Water', base: 'Cedar Bark, Dry Amber' },
    intensity: 'Moderate · 6-8 hrs',
    pairWith: 'Rose',
    image: 'https://images.unsplash.com/photo-1612871178341-33f941a841e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 8,
    name: 'Amber Musk',
    price: '1500',
    category: 'Musks',
    inStock: true,
    accent: '#caa058',
    tag: 'Luminous & Warm',
    note: 'Warm ambergris accord over soft, close-to-skin musk.',
    pyramid: { top: 'Ambrette Seed', heart: 'Luminous Solar Amber', base: 'Clean Skin Musk, Soft Cedar' },
    intensity: 'Subtle · 6-8 hrs',
    pairWith: 'Milk',
    image: 'https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
]

const ProductList = ({ category = 'all', onAddToCart, onSelectProduct }) => {
  const products = category === 'all'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === category)

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerTitles}>
          <span className="eyebrow">The Pure Notes Library</span>
          <h2 className={styles.title}>Current Exhibition</h2>
        </div>
        <p className={styles.subtitle}>
          Single-origin accords distilled without fillers. Click any piece to inspect its olfactory pyramid.
        </p>
      </div>

      {products.length === 0 ? (
        <p className={styles.empty}>No products available in this category.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
