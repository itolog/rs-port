import { ContactShadows } from "@react-three/drei";
import React, { FC, RefObject } from "react";

import { ThreeGroupRef } from "@/types";

import Floor from "@/components/AppCanvas/components/Ground/components/Floor/Floor";
import JsLogo from "@/components/AppCanvas/models/JsLogo/JsLogo";

interface GroundProps {
  ref?: RefObject<ThreeGroupRef>;
}

const Ground: FC<GroundProps> = ({ ref }) => {
  return (
    <group ref={ref}>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <Floor />
      <JsLogo />
    </group>
  );
};

export default Ground;
