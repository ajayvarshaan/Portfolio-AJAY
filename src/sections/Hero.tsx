import { useEffect } from 'react';
import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import './Hero.scss';

import profileImage from '../assets/me.jpg';

const Hero = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.greeting',
        { opacity: 0, y: 20, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6 }
      )
        .fromTo(
          '.name-gradient',
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.role',
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6 },
          '-=0.4'
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
          { opacity: 0, scale: 0.6, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: 'back.out(1.6)' },
          '-=0.6'
        );

      // Floating animation on the image wrapper (subtle)
      gsap.to('.profile-image-wrapper', {
        y: -16,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Gentle parallax on background glow
      gsap.to('.hero-bg-glow', {
        yPercent: 20,
        xPercent: 10,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, '.hero-section');

    return () => ctx.revert();
  }, []);

  return (
    <Box id="hero" className="hero-section">
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
            <Typography variant="subtitle1" className="greeting">
              Hello, I am
            </Typography>

            <Typography variant="h1" className="name-gradient">
              {resumeData.personal.name}
            </Typography>

            <Typography variant="h2" className="role">
              {resumeData.personal.role}
            </Typography>

            <Typography variant="body1" className="description">
              {resumeData.personal.summary}
            </Typography>

            <Stack direction="row" spacing={3} className="action-buttons">
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

              <Stack direction="row" spacing={1}>
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
