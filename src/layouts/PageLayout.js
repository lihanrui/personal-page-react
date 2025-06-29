import React from 'react';
import { css } from '@emotion/react';

const pageLayoutStyle = css`
  background-color: var(--bg);
  color: var(--text-primary);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 2rem;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
    
    p {
      line-height: 1.6;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
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