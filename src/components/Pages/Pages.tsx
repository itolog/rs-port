import { MotionConfig } from "motion/react";
import React from "react";

import Home from "@/components/Pages/Home/Home";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div className={"w-screen h-screen absolute"}>
        <Home />
      </div>
    </MotionConfig>
  );
};

export default Pages;
