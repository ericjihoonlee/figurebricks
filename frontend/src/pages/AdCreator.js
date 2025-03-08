import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdCreator.css';
import ImageUploader from '../components/ImageUploader';
import TextEditor from '../components/TextEditor';
import AdPreview from '../components/AdPreview';

const AdCreator = () => {
  const navigate = useNavigate();
  const [adData, setAdData] = useState({
    image: null,
    propertyTitle: 'Luxury Waterfront Home',
    beds: 3,
    baths: 2,
    sqft: 2000,
    price: 599000,
    platform: 'instagram'
  });

  const handleImageUpload = (imageFile) => {
    // Create URL for preview
    const imageUrl = URL.createObjectURL(imageFile);
    setAdData({...adData, image: imageUrl});
  };

  const handleTextChange = (field, value) => {
    setAdData({...adData, [field]: value});
  };

  const handleSave = () => {
    // In a real app, we'd save to a database here
    console.log('Saving ad:', adData);
    alert('Ad saved successfully!');
    navigate('/dashboard');
  };

  const handleExport = () => {
    // In a real app, we'd generate a downloadable file
    console.log('Exporting ad:', adData);
    alert('Ad exported! Check your downloads folder.');
  };

  return (
    <div className="ad-creator">
      <header className="creator-header">
        <h1>Create New Ad</h1>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => navigate('/dashboard')}>Cancel</button>
          <button className="btn-primary" onClick={handleSave}>Save Ad</button>
          <button className="btn-primary" onClick={handleExport}>Export</button>
        </div>
      </header>

      <div className="creator-content">
        <div className="editor-panel">
          <section className="upload-section">
            <h2>1. Upload Property Image</h2>
            <ImageUploader onImageUpload={handleImageUpload} />
          </section>

          <section className="text-section">
            <h2>2. Property Details</h2>
            <TextEditor adData={adData} onTextChange={handleTextChange} />
          </section>

          <section className="platform-section">
            <h2>3. Select Platform</h2>
            <div className="platform-options">
              <button 
                className={`platform-btn ${adData.platform === 'instagram' ? 'active' : ''}`}
                onClick={() => handleTextChange('platform', 'instagram')}
              >
                Instagram
              </button>
              <button 
                className={`platform-btn ${adData.platform === 'facebook' ? 'active' : ''}`}
                onClick={() => handleTextChange('platform', 'facebook')}
              >
                Facebook
              </button>
            </div>
          </section>
        </div>

        <div className="preview-panel">
          <h2>Ad Preview</h2>
          <AdPreview adData={adData} />
        </div>
      </div>
    </div>
  );
};

export default AdCreator; 