export * from "./animations";

export const IS_DEV = process.env.NODE_ENV !== "production";

export const pages = {
  HOME: "home",
  SKILLS: "skills",
  PROJECTS: "projects",
  CONTACT: "contacts",
} as const;

export const MAIN_COLOR = "#0f172a";
