import React from 'react';
import Navbar from './components/navbar';
import Home from './views/home';


export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar/>
        <Home />
      </div>
    </>
  );
}
