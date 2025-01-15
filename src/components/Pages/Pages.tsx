"use client";

import { pages } from "@/constants";
import cl from "clsx";

import { skills } from "@/config/portfolio";

import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Pages/components/Projects/Projects";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

const commonStyle = "w-full h-screen p-5";

const Pages = () => {
  const loading = createSelectors(useAppStore).use.loading();

  if (loading) return null;
  return (
    <>
      <section className={cl(pages.HOME, commonStyle)} />
      <section className={cl("flex gap-2 items-end flex-col", pages.SKILLS, commonStyle)}>
        {skills.map((skill) => {
          return <SkillCard key={skill} skill={skill} />;
        })}
      </section>
      <section className={cl("flex justify-center w-full", pages.PROJECTS, commonStyle)}>
        <Projects />
      </section>
      <section className={cl(pages.CONTACT, commonStyle)} />
    </>
  );
};

export default Pages;
