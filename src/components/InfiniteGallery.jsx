// InfiniteGallery.jsx - Main gallery with configurable star background and themed cards
import React, { useState } from 'react';
import StarBackground from './StarBackground';
import FlippingCard from './FlippingCard';
import './InfiniteGallery.css';

// Import audio files
import crownAndLion from '../assets/Anno 1800 Soundtrack - Disc01 - 04 The crown and the lion.mp3';
// import bellyBeast from '../assets/Anno 1800 Soundtrack - Disc02 - 30 In the belly of the beast.mp3';

// Define color themes for each card
const cardThemes = {
  lion: {
    primary: '#f48c06',      // Warm orange
    secondary: '#dc3055',    // Deep red
    gradientStart: '#f48c06',
    gradientEnd: '#dc3055',
  },
  panda: {
    primary: '#06f48c',      // Mint green
    secondary: '#3055dc',    // Royal blue
    gradientStart: '#06f48c',
    gradientEnd: '#3055dc',
  },
  penguin: {
    primary: '#8c06f4',      // Purple
    secondary: '#dc3055',    // Pink
    gradientStart: '#8c06f4',
    gradientEnd: '#f406dc',
  }
};

// Animal data with associated music and themes
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
    },
    music: {
      src: crownAndLion,
      title: 'The Crown and the Lion',
      artist: 'Anno 1800 Soundtrack'
    },
    theme: cardThemes.lion
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
    },
    music: {
      src: crownAndLion, // Using same music for now
      title: 'The Crown and the Lion',
      artist: 'Anno 1800 Soundtrack'
    },
    theme: cardThemes.panda
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
    },
    music: {
      src: crownAndLion, // Using same music for now
      title: 'The Crown and the Lion',
      artist: 'Anno 1800 Soundtrack'
    },
    theme: cardThemes.penguin
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

      {/* Gallery Content */}
      <div className="gallery-content">
        <header className="gallery-header">
          <h1>Infinite Gallery</h1>
          
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
                musicSrc={animal.music.src}
                musicTitle={animal.music.title}
                musicArtist={animal.music.artist}
                theme={animal.theme}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default InfiniteGallery;