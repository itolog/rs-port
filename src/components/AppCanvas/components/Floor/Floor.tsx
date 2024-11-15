import { ContactShadows } from "@react-three/drei";

const Floor = () => {
  return (
    <>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
    </>
  );
};

export default Floor;
