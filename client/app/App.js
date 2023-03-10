import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Main from '../../src/components/Main';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Main/>
    </div>
  );
};

export default App;
