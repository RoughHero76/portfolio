import React from 'react';
import './loadingStyles.css'; // Import your CSS file with loading styles
import backgroundGif from '../assets/nameBackground.svg';
const textOverlay: React.CSSProperties = {
  position: 'absolute',
  top: '90%',
  left: '50%',
  color: 'blue',
  transform: 'translate(-50%, -50%)',
};
const Loading = () => {
  return (
    <div className="loading-container">
      <img
        src={backgroundGif}
        alt="Loading..."
        className="loading-gif"
      />
      <div style={textOverlay}>
        Work in Progress
      </div>
    </div>
  );
};

export default Loading;
