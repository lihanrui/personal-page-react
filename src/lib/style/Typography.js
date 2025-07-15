export const Typography = {
  // Font families - friendly and elegant sans serif
  fontFamily: {
    primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  // Font weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Type scale - harmonious sizing
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },

  // Line heights for optimal readability
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter spacing for elegance
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Text effects and shadows
  textShadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  },

  // Predefined typography styles for consistency - only keeping what's actually used
  styles: {
    // Headings
    h1: {
      fontSize: '3rem',        // 48px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      marginBottom: '1.5rem',
    },
    h2: {
      fontSize: '2.25rem',     // 36px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      marginBottom: '1.25rem',
    },
    h3: {
      fontSize: '1.875rem',    // 30px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: 'normal',
      marginBottom: '1rem',
    },
    h4: {
      fontSize: '1.5rem',      // 24px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: 'normal',
      marginBottom: '0.875rem',
    },
    h5: {
      fontSize: '1.25rem',     // 20px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 'normal',
      marginBottom: '0.75rem',
    },
    h6: {
      fontSize: '1.125rem',    // 18px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 'normal',
      marginBottom: '0.75rem',
    },

    // Body text variants
    body: {
      fontSize: '1rem',        // 16px
      fontWeight: 400,
      lineHeight: 1.625,
      letterSpacing: 'normal',
      marginBottom: '1.25rem',
    },
    bodyLarge: {
      fontSize: '1.125rem',    // 18px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: 'normal',
      marginBottom: '1.25rem',
    },
    bodySmall: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 'normal',
      marginBottom: '1rem',
    },

    // Special text styles
    lead: {
      fontSize: '1.25rem',     // 20px
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: 'wide',
      marginBottom: '1.5rem',
    },
    caption: {
      fontSize: '0.75rem',     // 12px
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: 'wide',
      textTransform: 'uppercase',
    },
  },

  // Text effects and animations - only keeping what's used
  effects: {
    gradient: {
      background: 'linear-gradient(135deg, var(--primary), var(--link-primary))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  },

  // Layout and component styles - only keeping what's used
  layouts: {
    // Grid layouts
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      margin: '2rem 0',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
    },
  },

  // Component styles - only keeping what's used
  components: {
    arrowList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      
      li: {
        position: 'relative',
        paddingLeft: '1.5rem',
        marginBottom: '0.5rem',
        
        '&::before': {
          content: '"→"',
          position: 'absolute',
          left: 0,
          color: 'var(--primary)',
          fontWeight: 'bold',
        },
      },
    },
  },
}; 