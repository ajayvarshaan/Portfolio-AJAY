import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.scss';

/**
 * A custom cursor with a trailing dot + ring. Uses gsap.quickTo which
 * reuses a single tween per property and writes GPU-composited transforms
 * (translate3d) on GSAP's own ticker — buttery-smooth and low-latency.
 * Only active on fine-pointer (desktop) devices and respects reduced-motion.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!isFine || !dot || !ring) return;

    document.documentElement.classList.add('custom-cursor-active');

    let visible = false;

    // quickTo tweens — tight, snappy follow to avoid lag while scrolling.
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' });

    // Center the elements on their reference point using negative offsets.
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const handleMove = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.(
        'a, button, .MuiButtonBase-root, [role="button"]'
      );
      ring.classList.toggle('cursor-hover', !!target);
    };

    const handleDown = () => ring.classList.add('cursor-down');
    const handleUp = () => ring.classList.remove('cursor-down');
    const handleLeave = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleLeave);
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
