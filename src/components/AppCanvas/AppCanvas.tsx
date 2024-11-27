"use client";

import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      <Pages />
      <div className={"fixed top-0 left-0 w-full h-full"}>
        <Canvas camera={{ position: [0, 0.5, 5] }} className={"absolute"}>
          <Common />

          <Suspense fallback={<CanvasLoader />}>
            <CanvasScene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default AppCanvas;
