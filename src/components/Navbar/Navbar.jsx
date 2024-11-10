import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Music App</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/signup/artist">Sign Up as Artist</Link>
                <Link to="/signup/investor">Sign Up as Investor</Link>
            </div>
        </nav>
    );
}

export default Navbar;
