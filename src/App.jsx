import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import './App.css'
import Navbar from "./components/nav"
import About from './components/About'
import Remedies from './components/Remedies'
import Contact from './components/Contact'
import Login from './components/login'
import Home from './components/Home'
import Footer from './components/Footer';
function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Remedies" element={<Remedies/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
       
      </Routes>
      <Footer/>
    </Router>
   
    </>
  )
}

export default App
