export const subMenuAnimate = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
    display: "inline-block",
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const downArrowAnim = {
  hidden: {
    y: 0,
  },
  show: {
    y: -7,
    rotate: 180,
  },
};
