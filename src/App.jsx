import React, { useEffect, useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Settings from './components/windows/Settings'
const App = () => {
  const [openWindows, setOpenWindows] = useState({
    github: false,
    note: false,
    resume: false,
    cli: false,
    spotify: false,
    settings: false
  })

  const [wallpaper, setWallpaper] = useState('/wallpapers/macbook3.jpg')

  // useEffect(() => {
  //   const savedWallpaper = localStorage.getItem('portfolio-wallpaper')
  //   if (savedWallpaper) {
  //     setWallpaper(savedWallpaper)
  //   }
  //   console.log(savedWallpaper);


  // }, [])

  return (
    <main style={
      {
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        transition: 'background-image 0.5s ease-in-out'
      }
    }>
      <Navbar />
      {openWindows.github && <Github windowName="github" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      <Dock openWindows={openWindows} setOpenWindows={setOpenWindows} />
      {openWindows.note && <Note windowName="note" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.resume && <Resume windowName="resume" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.spotify && <Spotify windowName="spotify " openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.cli && <Cli windowName="cli" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.settings && <Settings windowName="settings" setWallpaper={setWallpaper} setOpenWindows={setOpenWindows} wallpaper={wallpaper} />}
    </main>
  )
}

export default App