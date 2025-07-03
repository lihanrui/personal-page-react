import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = css`
  /* Page container with responsive margins */
  .page-container {
    margin: 0 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
      margin: 0 5%;
    }
    
    @media (max-width: 480px) {
      margin: 0 2%;
    }
  }

  main {
    padding-top: 20px; /* Add some space below the sticky header */
    flex: 1; /* Allow main to grow and push footer down */
  }
`;

const AppLayout = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <div className="page-container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
