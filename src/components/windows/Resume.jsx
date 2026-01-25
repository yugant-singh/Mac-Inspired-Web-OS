import React from 'react'
import MacWindows from './MacWindows.jsx'
import './resume.scss'  
const Resume = ({windowName,setOpenWindows}) => {
  return (
    
    <MacWindows windowName={windowName} setOpenWindows={setOpenWindows}>
        <div className="resume-box">
<embed src="/resume.pdf" type="" />
        </div>
    </MacWindows>
  )
}

export default Resume