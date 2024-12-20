import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";

import { COLORS } from "@/config";
import { IS_DEV } from "@/constants";
import Stats from "@/utils/Stats/Stats";

const Common = () => {
  return (
    <>
      {IS_DEV && <Stats />}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <fog attach="fog" args={[COLORS.MAIN, 12, 20]} />
      <Environment preset="warehouse" environmentIntensity={0.5} />
    </>
  );
};

export default Common;
