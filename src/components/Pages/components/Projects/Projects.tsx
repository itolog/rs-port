"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

const Projects = () => {
  const setProject = createSelectors(useAppStore).use.setProject();
  const [api, setApi] = useState<CarouselApi>();

  const ref = useRef<HTMLDivElement>(null);

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
    <div className="w-fit h-fit sm:w-full sm:h-full pl-0 sm:pl-16">
      <Carousel
        ref={ref}
        className="max-w-xs"
        opts={{
          loop: true,
        }}
        setApi={setApi}>
        <CarouselContent className={"w-[270px] h-fit sm:w-[320px]"}>
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
