import React, {
	createRef,
} from 'react'

const Navbar = ({active = 2}) => {
	const classes = 'w-10 bg-gray-800 h-1 border-gray-800 my-4 rounded-r-full easeInOut duration-300'
	return (
		<div className='absolute top-1/3 left-0 flex flex-col z-10'>
			<a href="/#home" ref={createRef()}>
				<div className = {classes + (active === 1 ? ' w-14' : '') } />
			</a>
			<a href="/#skills" ref={createRef()}>
				<div className = {classes + (active === 2 ? ' w-14' : '') } />
			</a>
			<a href="/#projects" ref={createRef()}>
				<div className = {classes + (active === 3 ? ' w-14' : '') } />
			</a>
			<a href = '/#contact' ref = {createRef()}> 
				<div className = {classes + (active === 4 ? ' w-14' : '') } />
			</a>
		</div>
	)
}

export default Navbar;
