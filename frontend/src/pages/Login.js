import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (isAuthenticated && !isLoading) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to Figure Bricks</h1>
        <p>Please log in to continue to your dashboard</p>
        <button 
          className="login-button" 
          onClick={() => loginWithRedirect()}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Log In with Auth0'}
        </button>
      </div>
    </div>
  );
};

export default Login; 