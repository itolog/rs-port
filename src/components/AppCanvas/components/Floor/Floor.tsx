import { ContactShadows } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

import { MAIN_COLOR } from "@/constants";
import { TextureLoader } from "three";

const Floor = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/terrain-roughness.jpg",
    "textures/terrain-normal.jpg",
  ]);

  return (
    <group position-y={-5}>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial normalMap={normal} roughnessMap={roughness} color={MAIN_COLOR} />
      </mesh>
    </group>
  );
};

export default Floor;
