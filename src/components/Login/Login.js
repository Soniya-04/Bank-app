import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('Attempting to login...');

    // Check email and password validity
    if (!email.endsWith('@gmail.com')) {
      setError('Please enter a valid Gmail address');
      return;
    }

    const loginSuccess = login({ email, password });

    if (loginSuccess) {
      console.log('Login success');
      setError(''); // Clear any previous errors
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      console.log('Login failed');
      setError('Invalid credentials'); // Show error if login fails
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="login-input"
        />
        {error && <div className="login-error">{error}</div>}
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
