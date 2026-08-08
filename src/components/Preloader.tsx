import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.scss';

interface PreloaderProps {
  onComplete?: () => void;
}

/**
 * A cinematic page loader that counts from 0 to 100 while splitting the
 * brand letters apart, then reveals the portfolio behind it.
 */
const Preloader = ({ onComplete }: PreloaderProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      onComplete?.();
      return;
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      // Animate the counter and hide the loader.
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(counter, {
        value: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          setProgress(Math.round(counter.value));
        },
      })
        .to('.preloader-bg', {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2,
        })
        .to('.preloader-name', {
          opacity: 0,
          y: -40,
          blur: '6px',
          duration: 0.5,
          ease: 'power2.in',
        }, '-=0.6')
        .set(rootRef.current, { display: 'none' });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={rootRef} className="preloader">
      <div className="preloader-bg" />
      <div className="preloader-name">
        <span className="preloader-letter">A</span>
        <span className="preloader-letter">J</span>
        <span className="preloader-dot">.</span>
      </div>
      <div className="preloader-progress">
        <span className="preloader-count">{progress}%</span>
        <div className="preloader-bar">
          <div className="preloader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
