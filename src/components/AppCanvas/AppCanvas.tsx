"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasScene from "@/components/AppCanvas/components/CanvasScene/CanvasScene";
import Common from "@/components/AppCanvas/components/Common/Common";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import Screens from "@/components/Screens/Screens";
import CanvasLoader from "@/components/ui/Loaders/CanvasLoader/CanvasLoader";

const AppCanvas = () => {
  return (
    <>
      <CanvasLoader />
      <HeroTitle />
      <Canvas shadows style={{ position: "fixed", inset: 0 }} camera={{ position: [0, 0.5, 5] }}>
        <Common />
        <Suspense>
          <group position-y={-1}>
            <CanvasScene />
          </group>
        </Suspense>
      </Canvas>
      <Screens />
    </>
  );
};

export default AppCanvas;
