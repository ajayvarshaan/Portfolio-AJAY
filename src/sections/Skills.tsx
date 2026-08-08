import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { resumeData } from '../data/resumeData';
import './Skills.scss';

gsap.registerPlugin(ScrollTrigger);

// Weight hints for the most prominent skills to drive the animated bars.
const SKILL_LEVELS: Record<string, number> = {
  'React.js': 92,
  TypeScript: 88,
  JavaScript: 90,
  'HTML/CSS': 95,
  MUI: 90,
  SCSS: 85,
  Power: 90,
  BI: 90,
  SQL: 88,
  Python: 82,
  Java: 80,
};

const Skills = () => {
  const revealRef = useGsapReveal();
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = barsRef.current;
    if (!box) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.set('.skill-level-fill', { scaleX: 0, transformOrigin: 'left center' });
      gsap.to('.skill-level-fill', {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
        },
      });

      // Floating tech-stack chips (subtle bob).
      gsap.utils.toArray<HTMLElement>('.skill-item').forEach((chip, i) => {
        gsap.to(chip, {
          y: i % 2 === 0 ? -6 : 6,
          duration: 2.5 + (i % 5) * 0.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: (i % 6) * 0.2,
        });
      });
    }, box);

    return () => ctx.revert();
  }, []);

  return (
    <Box id="skills" className="skills-section" ref={revealRef}>
      <Container maxWidth="xl">
        
        <Box className="section-header" data-reveal>
          <Typography variant="h3" className="section-title">
            Technical Skills
          </Typography>
        </Box>

        <Box className="skills-grid" ref={barsRef}>
          {Object.entries(resumeData.skills).map(([category, skills]) => {
            const level = SKILL_LEVELS[category.split(' ')[0]] ?? 85;
            return (
              <Paper key={category} className="skill-category" data-reveal>
                <Typography variant="h6" className="category-title">
                  {category.toUpperCase()}
                </Typography>

                <Box className="category-level">
                  <Box className="skill-level-track">
                    <Box className="skill-level-fill" style={{ width: `${level}%` }} />
                  </Box>
                  <Typography variant="caption" className="category-level-text">
                    {level}%
                  </Typography>
                </Box>

                <Box className="skill-list">
                  {skills.map((skill) => (
                    <Box key={skill} className="skill-item">
                      <span className="skill-name">{skill}</span>
                    </Box>
                  ))}
                </Box>
              </Paper>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default Skills;
