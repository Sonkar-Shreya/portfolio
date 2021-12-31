import React from 'react'

const LargeChar = ({char = '', space}) => {
	return (
		<div className = {'text-8xl font-FredericatheGreat text-gray-600 hover:text-yellow-400 hover:drop-shadow-lg hover:animate-pulse duration-50 ' + (space ? ' ml-3' : '')}>
			{char}
		</div>
	)
}

export default LargeChar;
