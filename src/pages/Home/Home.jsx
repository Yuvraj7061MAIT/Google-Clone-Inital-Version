import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Home.css';
import Search from '../Search/Search';





const Home = () => {
  
  return (
    <div className='Home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>

      <div className="home__body">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        className="google-logo"
      />
        <Search/>
      </div>

      <footer className="home__footer">
        <p>India</p>
      </footer>
      
      <footer className="home__footer">
        <p>Business | How Search works</p>
      </footer>
    </div>
  );
}

export default Home;
