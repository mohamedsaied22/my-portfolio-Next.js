export const scaleIn = (direction, delay) => {
  return {
    hidden: {
      scale: 0,
      x: direction === 'left' ? 20 : direction === 'left' ? 80 : 0,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
