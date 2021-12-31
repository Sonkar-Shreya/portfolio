import React from 'react'
const CustomButton = ({
	color = 'pink',
	text = 'text'
}) => {

	// shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-green-500 hover:text-green-100
	const result = 'text-lg px-3 py-2 cursor-pointer text-center shadow-lg shadow-gray-400/20 bg-gray-200 text-gray-500 border border-gray-200 hover:shadow-yellow-700/40 hover:bg-yellow-400 hover:text-gray-700 easeInOut duration-300 hover:border-yellow-400'

	return (
		<div className={result}>
			{text}
		</div>
	)
}
export default CustomButton
