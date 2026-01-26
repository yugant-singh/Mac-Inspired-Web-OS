import React from 'react'
import MacWindows from './MacWindows'

const Settings = ({ windowName, setOpenWindows, setWallpaper ,wallpaper }) => {

    const wallpapers = [
        '/wallpapers/macbook1.jpg',
        '/wallpapers/macbook2.jpg',
        '/wallpapers/macbook3.jpg',
        '/wallpapers/macbook4.jpg',
        '/wallpapers/macbook5.jpg'

    ]
    return (
        <MacWindows windowName={windowName} setOpenWindows={setOpenWindows} >
            <div style={{ padding: "20px" }}>

                <h2>Choose Wallpaper</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px'

                }}>

                    {wallpapers.map((wall) => {
                        return <img key={wall} src={wall}
                            onClick={() => { setWallpaper(wall) }}
                            style={{
                                width: '100%',
                                height: '100px',
                                objectFit: 'cover',
                                cursor: 'pointer',
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