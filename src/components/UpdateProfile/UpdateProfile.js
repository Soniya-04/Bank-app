import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UpdateProfile.css'; // Import the CSS file for styling

function UpdateProfile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user ? user.name : '');  
  const [email, setEmail] = useState(user ? user.email : '');
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : ''); 
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || user?.profileImage || ''); 
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/profile');
    }
    // Scroll to the top of the page when the UpdateProfile component is loaded
    window.scrollTo(0, 0);  // This will scroll the page to the top
  }, [user, navigate]);

  // Email validation (ends with @gmail.com)
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid Gmail address ending with @gmail.com');
    } else {
      setEmailError('');
    }
  };

  // Phone number validation (exactly 10 digits, starting with a valid Indian mobile prefix)
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9, followed by 9 digits
    if (phoneNumber.length !== 10 || !phoneRegex.test(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit Indian phone number starting with 6-9');
    } else {
      setPhoneError('');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); 
        localStorage.setItem('profileImage', reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before updating the profile
    validateEmail(email);
    validatePhoneNumber(phoneNumber);

    if (emailError || phoneError) {
      // Prevent form submission if there are validation errors
      return;
    }

    const updatedUser = { name, email, phoneNumber, profileImage };
    updateProfile(updatedUser);
    navigate('/profile');
  };

  return (
    <div className="update-profile-container">
      <h2 className="heading">Update Profile</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="profile-image">
          <img 
            className="profile-image-img" 
            src={profileImage || '/placeholder-image.png'} 
            alt="Profile" 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <input 
            type="file" 
            onChange={handleImageChange} 
            accept="image/*"
            className="file-input"
          />
        </div>

        <div className="input-container">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);  // Validate email on change
            }}
            required
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className="input-container">
          <label className="label">Phone Number</label>
          <input
            className="input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              validatePhoneNumber(e.target.value);  // Validate phone number on change
            }}
            required
          />
          {phoneError && <div className="error-message">{phoneError}</div>}
        </div>

        <div className="button-container">
          <button type="submit" className="submit-button">Save Changes</button>
          <Link to="/profile" className="profile-link">
            <button className="back-button">Back</button> {/* Change class to back-button */}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
