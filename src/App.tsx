import { Box, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
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
              <Certifications />
              <Projects />
              <Skills />
              <Activities />
              <Contact />
            </Box>
            <Box component="footer" sx={{ py: 4, textAlign: 'center', color: 'text.secondary', bgcolor: '#081421' }}>
              <p>Built with React, MUI & SCSS by Ajay Varshaan</p>
            </Box>
          </>
        } />

     
        <Route path="/projects/blinkit" element={<BlinkitPage />} />
        <Route path="/projects/pizza" element={<PizzaPage />} />
        <Route path="/projects/meta-ads" element={<MetaAdsPage />} />
        <Route path="/projects/hr-platform" element={<HrPage />} />
        <Route path="/projects/hospital" element={<HospitalPage />} />
        <Route path="/projects/ecommerce" element={<EcommercePage />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;