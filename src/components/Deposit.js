import React, { useState } from 'react';
import { useAccount } from '../context/AccountContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Deposit.css';

function Deposit() {
  const { balance, deposit, accountNumber } = useAccount(); // Access balance and account number from context
  const [amount, setAmount] = useState('');
  const [accountNum, setAccountNum] = useState(accountNumber); // State to store the account number entered by the user
  const navigate = useNavigate(); // Use navigate for redirection

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    deposit(Number(amount), accountNum); // Pass account number along with the deposit amount
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

      <button onClick={() => navigate('/account-balance')}>Back to Account Balance</button>
    </div>
  );
}

export default Deposit;
