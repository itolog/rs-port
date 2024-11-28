"use client";

import { memo } from "react";

import { pages } from "@/constants";
import cl from "clsx";

import HeroTitle from "@/components/HeroTitle/HeroTitle";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonStyle = "w-full h-screen";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <div className="relative w-screen flex flex-col items-center justify-center">
      <HeroTitle />
      <section className={cl(pages.HOME, commonStyle)} />
      <section className={cl(pages.SKILLS, commonStyle)} />
      <section className={cl(pages.PROJECTS, commonStyle)} />
      <section className={cl(pages.CONTACT, commonStyle)} />
    </div>
  );
};

export default memo(Pages);
