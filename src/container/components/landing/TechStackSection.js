import React from 'react'
import {
	Developer,
	DeveloperCropped
} from '../../../constants/images'
import {
	Image,
	AboutMe,
	Technologies,
} from '../../components'

import {
	TechIcons
} from '../../../constants/icons'

import {
	data
} from '../../../constants'

const TechStackSection = () => {
	
	return (
		<div className='flex justify-around  relative h-full'>
			<div className='w-1/2 p-16 font-PlayFair flex items-center'>
				{/* <AboutMe /> */} 
				<Technologies technologies={data} />

			</div>
			<div className='w-1/2'>
				<Image img={DeveloperCropped} />
			</div>
		</div>
	)
}

// <a href='https://www.freepik.com/vectors/man'>Man vector created by upklyak - www.freepik.com</a>
export default TechStackSection;