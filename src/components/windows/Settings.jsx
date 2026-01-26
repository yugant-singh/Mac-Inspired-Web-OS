import React from 'react'
import MacWindows from './MacWindows'
import './settings.scss'

const Settings = ({ windowName, setOpenWindows, setWallpaper ,wallpaper }) => {

    const wallpapers = [
        '/wallpapers/macbook1.jpg',
        '/wallpapers/macbook2.jpg',
        '/wallpapers/macbook3.jpg',
        '/wallpapers/macbook4.jpg',
        '/wallpapers/macbook5.jpg'

    ]
    return (
        <MacWindows  windowName={windowName} setOpenWindows={setOpenWindows} >
            <div className='setting-window'>

                <h2>Choose Wallpaper</h2>
                <div className='wallpaper-box'>

                    {wallpapers.map((wall) => {
                        return <img key={wall} src={wall}
                            onClick={() => { setWallpaper(wall) }}
                            style={{
                               border: wallpaper === wall ? '3px solid lime' : '2px solid white'
                            }}
                        />

                    })}

                </div>
            </div>


        </MacWindows>
    )
}

export default Settings