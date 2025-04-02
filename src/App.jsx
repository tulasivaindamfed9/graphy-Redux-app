import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import React from 'react';
import LandingPage from "./Components/LandingPage/LandingPage";
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home';
import Navbar from "./Components/Header/Navbar"

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPopupModal from './Components/LoginPopupModal/LoginPopupModal';


function App() {
  

  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<LoginPopupModal/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
