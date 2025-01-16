import * as THREE from "three";

import { contacts, icons, skills } from "@/config/portfolio";

export type Skills = (typeof skills)[number];
export type Icons = (typeof icons)[number];
export type Contacts = (typeof contacts)[number];

export type ThreeGroupRef = THREE.Group | undefined;
