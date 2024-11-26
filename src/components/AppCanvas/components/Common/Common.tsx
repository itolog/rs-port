import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

import { IS_DEV } from "@/constants";
import Stats from "@/utils/Stats/Stats";

const Common = () => {
  return (
    <>
      {IS_DEV && <Stats />}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <ambientLight intensity={1} />
    </>
  );
};

export default Common;
