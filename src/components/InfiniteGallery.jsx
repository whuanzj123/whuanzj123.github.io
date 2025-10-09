// InfiniteGallery.jsx - Main gallery with configurable star background and music
import React, { useState } from 'react';
import StarBackground from './StarBackground';
import FlippingCard from './FlippingCard';
import BackgroundMusic from './BackgroundMusic';
import './InfiniteGallery.css';

// Reduced to only 3 animals for the static display
const animalData = [
  {
    common: 'Lion', 
    binomial: 'Panthera leo', 
    photo: {
      code: '1583499871880-de841d1ace2a', 
      page: 'lion-lying-on-brown-rock-MUeeyzsjiY8', 
      text: 'lion couple kissing on a brown rock', 
      pos: '47% 35%', 
      by: 'Clément Roy'
    }
  }, 
  {
    common: 'Giant panda', 
    binomial: 'Ailuropoda melanoleuca', 
    photo: {
      code: '1659540181281-1d89d6112832', 
      page: 'a-panda-bear-in-a-tree-e0mrn3XDatU', 
      text: 'giant panda hanging from a tree branch', 
      pos: '47%', 
      by: 'Jiachen Lin'
    }
  }, 
  {
    common: 'King penguin', 
    binomial: 'Aptenodytes patagonicus', 
    photo: {
      code: '1595792419466-23cec2476fa6', 
      page: 'white-and-black-penguin-on-gray-rock-o4snRPEZRRs', 
      text: 'king penguin with a fluffy brown chick on grey rocks', 
      pos: '35%', 
      by: 'Martin Wettstein'
    }
  }
];

// Preset configurations for the star background
const starPresets = {
  default: {
    speed: 'normal',
    color: '#FFFFFF',
    density: 'normal',
    opacity: 1,
    size: 'normal'
  },
  dreamy: {
    speed: 'slow',
    color: '#E6B3FF',
    density: 'low',
    opacity: 0.7,
    size: 'large'
  },
  energetic: {
    speed: 'fast',
    color: '#FFD700',
    density: 'high',
    opacity: 0.9,
    size: 'small'
  },
  cosmic: {
    speed: { small: 40, medium: 80, large: 120 },
    color: '#00FFFF',
    density: 'high',
    opacity: 0.8,
    size: 'normal'
  },
  subtle: {
    speed: 'slow',
    color: '#CCCCCC',
    density: 'low',
    opacity: 0.3,
    size: 'small'
  }
};

const InfiniteGallery = () => {
  const base = 'unsplash.com/photo';
  const [currentPreset, setCurrentPreset] = useState('default');

  const handlePresetChange = (presetName) => {
    setCurrentPreset(presetName);
  };

  return (
    <div className="gallery-container">
      {/* Configurable Star Background */}
      <StarBackground {...starPresets[currentPreset]} />

      {/* Background Music Player */}
      <BackgroundMusic />

      {/* Gallery Content */}
      <div className="gallery-content">
        <header className="gallery-header">
          <h1>Animal Gallery</h1>
          <strong>Hover or tap cards to flip them</strong>
          <em>Mobile-friendly flipping cards with configurable parallax stars and epic soundtrack</em>
          
          {/* Star Background Controls */}
          <div className="star-controls">
            <p>Star Background Theme:</p>
            <div className="preset-buttons">
              {Object.keys(starPresets).map((presetName) => (
                <button
                  key={presetName}
                  className={`preset-btn ${currentPreset === presetName ? 'active' : ''}`}
                  onClick={() => handlePresetChange(presetName)}
                >
                  {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="scene">
          <section className="assembly">
            {animalData.map((animal, index) => (
              <FlippingCard
                key={index}
                animal={animal}
                index={index}
                baseUrl={base}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default InfiniteGallery;