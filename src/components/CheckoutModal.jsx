import React, { useState } from 'react'
import styles from '../styles/CheckoutModal.module.css'

const toNumber = (price) => parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0

const CheckoutModal = ({ items = [], onClose, onClearCart }) => {
  const [step, setStep] = useState('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Nairobi',
    payment: 'mpesa',
  })

  const subtotal = items.reduce((sum, item) => sum + toNumber(item.price), 0)
  const orderNumber = Math.floor(100000 + Math.random() * 900000)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep('confirmed')
    if (onClearCart) onClearCart()
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close checkout">
          ✕
        </button>

        {step === 'form' ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
              <span className="eyebrow">Valance Atelier Checkout</span>
              <h2 className={styles.title}>Secure Dispatch Order</h2>
              <p className={styles.sub}>
                {items.length} accord{items.length === 1 ? '' : 's'} · Total KES {subtotal.toLocaleString()}
              </p>
            </div>

            <div className={styles.fields}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="chk-name">Full Name</label>
                  <input
                    id="chk-name"
                    required
                    type="text"
                    placeholder="e.g. Elena Kimani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="chk-email">Email Address</label>
                  <input
                    id="chk-email"
                    required
                    type="email"
                    placeholder="elena@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="chk-phone">Phone / M-Pesa</label>
                  <input
                    id="chk-phone"
                    required
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="chk-city">Delivery Destination</label>
                  <input
                    id="chk-city"
                    required
                    type="text"
                    placeholder="Nairobi (Westlands / Karen / Kilimani...)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label>Payment Method</label>
                <div className={styles.paymentMethods}>
                  <label className={`${styles.paymentOpt} ${formData.payment === 'mpesa' ? styles.paymentActive : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={formData.payment === 'mpesa'}
                      onChange={() => setFormData({ ...formData, payment: 'mpesa' })}
                    />
                    <span>📱 M-Pesa Express</span>
                  </label>
                  <label className={`${styles.paymentOpt} ${formData.payment === 'card' ? styles.paymentActive : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === 'card'}
                      onChange={() => setFormData({ ...formData, payment: 'card' })}
                    />
                    <span>💳 Credit / Debit Card</span>
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.confirmBtn}>
              Confirm Dispatch · KES {subtotal.toLocaleString()}
            </button>
          </form>
        ) : (
          <div className={styles.confirmed}>
            <div className={styles.checkIcon}>✓</div>
            <span className="eyebrow">Order Placed</span>
            <h2 className={styles.title}>Dispatch Scheduled</h2>
            <p className={styles.confirmedText}>
              Thank you, {formData.name || 'valued collector'}. Your bespoke Valance flacons have entered the bottling queue under Order <strong>#VAL-{orderNumber}</strong>.
            </p>
            <div className={styles.receiptBox}>
              <div className={styles.receiptRow}>
                <span>Destination</span>
                <span>{formData.city}</span>
              </div>
              <div className={styles.receiptRow}>
                <span>Dispatch Method</span>
                <span>White-Glove Temperature Controlled</span>
              </div>
              <div className={styles.receiptRow}>
                <span>Paid via</span>
                <span>{formData.payment === 'mpesa' ? 'M-Pesa STK Push' : 'Credit Card'}</span>
              </div>
            </div>
            <button type="button" className={styles.confirmBtn} onClick={onClose}>
              Return to Gallery
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutModal
