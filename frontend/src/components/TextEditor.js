import React from 'react';
import '../styles/TextEditor.css';

const TextEditor = ({ adData, onTextChange }) => {
  return (
    <div className="text-editor">
      <div className="form-group">
        <label htmlFor="propertyTitle">Property Title</label>
        <input
          type="text"
          id="propertyTitle"
          value={adData.propertyTitle}
          onChange={(e) => onTextChange('propertyTitle', e.target.value)}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="beds">Beds</label>
          <input
            type="number"
            id="beds"
            value={adData.beds}
            onChange={(e) => onTextChange('beds', parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="baths">Baths</label>
          <input
            type="number"
            id="baths"
            value={adData.baths}
            onChange={(e) => onTextChange('baths', parseInt(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sqft">Square Feet</label>
          <input
            type="number"
            id="sqft"
            value={adData.sqft}
            onChange={(e) => onTextChange('sqft', parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price ($)</label>
        <input
          type="number"
          id="price"
          value={adData.price}
          onChange={(e) => onTextChange('price', parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default TextEditor; 