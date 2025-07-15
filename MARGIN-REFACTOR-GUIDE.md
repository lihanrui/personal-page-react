# PageContainer Margin Refactoring Guide

## 📋 Overview

The application's margin system has been refactored to use the `PageContainer` component, providing individual pages with flexible control over their layout and spacing. This approach offers better maintainability and customization options compared to the previous fixed-margin system.

## 🎯 Why This Refactor?

### Previous Issues
- Fixed margins across all pages
- Limited customization options
- Difficult to maintain consistent spacing
- Poor responsive behavior

### Current Benefits
- **Flexible Layouts**: Each page can choose its own margin strategy
- **Consistent Spacing**: Preset options ensure design consistency
- **Better Responsiveness**: Built-in mobile-first responsive design
- **Easy Maintenance**: Centralized margin management
- **Custom Options**: Support for custom margin/padding values

## 🧩 PageContainer Component

The `PageContainer` component is the foundation of the new margin system, providing a flexible wrapper for page content.

### Props Interface

```jsx
interface PageContainerProps {
  margin?: 'default' | 'wide' | 'narrow' | 'full' | 'none' | MarginObject;
  padding?: 'default' | 'wide' | 'narrow' | 'none' | PaddingObject;
  maxWidth?: string;
  children: React.ReactNode;
}

interface MarginObject {
  left?: string;
  right?: string;
}

interface PaddingObject {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
```

### Margin Options

| Option | Description | Values |
|--------|-------------|---------|
| `'default'` | Standard margins | 10% left/right |
| `'wide'` | Wider content area | 5% left/right |
| `'narrow'` | Narrower content area | 15% left/right |
| `'full'` | Full width | 0% left/right |
| `'none'` | No margins | 0% left/right |
| `MarginObject` | Custom margins | `{ left: '20px', right: '20px' }` |

### Padding Options

| Option | Description | Values |
|--------|-------------|---------|
| `'default'` | Standard padding | 20px top/bottom |
| `'wide'` | More padding | 40px top/bottom, 20px left/right |
| `'narrow'` | Less padding | 10px top/bottom |
| `'none'` | No padding | 0px all around |
| `PaddingObject` | Custom padding | `{ top: '30px', bottom: '30px' }` |

## 💡 Usage Examples

### Basic Usage

```jsx
// Standard page with default margins and padding
<PageContainer margin="default" padding="default">
  <PageLayout title="My Page">
    <p>This is standard page content with default spacing.</p>
  </PageLayout>
</PageContainer>
```

### Full-Width Layout

```jsx
// Full-width page (like HomePage)
<PageContainer margin="full" padding="none">
  <div className="hero-section">
    <h1>Welcome to My Site</h1>
    <p>This content spans the full width of the viewport.</p>
  </div>
</PageContainer>
```

### Wide Margins for Content

```jsx
// Wide margins for more content space
<PageContainer margin="wide" padding="wide">
  <PageLayout title="Content-Heavy Page">
    <div className="content-grid">
      <article>Article 1</article>
      <article>Article 2</article>
      <article>Article 3</article>
    </div>
  </PageLayout>
</PageContainer>
```

### Custom Margins and Padding

```jsx
// Custom margins and padding
<PageContainer 
  margin={{ left: '15%', right: '15%' }}
  padding={{ top: '30px', bottom: '30px', left: '20px', right: '20px' }}
  maxWidth="1400px"
>
  <PageLayout title="Custom Layout">
    <div className="custom-content">
      <p>This page uses custom spacing values.</p>
    </div>
  </PageLayout>
</PageContainer>
```

### Narrow Margins for Forms

```jsx
// Narrow margins for forms or focused content
<PageContainer margin="narrow" padding="default">
  <PageLayout title="Contact Form">
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </PageLayout>
</PageContainer>
```

## 📱 Responsive Behavior

The `PageContainer` component includes built-in responsive behavior:

### Mobile-First Approach
- Margins automatically adjust for smaller screens
- Padding scales appropriately
- Content remains readable on all devices

### Breakpoint Behavior
```css
/* Desktop (default) */
margin: 10% (for 'default')

/* Tablet */
margin: 5% (reduced for medium screens)

/* Mobile */
margin: 2% (minimal margins for small screens)
```

## 🎨 Current Page Configurations

### HomePage
```jsx
<PageContainer margin="default" padding="default">
  <PageLayout title="Welcome">
    {/* Hero section and introduction */}
  </PageLayout>
</PageContainer>
```

### ProjectsPage
```jsx
<PageContainer margin="default" padding="default">
  <PageLayout title="Projects">
    {/* Project showcase grid */}
  </PageLayout>
</PageContainer>
```

### HobbiesPage
```jsx
<PageContainer margin="default" padding="default">
  <PageLayout title="Hobbies">
    {/* Hobbies and interests */}
  </PageLayout>
</PageContainer>
```

### FostersPage
```jsx
<PageContainer margin="default" padding="default">
  <PageLayout title="Foster Care">
    {/* Foster care information and gallery */}
  </PageLayout>
</PageContainer>
```

### ErrorPage
```jsx
<PageContainer margin="default" padding="default">
  <PageLayout title="Page Not Found">
    {/* Error message and navigation */}
  </PageLayout>
</PageContainer>
```

## 🔧 Implementation Details

### CSS Custom Properties

The component uses CSS custom properties for dynamic styling:

```css
.page-container {
  --margin-left: var(--margin-left-value, 10%);
  --margin-right: var(--margin-right-value, 10%);
  --padding-top: var(--padding-top-value, 20px);
  --padding-bottom: var(--padding-bottom-value, 20px);
  --padding-left: var(--padding-left-value, 0);
  --padding-right: var(--padding-right-value, 0);
  --max-width: var(--max-width-value, 1200px);
}
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  .page-container {
    --margin-left: 2%;
    --margin-right: 2%;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .page-container {
    --margin-left: 5%;
    --margin-right: 5%;
  }
}
```

## 🚀 Best Practices

### When to Use Each Margin Option

1. **`default`**: Standard pages with normal content
2. **`wide`**: Content-heavy pages, galleries, or dashboards
3. **`narrow`**: Forms, focused content, or sidebar layouts
4. **`full`**: Hero sections, landing pages, or immersive experiences
5. **`none`**: When you need complete control over spacing

### When to Use Each Padding Option

1. **`default`**: Most pages with standard content
2. **`wide`**: Pages with lots of content or that need breathing room
3. **`narrow`**: Compact layouts or when space is limited
4. **`none`**: When you want complete control over internal spacing

### Performance Considerations

- Use preset options when possible for better performance
- Custom objects are processed at runtime
- Consider the impact on bundle size for custom values

## 🔄 Migration Guide

### From Old System

If you're migrating from the old fixed-margin system:

1. **Replace AppLayout margins**:
   ```jsx
   // Old
   <AppLayout margin="fixed">
     <PageLayout>Content</PageLayout>
   </AppLayout>
   
   // New
   <PageContainer margin="default">
     <PageLayout>Content</PageLayout>
   </PageContainer>
   ```

2. **Update page components**:
   - Remove margin props from AppLayout
   - Wrap content with PageContainer
   - Choose appropriate margin/padding values

3. **Test responsive behavior**:
   - Verify mobile layout
   - Check tablet breakpoints
   - Ensure content readability

## 🔮 Future Enhancements

### Planned Features
- **More Preset Options**: `hero`, `sidebar`, `dashboard`
- **Breakpoint-Specific Margins**: Different margins per screen size
- **Design System Integration**: Token-based spacing system
- **Animation Support**: Smooth transitions between margin changes

### Customization Options
- **Theme Integration**: Margins that adapt to theme changes
- **Dynamic Margins**: Margins that change based on content
- **Conditional Spacing**: Margins that adjust based on viewport or content

## 📚 Related Components

- **PageLayout**: Handles content styling and typography
- **AppLayout**: Main application wrapper
- **GlassCard**: UI component for content cards
- **ThemeContext**: Provides theme context for styling

---

**Need Help?** Check the [main README](./README.md) or [deployment guide](./DEPLOYMENT-OPTIONS.md) for more information. 