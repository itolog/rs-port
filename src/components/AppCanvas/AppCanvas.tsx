"use client";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { portfolio } from "@/config";
import dynamic from "next/dynamic";

import CanvasScene from "@/components/AppCanvas/components/CanvasScene/CanvasScene";
import Common from "@/components/AppCanvas/components/Common/Common";
import CanvasLoader from "@/components/ui/Loaders/CanvasLoader/CanvasLoader";
import PoLoader from "@/components/ui/Loaders/PoLoader/PoLoader";

const Pages = dynamic(() => import("@/components/Pages/Pages"), {
  loading: () => <PoLoader />,
});

const AppCanvas = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0.5, 5] }}>
        <Common />

        <ScrollControls pages={portfolio.sections.length} damping={0.1} maxSpeed={0.2}>
          <Suspense fallback={<CanvasLoader />}>
            <CanvasScene />
          </Suspense>

          <Suspense>
            <Scroll html>
              <Pages />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
