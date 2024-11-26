"use client";

import { memo } from "react";

import { pages } from "@/constants";
import cl from "clsx";

import Home from "@/components/Pages/Home/Home";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonStyle = "w-full h-screen";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <section className={cl(pages.HOME, commonStyle)}>
        <h1>Home</h1>
        <Home />
      </section>
      <section className={cl(pages.SKILLS, commonStyle)}>
        <h1>SECTION 2</h1>
      </section>
      <section className={cl(pages.PROJECTS, commonStyle)}>
        <h1>SECTION 3</h1>
      </section>
      <section className={cl(pages.CONTACT, commonStyle)}>
        <h1>SECTION 4</h1>
      </section>
    </div>
  );
};

export default memo(Pages);
