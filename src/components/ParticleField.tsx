import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ParticleField.scss';

/**
 * A subtle animated particle field rendered with lightweight divs.
 * Particles drift upward slowly and connect visually via opacity. Only
 * rendered on desktop and respects reduced-motion.
 */
const ParticleField = ({ density = 40 }: { density?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (isMobile || prefersReduced) return;

    const particles = Array.from(
      container.querySelectorAll<HTMLSpanElement>('.particle')
    );

    const ctx = gsap.context(() => {
      particles.forEach((p, i) => {
        gsap.fromTo(
          p,
          {
            x: 0,
            y: `${100 + (i % 5) * 20}`,
            opacity: 0.1 + (i % 4) * 0.15,
          },
          {
            y: `-${120 + (i % 7) * 30}`,
            opacity: 0.6,
            x: `${i % 2 === 0 ? 40 : -40}`,
            duration: 8 + (i % 6) * 2,
            repeat: -1,
            ease: 'sine.inOut',
            delay: (i % 8) * 0.4,
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [density]);

  return (
    <div ref={containerRef} className="particle-field" aria-hidden="true">
      {Array.from({ length: density }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 37) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
