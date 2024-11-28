"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { portfolio } from "@/config";
import { pages } from "@/constants";
import cl from "clsx";
import gsap from "gsap";

const commonTextStyle = "flex text-rose-600 font-bold text-3xl";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle);

  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.HOME}`,
          start: "top top",
          endTrigger: `.${pages.SKILLS}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[1], duration: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.SKILLS}`,
          start: "top top",
          endTrigger: `.${pages.PROJECTS}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[2], duration: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.PROJECTS}`,
          start: "top top",
          endTrigger: `.${pages.CONTACT}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[3], duration: 0.5 });
  });

  return (
    <div ref={container} className={"fixed top-2 left-2 p-3"}>
      <span ref={textRef} className={titleClass}>
        {portfolio.title.label}
      </span>
    </div>
  );
};

export default HeroTitle;
