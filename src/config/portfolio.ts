import { pages } from "@/constants";

export const portfolio = {
  title: {
    label: "Serhii Romanichenko",
    description: "Frontend Developer",
  },
  sections: [pages.HOME, pages.SKILLS, pages.PROJECTS, pages.CONTACT],
  sectionsTitle: {
    [pages.HOME]: "Serhii Romanichenko",
    [pages.SKILLS]: pages.SKILLS,
    [pages.PROJECTS]: pages.PROJECTS,
    [pages.CONTACT]: pages.CONTACT,
  },
};
