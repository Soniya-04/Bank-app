// src/components/Withdraw.js
import React, { useState } from 'react';
import { useAccount } from '../../context/AccountContext';  // Access account context
import { useNavigate } from 'react-router-dom';
import './Deposit.css';


function Withdraw() {
  const { balance, withdraw } = useAccount();  // Get balance and withdraw function from AccountContext
  const [amount, setAmount] = useState('');  // Track the amount to withdraw
  const navigate = useNavigate();  // Use navigate for redirection

  // Handle withdrawal action
  const handleWithdraw = (e) => {
    e.preventDefault();  // Prevent page reload on form submission
    
    if (amount <= 0) {
      alert("Please enter a valid amount to withdraw.");
      return;
    }
    
    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }

    withdraw(Number(amount));  // Call withdraw function from context
    alert(`You have successfully withdrawn ₹${amount}`);  // Show confirmation message

     // Redirect to the account balance page after withdrawal
  };

  return (
    <div className="withdraw">
      <h2>Withdraw Money</h2>
      <p>Current Balance: ₹{balance}</p>  {/* Show current balance */}
      <form onSubmit={handleWithdraw}>  {/* Handle form submission */}
        <label htmlFor="amount">Amount to Withdraw:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}  // Update the amount state
          required
        />
        <button type="submit">Withdraw</button>
      </form>
      <button onClick={() => navigate('/account-balance')}>Back to Account Balance</button>
    </div>
  );
}


export default Withdraw;
