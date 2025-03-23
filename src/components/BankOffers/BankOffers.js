
import React, { useState, useEffect } from 'react';
import './BankOffers.css';

function BankOffers() {
  const [offers, setOffers] = useState([]);
  const [showAllOffers, setShowAllOffers] = useState(false); // State to toggle offers visibility

  useEffect(() => {
    // Simulating fetching bank offers from an API
    const fetchedOffers = [
      { id: 1, title: "Earn 5% interest on savings account", description: "Open a new savings account and earn 5% interest annually." },
      { id: 2, title: "Get cashback on credit card payments", description: "Pay your credit card bill and earn cashback on your payments." },
      { id: 3, title: "Exclusive loan offers", description: "Avail loan with special interest rates for a limited period." },
      { id: 4, title: "Refer a friend and earn rewards", description: "Invite your friends to join and get rewarded when they sign up." }
   
   
    ];
    setOffers(fetchedOffers);
  }, []);

  const handleShowAllClick = () => {
    setShowAllOffers(true); // Show all offers when clicked
  };

  const handleCloseClick = () => {
    setShowAllOffers(false); // Hide offers and show the link again
  };

  return (
    <div className="bank-offers-container">
      {/* Limited Offer Disclaimer Link */}
      {!showAllOffers && (
        <p className="offer-disclaimer" onClick={handleShowAllClick} style={{ cursor: 'pointer', color: '#2980b9', fontSize: '2rem', fontWeight: 'bold' }}>
          🎉 Limited Offer! 🎉
        </p>
      )}

      {/* Show the close button (X) when offers are displayed */}
      {showAllOffers && (
        <button className="close-button" onClick={handleCloseClick}>X</button>
      )}

      {/* Display the list of offers after clicking the link */}
      {showAllOffers && (
        <div className="offers-list">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-item">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BankOffers;

