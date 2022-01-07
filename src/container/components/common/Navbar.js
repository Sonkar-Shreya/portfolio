import React, {
	createRef,
} from 'react'

import {
	NavButton
} from '../'

const Navbar = ({active = 2}) => {
	const classes = 'absolute top-12 right-24 flex flex-col z-10 w-28'
	return (
		<div className={classes}>
			<NavButton href="#home" ref={createRef()} text = 'Home' />
			<NavButton href="#skills" ref={createRef()} text = 'Skills' />
			<NavButton href="#projects" ref={createRef()} text = 'Projects' />
			<NavButton href="#whatElse" ref={createRef()} text = 'Thinks I Like' />
			<NavButton href="#contact" ref={createRef()} text = 'Contact' />
		</div>
	)
}

export default Navbar;
