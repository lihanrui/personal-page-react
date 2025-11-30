# Architecture Guide

This guide explains the architecture, design patterns, and component relationships in Hanrui Li | Software Engineer.

## 🏗️ Overview

The personal website follows a modular, component-based architecture with clear separation of concerns and modern React patterns.

### Architecture Principles

- **Component-Based**: Reusable, composable components
- **Separation of Concerns**: Clear boundaries between layers
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Favor component composition
- **Unidirectional Data Flow**: Predictable state management
- **Performance First**: Optimized rendering and loading

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.js # Error handling wrapper
│   ├── ExperienceItem.js # Experience display component
│   ├── GlassCard.js     # Glass-morphism card component
│   └── index.js         # Component exports
├── contexts/            # React contexts for state management
│   └── ThemeContext.js  # Theme switching context
├── layouts/             # Layout components and structure
│   ├── AppLayout.js     # Main application layout
│   ├── Footer.js        # Footer component
│   ├── Header.js        # Header/navigation component
│   ├── PageContainer.js # Page margin/padding wrapper
│   ├── PageLayout.js    # Page content layout
│   └── index.js         # Layout exports
├── pages/               # Page-level components
│   ├── ErrorPage.js     # 404/error page
│   ├── FostersPage.js   # Foster care information page
│   ├── HobbieParallax.js # Scroll-driven hobby narrative
│   ├── CompanyPage.js   # Full-width branding image page
│   ├── Contact.js       # Contact experience (formerly home)
│   ├── ShowcasePlayground.js # Interactive showcase experiments
│   └── index.js         # Page exports
├── routes/              # Routing configuration
│   └── index.js         # Route definitions
├── lib/                 # Utility libraries
│   ├── style/           # Styling utilities
│   │   ├── Color.js     # Color management
│   │   ├── Components.js # Component styles
│   │   ├── Media.js     # Media queries
│   │   ├── Shadow.js    # Shadow utilities
│   │   ├── Styles.js    # Global styles
│   │   ├── Typography.js # Typography system
│   │   └── index.js     # Style exports
│   ├── util/            # General utilities
│   │   ├── Cookie.js    # Cookie management
│   │   ├── Storage.js   # Local storage utilities
│   │   ├── String.js    # String utilities
│   │   ├── Typography.js # Typography utilities
│   │   └── index.js     # Utility exports
│   └── index.js         # Library exports
├── assets/              # Static assets
│   ├── background_atmospheric.png
│   ├── bubble_data_net.png
│   ├── fosters/         # Foster care images
│   ├── icon_company/    # Company logos
│   ├── moon.svg         # Theme icons
│   ├── star.svg
│   ├── sun.svg
│   └── zap.svg
├── App.js               # Main application component
├── index.js             # Application entry point
└── index.scss           # Global styles
```

## 🧩 Component Architecture

### Component Hierarchy

```
App
├── ThemeProvider (ThemeContext)
├── ErrorBoundary
├── AppLayout
│   ├── Header
│   │   ├── Navigation
│   │   └── ThemeToggle
│   ├── Main Content (Routes)
│   │   ├── ContactPage
│   │   ├── ShowcasePlayground
│   │   ├── HobbieParallax
│   │   ├── CompanyPage
│   │   ├── FostersPage
│   │   └── ErrorPage
│   └── Footer
└── Error Fallback (if error occurs)
```

### Component Categories

#### 1. **Layout Components** (`src/layouts/`)

- **AppLayout**: Main application wrapper
- **PageContainer**: Margin and padding management
- **PageLayout**: Content structure and typography
- **Header**: Navigation and branding
- **Footer**: Site footer and links

#### 2. **Page Components** (`src/pages/`)

- **ContactPage**: Contact-focused landing experience
- **ShowcasePlayground**: Interactive experiments and UI explorations
- **HobbieParallax**: Scroll-driven hobby storytelling (Hobbies)
- **CompanyPage**: Branded company hero background
- **FostersPage**: Foster care information and gallery
- **ErrorPage**: 404 and error handling

#### 3. **UI Components** (`src/components/`)

- **GlassCard**: Glass-morphism card component
- **ExperienceItem**: Experience/achievement display
- **ErrorBoundary**: Error handling wrapper

#### 4. **Context Components** (`src/contexts/`)

- **ThemeContext**: Theme switching and management

## 🔄 Data Flow Architecture

### State Management

The application uses React Context for global state management with a simple, predictable data flow.

#### Theme State Flow

```
ThemeContext
├── theme (light/dark)
├── toggleTheme()
└── Provider
    └── App
        └── All Components
            └── CSS Variables
                └── Visual Updates
```

#### Component State Flow

```
User Action
├── Event Handler
├── State Update (useState/useReducer)
├── Re-render
└── UI Update
```

### Data Flow Patterns

#### 1. **Props Down, Events Up**

```jsx
// Parent component passes data down
<ChildComponent data={parentData} onAction={handleAction} />;

// Child component emits events up
const ChildComponent = ({ data, onAction }) => {
  const handleClick = () => {
    onAction(newData);
  };
};
```

#### 2. **Context for Global State**

```jsx
// Provide global state
<ThemeProvider>
  <App />
</ThemeProvider>;

// Consume global state
const { theme, toggleTheme } = useTheme();
```

#### 3. **Local State for Component-Specific Data**

```jsx
const Component = () => {
  const [localState, setLocalState] = useState(initialValue);

  const handleChange = (newValue) => {
    setLocalState(newValue);
  };
};
```

## 🎨 Styling Architecture

### CSS Architecture

The project uses a hybrid approach combining SCSS modules with CSS custom properties for theming.

#### 1. **Global Styles** (`src/index.scss`)

```scss
:root {
  // CSS Custom Properties for theming
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #333333;
}

// Global resets and base styles
* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}
```

#### 2. **Component Styles** (Component-specific SCSS)

```scss
// src/components/GlassCard.scss
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);

  &--dark {
    --glass-bg: rgba(0, 0, 0, 0.2);
    --glass-border: rgba(255, 255, 255, 0.1);
  }
}
```

#### 3. **Utility Classes** (`src/lib/style/`)

```javascript
// src/lib/style/Color.js
export const colors = {
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  background: 'var(--background-color)',
  text: 'var(--text-color)',
};
```

### Theme System

#### Theme Context Implementation

```jsx
// src/contexts/ThemeContext.js
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
```

#### CSS Theme Variables

```scss
[data-theme='light'] {
  --primary-color: #007bff;
  --background-color: #ffffff;
  --text-color: #333333;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}

[data-theme='dark'] {
  --primary-color: #4dabf7;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
  --glass-bg: rgba(0, 0, 0, 0.2);
  --glass-border: rgba(255, 255, 255, 0.1);
}
```

## 🛣️ Routing Architecture

### Route Configuration

```jsx
// src/routes/index.js
const routes = [
  {
    path: '/',
    element: <CompanyPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/showcase-lab',
    element: <ShowcasePlayground />,
  },
  {
    path: '/hobbie-parallax',
    element: <HobbieParallax />,
  },
  {
    path: '/company',
    element: <CompanyPage />,
  },
  {
    path: '/fosters',
    element: <FostersPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
```

### Route Structure

- **Company** (`/`): Full-width hero background (default route)
- **Contact** (`/contact`): Contact-focused landing experience
- **Showcase** (`/showcase-lab`): Interactive playground
- **Hobbies** (`/hobbie-parallax`): Scroll-driven hobby narrative
- **Company** (`/company`): Alias path to the same hero background
- **Fosters** (`/fosters`): Foster care information and gallery
- **Error** (`*`): 404 and error handling

## 🔧 Build Architecture

### Webpack Configuration

The build system is configured for optimal development and production builds.

#### Development Build

- **Hot Module Replacement**: Instant updates
- **Source Maps**: Easy debugging
- **Fast Refresh**: React component updates
- **Development Server**: Local development

#### Production Build

- **Code Splitting**: Automatic vendor separation
- **Minification**: Optimized bundle size
- **Asset Optimization**: Compressed images and fonts
- **Tree Shaking**: Remove unused code

### Build Process Flow

```
Source Files
├── JavaScript/JSX (SWC)
├── SCSS (Sass Loader)
├── Images (URL Loader)
└── SVGs (SVGR)
    ↓
Webpack Processing
├── Transpilation
├── Bundling
├── Optimization
└── Output
    ↓
Distribution Files
├── HTML
├── CSS
├── JavaScript
└── Assets
```

## 🎯 Design Patterns

### 1. **Component Composition**

```jsx
// Favor composition over inheritance
const Card = ({ children, variant, ...props }) => (
  <div className={`card card--${variant}`} {...props}>
    {children}
  </div>
);

// Usage
<Card variant="glass">
  <h2>Title</h2>
  <p>Content</p>
</Card>;
```

### 2. **Render Props Pattern**

```jsx
const ThemeConsumer = ({ children }) => {
  const theme = useTheme();
  return children(theme);
};

// Usage
<ThemeConsumer>{(theme) => <div className={`app--${theme}`}>Content</div>}</ThemeConsumer>;
```

### 3. **Higher-Order Components**

```jsx
const withErrorBoundary = (Component) => {
  return (props) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};

// Usage
const SafeComponent = withErrorBoundary(MyComponent);
```

### 4. **Custom Hooks**

```jsx
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
```

## 🔒 Error Handling Architecture

### Error Boundary Pattern

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### Error Handling Strategy

1. **Component Level**: Try-catch in event handlers
2. **Boundary Level**: Error boundaries for component trees
3. **Application Level**: Global error handling
4. **Network Level**: API error handling

## 📱 Responsive Architecture

### Mobile-First Approach

```scss
// Base styles (mobile)
.component {
  padding: 1rem;
  font-size: 14px;
}

// Tablet styles
@media (min-width: 768px) {
  .component {
    padding: 1.5rem;
    font-size: 16px;
  }
}

// Desktop styles
@media (min-width: 1024px) {
  .component {
    padding: 2rem;
    font-size: 18px;
  }
}
```

### Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🚀 Performance Architecture

### Optimization Strategies

#### 1. **Code Splitting**

```jsx
// Lazy load pages
const ContactPage = lazy(() => import('./pages/Contact'));
const ShowcasePlayground = lazy(() => import('./pages/ShowcasePlayground'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));

// Usage with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<CompanyPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/showcase-lab" element={<ShowcasePlayground />} />
  </Routes>
</Suspense>;
```

#### 2. **Memoization**

```jsx
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

const ParentComponent = () => {
  const [data, setData] = useState([]);

  const memoizedData = useMemo(() => {
    return data.filter((item) => item.active);
  }, [data]);

  return <ExpensiveComponent data={memoizedData} />;
};
```

#### 3. **Asset Optimization**

- **Image Optimization**: WebP format, responsive images
- **Font Loading**: Font display swap, preloading
- **CSS Optimization**: Critical CSS extraction
- **JavaScript Optimization**: Tree shaking, minification

## 🔄 State Management Architecture

### Local State

```jsx
const Component = () => {
  const [localState, setLocalState] = useState(initialValue);

  const updateState = useCallback((newValue) => {
    setLocalState(newValue);
  }, []);

  return <div>{/* Component JSX */}</div>;
};
```

### Global State

```jsx
// Context for global state
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);

  const updateGlobalState = useCallback((updates) => {
    setGlobalState((prev) => ({ ...prev, ...updates }));
  }, []);

  return <GlobalContext.Provider value={{ globalState, updateGlobalState }}>{children}</GlobalContext.Provider>;
};
```

## 🧪 Testing Architecture

### Testing Strategy

1. **Unit Tests**: Individual component testing
2. **Integration Tests**: Component interaction testing
3. **E2E Tests**: Full application flow testing
4. **Visual Regression Tests**: UI consistency testing

### Testing Structure

```
src/
├── components/
│   ├── __tests__/
│   │   ├── ComponentName.test.js
│   │   └── ComponentName.spec.js
│   └── ComponentName.js
├── pages/
│   ├── __tests__/
│   │   └── PageName.test.js
│   └── PageName.js
└── lib/
    ├── __tests__/
    │   └── util.test.js
    └── util/
```

## 🔮 Future Architecture Considerations

### Scalability Plans

1. **Micro-Frontends**: Component federation
2. **Server-Side Rendering**: Next.js migration
3. **State Management**: Redux Toolkit integration
4. **Type Safety**: TypeScript migration
5. **Testing**: Comprehensive test coverage

### Performance Enhancements

1. **Service Workers**: Offline support
2. **Progressive Web App**: PWA features
3. **Virtual Scrolling**: Large list optimization
4. **Image Lazy Loading**: Performance optimization
5. **Bundle Analysis**: Continuous monitoring

---

**Need Help?** Check the [main README](./README.md) or [development guide](./DEVELOPMENT.md) for more information.
