import React from 'react';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { useThemeContext } from '../contexts/ThemeContext';

const footerStyle = css`
  position: relative;
  left: 10%;
  right: 10%;
  padding: 20px 14px;
  font-size: 12px;

  ${Media.medium} {
    left: 5%;
    right: 5%;
    padding: 40px 16px;
  }

  ${Media.small} {
    left: 2%;
    right: 2%;
    padding: 40px 12px;
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
