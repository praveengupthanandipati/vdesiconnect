import React, { createContext, useContext, useState, useCallback } from 'react'
import { CartIcon } from '../components/Icons'

const ToastContext = createContext(null)

export const useToast = () => useContext(ToastContext)

let _id = 0

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((productName) => {
    const id = ++_id
    setToasts(prev => [...prev, { id, productName }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3200)
  }, [])

  const dismiss = (id) => setToasts(prev => prev.filter(t => t.id !== id))

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="toast-stack" aria-live="polite">
        {toasts.map(t => (
          <div key={t.id} className="toast">
            <div className="toast__icon">
              <CartIcon size={17} />
            </div>
            <div className="toast__body">
              <p className="toast__title">Product Added to Cart successfully</p>
              <p className="toast__msg">{t.productName}</p>
            </div>
            <button
              className="toast__close"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
            >
              ×
            </button>
            <span className="toast__progress" />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
