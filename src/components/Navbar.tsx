import { useState, useEffect, useRef } from 'react';
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
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';
import gsap from 'gsap';
import './Navbar.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const appBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Hide on scroll down, show on scroll up (past 120px).
      if (
        Math.abs(scrollY - lastScrollY.current) > 12 &&
        scrollY > 120
      ) {
        setHidden(scrollY > lastScrollY.current);
      }
      lastScrollY.current = scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly translate the bar up/down based on hidden state.
  useEffect(() => {
    const el = appBarRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      el.style.transform = hidden ? 'translateY(-100%)' : 'translateY(0)';
      return;
    }
    gsap.to(el, {
      y: hidden ? '-100%' : '0%',
      duration: 0.4,
      ease: 'power3.out',
    });
  }, [hidden]);

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
    <AppBar
      component="nav"
      ref={appBarRef}
      className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <ScrollLink to="hero" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>
          <Box className="logo-box">
            <Typography component="span" className="logo">AJ</Typography>
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
  );
};

export default Navbar;
