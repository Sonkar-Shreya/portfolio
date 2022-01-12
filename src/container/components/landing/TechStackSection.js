import React from 'react'
import { DeveloperCropped } from '../../../constants/images'
import { data } from '../../../constants'
import {
	Image,
	Technologies,
} from '../../components'

const TechStackSection = () => {
	return (
		<div className='flex justify-around relative h-full'>
			<div className='w-1/2 p-16 font-PlayFair flex items-center'>
				<Technologies technologies={data.technologies} />
			</div>
			<div className='w-1/2'>
				<Image img={DeveloperCropped} />
			</div>
		</div>
	)
}

// <a href='https://www.freepik.com/vectors/man'>Man vector created by upklyak - www.freepik.com</a>
export default TechStackSection;