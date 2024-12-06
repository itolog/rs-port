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
      <section className={cl(pages.HOME, commonStyle)} />
      <section className={cl(pages.SKILLS, commonStyle)} />
      <section className={cl(pages.PROJECTS, commonStyle)} />
      <section className={cl(pages.CONTACT, commonStyle)} />
    </>
  );
};

export default memo(Pages);
