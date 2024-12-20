import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";

import Floor from "@/components/AppCanvas/components/Ground/components/Floor/Floor";

const Ground = () => {
  const floorRef = useRef<THREE.Group>(null);
  const scrollData = useScroll();
  const { isMobile } = useMobile();

  useFrame(() => {
    if (!floorRef.current) return;

    if (isMobile) {
      floorRef.current.position.x = -scrollData.offset * (scrollData.pages - 1);
    } else {
      floorRef.current.position.z = -scrollData.offset * (scrollData.pages - 1);
    }
  });

  return (
    <group ref={floorRef}>
      <Floor />
    </group>
  );
};

export default Ground;
