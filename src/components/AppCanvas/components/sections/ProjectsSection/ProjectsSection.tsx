import { Float } from "@react-three/drei";
import React from "react";

import { useMobile } from "@/hooks/useMobile";

import MacBook from "@/components/AppCanvas/components/MacBook/MacBook";

const ProjectsSection = () => {
  const { isMobile } = useMobile();
  return (
    <Float>
      <group
        position-z={isMobile ? 1 : -5}
        position-y={1}
        position-x={isMobile ? 0 : 6}
        rotation-y={isMobile ? 0 : -Math.PI / 6}>
        <MacBook />
      </group>
    </Float>
  );
};

export default ProjectsSection;
