import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { resumeData } from '../data/resumeData';
import './Experience.scss';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const revealRef = useGsapReveal();
  const timelineRef = useRef<HTMLElement>(null);

  // Draw the timeline line as the user scrolls through the section.
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const line = timeline.querySelector('.timeline-line');
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      );
    }, timeline);

    return () => ctx.revert();
  }, []);

  return (
    <Box id="experience" className="experience-section" ref={revealRef}>
      <Container maxWidth="md">
        <Typography variant="h4" className="section-title" data-reveal>
          Where I've Worked
        </Typography>
        <Box ref={timelineRef} className="timeline">
          <div className="timeline-line" />
          {resumeData.experience.map((exp, index) => (
            <Paper key={index} className="experience-card" data-reveal>
              <Box className="card-header">
                <Typography variant="h5" color="primary">{exp.role}</Typography>
                <Typography variant="subtitle1" color="secondary">@ {exp.company}</Typography>
                <Typography variant="caption" className="duration">{exp.duration}</Typography>
              </Box>
              <ul className="job-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
