import React from 'react'
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import endpoints from '../utils/API/endpoints';
import {
  Landing,
  Project
} from '../container/pages'
import { AnimatePresence } from 'framer-motion';

function PageRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname} >
        <Route path={endpoints.slash} element={<Landing />} />
        <Route path={endpoints.project + '/:project'} element={<Project />} />
      </Routes>
    </AnimatePresence>
  )
}

export default PageRoutes
