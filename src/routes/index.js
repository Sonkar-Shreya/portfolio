import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import endpoints from '../utils/API/endpoints';
import {
  Landing,
  Project
} from '../container/pages'

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={endpoints.slash} element={<Landing />} />
        <Route path={endpoints.project} element={<Project />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes
