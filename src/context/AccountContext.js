import React, { createContext, useState, useContext, useEffect } from 'react';

const AccountContext = createContext();

export const useAccount = () => {
  return useContext(AccountContext);
};

export const AccountProvider = ({ children }) => {
  // Load balance and transactions from localStorage or set default
  const storedBalance = parseFloat(localStorage.getItem('balance')) || 5000.00;
  const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

  const [balance, setBalance] = useState(storedBalance);
  const [transactions, setTransactions] = useState(storedTransactions);

  // Default account number for withdrawal transactions
  const defaultAccountNumber = '1234-5678-9876';

  // Update localStorage whenever balance or transactions change
  useEffect(() => {
    localStorage.setItem('balance', balance);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [balance, transactions]);

  const deposit = (amount, accountNumber) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
  
    // Add a deposit transaction with the provided account number
    const newTransaction = {
      id: transactions.length + 1,
      type: 'Deposit',
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      accountNumber: accountNumber,  // Use the account number passed in
    };
  
    // Prepend the new transaction to the beginning of the transactions list
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };
  
  const withdraw = (amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);
  
    // Add a withdrawal transaction with the default account number
    const newTransaction = {
      id: transactions.length + 1,
      type: 'Withdrawal',
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      accountNumber: defaultAccountNumber,  // Always use the default account number for withdrawals
    };
  
    // Prepend the new transaction to the beginning of the transactions list
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };
  
  // Clear Transactions function
  const clearTransactions = () => {
    setTransactions([]); // Clear transactions in state
    localStorage.removeItem('transactions'); // Remove transactions from localStorage
  };

  return (
    <AccountContext.Provider value={{ balance, transactions, deposit, withdraw, clearTransactions }}>
      {children}
    </AccountContext.Provider>
  );
};
