import React, {
	createRef,
} from 'react'

import {
	NavButton
} from '../'
import endpoints from '../../../utils/API/endpoints'

const Navbar = ({active = 2}) => {
	const classes = 'absolute top-12 right-24 flex flex-col z-10 w-28'
	return (
		<div className={classes}>
			<NavButton href={`${endpoints.home + endpoints.slash}#home`} ref={createRef()} text = 'Home' />
			<NavButton href={`${endpoints.home + endpoints.slash}#skills`} ref={createRef()} text = 'Skills' />
			<NavButton href={`${endpoints.home + endpoints.slash}#projects`} ref={createRef()} text = 'Projects' />
			<NavButton href={`${endpoints.home + endpoints.slash}#contact`} ref={createRef()} text = 'Contact' />
		</div>
	)
}

export default Navbar;
