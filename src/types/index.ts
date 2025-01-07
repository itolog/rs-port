import * as THREE from "three";

import { skills } from "@/config/portfolio";

export type Skills = (typeof skills)[number];

export type ThreeGroupRef = THREE.Group | undefined;
