

import React, { useState } from 'react';

const Swiper = () => {
  // Array of images to be shown in the swiper
  const images = [
    "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3"
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="swiper-container" style={{ position: 'relative', width: '600px', height: '400px', overflow: 'hidden' }}>
      {/* Image */}
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />

      {/* Left Arrow Button */}
      <button 
        onClick={prevImage} 
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
        &#8249;
      </button>

      {/* Right Arrow Button */}
      <button 
        onClick={nextImage} 
        style={{ position: 'absolute', top: '50%', right: '40px', transform: 'translateY(-50%)', background: 'rgba(230, 0, 240, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
        &#8250;
      </button>
    </div>
  );
};

export default Swiper;
