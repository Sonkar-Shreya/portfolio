import React from 'react'
import { FullStop } from '../'
const CustomButton = ({
	color = 'pink',
	text = 'text'
}) => {

	// shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-green-500 hover:text-green-100
	const classes = 'text-lg font-Juana px-0 mx-0 py-2 text-center text-gray-700 link link-underline link-underline-black easeInOut duration-300 hoverable '
	const hoverClasses =  ' easeInOut duration-300'
	const result = [classes, hoverClasses]

	return (
		<div className={result}>
			{text}
		</div>
	)
}
export default CustomButton
