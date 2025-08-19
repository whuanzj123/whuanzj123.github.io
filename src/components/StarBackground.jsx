// StarBackground.jsx - Configurable animated star background component
import React from 'react';
import './StarBackground.css';

const StarBackground = ({ 
  speed = 'normal',           // 'slow', 'normal', 'fast', or custom object
  color = '#FFFFFF',          // Star color
  density = 'normal',         // 'low', 'normal', 'high'
  opacity = 1,                // Overall opacity (0-1)
  size = 'normal'             // 'small', 'normal', 'large'
}) => {
  
  // Speed presets (duration in seconds)
  const speedPresets = {
    slow: { small: 80, medium: 120, large: 180 },
    normal: { small: 50, medium: 100, large: 150 },
    fast: { small: 30, medium: 60, large: 90 }
  };

  // Get animation speeds
  const speeds = typeof speed === 'object' ? speed : speedPresets[speed] || speedPresets.normal;
  
  // Size multipliers
  const sizeMultipliers = {
    small: 0.7,
    normal: 1,
    large: 1.5
  };
  const sizeMultiplier = sizeMultipliers[size] || 1;

  // Density configurations
  const densityConfigs = {
    low: { small: 30, medium: 20, large: 15 },
    normal: { small: 70, medium: 40, large: 30 },
    high: { small: 120, medium: 80, large: 50 }
  };
  const densityConfig = densityConfigs[density] || densityConfigs.normal;

  // Generate random star positions based on density
  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      stars.push(`${x}px ${y}px ${color}`);
    }
    return stars.join(', ');
  };

  // CSS custom properties for dynamic configuration
  const starStyle = {
    '--star-color': color,
    '--star-opacity': opacity,
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