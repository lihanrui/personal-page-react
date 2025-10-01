# Configuration Guide

This guide explains all configuration files in Henry's Personal Page and how to customize them for your needs.

## 📁 Configuration Files Overview

| File                | Purpose                           | Customizable |
| ------------------- | --------------------------------- | ------------ |
| `package.json`      | Project metadata and dependencies | ✅           |
| `webpack.config.js` | Build configuration               | ✅           |
| `vercel.json`       | Vercel deployment settings        | ✅           |
| `.eslintrc.js`      | Code linting rules                | ✅           |
| `.prettierrc.js`    | Code formatting rules             | ✅           |
| `.swcrc`            | SWC compiler settings             | ✅           |
| `postcss.config.js` | CSS processing configuration      | ✅           |
| `.gitignore`        | Git ignore patterns               | ✅           |
| `.gitattributes`    | Git attributes                    | ✅           |
| `.npmrc`            | NPM configuration                 | ✅           |

## 🛠️ Build Configuration

### Webpack Configuration (`webpack.config.js`)

The webpack configuration is optimized for both development and production builds.

#### Key Features

- **SWC Compiler**: Fast JavaScript/TypeScript compilation
- **Hot Module Replacement**: Instant updates during development
- **Code Splitting**: Automatic vendor chunk separation
- **Asset Optimization**: Image and font optimization
- **CSS Processing**: SCSS support with PostCSS

#### Customization Options

```javascript
// Development vs Production
const prod = process.env.NODE_ENV === 'production';

// Entry point
entry: {
  app: resolve(__dirname, 'src/index'),
  // Add more entry points here
}

// Output configuration
output: {
  path: resolve(__dirname, 'dist'),
  filename: 'static/js/[name].[fullhash:8].js',
  // Customize output paths
}
```

#### Adding New Loaders

```javascript
// Example: Adding TypeScript support
{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [loaders.swc],
}
```

#### Environment Variables

```javascript
// Access environment variables
const isDev = process.env.NODE_ENV === 'development';
const apiUrl = process.env.REACT_APP_API_URL;
```

### SWC Configuration (`.swcrc`)

SWC provides fast compilation with React support.

```json
{
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "jsx": true
    },
    "transform": {
      "react": {
        "runtime": "automatic"
      }
    }
  }
}
```

#### TypeScript Support

To enable TypeScript, update `.swcrc`:

```json
{
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true
    }
  }
}
```

## 🎨 Code Quality Configuration

### ESLint Configuration (`.eslintrc.js`)

ESLint ensures code quality and consistency.

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    // Custom rules here
  },
};
```

#### Adding Custom Rules

```javascript
rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  'react/prop-types': 'off', // Disable prop-types requirement
  'prettier/prettier': 'error',
}
```

### Prettier Configuration (`.prettierrc.js`)

Prettier ensures consistent code formatting.

```javascript
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
};
```

#### Custom Formatting Rules

```javascript
module.exports = {
  // Line length
  printWidth: 100,

  // Quote style
  singleQuote: true,
  jsxSingleQuote: false,

  // Semicolons
  semi: true,

  // Trailing commas
  trailingComma: 'all',

  // Indentation
  tabWidth: 2,
  useTabs: false,
};
```

## 🚀 Deployment Configuration

### Vercel Configuration (`vercel.json`)

Optimized for Vercel deployment with SPA routing.

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install --production=false",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Custom Headers

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

#### Environment Variables

```json
{
  "env": {
    "REACT_APP_API_URL": "https://api.example.com",
    "REACT_APP_ENVIRONMENT": "production"
  }
}
```

### Other Deployment Platforms

#### Netlify (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### GitHub Pages

Update `package.json`:

```json
{
  "homepage": "https://username.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🎯 CSS Processing Configuration

### PostCSS Configuration (`postcss.config.js`)

PostCSS processes CSS with modern features.

```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
```

#### Adding PostCSS Plugins

```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'), // Add Tailwind CSS
    require('autoprefixer'),
    require('cssnano'), // Minify CSS
  ],
};
```

## 🔧 Development Configuration

### NPM Configuration (`.npmrc`)

```ini
save-exact=true
package-lock=true
```

#### Custom NPM Settings

```ini
# Use exact versions
save-exact=true

# Enable package-lock.json
package-lock=true

# Set registry (if using private registry)
registry=https://registry.npmjs.org/

# Authentication (for private packages)
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

### Git Configuration

#### Git Ignore (`.gitignore`)

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
```

#### Git Attributes (`.gitattributes`)

```gitattributes
# Auto-detect text files and perform LF normalization
* text=auto

# Markdown files
*.md text eol=lf

# JavaScript files
*.js text eol=lf
*.jsx text eol=lf

# CSS files
*.css text eol=lf
*.scss text eol=lf

# Binary files
*.png binary
*.jpg binary
*.gif binary
*.ico binary
*.svg text
```

## 🌍 Environment Configuration

### Environment Variables

Create environment files for different environments:

#### `.env.development`

```bash
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENVIRONMENT=development
REACT_APP_DEBUG=true
```

#### `.env.production`

```bash
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENVIRONMENT=production
REACT_APP_DEBUG=false
```

#### `.env.local` (gitignored)

```bash
REACT_APP_API_KEY=your-secret-key
REACT_APP_ANALYTICS_ID=your-analytics-id
```

### Accessing Environment Variables

```javascript
// In React components
const apiUrl = process.env.REACT_APP_API_URL;
const isDebug = process.env.REACT_APP_DEBUG === 'true';

// In webpack config
const isDev = process.env.NODE_ENV === 'development';
```

## 🔒 Security Configuration

### Security Headers

Add security headers to your deployment configuration:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

## 📊 Performance Configuration

### Bundle Analysis

Add bundle analysis to your build process:

```javascript
// webpack.config.js
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Add to plugins array
...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
```

```json
// package.json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

### Caching Configuration

```javascript
// webpack.config.js
output: {
  filename: 'static/js/[name].[contenthash:8].js',
  chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
}
```

## 🔄 Migration and Updates

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update specific package
npm install package-name@latest

# Update all packages (use with caution)
npx npm-check-updates -u && npm install
```

### Configuration Migration

When updating major versions:

1. **Webpack**: Check breaking changes in webpack documentation
2. **ESLint**: Review new rules and deprecated options
3. **PostCSS**: Verify plugin compatibility
4. **SWC**: Check configuration changes

---

**Need Help?** Check the [main README](./README.md) or [deployment guide](./DEPLOYMENT-OPTIONS.md) for more information.
