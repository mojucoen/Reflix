import React from 'react';
import './HogwartNavbar.css';
import { Link } from 'react-router-dom';

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-link">Home</div>
      </Link>
      <Link to="/catalog/0">
        <div  className="navbar-link">Catalog</div>
      </Link>

    </nav>
  );
}

export default HogwartNavbar;
