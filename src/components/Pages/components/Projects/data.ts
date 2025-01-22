import { portfolio } from "@/config";

// import convertImg from "../../../../../public/images/convert.webp";
import portfolioImg from "../../../../../public/images/portfolio.webp";
import { Project } from "./types";

export const projectsData: Project[] = [
  {
    title: "3d Portfolio",
    image: portfolioImg,
    link: "https://portfolio-gilt-sigma-31.vercel.app/",
    url: portfolio.project.portfolio,
    description: "Front-end developer portfolio",
    technologies: [
      {
        name: "react",
        size: "18px",
      },
      {
        name: "typescript",
        size: "22px",
      },
      {
        name: "Scss",
        size: "22px",
      },
    ],
  },
  // {
  //   title: "ConvertApiTos",
  //   image: convertImg,
  //   link: "https://app-convertapitos.vercel.app/",
  //   url: portfolio.project.convert,
  //   description: "File conversion and generation service",
  //   technologies: [
  //     {
  //       name: "next.js",
  //       size: "18px",
  //     },
  //     {
  //       name: "typescript",
  //       size: "22px",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       size: "22px",
  //     },
  //     {
  //       name: "redux",
  //       size: "20px",
  //     },
  //   ],
  // },
];
