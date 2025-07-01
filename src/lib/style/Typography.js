export const Typography = {
  // Font families - friendly and elegant sans serif
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace",
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
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
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
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },

  // Typography spacing utilities
  spacing: {
    paragraph: '1.25rem',     // Space between paragraphs
    section: '3rem',          // Space between sections
    heading: '1.5rem',        // Space after headings
    list: '0.5rem',          // Space between list items
  },

  // Predefined typography styles for consistency
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
    overline: {
      fontSize: '0.75rem',     // 12px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 'widest',
      textTransform: 'uppercase',
    },

    // Navigation and UI text
    nav: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 'wide',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: 'wide',
    },
    label: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: 'normal',
    },
  },

  // Responsive typography utilities
  responsive: {
    // Scale down headings on smaller screens
    mobile: {
      h1: { fontSize: '2.25rem' },  // 36px instead of 48px
      h2: { fontSize: '1.875rem' }, // 30px instead of 36px
      h3: { fontSize: '1.5rem' },   // 24px instead of 30px
      h4: { fontSize: '1.25rem' },  // 20px instead of 24px
      errorHeading: { fontSize: '2.5rem' },
      errorImage: { margin: '2rem auto', maxWidth: '80%' },
    },
    tablet: {
      h1: { fontSize: '2.75rem' },  // 44px
      h2: { fontSize: '2rem' },     // 32px
      errorImage: { margin: '2rem auto', maxWidth: '70%' },
    },
  },

  // Text effects and animations
  effects: {
    gradient: {
      background: 'linear-gradient(135deg, var(--primary), var(--link-primary))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    glow: {
      textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
    },
    emboss: {
      textShadow: '1px 1px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.3)',
    },
    inset: {
      textShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.8)',
    },
  },

  // Layout and component styles
  layouts: {
    // Centered full-height container
    centerPage: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
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

  // Component styles
  components: {
    // Card/layer styling
    card: {
      background: 'var(--layer)',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid var(--border, rgba(255, 255, 255, 0.1))',
    },
    // Quote block styling
    quote: {
      fontSize: '1.25rem',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
      fontStyle: 'italic',
      textAlign: 'center',
      margin: '3rem 0',
      padding: '2rem',
      background: 'var(--layer)',
      borderRadius: '12px',
      borderLeft: '4px solid var(--primary)',
      position: 'relative',
      '&::before': {
        content: '"',
        fontSize: '4rem',
        color: 'var(--primary)',
        position: 'absolute',
        top: '-0.5rem',
        left: '1rem',
        lineHeight: 1,
      },
    },
    // Statistics/number display
    statistic: {
      textAlign: 'center',
      '.number': {
        fontSize: '2.25rem',
        fontWeight: 800,
        color: 'var(--primary)',
        marginBottom: '0.5rem',
      },
      '.label': {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.4,
        letterSpacing: 'wide',
        textTransform: 'uppercase',
        color: 'var(--text-secondary, var(--text-primary))',
      },
    },
    // Custom list with arrow bullets
    arrowList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      'li': {
        fontSize: '0.875rem',
        padding: '0.25rem 0',
        position: 'relative',
        paddingLeft: '1rem',
        '&::before': {
          content: '"→"',
          position: 'absolute',
          left: 0,
          color: 'var(--primary)',
          fontWeight: 'bold',
        },
      },
    },
    // Error page specific styles
    errorHeading: {
      fontSize: '3rem',
      fontWeight: 600,
      color: 'var(--text-error)',
    },
    errorImage: {
      margin: '1rem auto',
      maxWidth: '60%',
    },
  },
}; 