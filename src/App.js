import React from 'react'
import Navbar from './Components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Page/Home';
import About from "./Page/About";
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Programs from './Page/Programs';
import Contact from './Page/Contact';
import Services from './Page/Services';
import Teams from './Page/Teams';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/program" element={<Programs />} />
        <Route path="/our-team" element={<Teams />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
