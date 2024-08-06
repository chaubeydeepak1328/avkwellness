import React from 'react'
import Navbar from './Components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Page/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
