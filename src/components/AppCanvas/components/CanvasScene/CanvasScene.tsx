import { Float, Text3D, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { COLORS, portfolio } from "@/config";
import { useMobile } from "@/hooks/useMobile";
import { ThreeGroupRef } from "@/types";

import Ground from "@/components/AppCanvas/components/Ground/Ground";
import ContactsSection from "@/components/AppCanvas/components/sections/ContactsSection/ContactsSection";
import ProjectsSection from "@/components/AppCanvas/components/sections/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/AppCanvas/components/sections/SkillsSection/SkillsSection";
import Avatar from "@/components/AppCanvas/models/Avatar/Avatar";
import Disk from "@/components/AppCanvas/models/Disk/Disk";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const SECTIONS_DISTANCE = 10;

const CanvasScene = () => {
  const setCurrentSection = createSelectors(useAppStore).use.setCurrentSection();

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
          position-y={2}
          position-x={isMobile ? 3 * SECTIONS_DISTANCE : 0}
          position-z={isMobile ? -4 : 3 * SECTIONS_DISTANCE}>
          <ContactsSection />
        </group>
      </group>
    </>
  );
};

export default CanvasScene;
