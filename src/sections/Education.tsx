import { useGsapReveal } from '../hooks/useGsapReveal';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import { resumeData } from '../data/resumeData';
import './Education.scss';

const Education = () => {
  const revealRef = useGsapReveal();

  return (
    <Box id="education" className="education-section" ref={revealRef}>
      <Container maxWidth="lg">
        <Typography variant="h3" className="section-title" data-reveal>
          Education
        </Typography>

        <Box className="timeline-container">
          {resumeData.education.map((edu, index) => (
            <Paper key={index} className="education-card" elevation={3} data-reveal>
              <Box className="card-icon">
                <SchoolIcon fontSize="large" />
              </Box>
              
              <Box className="card-content">
                <Typography variant="h5" className="degree">
                  {edu.degree}
                </Typography>
                
                <Typography variant="h6" className="institution">
                  {edu.institution}
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} className="meta-info">
                  <Box className="meta-item">
                    <CalendarMonthIcon fontSize="small" />
                    <span>{edu.period}</span>
                  </Box>
                  <Box className="meta-item score">
                    <GradeIcon fontSize="small" />
                    <span>{edu.score}</span>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;