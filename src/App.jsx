import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';

const App = () => {
  return (
    <div className='m-6'>
      <Header></Header>
        <Outlet></Outlet>
    </div>
  );
};

export default App;