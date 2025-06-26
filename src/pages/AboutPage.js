import React from 'react';
import { css } from '@emotion/react';

const AboutPageStyle = css`
  background-color: var(--bg);
  color: var(--text-primary);
  min-height: 100vh;
  padding: 2rem;
  
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    color: var(--text-primary);
  }
`;

const AboutPage = () => {
  return (
    <div css={[AboutPageStyle]}>
      <h1 className="title">About Me</h1>
    </div>
  );
};

export default AboutPage; 