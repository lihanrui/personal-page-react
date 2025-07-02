import { css } from '@emotion/react';

// Base styles that apply to all themes
export const baseStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  #root {
    flex: 1;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  #root > main {
    flex: 1 1;
  }

  body {
    font-weight: 400;
    line-height: 1.625;
    letter-spacing: normal;
    color: var(--text-primary);
    background: var(--bg);
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: border, background, color;
  }

  main {
    flex: 1;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  /* Typography base styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 0;
    color: var(--text-primary);
  }

  p {
    margin-top: 0;
    margin-bottom: 1.25rem;
    line-height: 1.625;
  }

  /* Improve text selection */
  ::selection {
    background-color: var(--primary);
    color: var(--text-on-primary, white);
  }
`;

// Theme-specific styles that depend on CSS variables
export const themeStyles = css`
  :root {
    /* CSS variables will be injected here dynamically */
  }
`;

// Utility function to create CSS variables from theme colors
export const makeCssVars = (color, ns = '') =>
  Object.entries(color).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`--${ns ? `${ns}-${key}` : key}`]: value,
    }),
    {}
  );

// Combined styles for easy use
export const globalStyles = css`
  ${baseStyles}
  ${themeStyles}
`; 