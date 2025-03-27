import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Ripple = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const colors = ['#6ee7b7', '#f472b6', '#facc15', '#a855f7', '#3b82f6'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        color: randomColor,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.5,
          }}
          animate={{
            width: 500,
            height: 500,
            x: ripple.x - 250,
            y: ripple.y - 250,
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          style={{
            position: 'fixed',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${ripple.color}20 0%, ${ripple.color}10 50%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      ))}
    </AnimatePresence>
  );
};

export default Ripple;
