import { Float, useGLTF } from "@react-three/drei";

import { models } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_9: THREE.Mesh;
  };
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["SVGMat.002"]: THREE.MeshStandardMaterial;
    ["SVGMat.004"]: THREE.MeshStandardMaterial;
  };
};

const HtmlLogo = () => {
  const { nodes, materials } = useGLTF(models.htmlUrl) as unknown as GLTFResult;
  const { isMobile } = useMobile();

  return (
    <Float>
      <group
        scale={0.3}
        position-y={1.5}
        position-z={isMobile ? 6 : -1.5}
        position-x={isMobile ? 2 : -3}
        dispose={null}>
        <group
          name="Sketchfab_model"
          position={[0, 0.002, -0.045]}
          rotation={[0.044, 0, 0]}
          scale={4.512}>
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Curve001_0" position={[0.002, -0.226, -0.093]} scale={10.884}>
              <mesh
                name="Object_4"
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Object_4.geometry}
                material={materials["SVGMat.001"]}
              />
              <mesh
                name="Object_5"
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Object_5.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <mesh
              name="Object_7"
              castShadow={true}
              receiveShadow={true}
              geometry={nodes.Object_7.geometry}
              material={materials["SVGMat.002"]}
              position={[0, 0.07, 0]}
            />
            <mesh
              name="Object_9"
              castShadow={true}
              receiveShadow={true}
              geometry={nodes.Object_9.geometry}
              material={materials["SVGMat.004"]}
              position={[0.002, 0.12, -0.093]}
              scale={10.884}
            />
          </group>
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload(models.htmlUrl);

export default HtmlLogo;
