# Configurable Star Background Documentation

## Overview
The `StarBackground` component now supports multiple configuration options to create different visual effects. This demonstrates key React concepts like props, default values, and CSS custom properties integration.

## Usage

### Basic Usage (Default Settings)
```jsx
import StarBackground from './StarBackground';

// Uses default settings
<StarBackground />
```

### With Configuration Props
```jsx
<StarBackground 
  speed="fast"
  color="#FFD700"
  density="high"
  opacity={0.8}
  size="large"
/>
```

## Configuration Props

### `speed` (string or object)
Controls animation speed of star layers.

**Presets:**
- `'slow'` - Gentle, relaxing movement
- `'normal'` - Default speed (good balance)
- `'fast'` - Energetic, dynamic movement

**Custom object:**
```jsx
speed={{
  small: 30,   // Small stars duration in seconds
  medium: 60,  // Medium stars duration
  large: 90    // Large stars duration
}}
```

### `color` (string)
Star color in any CSS color format.

**Examples:**
- `'#FFFFFF'` - White (default)
- `'#FFD700'` - Gold
- `'#E6B3FF'` - Light purple
- `'#00FFFF'` - Cyan

### `density` (string)
Number of stars per layer.

**Options:**
- `'low'` - Fewer stars, minimalist look
- `'normal'` - Balanced star count (default)
- `'high'` - Many stars, rich starfield

### `opacity` (number)
Overall transparency of star background.

**Range:** 0 (invisible) to 1 (fully opaque)
**Examples:**
- `0.3` - Very subtle
- `0.7` - Moderately visible
- `1.0` - Full opacity (default)

### `size` (string)
Star size multiplier.

**Options:**
- `'small'` - 70% of default size
- `'normal'` - Default size
- `'large'` - 150% of default size

## Preset Examples

### Dreamy Theme
```jsx
<StarBackground 
  speed="slow"
  color="#E6B3FF"
  density="low"
  opacity={0.7}
  size="large"
/>
```

### Energetic Theme
```jsx
<StarBackground 
  speed="fast"
  color="#FFD700"
  density="high"
  opacity={0.9}
  size="small"
/>
```

### Cosmic Theme
```jsx
<StarBackground 
  speed={{ small: 40, medium: 80, large: 120 }}
  color="#00FFFF"
  density="high"
  opacity={0.8}
  size="normal"
/>
```

## Technical Implementation

### CSS Custom Properties
The component uses CSS custom properties (variables) to pass configuration from React to CSS:

```css
/* Example generated styles */
.stars-background {
  --star-color: #FFD700;
  --star-opacity: 0.8;
  --small-animation-duration: 30s;
  /* ... more properties */
}
```

### Dynamic Star Generation
Star positions are generated programmatically in React based on density settings:

```jsx
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars.push(`${x}px ${y}px ${color}`);
  }
  return stars.join(', ');
};
```

## React Concepts Demonstrated

1. **Props with Default Values**: Using default parameters in function signature
2. **Conditional Rendering**: Different configurations based on prop values
3. **CSS Integration**: Passing React state to CSS via custom properties
4. **Component Composition**: StarBackground as a reusable, configurable component
5. **State Management**: Parent component controls which preset is active

## Extending the Component

### Adding New Presets
Add to the `starPresets` object in `InfiniteGallery.jsx`:

```jsx
const starPresets = {
  // ... existing presets
  mystical: {
    speed: 'slow',
    color: '#9966CC',
    density: 'normal',
    opacity: 0.6,
    size: 'large'
  }
};
```

### Adding New Configuration Options
1. Add prop to `StarBackground` component
2. Add corresponding CSS custom property
3. Use the property in CSS animations or styles

### Creating Interactive Controls
The current implementation shows buttons to switch presets. You could add:
- Sliders for opacity/speed
- Color pickers
- Real-time configuration panels

## Performance Notes

- Star positions are generated once per render, not animated
- CSS animations handle movement for smooth performance
- Three layers create depth illusion without complex 3D calculations
- Component re-renders only when props change

This configurable approach makes the star background reusable across different themes and moods while teaching fundamental React patterns!