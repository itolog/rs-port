import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const CanvasLoader = () => {
  const { active, progress, loaded, total } = useProgress();

  const setLoading = createSelectors(useAppStore).use.setLoading();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    }
  }, [progress, setLoading]);

  return (
    <div
      className={cn(
        "fixed z-100 flex h-screen w-screen flex-col items-center justify-center gap-2",
        {
          "opacity-0": !active ? 1 : 0,
          hidden: !active ? 1 : 0,
        },
      )}>
      <div
        className={
          "grid w-[300px] grid-cols-2 items-center justify-center text-2xl font-black text-cyan-400"
        }>
        <span className={"text-center"}>Loaded:</span>

        <span>
          {loaded} / {total}
        </span>
      </div>
      <div
        className={cn(
          "relative flex h-[100px] w-[300px] items-center justify-center rounded-md border-5 border-[#00ffff40] p-4 text-4xl",
          "after:absolute after:right-[-24px] after:h-[50px] after:w-[15px] after:rounded-tr-md after:rounded-br-md after:bg-[#00ffff40]",
        )}>
        <div
          className={cn("absolute inset-0 rounded-sm bg-cyan-400")}
          style={{
            width: `${progress}%`,
            transition: "width 1s ease-in-out",
          }}
        />
        <span className={"z-1 font-bold text-white"}>{parseInt(progress.toString())} %</span>
      </div>
    </div>
  );
};

export default CanvasLoader;
