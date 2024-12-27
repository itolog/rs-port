import React from "react";

import { useMobile } from "@/hooks/useMobile";

import Gaming from "@/components/AppCanvas/components/Gaming/Gaming";

// import MacBook from "@/components/AppCanvas/components/MacBook/MacBook";

const ProjectsSection = () => {
  const { isMobile } = useMobile();
  return (
    <group
      position-z={isMobile ? 1 : -5}
      position-y={1}
      position-x={isMobile ? 0 : 6}
      rotation-y={isMobile ? 0 : -Math.PI / 6}>
      {/* <MacBook /> */}
      <Gaming />
    </group>
  );
};

export default ProjectsSection;
