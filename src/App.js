import React from 'react';
import PageRoutes from './routes'
import './App.css'
import {
  Navbar,
} from './container/components/'

function App() {
  return (
    <div className='fullScreenContainer relative '>
      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;
