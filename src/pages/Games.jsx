import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Games = () => {
  const [showGame, setShowGame] = useState(false);

  const handleStartGame = () => {
    setShowGame(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          gap: 4,
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        {!showGame ? (
          <>
            <Typography variant="h2" component="h1" gutterBottom>
              Kill-em Flight Simulator
            </Typography>
            <Typography variant="h5" gutterBottom>
              Test your skills in this action-packed flight simulator!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleStartGame}
            >
              Start Game
            </Button>
          </>
        ) : (
          <Box sx={{ width: '100%', height: '90vh', position: 'relative' }}>
            <iframe
              src="/game"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
              title="Kill-em Flight Simulator"
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ position: 'absolute', top: 16, left: 16 }}
              onClick={() => setShowGame(false)}
            >
              Back to Menu
            </Button>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};

export default Games;
