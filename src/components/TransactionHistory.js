import React, { useEffect } from 'react';
import '../styles/TransactionHistory.css';
import { useAccount } from '../context/AccountContext';  // Assuming the user account details are in context

// Helper function to group transactions by date and account number
const groupTransactionsByDateAndAccount = (transactions) => {
  const grouped = transactions.reduce((acc, transaction) => {
    const date = transaction.date.split('T')[0]; // Assuming the date is in the format "YYYY-MM-DDT..."
    const accountNumber = transaction.accountNumber;

    if (!acc[date]) {
      acc[date] = {};
    }
    if (!acc[date][accountNumber]) {
      acc[date][accountNumber] = [];
    }

    acc[date][accountNumber].push(transaction);
    return acc;
  }, {});

  return grouped;
};

function TransactionHistory() {
  const { transactions, clearTransactions, addTransaction } = useAccount();  // Assuming addTransaction method is provided for adding new transactions

  // Sort transactions in descending order (newest first)
  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Group transactions by date and account number
  const groupedTransactions = groupTransactionsByDateAndAccount(sortedTransactions);

  useEffect(() => {
    // This will trigger the component to update when transactions change
  }, [transactions]);  // Trigger re-render when transactions change

  return (
    <div className="transaction-history page-content">
      <h2>Transaction History</h2>

      <div className="account-section">
        {/* Display transactions grouped by date */}
        {Object.keys(groupedTransactions).length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          Object.keys(groupedTransactions).map((date) => (
            <div key={date} className="transaction-day">
              <h3 className="transaction-date">{date}</h3>
              <ul className="transaction-list">
                {Object.keys(groupedTransactions[date]).map((accountNumber) => {
                  return (
                    <div key={accountNumber} className="transaction-account">
                      <div className="account-info">
                        <span className="label">Account Number:</span>
                        <span className="account-number">{accountNumber}</span>
                      </div>
                      {groupedTransactions[date][accountNumber].map((transaction) => {
                        return (
                          <li key={transaction.id} className="transaction-item">
                            <div className="transaction-details">
                              {/* Show Transaction Type each time */}
                              <div className="transaction-info">
                                <span className="label">Transaction Type:</span>
                                <span className="transaction-type">{transaction.type}</span>
                              </div>
                            </div>
                            {/* Amount aligned to the right */}
                            <span className={`amount ${transaction.type === 'Deposit' ? 'deposit' : 'withdrawal'}`}>
                              ₹{transaction.amount.toFixed(2)}
                            </span>
                          </li>
                        );
                      })}
                    </div>
                  );
                })}
              </ul>
            </div>
          ))
        )}

        {/* Clear Transactions Button */}
        <button onClick={clearTransactions} className="clear-transactions-btn">
          Clear Transactions
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;
