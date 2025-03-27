import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { travelData } from '../data/travelData';

const TravelLog = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Box sx={{ backgroundColor: '#0e0e10', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: '"Space Mono", monospace',
              color: '#6ee7b7',
              mb: 6,
            }}
          >
            Travel Log
          </Typography>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ marginTop: '2rem' }}
        >
          {travelData.map((entry, index) => (
            <motion.div key={index} variants={item}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: 'rgba(14, 14, 16, 0.6)',
                  borderRadius: 2,
                  border: '1px solid rgba(110, 231, 183, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                  <Box
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      height: '300px',
                      overflow: 'hidden',
                      borderRadius: 1,
                    }}
                  >
                    <img
                      src={entry.image}
                      alt={entry.location}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{
                        fontFamily: '"Space Mono", monospace',
                        color: '#6ee7b7',
                      }}
                    >
                      {entry.country}
                      {entry.location && (
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            ml: 1,
                          }}
                        >
                          - {entry.location}
                        </Typography>
                      )}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        mb: 2,
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: '"Space Mono", monospace',
                      }}
                    >
                      {entry.period}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{
                        mb: 3,
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.8,
                      }}
                    >
                      {entry.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {entry.tags?.map((tag, tagIndex) => (
                        <Box
                          key={tagIndex}
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            backgroundColor: 'rgba(110, 231, 183, 0.1)',
                            color: '#6ee7b7',
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '0.875rem',
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default TravelLog;
