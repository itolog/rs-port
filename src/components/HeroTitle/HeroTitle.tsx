"use client";

import { useEffect, useRef } from "react";

import { COLORS, portfolio } from "@/config";
import cl from "clsx";
import gsap from "gsap";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonTextStyle = "flex font-bold text-2xl md:text-3xl";

const HeroTitle = () => {
  const loading = createSelectors(useAppStore).use.loading();
  const currentSection = createSelectors(useAppStore).use.currentSection();
  const titleClass = cl(commonTextStyle);
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || loading) return;

    gsap.to(textRef.current, {
      text: portfolio.sectionsTitle[currentSection as keyof typeof portfolio.sectionsTitle],
      duration: 2,
      ease: "easeInOut",
    });
  }, [currentSection, loading]);

  return (
    <div ref={container} className={"fixed top-2 left-3 p-3 z-10"}>
      <span ref={textRef} style={{ color: COLORS.SECONDARY }} className={titleClass} />
    </div>
  );
};

export default HeroTitle;
