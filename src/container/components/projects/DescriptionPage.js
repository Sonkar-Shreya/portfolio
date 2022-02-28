import React from 'react'
import { TechIcons } from '../../../constants/icons'

const DescriptionPage = ({ color = 'gray', projectDetails = {} }) => {
    const linksClasses = 'mx-2 sm:mx-4 text-sm md:text-base'

    const { github, live, playstore, ios } = projectDetails.links
    const iosAppLink = 'iOS app link'
    const androidAppLink = 'android app link'
    const deployed = 'see in action'
    const githubLink = 'see source code'
    const comingSoon = 'coming soon'

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
                    {
                        <div className='pt-2'>
                            {
                                // github &&
                                <a href={github ? github : ''} className='flex items-center'>
                                    <TechIcons.GitIcon />
                                    <span className={linksClasses}> {github ? githubLink : comingSoon} </span>
                                </a>
                            }
                            {
                                // live &&
                                <a href={live ? live : ''} className='flex items-center'>
                                    <TechIcons.Deploy />
                                    <span className={linksClasses}> {live ? deployed : comingSoon} </span>
                                </a>
                            }
                            {
                                // playstore &&
                                <a href={playstore ? playstore : ''} className='flex items-center pl-2'>
                                    <TechIcons.PlayStore />
                                    <span className={linksClasses}> {playstore ? androidAppLink : comingSoon} </span>
                                </a>
                            }
                            {
                                // ios &&
                                <a href={ios ? ios : ''} className='flex items-center'>
                                    <TechIcons.IOS />
                                    <span className={linksClasses}> { ios ? iosAppLink : comingSoon } </span>
                                </a>
                            }
                        </div>
                    }

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