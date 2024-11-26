import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { Center, Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, RefObject, useRef, useState } from "react";

import { portfolio } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import gsap from "gsap";
import * as THREE from "three";

import { camera as cameraConfig } from "@/config/canvas";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Floor from "@/components/AppCanvas/components/Floor/Floor";
import Nintendo from "@/components/AppCanvas/components/Nintendo/Nintendo";
import Tesseract from "@/components/AppCanvas/components/Tesseract/Tesseract";

const SECTIONS_DISTANCE = 10;

interface CanvasSceneProps {
  mainRef?: RefObject<HTMLDivElement>;
}

const CanvasScene: FC<CanvasSceneProps> = () => {
  const { camera } = useThree();
  const [section, setSection] = useState(portfolio.sections[0]);
  console.log(section);
  const sceneContainer = useRef<THREE.Group>();
  const { isMobile, scaleFactor } = useMobile();
  const scrollData = useScroll();

  useFrame(() => {
    if (!sceneContainer.current) return;

    if (isMobile) {
      sceneContainer.current.position.x =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.z = 0;
    } else {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.x = 0;
    }

    setSection(portfolio.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]);
  });

  useGSAP(() => {
    gsap.fromTo(
      camera.position,
      { y: 10, z: 10 },
      {
        y: cameraConfig.position.y,
        z: cameraConfig.position.z,
        ease: "power1.out",
        duration: 2,
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        },
      },
    );
  }, {});

  return (
    <Center>
      <Environment preset="night" />
      <Floor />

      <Avatar />

      <group position-x={2} ref={sceneContainer}>
        {/* home */}
        <group>
          <Tesseract />
        </group>
        {/* skills */}
        <group position-z={SECTIONS_DISTANCE}>
          <Nintendo />
        </group>
        {/* projects */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
        {/* contact */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
      </group>
    </Center>
  );
};

export default CanvasScene;
