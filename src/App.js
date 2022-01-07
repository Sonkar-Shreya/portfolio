import React from 'react';
import PageRoutes from './routes'
import './App.css'
import {
  Navbar,
} from './container/components/'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='fullScreenContainer relative '>
      <Navbar />
      <PageRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
