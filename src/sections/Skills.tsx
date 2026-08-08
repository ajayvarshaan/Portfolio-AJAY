import { Box, Container, Typography, Paper } from '@mui/material';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { resumeData } from '../data/resumeData';
import './Skills.scss';

const Skills = () => {
  const revealRef = useGsapReveal();

  return (
    <Box id="skills" className="skills-section" ref={revealRef}>
      <Container maxWidth="xl">
        
        <Box className="section-header" data-reveal>
          <Typography variant="h3" className="section-title">
            Technical Skills
          </Typography>
        </Box>

        <Box className="skills-grid">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <Paper key={category} className="skill-category" data-reveal>
              <Typography variant="h6" className="category-title">
                {category.toUpperCase()}
              </Typography>

              <Box className="skill-list">
                {skills.map((skill) => (
                  <Box key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Skills;