import { Box, ThemeProvider, createTheme, CssBaseline, Container, Typography, Stack } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Activities from './sections/Activities';
import Contact from './sections/Contact';

import BlinkitPage from './pages/BlinkitPage';
import PizzaPage from './pages/PizzaPage';
import MetaAdsPage from './pages/MetaAdsPage';
import HrPage from './pages/HrPage';
import HospitalPage from './pages/HospitalPage';
import EcommercePage from './pages/EcommercePage';
import WellnessPage from './pages/WellnessPage';
import AiInterviewPage from './pages/AiInterviewPage';
import AiEventBookingPage from './pages/AiEventBookingPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
      light: '#4dd0e1',
      dark: '#0097a7',
    },
    secondary: {
      main: '#7c4dff',
    },
    background: {
      default: '#0a1929',
      paper: '#0f2740',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-1px' },
    h2: { fontWeight: 800, letterSpacing: '-0.5px' },
    h3: { fontWeight: 700, letterSpacing: '-0.5px' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0a1929',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollProgress />
      <CustomCursor />
      <Routes>

        <Route path="/" element={
          <>
            <Navbar />
            <Box component="main" sx={{ position: 'relative' }}>
              <Hero />
              <Experience />
              <Education />
              <Certifications />
              <Projects />
              <Skills />
              <Activities />
              <Contact />
            </Box>
            <Box component="footer" sx={{ py: { xs: 5, md: 6 }, textAlign: 'center', color: 'text.secondary', bgcolor: '#050d18', px: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Container maxWidth="md">
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                  {/* socials */}
                </Stack>
                <Typography variant="body2" sx={{ fontFamily: 'Fira Code, monospace', letterSpacing: '1px' }}>
                  © {new Date().getFullYear()} AJAY VARSHAAN
                </Typography>
              </Container>
            </Box>
          </>
        } />

        <Route path="/projects/blinkit" element={<BlinkitPage />} />
        <Route path="/projects/pizza" element={<PizzaPage />} />
        <Route path="/projects/meta-ads" element={<MetaAdsPage />} />
        <Route path="/projects/hr-platform" element={<HrPage />} />
        <Route path="/projects/hospital" element={<HospitalPage />} />
        <Route path="/projects/ecommerce" element={<EcommercePage />} />
        <Route path="/projects/product-review" element={<WellnessPage />} />
        <Route path="/projects/ai-interview" element={<AiInterviewPage />} />
        <Route path="/projects/ai-event-booking" element={<AiEventBookingPage />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
