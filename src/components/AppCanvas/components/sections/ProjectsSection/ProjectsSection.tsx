import { useMobile } from "@/hooks/useMobile";

import MacBook from "@/components/AppCanvas/components/MacBook/MacBook";

const ProjectsSection = () => {
  const { isMobile } = useMobile();
  return (
    <group
      position-z={isMobile ? 5.5 : -5}
      position-y={1}
      position-x={isMobile ? -0.5 : 6}
      rotation-y={isMobile ? 0 : -Math.PI / 6}>
      <MacBook />
    </group>
  );
};

export default ProjectsSection;
