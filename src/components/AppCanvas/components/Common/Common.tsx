import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";

import { IS_DEV, MAIN_COLOR } from "@/constants";
import Stats from "@/utils/Stats/Stats";

const Common = () => {
  return (
    <>
      {IS_DEV && <Stats />}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <ambientLight intensity={1} />
      <color attach="background" args={[MAIN_COLOR]} />
      <fog attach="fog" args={[MAIN_COLOR, 12, 20]} />
      <Environment preset="night" />
    </>
  );
};

export default Common;
