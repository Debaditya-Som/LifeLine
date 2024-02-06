import React from 'react';
import logo from '../assets/header.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <span className="title">LifeLine</span>
    </div>
  );
};

export default Header;

