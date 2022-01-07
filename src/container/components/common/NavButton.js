import React, { forwardRef } from 'react';

const className = 'py-1 text-gray-700 block font-Juana hover:text-purple-500 hover:tracking-wider active:text-purple-600 easeInOut duration-300 link link-underline link-underline-black'

const NavButton = forwardRef(({href, text}, ref) => (
	<a ref = {ref} href = {'/'+href} className = {className} > {text} </a>
))

export default NavButton;
