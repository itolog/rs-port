import { ObjectMap } from "@react-three/fiber";

import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF &
  ObjectMap & {
    nodes: {
      Cube008: THREE.Mesh;
      Cube008_1: THREE.Mesh;
      Cube008_2: THREE.Mesh;
      keyboard: THREE.Mesh;
      Cube002: THREE.Mesh;
      Cube002_1: THREE.Mesh;
      touchbar: THREE.Mesh;
    };
    materials: {
      aluminium: THREE.MeshStandardMaterial;
      ["matte.001"]: THREE.MeshStandardMaterial;
      ["screen.001"]: THREE.MeshStandardMaterial;
      keys: THREE.MeshStandardMaterial;
      trackpad: THREE.MeshStandardMaterial;
      touchbar: THREE.MeshStandardMaterial;
    };
  };
