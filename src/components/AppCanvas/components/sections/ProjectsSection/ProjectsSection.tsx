import { useMobile } from "@/hooks/useMobile";

import MacBook from "@/components/AppCanvas/models/MacBook/MacBook";

const ProjectsSection = () => {
  const { isMobile } = useMobile();
  return (
    <group
      position-z={isMobile ? 5.5 : -5}
      position-y={1}
      position-x={isMobile ? -0.5 : 6}
      rotation={[-0.1, isMobile ? 0 : -7, 0]}>
      <MacBook />
    </group>
  );
};

export default ProjectsSection;
