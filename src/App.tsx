import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  
      <Routes>
      
     
        <Route path="/" element={
          <>
            <Navbar />
            <Box component="main">
              <Hero />
              <Experience />
              <Education /> 
              <Certifications />
              <Projects />
              <Skills />
              <Activities />
              <Contact />
            </Box>
            <Box component="footer" sx={{ py: { xs: 3, md: 4 }, textAlign: 'center', color: 'text.secondary', bgcolor: '#081421', px: 2 }}>
              <p>@AJAY VARSHAAN</p>
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