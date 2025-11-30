import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Global, css } from '@emotion/react';

import climbingVideo from '../assets/climbing movie for website IMG_7228.MOV';
import chefVideo from '../assets/chef.mov';
import kittensImage from '../assets/kittens_foster.jpg';

const parallaxGlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display:wght@700&display=swap');

  :root {
    --scale: 0.1;
    --space: 8vmin;
    --font-primary: 'Lato', sans-serif;
    --font-heading: 'Playfair Display', serif;
  }

  @media (prefers-reduced-motion) {
    :root {
      --scale: 0;
    }
  }

  body {
    color: hsl(0, 0%, 95%);
    background-color: hsl(5, 15%, 5%);
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    font-family: var(--font-primary);
    line-height: 1.6;
  }

  a {
    color: hsl(65, 80%, 60%);
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

const pageStyles = css`
  * {
    box-sizing: border-box;
  }

  .hobbie-parallax {
    position: relative;
    max-width: none;
    width: 100%;
    margin: 0;
  }

  .page-title {
    text-align: center;
  }

  .page-title::after {
    content: '↓';
    display: block;
    font-size: 2em;
    opacity: 0;
    transform: translateY(-24px);
    animation: fadein 800ms 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .header,
  .footer {
    display: grid;
    place-items: center;
    height: 100vh;
    padding: var(--space);
    text-align: center;
  }

  .section {
    transform-origin: center top;
    transform: scaleY(calc(1 - var(--scale)));
    margin: 0;
  }

  .section > * {
    transform-origin: center top;
    transform: scaleY(calc(1 / (1 - var(--scale))));
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: bold;
    line-height: 1.125;
  }

  .byline {
    display: block;
    font-size: 0.6em;
    margin: calc(var(--space) / 1.35) 0;
  }

  .content {
    position: relative;
    margin: -50vh auto 0;
    padding: var(--space);
    max-width: 55ch;
    width: calc(100% - var(--space));
    background: hsla(5, 15%, 5%, 0.9);
    border-radius: 12px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  }

  .content > * + * {
    margin-top: 2rem;
  }

  .image-container {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    overflow: hidden;
  }

  .image-container img,
  .image-container video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.8s ease;
  }

  .image-container video.zoomed-out {
    transform: scale(0.85);
    transform-origin: center;
  }

  .image-container img.is-active,
  .image-container video.is-active {
    opacity: 1;
  }

  .image-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      hsla(5, 15%, 5%, 0) 0%,
      hsla(5, 15%, 5%, 0.013) 8.1%,
      hsla(5, 15%, 5%, 0.049) 15.5%,
      hsla(5, 15%, 5%, 0.104) 22.5%,
      hsla(5, 15%, 5%, 0.175) 29%,
      hsla(5, 15%, 5%, 0.259) 35.3%,
      hsla(5, 15%, 5%, 0.352) 41.2%,
      hsla(5, 15%, 5%, 0.45) 47.1%,
      hsla(5, 15%, 5%, 0.55) 52.9%,
      hsla(5, 15%, 5%, 0.648) 58.8%,
      hsla(5, 15%, 5%, 0.741) 64.7%,
      hsla(5, 15%, 5%, 0.825) 71%,
      hsla(5, 15%, 5%, 0.896) 77.5%,
      hsla(5, 15%, 5%, 0.951) 84.5%,
      hsla(5, 15%, 5%, 0.987) 91.9%,
      hsl(5, 15%, 5%) 100%
    );
  }

  .sections-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40vh;
    padding-bottom: 40vh;
  }

  .footer {
    gap: 1rem;
  }

  @keyframes fadein {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const sectionsContent = [
  {
    title: 'Vertical Visions - Climbing and the Joy of Reaching New Heights',
    byline: 'Santa Clara, Sunnyvale, Mountain View (new gym), and San Francisco',
    paragraphs: [
      'Routes, dynos, and community. Training at Movement Gym in San Francisco keeps technique sharp and the stoke high.',
      <>
        I've been bouldering for about 3 years now, and I love it. I've also top roped a few times. My favorite gym is{' '}
        <a href="https://movementgyms.com/" target="_blank" rel="noopener noreferrer">
          Movement
        </a>{' '}
        in San Francisco.
      </>,
    ],
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    video: climbingVideo,
  },
  {
    title: 'Music, Piano, Food for the Soul',
    byline: '',
    paragraphs: [
      'I love to play piano and listen to all sorts of music, including rock, classical, and  pop.',
      'I also played the clarinet in band at school and hope to improve my singing skills someday.',
    ],
    image: 'https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Cooking.',
    byline: 'Dabbling with replicating foodie adventures',
    paragraphs: [
      'I love to experiment with recipes and serve it to my friends and family, and occasionally cats.',
      'I take particular pride in replicating restaurant dishes at home, although it comes at the cost of my waistline and many bars of butter.',
    ],
    image: chefVideo,
    poster: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    video: chefVideo,
    mediaClassName: 'zoomed-out',
  },
  {
    title: 'Changing Lives One Paw at a Time',
    byline: '20+ kittens fostered, from 6 weeks to spay & neuter day',
    paragraphs: [
      "I've fostered over 20 kittens. These ranged from healthy to ringworm to bottle feeders.",
      'In addition to fostering, I also adopted 2 of my favorite kittens from the shelter.',
      'Fostering has changed my life and how I interact with all 4 of my cats.',
      'It has made me more responsible and a better caretaker.',
    ],
    image: kittensImage,
  },
];

const HobbieParallax = () => {
  useEffect(() => {
    document.title = 'Hobbies';
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const mediaRefs = useRef([]);

  const sections = useMemo(() => sectionsContent, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--scale', '0');
      return undefined;
    }

    const updateScale = () => {
      const scrollTop = window.scrollY || 0;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      const scaleValue = 0.05 + progress * 0.18;
      document.documentElement.style.setProperty('--scale', scaleValue.toFixed(4));
    };

    updateScale();
    window.addEventListener('scroll', updateScale, { passive: true });

    const handlePreferenceChange = (event) => {
      if (event.matches) {
        document.documentElement.style.setProperty('--scale', '0');
      } else {
        updateScale();
      }
    };

    if (typeof prefersReducedMotion.addEventListener === 'function') {
      prefersReducedMotion.addEventListener('change', handlePreferenceChange);
    } else if (typeof prefersReducedMotion.addListener === 'function') {
      prefersReducedMotion.addListener(handlePreferenceChange);
    }

    return () => {
      window.removeEventListener('scroll', updateScale);
      if (typeof prefersReducedMotion.removeEventListener === 'function') {
        prefersReducedMotion.removeEventListener('change', handlePreferenceChange);
      } else if (typeof prefersReducedMotion.removeListener === 'function') {
        prefersReducedMotion.removeListener(handlePreferenceChange);
      }
      document.documentElement.style.removeProperty('--scale');
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length === 0) {
          return;
        }

        const nextIndex = Number(visible[0].target.getAttribute('data-index') ?? '0');
        setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    sectionRefs.current = sectionRefs.current.slice(0, sections.length);

    sectionRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections.length]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      return undefined;
    }

    const target = sectionRefs.current[0];
    if (!target) {
      return undefined;
    }

    const scrollToSection = () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const frame = window.requestAnimationFrame(scrollToSection);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    mediaRefs.current.forEach((node, index) => {
      if (!node || node.tagName !== 'VIDEO') {
        return;
      }

      node.muted = true;
      node.defaultMuted = true;

      if (index === activeIndex) {
        const playPromise = node.play();
        if (typeof playPromise?.catch === 'function') {
          playPromise.catch(() => {});
        }
      } else {
        node.pause();
        node.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <main className="hobbie-parallax">
      <Global styles={parallaxGlobalStyles} />
      <Global styles={pageStyles} />

      <div className="image-container" aria-hidden="true">
        {sections.map((item, index) => {
          const isActive = index === activeIndex;

          if (item.video) {
            return (
              <video
                key={`parallax-media-${item.title}`}
                src={item.video}
                poster={item.poster ?? item.image}
                className={[item.mediaClassName, isActive ? 'is-active' : ''].filter(Boolean).join(' ')}
                muted
                defaultMuted
                loop
                playsInline
                autoPlay
                ref={(node) => {
                  mediaRefs.current[index] = node;
                }}
              />
            );
          }

          mediaRefs.current[index] = null;

          return (
            <img key={`parallax-media-${item.title}`} src={item.image} alt="" className={isActive ? 'is-active' : ''} />
          );
        })}
      </div>

      <div className="sections-wrapper">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="section"
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
            data-index={index}
          >
            <article className="content">
              <h2 className="section-title">{section.title}</h2>
              <span className="byline">{section.byline}</span>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.title}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </article>
          </section>
        ))}
      </div>

      <footer className="footer">
        <div>
          <p>Recharge with purpose.</p>
        </div>
      </footer>
    </main>
  );
};

export default HobbieParallax;
