import React from 'react';
import { Container, Typography, Grid, Paper, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';

const journalEntries = [
  {
    title: 'The Art of Building',
    date: '2025-03-25',
    excerpt: 'Thoughts on creating things that matter, from robots to relationships...',
    tags: ['robotics', 'philosophy', 'creation'],
    color: '#6ee7b7',
  },
  {
    title: 'Late Night Musings',
    date: '2025-03-20',
    excerpt: 'On consciousness, AI, and the future of human-machine interaction...',
    tags: ['AI', 'consciousness', 'future'],
    color: '#f472b6',
  },
  {
    title: 'Adventures in the Unknown',
    date: '2025-03-15',
    excerpt: 'Recent explorations in both the physical and mental realms...',
    tags: ['adventure', 'exploration', 'growth'],
    color: '#facc15',
  },
];

const Journal = () => {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 4,
            background: 'linear-gradient(45deg, #6ee7b7, #f472b6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Journal
        </Typography>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid container spacing={4}>
          {journalEntries.map((entry, index) => (
            <Grid item xs={12} key={index}>
              <motion.div variants={item}>
                <Paper
                  component={motion.div}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 8px 30px ${entry.color}20`,
                  }}
                  sx={{
                    p: 3,
                    borderLeft: `4px solid ${entry.color}`,
                    backgroundColor: 'background.paper',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: '"Space Mono", monospace',
                      }}
                    >
                      {entry.date}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontFamily: '"Space Mono", monospace',
                      color: entry.color,
                    }}
                  >
                    {entry.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                    }}
                  >
                    {entry.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {entry.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: `${entry.color}20`,
                          color: entry.color,
                          fontFamily: '"Space Mono", monospace',
                          '&:hover': {
                            backgroundColor: `${entry.color}30`,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Journal;
