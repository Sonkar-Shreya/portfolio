import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
	return (
		<Link
			to='#'
			onClick={(e) => {
				e.preventDefault()
				window.location = mailto
			}}
		>
			{label}
		</Link>
	);
};

export default ButtonMailto;
