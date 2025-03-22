import React, { createContext, useState, useContext, useEffect } from 'react';

const AccountContext = createContext();

export const useAccount = () => {
  return useContext(AccountContext);
};

export const AccountProvider = ({ children }) => {
  // Load balance and transactions from localStorage or set default values
  const storedBalance = parseFloat(localStorage.getItem('balance')) || 5000.00;
  const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

  const [balance, setBalance] = useState(storedBalance);
  const [transactions, setTransactions] = useState(storedTransactions);

  // Default account number for withdrawal transactions (primary account number)
  const defaultAccountNumber = '1234-5678-9876';

  // Update localStorage whenever balance or transactions change
  useEffect(() => {
    localStorage.setItem('balance', balance); // Store balance in localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions)); // Store transactions in localStorage
  }, [balance, transactions]);

  // Updated deposit function
  const deposit = (amount, accountNumber) => {
    let newBalance;

    if (accountNumber === defaultAccountNumber) {
      // If depositing into the same account, increase the balance
      newBalance = balance + amount;
    } else {
      // If depositing into a different account, deduct the amount (treat it as a withdrawal)
      newBalance = balance - amount;
    }

    // Update the balance
    setBalance(newBalance);

    // Create a new transaction object
    const newTransaction = {
      id: transactions.length + 1,
      type: accountNumber === defaultAccountNumber ? 'Deposit' : 'Deposit', // "Deduction" if the account is different
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      accountNumber: accountNumber, // The account number involved in the transaction
    };

    // Add the transaction to the transaction history (prepend to ensure latest transaction is first)
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  // Withdraw function (unchanged)
  const withdraw = (amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);

    const newTransaction = {
      id: transactions.length + 1,
      type: 'Withdrawal',
      amount,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      accountNumber: defaultAccountNumber, // Always use the default account number for withdrawals
    };

    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  // Clear transactions function
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
