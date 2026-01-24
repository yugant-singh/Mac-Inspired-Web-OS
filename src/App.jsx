import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Github/>
      <Dock/>
      <Note/>
      <Resume/>
    <Spotify/>
    <Cli/>
    </main>
  )
}

export default App