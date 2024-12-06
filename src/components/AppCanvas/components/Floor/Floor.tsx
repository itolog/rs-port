import { ContactShadows } from "@react-three/drei";

const Floor = () => {
  // const [roughness, normal] = useLoader(TextureLoader, [
  //   "textures/terrain-roughness.jpg",
  //   "textures/terrain-normal.jpg",
  // ]);
  return (
    <group position-y={-5}>
      <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66" />
      <mesh position-y={-0.001} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#0f172a" />
        {/* <MeshReflectorMaterial */}
        {/*   envMapIntensity={0} */}
        {/*   normalMap={normal} */}
        {/*   roughnessMap={roughness} */}
        {/*   dithering={true} */}
        {/*   color={[0.015, 0.015, 0.015]} */}
        {/*   roughness={0.7} */}
        {/*   blur={[1000, 400]} */}
        {/*   mixBlur={30} */}
        {/*   mixStrength={80} */}
        {/*   mixContrast={1} */}
        {/*   resolution={1024} */}
        {/*   mirror={0} */}
        {/*   depthScale={0.01} */}
        {/*   minDepthThreshold={0.9} */}
        {/*   maxDepthThreshold={1} */}
        {/*   depthToBlurRatioBias={0.25} */}
        {/*   reflectorOffset={0.2} */}
        {/* /> */}
      </mesh>
    </group>
  );
};

export default Floor;
