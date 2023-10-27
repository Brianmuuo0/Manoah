import React from 'react'
import Navbar from './Component/Navbar'
import Rout from './Component/rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Component/footer';
const App = () => {
  return (
    <>
    <BrowserRouter>
  <Navbar /> 
  <Rout /> 
  <Footer />
  </BrowserRouter>
    </>
  )
}

export default App