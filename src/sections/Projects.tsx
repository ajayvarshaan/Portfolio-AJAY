import { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  CardMedia,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { resumeData } from '../data/resumeData';
import './Projects.scss';

const Projects = () => {
  const revealRef = useGsapReveal();
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 900) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotationY: x * 8,
      rotationX: -y * 8,
      transformPerspective: 900,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      transformPerspective: 900,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <Box id="projects" className="projects-section" ref={revealRef}>
      <Container maxWidth="xl">
        <Typography variant="h3" className="section-header" data-reveal>
          Selected Works
        </Typography>

        <Box
          ref={gridRef}
          className="projects-grid"
          data-reveal-group
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {resumeData.projects.map((project, index) => (
            <Card
              key={index}
              className="project-card"
              data-reveal
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-gradient-border" />

              {project.image &&
                (project.internalLink ? (
                  <Link to={project.internalLink} style={{ textDecoration: 'none' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </Link>
                ) : (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{ cursor: 'default' }}
                  />
                ))}

              <CardContent className="content-area">
                {!project.image && (
                  <Box className="icon-wrapper">
                    <CodeIcon />
                  </Box>
                )}

                <Typography variant="h5" className="project-title">
                  {project.title}
                </Typography>

                <Typography variant="body2" className="project-desc">
                  {project.description}
                </Typography>

                <Box className="tech-stack">
                  {project.tech.map((tech) => (
                    <Chip key={tech} label={tech} className="tech-chip" size="small" />
                  ))}
                </Box>
              </CardContent>

              <CardActions className="action-area">
                {project.internalLink && (
                  <Button
                    component={Link}
                    to={project.internalLink}
                    endIcon={<ArrowForwardIcon />}
                    className="demo-btn"
                    fullWidth
                  >
                    View Analysis
                  </Button>
                )}

                {project.externalLink && (
                  <Button
                    href={project.externalLink}
                    target="_blank"
                    endIcon={<LaunchIcon />}
                    className="demo-btn"
                    fullWidth
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
