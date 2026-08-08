import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CursorGlow.scss';

/**
 * A large, soft radial glow that follows the cursor across the page.
 * Uses gsap.quickTo to reuse a single tween and write GPU-composited
 * transforms (translate3d) on GSAP's own ticker — smooth and low-latency.
 * Desktop / fine-pointer only.
 */
const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const isFine =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine) return;

    // Center the glow on its reference point.
    gsap.set(glow, { xPercent: -50, yPercent: -50 });

    const glowX = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3.out' });
    const glowY = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3.out' });

    const handleMove = (e: MouseEvent) => {
      glowX(e.clientX);
      glowY(e.clientY);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
};

export default CursorGlow;
