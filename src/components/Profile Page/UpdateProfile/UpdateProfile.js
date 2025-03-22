import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Container to hold everything centered
const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  box-sizing: border-box;
`;

// Back button style
const BackButton = styled.button`
  margin-bottom: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-weight: bold;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

// Heading style
const Heading = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
`;

// Form container to align the fields vertically
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Label style
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #555;
  font-weight: 500;
`;

// Input field styling
const Input = styled.input`
  padding: 12px 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

// Submit button style
const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

// Dashboard link button style
const DashboardLinkButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  margin-bottom: 100px;

  }
`;

// Profile image styling
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  margin-left: 80px;
`;

function UpdateProfile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user ? user.name : '');  
  const [email, setEmail] = useState(user ? user.email : '');
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : ''); 
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || user?.profileImage || ''); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/profile');
    }
  }, [user, navigate]);

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
    const updatedUser = { name, email, phoneNumber, profileImage };
    updateProfile(updatedUser);
    navigate('/profile');
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>&#8592; Back</BackButton>
      
      <Heading>Update Profile</Heading>

      <Form onSubmit={handleSubmit}>
        <div>
          <ProfileImage 
            src={profileImage || '/placeholder-image.png'} 
            alt="Profile" 
          />
          <input 
            type="file" 
            onChange={handleImageChange} 
            accept="image/*"
            style={{ marginBottom: '20px' }}
          />
        </div>

        <div>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <SubmitButton type="submit">Save Changes</SubmitButton>
      </Form>

      <Link to="/dashboard" style={{ textDecoration: 'none', marginTop: '20px' }}>
        <DashboardLinkButton>Back to Dashboard</DashboardLinkButton>
      </Link>
    </Container>
  );
}

export default UpdateProfile;
