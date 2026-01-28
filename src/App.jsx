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
import ContextMenu from './components/ContextMenu'
import Toast from './components/Toast'
import LoadingScreen from './components/LoadingScreen'
import useKeyboardShortcuts from '../src/hooks/useKeyboardShortcuts'

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
  const [contextMenu, setContextMenu] = useState({
    show: false,
    x: 0,
    y: 0,

  })
const [toast, setToast] = useState({
    show: false,
    title: "",
    message: "",
    icon: ""
  })
  const [isloading, setIsloading] = useState(true);

  useKeyboardShortcuts(setOpenWindows, setToast)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000)

    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    const savedWallpaper = localStorage.getItem('portfolio-wallpaper')
    if (savedWallpaper) {
      setWallpaper(savedWallpaper)
    }



  }, [])
  

  useEffect(() => {
    const savedWallpaper = localStorage.setItem('portfolio-wallpaper', wallpaper)
  }, wallpaper)

  const rightContextMenu = (e) => {
    e.preventDefault()
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY
    })
  }

  const leftClick = () => {
    setContextMenu({
      show: false,
      x: 0,
      y: 0
    })
  }

  if (isloading) {
    return <LoadingScreen />
  }

  return (
    <main
      onContextMenu={(e) => {
        rightContextMenu(e)
      }}
      onClick={leftClick}
      style={
        {
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          transition: 'background-image 0.5s ease-in-out'
        }
      }>
      {contextMenu.show && <ContextMenu x={contextMenu.x} y={contextMenu.y} setOpenWindows={setOpenWindows} setToast={setToast} />}
      <Navbar />
      {openWindows.github && <Github windowName="github" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      <Dock openWindows={openWindows} setOpenWindows={setOpenWindows} />
      {openWindows.note && <Note windowName="note" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.resume && <Resume windowName="resume" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.spotify && <Spotify windowName="spotify" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.cli && <Cli windowName="cli" openWindows={openWindows} setOpenWindows={setOpenWindows} />}
      {openWindows.settings && <Settings windowName="settings" setWallpaper={setWallpaper} setOpenWindows={setOpenWindows} wallpaper={wallpaper} />}
      {toast.show && (
        <Toast
          title={toast.title}
          message={toast.message}
          icon={toast.icon}
          onClose={() => setToast({ show: false, title: '', message: '', icon: '' })}
        />
      )}
    </main>
  )
}

export default App