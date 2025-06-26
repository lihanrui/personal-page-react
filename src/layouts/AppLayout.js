import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = css`
  main {
    padding-top: 20px; /* Add some space below the sticky header */
  }
`;

const AppLayout = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
