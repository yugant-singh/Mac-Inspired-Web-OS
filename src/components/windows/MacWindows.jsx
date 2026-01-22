import React from 'react'
import {Rnd} from 'react-rnd'
import './window.scss'
const MacWindows = (props) => {
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
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>

                </div>
                <div className="title"><p>yugantsingh - zsh</p></div>
                
            </div>
            <div className="main-content">
                {props.children}
            </div>
           

        </div>
    </Rnd>
  )
}

export default MacWindows