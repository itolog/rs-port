import { StateCreator } from "zustand";

export interface CommonState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  currentSection: string;
  setCurrentSection: (currentSection: string) => void;
}

export const createCommonSlice: StateCreator<CommonState, [], [], CommonState> = (set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  currentSection: "home",
  setCurrentSection: (currentSection) => set({ currentSection }),
});
