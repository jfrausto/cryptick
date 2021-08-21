export const variants = {
  // three animations for draggable div
  // entering, centered position, exiting after passing swipe threshold
  // direction param is able to be accessed by CUSTOM prop on motion component
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    // y:0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    };
  }
};

export const swipeConfidenceThreshold = 10000;

export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};