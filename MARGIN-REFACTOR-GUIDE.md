# Margin Refactoring Guide

## Overview

The app route margins have been refactored to be managed individually by subcomponents using the new `PageContainer` component. This provides greater flexibility and control over page layouts.

## PageContainer Component

The `PageContainer` component allows individual pages to specify their own margin and padding preferences.

### Props

- `margin`: Controls horizontal margins
  - `'default'` (10% left/right) - Standard margins
  - `'wide'` (5% left/right) - Wider content area
  - `'narrow'` (15% left/right) - Narrower content area
  - `'full'` (0% left/right) - Full width
  - `'none'` (0% left/right) - No margins
  - Custom object: `{ left: '20px', right: '20px' }`

- `padding`: Controls padding
  - `'default'` (20px top/bottom) - Standard padding
  - `'wide'` (40px top/bottom, 20px left/right) - More padding
  - `'narrow'` (10px top/bottom) - Less padding
  - `'none'` (0px all around) - No padding
  - Custom object: `{ top: '30px', bottom: '30px', left: '10px', right: '10px' }`

- `maxWidth`: Maximum width of the container (default: '1200px')

### Usage Examples

```jsx
// Standard page with default margins
<PageContainer margin="default" padding="default">
  <PageLayout title="My Page">
    {/* Content */}
  </PageLayout>
</PageContainer>

// Full-width page (like AboutPage)
<PageContainer margin="full" padding="none">
  {/* Full-width content */}
</PageContainer>

// Wide margins for more content space
<PageContainer margin="wide" padding="wide">
  {/* Content with more breathing room */}
</PageContainer>

// Custom margins
<PageContainer 
  margin={{ left: '15%', right: '15%' }}
  padding={{ top: '30px', bottom: '30px' }}
>
  {/* Custom layout */}
</PageContainer>
```

## Current Page Configurations

### AboutPage
- **Margin**: `full` - Uses full width for section backgrounds
- **Padding**: `none` - No padding to allow full-width sections

### HomePage, ProjectsPage, HobbiesPage, FostersPage, ErrorPage
- **Margin**: `default` - Standard 10% margins
- **Padding**: `default` - Standard 20px top/bottom padding

## Benefits

1. **Flexibility**: Each page can choose its own layout approach
2. **Consistency**: Preset options ensure consistent spacing across similar pages
3. **Customization**: Custom margin/padding objects allow for specific needs
4. **Responsive**: Built-in responsive behavior for mobile devices
5. **Maintainability**: Centralized margin management in one component

## Migration Notes

- `AppLayout` no longer manages fixed margins
- All pages now use `PageContainer` for margin management
- `PageLayout` continues to handle content styling and typography
- Responsive behavior is handled automatically by `PageContainer`

## Future Enhancements

- Add more preset options (e.g., `'hero'`, `'sidebar'`)
- Support for different margin strategies per breakpoint
- Integration with design system tokens 