import { portfolio } from "@/config";
import { StateCreator } from "zustand";

export interface CommonState {
  loading: boolean | undefined;
  setLoading: (loading: boolean) => void;
  currentSection: string;
  setCurrentSection: (currentSection: string) => void;
  project: string;
  setProject: (project: string) => void;
}

export const createCommonSlice: StateCreator<CommonState, [], [], CommonState> = (set) => ({
  loading: undefined,
  project: portfolio.project.portfolio,
  setLoading: (loading) => set({ loading }),
  currentSection: "home",
  setCurrentSection: (currentSection) => set({ currentSection }),
  setProject: (project) => set({ project }),
});
