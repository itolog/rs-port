"use client";

import { FC, Ref, useCallback, useEffect, useState } from "react";

import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import useAppStore from "@/store/appStore";
import createSelectors from "@/store/createSelectors";

import { projectsData } from "./data";

interface ProjectsProps {
  ref?: Ref<HTMLDivElement>;
}

const Projects: FC<ProjectsProps> = ({ ref }) => {
  const setProject = createSelectors(useAppStore).use.setProject();
  const [api, setApi] = useState<CarouselApi>();

  const handleSlidesInViewOnce = useCallback(
    (emblaApi: CarouselApi) => {
      if (emblaApi) {
        const currentSlide = emblaApi.selectedScrollSnap();

        setProject(projectsData[currentSlide].url);
        emblaApi.off("slidesInView", handleSlidesInViewOnce);
      }
    },
    [setProject],
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", handleSlidesInViewOnce);
  }, [api, handleSlidesInViewOnce]);

  return (
    <div className={"pl-0 sm:pl-16"}>
      <Carousel
        ref={ref}
        className="max-w-xs h-fit "
        opts={{
          loop: true,
        }}
        setApi={setApi}>
        <CarouselContent className={"w-[270px] sm:w-auto"}>
          {projectsData.map((props, index) => {
            return (
              <CarouselItem key={index}>
                <ProjectCard key={index} {...props} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
