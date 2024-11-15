import { ContactShadows, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Floor from "@/components/AppCanvas/components/Floor/Floor";

const SECTIONS_DISTANCE = 10;

const CanvasScene = () => {
  const sceneContainer = useRef<THREE.Group>();
  const { isMobile, scaleFactor } = useMobile();
  const scrollData = useScroll();
  // useFrame(() => {
  //   if (isMobile) {
  //     sceneContainer.current.position.x =
  //       -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  //     sceneContainer.current.position.z = 0;
  //   } else {
  //     sceneContainer.current.position.z =
  //       -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  //     sceneContainer.current.position.x = 0;
  //   }
  //
  //   setSection(config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]);
  // });
  return (
    <>
      <Floor />
      <Avatar />

      <group ref={sceneContainer}>
        {/* home */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
        {/* skills */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
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
    </>
  );
};

export default CanvasScene;
