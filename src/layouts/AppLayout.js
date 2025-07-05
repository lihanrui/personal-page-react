import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = css`
  /* Page container without fixed margins - now managed by individual pages */
  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
