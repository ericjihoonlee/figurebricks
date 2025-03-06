import React from 'react';
import '../styles/HeroPreview.css';

const HeroPreview = () => {
  return (
    <div className="preview-card">
      <div className="preview-header">
        <h3>Sample Real Estate Ad</h3>
        <span className="preview-platform">Instagram Post</span>
      </div>
      <div className="preview-image">
        <div className="placeholder-image">
          <span>Luxury Waterfront Property</span>
        </div>
      </div>
      <div className="preview-details">
        <h4>Luxury Waterfront Home</h4>
        <div className="property-specs">
          <span>3 Beds</span>
          <span>•</span>
          <span>2 Baths</span>
          <span>•</span>
          <span>2,000 sqft</span>
        </div>
        <div className="price">$599,000</div>
        <div className="preview-actions">
          <button className="preview-btn">Generate Similar</button>
        </div>
      </div>
    </div>
  );
};

export default HeroPreview; 