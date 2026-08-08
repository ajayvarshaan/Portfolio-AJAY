import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapRevealOptions {
  /** Delay in seconds before animation starts. */
  delay?: number;
  /** Stagger between child elements. */
  stagger?: number;
  /** Duration of each animation. */
  duration?: number;
  /** Start Y offset in px. */
  y?: number;
  /** Start opacity. */
  opacity?: number;
  /** Apply a blur filter during reveal. */
  blur?: boolean;
  /** ScrollTrigger start position. */
  start?: string;
  /** ScrollTrigger toggle actions. */
  toggleActions?: string;
  /** Whether to use a scroll trigger (scroll reveal) or just on mount. */
  scroll?: boolean;
}

/**
 * A reusable hook that reveals its child elements with a smooth GSAP
 * stagger animation. Add `data-reveal` to stagger children, or pass a
 * single container ref to animate the container itself.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  const {
    delay = 0,
    stagger = 0.12,
    duration = 0.8,
    y = 40,
    opacity = 0,
    blur = true,
    start = 'top 85%',
    toggleActions = 'play none none reverse',
    scroll = true,
  } = options;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll('[data-reveal]').length
      ? el.querySelectorAll('[data-reveal]')
      : [el];

    // Respect reduced-motion preferences.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0, filter: 'blur(0px)' });
      return;
    }

    gsap.set(targets, {
      opacity,
      y,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
      willChange: 'transform, opacity, filter',
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay,
        defaults: { duration, ease: 'power3.out' },
      });
      tl.to(targets, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        stagger,
      });

      if (scroll) {
        ScrollTrigger.create({
          trigger: el,
          start,
          toggleActions,
          animation: tl,
        });
      }
    }, el);

    return () => ctx.revert();
  }, [
    delay,
    stagger,
    duration,
    y,
    opacity,
    blur,
    start,
    toggleActions,
    scroll,
  ]);

  return containerRef;
}

export default useGsapReveal;
