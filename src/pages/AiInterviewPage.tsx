import { useEffect } from 'react';
import { Box, Container, Typography, Button, Chip, Stack, Grid, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InsightsIcon from '@mui/icons-material/Insights';
import QuizIcon from '@mui/icons-material/Quiz';
import { Link } from 'react-router-dom';
import KeyInsights from '../components/KeyInsights';
import './AiInterviewPage.scss';

const AiInterviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <SmartToyIcon />,
      title: 'AI-Powered Question Generation',
      desc: 'Generates role-specific interview questions across technical and behavioral domains using the Gemini API.'
    },
    {
      icon: <FeedbackIcon />,
      title: 'Real-Time Answer Feedback',
      desc: 'Provides instant, detailed feedback on responses to help candidates refine their answers on the spot.'
    },
    {
      icon: <InsightsIcon />,
      title: 'Performance Analytics',
      desc: 'Tracks interview performance across sessions with insightful analytics and progress visualizations.'
    },
    {
      icon: <QuizIcon />,
      title: 'Comprehensive Question Bank',
      desc: 'A rich question bank covering multiple technologies, difficulty levels, and common interview scenarios.'
    }
  ];

  return (
    <Box className="ai-interview-page">
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
            AI Interview Preparation
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            {['React', 'TypeScript', 'AI Integration', 'Node.js'].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" className="tech-chip" />
            ))}
          </Stack>

          <Typography variant="h6" className="description">
            An AI-powered interview preparation platform that helps candidates practice and improve
            their interview skills. Features include AI-generated interview questions based on job
            roles, real-time feedback on answers, performance tracking, and a comprehensive question
            bank covering technical and behavioral topics. Built with a modern React frontend and
            intelligent backend integration.
          </Typography>

          <Button
            variant="contained"
            endIcon={<LaunchIcon />}
            href="https://ai-interview-preparation-app-front.onrender.com"
            target="_blank"
            className="live-btn animate-entry delay-1"
          >
            Visit Live Site
          </Button>
        </Box>

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
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <KeyInsights
          insights={[
            { text: 'AI-generated interview questions tailored to specific job roles, covering both technical and behavioral topics.' },
            { text: 'Real-time feedback on candidate answers helps users identify strengths and areas for improvement instantly.' },
            { text: 'Performance tracking across sessions allows candidates to monitor progress and readiness over time.' },
            { text: 'A comprehensive question bank ensures broad coverage across multiple technologies and skill levels.' }
          ]}
        />
      </Container>
    </Box>
  );
};

export default AiInterviewPage;
