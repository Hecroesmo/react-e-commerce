
import React from 'react';
import HomePage from './pages/homepage/homepage.component';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function Test(props) {
  console.log(props)
  return <h1>React Router Dom is sux</h1>
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
