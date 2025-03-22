import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Import useAuth hook
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout, isLoggedIn, loading } = useAuth();  // Access the user, logout, isLoggedIn, and loading state from context

  // Don't render anything until the user state is loaded (i.e., until loading is false)
  if (loading) {
    return null; // You can render a loading spinner here if you prefer
  }

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
        {isLoggedIn ? (
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
