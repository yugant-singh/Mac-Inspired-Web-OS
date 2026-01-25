import React from 'react'
import MacWindows from './MacWindows'
import gitData from '../../assets/Detail.json'
import './github.scss'


const GitCard = ({ data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: ""
}
}) => {
    return <div className='card'>
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className='tags'>
            {
                data.tags.map((tag) => {
                    return <p className='descrip'>{tag}</p>
                })
            }
        </div>
        <div className="url">
            <a target="_blank" href={data.repoLink}>Reposotry</a>
            <a href={data.demoLink}>{data.demoLink==null?"":"Demo Link "}</a>

        </div>

    </div>
}
const Github = ({windowName,openWindows ,setOpenWindows}) => {

    return (
        <MacWindows windowName={windowName} openWindows={openWindows} setOpenWindows={setOpenWindows}>
            <div className='cards'>
                {gitData.map((project) => {
                    return <GitCard data={project} />
                })}
            </div>
        </MacWindows>
    )
}

export default Github