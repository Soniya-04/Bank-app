import React, { useState } from 'react';
import { useAccount } from '../../context/AccountContext';
import { useNavigate } from 'react-router-dom';
import './Deposit.css';

function Deposit() {
  const { balance, deposit, accountNumber } = useAccount(); // Access balance and account number from context
  const [amount, setAmount] = useState('');
  const [accountNum, setAccountNum] = useState(accountNumber || ''); // State to store the account number entered by the user
  const navigate = useNavigate(); // Use navigate for redirection

  const handleDeposit = (e) => {
    e.preventDefault();

    // Validate deposit amount
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Call deposit function with amount and account number
    deposit(Number(amount), accountNum);
    
    // Inform the user of the success
    alert(`You have successfully deposited ₹${amount} to account ${accountNum}`);
  };

  return (
    <div className="deposit">
      <h2>Deposit Money</h2>
      <p>Current Balance: ₹{balance}</p>
      
      {/* Add account number input field */}
      <form onSubmit={handleDeposit}>
        <label htmlFor="accountNum">Account Number:</label>
        <input
          type="text"
          id="accountNum"
          value={accountNum}
          onChange={(e) => setAccountNum(e.target.value)}  // Update account number state
          required
        />
        
        <label htmlFor="amount">Amount to Deposit:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        
        <button type="submit">Deposit</button>
      </form>

      {/* Back to Account Balance button */}
      <button onClick={() => navigate('/account-balance')}>Back to Account Balance</button>
    </div>
  );
}

export default Deposit;
