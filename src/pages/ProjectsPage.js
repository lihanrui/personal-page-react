import React from 'react';
import { css } from '@emotion/react';

const projectsPageStyle = css`
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

const ProjectsPage = () => {
  return (
    <div css={projectsPageStyle}>
      <h1>Projects</h1>
      <p>Welcome to my projects! Here you can browse and explore my work.</p>
      {/* Add your projects content here */}
    </div>
  );
};

export default ProjectsPage; 