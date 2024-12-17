"use client";

import { ContactShadows, useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { MAIN_COLOR } from "@/constants";
import * as THREE from "three";
import { TextureLoader } from "three";

const Floor = (props: Partial<THREE.Group>) => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/terrain-roughness.jpg",
    "textures/terrain-normal.jpg",
  ]);

  const floorRef = useRef<THREE.Group>(null);

  const scrollData = useScroll();
  useFrame(() => {
    if (!floorRef.current) return;

    floorRef.current.position.z = -scrollData.offset * (scrollData.pages - 1);
  });

  return (
    <group ref={floorRef} {...props} dispose={null}>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          normalMap={normal}
          roughness={0.5}
          metalness={1.1}
          roughnessMap={roughness}
          color={MAIN_COLOR}
        />
      </mesh>
    </group>
  );
};

export default Floor;
