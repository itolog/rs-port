import React from "react";

import { portfolio } from "@/config";
import cl from "clsx";

const commonTextStyle = "text-rose-600 font-bold";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle, "text-3xl");
  const descriptionClass = cl(commonTextStyle, "text-2xl");

  return (
    <div className={"p-3"}>
      <h1 className={titleClass}>{portfolio.title.label}</h1>
      <span className={descriptionClass}>{portfolio.title.description}</span>
    </div>
  );
};

export default HeroTitle;
