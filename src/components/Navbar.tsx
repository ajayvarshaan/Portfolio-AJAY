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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, backgroundColor: '#0a1929' },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
             <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
               <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                 <CloseIcon />
               </IconButton>
             </Box>
             
             <List>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ScrollLink 
                    to={item.link} 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    onClick={handleDrawerToggle}
                    style={{ width: '100%' }}
                  >
                    <ListItemButton sx={{ textAlign: 'center' }}>
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