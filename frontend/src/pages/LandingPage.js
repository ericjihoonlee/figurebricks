import React from 'react';
import '../styles/LandingPage.css';
import HeroPreview from '../components/HeroPreview';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Figure Bricks</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <button onClick={() => navigate('/login')} className="btn-login">Log In</button>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Unlock the Future of Real Estate Marketing</h1>
          <p className="hero-subtitle">
            Transform your property listings into eye-catching social media ads with our AI-powered platform — deliver stunning visuals at scale and manage your entire marketing operation in one place.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/signup')} className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>1000+</h3>
              <p>Agents Using</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Ads Generated</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="hero-preview">
          <HeroPreview />
        </div>
      </div>

      <section id="features" className="features-section">
        <h2>One Platform To Power Your Real Estate Marketing</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Ad Creation</h3>
            <p>Generate professional ads in seconds with our advanced AI technology</p>
          </div>
          <div className="feature-card">
            <h3>Smart Templates</h3>
            <p>Access hundreds of pre-designed templates optimized for each platform</p>
          </div>
          <div className="feature-card">
            <h3>Brand Management</h3>
            <p>Keep your brand consistent across all marketing materials</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 