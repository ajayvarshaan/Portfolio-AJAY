import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Makes an element "magnetic" - it subtly follows the cursor within a
 * radius around itself, then springs back on leave. Desktop only and
 * respects reduced-motion. Returns a ref to attach to your element.
 */
export function useGsapMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.3
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    // Guard: the ref must be a real DOM element to attach listeners to.
    if (!el || !(el instanceof Element) || typeof el.addEventListener !== 'function') return;

    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (isMobile || prefersReduced) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return ref;
}

export default useGsapMagnetic;
