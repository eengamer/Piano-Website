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

# Open browser to http://localhost:5173/
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
- **Footer** - Copyright information

## 🌐 Github Pages Deployment

### Option 1: Using Github Actions (Recommended)

1. **Create a workflow file** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: yourdomainname.com  # Optional: if using custom domain
```

2. **Enable Github Pages**:
   - Go to your repository settings
   - Navigate to **Settings** > **Pages**
   - Under "Build and deployment", select:
     - **Source**: Github Actions
   - Save

3. **Push to main branch**:
```bash
git push origin main
```

The workflow will automatically build and deploy your site!

### Option 2: Manual Deployment with gh-pages Branch

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Enable Github Pages**:
   - Go to **Settings** > **Pages**
   - Under "Build and deployment", select:
     - **Source**: Deploy from a branch
     - **Branch**: gh-pages / root
   - Save

### Option 3: Manual Build & Deploy

1. **Build the project**:
```bash
npm run build
```

2. **Create gh-pages branch** (if not exists):
```bash
git checkout --orphan gh-pages
git rm -rf .
```

3. **Copy dist folder contents to gh-pages branch**:
```bash
git checkout main
cp -r dist/* /path/to/gh-pages-branch/
cd /path/to/gh-pages-branch/
git add .
git commit -m "Deploy site"
git push origin gh-pages
```

4. **Enable Github Pages** (same as Option 2)

## 🔧 Configuration

### Custom Domain

If using a custom domain:

1. Add to `package.json` or workflow (see Option 1)
2. Create a `CNAME` file in `public/` folder:
```
yourdomainname.com
```

3. Configure your domain's DNS records to point to Github Pages

### Customize Content

- Edit sections in `src/App.jsx`
- Update styles in `src/App.css`
- Modify color scheme by changing CSS custom properties in `:root`

### Base URL

The site is configured for `https://username.github.io/Piano-Website/`

To change:
1. Update `base` in `vite.config.js`
2. Rebuild: `npm run build`

## 📁 Project Structure

```
Piano-Website/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/          # Images and assets
├── public/              # Static files
├── dist/                # Production build (generated)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
├── AGENTS.md            # Project info
└── README.md            # This file
```

## 🎨 Customization Guide

### Change Colors

Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary: #1a1a1a;      /* Dark background */
  --secondary: #d4af37;    /* Gold accent */
  --accent: #f5f5f5;       /* Light text */
  --dark: #0d0d0d;         /* Very dark */
  --light: #ffffff;        /* Pure white */
  --gray: #888888;         /* Gray text */
}
```

### Add New Sections

1. Create a new section in `App.jsx`:
```jsx
<section className="newsection" data-section="newsection">
  {/* Your content */}
</section>
```

2. Add visibility detection in the `useEffect`
3. Create corresponding styles in `App.css`

### Modify Animations

Change animation timings and durations in `App.css`:
- `fadeInDown`, `slideInLeft`, `slideInRight`, `fadeInUp`, `zoomIn`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance

- Optimized React build with Vite
- CSS animations use GPU acceleration
- Responsive images and layouts
- Minimal dependencies for fast loading

**Build Size**:
- HTML: ~0.57 KB (gzipped)
- CSS: ~2.74 KB (gzipped)
- JS: ~61.36 KB (gzipped)

## 🐛 Troubleshooting

### Site shows 404 on Github Pages
- Ensure `base` in `vite.config.js` matches your repository name
- Clear browser cache
- Wait 1-2 minutes for deployment to complete

### Styles not loading
- Check that `base` path is correct
- Verify all CSS files are in `dist/` folder
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Custom domain not working
- Check DNS records are pointing to Github Pages IP
- Verify CNAME file exists in root of `gh-pages` branch
- Wait 24 hours for DNS propagation

## 📄 License

This project is open source. Feel free to customize and use for your personal portfolio.

## 🎵 About

This portfolio celebrates the art and elegance of piano performance. Built with modern web technologies to showcase musical talent in a professional, luxurious setting.

---

**Your site will be live at**: `https://eengamer.github.io/Piano-Website/`

Happy performing! 🎹
