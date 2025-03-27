import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Travel', path: '/travel' },
  { name: 'My Mind', path: '/mind' },
  { name: 'Contact', path: '/contact' }
];

const NavLink = ({ item, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.path}
        onClick={onClick}
        style={{
          textDecoration: 'none',
          color: isActive ? '#6ee7b7' : 'white',
          padding: '0.5rem 1rem',
          transition: 'color 0.3s ease'
        }}
      >
        <Typography variant="button">
          {item.name}
        </Typography>
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {pages.map((item) => (
        <ListItem key={item.name}>
          <NavLink item={item} onClick={handleDrawerToggle} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(14, 14, 16, 0.95)', 
      backdropFilter: 'blur(8px)',
      pt: 1 
    }}>
      <Toolbar sx={{ 
        minHeight: { xs: '64px', sm: '72px' },  
        py: 1  
      }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 0,
            textDecoration: 'none',
            color: 'inherit',
            fontFamily: '"Space Mono", monospace',
            mr: 8,
            mt: -1,
            pt: 1 
          }}
        >
          Josh.
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center'
            }}
          >
            {pages.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </Box>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: '#0e0e10',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
