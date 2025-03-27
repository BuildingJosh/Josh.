import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Link as MuiLink,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      content: 'Earth, 3rd Rock from Sun',
      color: '#6ee7b7',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'me@joshadler.org',
      color: '#f472b6',
      link: 'mailto:me@joshadler.org',
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
      title: 'LinkedIn',
      content: 'Connect with me',
      color: '#0077b5',
      link: 'https://www.linkedin.com/in/joshradler/',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#6ee7b7',
            textAlign: 'center',
            fontFamily: '"Space Mono", monospace',
            mb: 6
          }}
        >
          Let's Connect
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={info.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'rgba(14, 14, 16, 0.6)',
                    border: '1px solid rgba(110, 231, 183, 0.1)',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 4px 20px ${info.color}25`,
                      borderColor: `${info.color}50`,
                    },
                  }}
                >
                  <Box sx={{ color: info.color, mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      color: info.color,
                      textAlign: 'center',
                    }}
                  >
                    {info.title}
                  </Typography>
                  {info.link ? (
                    <MuiLink
                      href={info.link}
                      target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: info.color,
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        {info.content}
                      </Typography>
                    </MuiLink>
                  ) : (
                    <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                      {info.content}
                    </Typography>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
