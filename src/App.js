import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile Page/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import AccountBalance from './components/AccountBalance/AccountBalance';
import BankServices from './components/BankServices/BankServices';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Deposit from './components/Deposit/Deposit';
import Withdraw from './components/Withdraw/Withdraw';
import ChangePassword from './components/ChangePassword/ChangePassword';
import { AuthProvider, useAuth } from './context/AuthContext';
import Tour from './components/Tour/Tour';  // Import the Tour component

function App() {
  const [isTourVisible, setIsTourVisible] = useState(false); // Manage visibility of the tour page

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <RoutesWrapper 
          setIsTourVisible={setIsTourVisible} 
          isTourVisible={isTourVisible} 
        />
      </Router>
    </AuthProvider>
  );
}

function RoutesWrapper({ setIsTourVisible, isTourVisible }) {
  const { user, isLoggedIn } = useAuth();  // Use the authentication context

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home setIsTourVisible={setIsTourVisible} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/profile" 
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/update-profile" 
        element={isLoggedIn ? <UpdateProfile /> : <Navigate to="/login" />} 
      />
      <Route path="/account-balance" element={isLoggedIn ? <AccountBalance /> : <Navigate to="/login" />} />
      <Route path="/bank-services" element={isLoggedIn ? <BankServices /> : <Navigate to="/login" />} />
      <Route path="/transaction-history" element={isLoggedIn ? <TransactionHistory /> : <Navigate to="/login" />} />
      <Route 
        path="/deposit" 
        element={isLoggedIn ? <Deposit /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/withdraw" 
        element={isLoggedIn ? <Withdraw /> : <Navigate to="/login" />} 
      />
      
      {/* Add Change Password Route */}
      <Route 
        path="/change-password" 
        element={isLoggedIn ? <ChangePassword /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
}

export default App;
