import React from 'react'
import './spotify.scss'
import MacWindows from './MacWindows.jsx'
const Spotify = () => {
  return (
    
    <MacWindows>
        <div className="spotify-box">
        

         <iframe data-testid="embed-iframe" style={{"border-radius":"12px"}} src="https://open.spotify.com/embed/playlist/0XViN0HyZ55Uc1GTQPXuos?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify