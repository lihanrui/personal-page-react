import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import PageContainer from '../layouts/PageContainer';
import { Media } from '../lib/style';
import { default as TakenSVG } from '../assets/undraw_Taken.svg';

const errorPageWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 4vw, 3rem);
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  min-height: 60vh;

  h1 {
    font-size: clamp(2.25rem, 1.5rem + 2.5vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    margin: 0;
  }

  p {
    color: var(--text-secondary);
    max-width: 32rem;
  }

  img {
    max-width: 60%;
    height: auto;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1.75rem;
    border-radius: 999px;
    background: var(--primary);
    color: var(--text-on-primary, #000);
    font-weight: 600;
    letter-spacing: 0.02em;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      filter 0.2s ease;
    margin-top: 0.5rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      filter: brightness(1.05);
    }
  }

  ${Media.medium} {
    img {
      max-width: 70%;
    }

    h1 {
      font-size: clamp(2rem, 1.25rem + 2vw, 2.5rem);
    }
  }

  ${Media.small} {
    padding: clamp(2.5rem, 8vw, 4rem) clamp(1.25rem, 6vw, 2rem);

    img {
      max-width: 85%;
    }

    h1 {
      font-size: clamp(1.75rem, 1.1rem + 2.5vw, 2.1rem);
    }
  }
`;

const ErrorPage = () => {
  return (
    <PageContainer margin="default" padding="default">
      <div css={[errorPageWrapper]}>
        <h1>Page Not Found.</h1>
        <img src={TakenSVG} alt="" />
        <p>The page you were looking for is missing or moved. Let&apos;s head back to safer ground.</p>
        <Link to="/">Go Home</Link>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
