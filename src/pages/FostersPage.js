import React from 'react';
import PageLayout from '../layouts/PageLayout';
import PageContainer from '../layouts/PageContainer';
import GlassCard, { RainbowGradientCard, HobbyCard } from '../components/GlassCard';
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
