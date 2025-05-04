"use client";

import { motion } from "motion/react";
import { useRef } from "react";

import { pages } from "@/constants";
import { cn } from "@/lib/utils";

import { skills } from "@/config/portfolio";

import ContactsCard from "@/components/Cards/ContactsCard/ContactsCard";
import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Pages/components/Projects/Projects";
import { ANIMATION, ANIMATION_TYPE } from "@/components/Pages/config";
import MouseIcon from "@/components/ui/MouseIcon/MouseIcon";

const commonStyle = "w-full h-dvh p-5";

const MotionSkillCard = motion.create(SkillCard);
const MotionProjects = motion.create(Projects);
const MotionContactsCard = motion.create(ContactsCard);

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
              whileInView={ANIMATION_TYPE.VISIBLE}
              initial={ANIMATION_TYPE.HIDDEN}
              variants={ANIMATION.SKILLS}
              transition={{
                delay: index * 0.09,
              }}
              skill={skill}
              key={skill}
            />
          );
        })}
      </section>
      <section className={cn("flex justify-center w-full", pages.PROJECTS, commonStyle)}>
        <MotionProjects
          whileInView={ANIMATION_TYPE.VISIBLE}
          initial={ANIMATION_TYPE.HIDDEN}
          variants={ANIMATION.PROJECTS}
          transition={{
            ease: "easeOut",
          }}
        />
      </section>
      <section
        className={cn(
          pages.CONTACT,
          "flex items-center justify-center md:justify-start",
          commonStyle,
        )}>
        <MotionContactsCard
          whileInView={ANIMATION_TYPE.VISIBLE}
          initial={ANIMATION_TYPE.HIDDEN}
          variants={ANIMATION.CONTACTS}
        />
      </section>
    </>
  );
};

export default Pages;
