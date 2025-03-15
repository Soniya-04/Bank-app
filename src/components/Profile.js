// src/components/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css'; // Import the Profile.css file

function Profile() {
  // Example user data (you can fetch this dynamically from your backend or API)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    registrationDate: "January 15, 2022",
    recentActivity: "Logged in recently from mobile device",
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>

      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Registration Date:</strong> {user.registrationDate}</p>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <p>{user.recentActivity}</p>
      </div>

      <div className="profile-settings">
        <h3>Settings</h3>
        <ul>
          <li><Link to="/update-profile">Update Profile</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      </div>

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Profile;

