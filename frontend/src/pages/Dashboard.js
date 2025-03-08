import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to access the dashboard.</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="user-info">
          <h1>Welcome, {user.name}</h1>
        </div>
        <div className="header-actions">
          <button className="create-ad-btn" onClick={() => navigate('/create')}>Create New Ad</button>
          <button className="logout-btn" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      </header>
      <div className="dashboard-content">
        <div className="recent-ads">
          <h2>Recent Ads</h2>
          <div className="ads-grid">
            {/* We'll add ad previews here later */}
            <div className="empty-state">
              No ads created yet. Click "Create New Ad" to get started!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 