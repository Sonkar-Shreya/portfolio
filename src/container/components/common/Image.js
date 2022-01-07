import React from 'react'

const Image = ({ img }) => {
	return (
		<div className = 'absolute w-1/2 top-0 right-0 h-full flex justify-start items-center'>
			<img src = {img} className = 'w-10/12' />
		</div>
	)
}

export default Image
