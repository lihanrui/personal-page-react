import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { typography, fontFamily } from '../lib/util';

const pageLayoutStyle = css`
  background-color: var(--bg);
  color: var(--text-primary);
  min-height: 100vh;
  padding: calc(60px + 3rem) 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  ${fontFamily('primary')};

  ${Media.medium} {
    padding-top: calc(50px + 2rem);
  }

  ${Media.small} {
    padding-top: calc(50px + 1.5rem);
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    ${typography('h1')};
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 2rem;
    
    ${Media.medium} {
      font-size: 2.75rem; /* Responsive scaling */
    }
    
    ${Media.small} {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
    }
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    box-sizing: border-box;
    
    ${Media.medium} {
      padding: 0 1.5rem;
    }
    
    ${Media.small} {
      padding: 0 1rem;
    }
    
    p {
      ${typography('body')};
      color: var(--text-primary);
      
      &.lead {
        ${typography('lead')};
        color: var(--text-secondary, var(--text-primary));
      }
      
      &.large {
        ${typography('bodyLarge')};
      }
      
      &.small {
        ${typography('bodySmall')};
      }
    }
    
    h2 {
      ${typography('h2')};
      color: var(--text-primary);
      margin-top: 3rem;
    }
    
    h3 {
      ${typography('h3')};
      color: var(--text-primary);
      margin-top: 2.5rem;
    }
    
    h4 {
      ${typography('h4')};
      color: var(--text-primary);
      margin-top: 2rem;
    }
    
    /* Lists */
    ul, ol {
      margin-bottom: 1.25rem;
      padding-left: 1.5rem;
      
      li {
        line-height: 1.625;
        margin-bottom: 0.5rem;
        font-size: 1rem;
      }
    }
    
    /* Links */
    a {
      color: var(--link-primary);
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
      transition: all 0.2s ease;
      
      &:hover {
        color: var(--link-primary-hover, var(--link-primary));
        text-decoration-thickness: 2px;
      }
    }
    
    /* Code blocks */
    code {
      ${fontFamily('mono')};
      font-size: 0.875rem;
      background-color: var(--layer);
      padding: 0.125rem 0.375rem;
      border-radius: 4px;
      border: 1px solid var(--border, rgba(255, 255, 255, 0.1));
    }
    
    pre {
      ${fontFamily('mono')};
      font-size: 0.875rem;
      background-color: var(--layer);
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid var(--border, rgba(255, 255, 255, 0.1));
      overflow-x: auto;
      margin-bottom: 1.25rem;
    }
  }
`;

const PageLayout = ({ title, children, className, ...props }) => {
  return (
    <div css={pageLayoutStyle} className={className} {...props}>
      {title && <h1>{title}</h1>}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 