// src/components/Deposit.js
import React, { useState } from 'react';
import { useAccount } from '../context/AccountContext';

function Deposit() {
  const { balance, deposit } = useAccount();
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    deposit(Number(amount));  // Call deposit to update balance
    alert(`You have successfully deposited $${amount}`);
  };

  return (
    <div className="deposit">
      <h2>Deposit Money</h2>
      <p>Current Balance: ${balance}</p>  {/* Displays the current balance */}
      <form onSubmit={handleDeposit}>
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
    </div>
  );
}

export default Deposit;
