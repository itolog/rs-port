import { motion, useAnimate } from "motion/react";
import React, { FC, PropsWithChildren, useEffect } from "react";

import { portfolio } from "@/config";
import cl from "clsx";

const commonTextStyle = "flex text-rose-600 font-bold text-3xl";

interface TextAnimProps {
  index: number;
  target: "title" | "description";
}

const TextAnim: FC<PropsWithChildren<TextAnimProps>> = ({ children, index, target }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    (async () => {
      await animate(
        scope.current,
        { opacity: 1, scale: 1 },
        {
          duration: 0.25,
          delay: index / 10,
        },
      );

      if (index > 0) {
        await animate(
          scope.current,
          { opacity: 0, y: 1 },
          {
            delay: 2.3,
          },
        );
      }

      if (target === "description") {
        await animate(
          scope.current,
          { y: -36, x: 20 },
          {
            duration: 0.35,
            delay: 5,
          },
        );
      }
    })();
  }, [animate, index, scope, target]);

  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} ref={scope}>
      {children}
    </motion.div>
  );
};

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle);
  const descriptionClass = cl(commonTextStyle);

  return (
    <div className={"p-3"}>
      <div className={titleClass}>
        {portfolio.title.label.split("").map((el, index) => {
          return (
            <TextAnim key={index} target={"title"} index={index}>
              {el}
            </TextAnim>
          );
        })}
      </div>
      <div className={descriptionClass}>
        {portfolio.title.description.split("").map((el, index) => {
          return (
            <TextAnim key={index} target={"description"} index={index}>
              {el}
            </TextAnim>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTitle;
