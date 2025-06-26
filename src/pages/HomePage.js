import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
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

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <h1 className="title">Hello React!</h1>
      <p>Hello world!</p>
    </div>
  );
};

export default HomePage; 