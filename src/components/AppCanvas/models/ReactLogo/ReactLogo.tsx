import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { ObjectMap } from "@react-three/fiber";
import React, { useRef } from "react";

import { models, portfolio } from "@/config";
import gsap from "gsap";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF &
  ObjectMap & {
    nodes: {
      ["React-Logo_Material002_0"]: THREE.Mesh;
    };
    materials: {
      ["Material.002"]: THREE.MeshStandardMaterial;
    };
  };

const ReactLogo = () => {
  const { nodes, materials } = useGLTF(models.reactUrl) as GLTFResult;
  const ref = useRef<THREE.Group | null>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".screens",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: 1 / (portfolio.sections.length - 1),
        onUpdate: (self) => {
          if (ref.current) {
            ref.current.rotation.y = self.progress * 10;
          }
        },
      },
    });
  });

  return (
    <group ref={ref} position-y={1.5} position-x={4} scale={0.5} dispose={null}>
      <group name="be9210d376244066bed9d265a7a3a60efbx" scale={0.01}>
        <mesh
          name="React-Logo_Material002_0"
          castShadow={true}
          receiveShadow={true}
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
};

useGLTF.preload(models.reactUrl);

export default ReactLogo;
