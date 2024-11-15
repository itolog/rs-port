"use client";

import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { portfolio } from "@/config";

import CanvasScene from "@/components/AppCanvas/components/CanvasScene/CanvasScene";
import Common from "@/components/AppCanvas/components/Common/Common";
import Pages from "@/components/Pages/Pages";
import CanvasLoader from "@/components/ui/Loaders/CanvasLoader/CanvasLoader";

const AppCanvas = () => {
  return (
    <div className="w-full h-full relative">
      <Pages />

      <Canvas camera={{ position: [0, 0.5, 5] }}>
        <Common />

        <ScrollControls pages={portfolio.sections.length} damping={0.1} maxSpeed={0.2}>
          <Suspense fallback={<CanvasLoader />}>
            <CanvasScene />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
