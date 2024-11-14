import { IS_DEV } from "@/constants";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createAnimationSlice } from "@/store/animations";
import { AnimationState } from "@/store/animations/types";

export type AppStoreState = AnimationState;

const useAppStore = create<AppStoreState>()(
  devtools(
    (...a) => ({
      ...createAnimationSlice(...a),
    }),
    {
      enabled: IS_DEV,
    },
  ),
);

export default useAppStore;
