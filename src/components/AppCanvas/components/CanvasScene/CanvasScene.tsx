import { useGSAP } from "@gsap/react";
import { Float, Text3D, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import { COLORS, portfolio } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import { ThreeGroupRef } from "@/types";
import gsap from "gsap";

import { camera as cameraConfig } from "@/config/canvas";

import Avatar from "@/components/AppCanvas/components/Avatar/Avatar";
import Disk from "@/components/AppCanvas/components/Disk/Disk";
import Ground from "@/components/AppCanvas/components/Ground/Ground";
import ProjectsSection from "@/components/AppCanvas/components/sections/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/AppCanvas/components/sections/SkillsSection/SkillsSection";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const SECTIONS_DISTANCE = 10;

const CanvasScene = () => {
  const setCurrentSection = createSelectors(useAppStore).use.setCurrentSection();
  const camera = useThree((state) => state.camera);
  const skillsRef = useRef<ThreeGroupRef>(undefined);
  const progRef = useRef<ThreeGroupRef>(undefined);
  const contactsRef = useRef<ThreeGroupRef>(undefined);
  const sceneContainer = useRef<ThreeGroupRef>(undefined);

  const { isMobile } = useMobile();

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
        y: 3,
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
    <>
      <Ground />
      <Avatar />

      <group ref={sceneContainer}>
        {/* home */}
        <group>
          <Text3D
            letterSpacing={0.00001}
            size={isMobile ? 0.4 : 0.8}
            position-y={4}
            position-z={-8}
            position-x={isMobile ? -4 : -7}
            font="/fonts/Cyberpunk_Regular.json">
            Serhii Romanichenko
            <meshStandardMaterial color={COLORS.PRIMARY} />
          </Text3D>

          <Float speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 1.5]}>
            <Disk />
          </Float>
        </group>
        {/* skills */}
        <group
          ref={skillsRef}
          position-x={isMobile ? SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -4 : SECTIONS_DISTANCE}>
          <SkillsSection />
        </group>
        {/* projects */}
        <group
          ref={progRef}
          position-x={isMobile ? 2 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -3 : 2 * SECTIONS_DISTANCE}>
          <ProjectsSection />
        </group>
        {/* contact */}
        <group
          ref={contactsRef}
          position-x={isMobile ? 3 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -4 : 3 * SECTIONS_DISTANCE}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={"#3ecc55"} />
          </mesh>
        </group>
      </group>
    </>
  );
};

export default CanvasScene;
