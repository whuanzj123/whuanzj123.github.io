// StarBackground.jsx - Fixed version with dynamic screen coverage
import React, { useEffect, useState } from 'react';
import './StarBackground.css';

const StarBackground = ({ 
  speed = 'fast',
  color = '#FFFFFF',
  density = 'high',
  opacity = 1,
  size = 'normal'
}) => {
  
  // Dynamic viewport dimensions
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Update viewport size on window resize
  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate dynamic field size (add buffer for animation)
  const fieldWidth = Math.max(viewportSize.width * 1.5, 2000);
  const fieldHeight = Math.max(viewportSize.height * 2, 2000);

  // Speed presets (duration in seconds)
  const speedPresets = {
    slow: { small: 80, medium: 120, large: 180 },
    normal: { small: 50, medium: 100, large: 150 },
    fast: { small: 30, medium: 60, large: 90 }
  };

  const speeds = typeof speed === 'object' ? speed : speedPresets[speed] || speedPresets.normal;
  
  // Size multipliers
  const sizeMultipliers = {
    small: 0.7,
    normal: 1,
    large: 1.5
  };
  const sizeMultiplier = sizeMultipliers[size] || 1;

  // Density configurations (scale with screen size)
  const baseDensityConfigs = {
    low: { small: 60, medium: 40, large: 30 },
    normal: { small: 140, medium: 80, large: 60 },
    high: { small: 240, medium: 160, large: 100 }
  };
  
  // Scale density based on screen area
  const screenArea = fieldWidth * fieldHeight;
  const baseArea = 2000 * 2000;
  const scaleFactor = Math.sqrt(screenArea / baseArea);
  
  const densityConfig = {
    small: Math.floor(baseDensityConfigs[density].small * scaleFactor),
    medium: Math.floor(baseDensityConfigs[density].medium * scaleFactor),
    large: Math.floor(baseDensityConfigs[density].large * scaleFactor)
  };

  // Generate random star positions based on dynamic field size
  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * fieldWidth);
      const y = Math.floor(Math.random() * fieldHeight);
      stars.push(`${x}px ${y}px ${color}`);
    }
    return stars.join(', ');
  };

  // CSS custom properties for dynamic configuration
  const starStyle = {
    '--star-color': color,
    '--star-opacity': opacity,
    '--field-width': `${fieldWidth}px`,
    '--field-height': `${fieldHeight}px`,
    '--small-star-size': `${1 * sizeMultiplier}px`,
    '--medium-star-size': `${2 * sizeMultiplier}px`,
    '--large-star-size': `${3 * sizeMultiplier}px`,
    '--small-animation-duration': `${speeds.small}s`,
    '--medium-animation-duration': `${speeds.medium}s`,
    '--large-animation-duration': `${speeds.large}s`,
    '--small-star-shadow': generateStars(densityConfig.small),
    '--medium-star-shadow': generateStars(densityConfig.medium),
    '--large-star-shadow': generateStars(densityConfig.large)
  };

  return (
    <div className="stars-background" style={starStyle}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default StarBackground;