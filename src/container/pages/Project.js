import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import endpoints from '../../utils/API/endpoints'
import { data } from '../../constants/'
import {
    DescriptionPage,
    Snapshots,
    Team
} from '../components'
import { 
    motion, 
    useTransform, 
    useViewportScroll 
} from 'framer-motion'

const Project = () => {
    const { project } = useParams()
    const [projectDetails, setProjectDetails] = useState(data.projects[project])
    const color = projectDetails.style.color
    const teamMembers = projectDetails.team

    const projectPageVariant = {
        hidden: {
            scale: 4,
            opacity: 0,
            height: '100vh',
        },
        show: {
            scale: 1,
            opacity: 1,
            height: '100vh',
        },
        exit: {
            scale: [1, 4, 1],
            opacity: 0,
            transition: {
                duration: 0.7
            }
        },
    }

    const [ffLayer, setFfLayer] = useState(0)
    const { scrollYProgress } = useViewportScroll()
    const scaleAnim = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1.2, 0.8])

    scrollYProgress.onChange(x => {
        setFfLayer(x > 0.4 ? -1 : 0)
    })

    return (
        <div className='font-PlayFair overflow-hidden'>
            {/* landing screen */}
            <motion.div
                variants={projectPageVariant}
                animate='show'
                initial='hidden'
                exit='exit'
                transition={{ duration: 0.5 }}
                style={{
                    scaleX: scaleAnim,
                    // y: yPosAnim,
                    // rotateZ: zRotAnim,
                }}

                className={'h-screen flex flex-col relative items-center justify-center font-PlayFair tracking-wider text-gray-50 bg-' + color + '-500'}>
                <nav className='absolute top-5 left-5  md:top-10 md:left-10 md:w-24 p-0'>
                    <Link to={endpoints.slash + endpoints.home} className='px-2 py-1 rounded-full md:px-3 md:py-2 border text-white font-bold tracking-widest shadow-sm shadow-gray-50 hover:shadow-white hover:shadow-md duration-300 easeInOut' >
                        Back
                    </Link>
                </nav>
                <p className='text-4xl md:text-9xl font-Juana p-3'>{projectDetails.title}</p>
                <p className='py-2 md:text-lg text-left'>{projectDetails.appType}</p>
            </motion.div>

            {/* description screen */}
            <DescriptionPage color={color} projectDetails={projectDetails} />

            <Snapshots color={color} snapshots = {projectDetails.image.snapshots} />

            <Team teamMembers={teamMembers} color={color} />
        </div>
    )
}

export default Project