import React from 'react'

const LargeChar = ({char = '', space}) => {
	return (
		<div className = {'text-7xl z-10 font-FredericatheGreat text-gray-900 hover:text-red-600 hover:drop-shadow-lg hover:animate-pulse duration-50 ' + (space ? ' ml-3' : '')}>
			{char}
		</div>
	)
}

export default LargeChar;
