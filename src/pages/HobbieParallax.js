import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Global, css } from '@emotion/react';

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

  .image-container img {
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

  .image-container img.is-active {
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
    title: 'Climbing strong through three years of bouldering and the occasional top rope session.',
    byline: 'Movement Gyms — routes, dynos, and community',
    paragraphs: [
      'Routes, dynos, and community. Training at Movement Gym in San Francisco keeps technique sharp and the stoke high.',
      "I've been bouldering for about three years now, occasionally trading in crash pads for a top rope session when friends talk me into it.",
    ],
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Soundtracking days with piano improvisation across rock, classical, and pop.',
    byline: 'Piano & Playlists — harmonies, remixes, and creative recharge',
    paragraphs: [
      'A lifelong musician exploring harmonies and reimagining favorite tracks at the keys—equal parts relaxation and creative challenge.',
      'I love to play piano and experiment across genres, letting improvisation reset my headspace before jumping back into product design.',
    ],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Recreating restaurant favorites with butter-forward experiments for friends, family, and feline taste-testers.',
    byline: 'Kitchen Lab — recipe tinkering, comfort food, and plating practice',
    paragraphs: [
      'Recipe tinkering, comfort food, and plating practice turn weeknights into culinary projects—even when the cats insist on supervision.',
      'I love to experiment with recipes and serve them to friends and family, always chasing the details that make a dish feel like it came straight from a favorite restaurant.',
    ],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'A home base for kittens with hearts full of mischief and eventual forever families.',
    byline: '20+ Fosters — Humane Society of Silicon Valley partnerships',
    paragraphs: [
      'Partnering with the Humane Society of Silicon Valley to nurture playful personalities before they meet their humans.',
      'I have fostered over twenty cats and kittens so far, including a current resident named Monmonmon who is busy perfecting her pounce.',
    ],
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=80',
  },
];

const HobbieParallax = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

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

  return (
    <main className="hobbie-parallax">
      <Global styles={parallaxGlobalStyles} />
      <Global styles={pageStyles} />

      <div className="image-container" aria-hidden="true">
        {sections.map((item, index) => (
          <img
            key={`parallax-image-${item.title}`}
            src={item.image}
            alt=""
            className={index === activeIndex ? 'is-active' : ''}
          />
        ))}
      </div>

      <header className="header">
        <div>
          <h1 className="page-title">Side Projects in Motion</h1>
          <p>
            A slow scroll through the obsessions that keep my curiosity running&mdash;from sketchbooks to trail cameras
            to interactive light.
          </p>
        </div>
      </header>

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
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </section>
        ))}
      </div>

      <footer className="footer">
        <div>
          <p>
            Want to swap hobby notes? Drop a line at{' '}
            <a href="mailto:henry@sidequests.design">henry@sidequests.design</a>.
          </p>
          <p>Let&apos;s build something delightfully impractical together.</p>
        </div>
      </footer>
    </main>
  );
};

export default HobbieParallax;
