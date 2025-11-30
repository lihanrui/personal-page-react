import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import PageContainer from '../layouts/PageContainer';
import defaultBackground from '../assets/illumelifestudios.png';

const heroWrapperStyles = css({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  paddingBottom: '2rem',
});

const heroImageStyles = css`
  width: 100%;
  display: block;
  object-fit: cover;
`;

const buttonGroupStyles = css`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const heroButtonStyles = css`
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    color: #111;
  }
`;

const CompanyPage = ({ backgroundImage = defaultBackground }) => {
  useEffect(() => {
    document.title = 'Illumelife Studios | Built For Purpose';
  }, []);

  return (
    <PageContainer margin="full" padding="none" maxWidth="100%">
      <div css={heroWrapperStyles}>
        <img src={backgroundImage} alt="Company background" css={heroImageStyles} />
        <div css={buttonGroupStyles}>
          <Link to="/showcase-lab" css={heroButtonStyles}>
            Learn More
          </Link>
          <Link to="/contact" css={heroButtonStyles}>
            Contact Us
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default CompanyPage;
