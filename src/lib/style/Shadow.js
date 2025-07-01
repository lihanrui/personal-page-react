export const Shadow = {
  light: {
    // No shadow
    none: 'none',
    
    // Level 1 - Subtle elevation (buttons, small cards)
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    
    // Level 2 - Standard elevation (cards, dropdowns)
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    
    // Level 3 - Higher elevation (modals, floating elements)
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    
    // Level 4 - Maximum elevation (overlays, tooltips)
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    
    // Level 5 - Extreme elevation (high-priority overlays)
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.08)',
  },
  
  dark: {
    // No shadow
    none: 'none',
    
    // Level 1 - Subtle elevation with light borders for dark themes
    sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
    
    // Level 2 - Standard elevation with enhanced contrast
    md: '0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
    
    // Level 3 - Higher elevation with subtle glow
    lg: '0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
    
    // Level 4 - Maximum elevation with enhanced glow
    xl: '0 20px 25px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
    
    // Level 5 - Extreme elevation with prominent glow
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.6), 0 12px 24px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
  },
};

// Utility function to get shadow based on current theme
export const getShadow = (level, theme = 'light') => {
  return Shadow[theme][level] || Shadow[theme].none;
};

// CSS custom properties for shadow system
export const shadowCSSVariables = (theme) => {
  const shadows = Shadow[theme];
  return {
    '--shadow-none': shadows.none,
    '--shadow-sm': shadows.sm,
    '--shadow-md': shadows.md,
    '--shadow-lg': shadows.lg,
    '--shadow-xl': shadows.xl,
    '--shadow-2xl': shadows['2xl'],
  };
};

// Common shadow utilities for different component types
export const shadowUtilities = {
  card: 'var(--shadow-md)',
  button: 'var(--shadow-sm)',
  modal: 'var(--shadow-xl)',
  dropdown: 'var(--shadow-lg)',
  tooltip: 'var(--shadow-lg)',
  floating: 'var(--shadow-2xl)',
  
  // Hover states
  cardHover: 'var(--shadow-lg)',
  buttonHover: 'var(--shadow-md)',
}; 