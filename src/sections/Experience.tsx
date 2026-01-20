import { Box, Container, Typography, Paper } from '@mui/material';
import { resumeData } from '../data/resumeData';
import './Experience.scss';

const Experience = () => {
  return (
    <Box id="experience" className="experience-section">
      <Container maxWidth="md">
        <Typography variant="h4" className="section-title">
          Where I've Worked
        </Typography>
        <Box className="timeline">
          {resumeData.experience.map((exp, index) => (
            <Paper key={index} className="experience-card">
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