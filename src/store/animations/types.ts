import { supportedAnimations } from "@/constants";

export type Animations = (typeof supportedAnimations)[number];

export interface AnimationState {
  animation: string;
  setAnimation: (animation: Animations) => void;
}
