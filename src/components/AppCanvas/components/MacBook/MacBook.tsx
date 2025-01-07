import { useGLTF, useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { models, portfolio } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";

import { GLTFResult } from "@/components/AppCanvas/components/MacBook/types";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const MacBook = (props: Partial<THREE.Group>) => {
  const { isMobile } = useMobile();
  const { nodes, materials } = useGLTF(models.makUrl) as GLTFResult;
  const project = createSelectors(useAppStore).use.project();
  const projectTexture = useTexture(project);
  const imageRef = useRef<THREE.MeshBasicMaterial>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    // console.log(projectTexture);
    imageRef.current.map = projectTexture;
  }, [projectTexture]);

  return (
    <group scale={isMobile ? 0.2 : 0.4} {...props} dispose={null}>
      <group name="Scene">
        <group name="screenflip" position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
          <group name="screen" position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              name="Cube008"
              castShadow={true}
              receiveShadow={true}
              geometry={nodes.Cube008.geometry}
              material={materials.aluminium}
            />
            <mesh
              name="Cube008_1"
              castShadow={true}
              receiveShadow={true}
              geometry={nodes.Cube008_1.geometry}
              material={materials["matte.001"]}
            />
            <mesh
              name="Cube008_2"
              castShadow={true}
              receiveShadow={true}
              geometry={nodes.Cube008_2.geometry}
              material={materials["screen.001"]}
            />
          </group>
        </group>
        <mesh
          name="keyboard"
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.keyboard.geometry}
          material={materials.keys}
          position={[1.793, 0, 3.451]}
        />
        <group name="base" position={[0, -0.1, 3.394]}>
          <mesh
            name="Cube002"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube002.geometry}
            material={materials.aluminium}
          />
          <mesh
            name="Cube002_1"
            castShadow={true}
            receiveShadow={true}
            geometry={nodes.Cube002_1.geometry}
            material={materials.trackpad}
          />
        </group>
        <mesh
          name="touchbar"
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.touchbar.geometry}
          material={materials.touchbar}
          position={[0, -0.027, 1.201]}
        />
      </group>
      <mesh
        castShadow={true}
        receiveShadow={true}
        rotation={[0.014, 0, 0]}
        position-z={0.4}
        position-y={3}>
        <planeGeometry args={[8.5, 5.5]} />
        <meshBasicMaterial ref={imageRef} />
      </mesh>
    </group>
  );
};

Object.values(portfolio.project).forEach((project) => {
  useTexture.preload(project);
});

useGLTF.preload(models.makUrl);
export default MacBook;
