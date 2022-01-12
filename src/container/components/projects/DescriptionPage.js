import React from 'react'
import { TechIcons } from '../../../constants/icons'

const DescriptionPage = ({ color = 'gray', projectDetails = {} }) => {
    const linksClasses = 'mx-2 sm:mx-4 text-sm md:text-base'

    return (
        <div className='h-screen md:p-16 p-5 sm:mt-0 flex flex-col justify-around '>
            <div className='my-4 md:px-28'>
                {
                    projectDetails.description &&
                    <div className='lg:w-8/12 mx-auto'>
                        <h2 className='text-2xl md:text-5xl font-Juana py-3'> Description </h2>
                        <p className='text-sm md:text-lg'>{projectDetails.description}</p>
                    </div>
                }
            </div>

            <div className='md:flex md:items-center md:justify-center'>
                {/* links */}
                <div className='md:mr-5 p-3'>
                    <h2 className='text-xl md:text-4xl font-Juana'>Links</h2>
                    <div className='pt-2'>
                        {
                            projectDetails.links.github &&
                            <a href={projectDetails.links.github} className='flex items-center'>
                                <TechIcons.GitIcon />
                                <span className={linksClasses}> See source code </span>
                            </a>
                        }
                        {
                            projectDetails.links.live &&
                            <a href={projectDetails.links.live} className='flex items-center'>
                                <TechIcons.Deploy />
                                <span className={linksClasses}> See in action </span>
                            </a>
                        }
                        {
                            projectDetails.links.playstore &&
                            <a href={projectDetails.links.playstore} className='flex items-center pl-2'>
                                <TechIcons.PlayStore />
                                <span className={linksClasses}> Playstore link </span>
                            </a>
                        }
                        {
                            projectDetails.links.ios &&
                            <a href={projectDetails.links.ios} className='flex items-center'>
                                <TechIcons.IOS />
                                <span className={linksClasses}> Apple Store link </span>
                            </a>
                        }
                    </div>
                </div>
                {/* tech used */}
                <div className='md:ml-5 md:p-3 p-1'>
                    {
                        projectDetails.techUsed &&
                        <div className='my-5 '>
                            <h2 className='text-xl md:text-4xl font-Juana '> Technologies Used </h2>
                            <p className='py-1 sm:py-3 flex flex-wrap'>
                                {
                                    projectDetails.techUsed.map((tech, i) => (<span className={'px-3 py-2 text-sm sm:text-base rounded rounded-full shadow m-2 text-white' + ' ' + ('bg-' + color + '-500')} key={'techUsed' + i}>{tech}</span>))
                                }
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default DescriptionPage