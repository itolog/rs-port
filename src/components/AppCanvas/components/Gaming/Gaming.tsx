import { useGLTF } from "@react-three/drei";

import { models } from "@/config";

import { GLTFResult } from "@/components/AppCanvas/components/Gaming/types";

const Gaming = () => {
  const { nodes, materials } = useGLTF(models.gamingUrl) as GLTFResult;
  return (
    <group rotation-y={-1.8} position-y={-1} position-z={1} scale={1.9} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.349}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane_0" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Plane001_1" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_6"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                name="Plane002_2"
                position={[-0.003, 2.671, -2.527]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.506}>
                <mesh
                  name="Object_8"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Object_9"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_10"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.005"]}
                />
              </group>
              <group
                name="Cylinder_3"
                position={[-0.766, 2.587, -0.992]}
                rotation={[Math.PI / 2, 0, 0.153]}
                scale={1.552}>
                <mesh
                  name="Object_12"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_12.geometry}
                  material={materials.plastic}
                />
                <mesh
                  name="Object_13"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_13.geometry}
                  material={materials.screen}
                />
              </group>
              <group
                name="Cube001_4"
                position={[-0.766, 2.587, -0.992]}
                rotation={[Math.PI / 2, 0, 0.153]}
                scale={1.552}>
                <mesh
                  name="Object_15"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_15.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group
                name="Cylinder001_5"
                position={[-0.567, 2.587, 1.437]}
                rotation={[Math.PI / 2, 0, -0.324]}
                scale={1.552}>
                <mesh
                  name="Object_17"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_17.geometry}
                  material={materials.plastic}
                />
                <mesh
                  name="Object_18"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_18.geometry}
                  material={materials.screen}
                />
              </group>
              <group
                name="Cube002_6"
                position={[-0.567, 2.587, 1.437]}
                rotation={[Math.PI / 2, 0, -0.324]}
                scale={1.552}>
                <mesh
                  name="Object_20"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group
                name="Plane003_7"
                position={[0.528, 2.599, 0.413]}
                rotation={[Math.PI / 2, 0, -1.607]}
                scale={0.782}>
                <mesh
                  name="Object_22"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group
                name="Plane004_8"
                position={[0.527, 2.609, -1.063]}
                rotation={[Math.PI / 2, 0, -1.405]}
                scale={0.187}>
                <mesh
                  name="Object_24"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group name="Plane005_9" position={[0.457, 2.595, 0]} scale={[0.582, 1, 1.832]}>
                <mesh
                  name="Object_26"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_26.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Cube_Cube001_10"
                position={[2.387, 0, -0.364]}
                rotation={[Math.PI / 2, 0, 2.27]}
                scale={0.82}>
                <mesh
                  name="Object_28"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.012"]}
                />
                <mesh
                  name="Object_29"
                  castShadow={true}
                  receiveShadow={true}
                  geometry={nodes.Object_29.geometry}
                  material={materials["Material.013"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(models.gamingUrl);

export default Gaming;
