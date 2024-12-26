"use client";

import { memo } from "react";

import { pages } from "@/constants";
import cl from "clsx";

import { skills } from "@/config/portfolio";

import SkillCard from "@/components/SkillCard/SkillCard";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonStyle = "w-full h-screen p-5";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <>
      <section className={cl(pages.HOME, commonStyle)} />
      <section className={cl("flex gap-2 flex-col", commonStyle)}>
        {skills.map((skill) => {
          return <SkillCard key={skill} skill={skill} />;
        })}
      </section>
      <section className={cl(pages.PROJECTS, commonStyle)} />
      <section className={cl(pages.CONTACT, commonStyle)} />
    </>
  );
};

export default memo(Pages);
