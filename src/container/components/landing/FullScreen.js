import React from 'react'

const FullScreen = (props) => {
	return (
		<div className = 'h-screen snap-y overflow-y-scroll snap-proximity'>
			{props.children}
		</div>
	)
}

export default FullScreen
