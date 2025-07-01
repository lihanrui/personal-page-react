import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';

const GlassCard = ({ 
  children, 
  className,
  intensity = 'medium', // 'light', 'medium', 'strong'
  hover = true,
  ...props 
}) => {
  const glassStyles = css`
    /* Base glassmorphism styling */
    background: var(--glass-bg, rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(${getBlurIntensity(intensity)});
    -webkit-backdrop-filter: blur(${getBlurIntensity(intensity)});
    border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    
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
        background: var(--glass-bg-hover, rgba(255, 255, 255, 0.15));

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
  <GlassCard intensity="medium" hover={true} {...props}>
    {children}
  </GlassCard>
);

export const HobbyCard = ({ children, ...props }) => (
  <GlassCard intensity="light" hover={true} {...props}>
    {children}
  </GlassCard>
);

export const FeatureCard = ({ children, ...props }) => (
  <GlassCard intensity="strong" hover={false} {...props}>
    {children}
  </GlassCard>
); 