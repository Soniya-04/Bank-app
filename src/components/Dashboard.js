// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import'../styles/Dashboard.css';
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-buttons">
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/account-balance">
          <button>Account Balance</button>
        </Link>
        <Link to="/bank-services">
          <button>Bank Services</button>
        </Link>
        <Link to="/transaction-history">
          <button>Transaction History</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
