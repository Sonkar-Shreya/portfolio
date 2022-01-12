import React from 'react';
import PageRoutes from './routes'
import './App.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='fullScreenContainer relative '>
      <Router>
        <PageRoutes />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
