import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  image: string | StaticImageData;
  link: string;
}
