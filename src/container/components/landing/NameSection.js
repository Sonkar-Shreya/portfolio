import React, { createRef } from 'react'
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

	return (
		<div className='flex items-center h-full'>
			<div className='w-3/5 flex justify-center flex-col h-full pl-20 relative overflow-hidden'>
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
					<LargeChar char='i' />
					<LargeChar char='v' />
					<LargeChar char='e' />
					<LargeChar char='s' />
					<LargeChar char='h' />
					<LargeChar char='T' space />
					<LargeChar char='i' />
					<LargeChar char='w' />
					<LargeChar char='a' />
					<LargeChar char='r' />
					<LargeChar char='i' />
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
					<LargeChar char='E' space />
					<LargeChar char='n' />
					<LargeChar char='g' />
					<LargeChar char='i' />
					<LargeChar char='n' />
					<LargeChar char='e' />
					<LargeChar char='e' />
					<LargeChar char='r' />
					<FullStop classes=' mb-3' size={2} />
				</div>

				<div className='text-gray-800 py-5 text-xl font-Juana z-10 hoverable cursor-pointer'>
					<span> Full Stack Engineer </span>
					<span>&#127911;</span>
					<span> Competitive Programmer </span>
				</div>

				<div className='w-24 my-8 z-10'>
					<NavButton text='Contact Me' href='#contact' ref={createRef()} />
				</div>
			</div>

			<div className='w-2/5 flex justify-start'>
				<img src={EnhancedHii} className='w-4/5' />
			</div>
		</div>
	)
}

export default NameSection;
