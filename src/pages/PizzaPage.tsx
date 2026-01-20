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
import './PizzaPage.scss';

const PizzaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="pizza-page">
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
            Pizza Sales Analytics
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap' }}>
            {['Power BI', 'SQL', 'Python'].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                className="tech-chip"
              />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            This project focuses on identifying peak order times, best-selling categories, and seasonal trends.
            I used SQL and Python for data cleaning and transformation, then visualized the insights in Power BI
            to help stakeholders optimize inventory and marketing strategies.
          </Typography>
        </Box>

        <Box
          className="animate-entry delay-2"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            mt: 6
          }}
        >
          <Box>
            <Typography variant="h5" className="section-heading">
              Dashboard Overview
            </Typography>
            <Paper elevation={10} className="image-container">
              <img
                src="/pizza 1.png"
                alt="Pizza Sales Dashboard Overview"
                loading="lazy"
              />
            </Paper>
          </Box>

          <Box>
            <Typography variant="h5" className="section-heading">
              Detailed Insights & Trends
            </Typography>
            <Paper elevation={10} className="image-container">
              <img
                src="/pizza 2.png"
                alt="Pizza Sales Detailed Insights"
                loading="lazy"
              />
            </Paper>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default PizzaPage;
