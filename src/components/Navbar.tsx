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
  Slide 
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', link: 'hero' },
    { name: 'Experience', link: 'experience' },
    { name: 'Certifications', link: 'certifications' },
    { name: 'Projects', link: 'projects' },
    { name: 'Skills', link: 'skills' },
    { name: 'Activities', link: 'activities' },
    { name: 'Contact', link: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: '#0a1929' }}>
      <Box sx={{ py: 2, display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.link}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleDrawerToggle}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', py: 2 }}>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{ 
                    sx: { color: 'white', fontWeight: 600 } 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar 
        position="fixed" 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        elevation={scrolled ? 4 : 0}
        sx={{ bgcolor: scrolled ? 'rgba(10, 25, 41, 0.85)' : 'transparent' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            <Box component="span" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#00bcd4' }}>
              AV
            </Box>
          </ScrollLink>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                <Button sx={{ color: 'white', ml: 2, fontWeight: 500 }}>
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
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0a1929' },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;