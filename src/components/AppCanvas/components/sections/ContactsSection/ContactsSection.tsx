import { Float, MeshDistortMaterial } from "@react-three/drei";
import React, { useRef } from "react";

import * as THREE from "three";

const ContactsSection = () => {
  const sphere = useRef<THREE.Mesh>(null);

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 1.5]}>
        <mesh ref={sphere} scale={0.7} position-x={-3}>
          <sphereGeometry />
          <MeshDistortMaterial
            color={"#E8B059"}
            envMapIntensity={0.4}
            clearcoat={0.2}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default ContactsSection;
