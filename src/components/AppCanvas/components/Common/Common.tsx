import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";

// import { IS_DEV } from "@/constants";
// import Stats from "@/utils/Stats/Stats";

const Common = () => {
  return (
    <>
      {/* {IS_DEV && <Stats />} */}
      <Environment preset="night" />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <ambientLight intensity={1} />

      {/* <color attach="background" args={["#0f172a"]} /> */}
      {/* <fog attach="fog" args={["#0f172a", 10, 50]} /> */}
    </>
  );
};

export default Common;
