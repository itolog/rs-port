"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { portfolio } from "@/config";
import { pages } from "@/constants";
import cl from "clsx";
import gsap from "gsap";

const commonTextStyle = "flex text-rose-600 font-bold text-3xl";

const HeroTitle = () => {
  const titleClass = cl(commonTextStyle);
  const descriptionClass = cl(commonTextStyle);

  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    // const tl = gsap.timeline({});
    //
    // tl.fromTo(
    //   ".box",
    //   { opacity: 0, y: -10 },
    //   {
    //     duration: 1,
    //     opacity: 1,
    //     y: 0,
    //     stagger: (index) => {
    //       return index * 0.1;
    //     },
    //   },
    // );

    // tl.to(".box", {
    //   duration: 1,
    //   opacity: (i) => {
    //     if (i > 0) {
    //       return 0.1;
    //     }
    //     return 1;
    //   },
    //   scale: 1,
    //   stagger: (index) => {
    //     return index * 0.1;
    //   },
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.HOME}`,
          start: "top top",
          endTrigger: `.${pages.SKILLS}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[1], duration: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.SKILLS}`,
          start: "top top",
          endTrigger: `.${pages.PROJECTS}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[2], duration: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${pages.PROJECTS}`,
          start: "top top",
          endTrigger: `.${pages.CONTACT}`,
          end: "bottom bottom",
          markers: true,
          scrub: 1,
        },
      })
      .to(textRef.current, { text: portfolio.sections[3], duration: 0.5 });
  });

  return (
    <div ref={container} className={"fixed top-2 left-2 p-3"}>
      <span ref={textRef} className={titleClass}>
        {portfolio.title.label}
      </span>
      {/* <div className={titleClass}> */}
      {/*   {portfolio.title.label.split("").map((el, index) => { */}
      {/*     return ( */}
      {/*       <span className={"box"} key={index}> */}
      {/*         {el} */}
      {/*       </span> */}
      {/*     ); */}
      {/*   })} */}
      {/* </div> */}
      {/* <div className={descriptionClass}> */}
      {/*   {portfolio.title.description.split("").map((el, index) => { */}
      {/*     return ( */}
      {/*       <span className={"box"} key={index}> */}
      {/*         {el} */}
      {/*       </span> */}
      {/*     ); */}
      {/*   })} */}
      {/* </div> */}
    </div>
  );
};

export default HeroTitle;
