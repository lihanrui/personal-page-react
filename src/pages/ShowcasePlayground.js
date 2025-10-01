import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pageWrapperStyles = css`
  min-height: calc(100vh - var(--header-space, 72px));
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 4vw, 4rem);
  padding: clamp(3rem, 5vw, 5.5rem) 1.5rem clamp(5.5rem, 9vw, 7rem);
`;

const scrollSceneStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const pinInnerStyles = css`
  position: relative;
  width: clamp(360px, 88vw, 1280px);
  margin: clamp(0.5rem, 1.6vw, 1.5rem) auto;
  height: clamp(500px, 65vh, 760px);
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    position: static;
    height: auto;
    flex-direction: column;
    gap: 3rem;
    margin: clamp(0.5rem, 1.8vw, 1rem) auto;
  }
`;

const cardStyles = css`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: stretch;
  background: rgba(15, 22, 35, 0.92);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(3, 11, 25, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
  pointer-events: none;

  &.is-active {
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0 28px 70px rgba(3, 11, 25, 0.45);
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    position: static;
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
`;

const textColumnStyles = css`
  flex: 1;
  padding: clamp(1.8rem, 1.2rem + 2vw, 2.8rem);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;

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
  font-size: clamp(1.9rem, 1.3rem + 1.5vw, 2.6rem);
  font-weight: 600;
`;

const descriptionStyles = css`
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.76);
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
  transition: opacity 0.6s ease, transform 0.6s ease;

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

const spacerTrackStyles = css`
  display: none;

  @media (min-width: 769px) {
    display: block;
    width: 1px;
    height: calc(max(1, var(--card-count, 3) - 1) * clamp(360px, 55vh, 640px));
  }
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
  const autoScrollHandledRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || autoScrollHandledRef.current) {
      return undefined;
    }

    const targetY = 70;

    const markHandled = () => {
      autoScrollHandledRef.current = true;
      window.removeEventListener('wheel', markHandled, passiveOpts);
      window.removeEventListener('touchstart', markHandled, passiveOpts);
      window.removeEventListener('keydown', markHandled);
    };

    const passiveOpts = { passive: true };
    window.addEventListener('wheel', markHandled, passiveOpts);
    window.addEventListener('touchstart', markHandled, passiveOpts);
    window.addEventListener('keydown', markHandled);

    const shouldAutoScroll = () => {
      const currentY = window.scrollY || document.documentElement.scrollTop || 0;
      if (currentY > targetY * 0.5) {
        return false;
      }

      const navEntries = performance.getEntriesByType('navigation');
      const isBackForward = navEntries.some((entry) => entry.type === 'back_forward');
      return !isBackForward;
    };

    const scrollIntoPosition = () => {
      if (autoScrollHandledRef.current) {
        return;
      }

      if (shouldAutoScroll()) {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }

      markHandled();
    };

    const rafId = window.requestAnimationFrame(() => {
      window.setTimeout(scrollIntoPosition, 50);
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      markHandled();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const mm = ScrollTrigger.matchMedia();

    const querySceneElements = () => ({
      cards: Array.from(container.querySelectorAll('.sticky-card')),
      textSections: Array.from(container.querySelectorAll('.tabs_let-content')),
      mediaSections: Array.from(container.querySelectorAll('.tabs_video')),
    });

    mm.add('(max-width: 768px)', () => {
      const { cards, textSections, mediaSections } = querySceneElements();

      textSections.forEach((section) => section.classList.add('is-1'));
      mediaSections.forEach((section) => section.classList.add('is-1'));
      cards.forEach((card) => card.classList.add('is-active'));

      return () => {
        textSections.forEach((section) => section.classList.remove('is-1'));
        mediaSections.forEach((section) => section.classList.remove('is-1'));
        cards.forEach((card, index) => {
          if (index !== 0) {
            card.classList.remove('is-active');
          }
        });
      };
    });

    mm.add('(min-width: 769px)', () => {
      const pinWrapper = container.querySelector('.showcase-scroll-scene');
      const pinInner = container.querySelector('.showcase-pin-inner');
      const { cards, textSections, mediaSections } = querySceneElements();

      if (!pinWrapper || !pinInner || cards.length === 0) {
        return () => {};
      }

      const activeIndexRef = { current: 0 };

      const setActiveCard = (index) => {
        activeIndexRef.current = index;

        cards.forEach((card, cardIndex) => {
          card.classList.toggle('is-active', cardIndex === index);
        });

        textSections.forEach((section, sectionIndex) => {
          section.classList.toggle('is-1', sectionIndex === index);
        });

        mediaSections.forEach((section, sectionIndex) => {
          section.classList.toggle('is-1', sectionIndex === index);
        });
      };

      setActiveCard(0);

      const pinHeight = pinInner.offsetHeight || 1;
      const cardsCount = Math.max(cards.length - 1, 1);
      const scrollDistance = pinHeight * cardsCount;
      const snapIncrement = cards.length > 1 ? 1 / cardsCount : 1;

      const trigger = ScrollTrigger.create({
        trigger: pinWrapper,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: pinInner,
        scrub: true,
        anticipatePin: 1,
        snap: snapIncrement,
        onUpdate: (self) => {
          const rawIndex = Math.round(self.progress * cardsCount);
          const nextIndex = Math.min(cards.length - 1, Math.max(0, rawIndex));
          if (nextIndex !== activeIndexRef.current) {
            setActiveCard(nextIndex);
          }
        },
      });

      const handleResize = () => {
        trigger.refresh();
      };

      window.addEventListener('resize', handleResize);
      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener('resize', handleResize);
        trigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section css={pageWrapperStyles} ref={containerRef}>
      <div
        className="showcase-scroll-scene"
        css={scrollSceneStyles}
        style={{ '--card-count': cardsData.length }}
      >
        <div className="showcase-pin-inner" css={pinInnerStyles}>
          {cardsData.map((card, index) => (
            <article
              key={card.label}
              className={`sticky-card${index === 0 ? ' is-active' : ''}`}
              css={cardStyles}
            >
              <div
                className={`tabs_let-content${index === 0 ? ' is-1' : ''}`}
                css={textColumnStyles}
              >
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
              <div
                className={`tabs_video${index === 0 ? ' is-1' : ''}`}
                css={imageColumnStyles}
              >
                <div css={imageMockStyles} style={{ background: card.background }} />
              </div>
            </article>
          ))}
        </div>

        <div aria-hidden css={spacerTrackStyles} />
      </div>
    </section>
  );
};

export default ShowcasePlayground;
