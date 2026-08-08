import { Box, Container, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { resumeData } from '../data/resumeData';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.scss';

const Contact = () => {
  const revealRef = useGsapReveal();

  return (
    <Box id="contact" className="contact-section" ref={revealRef}>
      <Container maxWidth="md">
        <Typography variant="h3" className="section-title" data-reveal>
          Get In Touch
        </Typography>

        <Box className="contact-card" data-reveal>
          <Stack spacing={4} alignItems="center">
            <Typography variant="body1" className="contact-text">
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
              
              <Box className="contact-item">
                <PhoneIcon className="icon" />
                <Typography variant="h6">
                  <a href={`tel:${resumeData.personal.phone}`}>{resumeData.personal.phone}</a>
                </Typography>
              </Box>

              <Box className="contact-item">
                <EmailIcon className="icon" />
                <Typography variant="h6">
                  <a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</a>
                </Typography>
              </Box>

            </Stack>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              {resumeData.personal.socials.map((social) => (
                <Tooltip title={social.name} key={social.name}>
                  <IconButton 
                    href={social.url} 
                    target="_blank"
                    className="social-btn"
                  >
                    <social.icon />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;