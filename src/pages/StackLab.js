import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { css } from '@emotion/react';
import PageContainer from '../layouts/PageContainer';
import { Media } from '../lib/style';

const pageWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 5vw, 5rem);
  padding: clamp(3rem, 6vw, 6rem) 0 clamp(5rem, 8vw, 8rem);
`;

const heroSectionStyles = css`
  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
  position: relative;

  ${Media.medium} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const stackViewportStyles = css`
  min-height: clamp(360px, 60vh, 520px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: calc(var(--header-space, 60px) + 24px);
`;

const stackStyles = css`
  position: relative;
  width: clamp(280px, 32vw, 420px);
  height: clamp(340px, 50vh, 460px);
  perspective: 1400px;
`;

const stackCardBaseStyles = css`
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: clamp(1.75rem, 2vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: linear-gradient(145deg, rgba(18, 32, 56, 0.96), rgba(9, 15, 26, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 48px rgba(6, 14, 28, 0.55);
  color: var(--text-primary);
  pointer-events: none;
  transition:
    transform 0.5s ease,
    opacity 0.45s ease,
    filter 0.45s ease;

  h3 {
    font-size: clamp(1.65rem, 1.2rem + 1.2vw, 2.1rem);
    margin: 0;
    letter-spacing: -0.015em;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.65;
  }
`;

const stackCardTagStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.76);
`;

const scrollTrackStyles = css`
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 8vw, 6rem);
`;

const sentinelStyles = css`
  min-height: clamp(60vh, 65vh, 520px);
  display: grid;
  align-items: center;
  color: var(--text-secondary);

  .sentinel-body {
    max-width: 520px;
    display: grid;
    gap: 1.25rem;
  }

  h4 {
    margin: 0;
    font-size: clamp(1.4rem, 1.1rem + 0.8vw, 1.8rem);
    color: var(--text-primary);
  }
`;

const cardsDataSource = [
  {
    id: 'transition-frameworks',
    tag: 'Motion Systems',
    title: 'Transition frameworks keep stacked stories smooth',
    description:
      'Capture the intent of each transition—slide, fade, parallax—and package them into reusable primitives so any new card can opt in without bespoke tweaks.',
  },
  {
    id: 'signal-tracking',
    tag: 'Scroll Signals',
    title: 'Scroll position becomes a state machine input',
    description:
      'Translate scroll progress into deterministic states. Each state knows which card leads, which card fades, and which card queues up next.',
  },
  {
    id: 'delight',
    tag: 'Delight Layer',
    title: 'Micro-interactions keep stacks feeling alive',
    description:
      'Depth blur, ambient glow, and subtle rotation cues help the eye understand motion while keeping focus on the hero card.',
  },
  {
    id: 'snapshotting',
    tag: 'Snapshots',
    title: 'Capture trail states for fast undo and review',
    description:
      'Persist the order history so viewers can scrub back through previous stack tops without recalculating animations or layout.',
  },
  {
    id: 'handoff',
    tag: 'Dev Handoff',
    title: 'Annotate each card with tokens destined for code',
    description:
      'Define radius, shadow, easing, and z-order in the design spec so engineering only maps tokens instead of reverse engineering visuals.',
  },
];

const StackLab = () => {
  const cards = useMemo(() => cardsDataSource, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef([]);
  const scrollLockRef = useRef(false);

  const parentRef = useRef(null);

  // useEffect(() => {
  //   sentinelRefs.current = sentinelRefs.current.slice(0, cards.length);
  // }, [cards.length]);

  useLayoutEffect(() => {
    /*\
    What brad would do:
    parent add scroll observer
    on scroll go over children, compare top of clientRect to parentClientRect. return last index where top is < bot
    */
    if (typeof window === 'undefined' || cards.length === 0 || !parentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('entries', entries);
          entries.forEach((e) => {
        const idx = Number((e.target as HTMLElement).getAttribute('data-index') ?? -1);
        console.log('[IO]', { index: idx, isIntersecting: e.isIntersecting, ratio: e.intersectionRatio });
      });

     setActiveIndex(
          entries
            .filter((e) => e.isIntersecting)
            .reverse()[0]
            ?.target.getAttribute('data-index') ?? 0
        );

        // entries.forEach((entry) => {
        //   const idx = Number((entry.target as HTMLElement).getAttribute('data-index') ?? -1);
        //   console.log('[IO]', { index: idx, isIntersecting: entry.isIntersecting, ratio: entry.intersectionRatio });
        // });

        // // Example: pick the highest-visibility intersecting item as active
        // const best = entries.filter((e) => e.isIntersecting);
        // // console.log('intersecting', best);
        // best.forEach((e) => console.log('  ', e.target.getAttribute('data-index'), e.intersectionRatio));

        // if (best) {
        //   // const i = Number((best.target as HTMLElement).getAttribute('data-index') ?? -1);
        //   setActiveIndex(0); // TEMP: always 0 for this demo
        // }
      },
      {
        root: parentRef.current, // use the parent as the viewport
        threshold: 0, // fire as soon as any pixel is visible
        // rootMargin: '0px 0px -50% 0px', // treat middle of root as the “enter” line
      }
    );

    const children = Array.from(parentRef.current.children);
    children.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [cards.length]);

  const IndexRenderer = ({ index }) => (
    <div
      key={index}
      data-index={index}
      style={{
        height: '100%',
        backgroundColor: index % 2 === 0 ? 'lightgray' : 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        width: '100%',
        visibility: 'hidden'// TODO: Readd and add viewport ontop that forwards scroll behavior
      }}
    >
      {index}
    </div>
  );
  return (
    // <PageContainer margin="full" padding="none" maxWidth="1400px">
    //   <section css={pageWrapperStyles}>
    //     <header css={heroSectionStyles}>
    //       <div css={stackViewportStyles}>
    //         <div css={stackStyles}>
    //           {cards.map((card, index) => {
    //             const offset = (index - activeIndex + cards.length) % cards.length;
    //             const depth = Math.min(offset, 3);
    //             const translateY = depth * 28;
    //             const scale = 1 - depth * 0.08;
    //             const opacity = offset > 3 ? 0 : 1 - depth * 0.2;
    //             const blur = depth === 0 ? '0px' : `${depth * 2}px`;

    //             return (
    //               <article
    //                 key={card.id}
    //                 css={stackCardBaseStyles}
    //                 style={{
    //                   transform: `translateY(${translateY}px) scale(${scale})`,
    //                   opacity,
    //                   zIndex: cards.length - offset,
    //                   filter: `blur(${blur})`,
    //                 }}
    //                 aria-hidden={offset !== 0}
    //               >
    //                 <span css={stackCardTagStyles}>{card.tag}</span>
    //                 <h3>{card.title}</h3>
    //                 <p>{card.description}</p>
    //               </article>
    //             );
    //           })}
    //         </div>
    //       </div>

    //       <div css={scrollTrackStyles}>
    //         {cards.map((card, index) => (
    //           <section
    //             key={`${card.id}-sentinel`}
    //             css={sentinelStyles}
    //             ref={(node) => {
    //               sentinelRefs.current[index] = node;
    //             }}
    //             data-index={index}
    //             aria-current={index === activeIndex ? 'true' : 'false'}
    //           >
    //             <div className="sentinel-body">
    //               <h4>{card.title}</h4>
    //               <p>{card.description}</p>
    //             </div>
    //           </section>
    //         ))}
    //       </div>
    //     </header>
    //   </section>
    // </PageContainer>
    <div
      ref={parentRef}
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        left: 24,
        bottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',

        gap: '12px',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      {new Array(20).fill(0).map((_, i) => (
        <IndexRenderer key={i} index={i} />
      ))}
      <div style={{
        position: 'fixed', // should be more like absolute, so that it covers parent not full screen. 
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        overscrollBehavior: undefined,
        pointerEvents: 'none',
      }}>
        VIEWPORT 
      </div>
    </div>
  );
};

export default StackLab;
