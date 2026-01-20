import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindows from './components/windows/MacWindows'
const App = () => {
  return (
    <main>
      <Navbar/>
      <MacWindows>
      
      </MacWindows>
      <Dock/>
    </main>
  )
}

export default App