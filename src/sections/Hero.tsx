import { Box, Container, Typography, Button, IconButton, Stack } from '@mui/material';
import { resumeData } from '../data/resumeData';
import { Link as ScrollLink } from 'react-scroll'; 
import './Hero.scss';


import profileImage from '../assets/me.jpg'; 

const Hero = () => {
  return (
    <Box id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
   
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column-reverse', md: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: { xs: 6, md: 4 }, 
            minHeight: '80vh' 
          }}
        >
          
      
          <Box 
            className="hero-content" 
            sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' }, 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' } 
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
              <Button 
                component={ScrollLink}
                to="contact" 
                smooth={true}
                duration={500}
                offset={-70}
                variant="contained" 
                className="primary-btn"
                sx={{ cursor: 'pointer' }}
              >
                Contact Me
              </Button>
              
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

       
          <Box 
            sx={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              width: '100%' 
            }}
          >
            <Box className="profile-image-wrapper">
              <div className="animated-border-glow"></div>
          
              <img 
                src={profileImage} 
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