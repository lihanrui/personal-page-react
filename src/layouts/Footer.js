import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { useThemeContext } from '../contexts/ThemeContext';

const footerStyle = css`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 2rem;
  margin-left: 15%;
  padding: 0px 28px;
  margin-right: 15%;
  font-size: 12px;

  ${Media.medium} {
    margin-left: 15%;
    margin-right: 15%;
    padding: 40px 16px;
  }

  ${Media.small} {
    margin-left: 15%;
    margin-right: 15%;
    padding: 40px 12px;
  }

  @media (max-width: 768px) {
    margin-left: 10%;
    margin-right: 10%;
    padding: 40px 10px;
  }

  @media (max-width: 480px) {
    margin-left: 5%;
    margin-right: 5%;
    padding: 40px 5px;
  }

  & > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Footer = () => {
  const { isLight } = useThemeContext();

  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>© 2025 Hanrui Li</div>
      </nav>
    </footer>
  );
};

export default Footer;
