# 🎹 Piano Portfolio Website

A luxurious, professional personal piano portfolio website built with React and Vite. Features elegant design, parallax effects, and smooth scroll animations.

## ✨ Features

- **Elegant Design** - Luxury aesthetic with gold accents and modern typography
- **Parallax Effects** - Smooth background parallax as you scroll
- **Scroll Animations** - Fade-in, slide-in, and zoom effects on sections
- **Responsive Design** - Fully mobile-friendly interface
- **Fast Performance** - Optimized Vite build with minimal bundle size
- **Github Pages Ready** - Pre-configured for static deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## 📦 Sections

- **Hero** - Eye-catching introduction with parallax effect
- **About** - Personal background and passion for music
- **Services** - Expertise areas (Classical Performance, Contemporary Fusion, Instruction)
- **Featured Works** - Showcase of notable performances
- **Parallax Quote** - Inspirational quote with fixed background
- **Gallery** - Visual gallery of performances
- **Contact** - Call-to-action for bookings and inquiries

## 🌐 Github Pages Setup

**Your site is configured to deploy to**: `https://eengamer.github.io/Piano-Website/`

For detailed setup instructions, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

### Quick Deploy (Using Github Actions)

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "Github Actions"
3. A workflow will automatically deploy on every push to main

### Manual Deploy

```bash
npm run build
npm run deploy
```

## 🎨 Customization

- Edit content in `src/App.jsx`
- Modify styles in `src/App.css`
- Update colors in CSS custom properties (`:root` section)

## 📁 Project Structure

```
Piano-Website/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── dist/                # Production build
├── public/              # Static files
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## ⚡ Performance

- HTML: ~0.57 KB (gzipped)
- CSS: ~2.74 KB (gzipped)
- JS: ~61.36 KB (gzipped)

## 🐛 Support

For detailed troubleshooting and deployment help, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)
