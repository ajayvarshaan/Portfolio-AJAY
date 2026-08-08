import { useEffect } from 'react';
import { Box, Container, Typography, Button, Chip, Stack, Grid, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Link } from 'react-router-dom';
import KeyInsights from '../components/KeyInsights';
import './AiEventBookingPage.scss';

const AiEventBookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <SearchIcon />,
      title: 'AI-Powered Search',
      description: 'Search events in natural language — e.g. "jazz concerts under $50 this weekend" — with intelligent results.'
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'Smart Recommendations',
      description: 'Personalized event suggestions based on user preferences, booking history, and momentum analytics.'
    },
    {
      icon: <EventAvailableIcon />,
      title: 'Booking Assistant & Pricing',
      description: 'AI booking guidance, dynamic seat selection, and smart ticket pricing optimized from demand, capacity, and similar events.'
    },
    {
      icon: <CompareArrowsIcon />,
      title: 'Compare & Manage',
      description: 'Compare events side-by-side, manage bookings, create events, and view an admin dashboard with user activity logs.'
    }
  ];

  return (
    <Box className="ai-event-booking-page">
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
            AI Event Booking System
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            {['React.js', 'Node.js', 'MongoDB', 'REST API', 'Google Auth', 'AI Integration'].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" className="tech-chip" />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            A full-stack AI-powered event booking platform that lets users discover, book, and manage events
            with intelligent assistance. Features include natural-language AI search, personalized recommendations,
            a booking assistant, smart ticket pricing, demand forecasting, event creation, side-by-side event
comparison, and an admin dashboard with user activity tracking. Secure authentication is handled
            through JWT and Google OAuth.
          </Typography>

          <Button
            variant="contained"
            endIcon={<LaunchIcon />}
            href="https://ai-event-booking-application-frontend.onrender.com"
            target="_blank"
            className="live-btn animate-entry delay-1"
          >
            Visit Live Site
          </Button>
        </Box>

        <KeyInsights
          insights={[
            { text: 'Natural-language search lets users find events like "jazz concerts under $50 this weekend" without complex filters.' },
            { text: 'Personalized recommendations are driven by user preferences, booking history, and real-time momentum analytics.' },
            { text: 'Smart ticket pricing dynamically adapts to demand, venue capacity, and comparisons with similar events.' },
            { text: 'An admin dashboard provides user activity logs and analytics to help operators understand platform usage.' }
          ]}
        />

        <Box className="features-section animate-entry delay-2">
          <Typography variant="h5" className="section-heading">
            Key AI Features
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card className="feature-card">
                  <CardContent>
                    <Box className="feature-icon">{feature.icon}</Box>
                    <Typography variant="h6" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="feature-desc">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
</Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AiEventBookingPage;

