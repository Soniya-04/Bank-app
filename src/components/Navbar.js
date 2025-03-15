// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Import useAuth hook
import'../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();  // Access the user and logout from context

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Bank App</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* Conditionally render the login/logout button */}
        {user ? (
          <>
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
            <button onClick={logout}>Logout</button> {/* Logout when user is logged in */}
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>  {/* Login when no user is logged in */}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
