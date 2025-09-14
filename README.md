# whuan's Personal Website

A modern, interactive personal website built with React and Vite, featuring an animated animal gallery with configurable star backgrounds and ambient music.

🌟 **Live Site**: [https://whuanzj123.github.io](https://whuanzj123.github.io)

## 📖 Project Overview

This is an immersive web experience showcasing an animal gallery with interactive flipping cards, configurable animated star backgrounds, and background music. The project demonstrates modern React development practices and creative CSS animations.

### ✨ Key Features

- **Interactive Animal Gallery**: Hover/tap to flip cards showing animal information
- **Configurable Star Background**: 5 different themed presets with customizable animations
- **Background Music**: Ambient soundtrack with playback controls
- **Mobile-Friendly**: Responsive design optimized for touch devices
- **PWA Ready**: Complete favicon set and web manifest for app-like experience

## 🛠️ Technology Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS3 with custom properties and animations
- **Deployment**: GitHub Pages
- **Linting**: ESLint with React-specific rules

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/whuanzj123/whuanzj123.github.io.git
cd whuanzj123.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint code quality checks
npm run deploy   # Build and deploy to GitHub Pages
```

## 📁 Project Structure

```
whuanzj123.github.io/
├── public/                 # Static assets
│   ├── favicon icons      # Complete favicon set for all devices
│   └── site.webmanifest  # PWA configuration
├── src/
│   ├── components/        # React components
│   │   ├── InfiniteGallery.jsx    # Main gallery container
│   │   ├── FlippingCard.jsx       # Individual animal cards
│   │   ├── StarBackground.jsx     # Configurable star animation
│   │   └── BackgroundMusic.jsx    # Audio player component
│   ├── assets/           # Media files
│   │   └── *.mp3        # Background music tracks
│   ├── App.jsx          # Root application component
│   └── main.jsx         # Application entry point
├── dist/                # Production build output
├── package.json         # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Component Architecture

### Component Hierarchy
```
App
└── InfiniteGallery (Main container)
    ├── StarBackground (Animated background)
    ├── BackgroundMusic (Audio controls)
    └── FlippingCard (x3) (Animal cards)
```

### Key Components

#### `InfiniteGallery.jsx`
- **Purpose**: Main container managing state and layout
- **Features**: Star background theme switching, animal data management
- **Props**: None (root component)

#### `FlippingCard.jsx`
- **Purpose**: Interactive cards with flip animation
- **Features**: Hover/touch flip effects, animal information display
- **Props**: `animal`, `index`, `baseUrl`

#### `StarBackground.jsx`
- **Purpose**: Configurable animated star field
- **Features**: Multiple animation layers, theme presets, CSS custom properties
- **Props**: `speed`, `color`, `density`, `opacity`, `size`

#### `BackgroundMusic.jsx`
- **Purpose**: Audio player with controls
- **Features**: Play/pause, volume control, track switching
- **Props**: None (self-contained)

## 🌟 Star Background System

The star background supports 5 preset themes:

| Preset | Speed | Color | Density | Description |
|--------|-------|-------|---------|-------------|
| **Default** | Normal | White | Normal | Classic starfield |
| **Dreamy** | Slow | Purple | Low | Peaceful, minimal |
| **Energetic** | Fast | Gold | High | Dynamic, vibrant |
| **Cosmic** | Custom | Cyan | High | Sci-fi themed |
| **Subtle** | Slow | Gray | Low | Understated elegance |

### Custom Configuration
```jsx
<StarBackground 
  speed={{ small: 30, medium: 60, large: 90 }}
  color="#FFD700"
  density="high"
  opacity={0.8}
  size="large"
/>
```

## 🎵 Audio Features

- **Tracks**: Anno 1800 Soundtrack (orchestral/ambient)
- **Controls**: Play/pause, volume slider, track selection
- **User Experience**: Respects user preferences, non-intrusive

## 📱 Mobile Optimization

- **Touch Events**: Tap to flip cards on mobile devices
- **Responsive Design**: Adapts to various screen sizes
- **Performance**: Optimized animations for mobile browsers
- **PWA Features**: App-like installation on mobile devices

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using the `gh-pages` package:

```bash
# Manual deployment
npm run deploy
```

**Deployment Process:**
1. `npm run build` creates optimized production build
2. `gh-pages -d dist` deploys the `dist` folder to `gh-pages` branch
3. GitHub Pages serves the site from the `gh-pages` branch

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
```

### ESLint Configuration
- React-specific rules enabled
- Hooks validation
- Modern JavaScript standards

## 🎯 Future Enhancements

**Planned Features:**
- [ ] More animal species in the gallery
- [ ] User-uploadable content
- [ ] Additional star background themes
- [ ] Dark/light mode toggle
- [ ] Performance analytics integration

**Technical Improvements:**
- [ ] TypeScript migration
- [ ] Unit testing with Vitest
- [ ] Storybook component documentation
- [ ] Performance optimization
- [ ] Accessibility enhancements

## 📚 Learning Resources

This project demonstrates several key React and modern web development concepts:

- **React Hooks**: useState for state management
- **Component Composition**: Reusable, configurable components
- **CSS-in-JS Integration**: CSS custom properties with React
- **Event Handling**: Mouse and touch events
- **Build Tools**: Vite for fast development and optimized builds
- **Deployment**: Automated GitHub Pages deployment

For detailed documentation on the star background system, see [STAR_BACKGROUND_DOCS.md](./STAR_BACKGROUND_DOCS.md).

## 📄 License

This project is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for details.

## 👨‍💻 Author

**whuan** - [GitHub Profile](https://github.com/whuanzj123)

---

*Built with ❤️ using React and modern web technologies*