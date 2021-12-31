import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import endpoints from '../utils/API/endpoints';

import Wrapped from './wrapped'

function PageRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path={endpoints.slash + endpoints.login} element={<Login />} /> */}
        {/* <Route path='*' element={<Wrapped />} /> */}
      </Routes>
    </Router>
  )
}

export default PageRoutes
