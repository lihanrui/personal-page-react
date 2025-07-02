import React from 'react';
import { css } from '@emotion/react';
import PageLayout from '../layouts/PageLayout';
import GlassCard, { RainbowGradientCard, HobbyCard } from '../components/GlassCard';
import { Media } from '../lib/style';

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

const FostersPage = () => {
  const fosterStyles = css`
    .fosters-grid {
      display: grid;
      gap: 2rem;
      margin-top: 2rem;
    }

    .foster-card {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .foster-images {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      align-items: center;
    }

    .foster-image {
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: var(--shadow-md);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-lg);
      }
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

    .stat {
      background: var(--primary);
      color: #000;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ${Media.small} {
      .foster-images {
        grid-template-columns: 1fr;
      }

      .foster-image {
        max-height: 300px;
      }
    }
  `;

  const fosters = [
    {
      name: "Monmonmon",
      images: [monmonmonImg],
      description: "A playful and energetic foster who loves to explore and chase toys. Monmonmon has a unique personality that brightens every room.",
      stats: ["Active", "Playful", "Adopted"]
    },
    {
      name: "Cookie",
      images: [cookieImg],
      description: "Sweet as can be, Cookie is a gentle soul who loves cuddles and treats. This little one has a heart of gold and brings joy to everyone.",
      stats: ["Sweet", "Gentle", "Cuddly"]
    },
    {
      name: "Mochi & Sesame",
      images: [mochiSesameImg],
      description: "A dynamic duo that came together and stayed together. Mochi and Sesame are inseparable best friends who love to play and nap together.",
      stats: ["Bonded Pair", "Playful", "Adopted Together"]
    },
    {
      name: "Sunny",
      images: [sunnyImg, sunnySantaImg],
      description: "Sunny lives up to their name with a bright personality and warm disposition. From regular days to special occasions like Christmas, Sunny brings sunshine everywhere.",
      stats: ["Bright", "Friendly", "Holiday Spirit"]
    },
    {
      name: "Daisy",
      images: [daisyImg],
      description: "Daisy is a beautiful flower of a cat with a delicate nature and graceful movements. This gentle foster has a special place in our hearts.",
      stats: ["Graceful", "Delicate", "Beautiful"]
    },
    {
      name: "Received",
      images: [receivedImg],
      description: "A special foster who came to us unexpectedly and captured our hearts immediately. This little one has a story that touches everyone who meets them.",
      stats: ["Special", "Unexpected", "Beloved"]
    },
    {
      name: "Catsplosion",
      images: [catsplosionImg],
      description: "When you have multiple fosters, sometimes you get a catsplosion! This energetic group keeps us on our toes and fills our home with joy.",
      stats: ["Multiple", "Energetic", "Chaotic Fun"]
    },
    {
      name: "Newborn Kittens",
      images: [newbornKittensImg],
      description: "The tiniest and most precious fosters of all. These newborn kittens require special care and attention, but watching them grow is the most rewarding experience.",
      stats: ["Newborn", "Special Care", "Growing Fast"]
    }
  ];

  return (
    <PageLayout>
      <div css={fosterStyles}>
        <RainbowGradientCard>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>
            Meet Our Fosters
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Each foster has a unique story and personality. These wonderful animals have touched our lives 
            and found their forever homes through love and care.
          </p>
        </RainbowGradientCard>

        <div className="fosters-grid">
          {fosters.map((foster, index) => (
            <HobbyCard key={index} className="foster-card">
              <div className="foster-images">
                {foster.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${foster.name} - Image ${imgIndex + 1}`}
                    className="foster-image"
                  />
                ))}
              </div>
              <div className="foster-content">
                <h3 className="foster-name">{foster.name}</h3>
                <p className="foster-description">{foster.description}</p>
                <div className="foster-stats">
                  {foster.stats.map((stat, statIndex) => (
                    <span key={statIndex} className="stat">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </HobbyCard>
          ))}
        </div>

        <GlassCard gradient={true} gradientType="warm" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3>Interested in Fostering?</h3>
          <p style={{ marginBottom: '1rem' }}>
            Fostering saves lives and opens up space in shelters for more animals in need. 
            If you're interested in becoming a foster parent, please reach out to your local animal shelters.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span className="stat">Save Lives</span>
            <span className="stat">Make a Difference</span>
            <span className="stat">Rewarding Experience</span>
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
};

export default FostersPage; 