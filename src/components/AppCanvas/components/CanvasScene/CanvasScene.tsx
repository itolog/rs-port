import { useGSAP } from "@gsap/react";
import { Float, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useLayoutEffect, useRef } from "react";

import { COLORS, portfolio } from "@/config";
import { animations } from "@/constants";
import { useMobile } from "@/hooks/useMobile";
import { ThreeGroupRef } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

import { camera as cameraConfig } from "@/config/canvas";

import Ground from "@/components/AppCanvas/components/Ground/Ground";
import ContactsSection from "@/components/AppCanvas/components/sections/ContactsSection/ContactsSection";
import ProjectsSection from "@/components/AppCanvas/components/sections/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/AppCanvas/components/sections/SkillsSection/SkillsSection";
// import Avatar from "@/components/AppCanvas/models/Avatar/Avatar";
import Disk from "@/components/AppCanvas/models/Disk/Disk";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const SECTIONS_DISTANCE = 10;

const CanvasScene = () => {
  const camera = useThree((state) => state.camera);

  const setCurrentSection = createSelectors(useAppStore).use.setCurrentSection();

  const avatarRef = useRef<ThreeGroupRef>(undefined);
  const floorRef = useRef<ThreeGroupRef>(undefined);
  const skillsRef = useRef<ThreeGroupRef>(undefined);
  const progRef = useRef<ThreeGroupRef>(undefined);
  const contactsRef = useRef<ThreeGroupRef>(undefined);
  const sceneContainer = useRef<ThreeGroupRef>(undefined);
  const lastScroll = useRef(0);

  const setAnimation = createSelectors(useAppStore).use.setAnimation();

  const { isMobile } = useMobile();

  const animAvatar = useCallback(
    (progress: number) => {
      const scrollDelta = progress - lastScroll.current;

      let rotationTarget = 0;

      if (Math.abs(scrollDelta) > 0.0001) {
        setAnimation(animations.WALKING);
        if (scrollDelta > 0) {
          rotationTarget = isMobile ? Math.PI / 2 : 0;
        } else {
          rotationTarget = isMobile ? -Math.PI / 2 : Math.PI;
        }
      } else {
        setAnimation(animations.IDLE);
      }

      if (avatarRef?.current?.rotation) {
        avatarRef.current.rotation.y = THREE.MathUtils.lerp(
          avatarRef.current.rotation.y,
          rotationTarget,
          0.1,
        );
      }

      lastScroll.current = progress;
    },
    [isMobile, setAnimation],
  );

  const animContainer = useCallback(
    (progress: number) => {
      if (!sceneContainer.current) return;

      if (isMobile) {
        sceneContainer.current.position.x =
          -progress * SECTIONS_DISTANCE * (portfolio.sections.length - 1);
        sceneContainer.current.position.z = 0;
      } else {
        sceneContainer.current.position.z =
          -progress * SECTIONS_DISTANCE * (portfolio.sections.length - 1);
        sceneContainer.current.position.x = 0;
      }
    },
    [isMobile],
  );

  const animGround = useCallback(
    (progress: number) => {
      if (!floorRef.current) return;

      if (isMobile) {
        floorRef.current.position.x = -progress * (portfolio.sections.length - 1);
      } else {
        floorRef.current.position.z = -progress * (portfolio.sections.length - 1);
      }
    },
    [isMobile],
  );

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".screens",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo: 1 / (portfolio.sections.length - 1),
          duration: { min: 0.2, max: 3 },
          delay: 0.3,
          ease: "power1.inOut",
        },
        onUpdate: ({ progress }) => {
          // animAvatar(progress);
          animGround(progress);
          animContainer(progress);

          setCurrentSection(
            portfolio.sections[Math.round(progress * (portfolio.sections.length - 1))],
          );
        },
      });

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
    },
    { dependencies: [animContainer, animGround, camera] },
  );

  return (
    <>
      <Ground ref={floorRef} />
      {/* <Avatar ref={avatarRef} /> */}

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
