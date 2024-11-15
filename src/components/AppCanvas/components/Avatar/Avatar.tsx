import { useAnimations, useFBX, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import { models } from "@/config";
import { animations } from "@/constants";
import { useMobile } from "@/hooks/useMobile";
import * as THREE from "three";

import { GLTFResult } from "@/components/AppCanvas/components/Avatar/types";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const Avatar = (props: Partial<THREE.Group>) => {
  const group = useRef<THREE.Group>();
  const lastScroll = useRef(0);

  const animation = createSelectors(useAppStore).use.animation();
  const setAnimation = createSelectors(useAppStore).use.setAnimation();

  const scrollState = useScroll();
  const { nodes, materials } = useGLTF(models.avatarModelUrl) as GLTFResult;
  const { animations: idleAnim } = useFBX(models.avatarIdlelUrl);
  const { animations: walkAnim } = useFBX(models.avatarWalkinglUrl);
  const { actions } = useAnimations([idleAnim[0], walkAnim[0]], group);

  const { isMobile } = useMobile();

  idleAnim[0].name = animations.IDLE;
  walkAnim[0].name = animations.WALKING;

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();

    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [actions, animation]);

  useFrame(() => {
    const scrollDelta = scrollState.offset - lastScroll.current;
    let rotationTarget = 0;
    if (Math.abs(scrollDelta) > 0.0000001) {
      setAnimation(animations.WALKING);
      if (scrollDelta > 0) {
        rotationTarget = isMobile ? Math.PI / 2 : 0;
      } else {
        rotationTarget = isMobile ? -Math.PI / 2 : Math.PI;
      }
    } else {
      setAnimation(animations.IDLE);
    }

    if (group?.current?.rotation) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        rotationTarget,
        0.1,
      );
    }

    lastScroll.current = scrollState.offset;
  });

  return (
    <group {...props} ref={group} scale={2} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

export default Avatar;

useGLTF.preload(models.avatarModelUrl);
useFBX.preload(models.avatarIdlelUrl);
useFBX.preload(models.avatarWalkinglUrl);
