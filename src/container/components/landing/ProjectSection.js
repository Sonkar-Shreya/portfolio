import React from 'react'
import { Link } from 'react-router-dom'
import endpoints from '../../../utils/API/endpoints'
import {
	Carousel,
	CarouselItem
} from '../../components'
import {
	// kishori,
	// kishoriImage,
	// kishoriImage2,
	kishoriImage3,
} from '../../../constants/images'

const ProjectSection = () => {
	const projects = [
		{
			name: ['Hospitality','Management'],
			type: 'Web App',
			year: '2021-2022',
			// image: kishoriImage3,
			image: 'https://qph.fs.quoracdn.net/main-qimg-51cd92ea2452947e4a0f67a51a37c527',
			color: 'pink',
			shape: 'circle',
			link: endpoints.slash + endpoints.home + endpoints.slash + endpoints.project+endpoints.slash+endpoints.projects.guestTracker
		},
		{
			name: ['Parijana'],
			type: 'Website & Mobile App',
			year: '2021',
			image: 'https://qph.fs.quoracdn.net/main-qimg-51cd92ea2452947e4a0f67a51a37c527',
			color: 'purple',
			shape: 'square',
			link: endpoints.slash + endpoints.home + endpoints.slash + endpoints.project+endpoints.slash+endpoints.projects.parijana
		}
	]
	return (
		<div className='h-full flex flex-col justify-center p-16'>
			<h2 className="font-Juana text-4xl mt-3 mb-10 pb-3 w-44 border-b border-violet-500">Projects</h2>
			<div className='flex items-center justify-center'>
				<Carousel>
					{
						projects.map((project, key) => (
							<CarouselItem key={key}>
								<div className={'relative flex items-center font-PlayFair h-full'}>
									<div className={'absolute w-80 h-80 top-0 left-16 -z-50 bg-' + (project.color) + '-500 ' + (project.shape === 'circle' ? ' rounded-full' : '')} />
									<div className={'text-md text-gray-700 relative top-0 -left-12 mb-10'}>
										<h3 className='text-5xl text-gray-800 mb-10 w-52 break-normal '> {project.name.map((text)=> (
											<div>{text}</div>
										))} </h3>
										<p className='mb-0'> {project.type} </p>
										<p className='mb-3'> {project.year} </p>
										<Link className={'text-blue-500 hover:text-'+(project.color)+'-500 '} to={project.link}>View Project</Link>
									</div>
									<div className='mb-10'>
										<img src={project.image} className='w-80' />
									</div>
								</div>
							</CarouselItem>
						))
					}
				</Carousel>
			</div>
		</div>
	)
}

export default ProjectSection;
