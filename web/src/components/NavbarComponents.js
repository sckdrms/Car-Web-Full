import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import P404 from './404Components'
import ReactFullpage from './FullpageComponent'
import '../css/navbar.css';
import logo from '../img/logo-1280x720.png';

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className='container'>
        <a href="/">        
          <img src={logo} className='logo' alt="logo" />
        </a>
        <ul>
          <li><a href="/#1">Home</a></li>
          <li><a href="/#1/1">Product</a></li>
          <li><a href="/#2">System</a></li>
          <li><a href="/#3">Introduce</a></li>
          <li><a href="/#4">Contact</a></li>
          <li><button className='loginbutton1'><a href="/#1">Log In</a></button></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<ReactFullpage></ReactFullpage>}></Route>
        <Route path='*' element={<P404></P404>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
