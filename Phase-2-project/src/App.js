import React from 'react';
import Navbar from './components/pages/Navbar';
import './Style/App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/pages/Footer';

function App() {
  return (
    <>
      < Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' component={Navbar} />
        <Route path='/About' component={About} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
<Footer />
  </>
);
}

export default App;   