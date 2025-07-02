import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';

const GlassCard = ({ 
  children, 
  className,
  intensity = 'medium', // 'light', 'medium', 'strong'
  hover = true,
  gradient = false, // Enable gradient background
  gradientType = 'primary', // 'primary', 'secondary', 'rainbow', 'custom'
  customGradient = null, // Custom gradient string
  ...props 
}) => {
  const glassStyles = css`
    /* Base glassmorphism styling */
    background: var(--glass-bg, rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(${getBlurIntensity(intensity)});
    -webkit-backdrop-filter: blur(${getBlurIntensity(intensity)});
    border: 2px solid transparent;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    
    /* Gradient border */
    ${gradient && css`
      border-image: ${getBorderGradientStyle(gradientType, customGradient)} 1;
    `}
    
    /* Ensure backdrop support */
    @supports not (backdrop-filter: blur(10px)) {
      background: var(--glass-fallback-bg, rgba(255, 255, 255, 0.9));
    }

    /* Theme-specific glass effects */
    [data-theme="light"] &,
    :root:not([data-theme="dark"]) & {
      --glass-bg: rgba(255, 255, 255, 0.25);
      --glass-border: rgba(255, 255, 255, 0.3);
      --glass-fallback-bg: rgba(255, 255, 255, 0.85);
      --glass-shine: rgba(255, 255, 255, 0.1);
    }

    [data-theme="dark"] & {
      --glass-bg: rgba(255, 255, 255, 0.05);
      --glass-border: rgba(255, 255, 255, 0.1);
      --glass-fallback-bg: rgba(0, 0, 0, 0.8);
      --glass-shine: rgba(255, 255, 255, 0.05);
    }

    /* Subtle shine effect */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg, 
        transparent, 
        var(--glass-shine, rgba(255, 255, 255, 0.1)), 
        transparent
      );
      opacity: 0.6;
    }

    /* Hover effects */
    ${hover && css`
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary, rgba(254, 215, 102, 0.3));
        background: ${gradient ? getHoverGradientStyle() : 'var(--glass-bg-hover, rgba(255, 255, 255, 0.15))'};

        [data-theme="light"] & {
          --glass-bg-hover: rgba(255, 255, 255, 0.35);
        }

        [data-theme="dark"] & {
          --glass-bg-hover: rgba(255, 255, 255, 0.08);
        }
      }
    `}

    /* Responsive adjustments */
    ${Media.small} {
      padding: 1.25rem;
      border-radius: 12px;
    }
  `;

  // Helper function to get background style
  function getBackgroundStyle() {
    if (!gradient) {
      return 'var(--glass-bg, rgba(255, 255, 255, 0.1))';
    }

    if (customGradient) {
      return customGradient;
    }

    switch (gradientType) {
      case 'primary':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.1), rgba(255, 255, 255, 0.1))';
      case 'secondary':
        return 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))';
      case 'rainbow':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.1), rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1), rgba(34, 197, 94, 0.1))';
      case 'warm':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.1), rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1))';
      case 'cool':
        return 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(34, 197, 94, 0.1), rgba(6, 182, 212, 0.1))';
      default:
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.1), rgba(255, 255, 255, 0.1))';
    }
  }

  // Helper function to get hover gradient style
  function getHoverGradientStyle() {
    if (customGradient) {
      return customGradient.replace(/0\.1/g, '0.2').replace(/0\.05/g, '0.15');
    }

    switch (gradientType) {
      case 'primary':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.2), rgba(255, 255, 255, 0.2))';
      case 'secondary':
        return 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))';
      case 'rainbow':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.2), rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2), rgba(34, 197, 94, 0.2))';
      case 'warm':
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.2), rgba(251, 146, 60, 0.2), rgba(239, 68, 68, 0.2))';
      case 'cool':
        return 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(34, 197, 94, 0.2), rgba(6, 182, 212, 0.2))';
      default:
        return 'linear-gradient(135deg, rgba(254, 215, 102, 0.2), rgba(255, 255, 255, 0.2))';
    }
  }

  function getBorderGradientStyle(type, custom) {
    if (custom) return `linear-gradient(135deg, ${custom})`;
    switch (type) {
      case 'primary':
        return 'linear-gradient(135deg, #FED766, #FFFFFF)';
      case 'secondary':
        return 'linear-gradient(135deg, #6366F1, #A855F7)';
      case 'rainbow':
        return 'linear-gradient(135deg, #FED766, #6366F1, #A855F7, #22C55E)';
      case 'warm':
        return 'linear-gradient(135deg, #FED766, #FB923C, #EF4444)';
      case 'cool':
        return 'linear-gradient(135deg, #6366F1, #22C55E, #06B6D4)';
      default:
        return 'linear-gradient(135deg, #FED766, #FFFFFF)';
    }
  }

  return (
    <div css={glassStyles} className={className} {...props}>
      {children}
    </div>
  );
};

// Helper function to determine blur intensity
const getBlurIntensity = (intensity) => {
  switch (intensity) {
    case 'light': return '8px';
    case 'medium': return '12px';
    case 'strong': return '20px';
    default: return '12px';
  }
};

export default GlassCard;

// Pre-configured variants for common use cases
export const ProjectCard = ({ children, ...props }) => (
  <GlassCard intensity="medium" hover={true} gradient={true} gradientType="primary" {...props}>
    {children}
  </GlassCard>
);

export const HobbyCard = ({ children, ...props }) => (
  <GlassCard intensity="light" hover={true} gradient={true} gradientType="warm" {...props}>
    {children}
  </GlassCard>
);

export const FeatureCard = ({ children, ...props }) => (
  <GlassCard intensity="strong" hover={false} gradient={true} gradientType="rainbow" {...props}>
    {children}
  </GlassCard>
);

// New gradient-specific variants
export const GradientCard = ({ children, gradientType = 'primary', ...props }) => (
  <GlassCard intensity="medium" hover={true} gradient={true} gradientType={gradientType} {...props}>
    {children}
  </GlassCard>
);

export const PrimaryGradientCard = ({ children, ...props }) => (
  <GlassCard intensity="medium" hover={true} gradient={true} gradientType="primary" {...props}>
    {children}
  </GlassCard>
);

export const RainbowGradientCard = ({ children, ...props }) => (
  <GlassCard intensity="medium" hover={true} gradient={true} gradientType="rainbow" {...props}>
    {children}
  </GlassCard>
); 