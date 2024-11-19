import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

import { models } from "@/config";
import * as THREE from "three";

import { ActionName, GLTFResult } from "@/components/AppCanvas/components/Tesseract/types";

const anim: ActionName = "Animation";

const CAST_SHADOW = true;
const RECEIVE_SHADOW = true;

const Tesseract = (props: Partial<THREE.Group>) => {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(models.tesseractUrl) as GLTFResult;
  const scrollState = useScroll();
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions[anim]?.reset().fadeIn(0.5).play();

    return () => {
      actions[anim]?.fadeOut(0.5);
    };
  }, [actions]);

  useFrame(() => {
    if (mixer) {
      // Adjust the animation time based on the scroll position
      const scrollOffset = scrollState.offset; // 0 to 1
      const action = actions[anim];
      if (action) {
        const duration = action.getClip().duration;
        action.time = scrollOffset * duration; // Map scroll to animation duration
        mixer.update(0); // Update the mixer to reflect the new time
      }
    }
  });

  return (
    <group ref={group} position={[8, 8, -10]} scale={1.2} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh
                  name="Object_4"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_4.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_5"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_5.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube001_3">
                <mesh
                  name="Object_7"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_7.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_8"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_8.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube002_4">
                <mesh
                  name="Object_10"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_10.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_11"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_11.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube003_5">
                <mesh
                  name="Object_13"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_13.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_14"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_14.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube004_6">
                <mesh
                  name="Object_16"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_16.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_17"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_17.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube005_7">
                <mesh
                  name="Object_19"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_19.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_20"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_20.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube006_8">
                <mesh
                  name="Object_22"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_22.geometry}
                  material={materials.box_out}
                />
                <mesh
                  name="Object_23"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_23.geometry}
                  material={materials.inner}
                />
              </group>
              <group name="Cube007_9">
                <mesh
                  name="Object_25"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
                  geometry={nodes.Object_25.geometry}
                  material={materials.box_out}
                />
              </group>
              <group name="Cube008_10" scale={0.283}>
                <mesh
                  name="Object_27"
                  castShadow={CAST_SHADOW}
                  receiveShadow={RECEIVE_SHADOW}
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
