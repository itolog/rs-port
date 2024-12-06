"use client";

import { memo } from "react";

import { pages } from "@/constants";
import cl from "clsx";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonStyle = "w-full h-screen text-white";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <>
      <section className={cl(pages.HOME, commonStyle)}>{pages.HOME}</section>
      <section className={cl(pages.SKILLS, commonStyle)}>{pages.SKILLS}</section>
      <section className={cl(pages.PROJECTS, commonStyle)}>{pages.PROJECTS}</section>
      <section className={cl(pages.CONTACT, commonStyle)}>{pages.CONTACT}</section>
    </>
  );
};

export default memo(Pages);
