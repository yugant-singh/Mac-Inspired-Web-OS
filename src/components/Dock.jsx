import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './dock.scss'
import Spotify from './windows/Spotify';
import Settings from './windows/Settings';

const Dock = ({ openWindows, setOpenWindows }) => {


   return (
      <footer className='dock'>
         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, github: true }))
            }}
            className='icon github'><img src="/doc-icons/github.svg" alt="" /></div>


         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, note: true }))
            }}
            className='icon note'><img src="/doc-icons/note.svg" alt="" /></div>
         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, resume: true }))
            }}
            className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>
         <div 
          onClick={()=>{
            window.open("https://calendar.google.com/calendar/u/0/r","_blank")
          }}
         className='icon  calender'><img src="/doc-icons/calender.svg" alt="" /></div>
         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, spotify: true }))
            }}
            className='icon spotify'><img src="/doc-icons/spotify.svg" alt="" /></div>
         <div 
         onClick={()=>{ window.open("mailto:yugantsingh9651@gmail.com","_blank")}}
          className='icon mail'><img src="/doc-icons/mail.svg" alt="" /></div>
         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, cli: true }))
            }}
            className='icon cli'><img src="/doc-icons/cli.svg" alt="" /></div>
         <div 
          
          onClick={()=>{
            window.open("https://www.linkedin.com/in/yugant-singh","_blank")
          }}
         className='icon link'><img src="/doc-icons/link.svg" alt="" /></div>


         <div
            onClick={() => {
               setOpenWindows(state => ({ ...state, settings: true }))
            }}
            className='icon settings'><img src="/doc-icons/apple-settings.svg" alt="" /></div>

      </footer>
   )
}

export default Dock