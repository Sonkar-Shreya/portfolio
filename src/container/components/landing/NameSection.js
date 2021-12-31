import React from 'react'
import {
	LargeChar,
	CustomButton,
} from '../'

const NameSection = () => {
	const singleLineClass = 'flex my-1';

	return (
		<div className = 'flex justify-center flex-col h-full px-16 bg-white'>
			<div className  = {singleLineClass}>
				<LargeChar char = 'H' />
				<LargeChar char = 'i' />
				<LargeChar char = '!' />
				<LargeChar char = ',' />
			</div>

			<div className = {singleLineClass}>
				<LargeChar char = 'I' />
				<LargeChar char = "'"/>
				<LargeChar char = 'm' />
				<LargeChar char = 'S' space />
				<LargeChar char = 'h' />
				<LargeChar char = 'i' />
				<LargeChar char = 'v' />
				<LargeChar char = 'e' />
				<LargeChar char = 's' />
				<LargeChar char = 'h' />
				<LargeChar char = 'T' space />
				<LargeChar char = 'i' />
				<LargeChar char = 'w' />
				<LargeChar char = 'a' />
				<LargeChar char = 'r' />
				<LargeChar char = 'i' />
				<LargeChar char = ',' />
			</div>

			<div className = {singleLineClass}>
				<LargeChar char = 'S'/>
				<LargeChar char = 'o'/>
				<LargeChar char = 'f'/>
				<LargeChar char = 't'/>
				<LargeChar char = 'w'/>
				<LargeChar char = 'a'/>
				<LargeChar char = 'r'/>
				<LargeChar char = 'e'/>
				<LargeChar char = 'E' space/>
				<LargeChar char = 'n'/>
				<LargeChar char = 'g'/>
				<LargeChar char = 'i'/>
				<LargeChar char = 'n'/>
				<LargeChar char = 'e'/>
				<LargeChar char = 'e'/>
				<LargeChar char = 'r'/>
			</div>

			<div className = 'text-gray-500 py-5 text-xl font-PlayFair'>
				<span> Full-Stack Engineer </span>
				<i className = "text-sm text-yellow-500">&#10038;</i>
				<span> Competitive Programmer </span>
			</div>

			<div className = 'w-48 my-8'>
				<CustomButton text = 'Contact Me' />
			</div>
		</div>
	)
}

export default NameSection;
