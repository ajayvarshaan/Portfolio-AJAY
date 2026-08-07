import { useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, Chip, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import KeyInsights from '../components/KeyInsights';
import '../sections/Projects.scss';
import blinkitDashboard from '../assets/blinkit-dashboard.png';

const BlinkitPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a1929', pt: 6, pb: 10 }}>
      <Container maxWidth="xl">
  
        <Button 
          component={Link} 
          to="/" 
          startIcon={<ArrowBackIcon />}
          sx={{ 
            color: 'white', 
            mb: 4, 
            textTransform: 'none',
            fontSize: '1.1rem',
            '&:hover': { color: '#00bcd4', background: 'rgba(0,188,212,0.1)' }
          }}
        >
          Back to Portfolio
        </Button>

        <Typography variant="h2" sx={{ fontWeight: '800', color: 'white', mb: 2 }}>
          Blinkit Business Insights
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
          {["Power BI", "DAX", "Data Analytics"].map((tech) => (
            <Chip 
              key={tech} 
              label={tech} 
              variant="outlined" 
              sx={{ color: '#00bcd4', borderColor: '#00bcd4', fontFamily: 'Fira Code' }} 
            />
          ))}
        </Stack>

        <Typography variant="h6" sx={{ color: '#b0bec5', mb: 6, maxWidth: '900px', lineHeight: 1.8 }}>
          This project involved a comprehensive analysis of Blinkit's sales performance, delivery efficiency, and product turnover. 
          By leveraging Power BI and DAX, I identified key delivery bottlenecks by comparing promised vs. actual delivery times 
and created measures to track profitability and revenue contribution across different store locations.
        </Typography>

        <KeyInsights
          insights={[
            { text: 'Identified key delivery bottlenecks by comparing promised versus actual delivery times.' },
            { text: 'Tracked profitability and revenue contribution across different store locations using DAX measures.' },
            { text: 'Analyzed sales performance and product turnover to surface high-performing categories.' },
            { text: 'Delivery-efficiency metrics guide operational improvements for faster customer fulfillment.' }
          ]}
        />

        <Paper 
          elevation={24}
          sx={{ 
            bgcolor: 'transparent', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 40px rgba(0,0,0,0.5)'
          }}
        >
          <img 
            src={blinkitDashboard} 
            alt="Blinkit Dashboard Full View" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default BlinkitPage;