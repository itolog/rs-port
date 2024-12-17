import { useGLTF } from "@react-three/drei";

import { models } from "@/config";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["YellowMetallic.1592"]: THREE.MeshStandardMaterial;
  };
};

const Disk = (props: Partial<THREE.Group>) => {
  const { nodes, materials } = useGLTF(models.diskUrl) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Text581_581"
                position={[0.635, 0, -0.342]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_4.geometry}
                  material={materials["YellowMetallic.1592"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(models.diskUrl);

export default Disk;
