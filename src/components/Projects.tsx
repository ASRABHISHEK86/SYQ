import React from 'react';
import backgroundImage from './assest/commingsoon.jpg';

const BackgroundImagePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Optional: Add responsive content overlay */}
      
    </div>
  );
};

export default BackgroundImagePage;