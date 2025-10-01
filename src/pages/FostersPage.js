import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import PageContainer from '../layouts/PageContainer';
import GlassCard, { RainbowGradientCard, HobbyCard } from '../components/GlassCard';
import StickyShowcase from '../components/StickyShowcase';
import {
  fosterStyles,
  gridStyles,
  imageStyles,
  statStyles,
  textAlignStyles,
  marginStyles,
  flexStyles,
} from '../lib/style/Components';

// Import foster images
import monmonmonImg from '../assets/fosters/monmonmon.jpg';
import cookieImg from '../assets/fosters/cookie.jpg';
import mochiSesameImg from '../assets/fosters/mochi_sesame.jpg';
import sunnyImg from '../assets/fosters/sunny.jpg';
import sunnySantaImg from '../assets/fosters/sunny_santa.jpg';
import daisyImg from '../assets/fosters/daisy.jpg';
import receivedImg from '../assets/fosters/received_4889754461124684.jpeg';
import catsplosionImg from '../assets/fosters/catsplosion.jpg';
import newbornKittensImg from '../assets/fosters/newborn_kittens.jpg';

const heroSectionStyles = css`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 3rem;
  overflow: hidden;
`;

const heroBackdrop = css`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(97, 255, 201, 0.18) 0%, rgba(255, 214, 102, 0.25) 45%, rgba(32, 72, 116, 0.4) 100%);
  filter: blur(80px);
  opacity: 0.65;
`;

const heroCardStyles = css`
  position: relative;
  max-width: 720px;
  text-align: center;
  background: rgba(18, 24, 36, 0.55);
  border: 1px solid rgba(255, 214, 102, 0.18);
  border-radius: 26px;
  padding: 3.2rem 3.75rem;
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(22px);

  h1 {
    font-size: clamp(2.6rem, 2.2rem + 1.8vw, 3.4rem);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const fosterShowcaseItems = [
  {
    key: 'care',
    badge: 'Daily Rhythm',
    title: {
      leading: 'Structured care routines keep',
      highlight: 'kittens thriving',
      trailing: 'through every growth milestone.',
    },
    description:
      'From syringe feeding to playtime socialization, each foster has a tailored schedule that balances nutrition, wellness, and enrichment.',
    media: {
      gradient:
        'radial-gradient(circle at 25% 30%, rgba(255, 214, 102, 0.45), transparent 60%), linear-gradient(135deg, rgba(16, 28, 48, 0.92), rgba(255, 173, 120, 0.55))',
    },
  },
  {
    key: 'storytelling',
    badge: 'Adoption Journeys',
    title: {
      leading: 'Sharing personalities through',
      highlight: 'photo essays & updates',
      trailing: 'to connect cats with their people.',
    },
    description:
      'Documenting quirks, milestones, and medical progress helps adopters bond early and feel confident welcoming a new companion.',
    media: {
      gradient:
        'radial-gradient(circle at 70% 25%, rgba(131, 255, 207, 0.45), transparent 55%), linear-gradient(135deg, rgba(24, 22, 60, 0.92), rgba(104, 173, 255, 0.5))',
    },
  },
  {
    key: 'community',
    badge: 'HSSV Foster',
    title: {
      leading: 'Partnering with the Humane Society of Silicon Valley to',
      highlight: 'open space for the next rescue',
      trailing: 'while guiding adopters post-placement.',
    },
    description:
      'Staying connected with shelter teams ensures every kitten gets specialized care, and every adopter feels supported long after pick-up day.',
    media: {
      gradient:
        'radial-gradient(circle at 40% 65%, rgba(255, 255, 255, 0.35), transparent 60%), linear-gradient(135deg, rgba(22, 42, 68, 0.9), rgba(97, 255, 201, 0.45))',
    },
  },
];

const fosters = [
  {
    name: 'Monmonmon',
    images: [monmonmonImg],
    description:
      'A playful and energetic foster who loves to explore and chase toys. Monmonmon has a unique personality that brightens every room.',
    stats: ['Active', 'Playful', 'Adopted'],
  },
  {
    name: 'Cookie',
    images: [cookieImg],
    description:
      'Sweet as can be, Cookie is a gentle soul who loves cuddles and treats. This little one has a heart of gold and brings joy to everyone.',
    stats: ['Sweet', 'Gentle', 'Cuddly'],
  },
  {
    name: 'Mochi & Sesame',
    images: [mochiSesameImg],
    description:
      'A dynamic duo that came together and stayed together. Mochi and Sesame are inseparable best friends who love to play and nap together.',
    stats: ['Bonded Pair', 'Playful', 'Adopted Together'],
  },
  {
    name: 'Sunny',
    images: [sunnyImg, sunnySantaImg],
    description:
      'Sunny lives up to their name with a bright personality and warm disposition. From regular days to special occasions like Christmas, Sunny brings sunshine everywhere.',
    stats: ['Bright', 'Friendly', 'Holiday Spirit'],
  },
  {
    name: 'Daisy',
    images: [daisyImg],
    description:
      'Daisy is a beautiful flower of a cat with a delicate nature and graceful movements. This gentle foster has a special place in our hearts.',
    stats: ['Graceful', 'Delicate', 'Beautiful'],
  },
  {
    name: 'Received',
    images: [receivedImg],
    description:
      'A special foster who came to us unexpectedly and captured our hearts immediately. This little one has a story that touches everyone who meets them.',
    stats: ['Special', 'Unexpected', 'Beloved'],
  },
  {
    name: 'Catsplosion',
    images: [catsplosionImg],
    description:
      'When you have multiple fosters, sometimes you get a catsplosion! This energetic group keeps us on our toes and fills our home with joy.',
    stats: ['Multiple', 'Energetic', 'Chaotic Fun'],
  },
  {
    name: 'Newborn Kittens',
    images: [newbornKittensImg],
    description:
      'The tiniest and most precious fosters of all. These newborn kittens require special care and attention, but watching them grow is the most rewarding experience.',
    stats: ['Newborn', 'Special Care', 'Growing Fast'],
  },
];

const FostersPage = () => {
  return (
    <>
      <section css={heroSectionStyles}>
        <div css={heroBackdrop} />
        <div css={heroCardStyles}>
          <h1>Foster Stories</h1>
          <p>
            A revolving door of tiny houseguests, each with a story worth telling. Fostering creates the space, structure,
            and love that bridges shelters and forever homes.
          </p>
        </div>
      </section>

      <StickyShowcase items={fosterShowcaseItems} />

      <PageContainer margin="default" padding="default">
        <PageLayout>
          <div css={[fosterStyles, gridStyles.fostersGrid]}>
            <RainbowGradientCard>
              <h2 css={[marginStyles.mb1, textAlignStyles.center]}>Meet the Kittens</h2>
              <p css={[textAlignStyles.center, { color: 'var(--text-secondary)', lineHeight: '1.6' }]}>
                These wonderful kitties have touched our lives and found their forever homes through the{' '}
                <a href="https://hssv.org" target="_blank" rel="noopener noreferrer">
                  Humane Society of Silicon Valley
                </a>
                .
              </p>
            </RainbowGradientCard>

            <div>
              {fosters.map((foster, index) => (
                <HobbyCard key={index} className="foster-card">
                  <div css={gridStyles.fosterImagesGrid}>
                    {foster.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${foster.name} - Image ${imgIndex + 1}`}
                        css={imageStyles.fosterImage}
                      />
                    ))}
                  </div>
                  <div className="foster-content">
                    <h3 className="foster-name">{foster.name}</h3>
                    <p className="foster-description">{foster.description}</p>
                    <div className="foster-stats">
                      {foster.stats.map((stat, statIndex) => (
                        <span key={statIndex} css={statStyles}>
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </HobbyCard>
              ))}
            </div>

            <GlassCard gradient={true} gradientType="warm" css={[marginStyles.mt2, textAlignStyles.center]}>
              <h3>Interested in Fostering?</h3>
              <p css={marginStyles.mb1}>
                Fostering saves lives and opens up space in shelters for more animals in need. If you're interested in
                becoming a foster parent, please reach out to your local animal shelters.
              </p>
              <div css={flexStyles.centerWrap}>
                <span css={statStyles}>Save Lives</span>
                <span css={statStyles}>Make a Difference</span>
                <span css={statStyles}>Rewarding Experience</span>
              </div>
            </GlassCard>
          </div>
        </PageLayout>
      </PageContainer>
    </>
  );
};

export default FostersPage;
