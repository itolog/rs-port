import { useGSAP } from "@gsap/react";
import { Center, Environment, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import { portfolio } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import gsap from "gsap";
import * as THREE from "three";

import { camera as cameraConfig } from "@/config/canvas";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Floor from "@/components/AppCanvas/components/Floor/Floor";
import Nintendo from "@/components/AppCanvas/components/Nintendo/Nintendo";
import Tesseract from "@/components/AppCanvas/components/Tesseract/Tesseract";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const SECTIONS_DISTANCE = 10;

const CanvasScene = () => {
  const setCurrentSection = createSelectors(useAppStore).use.setCurrentSection();
  const camera = useThree((state) => state.camera);
  const skillsRef = useRef<THREE.Group>(null);
  const progRef = useRef<THREE.Group>(null);
  const contactsRef = useRef<THREE.Group>(null);
  const sceneContainer = useRef<THREE.Group>(null);

  const { isMobile, scaleFactor } = useMobile();

  const scrollData = useScroll();
  useFrame(() => {
    if (!sceneContainer.current) return;

    if (isMobile) {
      sceneContainer.current.position.x =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.z = 0;
    } else {
      sceneContainer.current.position.z =
        -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
      sceneContainer.current.position.x = 0;
    }

    setCurrentSection(portfolio.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]);
  });

  useGSAP(() => {
    if (!skillsRef?.current) return;

    gsap.fromTo(
      camera.position,
      { y: 10, z: 10 },
      {
        y: cameraConfig.position.y + scaleFactor,
        z: cameraConfig.position.z,
        ease: "power1.out",
        duration: 1,
        onUpdate: () => {
          camera.lookAt(0, 0, 0);
        },
      },
    );
  });

  return (
    <Center>
      <Environment preset="night" />
      <Floor />
      <Avatar />

      <group ref={sceneContainer}>
        {/* home */}
        <group position-y={-5}>
          <Nintendo />
        </group>
        {/* skills */}
        <group ref={skillsRef} position-y={-5} position-z={SECTIONS_DISTANCE}>
          <Tesseract />
        </group>
        {/* projects */}
        <group ref={progRef} position-y={-5} position-z={isMobile ? -3 : 2 * SECTIONS_DISTANCE}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={"#8f1d1d"} />
          </mesh>
        </group>
        {/* contact */}
        <group ref={contactsRef} position-y={-5} position-z={isMobile ? -4 : 3 * SECTIONS_DISTANCE}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={"#3ecc55"} />
          </mesh>
        </group>
      </group>
    </Center>
  );
};

export default CanvasScene;
