import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import './Hero.scss';

const Hero = () => {
  return (
    <Box id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <Container maxWidth="lg">
        {/* Main Flex Container (Replaces Grid) */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack on mobile, Row on Desktop
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: { xs: 6, md: 4 }, // Spacing between Text and Image
            minHeight: '80vh' // Ensures it takes up good vertical space
          }}
        >
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <Box 
            className="hero-content" 
            sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' } // Center items on mobile
            }}
          >
            <Typography variant="subtitle1" className="greeting">
              Hello, I am
            </Typography>
            
            <Typography variant="h1" className="name-gradient">
              {resumeData.personal.name}
            </Typography>
            
            <Typography variant="h2" className="role">
              {resumeData.personal.role}
            </Typography>
            
            <Typography variant="body1" className="description">
              {resumeData.personal.summary}
            </Typography>
            
            <Stack direction="row" spacing={3} className="action-buttons">
              {/* Scroll to Contact Section instead of Popup */}
              <Button 
                component={ScrollLink}
                to="contact"  // ID of the Contact Section
                smooth={true}
                duration={500}
                offset={-70}
                variant="contained" 
                className="primary-btn"
                sx={{ cursor: 'pointer' }}
              >
                Contact Me
              </Button>
              
              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                {resumeData.personal.socials.map((social) => (
                  <IconButton 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    className="social-icon"
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT SIDE: IMAGE */}
          <Box 
            sx={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' }, // Center on mobile, Right on desktop
              width: '100%' 
            }}
          >
            <Box className="profile-image-wrapper">
              <div className="animated-border-glow"></div>
              <img 
                src="/me.jpg" 
                alt={resumeData.personal.name} 
                className="profile-image" 
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;