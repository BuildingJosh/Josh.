import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ForceGraph2D from 'react-force-graph-2d';
import CloseIcon from '@mui/icons-material/Close';

const NeuralMap = forwardRef(({ data, onNodeClick }, ref) => {
  const fgRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Expose zoomToFit method
  React.useImperativeHandle(ref, () => ({
    zoomToFit: (duration) => {
      fgRef.current?.zoomToFit(duration);
    }
  }));

  // Initialize particles
  useEffect(() => {
    if (!particlesRef.current || !dimensions.width || !dimensions.height) return;

    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    const particles = [];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.color = '#6ee7b720';
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }
    
    let animationFrame;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [dimensions]);

  if (!dimensions.width || !dimensions.height) return null;

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: '#0e0e10',
        position: 'relative',
      }}
    >
      <canvas
        ref={particlesRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="#0e0e10"
        nodeColor={node => node.color}
        nodeRelSize={8}
        linkColor={(link) => 
          hoveredLink === link ? link.source.color : 'rgba(212, 212, 216, 0.2)'
        }
        linkWidth={link => hoveredLink === link ? 3 : 1}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = node.isCore ? 16 / globalScale : 12 / globalScale;
          ctx.font = `${fontSize}px Space Mono`;
          
          const size = hoveredNode === node ? 12 : 8;
          const glowSize = hoveredNode === node ? 24 : 16;
          
          // Outer glow
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowSize
          );
          gradient.addColorStop(0, node.color + '40');
          gradient.addColorStop(1, node.color + '00');
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowSize, 0, 2 * Math.PI);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Node center
          ctx.beginPath();
          ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
          ctx.fillStyle = node.color;
          ctx.fill();
          
          // Label
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = hoveredNode === node ? '#fff' : node.color;
          ctx.fillText(label, node.x, node.y + size + 8);
        }}
        onNodeClick={onNodeClick}
        onNodeHover={setHoveredNode}
        onLinkHover={setHoveredLink}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current?.zoomToFit(400)}
        linkDirectionalParticles={3}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
      />
    </Box>
  );
});

export const ThoughtModal = ({ thought, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              outline: 'none',
              width: '100%',
              maxWidth: '600px',
              margin: '0 16px',
            }}
          >
            <Box
              sx={{
                bgcolor: '#0e0e10',
                border: '1px solid rgba(110, 231, 183, 0.1)',
                borderRadius: 2,
                p: 4,
                outline: 'none',
                maxHeight: '90vh',
                overflow: 'auto',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'rgba(110, 231, 183, 0.5)',
                }}
              >
                <CloseIcon />
              </IconButton>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: thought?.color || '#6ee7b7',
                    mb: 2,
                    fontFamily: '"Space Mono", monospace',
                  }}
                >
                  {thought?.title}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  {thought?.content}
                </Typography>
              </motion.div>
              {thought?.connections && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#6ee7b7',
                      mb: 2,
                      fontFamily: '"Space Mono", monospace',
                    }}
                  >
                    Connected Thoughts
                  </Typography>
                  {thought.connections.map((connection, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                        pl: 2,
                        borderLeft: '2px solid rgba(110, 231, 183, 0.2)',
                      }}
                    >
                      {connection}
                    </Typography>
                  ))}
                </motion.div>
              )}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

NeuralMap.displayName = 'NeuralMap';
export default NeuralMap;
