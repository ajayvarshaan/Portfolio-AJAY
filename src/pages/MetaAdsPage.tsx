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
import KeyInsights from '../components/KeyInsights';
import './MetaAdsPage.scss';
import fbImg from '../assets/fb.png';
import instaImg from '../assets/insta.png';

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

        <KeyInsights
          insights={[
            { text: 'Click-Through Rate (CTR) analysis reveals which ad creatives and placements drive the most engagement.' },
            { text: 'Cost Per Click (CPC) benchmarking helps optimize ad spend across Facebook and Instagram campaigns.' },
            { text: 'Return on Ad Spend (ROAS) measurement identifies the most profitable campaigns and audiences.' },
            { text: 'DAX-calculated KPIs in Power BI enable dynamic, cross-platform performance comparison.' }
          ]}
        />

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
                src={fbImg}
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
                src={instaImg}
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