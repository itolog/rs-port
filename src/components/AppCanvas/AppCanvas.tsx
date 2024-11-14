"use client";

import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Common from "@/components/AppCanvas/components/Common/Common";

const AppCanvas = () => {
  return (
    <div className="w-full h-full">
      <Loader />
      <Canvas>
        <Common />
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
