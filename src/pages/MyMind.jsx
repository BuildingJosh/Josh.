import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import NeuralOrb from '../components/NeuralOrb';
import { neuralOrbData } from '../data/neuralOrbData';

const MyMind = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#0e0e10',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        pt: 8
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <NeuralOrb
          data={neuralOrbData}
          onNodeClick={handleNodeClick}
        />
      </Box>

      <Modal
        open={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(14, 14, 16, 0.95)',
                  borderRadius: 2,
                  p: 4,
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  border: '1px solid rgba(110, 231, 183, 0.1)',
                  position: 'relative'
                }}
              >
                <IconButton
                  onClick={() => setSelectedNode(null)}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: selectedNode.color || '#6ee7b7',
                    fontFamily: '"Space Mono", monospace',
                    mb: 2
                  }}
                >
                  {selectedNode.id}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.8,
                    fontFamily: '"Space Mono", monospace'
                  }}
                >
                  {selectedNode.description || 'A thought waiting to be explored...'}
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
};

export default MyMind;
