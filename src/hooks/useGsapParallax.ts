import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapParallaxOptions {
  /** Distance (in px) the element moves. Positive = moves down slower. */
  distance?: number;
  /** Whether movement is horizontal. */
  horizontal?: boolean;
  /** Value to scale the element. */
  scale?: number;
  /** If true, only applies on desktop (min-width 768px). */
  desktopOnly?: boolean;
}

/**
 * Creates a subtle parallax effect on an element as the user scrolls.
 * Use sparingly for depth (e.g. hero image, background glows).
 */
export function useGsapParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapParallaxOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    distance = 80,
    horizontal = false,
    scale = 1,
    desktopOnly = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (desktopOnly && window.innerWidth < 768) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          yPercent: horizontal ? 0 : -distance,
          xPercent: horizontal ? -distance : 0,
        },
        {
          yPercent: horizontal ? 0 : distance,
          xPercent: horizontal ? distance : 0,
          scale,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [distance, horizontal, scale, desktopOnly]);

  return ref;
}

export default useGsapParallax;
