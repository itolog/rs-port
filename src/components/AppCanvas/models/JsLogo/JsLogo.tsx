import { useGLTF } from "@react-three/drei";

import { models } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    mat_3220964: THREE.MeshStandardMaterial;
  };
};

const JsLogo = () => {
  const { nodes, materials } = useGLTF(models.jsUrl) as unknown as GLTFResult;
  const { isMobile } = useMobile();

  return (
    <group
      scale={0.2}
      position-y={0.001}
      position-x={isMobile ? 1 : 6}
      position-z={-12}
      rotation-y={1.3}
      dispose={null}>
      <mesh
        name="Object_2"
        castShadow={false}
        receiveShadow={false}
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(models.jsUrl);

export default JsLogo;
