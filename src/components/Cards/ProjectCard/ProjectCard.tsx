"use client";

import { ChevronRight } from "lucide-react";
import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Project } from "@/components/Pages/components/Projects/types";

const ProjectCard: FC<Project> = ({ title, image, link }) => {
  return (
    <div className="w-[250px] h-[275px] sm:w-[320px] sm:h-[275px] border rounded-lg shadow bg-slate-800 border-slate-700">
      <div className="relative w-full h-40">
        <Image
          className="rounded-t-lg"
          style={{ objectFit: "cover", width: "100%", height: "160px" }}
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-row justify-between p-5 overflow-hidden gap-3">
        <h5 className="text-base md:text-2xl font-bold tracking-tight text-cyan-400 line-clamp-2 overflow-hidden text-wrap break-all">
          {title}
        </h5>

        <Link href={link} target="_blank" className="bg-white rounded-sm h-[24px]">
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
