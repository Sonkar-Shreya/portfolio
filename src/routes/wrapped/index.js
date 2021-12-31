import React from 'react'
import {
	Routes,
	Route
} from "react-router-dom";

const Wrapped = () => {
	return (
		<div className='m-o p-0'>
			{/* <Navbar /> */}
				<Routes>
					{/* <Route path={endpoints.stats} element={<Stats />} /> */}
				</Routes>
			{/* <Footer /> */}
		</div>
	)
}

export default Wrapped