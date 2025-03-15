// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import'../styles/Home.css';
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Bank App</h1>
        <p>Explore your bank services</p>
      </div>
    </div>
  );
}

export default Home;
