import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdCreator.css';
import ImageUploader from '../components/ImageUploader';
import TextEditor from '../components/TextEditor';
import AdPreview from '../components/AdPreview';

// Sample AI-generated images for demo purposes
const sampleImages = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000'
];

const AdCreator = () => {
  const navigate = useNavigate();
  const [adData, setAdData] = useState({
    image: null,
    propertyTitle: 'Luxury Waterfront Home',
    beds: 3,
    baths: 2,
    sqft: 2000,
    price: 599000,
    platform: 'instagram',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [savedAds, setSavedAds] = useState([]);

  const handleImageUpload = (imageFile) => {
    // Create URL for preview
    const imageUrl = URL.createObjectURL(imageFile);
    setAdData({...adData, image: imageUrl});
  };

  const handleTextChange = (field, value) => {
    setAdData({...adData, [field]: value});
  };

  const generateAd = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate AI generation with progress updates
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setIsGenerated(true);
          
          // Select a random sample image to simulate AI generation
          const randomIndex = Math.floor(Math.random() * sampleImages.length);
          setGeneratedImage(sampleImages[randomIndex]);
          
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleSave = () => {
    if (!isGenerated) {
      alert('Please generate an ad first!');
      return;
    }
    
    // In a real app, we'd save to a database here
    const newAd = { 
      ...adData, 
      id: Date.now(),
      generatedImage: generatedImage 
    };
    
    const updatedAds = [...savedAds, newAd];
    setSavedAds(updatedAds);
    
    // Store in localStorage for persistence
    localStorage.setItem('savedAds', JSON.stringify(updatedAds));
    
    alert('Ad saved successfully!');
  };

  const handleExport = () => {
    if (!isGenerated) {
      alert('Please generate an ad first!');
      return;
    }
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = generatedImage || adData.image || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    link.download = `figure-bricks-ad-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
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
            <h2>1. Upload Property Image (Optional)</h2>
            <ImageUploader onImageUpload={handleImageUpload} />
          </section>

          <section className="text-section">
            <h2>2. Property Details (Optional)</h2>
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

          <section className="generate-section">
            <button 
              className="generate-btn" 
              onClick={generateAd}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : isGenerated ? 'Regenerate Ad' : 'Create the Ad'}
            </button>
            
            {isGenerating && (
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${generationProgress}%` }}></div>
                <div className="progress-text">{generationProgress}%</div>
              </div>
            )}
          </section>
        </div>

        <div className="preview-panel">
          <h2>Ad Preview</h2>
          <AdPreview 
            adData={adData} 
            isGenerated={isGenerated} 
            generatedImage={generatedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AdCreator; 