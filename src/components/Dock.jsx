import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './dock.scss'
import Spotify from './windows/Spotify';

const Dock = ({openWindows,setOpenWindows}) => {
    console.log(openWindows);
    
    return (
        <footer className='dock'>
            <div
             onClick={()=>{
                setOpenWindows(state=>({...state,github:true}))  
             }}
            className='icon github'><img src="/doc-icons/github.svg" alt="" /></div>
            <div
             onClick={()=>{
                setOpenWindows(state=>({...state,note:true}))  
             }}
            className='icon note'><img src="/doc-icons/note.svg" alt="" /></div>
            <div
             onClick={()=>{
                setOpenWindows(state=>({...state,resume:true}))  
             }}
            className='icon pdf'><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div className='icon  calender'><img src="/doc-icons/calender" alt="" /></div>
            <div
             onClick={()=>{
                setOpenWindows(state=>({...state,spotify:true}))  
             }}
            className='icon spotify'><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div className='icon mail'><img src="/doc-icons/mail.svg" alt="" /></div>
            <div 
             onClick={()=>{
                setOpenWindows(state=>({...state,cli:true}))  
             }}
            className='icon cli'><img src="/doc-icons/cli.svg" alt="" /></div>
            <div className='icon link'><img src="/doc-icons/link.svg" alt="" /></div>

        </footer>
    )
}

export default Dock