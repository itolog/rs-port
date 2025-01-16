"use client";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { portfolio } from "@/config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import CanvasScene from "@/components/AppCanvas/components/CanvasScene/CanvasScene";
import Common from "@/components/AppCanvas/components/Common/Common";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import Pages from "@/components/Pages/Pages";
import CanvasLoader from "@/components/ui/Loaders/CanvasLoader/CanvasLoader";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const AppCanvas = () => {
  return (
    <>
      <CanvasLoader />
      <HeroTitle />
      <Canvas shadows camera={{ position: [0, 0.5, 5] }}>
        <Common />

        <ScrollControls pages={portfolio.sections.length} damping={0.1} maxSpeed={0.3}>
          <group position-y={-1}>
            <Suspense>
              <CanvasScene />
            </Suspense>
          </group>

          <Scroll html style={{ width: "100%", height: "100dvh" }}>
            <Pages />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default AppCanvas;
