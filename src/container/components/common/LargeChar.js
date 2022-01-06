import React from 'react'

const LargeChar = ({char = '', space}) => {
	return (
		<div className = {'text-7xl z-10 font-Coldiac text-gray-800 hover:drop-shadow-lg' + (space ? ' ml-3' : '')}>
			{char}
		</div>
	)
}

export default LargeChar;
