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
    [ANIMATION_TYPE.HIDDEN]: {
      x: "100%",
      rotate: 90,
    },
    [ANIMATION_TYPE.VISIBLE]: {
      x: 0,
      rotate: 0,
    },
  },
};
