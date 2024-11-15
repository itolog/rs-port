import { motion } from "motion/react";
import React from "react";

import { portfolio } from "@/config";
import cl from "clsx";

const commonTextStyle = "text-rose-600 font-bold";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle, "text-3xl");
  const descriptionClass = cl(commonTextStyle, "text-2xl");

  const textAnim = (text: string) => {
    return text.split(" ").map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: i / 10,
        }}
        key={i}>
        {el}{" "}
      </motion.span>
    ));
  };

  return (
    <div className={"p-3"}>
      <h1 className={titleClass}>{textAnim(portfolio.title.label)}</h1>
      <span className={descriptionClass}>{portfolio.title.description}</span>
    </div>
  );
};

export default HeroTitle;
