# Development Guide

This guide covers the development workflow, best practices, and common tasks for working with Henry's Personal Page.

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 16
- **npm** >= 9
- **Git** for version control
- **VS Code** (recommended) or your preferred editor

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/ofnullable/personal-page-henry.git

# Navigate to project directory
cd personal-page-henry

# Install dependencies
npm install

# Start development server
npm start
```

The development server will start at [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Workflow

### Daily Development Process

1. **Start Development Server**
   ```bash
   npm start
   ```

2. **Make Changes**
   - Edit files in the `src/` directory
   - Changes will automatically reload in the browser
   - Use Hot Module Replacement for instant updates

3. **Code Quality Checks**
   ```bash
   # Run ESLint
   npm run lint
   
   # Run ESLint in watch mode
   npm run lint:watch
   ```

4. **Build for Testing**
   ```bash
   # Development build
   npm run build:dev
   
   # Production build
   npm run build
   ```

### File Structure Conventions

```
src/
├── components/          # Reusable UI components
│   ├── ComponentName.js
│   └── index.js        # Export all components
├── pages/              # Page components
│   ├── PageName.js
│   └── index.js        # Export all pages
├── layouts/            # Layout components
│   ├── LayoutName.js
│   └── index.js        # Export all layouts
├── contexts/           # React contexts
│   └── ContextName.js
├── lib/                # Utility libraries
│   ├── util/           # General utilities
│   └── style/          # Styling utilities
├── assets/             # Static assets
│   ├── images/
│   └── icons/
└── routes/             # Routing configuration
    └── index.js
```

## 🎨 Component Development

### Creating New Components

#### 1. Component Structure

```jsx
// src/components/MyComponent.js
import React from 'react';
import './MyComponent.scss';

const MyComponent = ({ title, children, ...props }) => {
  return (
    <div className="my-component" {...props}>
      <h2>{title}</h2>
      <div className="my-component__content">
        {children}
      </div>
    </div>
  );
};

export default MyComponent;
```

#### 2. Component Styling

```scss
// src/components/MyComponent.scss
.my-component {
  padding: 1rem;
  border-radius: 8px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  
  &__content {
    margin-top: 1rem;
  }
  
  // Responsive design
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
}
```

#### 3. Component Export

```jsx
// src/components/index.js
export { default as MyComponent } from './MyComponent';
export { default as GlassCard } from './GlassCard';
export { default as ErrorBoundary } from './ErrorBoundary';
```

### Component Best Practices

#### 1. Naming Conventions

- **Components**: PascalCase (`MyComponent`)
- **Files**: PascalCase (`MyComponent.js`)
- **CSS Classes**: kebab-case (`my-component`)
- **CSS Variables**: kebab-case (`--primary-color`)

#### 2. Props and PropTypes

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ title, count, isActive, onAction }) => {
  // Component logic
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  onAction: PropTypes.func,
};

MyComponent.defaultProps = {
  count: 0,
  isActive: false,
  onAction: () => {},
};
```

#### 3. Hooks Usage

```jsx
import React, { useState, useEffect, useCallback } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;
  
  return <div>{/* Render data */}</div>;
};
```

## 📱 Page Development

### Creating New Pages

#### 1. Page Component

```jsx
// src/pages/NewPage.js
import React from 'react';
import PageContainer from '../layouts/PageContainer';
import PageLayout from '../layouts/PageLayout';
import './NewPage.scss';

const NewPage = () => {
  return (
    <PageContainer margin="default" padding="default">
      <PageLayout title="New Page">
        <div className="new-page">
          <h1>Welcome to the New Page</h1>
          <p>This is the content of your new page.</p>
        </div>
      </PageLayout>
    </PageContainer>
  );
};

export default NewPage;
```

#### 2. Add Route

```jsx
// src/routes/index.js
import NewPage from '../pages/NewPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/new-page',
    element: <NewPage />,
  },
  // ... other routes
];
```

#### 3. Navigation

```jsx
// Add to navigation component
import { Link } from 'react-router-dom';

<Link to="/new-page" className="nav-link">
  New Page
</Link>
```

## 🎯 Styling Guidelines

### SCSS Structure

```scss
// Component-specific styles
.component-name {
  // Base styles
  
  // Modifiers
  &--variant {
    // Variant styles
  }
  
  // Elements
  &__element {
    // Element styles
  }
  
  // States
  &:hover,
  &:focus {
    // Interactive states
  }
  
  // Responsive
  @media (max-width: 768px) {
    // Mobile styles
  }
}
```

### CSS Custom Properties

```scss
// Define in :root or component
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
}

// Use in components
.my-component {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
  color: var(--primary-color);
}
```

### Theme Integration

```jsx
// Using theme context
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`my-component my-component--${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};
```

## 🔧 Development Tools

### VS Code Extensions

Recommended extensions for development:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### Browser Extensions

- **React Developer Tools**: Component inspection
- **Redux DevTools**: State management (if using Redux)
- **Lighthouse**: Performance auditing

## 🐛 Debugging

### Common Issues and Solutions

#### 1. Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear webpack cache
rm -rf .cache dist
npm run build
```

#### 2. Hot Reload Not Working

```bash
# Check file watching
npm run start:fast

# Or use polling
npm start
```

#### 3. ESLint Errors

```bash
# Fix auto-fixable issues
npm run lint -- --fix

# Check specific file
npm run lint src/components/MyComponent.js
```

#### 4. Performance Issues

```bash
# Analyze bundle
npm run analyze

# Check for memory leaks
# Use React DevTools Profiler
```

### Debugging Tools

#### 1. Console Logging

```javascript
// Development-only logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Use debug package for better logging
import debug from 'debug';
const log = debug('app:component');
log('Component rendered with props:', props);
```

#### 2. React DevTools

- **Components Tab**: Inspect component hierarchy
- **Profiler Tab**: Performance analysis
- **Settings**: Configure DevTools behavior

#### 3. Network Tab

- Check API requests
- Verify asset loading
- Monitor performance

## 📊 Testing

### Manual Testing Checklist

- [ ] **Cross-browser Testing**
  - Chrome, Firefox, Safari, Edge
  - Mobile browsers (iOS Safari, Chrome Mobile)

- [ ] **Responsive Testing**
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)

- [ ] **Accessibility Testing**
  - Keyboard navigation
  - Screen reader compatibility
  - Color contrast

- [ ] **Performance Testing**
  - Page load times
  - Bundle size
  - Core Web Vitals

### Automated Testing Setup

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Create test file
touch src/components/__tests__/MyComponent.test.js
```

```jsx
// src/components/__tests__/MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  test('renders with title', () => {
    render(<MyComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
```

## 🔄 Git Workflow

### Branch Naming

```
feature/component-name
bugfix/issue-description
hotfix/critical-fix
refactor/component-name
```

### Commit Messages

```
feat: add new component
fix: resolve navigation issue
refactor: improve component structure
docs: update README
style: fix formatting
test: add component tests
```

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes and Commit**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Push and Create PR**
   ```bash
   git push origin feature/new-feature
   ```

4. **Code Review**
   - Request reviews from team members
   - Address feedback
   - Update documentation

5. **Merge**
   - Squash commits if needed
   - Delete feature branch

## 📈 Performance Optimization

### Code Splitting

```jsx
// Lazy load components
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const MyPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

### Image Optimization

```jsx
// Use optimized images
import optimizedImage from '../assets/optimized-image.webp';

<img src={optimizedImage} alt="Description" loading="lazy" />
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Check for large dependencies
npx webpack-bundle-analyzer dist/static/js/*.js
```

## 🔒 Security Best Practices

### Environment Variables

```javascript
// Never expose sensitive data
const apiKey = process.env.REACT_APP_API_KEY;
const isProduction = process.env.NODE_ENV === 'production';
```

### Input Validation

```jsx
// Validate user input
const handleSubmit = (data) => {
  if (!data.email || !data.email.includes('@')) {
    setError('Invalid email address');
    return;
  }
  // Process valid data
};
```

### XSS Prevention

```jsx
// Use React's built-in XSS protection
// Don't use dangerouslySetInnerHTML unless necessary
<div>{userContent}</div> // Safe
<div dangerouslySetInnerHTML={{ __html: userContent }} /> // Risky
```

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Webpack Documentation](https://webpack.js.org/)
- [SCSS Documentation](https://sass-lang.com/)

### Tools
- [Create React App](https://create-react-app.dev/)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

### Learning Resources
- [React Patterns](https://reactpatterns.com/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Modern JavaScript](https://javascript.info/)

---

**Need Help?** Check the [main README](./README.md) or [configuration guide](./CONFIGURATION.md) for more information. 