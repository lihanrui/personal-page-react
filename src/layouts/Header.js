import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { useThemeContext } from '../contexts/ThemeContext';

import { ReactComponent as LogoIcon } from '../assets/zap.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 12px;
  width: 100%;
  max-width: 1280px;

  ${Media.medium} {
    height: 50px;
  }

  .brand-link {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-right: 40px;

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.4rem;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    flex: 1;

    ${Media.medium} {
      gap: 20px;
    }

    a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: color 0.2s ease;

      &:hover {
        color: var(--primary);
      }

      &.active {
        color: var(--primary);
        font-weight: bold;
      }
    }
  }

  svg {
    cursor: pointer;
    color: var(--primary);
    fill: var(--primary);
  }

  svg.theme {
    display: flex;
    user-select: none;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { isLight, toggleTheme } = useThemeContext();

  return (
    <header css={[headerStyle]}>
      <Link to="/" replace={pathname === '/'} className="brand-link">
        <LogoIcon /> brand
      </Link>

      <nav className="nav-links">
        <Link 
          to="/" 
          className={pathname === '/' ? 'active' : ''}
        >
          About
        </Link>
        <Link 
          to="/projects" 
          className={pathname === '/projects' ? 'active' : ''}
        >
          Projects
        </Link>
        <Link 
          to="/posts" 
          className={pathname === '/posts' ? 'active' : ''}
        >
          Posts
        </Link>
        <Link 
          to="/hobbies" 
          className={pathname === '/hobbies' ? 'active' : ''}
        >
          Hobbies
        </Link>
      </nav>

      <div>
        {isLight ? (
          <SunIcon className="theme" onClick={toggleTheme} />
        ) : (
          <MoonIcon className="theme" onClick={toggleTheme} />
        )}
      </div>
    </header>
  );
};

export default Header;