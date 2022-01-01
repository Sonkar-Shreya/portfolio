import React from 'react'

const SnapElement = ( props ) => {
	return (
		<div className = 'h-screen snap-start' id = {props.id}>
			{props.children}
		</div>
	)
}

export default SnapElement;
