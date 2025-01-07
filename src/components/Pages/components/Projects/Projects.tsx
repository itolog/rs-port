"use client";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projectsData } from "./data";

const Projects = () => {
  const plugin = useRef(Autoplay({ delay: 30000, stopOnInteraction: true }));

  return (
    <div className="w-fit h-fit sm:w-full sm:h-full pl-0 sm:pl-16">
      <Carousel
        className="max-w-xs"
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className={"w-[270px] h-[275px] sm:w-[320px] sm:h-[275px]"}>
          {projectsData.map(({ title, link, image }, index) => (
            <CarouselItem key={index}>
              <ProjectCard key={title} link={link} title={title} image={image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
