// src/components/Profile Page/ChangePassword/ChangePassword.js
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Correctly importing useAuth
import './ChangePassword.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const ChangePassword = () => {
  const { updatePassword } = useAuth(); // Destructure updatePassword function from useAuth
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ChangePassword Component Rendered");

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Update the password in AuthContext and localStorage
    updatePassword(newPassword);
    alert('Password updated successfully');
  };

  return (
    <div className="change-password-container"> {/* Add this class to your outer div */}
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          placeholder="New Password" 
        />
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
        />
        {error && <p>{error}</p>}
        <button type="submit">Update Password</button>
        <div className="button-container">
          <Link to="/profile" className="profile-link">
            <button className="back-button">Back</button> {/* Change class to back-button */}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
