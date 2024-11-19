import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import { models } from "@/config";
import { useControls } from "leva";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/AppCanvas/components/Tesseract/types";

const anim: ActionName = "Animation";

const Tesseract = (props: Partial<THREE.Group>) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(models.tesseractUrl) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[anim]?.reset().fadeIn(0.5).play();

    return () => {
      actions[anim]?.fadeOut(0.5);
    };
  }, [actions]);

  // const { position } = useControls("cube", {
  //   position: [0, 0, 0],
  // });

  return (
    <group ref={group} position={[5, 6, -7]} scale={2} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube001_3">
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube002_4">
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube003_5">
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube004_6">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube005_7">
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube006_8">
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube007_9">
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.box_out}
                />
              </group>
              <group name="Cube008_10" scale={0.283}>
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials["inner.001"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Tesseract;

useGLTF.preload(models.tesseractUrl);