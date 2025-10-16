# whuan's Personal Website

A modern, interactive personal website built with React and Vite, featuring an animated animal gallery with configurable star backgrounds and individual themed music players for each card.

🌟 **Live Site**: [https://whuanzj123.github.io](https://whuanzj123.github.io)

## 📖 Project Overview

This is an immersive web experience showcasing an animal gallery with interactive flipping cards, configurable animated star backgrounds, and card-specific music players with unique color themes. The project demonstrates modern React development practices, creative CSS animations, and automated deployment workflows.

### ✨ Key Features

- **Interactive Animal Gallery**: Hover/tap to flip cards showing animal information
- **Card-Specific Music Players**: Each card has its own themed music player with interactive controls
- **Individual Color Themes**: Three unique color schemes (Lion: Orange/Red, Panda: Green/Blue, Penguin: Purple/Pink)
- **Interactive Seeking**: Click anywhere on the progress bar to jump to that position in the audio
- **Smart State Management**: Play states automatically sync across all cards
- **Configurable Star Background**: 5 different themed presets with customizable animations
- **Automated Deployment**: GitHub Actions workflow for continuous deployment
- **Mobile-Friendly**: Responsive design optimized for touch devices
- **PWA Ready**: Complete favicon set and web manifest for app-like experience

## 🛠️ Technology Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: CSS3 with custom properties and animations
- **Deployment**: GitHub Actions → GitHub Pages
- **CI/CD**: Automated build and deployment on push to main
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
```

## 📁 Project Structure

```
whuanzj123.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
├── public/                     # Static assets
│   ├── favicon icons          # Complete favicon set for all devices
│   └── site.webmanifest       # PWA configuration
├── src/
│   ├── components/            # React components
│   │   ├── InfiniteGallery.jsx    # Main gallery container with themes
│   │   ├── FlippingCard.jsx       # Individual animal cards
│   │   ├── CardMusicPlayer.jsx    # Themed music player for each card
│   │   ├── StarBackground.jsx     # Configurable star animation
│   │   ├── InfiniteGallery.css    # Gallery styles
│   │   ├── FlippingCard.css       # Card flip animations
│   │   ├── CardMusicPlayer.css    # Music player with theme support
│   │   └── StarBackground.css     # Star animation styles
│   ├── assets/               # Media files
│   │   └── *.mp3            # Music tracks for cards
│   ├── App.jsx              # Root application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── dist/                    # Production build output (git-ignored)
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Component Architecture

### Component Hierarchy
```
App
└── InfiniteGallery (Main container)
    ├── StarBackground (Animated background)
    └── FlippingCard (x3) (Animal cards)
        └── CardMusicPlayer (Individual themed music player)
```

### Key Components

#### `InfiniteGallery.jsx`
- **Purpose**: Main container managing state, themes, and layout
- **Features**: 
  - Star background theme switching
  - Animal data management with music and color theme assignments
  - Central theme configuration for all cards
- **State**: Current star preset selection
- **Props**: None (root component)

#### `FlippingCard.jsx`
- **Purpose**: Interactive cards with flip animation
- **Features**: 
  - Hover/touch flip effects
  - Front: Animal image with photographer credit
  - Back: Animal info + themed music player
- **Props**: `animal`, `index`, `baseUrl`, `musicSrc`, `musicTitle`, `musicArtist`, `theme`

#### `CardMusicPlayer.jsx`
- **Purpose**: Themed audio player for individual cards
- **Features**: 
  - Play/pause with visual feedback
  - Interactive progress bar with click-to-seek
  - Real-time time display
  - Auto-pause other cards when playing
  - Enhanced state synchronization
  - CSS custom properties for theming
- **Props**: `audioSrc`, `title`, `artist`, `theme`, `cardId`
- **State**: `isPlaying`, `currentTime`, `duration`

#### `StarBackground.jsx`
- **Purpose**: Configurable animated star field
- **Features**: 
  - Multiple animation layers (small, medium, large stars)
  - Theme presets with different speeds and colors
  - CSS custom properties for performance
- **Props**: `speed`, `color`, `density`, `opacity`, `size`

## 🎨 Color Theme System

Each card has its own unique color theme that affects:
- Play button border and gradient
- Track title color
- Progress bar gradient
- Visual identity

### Current Themes

| Card | Theme | Primary | Secondary | Visual Style |
|------|-------|---------|-----------|--------------|
| **Lion** | Warm | `#f48c06` (Orange) | `#dc3055` (Red) | Warm, bold, energetic |
| **Panda** | Cool | `#06f48c` (Mint) | `#3055dc` (Blue) | Fresh, calm, natural |
| **Penguin** | Vibrant | `#8c06f4` (Purple) | `#f406dc` (Pink) | Bold, playful, unique |

### Customizing Themes

Edit the `cardThemes` object in `InfiniteGallery.jsx`:

```javascript
const cardThemes = {
  lion: {
    primary: '#f48c06',      // Button border, title color
    secondary: '#dc3055',    // Secondary accent
    gradientStart: '#f48c06',// Gradient start color
    gradientEnd: '#dc3055',  // Gradient end color
  },
  // Add more themes...
};
```

**Theme Ideas:**
- **Sunset**: `#ff6b35` → `#f7931e` (warm, romantic)
- **Ocean**: `#0077be` → `#48cae4` (cool, calm)
- **Forest**: `#2d6a4f` → `#74c69d` (natural, earthy)
- **Fire**: `#ff4500` → `#ffa500` (hot, intense)
- **Galaxy**: `#4b0082` → `#9400d3` (cosmic, mysterious)

## 🎵 Music Player Features

### Interactive Controls
- **Play/Pause Button**: 
  - 48px circular button with gradient
  - Pulse animation when playing
  - Auto-syncs across all cards
- **Progress Bar**: 
  - Click anywhere to seek
  - Hover to see seek indicator
  - Real-time progress updates
- **Time Display**: Current time / Total duration
- **Smart Management**: Playing one card pauses others automatically

### State Management
- Listens to `play` and `pause` events
- Button state always matches audio state
- Handles edge cases (audio end, external pause)

### Adding New Music

1. Add your MP3 file to `src/assets/`
2. Import it in `InfiniteGallery.jsx`:
```javascript
import yourSong from '../assets/your-song.mp3';
```
3. Assign it to a card in `animalData`:
```javascript
music: {
  src: yourSong,
  title: 'Your Song Title',
  artist: 'Artist Name'
}
```

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

## 🚀 Automated Deployment

The site uses GitHub Actions for continuous deployment:

### Workflow (`.github/workflows/deploy.yml`)
```yaml
Trigger: Push to main branch or manual trigger
Steps:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies (npm ci)
  4. Build project (npm run build)
  5. Deploy to GitHub Pages
```

### Deployment Process
1. Push changes to `main` branch
2. GitHub Actions automatically triggers
3. Builds the project (`npm run build`)
4. Deploys `dist` folder to GitHub Pages
5. Site live in ~2 minutes

### Manual Trigger
You can also trigger deployment manually:
1. Go to repository → Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Configuration
**Repository Settings Required:**
- Settings → Pages → Source: **GitHub Actions**
- Workflow has proper permissions (configured in YAML)

## 📱 Mobile Optimization

- **Touch Events**: Tap to flip cards on mobile devices
- **Responsive Design**: 
  - Desktop: 500px × 700px cards
  - Tablet: 400px × 560px cards
  - Mobile: 280px × 390px cards
- **Performance**: Optimized animations for mobile browsers
- **Music Controls**: Touch-friendly 48px buttons (40px on mobile)
- **PWA Features**: App-like installation on mobile devices

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

### GitHub Actions Configuration
```yaml
# .github/workflows/deploy.yml
- Node.js 20
- npm ci (clean install)
- Vite build
- GitHub Pages deployment
```

### ESLint Configuration
- React-specific rules enabled
- Hooks validation
- Modern JavaScript standards

## 🎯 Future Enhancements

**Planned Features:**
- [ ] More animal species in the gallery
- [ ] Volume control on each card's music player
- [ ] Playlist support (multiple songs per card)
- [ ] Shuffle and repeat modes
- [ ] Additional star background themes
- [ ] Dark/light mode toggle
- [ ] Card customization interface

**Technical Improvements:**
- [ ] TypeScript migration
- [ ] Unit testing with Vitest
- [ ] Storybook component documentation
- [ ] Performance monitoring
- [ ] Accessibility enhancements (ARIA labels, keyboard navigation)
- [ ] Service Worker for offline support

## 📚 Learning Resources

This project demonstrates several key React and modern web development concepts:

### React Patterns
- **React Hooks**: useState, useRef, useEffect
- **Component Composition**: Reusable, configurable components
- **Props & State Management**: Theme passing, state synchronization
- **Event Handling**: Mouse, touch, audio events

### CSS Techniques
- **CSS Custom Properties**: Dynamic theming
- **3D Transforms**: Card flip animations
- **Keyframe Animations**: Pulse effects, star movements
- **Responsive Design**: Media queries, flexible layouts

### Build & Deployment
- **Vite**: Fast development and optimized builds
- **GitHub Actions**: Automated CI/CD pipeline
- **GitHub Pages**: Static site hosting

### Audio API
- **HTML5 Audio**: Audio element manipulation
- **Event Listeners**: Play, pause, timeupdate events
- **State Synchronization**: Cross-component audio control

For detailed documentation on the star background system, see [STAR_BACKGROUND_DOCS.md](./STAR_BACKGROUND_DOCS.md).

## 🐛 Known Issues

None currently! 🎉

If you encounter any issues, please [open an issue](https://github.com/whuanzj123/whuanzj123.github.io/issues) on GitHub.

## 📄 License

This project is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for details.

## 👨‍💻 Author

**whuan** - [GitHub Profile](https://github.com/whuanzj123)

---

*Built with ❤️ using React, Vite, and modern web technologies*

*Featuring music from Anno 1800 Soundtrack*