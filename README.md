# Henry's Personal Page

A modern, responsive personal website built with React. Features a beautiful glass-card UI design with dark/light theme support and optimized performance.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)
![Node](https://img.shields.io/badge/Node-%3E%3D16-brightgreen)
![Webpack](https://img.shields.io/badge/Webpack-5.96.1-orange)

## ✨ Features

- **Modern React 18** with hooks and functional components
- **Custom Webpack Configuration** for optimal performance
- **Glass-Card UI Design** with modern aesthetics
- **Dark/Light Theme Support** with smooth transitions
- **Responsive Design** with mobile-first approach
- **Code Splitting** with React.lazy for better performance
- **SCSS & Emotion** for advanced styling
- **ESLint & Prettier** for code quality
- **Hot Module Replacement** for development
- **Production Optimized** builds with minification

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16
- npm >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/ofnullable/personal-page-henry.git

# Navigate to project directory
cd personal-page-henry

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
# or
npm run dev

# For faster development (without polling)
npm run start:fast
```

The development server will start at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Create production build
npm run build

# Create development build
npm run build:dev

# Watch mode for development
npm run build:watch
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Run ESLint in watch mode
npm run lint:watch
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.js
│   ├── ExperienceItem.js
│   └── GlassCard.js
├── contexts/           # React contexts
│   └── ThemeContext.js
├── layouts/            # Layout components
│   ├── AppLayout.js
│   ├── Footer.js
│   ├── Header.js
│   ├── PageContainer.js
│   └── PageLayout.js
├── pages/              # Page components
│   ├── ErrorPage.js
│   ├── FostersPage.js
│   ├── HobbiesPage.js
│   ├── HomePage.js
│   └── ProjectsPage.js
├── routes/             # Routing configuration
│   └── index.js
├── lib/                # Utility libraries
│   ├── style/          # Styling utilities
│   └── util/           # General utilities
├── assets/             # Static assets
└── index.js            # Application entry point
```

## 🎨 Pages

- **Home** (`/`) - Landing page with personal introduction
- **Projects** (`/projects`) - Development projects showcase
- **Hobbies** (`/hobbies`) - Personal interests and activities
- **Fosters** (`/fosters`) - Foster care information and gallery

## 🛠️ Technology Stack

### Core
- **React 18.3.1** - UI library
- **React Router DOM 6.22.0** - Client-side routing
- **Emotion 11.14.0** - CSS-in-JS styling

### Build Tools
- **Webpack 5.96.1** - Module bundler
- **SWC** - Fast JavaScript/TypeScript compiler
- **PostCSS** - CSS processing
- **Sass** - CSS preprocessor

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Refresh** - Hot module replacement

## 🎯 Key Features Explained

### Glass-Card Design
The website uses a modern glass-card UI pattern with:
- Semi-transparent backgrounds
- Subtle shadows and borders
- Smooth hover effects
- Consistent spacing and typography

### Theme System
Built-in dark/light theme support with:
- Context-based theme management
- Smooth transitions between themes
- Persistent theme preferences
- CSS custom properties for theming

### Performance Optimizations
- Code splitting with React.lazy
- Webpack optimizations for production
- Image optimization with file-loader
- CSS extraction and minification

## 🚀 Deployment

### Vercel (Recommended)
This website is optimized for Vercel deployment. See [DEPLOYMENT-OPTIONS.md](./DEPLOYMENT-OPTIONS.md) for detailed instructions.

### GitHub Pages
1. Update the homepage in `package.json`:
```json
{
  "homepage": "https://{username}.github.io/personal-page-henry"
}
```

2. Deploy:
```bash
npm run deploy
```

### Other Platforms
The build output in the `dist/` directory can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by glass-morphism design trends
- Optimized for performance and developer experience

---

**Made with ❤️ by [Henry / Hanrui Li](https://github.com/ofnullable)**
