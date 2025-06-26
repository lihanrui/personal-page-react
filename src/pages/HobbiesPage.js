import React from 'react';
import { css } from '@emotion/react';

const hobbiesPageStyle = css`
  padding: 40px 20px;
  max-width: 1280px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--primary);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text);
  }
`;

const HobbiesPage = () => {
  return (
    <div css={hobbiesPageStyle}>
      <h1>Hobbies</h1>
      <p>Explore my hobbies and personal interests outside of work.</p>
      {/* Add your hobbies content here */}
    </div>
  );
};

export default HobbiesPage; 