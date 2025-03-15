import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';  // Import the CSS file

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email.endsWith('@gmail.com')) {
      setError('Please enter a valid Gmail address');
      return;
    }

    if (email === 'user@gmail.com' && password === 'password') {
      login({ email });
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
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
