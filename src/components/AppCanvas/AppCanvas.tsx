"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import dynamic from "next/dynamic";

import CanvasScene from "@/components/AppCanvas/components/CanvasScene/CanvasScene";
import Common from "@/components/AppCanvas/components/Common/Common";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import CanvasLoader from "@/components/ui/Loaders/CanvasLoader/CanvasLoader";
import PoLoader from "@/components/ui/Loaders/PoLoader/PoLoader";

const Screens = dynamic(() => import("@/components/Screens/Screens"), {
  loading: () => <PoLoader />,
});

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
