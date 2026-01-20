import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const dayName = now.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
      const month = now.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
      const day = now.getDate()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM'
      
      const formatted = `${dayName} ${month} ${day} ${hours}:${minutes} ${ampm}`
      setDateTime(formatted)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default DateTime