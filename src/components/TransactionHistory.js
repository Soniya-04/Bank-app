import React from 'react';
import '../styles/TransactionHistory.css';
import { useAccount } from '../context/AccountContext';  // Assuming the user account details are in context

function TransactionHistory() {
  // Fetching account and transaction data from context
  const { balance, transactions, accountNumber } = useAccount();

  // Sample transaction data for multiple accounts (for other users)
  const otherAccounts = [
    {
      accountNumber: '1234-5678-9876',
      transactions: [
        { id: 1, type: 'Deposit', amount: 200.00, date: '2025-03-01' },
        { id: 2, type: 'Withdrawal', amount: 50.00, date: '2025-03-02' },
        { id: 3, type: 'Deposit', amount: 150.00, date: '2025-03-03' },
      ]
    },
    {
      accountNumber: '9876-5432-1122',
      transactions: [
        { id: 4, type: 'Deposit', amount: 1000.00, date: '2025-02-25' },
        { id: 5, type: 'Withdrawal', amount: 200.00, date: '2025-02-26' },
        { id: 6, type: 'Deposit', amount: 500.00, date: '2025-03-05' },
      ]
    },
    {
      accountNumber: '5678-9876-4321',
      transactions: [
        { id: 7, type: 'Deposit', amount: 300.00, date: '2025-03-03' },
        { id: 8, type: 'Withdrawal', amount: 150.00, date: '2025-03-04' },
        { id: 9, type: 'Deposit', amount: 450.00, date: '2025-03-06' },
      ]
    }
  ];

  return (
    <div className="transaction-history page-content">
      <h2><br></br>Transaction History</h2>

      {/* Display the logged-in user's account details */}
      <div className="account-section">
        <h3>Your Account Number: {accountNumber}</h3>
        <p>Current Balance: ${balance.toFixed(2)}</p>
        <ul className="transaction-list">
          {transactions.length === 0 ? (
            <li>No transactions available.</li>
          ) : (
            transactions.map((transaction) => (
              <li key={transaction.id} className="transaction-item">
                <span>{transaction.type} - {transaction.date}</span>
                <span className={`amount ${transaction.type === 'Deposit' ? 'deposit' : 'withdrawal'}`}>
                  ${transaction.amount.toFixed(2)}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Display other accounts' transaction history (for demo purposes) */}
      {otherAccounts.map((account) => (
        <div key={account.accountNumber} className="account-section">
          <h3>Account Number: {account.accountNumber}</h3>
          <ul className="transaction-list">
            {account.transactions.map((transaction) => (
              <li key={transaction.id} className="transaction-item">
                <span>{transaction.type} - {transaction.date}</span>
                <span className={`amount ${transaction.type === 'Deposit' ? 'deposit' : 'withdrawal'}`}>
                  ${transaction.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TransactionHistory;
