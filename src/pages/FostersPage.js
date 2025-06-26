import React from 'react';
import { css } from '@emotion/react';

const fostersPageStyle = css`
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

const FostersPage = () => {
  return (
    <div css={fostersPageStyle}>
      <h1>Fosters</h1>
      <p>Welcome to the Fosters section. Share your fostering experiences and stories here.</p>
      {/* Add your fosters content here */}
    </div>
  );
};

export default FostersPage; 