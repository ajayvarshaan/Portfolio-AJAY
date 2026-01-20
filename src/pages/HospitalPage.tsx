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

const HospitalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hospitalImages = Array.from(
    { length: 10 },
    (_, i) => `/${i + 1}.jpg`
  );

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
