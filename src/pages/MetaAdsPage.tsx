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
import './MetaAdsPage.scss';

const MetaAdsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="meta-page">
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
            Meta Ads Dashboard
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap' }}>
            {['Power BI', 'DAX', 'Data Analytics'].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                className="tech-chip"
              />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            A comprehensive analysis of social media advertising campaigns across Facebook and Instagram.
            This project focuses on evaluating ad performance using key metrics such as Click-Through Rate (CTR),
            Cost Per Click (CPC), and Return on Ad Spend (ROAS).
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
              Facebook Campaign Insights
            </Typography>
            <Paper elevation={10} className="image-container">
              <img
                src="/fb.png"
                alt="Facebook Ads Dashboard"
                loading="lazy"
              />
            </Paper>
          </Box>

          <Box>
            <Typography variant="h5" className="section-heading">
              Instagram Audience Analysis
            </Typography>
            <Paper elevation={10} className="image-container">
              <img
                src="/insta.png"
                alt="Instagram Ads Dashboard"
                loading="lazy"
              />
            </Paper>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default MetaAdsPage;
