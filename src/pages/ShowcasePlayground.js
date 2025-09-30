import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pageWrapperStyles = css`
  min-height: calc(100vh - var(--header-height, 72px));
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 6rem 1.5rem 8rem;
  position: relative;
`;

const introWrapperStyles = css`
  display: flex;
  justify-content: center;
`;

const introContentStyles = css`
  max-width: 720px;
  text-align: center;
  display: grid;
  gap: 1.25rem;
  padding: 2.5rem 1rem;

  h1 {
    font-size: clamp(2.2rem, 1.6rem + 2vw, 3rem);
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
  }
`;

const cardStackStyles = css`
  display: grid;
  gap: 4rem;
`;

const cardStyles = css`
  display: flex;
  align-items: stretch;
  background: rgba(15, 22, 35, 0.92);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(3, 11, 25, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: clamp(420px, 55vh, 640px);

  @media (max-width: 1024px) {
    min-height: clamp(400px, 65vh, 680px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: unset;
  }
`;

const textColumnStyles = css`
  flex: 1;
  padding: clamp(1.75rem, 1.1rem + 2vw, 2.6rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  &.is-1 {
    opacity: 1;
    transform: translateY(0);
  }
`;

const labelStyles = css`
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

const headingStyles = css`
  font-size: clamp(1.9rem, 1.4rem + 1.2vw, 2.5rem);
  font-weight: 600;
`;

const descriptionStyles = css`
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
`;

const listStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.65);
`;

const listItemStyles = css`
  position: relative;
  padding-left: 1.4rem;

  &::before {
    content: '\u2022';
    position: absolute;
    left: 0.25rem;
    top: 0;
    color: rgba(255, 255, 255, 0.45);
  }
`;

const imageColumnStyles = css`
  flex: 0 0 320px;
  position: relative;
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  &.is-1 {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    flex-basis: auto;
    height: 260px;
  }
`;

const imageMockStyles = css`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const cardsData = [
  {
    label: 'Personal Experiments',
    title: 'Storyboards that build emotional cadence',
    description:
      'I prototype pacing and transitions with short-form series, focusing on how beats feel when they land back to back.',
    highlights: [
      'Weekly storyboard sprints with timed prompts',
      'Shot lists designed around momentum, not runtime',
      'Color palettes tuned for consistent cross-platform feel',
    ],
    background: 'linear-gradient(135deg, rgba(67, 212, 173, 0.8), rgba(31, 61, 167, 0.85))',
  },
  {
    label: 'Systems Thinking',
    title: 'Pipelines that lower the cost of iteration',
    description:
      'When ideas move quicker, I can test more hooks. I build lightweight automation so experiments never slow down.',
    highlights: [
      'Caption automation for rapid multi-platform posting',
      'Versioning templates that keep look & feel locked in',
      'Reusable briefs capturing what each iteration taught',
    ],
    background: 'linear-gradient(150deg, rgba(255, 121, 85, 0.85), rgba(74, 26, 192, 0.75))',
  },
  {
    label: 'Audience Insights',
    title: 'Signals that turn into the next experiment',
    description:
      'Retention curves and comment threads surface the beats people replay. I capture those fragments and test spins on them.',
    highlights: [
      'Qualitative notes layered on top of retention metrics',
      'Micro-surveys to validate which emotions stick',
      'Follow-up drops scheduled while attention is high',
    ],
    background: 'linear-gradient(130deg, rgba(94, 197, 255, 0.8), rgba(29, 118, 155, 0.85))',
  },
];

const ShowcasePlayground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const introWrapper = container.querySelector('.intro-wrapper');
    const introContent = container.querySelector('.text-align-center');

    let pinInstance;

    if (introWrapper && introContent) {
      pinInstance = ScrollTrigger.create({
        trigger: introWrapper,
        start: 'top top',
        end: 'bottom top',
        pin: introContent,
        pinSpacing: false,
      });
    }

    const textSections = container.querySelectorAll('.tabs_let-content');
    const mediaSections = container.querySelectorAll('.tabs_video');
    const sectionList = Array.from(textSections);
    const mediaList = Array.from(mediaSections);

    if (!sectionList.length) {
      return () => {
        if (pinInstance) {
          pinInstance.kill();
        }
      };
    }

    const lastIndex = sectionList.length - 1;

    const applyScrollState = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight * 0.75;

      sectionList.forEach((section, index) => {
        const isInWindow = scrollPosition >= index * windowHeight && scrollPosition < (index + 1) * windowHeight;

        if (isInWindow) {
          section.classList.add('is-1');
          if (mediaList[index]) {
            mediaList[index].classList.add('is-1');
          }
        } else if (index !== lastIndex) {
          section.classList.remove('is-1');
          if (mediaList[index]) {
            mediaList[index].classList.remove('is-1');
          }
        }
      });

      if (scrollPosition > lastIndex * windowHeight) {
        sectionList[lastIndex].classList.add('is-1');
        if (mediaList[lastIndex]) {
          mediaList[lastIndex].classList.add('is-1');
        }
      } else {
        sectionList[lastIndex].classList.remove('is-1');
        if (mediaList[lastIndex]) {
          mediaList[lastIndex].classList.remove('is-1');
        }
      }
    };

    window.addEventListener('scroll', applyScrollState, { passive: true });
    // Run once so the first card is visible before scrolling
    applyScrollState();

    return () => {
      if (pinInstance) {
        pinInstance.kill();
      }
      window.removeEventListener('scroll', applyScrollState);
    };
  }, []);

  return (
    <section css={pageWrapperStyles} ref={containerRef}>
      <div css={cardStackStyles}>
        {cardsData.map((card) => (
          <article key={card.label} css={cardStyles}>
            <div className="tabs_let-content" css={textColumnStyles}>
              <span css={labelStyles}>{card.label}</span>
              <h2 css={headingStyles}>{card.title}</h2>
              <p css={descriptionStyles}>{card.description}</p>
              <ul css={listStyles}>
                {card.highlights.map((highlight) => (
                  <li key={highlight} css={listItemStyles}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tabs_video" css={imageColumnStyles}>
              <div css={imageMockStyles} style={{ background: card.background }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ShowcasePlayground;
