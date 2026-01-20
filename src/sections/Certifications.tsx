import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Dialog,
  IconButton,
  Divider
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { resumeData } from '../data/resumeData';
import './Certifications.scss';

const Certifications = () => {
  const certifications = resumeData.certifications || [];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['Internship', 'Data Analytics', 'Web Development'];

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box id="certifications" className="certifications-section">
      <Container maxWidth="xl">

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
          <WorkspacePremiumIcon className="section-icon" />
          <Typography variant="h3" className="section-heading">
            Certifications
          </Typography>
        </Stack>

        {categories.map((category) => {
          const categoryCerts = certifications.filter(
            (cert) => cert.category === category
          );

          if (categoryCerts.length === 0) return null;

          return (
            <Box key={category} sx={{ mb: 6 }}>
              <Typography variant="h5" className="category-heading">
                {category}
              </Typography>

              <Divider sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)'
                  },
                  gap: 4
                }}
              >
                {categoryCerts.map((cert, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    className="cert-card"
                    onClick={() => handleOpen(cert.image)}
                  >
                    <Box className="cert-image-preview">
                      <div className="overlay">
                        <VisibilityIcon sx={{ color: 'white', fontSize: 40 }} />
                      </div>
                      <img
                        src={cert.image}
                        alt={cert.name}
                        loading="lazy"
                      />
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <Typography variant="h6" className="cert-name">
                        {cert.name}
                      </Typography>

                      <Typography variant="body2" className="cert-issuer">
                        Issued by {cert.issuer}
                      </Typography>

                      <Typography variant="body2" className="cert-date">
                        {cert.date}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          );
        })}

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vh'
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 10,
                top: -50,
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.8)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            <img
              src={selectedImage || ''}
              alt="Certificate Full View"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            />
          </Box>
        </Dialog>

      </Container>
    </Box>
  );
};

export default Certifications;
