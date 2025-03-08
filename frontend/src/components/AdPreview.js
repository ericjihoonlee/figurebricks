import React from 'react';
import '../styles/AdPreview.css';

const AdPreview = ({ adData }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={`ad-preview ${adData.platform}`}>
      <div className="preview-container">
        <div className="preview-image">
          {adData.image ? (
            <img src={adData.image} alt="Property" />
          ) : (
            <div className="placeholder-image">
              <span>Upload an image</span>
            </div>
          )}
        </div>
        <div className="preview-details">
          <h3>{adData.propertyTitle}</h3>
          <div className="property-specs">
            <span>{adData.beds} Beds</span>
            <span>•</span>
            <span>{adData.baths} Baths</span>
            <span>•</span>
            <span>{adData.sqft.toLocaleString()} sqft</span>
          </div>
          <div className="property-price">{formatPrice(adData.price)}</div>
        </div>
      </div>
    </div>
  );
};

export default AdPreview; 