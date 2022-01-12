import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import endpoints from '../../utils/API/endpoints'
import { data } from '../../constants/'
import { 
    DescriptionPage, 
    Snapshots, 
    Team 
} from '../components'

const Project = () => {
    const { project } = useParams()
    const [projectDetails, setProjectDetails] = useState(data.projects[project])
    const color = projectDetails.style.color
    const teamMembers = projectDetails.team
    
    return (
        <div className='font-PlayFair'>
            {/* landing screen */}
            <div className={'h-screen flex flex-col relative items-center justify-center font-PlayFair tracking-wider text-gray-50 bg-' + color + '-500'}>
                <nav className='absolute top-5 left-5  md:top-10 md:left-10 md:w-24 p-0'>
                    <Link to={endpoints.slash} className='px-2 py-1 rounded-full md:px-3 md:py-2 border text-white font-bold tracking-widest shadow-sm shadow-gray-50 hover:shadow-white hover:shadow-md duration-300 easeInOut' >
                        Back
                    </Link>
                </nav>
                <p className='text-4xl md:text-9xl font-Juana p-3'>{projectDetails.title}</p>
                <p className='py-2 md:text-lg text-left'>{projectDetails.appType}</p>
            </div>

            {/* description screen */}
            <DescriptionPage color={color} projectDetails={projectDetails} />

            {/* <Snapshots projectDetails = {projectDetails} /> */}

            <Team className=' ' teamMembers={teamMembers} color={color} />
        </div>
    )
}

export default Project