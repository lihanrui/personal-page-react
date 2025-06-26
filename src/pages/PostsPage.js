import React from 'react';
import { css } from '@emotion/react';

const postsPageStyle = css`
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

const PostsPage = () => {
  return (
    <div css={postsPageStyle}>
      <h1>Posts</h1>
      <p>Check out my posts and articles to get insights and ideas.</p>
      {/* Add your posts content here */}
    </div>
  );
};

export default PostsPage; 