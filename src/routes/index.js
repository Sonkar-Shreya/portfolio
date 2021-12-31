import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import endpoints from '../utils/API/endpoints';

import Landing from '../container/pages/Landing'

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={endpoints.slash} element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes
