"use client";

import { useMemo } from "react";

import { portfolio } from "@/config";

import TypewriterText from "@/components/TypingText/TypingText";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const HeroTitle = () => {
  const loading = createSelectors(useAppStore).use.loading();
  const currentSection = createSelectors(useAppStore).use.currentSection();

  const title = useMemo(() => {
    return portfolio.sectionsTitle[currentSection as keyof typeof portfolio.sectionsTitle];
  }, [currentSection]);

  if (loading) return null;
  return (
    <div className={"fixed top-2 left-3 p-3 z-10 "}>
      <TypewriterText text={title} />
    </div>
  );
};

export default HeroTitle;
