import React from 'react'

const Image = ({ img }) => {
	return (
		<div className = 'absolute w-2/3 top-0 right-0 h-full'>
			<img src = {img} className = 'object-cover h-full w-full' />
		</div>
	)
}

export default Image
