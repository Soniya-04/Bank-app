// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import AccountBalance from './components/AccountBalance';
import BankServices from './components/BankServices';
import TransactionHistory from './components/TransactionHistory';
import Deposit from './components/Deposit';  // Import Deposit Component
import Withdraw from './components/Withdraw';  // Import Withdraw Component
import { useAuth } from './context/AuthContext';  // Import the AuthContext

function App() {
  const { user } = useAuth();  // Access the user state from context

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/account-balance" 
          element={user ? <AccountBalance /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/bank-services" 
          element={user ? <BankServices /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/transaction-history" 
          element={user ? <TransactionHistory /> : <Navigate to="/login" />} 
        />
        
        {/* Additional Routes for Deposit and Withdraw */}
        <Route 
          path="/deposit" 
          element={user ? <Deposit /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/withdraw" 
          element={user ? <Withdraw /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
