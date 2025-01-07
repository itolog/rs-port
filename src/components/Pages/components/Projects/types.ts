import { Skills } from "@/types";
import { StaticImageData } from "next/image";

interface Technologies {
  name: Skills;
  size: string;
}

export interface Project {
  title: string;
  image: string | StaticImageData;
  link: string;
  url: string;
  description: string;
  technologies: Technologies[];
}
