"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { pages } from "@/constants";
import cl from "clsx";
import gsap from "gsap";

import { skills } from "@/config/portfolio";

import ContactsCard from "@/components/Cards/ContactsCard/ContactsCard";
import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Screens/components/Projects/Projects";
import MouseIcon from "@/components/ui/MouseIcon/MouseIcon";

const commonStyle = "w-full h-dvh p-5";

const Screens = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(mouseRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
  });

  return (
    <div className={"screens"}>
      <section
        ref={homeRef}
        className={cl(pages.HOME, "flex items-end justify-center", commonStyle)}>
        <MouseIcon classes={{ root: "z-10" }} ref={mouseRef} />
      </section>
      <section className={cl(pages.SKILLS, "flex flex-col items-end gap-2", commonStyle)}>
        {skills.map((skill) => {
          return (
            <SkillCard
              classes={{
                root: "skill-card",
              }}
              key={skill}
              skill={skill}
            />
          );
        })}
      </section>
      <section className={cl(pages.PROJECTS, "flex w-full justify-center", commonStyle)}>
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
    </div>
  );
};

export default Screens;
