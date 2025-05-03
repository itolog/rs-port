"use client";

import { useRef } from "react";

import { pages } from "@/constants";
import cl from "clsx";

import { skills } from "@/config/portfolio";

import ContactsCard from "@/components/Cards/ContactsCard/ContactsCard";
import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Pages/components/Projects/Projects";
import MouseIcon from "@/components/ui/MouseIcon/MouseIcon";

const commonStyle = "w-full h-dvh p-5";

const Pages = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        ref={homeRef}
        className={cl(pages.HOME, "flex items-end justify-center", commonStyle)}>
        <MouseIcon ref={mouseRef} />
      </section>
      <section className={cl("flex gap-2 items-end flex-col", pages.SKILLS, commonStyle)}>
        {skills.map((skill) => {
          return <SkillCard key={skill} skill={skill} />;
        })}
      </section>
      <section className={cl("flex justify-center w-full", pages.PROJECTS, commonStyle)}>
        <Projects />
      </section>
      <section
        className={cl(
          pages.CONTACT,
          "flex items-center justify-center md:justify-start",
          commonStyle,
        )}>
        <ContactsCard />
      </section>
    </>
  );
};

export default Pages;
