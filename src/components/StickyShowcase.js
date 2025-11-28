import React, { useEffect, useMemo, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Media } from '../lib/style';

const showcaseSection = css`
  position: relative;
  width: 100%;
  padding: 0 0 6rem;
`;

const stickyWrapper = css`
  position: sticky;
  top: 10vh;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 0.42fr 1fr;
  gap: 1.5rem;
  padding: 0 3%;
  align-items: stretch;

  ${Media.medium} {
    grid-template-columns: 1fr;
    top: 0;
  }
`;

const leftPanel = css`
  position: relative;
  border-radius: 16px;
  background: rgba(33, 33, 33, 0.65);
  color: var(--gray-25, #fafafa);
  padding: 2rem;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  ${Media.medium} {
    min-height: auto;
  }
`;

const leftContentBase = css`
  position: absolute;
  inset: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const leftContentActive = css`
  opacity: 1;
  transform: translateY(0);
`;

const highlightText = css`
  display: inline-block;
  color: var(--green, #61ffc9);
`;

const dividerLine = css`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const detailText = css`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const ctaWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const ctaButton = css`
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(97, 255, 201, 0.6);
  background: rgba(97, 255, 201, 0.08);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(97, 255, 201, 0.15);
  }
`;

const rightPanel = css`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  min-height: 72vh;
  background: rgba(28, 28, 28, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.medium} {
    min-height: 360px;
  }
`;

const mediaBase = css`
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  border-radius: 20px;
  overflow: hidden;
`;

const mediaActive = css`
  opacity: 1;
  transform: translateY(0);
`;

const gradientMedia = css`
  width: 100%;
  height: 100%;
`;

const videoMedia = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const imageMedia = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const sentinelStack = css`
  position: relative;
`; 

const sentinelBlock = css`
  height: calc(var(--sentinel-height, 120) * 1vh);
  pointer-events: none;

  ${Media.medium} {
    height: calc(var(--sentinel-height, 110) * 1vh);
  }
`;

const headingStyle = css`
  font-size: clamp(1.75rem, 1.2rem + 1vw, 2.4rem);
  font-weight: 500;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
`;

const badgeStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.35rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(97, 255, 201, 0.18);
  border: 1px solid rgba(97, 255, 201, 0.45);
  color: rgba(255, 255, 255, 0.85);
`;

const gradientOverlay = css`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.45) 80%);
`;

const StickyShowcase = ({ items = [], introHeight = 110 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef([]);

  sentinelRefs.current = sentinelRefs.current.slice(0, items.length);
  const safeActiveIndex = items.length ? Math.min(activeIndex, items.length - 1) : 0;

  const totalHeight = useMemo(() => {
    if (!items.length) {
      return Math.max(introHeight, 120);
    }

    const fullSegments = Math.max(items.length - 1, 0);
    const finalSegment = Math.max(introHeight * 0.55, 30);
    const total = fullSegments * introHeight + finalSegment;

    return Math.max(total + 10, 120);
  }, [introHeight, items.length]);

  useEffect(() => {
    setActiveIndex(0);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const nextIndex = parseInt(visible[0].target.dataset.index, 10);
          if (!Number.isNaN(nextIndex)) {
            setActiveIndex(nextIndex);
          }
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sentinelRefs.current
      .filter(Boolean)
      .forEach((node) => {
        observer.observe(node);
      });

    return () => {
      observer.disconnect();
    };
  }, [items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <section css={showcaseSection} style={{ minHeight: `${totalHeight}vh` }}>
      <div css={stickyWrapper}>
        <div css={leftPanel}>
          <div css={gradientOverlay} />
          {items.length > 0 && (
            <article
              key={items[safeActiveIndex]?.key || safeActiveIndex}
              css={[leftContentBase, leftContentActive]}
            >
              {items[safeActiveIndex]?.badge && <span css={badgeStyles}>{items[safeActiveIndex].badge}</span>}
              <h3 css={headingStyle}>
                {items[safeActiveIndex]?.title?.leading}
                {items[safeActiveIndex]?.title?.highlight && (
                  <span css={highlightText}> {items[safeActiveIndex].title.highlight} </span>
                )}
                {items[safeActiveIndex]?.title?.trailing}
              </h3>
              <div css={dividerLine} />
              {items[safeActiveIndex]?.description && <p css={detailText}>{items[safeActiveIndex].description}</p>}
              {items[safeActiveIndex]?.cta && (
                <div css={ctaWrapper}>
                  {items[safeActiveIndex].cta.to ? (
                    <Link to={items[safeActiveIndex].cta.to} css={ctaButton}>
                      {items[safeActiveIndex].cta.label}
                    </Link>
                  ) : items[safeActiveIndex].cta.href ? (
                    <a
                      href={items[safeActiveIndex].cta.href}
                      target={items[safeActiveIndex].cta.external ? '_blank' : undefined}
                      rel={items[safeActiveIndex].cta.external ? 'noopener noreferrer' : undefined}
                      css={ctaButton}
                    >
                      {items[safeActiveIndex].cta.label}
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          )}
        </div>
        <div css={rightPanel}>
          {items.length > 0 && (
            <div key={items[safeActiveIndex]?.key || safeActiveIndex} css={[mediaBase, mediaActive]}>
              {items[safeActiveIndex]?.media?.type === 'video' && items[safeActiveIndex]?.media?.src ? (
                <video css={videoMedia} autoPlay loop muted defaultMuted playsInline>
                  <source
                    src={items[safeActiveIndex].media.src}
                    type={items[safeActiveIndex].media.format || 'video/mp4'}
                  />
                </video>
              ) : items[safeActiveIndex]?.media?.type === 'image' && items[safeActiveIndex]?.media?.src ? (
                <img
                  css={imageMedia}
                  src={items[safeActiveIndex].media.src}
                  alt={
                    items[safeActiveIndex].media.alt ||
                    items[safeActiveIndex].title?.highlight ||
                    'Showcase media'
                  }
                />
              ) : (
                <div
                  css={gradientMedia}
                  style={{
                    background:
                      items[safeActiveIndex]?.media?.gradient ||
                      'radial-gradient(circle at 25% 25%, rgba(97, 255, 201, 0.35), transparent 60%)',
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div css={sentinelStack}>
        {items.map((item, index) => (
          <div
            key={item.key || index}
            css={sentinelBlock}
            ref={(el) => {
              sentinelRefs.current[index] = el;
            }}
            data-index={index}
            style={{
              '--sentinel-height': index === items.length - 1 ? Math.max(introHeight * 0.55, 30) : introHeight,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
};

export default StickyShowcase;
