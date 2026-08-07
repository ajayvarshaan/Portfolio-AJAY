import { useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, Chip, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import KeyInsights from '../components/KeyInsights';
import './EcommercePage.scss'; 
import productReviewVideo from '../assets/Screen Recording 2026-03-08 181806.mp4';

const WellnessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="ecommerce-page">
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
            Product Review System
          </Typography>
          
          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            {["React", "TypeScript", "MUI", "API Integration"].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" className="tech-chip" />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            An interactive product review platform built with React and TypeScript. 
            Features include real-time product ratings, user feedback management, review filtering, 
            and a responsive interface. The system allows users to browse products, submit reviews, 
            and view aggregated ratings with seamless API integration.
          </Typography>
        </Box>

        <KeyInsights
          insights={[
            { text: 'Real-time product ratings update instantly, giving users immediate feedback on product quality.' },
            { text: 'User feedback management allows moderators to curate and organize reviews effectively.' },
            { text: 'Review filtering helps shoppers find relevant feedback by rating, date, or category.' },
            { text: 'Seamless API integration keeps data synchronized between the frontend and backend.' }
          ]}
        />

        <Box className="video-section animate-entry delay-2">
          <Typography variant="h5" className="section-heading">
            Live Project Demo
          </Typography>
          
          <Paper elevation={10} className="video-container">
            <video 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
              className="project-video"
            >
              <source src={productReviewVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default WellnessPage;
