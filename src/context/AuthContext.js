import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// AuthContext provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // User object, initially null
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [loading, setLoading] = useState(true); // Track if the app is still loading the user data

  useEffect(() => {
    // Check if the user is in localStorage on initial load
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Set user data from localStorage
      // Do not set isLoggedIn to true automatically here, we'll check after a successful login attempt
    }
    setLoading(false); // Done loading the user data
  }, []); // This runs once when the component mounts

  const login = ({ email, password }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);  // Set user state with the stored user
      setIsLoggedIn(true);   // Mark user as logged in
      return true; // Successful login
    }

    return false;  // Invalid credentials
  };

  const logout = () => {
    setUser(null);  // Clear user data from state
    setIsLoggedIn(false);  // Mark user as logged out
    // Do not clear localStorage, so user data remains in it
  };

  const updatePassword = (newPassword) => {
    if (user) {
      const updatedUser = { ...user, password: newPassword }; // Update password in user object
      setUser(updatedUser); // Update the user state
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Store updated user in localStorage
    }
  };

  const updateProfile = (updatedUserData) => {
    if (user) {
      const updatedUser = { ...user, ...updatedUserData }; // Update profile fields in user object
      setUser(updatedUser); // Update the user state
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Store updated user in localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, updatePassword, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
