import { React, useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import P404 from './404Components'
import ReactFullpage from './FullpageComponent'
import '../css/navbar.css';
import logo from '../img/identify/logo-1280x720.png';

const Navbar = () => {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <BrowserRouter>
      <nav className='container'>
        <a href="/">        
          <img src={logo} className='logo' alt="logo" />
        </a>

        <ul className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
          <li onClick={toggleSidebar}><a href="/#"><svg style={{margin :'0px 49vw'}} xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
          <li onClick={toggleSidebar}><a href="/#1">Home</a></li>
          <li onClick={toggleSidebar}><a href="/#1/1">Product</a></li>
          <li onClick={toggleSidebar}><a href="/#2">System</a></li>
          <li onClick={toggleSidebar}><a href="/#3">Introduce</a></li>
          <li onClick={toggleSidebar}><a href="/#4">Contact</a></li>
        </ul>

        <ul>
          <li className='hideOnMobile'><a href="/#1">Home</a></li>
          <li className='hideOnMobile'><a href="/#1/1">Product</a></li>
          <li className='hideOnMobile'><a href="/#2">System</a></li>
          <li className='hideOnMobile'><a href="/#3">Introduce</a></li>
          <li className='hideOnMobile'><a href="/#4">Contact</a></li>
          <li className='hideOnMobile'><button className='loginbutton1'><a href="/#1">Log In</a></button></li>
          <li className='hideOnPC' onClick={toggleSidebar}><a href="#"><svg style={{margin :'-10px 0px'}} xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
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
