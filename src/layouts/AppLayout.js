import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <div css={layoutStyle} className="page-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
