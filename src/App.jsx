import { useState } from 'react'
import { Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App
