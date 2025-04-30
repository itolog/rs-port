"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/components/Screens/components/Projects/types";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

const ProjectCard: FC<Project> = ({ title, image, link, description, technologies, status }) => {
  return (
    <div className="relative flex h-[280px] w-[250px] flex-col rounded-lg border border-slate-700 bg-slate-800 shadow-sm sm:w-[320px]">
      <div
        className={cn(
          "center absolute top-1 left-1 z-1 inline-block w-fit rounded-lg bg-amber-500 p-2 align-baseline font-sans text-sm leading-none font-bold whitespace-nowrap text-white uppercase select-none",
          {
            "bg-teal-500": status === "production",
          },
        )}>
        <div className="mt-px">{status}</div>
      </div>

      <div className="relative h-[120px] w-full">
        <Image
          className="rounded-t-lg"
          style={{ objectFit: "cover", width: "100%", height: "120px" }}
          src={image}
          alt={title}
        />
      </div>
      <div className={"flex flex-1 flex-col justify-between gap-2 overflow-hidden p-3"}>
        <div className="flex flex-row justify-between gap-3 overflow-hidden">
          <h5 className="line-clamp-1 overflow-hidden text-base font-bold tracking-tight text-wrap break-all text-cyan-500 md:text-2xl">
            {title}
          </h5>

          <Link href={link} target="_blank" className="h-[24px] rounded-sm bg-white">
            <ChevronRight />
          </Link>
        </div>
        <p
          className={
            "line-clamp-2 overflow-hidden text-sm font-bold text-wrap break-all text-white md:text-base"
          }>
          {description}
        </p>
        <div className={"flex flex-wrap items-center gap-1"}>
          {technologies.map((tech) => {
            return <SvgIcons key={tech.name} name={tech.name} size={tech.size} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
