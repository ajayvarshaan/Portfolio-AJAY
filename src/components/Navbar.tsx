import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.scss';

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return <Slide appear={false} direction="down" in={!trigger}>{children || <div />}</Slide>;
}

const Navbar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', link: 'hero' },
    { name: 'Experience', link: 'experience' },
    { name: 'Education', link: 'education' },
    { name: 'Projects', link: 'projects' },
    { name: 'Skills', link: 'skills' },
    { name: 'Activities', link: 'activities' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <HideOnScroll {...props}>
      <AppBar component="nav" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            <Box className="logo-box">
              <Typography component="span" className="logo">
                AJ
              </Typography>
              <Box className="logo-bar" />
            </Box>
          </ScrollLink>

          <Box className="desktop-menu" sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active-nav"
              >
                <Button className="nav-link" sx={{ color: 'white', ml: 2, fontWeight: 500 }}>
                  {item.name}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="menu-btn"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className="mobile-drawer"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, backgroundColor: '#0a1929', backgroundImage: 'none' },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List className="drawer-list">
{navItems.map((item) => (
                <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active-nav"
                    onClick={handleDrawerToggle}
                    style={{ width: '100%' }}
                  >
                    <ListItemButton sx={{ textAlign: 'center', borderRadius: 2 }}>
                      <ListItemText
                        primary={item.name}
                        sx={{ color: 'white' }}
                        primaryTypographyProps={{ fontWeight: 500 }}
                      />
                    </ListItemButton>
                  </ScrollLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
