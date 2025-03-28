import React from 'react';
import { Container, Typography, Box, Button, Stack, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f1115',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?night,adventure)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          filter: 'blur(8px)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 10, pb: 8, height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontFamily: '"Space Mono", monospace',
              mb: 3,
              background: 'linear-gradient(45deg, #6ee7b7, #f472b6)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hello, I'm Josh Adler
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontFamily: 'Inter, sans-serif',
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            Builder. Thinker. Wanderer.
            <br />
            Currently exploring the intersections of robotics, philosophy, and adventure.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Link to="/mind" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Map of My Mind</Button>
            </Link>
            <Link to="/travel" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Travel Log</Button>
            </Link>
            <Link to="/games" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Games</Button>
            </Link>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
