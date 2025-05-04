export const ANIMATION_TYPE = {
  HIDDEN: "hidden",
  VISIBLE: "visible",
};

export const ANIMATION = {
  SKILLS: {
    list: {
      [ANIMATION_TYPE.VISIBLE]: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      [ANIMATION_TYPE.HIDDEN]: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    },
    item: {
      [ANIMATION_TYPE.VISIBLE]: { opacity: 1, scale: 1 },
      [ANIMATION_TYPE.HIDDEN]: { opacity: 0, scale: 0 },
    },
  },
  SLIDE_IN: {
    whileInView: ANIMATION_TYPE.VISIBLE,
    initial: ANIMATION_TYPE.HIDDEN,
    variants: {
      [ANIMATION_TYPE.HIDDEN]: {
        opacity: 0,
        x: -200,
        rotate: 90,
      },
      [ANIMATION_TYPE.VISIBLE]: {
        opacity: 1,
        x: 0,
        rotate: 0,
      },
    },
    transition: {
      type: "spring",
      bounce: 0.5,
      visualDuration: 0.4,
      ease: "easeOut",
    },
    viewport: { amount: 0.3 },
  },
};
