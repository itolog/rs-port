import { useGSAP } from "@gsap/react";
import { Center, Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useRef } from "react";

import { pages } from "@/constants";
// import { useMobile } from "@/hooks/useMobile";
import gsap from "gsap";
import * as THREE from "three";

import { camera as cameraConfig } from "@/config/canvas";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Floor from "@/components/AppCanvas/components/Floor/Floor";
import Nintendo from "@/components/AppCanvas/components/Nintendo/Nintendo";
import Tesseract from "@/components/AppCanvas/components/Tesseract/Tesseract";

const SECTIONS_DISTANCE = 10;

interface CanvasSceneProps {}

const CanvasScene: FC<CanvasSceneProps> = () => {
  const camera = useThree((state) => state.camera);
  const viewport = useThree((state) => state.viewport);
  const skillsRef = useRef<THREE.Group>(null);
  const skillsAnim = {
    rotationX: 0,
    positionY: 0,
  };

  // const { isMobile, scaleFactor } = useMobile();

  useGSAP(() => {
    if (!skillsRef?.current) return;

    gsap.fromTo(
      camera.position,
      { y: 10, z: 10 },
      {
        y: cameraConfig.position.y,
        z: cameraConfig.position.z,
        ease: "power1.out",
        duration: 1,
      },
    );
    // SKILLS
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.HOME}`,
          start: "top top",
          endTrigger: `.${pages.SKILLS}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(camera.position, {
        y: skillsRef.current.position.y,
        z: skillsRef.current.position.z + SECTIONS_DISTANCE,
        ease: "power1.out",
        duration: 2,
      })
      .to(skillsAnim, {
        rotationX: 1.3,
        positionY: 4.2,
        ease: "power1.out",
        duration: 1,
      });
  });

  useFrame(() => {
    if (!skillsRef?.current) return;
    skillsRef.current.rotation.x = skillsAnim.rotationX;
    skillsRef.current.position.y = skillsAnim.positionY;
  });

  return (
    <Center>
      <Environment preset="night" />
      <Floor />

      <group>
        {/* home */}
        <group>
          <Avatar />
          <Tesseract />
        </group>
        {/* skills */}
        <group ref={skillsRef} scale={viewport.aspect} position={[0, 0, SECTIONS_DISTANCE]}>
          <Nintendo />
        </group>
        {/* projects */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
        {/* contact */}
        <group>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </group>
      </group>
    </Center>
  );
};

export default CanvasScene;
