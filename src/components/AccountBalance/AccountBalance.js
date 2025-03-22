// src/components/AccountBalance.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from '../../context/AccountContext'; // Import the useAccount hook
import './AccountBalance.css'; // Import the CSS file for styling

function AccountBalance() {
  // Use the useAccount hook to access the balance from the context
  const { balance } = useAccount(); 

  return (
    <div className="account-balance">
      <h2>Your Account Balance</h2>
      <div className="balance-info">
        {/* Display the balance dynamically */}
        <p><strong>Balance:</strong> ₹{balance.toFixed(2)}</p>
        <p><strong>Account Type:</strong>Savings</p>
        <p><strong>Account Number:</strong> 1234-5678-9876</p>
        <p><strong>Bank:</strong> Indian Bank</p>
      </div>

      {/* Deposit and Withdraw Buttons */}
      <div className="actions">
        <Link to="/deposit">
          <button className="action-button deposit">Deposit</button>
        </Link>
        <Link to="/withdraw">
          <button className="action-button withdraw">Withdraw</button>
        </Link>
      </div>

      {/* Back to Dashboard Button */}
        <Link to="/dashboard" className="dashboard-link">
          <button className="back-button">Back</button> {/* Change class to back-button */}
        </Link>
    </div>
  );
}

export default AccountBalance;
