import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import PageContainer from '../layouts/PageContainer';
import { Media, layout, component, responsiveText } from '../lib/style';
import { default as TakenSVG } from '../assets/undraw_Taken.svg';

const errorPageWrapper = css`
  ${layout.flexColumnCenter}
  ${layout.pagePadding}
  ${component.gapLarge}
  text-align: center;
  min-height: 60vh;

  h1 {
    ${responsiveText.heading1}
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
    ${component.buttonPrimary}
    margin-top: 0.5rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }

  ${Media.medium} {
    img {
      max-width: 70%;
    }

    h1 {
      ${responsiveText.heading2}
    }
  }

  ${Media.small} {
    ${layout.pagePaddingSmall}

    img {
      max-width: 85%;
    }

    h1 {
      ${responsiveText.heading3}
    }
  }
`;

const ErrorPage = () => {
  return (
    <PageContainer margin="default" padding="default">
      <div css={[errorPageWrapper]}>
        <h1>Page Not Found.</h1>
        <img src={TakenSVG} alt="" />
        <p>The page you were looking for is missing or moved. Let's head back to safer ground.</p>
        <Link to="/">Go Home</Link>
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
