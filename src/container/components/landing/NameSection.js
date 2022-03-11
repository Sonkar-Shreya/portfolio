import React, { createRef } from 'react'
import { motion } from 'framer-motion'
import {
	LargeChar,
	FullStop,
	NavButton,
} from '../'
import {
	EnhancedHii
} from '../../../constants/images'

const NameSection = () => {
	const singleLineClass = 'flex my-1 items-end ';

	const nameSectionVariant = {
		hidden: { 
			opacity: 0,
			scale: 0.1
		},
		show: { 
			scale: 1,
			opacity: 1,
			// rotate: 360, 
		},
		
	}
	
	return (
		<div className='flex items-center h-full'>
			<motion.div 
				animate={'show'}
				key={'somethingnew'}
				variants={nameSectionVariant}
				// transition={{ duration: 0.7 }}
				// animate={{ rotate: 360 }}
				transition={{ duration: 2 }}
				className='w-3/5 flex justify-center flex-col h-full pl-20 relative overflow-hidden'
			>
				<div className={singleLineClass}>
					<LargeChar char='H' />
					<LargeChar char='i' />
					<LargeChar char='!' />
					<LargeChar char=',' />
				</div>

				<div className={singleLineClass}>
					<LargeChar char='I' />
					<LargeChar char="'" />
					<LargeChar char='m' />
					<LargeChar char='S' space />
					<LargeChar char='h' />
					<LargeChar char='r' />
					<LargeChar char='e' />
					<LargeChar char='y' />
					<LargeChar char='a' />
					{/* <LargeChar char='S' /> */}
					<LargeChar char='S' space />
					<LargeChar char='o' />
					<LargeChar char='n' />
					<LargeChar char='k' />
					<LargeChar char='a' />
					<LargeChar char='r' />
					<LargeChar char=',' />
				</div>

				<div className={singleLineClass}>
					<LargeChar char='S' />
					<LargeChar char='o' />
					<LargeChar char='f' />
					<LargeChar char='t' />
					<LargeChar char='w' />
					<LargeChar char='a' />
					<LargeChar char='r' />
					<LargeChar char='e' />
					<LargeChar char='D' space />
					<LargeChar char='e' />
					<LargeChar char='v' />
					<LargeChar char='e' />
					<LargeChar char='l' />
					<LargeChar char='o' />
					<LargeChar char='p' />
					<LargeChar char='e' />
					<LargeChar char='r' />
					<FullStop classes=' mb-3' size={2} />
				</div>

				<div className='text-gray-800 py-5 text-xl font-Juana z-10 hoverable cursor-pointer'>
					<span> Backend Developer </span>
					<span>&#127911;</span>
					<span> Competitive Programmer </span>
				</div>

				<div className='w-24 my-8 z-10'>
					<NavButton text='Contact Me' href='#contact' ref={createRef()} />
				</div>
			</motion.div>

			<div className='w-2/5 flex justify-start'>
				<img src={EnhancedHii} className='w-4/5' />
			</div>
		</div>
	)
}

export default NameSection;
