import { css } from '@emotion/react';
import { Media } from './Media';

// Card component styles
export const cardStyles = css`
  background: var(--bg);
  border: 1px solid var(--border, rgba(255, 255, 255, 0.1));
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary, rgba(254, 215, 102, 0.3));
  }

  ${Media.small} {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

// Grid layout styles
export const gridStyles = {
  cardGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  `,

  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  `,

  fostersGrid: css`
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  `,

  fosterImagesGrid: css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;

    ${Media.small} {
      grid-template-columns: 1fr;
    }
  `,
};

// Image styles
export const imageStyles = {
  fosterImage: css`
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: var(--shadow-md);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: var(--shadow-lg);
    }

    ${Media.small} {
      max-height: 300px;
    }
  `,
};

// Stat/badge styles
export const statStyles = css`
  background: var(--primary);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Fact card styles for "By the Numbers" section
export const factStyles = css`
  text-align: center;

  .number {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 0.5rem;
    text-shadow: var(--shadow-sm);
  }

  .label {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-secondary, var(--text-primary));
  }
`;

// Margin utilities
export const marginStyles = {
  mb1: css`
    margin-bottom: 1rem;
  `,
  mb2: css`
    margin-bottom: 2rem;
  `,
  mt1: css`
    margin-top: 1rem;
  `,
  mt2: css`
    margin-top: 2rem;
  `,
  my1: css`
    margin: 1rem 0;
  `,
  my2: css`
    margin: 2rem 0;
  `,
};

// Text alignment utilities
export const textAlignStyles = {
  center: css`
    text-align: center;
  `,
  left: css`
    text-align: left;
  `,
  right: css`
    text-align: right;
  `,
  justify: css`
    text-align: justify;
  `,
};

// Flex utilities
export const flexStyles = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  centerWrap: css`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  columnGap: css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
};

// Foster-specific styles
export const fosterStyles = css`
  .foster-card {
    ${flexStyles.columnGap}
  }

  .foster-content {
    flex: 1;
  }

  .foster-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .foster-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .foster-stats {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

// Company logo styles
export const companyLogoStyles = css`
  display: block;
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  margin-right: 0.75rem;
  filter: var(--logo-filter, none);
  flex-shrink: 0;
  transform: translateY(15%);

  &[alt='Mercedes-Benz'] {
    width: 2.5rem;
    height: 2.5rem;
  }

  &[alt='Google'] {
    width: 3.25rem;
    height: 3.25rem;
    transform: translateY(20%);
  }

  &[alt='Samsung'] {
    width: 3.5rem;
    height: 3.5rem;
  }

  &[alt='Proximic'] {
    width: 4rem;
    height: 4rem;
  }
`;

// Company header styles
export const companyHeaderStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  .company-info {
    display: flex;
    align-items: center;
  }

  .company-name {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--nav-active);
    margin: 0;
    text-shadow: var(--shadow-sm);
  }

  .duration {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.625;
    color: var(--text-secondary);
  }
`;
