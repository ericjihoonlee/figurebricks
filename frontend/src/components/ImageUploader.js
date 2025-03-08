import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/ImageUploader.css';

const ImageUploader = ({ onImageUpload }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  return (
    <div className="image-uploader">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the image here...</p> :
            <div>
              <p>Drag & drop an image here, or click to select</p>
              <p className="file-hint">Supports JPG, PNG (Max 10MB)</p>
            </div>
        }
      </div>
    </div>
  );
};

export default ImageUploader; 