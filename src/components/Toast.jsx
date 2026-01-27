import React, { useEffect } from 'react'
import './toast.scss'

const Toast = ({ message, title, icon, onClose }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000) // 3 seconds baad auto-close
    
    return () => clearTimeout(timer)
  }, [onClose])
  
  return (
    <div className="toast">
      <div className="toast-header">
        <span className="toast-icon">{icon}</span>
        <span className="toast-title">{title}</span>
        <button className="toast-close" onClick={onClose}>×</button>
      </div>
      <div className="toast-message">
        {message}
      </div>
    </div>
  )
}

export default Toast