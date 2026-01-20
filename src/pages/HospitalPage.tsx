import { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Chip,
  Stack
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './HospitalPage.scss';
import h1 from '../assets/1.jpg';
import h2 from '../assets/2.jpg';
import h3 from '../assets/3.jpg';
import h4 from '../assets/4.jpg';
import h5 from '../assets/5.jpg';
import h6 from '../assets/6.jpg';
import h7 from '../assets/7.jpg';
import h8 from '../assets/8.jpg';
import h9 from '../assets/9.jpg';
import h10 from '../assets/10.jpg';

const HospitalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hospitalImages = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];

  return (
    <Box className="hospital-page">
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
            Hospital Management System
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 4, flexWrap: 'wrap' }}
          >
            {['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                className="tech-chip"
              />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            A comprehensive web application designed to streamline hospital
            operations. The system manages patient records, doctor appointments,
            and staff administration. The gallery below showcases the various
            modules including the login portal, dashboard analytics, and patient
            management interfaces.
          </Typography>
        </Box>

        <Box
          className="animate-entry delay-2"
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr'
            },
            gap: 4,
            mt: 6
          }}
        >
          {hospitalImages.map((imgSrc, index) => (
            <Paper key={index} elevation={10} className="image-container">
              <img
                src={imgSrc}
                alt={`Hospital System Screen ${index + 1}`}
                loading="lazy"
              />
            </Paper>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default HospitalPage;