import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import useGsapMagnetic from '../hooks/useGsapMagnetic';
import './Hero.scss';

import profileImage from '../assets/me.jpg';

// Role phrases cycled by the typewriter effect.
const ROLE_PHRASES = [
  'AI FULL-STACK DEVELOPER & DATA ANALYST',
  'BUILDER OF INTELLIGENT WEB EXPERIENCES',
  'DATA STORYTELLER & UI/UX ENTHUSIAST',
];

// Split the name into individual character spans for a split-text reveal.
const splitText = (text: string) =>
  text.split('').map((char, i) => (
    <span className="hero-char" key={i}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useGsapMagnetic<HTMLDivElement>(0.35);
  const socialsRef = useGsapMagnetic<HTMLDivElement>(0.25);

  // Typewriter state for the rotating role headline.
  const [typed, setTyped] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    let timeout: ReturnType<typeof setTimeout>;
    const current = ROLE_PHRASES[phraseIndex % ROLE_PHRASES.length];

    // Plain JS timing loop (no GSAP) keeps this decoupled and light.
    if (!deleting) {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 28);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % ROLE_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typed, deleting, phraseIndex]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // 1) Split-text reveal: stagger the name characters in.
      gsap.set('.hero-char', { yPercent: 120, opacity: 0 });
      gsap.set('.role-partial', { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero-char', {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.035,
      })
        .fromTo(
          '.greeting',
          { opacity: 0, y: 20, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          '.role-partial',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          '.description',
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.action-buttons',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.profile-image-wrapper',
          { opacity: 0, scale: 0.5, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: 'back.out(1.6)' },
          '-=0.8'
        );

      // 2) Continuous floating on image + glow.
      gsap.to('.profile-image-wrapper', {
        y: -16,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.animated-border-glow', {
        rotate: 360,
        duration: 12,
        ease: 'none',
        repeat: -1,
      });

      // 3) Parallax: hero content translates up slower, image + bg parallax.
      gsap.to('.hero-bg-glow', {
        yPercent: 30,
        xPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.profile-image-wrapper', {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-content', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 4) Mouse-move tilt on the profile wrapper (desktop only).
      const wrapper = sectionRef.current?.querySelector('.profile-image-wrapper');
      if (wrapper && window.innerWidth >= 900) {
        sectionRef.current?.addEventListener('mousemove', (e) => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(wrapper, {
            rotationY: x * 16,
            rotationX: -y * 16,
            transformPerspective: 800,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
        sectionRef.current?.addEventListener('mouseleave', () => {
          gsap.to(wrapper, {
            rotationY: 0,
            rotationX: 0,
            transformPerspective: 800,
            duration: 0.6,
            ease: 'power2.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box id="hero" ref={sectionRef} className="hero-section">
      <div className="hero-bg-glow"></div>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4 },
            minHeight: { xs: 'auto', md: '80vh' },
            pt: { xs: 4, md: 0 },
          }}
        >

          <Box
            className="hero-content"
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Typography variant="subtitle1" className="greeting" sx={{ overflow: 'hidden' }}>
              Hello, I am
            </Typography>

            <Typography
              variant="h1"
              className="name-gradient"
              sx={{ overflow: 'hidden', paddingBottom: '0.15em' }}
              aria-label={resumeData.personal.name}
            >
              {splitText(resumeData.personal.name)}
            </Typography>

            <Box className="role-line">
              <Typography variant="h2" className="role role-partial" aria-label="AI Full-Stack Developer & Data Analyst">
                {typed}
                <span className="typing-caret" aria-hidden="true" />
              </Typography>
            </Box>

            <Typography variant="body1" className="description">
              {resumeData.personal.summary}
            </Typography>

<Stack direction="row" spacing={3} className="action-buttons">
              <div className="magnetic-wrap" ref={ctaRef}>
                <Button
                  component={ScrollLink}
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  variant="contained"
                  className="primary-btn"
                  sx={{ cursor: 'pointer' }}
                >
                  Contact Me
                </Button>
              </div>

              <div className="magnetic-wrap" ref={socialsRef}>
                <Stack direction="row" spacing={1} className="socials-row">
                  {resumeData.personal.socials.map((social) => (
                    <IconButton
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      className="social-icon"
                    >
                      <social.icon />
                    </IconButton>
                  ))}
                </Stack>
              </div>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              width: '100%',
            }}
          >
            <Box className="profile-image-wrapper">
              <div className="animated-border-glow"></div>
              <Box className="profile-tag">
                <Typography variant="caption" className="profile-tag-text">
                  {resumeData.personal.location}
                </Typography>
              </Box>
              <img
                src={profileImage}
                alt={resumeData.personal.name}
                className="profile-image"
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
