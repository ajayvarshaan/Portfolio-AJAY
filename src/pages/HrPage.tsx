import { useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, Chip, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';
import KeyInsights from '../components/KeyInsights';
import './HrPage.scss';
import hrImg from '../assets/hr.png';

const HrPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="hr-page">
      <Container maxWidth="xl">
        <Button 
          component={Link} 
          to="/" 
          startIcon={<ArrowBackIcon />}
          className="back-btn animate-entry"
        >
          Back to Portfolio
        </Button>

        <Box className="animate-entry delay-1">
          <Typography variant="h2" className="page-title">
            Modern HR Platform
          </Typography>
          
          <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
            {["React", "TypeScript", "Material UI", "Framer Motion"].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" className="tech-chip" />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            A highly responsive and visually engaging landing page designed for an HR SaaS platform. 
            This project focuses on modern UI principles, featuring smooth scroll animations, 
            interactive onboarding elements, and a clean, accessible layout built with TypeScript 
            for robust code quality.
          </Typography>

          <Button 
            variant="contained" 
            endIcon={<LaunchIcon />}
            href="https://ajayvarshaan.github.io/hr-platform/"
            target="_blank"
            sx={{ 
              bgcolor: '#00bcd4', 
              mb: 6,
              '&:hover': { bgcolor: '#008ba3' } 
            }}
          >
            Visit Live Site
          </Button>
        </Box>

        <KeyInsights
          insights={[
            { text: 'Framer Motion animations deliver a polished, modern feel with smooth scroll-triggered transitions.' },
            { text: 'Component-based architecture keeps the UI maintainable, scalable, and easy to extend.' },
            { text: 'Accessible design with clear typography and contrast ensures usability across devices.' },
            { text: 'A clean, organized layout guides users naturally through the onboarding journey.' }
          ]}
        />

        <Box className="animate-entry delay-2">
          <Typography variant="h5" className="section-heading">
            UI & Design Overview
          </Typography>
          
          <Paper elevation={10} className="image-container">
            <img 
              src={hrImg} 
              alt="HR Platform UI Design" 
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default HrPage;