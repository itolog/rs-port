import { animations } from "@/constants";
import { StateCreator } from "zustand";

import { AnimationState } from "@/store/animations/types";

export const createAnimationSlice: StateCreator<AnimationState, [], [], AnimationState> = (
  set,
) => ({
  animation: animations.IDLE,
  setAnimation: (animation) => set({ animation }),
});
