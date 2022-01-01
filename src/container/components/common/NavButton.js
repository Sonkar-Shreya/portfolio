import React, { forwardRef } from 'react';

const className = 'text-pink-500 block my-3 hover:text-yellow-500 active:text-yellow-600'

const NavButton = forwardRef(({href, text}, ref) => (
	<a ref = {ref} href = {'/'+href} className = {className} > {text} </a>
))

export default NavButton;
