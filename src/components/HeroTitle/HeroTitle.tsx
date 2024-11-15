import { motion } from "motion/react";
import React from "react";

import { portfolio } from "@/config";
import cl from "clsx";

const commonTextStyle = "flex text-rose-600 font-bold";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle, "text-3xl");
  const descriptionClass = cl(commonTextStyle, "text-2xl");

  const textAnim = (text: string) => {
    return text.split("").map((el, i) => (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.25,
          delay: i / 10,
        }}
        key={i}>
        {el}
      </motion.div>
    ));
  };

  return (
    <div className={"p-3"}>
      <div className={titleClass}>{textAnim(portfolio.title.label)}</div>
      <span className={descriptionClass}>{textAnim(portfolio.title.description)}</span>
    </div>
  );
};

export default HeroTitle;
