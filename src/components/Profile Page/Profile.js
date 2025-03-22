import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  // Import useAuth hook
import './Profile.css'; // Import the Profile.css file

function Profile() {
  const { user } = useAuth(); // Access the user data from context

  return (
    <div className="profile">
      <h2>Your Profile</h2>

      <div className="profile-info">
        {/* Image Section */}
        <div className="profile-image">
          {/* Placeholder image */}
          <img 
            src={user.profileImage || '/placeholder-image.png'} 
            alt="Profile" 
            width="150" 
            height="150"
            style={{ borderRadius: '50%' }}
          />
        </div>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.phoneNumber}</p> {/* Display phone number */}
        <p><strong>Registration Date:</strong> {user.registrationDate}</p>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <p>{user.recentActivity || 'No recent activity.'}</p>
      </div>

      <div className="profile-settings">
        <h3>Settings</h3>
        <ul>
          <li><Link to="/update-profile">Update Profile</Link></li>
          <li><Link to="/change-password">Change Password</Link> {/* Add link for password change */}</li>
        </ul>
      </div>

      <Link to="/dashboard">
        <button>Back </button>
      </Link>
    </div>
  );
}

export default Profile;
