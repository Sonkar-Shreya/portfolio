import React, { forwardRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const className = 'text-pink-500 block my-3 hover:text-yellow-500 active:text-yellow-600'

const NavButton = forwardRef(({href, text}, ref) => (
	<Link ref = {ref} to = {href} className = {className} > {text} </Link>
))

export default NavButton;
