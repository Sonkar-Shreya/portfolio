import React, {
	createRef,
	useContext
} from 'react'

import ScrollSpy from 'react-scrollspy-navigation'

import {
	NavButton
} from '../'

const Navbar = () => {
	return (
		<div className = "absolute top-5 right-5">
			<ScrollSpy>
				<NavButton href = '/#home' text = 'Home' ref = {createRef()} />
				<NavButton href = '/#skills' text = 'Skills' ref = {createRef()} />
				<NavButton href = '/#projects' text = 'Projects' ref = {createRef()} />
				<NavButton href = '/#contact' text = 'Contact Me' ref = {createRef()} />
				<NavButton href = '/#resume' text = 'Resume' ref = {createRef()} />
			</ScrollSpy>
		</div>
	)
}

export default Navbar;
