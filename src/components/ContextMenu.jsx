import React, { act } from 'react'
import './context.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'
import Spotify from './windows/Spotify'

const ContextMenu = ({ x, y ,setOpenWindows ,onclose,setToast }) => {
    const handleRefresh = ()=>{
        window.location.reload()
    }
    const openTerminal = ()=>{
        setOpenWindows(state=>({...state,cli:true}))  
    }
    const openGithub =()=>{
        setOpenWindows(state=>({...state,github:true})) 
    }
    const openResume= ()=>{
        setOpenWindows(state=>({...state, resume:true})) 
    }
  
    const openSpotify = ()=>{
        setOpenWindows(state=>({...state,spotify:true})) 
    }
    const openSettings = ()=>{
        setOpenWindows(state=>({...state,settings:true})) 
    }
    const openAbout = ()=>{
      setToast({
      show: true,
      title: 'About Me',
      message: "Hi! I'm Yugant Singh\n\nFull Stack Developer\nReact | Node.js | MongoDB\n\nPassionate about building awesome web experiences!",
      icon: 'ℹ️'
    })
    }

    const openContact = ()=>{
       setToast({
      show: true,
      title: 'Contact',
      message: "📧 yugantsingh9651@gmail.com\n💼 linkedin.com/in/yugantsingh\n🐙 github.com/yugantsingh",
      icon: '📧'
    })
    }
  const menuItems = [
    { icon: '🔄', label: 'Refresh',action:handleRefresh },
    { type: 'divider' },
    { icon: '💻', label: 'Open Terminal',action:openTerminal },
    { icon: '📁', label: 'View Projects',action:openGithub },
    { icon: '📄', label: 'View Resume',action:openResume },
    { icon: '🎵', label: 'Play Music',action:openSpotify },
    { type: 'divider' },
    { icon: '🎨', label: 'Change Wallpaper...',action:openSettings },
    { icon: 'ℹ️', label: 'About Me',action:openAbout },
    { icon: '📧', label: 'Contact',action:openContact }
  ]

  const handleItem = (action)=>{
    if(action){
        action();
    }
    onclose()

  }

  return (
    <div  className="context-menu" style={{ top: y, left: x }}>
      {menuItems.map((item, index) => {
        if (item.type === 'divider') {
          return <div key={index} className="divider"></div>
        }
        
        return (
          <div  onClick={()=>{
            handleItem(item.action)
          }} key={index} className="menu-item">
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ContextMenu