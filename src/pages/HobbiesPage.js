import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import PageContainer from '../layouts/PageContainer';
import StickyShowcase from '../components/StickyShowcase';

const heroSectionStyles = css`
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.5rem 3rem;
  overflow: hidden;
`;

const heroBackdrop = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(97, 255, 201, 0.1) 0%, rgba(193, 255, 158, 0.2) 40%, rgba(24, 60, 105, 0.35) 100%);
  filter: blur(70px);
  opacity: 0.7;
`;

const heroCardStyles = css`
  position: relative;
  max-width: 640px;
  text-align: center;
  background: rgba(22, 28, 40, 0.5);
  border: 1px solid rgba(97, 255, 201, 0.16);
  border-radius: 24px;
  padding: 2.75rem 3rem;
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);

  h1 {
    font-size: clamp(2.4rem, 2rem + 1.5vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const hobbyShowcaseItems = [
  {
    key: 'bouldering',
    badge: 'Movement Gyms',
    title: {
      leading: 'Climbing strong through',
      highlight: 'three years of bouldering',
      trailing: 'and the occasional top rope session.',
    },
    description:
      'Routes, dynos, and community. Training at Movement Gym in San Francisco keeps technique sharp and the stoke high.',
    media: {
      gradient:
        'radial-gradient(circle at 20% 30%, rgba(131, 255, 207, 0.45), transparent 60%), linear-gradient(135deg, rgba(16, 33, 48, 0.92), rgba(29, 118, 163, 0.55))',
    },
  },
  {
    key: 'music',
    badge: 'Piano & Playlists',
    title: {
      leading: 'Soundtracking days with',
      highlight: 'piano improvisation',
      trailing: 'across rock, classical, and pop.',
    },
    description:
      'A lifelong musician exploring harmonies and reimagining favorite tracks at the keys—equal parts relaxation and creative challenge.',
    media: {
      gradient:
        'radial-gradient(circle at 70% 20%, rgba(255, 215, 140, 0.45), transparent 55%), linear-gradient(135deg, rgba(28, 24, 55, 0.92), rgba(108, 84, 220, 0.55))',
    },
  },
  {
    key: 'cooking',
    badge: 'Kitchen Lab',
    title: {
      leading: 'Recreating restaurant favorites with',
      highlight: 'butter-forward experiments',
      trailing: 'for friends, family, and feline taste-testers.',
    },
    description:
      'Recipe tinkering, comfort food, and plating practice turn weeknights into culinary projects—even when the cats insist on supervision.',
    media: {
      gradient:
        'radial-gradient(circle at 30% 70%, rgba(255, 189, 153, 0.45), transparent 55%), linear-gradient(135deg, rgba(48, 20, 12, 0.9), rgba(255, 172, 112, 0.55))',
    },
  },
  {
    key: 'fostering',
    badge: '20+ Fosters',
    title: {
      leading: 'A home base for kittens with',
      highlight: 'hearts full of mischief',
      trailing: 'and eventual forever families.',
    },
    description:
      'Partnering with the Humane Society of Silicon Valley to nurture playful personalities before they meet their humans.',
    media: {
      gradient:
        'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.35), transparent 60%), linear-gradient(135deg, rgba(21, 47, 66, 0.92), rgba(147, 225, 255, 0.45))',
    },
  },
];

const HobbiesPage = () => {
  return (
    <>
      <section css={heroSectionStyles}>
        <div css={heroBackdrop} />
        <div css={heroCardStyles}>
          <h1>Unwinding with Intention</h1>
          <p>
            Movement, music, food, and felines—four spaces that keep curiosity alive outside of code. Each hobby balances
            focused craft with a sense of play.
          </p>
        </div>
      </section>

      <StickyShowcase items={hobbyShowcaseItems} />

      <PageContainer margin="default" padding="default">
        <PageLayout title="Hobbies">
          <p>
            <strong>Bouldering</strong>: I've been bouldering for about 3 years now, and I love it. I've also top roped a
            few times. My favorite gym is{' '}
            <a href="https://movementgyms.com/" target="_blank" rel="noopener noreferrer">
              Movement
            </a>{' '}
            in San Francisco.
          </p>
          <p>
            <strong>Music</strong>: I love to play piano and listen to all sorts of music, including rock, classical, and
            pop.
          </p>
          <p>
            <strong>Cooking</strong>: I love to experiment with recipes and serve it to my friends and family, and
            occasionally cats. I take particular pride in replicating restaurant dishes at home, although it comes at the
            cost of my waistline and many bars of butter.
          </p>
          <p>
            <strong>
              <a href="https://hssv.org" target="_blank" rel="noopener noreferrer">
                Fostering
              </a>
            </strong>
            : I've fostered over 20 cats and kittens, and I'm currently fostering a cat named Monmonmon. (My friend's cat
            with the same fur pattern is named Monmon, so this little one is named after her.)
          </p>
        </PageLayout>
      </PageContainer>
    </>
  );
};

export default HobbiesPage;
