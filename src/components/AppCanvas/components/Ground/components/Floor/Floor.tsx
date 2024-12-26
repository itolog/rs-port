"use client";

import { useTexture } from "@react-three/drei";

import { RepeatWrapping } from "three";

const textureRepeat = 70 / 2 / 2;

const Floor = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, metMap] = useTexture(
    [
      "/textures/painted/PaintedMetal004_1K-JPG_Color.jpg",
      "/textures/painted/PaintedMetal004_1K-JPG_Displacement.jpg",
      "/textures/painted/PaintedMetal004_1K-JPG_NormalGL.jpg",
      "/textures/painted/PaintedMetal004_1K-JPG_Roughness.jpg",
      "/textures/painted/PaintedMetal004_1K-JPG_Metalness.jpg",
    ],
    (textures) => {
      for (const tex of textures) {
        tex.wrapS = tex.wrapT = RepeatWrapping;
        tex.repeat.set(textureRepeat, textureRepeat);
      }
    },
  );

  return (
    <mesh position-y={-1} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        roughness={0.5}
        metalness={1.1}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metMap}
        envMapIntensity={0.2}
      />
    </mesh>
  );
};

export default Floor;
