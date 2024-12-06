import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

import cl from "clsx";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const CanvasLoader = () => {
  const { active, progress } = useProgress();

  const setLoading = createSelectors(useAppStore).use.setLoading();

  const rootClass = cl("fixed flex justify-center items-center w-screen h-screen", {
    "opacity-0": !active ? 1 : 0,
    hidden: !active ? 1 : 0,
  });

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress, setLoading]);

  return (
    <div className={rootClass}>
      <span className={"text-4xl text-cyan-300"}>{parseInt(progress.toString())} % loaded</span>
    </div>
  );
};

export default CanvasLoader;
