"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { portfolio } from "@/config";
import cl from "clsx";
import gsap from "gsap";

const commonTextStyle = "flex text-rose-600 font-bold text-3xl";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle);
  const descriptionClass = cl(commonTextStyle);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({});

      tl.fromTo(
        ".box",
        { opacity: 0, y: -10 },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: (index) => {
            return index * 0.1;
          },
        },
      );

      // tl.to(".box", {
      //   duration: 1,
      //   opacity: (i) => {
      //     if (i > 0) {
      //       return 0.1;
      //     }
      //     return 1;
      //   },
      //   scale: 1,
      //   stagger: (index) => {
      //     return index * 0.1;
      //   },
      // });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={"p-3"}>
      <div className={titleClass}>
        {portfolio.title.label.split("").map((el, index) => {
          return (
            <span className={"box"} key={index}>
              {el}
            </span>
          );
        })}
      </div>
      <div className={descriptionClass}>
        {portfolio.title.description.split("").map((el, index) => {
          return (
            <span className={"box"} key={index}>
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTitle;
