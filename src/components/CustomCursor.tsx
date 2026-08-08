import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.scss';

/**
 * A custom cursor with a trailing dot + glowing ring. Only active on
 * devices with a fine pointer (desktop). Falls back to the default
 * cursor elsewhere.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add('custom-cursor-active');

    // Hide native cursor on interactive elements handled by the ring.
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const handleMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.('a, button, .MuiButtonBase-root, [role="button"]')) {
        ring.classList.add('cursor-hover');
      } else {
        ring.classList.remove('cursor-hover');
      }
    };

    const handleDown = () => ring.classList.add('cursor-down');
    const handleUp = () => ring.classList.remove('cursor-down');
    const handleLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const handleEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cc-dot" />
      <div ref={ringRef} className="cc-ring" />
    </>
  );
};

export default CustomCursor;
