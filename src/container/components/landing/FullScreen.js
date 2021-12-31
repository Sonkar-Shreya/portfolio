import React from 'react'

const FullScreen = (props) => {
	return (
		<div className = 'h-screen snap-y snap-proximity overflow-y-scroll'>
			{props.children}
		</div>
	)
}

export default FullScreen
