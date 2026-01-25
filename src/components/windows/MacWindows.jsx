import React from 'react'
import {Rnd} from 'react-rnd'
import './window.scss'
const MacWindows =  ({ children, windowName ,openWindow,setOpenWindows}) => {
  return (
    <Rnd default={
        {
            width:"40vw",
            height:"40vh",
            x:300,
            y:200
        }
    }>
        <div className='window'>
            <div className="nave">
                <div className="dots">
                    <div 
                     onClick={()=>{
                setOpenWindows(state=>({...state,[windowName]:false}))  
             }}
                    className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>

                </div>
                <div className="title"><p>yugantsingh - zsh</p></div>
                
            </div>
            <div className="main-content">
                {children}
            </div>
           

        </div>
    </Rnd>
  )
}

export default MacWindows