export const ANIMATION_TYPE = {
  HIDDEN: "hidden",
  VISIBLE: "visible",
};

export const ANIMATION = {
  SKILLS: {
    [ANIMATION_TYPE.HIDDEN]: {
      opacity: 0,
      x: 100,
    },
    [ANIMATION_TYPE.VISIBLE]: {
      opacity: 1,
      x: 0,
    },
  },
  PROJECTS: {
    [ANIMATION_TYPE.HIDDEN]: {
      opacity: 0,
      x: 400,
      rotate: 90,
    },
    [ANIMATION_TYPE.VISIBLE]: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
  },
  CONTACTS: {
    [ANIMATION_TYPE.HIDDEN]: {
      opacity: 0,
      y: 400,
    },
    [ANIMATION_TYPE.VISIBLE]: {
      opacity: 1,
      y: 0,
    },
  },
};
