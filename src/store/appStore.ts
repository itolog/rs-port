import { IS_DEV } from "@/constants";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createAnimationSlice } from "@/store/animations";
import { AnimationState } from "@/store/animations/types";
import { CommonState, createCommonSlice } from "@/store/common";

export type AppStoreState = AnimationState;

const useAppStore = create<AppStoreState & CommonState>()(
  devtools(
    (...a) => ({
      ...createAnimationSlice(...a),
      ...createCommonSlice(...a),
    }),
    {
      enabled: IS_DEV,
    },
  ),
);

export default useAppStore;
