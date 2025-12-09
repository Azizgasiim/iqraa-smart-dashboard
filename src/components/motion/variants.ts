export const glowPulse = {
  initial: { opacity: 0.5, scale: 0.98 },
  animate: { 
    opacity: [0.5, 1, 0.5], 
    scale: [0.98, 1, 0.98] 
  },
  transition: { 
    duration: 2, 
    repeat: Infinity 
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};
