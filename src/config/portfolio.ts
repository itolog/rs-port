import { pages } from "@/constants";

export const portfolio = {
  title: {
    label: "Serhii Romanichenko",
    description: "Frontend Developer",
  },
  sections: [pages.HOME, pages.SKILLS, pages.PROJECTS, pages.CONTACT],
  sectionsTitle: {
    [pages.HOME]: "Front-end Development",
    [pages.SKILLS]: pages.SKILLS,
    [pages.PROJECTS]: pages.PROJECTS,
    [pages.CONTACT]: pages.CONTACT,
  },
  project: {
    portfolio: "/images/portfolio.webp",
    convert: "/images/convert.webp",
  },
};

export const skills = [
  "react",
  "next.js",
  "redux",
  "vue",
  "typescript",
  "apollo graphql",
  "Material UI",
  "Tailwind CSS",
  "Scss",
  "docker",
];

export const contacts = ["git", "linkedin"] as const;

export const icons = [...skills, ...contacts] as const;
