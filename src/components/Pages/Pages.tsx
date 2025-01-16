"use client";

import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { useRef } from "react";

import { pages } from "@/constants";
import cl from "clsx";
import gsap from "gsap";

import { skills } from "@/config/portfolio";

import ContactsCard from "@/components/Cards/ContactsCard/ContactsCard";
import SkillCard from "@/components/Cards/SkillCard/SkillCard";
import Projects from "@/components/Pages/components/Projects/Projects";
import MouseIcon from "@/components/ui/MouseIcon/MouseIcon";

const commonStyle = "w-full h-dvh p-5";

const Pages = () => {
  const mouseRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const projCardRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const contactsCardRef = useRef<HTMLDivElement>(null);
  const scrollData = useScroll();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top top",
        end: "+=500",
        scrub: 1,
        scroller: scrollData.el,
      },
    });

    tl.to(mouseRef.current, {
      opacity: 0,
    });
  });

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
      <section
        ref={projRef}
        className={cl("flex justify-center w-full", pages.PROJECTS, commonStyle)}>
        <Projects ref={projCardRef} />
      </section>
      <section
        ref={contactsRef}
        className={cl(
          pages.CONTACT,
          "flex items-center justify-center md:justify-start",
          commonStyle,
        )}>
        <ContactsCard ref={contactsCardRef} />
      </section>
    </>
  );
};

export default Pages;
