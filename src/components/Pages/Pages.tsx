"use client";

import { motion } from "motion/react";
import { useRef } from "react";

import { pages } from "@/constants";
import { cn } from "@/lib/utils";

import { skills } from "@/config/portfolio";

import ContactsCard from "@/components/Cards/ContactsCard/ContactsCard";
import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Pages/components/Projects/Projects";
import MouseIcon from "@/components/ui/MouseIcon/MouseIcon";

const commonStyle = "w-full h-dvh p-5";

const MotionSkillCard = motion.create(SkillCard);

const Pages = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        ref={homeRef}
        className={cn(pages.HOME, "flex items-end justify-center", commonStyle)}>
        <MouseIcon ref={mouseRef} />
      </section>
      <section
        className={cn(pages.SKILLS, "flex gap-2 items-end flex-wrap content-start", commonStyle)}>
        {skills.map((skill, index) => {
          return (
            <MotionSkillCard
              classes={{
                root: "w-fit md:w-60",
                title: "hidden md:block",
              }}
              whileInView={"visible"}
              initial={{
                opacity: 0,
                x: 100,
                y: 10,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                },
              }}
              transition={{
                delay: index * 0.1,
              }}
              skill={skill}
              key={skill}
            />
          );
        })}
      </section>
      <section className={cn("flex justify-center w-full", pages.PROJECTS, commonStyle)}>
        <Projects />
      </section>
      <section
        className={cn(
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
