import React from 'react';
import PageRoutes from './routes'
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='fullScreenContainer relative '>
      <PageRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
