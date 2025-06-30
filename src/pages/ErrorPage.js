import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { layout, component, responsiveText } from '../lib/util';
import { default as TakenSVG } from '../assets/undraw_Taken.svg';

const errorPageWrapper = css`
  ${layout('centerPage')};

  h1 {
    ${component('errorHeading')};
  }

  img {
    ${component('errorImage')};
  }

  a {
    display: block;
    margin: 1rem auto;
    color: var(--link-primary);
  }

  ${Media.medium} {
    img {
      margin: 2rem auto;
      max-width: 70%;
    }
  }

  ${Media.small} {
    h1 {
      font-size: 2.5rem;
    }

    img {
      margin: 2rem auto;
      max-width: 80%;
    }
  }
`;

const ErrorPage = () => {
  return (
    <div css={[errorPageWrapper]}>
      <h1>Page Not Found.</h1>
      <img src={TakenSVG} alt="" />
      <Link to="/">go Home</Link>
    </div>
  );
};

export default ErrorPage;
