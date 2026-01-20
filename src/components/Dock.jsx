import './dock.scss'

const Dock = () => {
    return (
        <footer className='dock'>
            <div className='icon github'><img src="public/docksvg/github.svg" alt="" /></div>
            <div className='icon note'><img src="public/docksvg/note.webp" alt="" /></div>
            <div className='icon pdf'><img src="public/docksvg/pdf.webp" alt="" /></div>
            <div className='icon  calender'><img src="public/docksvg/calender.webp" alt="" /></div>
            <div className='icon spotify'><img src="public/docksvg/Spotify_icon.svg.png" alt="" /></div>
            <div className='icon mail'><img src="public/docksvg/mail.webp" alt="" /></div>
            <div className='icon cli'><img src="public/docksvg/cli.webp" alt="" /></div>
            <div className='icon brave'><img src="/docksvg/brave.webp" alt="" /></div>

        </footer>
    )
}

export default Dock