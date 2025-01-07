import convert from "../../../../../public/images/convert.webp";
import portfolio from "../../../../../public/images/portfolio.webp";
import { Project } from "./types";

export const projectsData: Project[] = [
  {
    title: "3d Portfolio",
    image: portfolio,
    link: "https://portfolio-gilt-sigma-31.vercel.app/",
  },
  {
    title: "ConvertApiTos",
    image: convert,
    link: "https://app-convertapitos.vercel.app/",
  },
];
