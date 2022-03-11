import React from 'react'
import { Footer } from '..';
import {
	ButtonMailTo
} from '../'

const ContactSection = () => {
	const Links = {
		// insta: 'https://www.instagram.com/tshiv.esh/',
		linkedin: 'https://www.linkedin.com/in/shreya-sonkar-0476891a5/',
		github: 'https://github.com/Sonkar-Shreya'
	} 	
	return (
		<div className='flex justify-center items-center relative h-full'>
			<div className='w-1/2 h-8/12 p-16 font-PlayFair'>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.203124126494!2d80.3080275155778!3d26.416920883343657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c46527f403b6f%3A0x785d82cfec3602bf!2sO.P.%20CONSTRUCTIONS!5e0!3m2!1sen!2sin!4v1646717784498!5m2!1sen!2sin"  width={600} height={700} style={{border: 0}} allowFullScreen loading="lazy" />
			</div>
			<div className='w-1/2 p-16 font-PlayFair flex items-center'>
				<div className=''>
					<h2 className="font-Juana text-4xl mt-3 mb-10 pb-3 w-56 border-b border-violet-500">Contact Me</h2>
					<div>
						<p className='font-Juana'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the mail.</p>
						<div className='bg-violet-100 border border-violet-500 w-28 text-center px-4 py-2 my-5 shadow hover:shadow-lg hover:shadow-violet-300 hover:rounded cursor-pointer easeInOut duration-400'>
							<ButtonMailTo label={'Say Hello'} mailto={'mailto:stshandilya0820@gmail.com'} />
						</div>
					</div>

					<div className='my-20'>
						<p className='font-Juana'>Feeling Social? You can find me on these places too...</p>
						<div className='flex items-center mt-3'>
							<a href={Links.linkedin} className="">
								<svg className="w-7 h-7 hover:fill-sky-600" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} viewBox="0 0 24 24">
									<path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
									<circle cx={4} cy={4} r={2} stroke="none" />
								</svg>
							</a>
							<a href={Links.github} className="ml-3">
								<svg className='hover:fill-purple-700 w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 30 30"> <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
							</a>
							{/* <a href={Links.insta} className="ml-3 ">
								<svg className="w-7 h-7 hover:fill-pink-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
									<rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
								</svg>
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection;
