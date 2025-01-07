"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Project } from "@/components/Pages/components/Projects/types";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcon";

const ProjectCard: FC<Project> = ({ title, image, link, description, technologies }) => {
  return (
    <div className="flex flex-col w-[250px] h-[280px] sm:w-[320px] border rounded-lg shadow bg-slate-800 border-slate-700">
      <div className="relative w-full h-[120px]">
        <Image
          className="rounded-t-lg"
          style={{ objectFit: "cover", width: "100%", height: "120px" }}
          src={image}
          alt={title}
        />
      </div>
      <div className={"flex flex-col flex-1 p-3 gap-2 justify-between overflow-hidden"}>
        <div className="flex flex-row justify-between overflow-hidden gap-3">
          <h5 className="text-base md:text-2xl font-bold tracking-tight text-cyan-500 line-clamp-1 overflow-hidden text-wrap break-all">
            {title}
          </h5>

          <Link href={link} target="_blank" className="bg-white rounded-sm h-[24px]">
            <ChevronRight />
          </Link>
        </div>
        <p
          className={
            "text-white text-sm md:text-base font-bold line-clamp-2 overflow-hidden text-wrap break-all"
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