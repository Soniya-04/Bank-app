import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { AccountProvider } from './context/AccountContext';  // Import AccountProvider

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root using the new API in React 18
const root = ReactDOM.createRoot(rootElement);

// Render your app inside the root element
root.render(
  <AuthProvider>
    <AccountProvider> {/* Wrap your app with AccountProvider */}
      <App />
    </AccountProvider>
  </AuthProvider>
);
