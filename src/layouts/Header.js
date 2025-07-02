import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { useThemeContext } from '../contexts/ThemeContext';

import { ReactComponent as LogoIcon } from '../assets/hl-svgrepo-com.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const headerStyle = css`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border, rgba(255, 255, 255, 0.1));
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  width: 100%;
  position: relative;

  ${Media.medium} {
    height: 50px;
  }

  ${Media.small} {
    padding: 0 8px;
  }

  .mobile-left-section {
    display: none;

    ${Media.small} {
      display: flex;
      align-items: center;
      order: 1;
    }
  }

  .brand-link {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-right: 40px;
    z-index: 1001;

    /* Ensure the brand SVG icon adapts to theme colors */
    svg path,
    svg polyline,
    svg line,
    svg rect,
    svg circle {
      stroke: var(--text-primary);
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.4rem;
    }

    ${Media.small} {
      font-size: 1.5rem;
      margin-right: 0;
      order: 2;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
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

    ${Media.small} {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background-color: var(--bg);
      flex-direction: column;
      padding: 2rem 1rem;
      gap: 1.5rem;
      border-bottom: 1px solid var(--border, rgba(255, 255, 255, 0.1));
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      
      &.mobile-open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }

    a {
      text-decoration: none;
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: color 0.2s ease;

      &:hover {
        color: var(--primary);
      }

      &.active {
        color: var(--nav-active, var(--primary));
        font-weight: bold;
      }

      ${Media.small} {
        font-size: 1.2rem;
        padding: 0.5rem 0;
        width: 100%;
        text-align: center;
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1001;

    ${Media.small} {
      order: 3;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
    gap: 0.25rem;
    z-index: 1001;

    ${Media.small} {
      display: flex;
    }

    span {
      width: 25px;
      height: 3px;
      background-color: var(--text-primary);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.open span {
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  .hamburger-mobile {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
    gap: 0.25rem;
    z-index: 1001;
    margin-right: 0.5rem;

    ${Media.small} {
      display: flex;
    }

    span {
      width: 25px;
      height: 3px;
      background-color: var(--text-primary);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.open span {
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }

  .header-actions .hamburger {
    ${Media.small} {
      display: none;
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
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { isLight, toggleTheme } = useThemeContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
            
            ${Media.small} {
              display: block;
            }
          `}
          onClick={closeMobileMenu}
        />
      )}
      
      <header css={headerStyle}>
        <div className="mobile-left-section">
          <div className={`hamburger-mobile ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <Link to="/" replace={pathname === '/'} className="brand-link" onClick={closeMobileMenu}>
          <LogoIcon />
        </Link>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}> 
          <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/projects" className={pathname === '/projects' ? 'active' : ''} onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link to="/posts" className={pathname === '/posts' ? 'active' : ''} onClick={closeMobileMenu}>
            Posts
          </Link>
          <Link to="/hobbies" className={pathname === '/hobbies' ? 'active' : ''} onClick={closeMobileMenu}>
            Hobbies
          </Link>
          <Link to="/fosters" className={pathname === '/fosters' ? 'active' : ''} onClick={closeMobileMenu}>
            Fosters
          </Link>
        </nav>

        <div className="header-actions">
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isLight ? (
            <SunIcon className="theme" onClick={toggleTheme} />
          ) : (
            <MoonIcon className="theme" onClick={toggleTheme} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;