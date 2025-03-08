import React from 'react';
import '../styles/AdPreview.css';

const AdPreview = ({ adData, isGenerated }) => {
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
              <span>{isGenerated ? "AI Generated Image" : "Upload an image"}</span>
            </div>
          )}
          
          {isGenerated && !adData.image && (
            <div className="ai-overlay">
              <span>AI Enhanced</span>
            </div>
          )}
        </div>
        <div className="preview-details">
          <h3>{adData.propertyTitle}</h3>
          <div className="property-specs">
            {adData.beds > 0 && <span>{adData.beds} Beds</span>}
            {adData.beds > 0 && adData.baths > 0 && <span>•</span>}
            {adData.baths > 0 && <span>{adData.baths} Baths</span>}
            {((adData.beds > 0 || adData.baths > 0) && adData.sqft > 0) && <span>•</span>}
            {adData.sqft > 0 && <span>{adData.sqft.toLocaleString()} sqft</span>}
          </div>
          {adData.price > 0 && (
            <div className="property-price">{formatPrice(adData.price)}</div>
          )}
          
          {isGenerated && (
            <div className="generated-description">
              {adData.description ? 
                <p>{adData.description}</p> : 
                <p>Beautiful property with amazing features and views.</p>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdPreview; 