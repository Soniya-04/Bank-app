// src/components/Home/Home.js
import React, { useState } from 'react';
import './Home.css';
import Tour from '../Tour/Tour';  // Import the Tour component
import BankOffers from '../BankOffers/BankOffers'; // Import the BankOffers component

function Home() {
  const [isTourVisible, setIsTourVisible] = useState(false); // Track whether tour is visible or not

  const startTour = () => {
    setIsTourVisible(true); // Show the Tour component
  };

  const closeTour = () => {
    setIsTourVisible(false); // Hide the Tour component
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the Bank App</h1>
        <p>Explore your bank services.</p>

        {/* Start Tour Button */}
        <button onClick={startTour} className="start-tour-button">Start Tour</button>

        {/* Show Tour component if visible */}
        {isTourVisible && <Tour closeTour={closeTour} />}

        {/* Add BankOffers component below the Tour button */}
        <div className="bank-offers-section">
          <BankOffers />
        </div>
      </div>
    </div>
  );
}

export default Home;
