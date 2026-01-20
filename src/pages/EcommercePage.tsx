import { useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, Chip, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './EcommercePage.scss'; 
import screenRec from '../assets/Screen Recording.mp4';

const EcommercePage = () => {
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
            Mini E-Commerce Platform
          </Typography>
          
          <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
            {["React.js", "MongoDB", "Node.js", "Express"].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" className="tech-chip" />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            A fully functional e-commerce application built with the MERN stack. 
            Features include dynamic product browsing, a functional shopping cart, 
            search filtering, and a seamless checkout flow. The video below demonstrates 
            the user journey from product selection to order placement.
          </Typography>
        </Box>

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
              <source src={screenRec} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default EcommercePage;