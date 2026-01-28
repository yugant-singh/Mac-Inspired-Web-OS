import { useEffect } from 'react'
import Spotify from '../components/windows/Spotify'

const useKeyboardShortcuts = (setOpenWindows, setToast) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
            const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey



            if (ctrlOrCmd && e.key === 'k') {
                e.preventDefault()
                setOpenWindows(state => ({
                    ...state,
                    cli: { open: true, minimized: false }  // ← FIXED!
                }))
            }

            // Ctrl/Cmd + G → GitHub
            if (ctrlOrCmd && e.key === 'g') {
                e.preventDefault()
                setOpenWindows(state => ({
                    ...state,
                    github: { open: true, minimized: false }
                }))
            }

            // Ctrl/Cmd + R → Resume
            if (ctrlOrCmd && e.key === 'r') {
                e.preventDefault()
                setOpenWindows(state => ({
                    ...state,
                    resume: { open: true, minimized: false }
                }))
            }

            // Ctrl/Cmd + S → Settings
            if (ctrlOrCmd && e.key === 's') {
                e.preventDefault()
                setOpenWindows(state => ({
                    ...state,
                    settings: { open: true, minimized: false }
                }))
            }


             if (ctrlOrCmd && e.key === 'm') {
                e.preventDefault()
                setOpenWindows(state => ({
                    ...state,
                    spotify:true
                }))
            }
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [setOpenWindows])
}

export default useKeyboardShortcuts