// src/context/AccountContext.js
import React, { createContext, useState, useContext } from 'react';

const AccountContext = createContext();

export const useAccount = () => {
  return useContext(AccountContext);
};


export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(5000.00); // Example initial balance
  const [transactions, setTransactions] = useState([]); // To store the transaction history

  // Deposit function
  const deposit = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);

    // Add a deposit transaction
    const newTransaction = {
      id: transactions.length + 1,
      type: 'Deposit',
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    };
    setTransactions([...transactions, newTransaction]); // Add the new transaction to the list
  };

  // Withdraw function
  const withdraw = (amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);

    // Add a withdrawal transaction
    const newTransaction = {
      id: transactions.length + 1,
      type: 'Withdrawal',
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    };
    setTransactions([...transactions, newTransaction]); // Add the new transaction to the list
  };

  return (
    <AccountContext.Provider value={{ balance, transactions, deposit, withdraw }}>
      {children}
    </AccountContext.Provider>
  );
};
