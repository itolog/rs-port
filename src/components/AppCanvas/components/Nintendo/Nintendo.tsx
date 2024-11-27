"use client";

import { useGLTF } from "@react-three/drei";

import { models } from "@/config";
import * as THREE from "three";

import { GLTFResult } from "@/components/AppCanvas/components/Nintendo/types";

const CAST_SHADOW = true;
const RECEIVE_SHADOW = true;

const Nintendo = (props: Partial<THREE.Group>) => {
  const { nodes, materials } = useGLTF(models.nintendoUrl) as GLTFResult;
  return (
    <group {...props} position={[0, 0, 0]} dispose={null}>
      <group name="fc931cdec9ec4ab0be81a87dc0fc3b21fbx" scale={0.01}>
        <group
          name="Cube"
          position={[0, 10.363, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[150.342, 88.247, 10.584]}>
          <mesh
            name="Cube_screen_1_0"
            castShadow={CAST_SHADOW}
            receiveShadow={RECEIVE_SHADOW}
            geometry={nodes.Cube_screen_1_0.geometry}
            material={materials.screen_1}
          />
          <mesh
            name="Cube_screen_glass_0"
            castShadow={CAST_SHADOW}
            receiveShadow={RECEIVE_SHADOW}
            geometry={nodes.Cube_screen_glass_0.geometry}
            material={materials.screen_glass}
          />
          <mesh
            name="Cube_screen_2_0"
            castShadow={CAST_SHADOW}
            receiveShadow={RECEIVE_SHADOW}
            geometry={nodes.Cube_screen_2_0.geometry}
            material={materials.screen_2}
          />
        </group>
        <mesh
          name="Cube002_joycon_red_1_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube002_joycon_red_1_0.geometry}
          material={materials.joycon_red_1}
          position={[178.203, 10.363, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[28.286, 88.386, 10.584]}
        />
        <mesh
          name="Cube001_joycon_left_1_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube001_joycon_left_1_0.geometry}
          material={materials.joycon_left_1}
          position={[-178.203, 10.363, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[28.286, 88.386, 10.584]}
        />
        <mesh
          name="Button_B_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_B_switch_image_0.geometry}
          material={materials.switch_image}
          position={[177.132, 20.705, -29.804]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Button_A_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_A_switch_image_0.geometry}
          material={materials.switch_image}
          position={[190.852, 20.705, -43.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Button_Y_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_Y_switch_image_0.geometry}
          material={materials.switch_image}
          position={[163.225, 20.705, -43.151]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Button_X_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_X_switch_image_0.geometry}
          material={materials.switch_image}
          position={[177.132, 20.705, -56.311]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Arrow_Down_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Arrow_Down_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-178.239, 20.705, 18.967]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Arrow_Right_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Arrow_Right_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-164.519, 20.705, 5.62]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Arrow_Left_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Arrow_Left_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-192.146, 20.705, 5.62]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Arrow_Up_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Arrow_Up_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-178.239, 20.705, -7.54]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.147, 6.147, 10.475]}
        />
        <mesh
          name="Circle_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Circle_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-178.163, 22.578, -43.055]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={13.03}
        />
        <mesh
          name="Circle001_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Circle001_switch_image_0.geometry}
          material={materials.switch_image}
          position={[177.093, 22.578, 5.72]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={13.03}
        />
        <mesh
          name="Button_Circle_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_Circle_switch_image_0.geometry}
          material={materials.switch_image}
          position={[-168.5, 21.179, 38.514]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[5.27, 5.27, 0.739]}
        />
        <mesh
          name="Button_Home_switch_image_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Button_Home_switch_image_0.geometry}
          material={materials.switch_image}
          position={[167.446, 20.341, 38.623]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[6.857, 6.857, 11.683]}
        />
        <mesh
          name="Cube003_trigger_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube003_trigger_0.geometry}
          material={materials.trigger}
          position={[162.365, 10.384, -89]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.764, 0.719, 2.809]}
        />
        <mesh
          name="Cube004_trigger_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube004_trigger_0.geometry}
          material={materials.trigger}
          position={[-163.019, 10.384, -89]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[1.764, 0.719, 2.809]}
        />
        <mesh
          name="Cube005_screen_1_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube005_screen_1_0.geometry}
          material={materials.screen_1}
          position={[-160.601, 21.151, -70.029]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4.328, 1.159, 0.483]}
        />
        <mesh
          name="Cube006_screen_1_0"
          castShadow={CAST_SHADOW}
          receiveShadow={RECEIVE_SHADOW}
          geometry={nodes.Cube006_screen_1_0.geometry}
          material={materials.screen_1}
          position={[159.526, 21.151, -70.029]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4.328, 1.159, 0.483]}
        />
      </group>
    </group>
  );
};

useGLTF.preload(models.nintendoUrl);

export default Nintendo;
